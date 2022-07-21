"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startHeartbeating = void 0;
const api_types_1 = require("@biscuit/api-types");
const types_1 = require("./types");
function startHeartbeating(shard, interval) {
    //   gateway.debug("GW HEARTBEATING_STARTED", { shardId, interval });
    shard.heart.interval = interval;
    // Only set the shard's state to `Unidentified`
    // if heartbeating has not been started due to an identify or resume action.
    if ([types_1.ShardState.Disconnected, types_1.ShardState.Offline].includes(shard.state)) {
        shard.state = types_1.ShardState.Unidentified;
    }
    // The first heartbeat needs to be send with a random delay between `0` and `interval`
    // Using a `setTimeout(_, jitter)` here to accomplish that.
    // `Math.random()` can be `0` so we use `0.5` if this happens
    // Reference: https://discord.com/developers/docs/topics/gateway#heartbeating
    const jitter = Math.ceil(shard.heart.interval * (Math.random() || 0.5));
    const it1 = setTimeout(() => {
        // Using a direct socket.send call here because heartbeat requests are reserved by us.
        shard.socket?.send(JSON.stringify({
            op: api_types_1.GatewayOpcodes.Heartbeat,
            d: shard.previousSequenceNumber,
        }));
        shard.heart.lastBeat = Date.now();
        shard.heart.acknowledged = false;
        // After the random heartbeat jitter we can start a normal interval.
        const it = setInterval(async () => {
            // gateway.debug("GW DEBUG", `Running setInterval in heartbeat file. Shard: ${shardId}`);
            // gateway.debug("GW HEARTBEATING", { shardId, shard: currentShard });
            // The Shard did not receive a heartbeat ACK from Discord in time,
            // therefore we have to assume that the connection has failed or got "zombied".
            // The Shard needs to start a re-identify action accordingly.
            // Reference: https://discord.com/developers/docs/topics/gateway#heartbeating-example-gateway-heartbeat-ack
            if (!shard.heart.acknowledged) {
                shard.close(types_1.ShardSocketCloseCodes.ZombiedConnection, 'Zombied connection, did not receive an heartbeat ACK in time.');
                return await shard.identify();
            }
            shard.heart.acknowledged = false;
            // Using a direct socket.send call here because heartbeat requests are reserved by us.
            shard.socket?.send(JSON.stringify({
                op: api_types_1.GatewayOpcodes.Heartbeat,
                d: shard.previousSequenceNumber,
            }));
            shard.heart.lastBeat = Date.now();
            shard.events.heartbeat?.(shard);
        }, shard.heart.interval);
        shard.heart.intervalId = it;
    }, jitter);
    shard.heart.timeoutId = it1;
}
exports.startHeartbeating = startHeartbeating;

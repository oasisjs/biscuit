import { GatewayIntents } from '../../../api-types/shared';
import { createLeakyBucket } from '../../util/bucket';
import { createShard } from '../shard/createShard';
import { Shard } from '../shard/types';
import { createGatewayManager, GatewayManager } from './gatewayManager';

/** Begin spawning shards. */
export function spawnShards(gateway: GatewayManager) {
    // PREPARES THE MAX SHARD COUNT BY CONCURRENCY
    // if (manager.resharding.useOptimalLargeBotSharding) {
    //   // gateway.debug("GW DEBUG", "[Spawning] Using optimal large bot sharding solution.");
    //   manager.manager.totalShards = manager.calculateTotalShards(
    //     manager,
    //   );
    // }

    // PREPARES ALL SHARDS IN SPECIFIC BUCKETS
    gateway.prepareBuckets();

    // SPREAD THIS OUT TO DIFFERENT WORKERS TO BEGIN STARTING UP
    gateway.buckets.forEach((bucket, bucketId) => {
        // gateway.debug("GW DEBUG", `2. Running forEach loop in spawnShards function.`);

        for (const worker of bucket.workers) {
            // gateway.debug("GW DEBUG", `3. Running for of loop in spawnShards function.`);

            for (const shardId of worker.queue) {
                gateway.tellWorkerToIdentify(worker.id, shardId, bucketId).catch(console.error);
            }
        }
    });
}

import { delay } from '../../util/delay';
import type { GatewayManager } from './gatewayManager';

export async function stop(
	gateway: GatewayManager,
	code: number,
	reason: string
) {
	// eslint-disable-next-line arrow-parens
	gateway.manager.shards.forEach((shard) => shard.close(code, reason));

	await delay(5000);
}

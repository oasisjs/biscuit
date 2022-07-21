/** Pause the execution for a given amount of milliseconds. */
export function delay(ms: number): Promise<void> {
	return new Promise((res): any =>
		setTimeout((): void => {
			res();
		}, ms)
	);
}

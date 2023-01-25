export const formatSecondsSince = (targetSec: number): string => {
	const sec = new Date().getTime() / 1000 - targetSec;
	const min = Math.floor(sec / 60);
	const hrs = Math.floor(min / 60);
	const days = Math.floor(hrs / 24);
	const yrs = Math.floor(days / 365);
	const time_in_units_arr: [string, number][] = [
		["minute", min],
		["hour", hrs],
		["day", days],
		["year", yrs],
	];
	const time_in_units = new Map(time_in_units_arr);
	let result = {
		unit: "minute",
		value: 1,
	};
	time_in_units.forEach((val, key) => {
		if (val > 0) {
			result.unit = key;
			result.value = val;
		}
	});
	if (result.value === 1) return `${result.value} ${result.unit}`;
	return `${result.value} ${result.unit}s`;
};

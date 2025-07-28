
// split users's input into "words" based on whitespace
// should also:
// 1. lowercase the input
// 2. trim any leading and trailing whitepsace
// 3. there will be case that there are more than one whitespace between the input
export function cleanInput(input: string): string[] {
	const words = input.toLowerCase().trim().split(" ");

	const elementToRemove = '';

	const finalWords = words.filter(word => word != elementToRemove);

	return finalWords;
}

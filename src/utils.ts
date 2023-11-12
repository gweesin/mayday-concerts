/**
 * Sleep for a given number of milliseconds
 * @param {number} ms The number of milliseconds to sleep
 */
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function minJumps(arr: number[]): number {
    const n = arr.length;
    if (n <= 1) return 0;

    const map: Map<number, number[]> = new Map();
    for (let i = 0; i < n; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], []);
        }
        map.get(arr[i])!.push(i);
    }

    const queue: [number, number][] = [[0, 0]]; // [index, steps]
    const visited: boolean[] = new Array(n).fill(false);
    visited[0] = true;

    while (queue.length > 0) {
        const [index, steps] = queue.shift()!;
        
        // Check if we've reached the last index
        if (index === n - 1) {
            return steps;
        }

        // Jump to index + 1
        if (index + 1 < n && !visited[index + 1]) {
            visited[index + 1] = true;
            queue.push([index + 1, steps + 1]);
        }

        // Jump to index - 1
        if (index - 1 >= 0 && !visited[index - 1]) {
            visited[index - 1] = true;
            queue.push([index - 1, steps + 1]);
        }

        // Jump to all indices with the same value
        if (map.has(arr[index])) {
            for (const nextIndex of map.get(arr[index])!) {
                if (nextIndex !== index && !visited[nextIndex]) {
                    visited[nextIndex] = true;
                    queue.push([nextIndex, steps + 1]);
                }
            }
            // Clear the map entry to avoid redundant checks
            map.delete(arr[index]);
        }
    }

    return -1; // In case there is no way to reach the last index (shouldn't happen given the problem constraints)
}

// Example usage:
const arr1 = [100, -23, -23, 404, 100, 23, 23, 23, 3, 404];
console.log(minJumps(arr1)); // Output: 3

const arr2 = [7];
console.log(minJumps(arr2)); // Output: 0

const arr3 = [7, 6, 9, 6, 9, 6, 9, 7];
console.log(minJumps(arr3)); // Output: 1

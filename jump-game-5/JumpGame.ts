function maxJumps(arr: number[], d: number): number {
    const n = arr.length;
    const memo = new Array(n).fill(-1);

    function dfs(i: number): number {
        if (memo[i] != -1) return memo[i];

        let maxJumps = 1;

        // Jump to the right
        for (let x = 1; x <= d && i + x < n && arr[i] > arr[i + x]; x++) {
            maxJumps = Math.max(maxJumps, 1 + dfs(i + x));
        }

        // Jump to the left
        for (let x = 1; x <= d && i - x >= 0 && arr[i] > arr[i - x]; x++) {
            maxJumps = Math.max(maxJumps, 1 + dfs(i - x));
        }

        memo[i] = maxJumps;
        return maxJumps;
    }

    let result = 0;
    for (let i = 0; i < n; i++) {
        result = Math.max(result, dfs(i));
    }

    return result;
}

// Example usage:
const arr1 = [6, 4, 14, 6, 8, 13, 9, 7, 10, 6, 12];
const d1 = 2;
console.log(maxJumps(arr1, d1)); // Output: 4

const arr2 = [3, 3, 3, 3, 3];
const d2 = 3;
console.log(maxJumps(arr2, d2)); // Output: 1

const arr3 = [7, 6, 5, 4, 3, 2, 1];
const d3 = 1;
console.log(maxJumps(arr3, d3)); // Output: 7

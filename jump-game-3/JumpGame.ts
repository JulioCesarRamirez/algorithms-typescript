function canReach(arr: number[], start: number): boolean {
    const n = arr.length;
    const visited = new Array(n).fill(false);
    const queue: number[] = [start];

    while (queue.length > 0) {
        const index = queue.shift()!;
        if (arr[index] === 0) {
            return true;
        }
        if (visited[index]) {
            continue;
        }
        visited[index] = true;

        const jumpForward = index + arr[index];
        const jumpBackward = index - arr[index];

        if (jumpForward < n && !visited[jumpForward]) {
            queue.push(jumpForward);
        }
        if (jumpBackward >= 0 && !visited[jumpBackward]) {
            queue.push(jumpBackward);
        }
    }

    return false;
}

// Example usage:
const arr1 = [4, 2, 3, 0, 3, 1, 2];
const start1 = 5;
console.log(canReach(arr1, start1)); // Output: true

const arr2 = [4, 2, 3, 0, 3, 1, 2];
const start2 = 0;
console.log(canReach(arr2, start2)); // Output: true

const arr3 = [3, 0, 2, 1, 2];
const start3 = 2;
console.log(canReach(arr3, start3)); // Output: false

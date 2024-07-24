function maxResult(nums: number[], k: number): number {
    const n = nums.length;
    const dp = new Array(n).fill(0);
    dp[0] = nums[0];

    // Deque to store indices
    const deque: number[] = [0];

    for (let i = 1; i < n; i++) {
        // Remove indices from deque that are out of the current window
        while (deque.length > 0 && deque[0] < i - k) {
            deque.shift();
        }

        // The current score is the value at the current index plus the max value in the window
        dp[i] = nums[i] + dp[deque[0]];

        // Maintain the deque: remove elements that are less than the current score
        while (deque.length > 0 && dp[deque[deque.length - 1]] <= dp[i]) {
            deque.pop();
        }

        // Add the current index to the deque
        deque.push(i);
    }

    return dp[n - 1];
}

// Example usage:
const nums1 = [1, -1, -2, 4, -7, 3];
const k1 = 2;
console.log(maxResult(nums1, k1)); // Output: 7

const nums2 = [10, -5, -2, 4, 0, 3];
const k2 = 3;
console.log(maxResult(nums2, k2)); // Output: 17

const nums3 = [1, -5, -20, 4, -1, 3, -6, -3];
const k3 = 2;
console.log(maxResult(nums3, k3)); // Output: 0

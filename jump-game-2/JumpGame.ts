function jump(nums: number[]): number {
    const n = nums.length;
    if (n <= 1) return 0;

    let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i < n - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (i == currentEnd) {
            jumps++;
            currentEnd = farthest;
            if (currentEnd >= n - 1) break;
        }
    }

    return jumps;
}

// Example usage:
const nums1 = [2, 3, 1, 1, 4];
console.log(jump(nums1)); // Output: 2

const nums2 = [2, 3, 0, 1, 4];
console.log(jump(nums2)); // Output: 2
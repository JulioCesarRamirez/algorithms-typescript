## 45. Jump Game II

You are given a 0-indexed array of integers `nums` of length `n`. You are initially positioned at `nums[0]`.

Each element `nums[i]` represents the maximum length of a forward jump from index `i`. In other words, if you are at `nums[i]`, you can jump to any `nums[i + j]` where:

- `0 <= j <= nums[i]` and
- `i + j < n`

Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

**Example 1:**

Input: nums = `[2,3,1,1,4]`
Output: `2`
Explanation: `The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.`

**Example 2:**

Input: `nums = [2,3,0,1,4]`
Output: `2`
 

**Constraints:**

- `1 <= nums.length <= 10^4`
- `0 <= nums[i] <= 1000`
- It's guaranteed that you can reach `nums[n - 1]`.

## Explanation:

**1. Initialization:**

- `n` is the length of the input array `nums`.
- If the length is 1 or less, no jumps are needed, so return `0`.
- Initialize `jumps` to count the number of jumps.
- `currentEnd` tracks the end of the range that can be reached with the current number of jumps.
- `farthest` tracks the farthest point that can be reached with the current jump.

**2. Iteration:**

- Iterate through the array `nums` except for the last element (since we're looking for the minimum jumps to the last index).
- Update `farthest` to the maximum distance that can be reached from the current index `i`.
- If i reaches `currentEnd`, increment the `jumps` counter and update `currentEnd` to `farthest`.
- If `currentEnd` reaches or exceeds the last index, break the loop as the goal is achieved.

**3. Return:**

- Return the jumps counter which gives the minimum number of jumps to reach the last index.
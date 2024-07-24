You are given a 0-indexed integer array `nums` and an integer `k`.

You are initially standing at index `0`. In one move, you can jump at most `k` steps forward without going outside the boundaries of the array. That is, you can jump from index i to any index in the range `[i + 1, min(n - 1, i + k)]` inclusive.

You want to reach the last index of the array `(index n - 1)`. Your score is the sum of all `nums[j]` for each index j you visited in the array.

Return the maximum score you can get.

Example 1:

Input: `nums = [1,-1,-2,4,-7,3], k = 2`
Output: `7`
Explanation: You can choose your jumps forming the subsequence `[1,-1,4,3]` (underlined above). The sum is `7`.

Example 2:

Input: `nums = [10,-5,-2,4,0,3], k = 3`
Output: `17`
Explanation: You can choose your jumps forming the subsequence `[10,4,3]` (underlined above). The sum is `17`.

Example 3:

Input: `nums = [1,-5,-20,4,-1,3,-6,-3], k = 2`
Output: `0`
 

Constraints:

`1 <= nums.length, k <= 10^5`
`-10^4 <= nums[i] <= 10^4`


## Explanation:

**1. Initialization:**

- `n` is the length of the `nums` array.
- `dp` is an array where `dp[i]` stores the maximum score to reach index i.
- `deque` is a double-ended queue that stores indices of the `dp` array. It helps to keep track of the maximum values within the window of size `k`.

**2. Dynamic Programming and Deque Maintenance:**

- Iterate through each index from `1` to `n-1`.
- Remove elements from the front of the deque if they are out of the window (i.e., their index is less than `i - k`).
- The current score `dp[i]` is the sum of `nums[i]` and the maximum value in the window, which is at the front of the deque.
- Remove elements from the back of the deque while they are less than or equal to the current `dp[i]` to maintain the deque in a decreasing order of values.
- Add the current index i to the deque.

**3. Return:**

- The last element in the `dp` array, `dp[n - 1]`, contains the maximum score to reach the last index.

This approach ensures an efficient solution with a time complexity of `O(n)` due to the maintenance of the deque.
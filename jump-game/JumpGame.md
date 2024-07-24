## 55. Jump Game

You are given an integer array `nums`. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return `true` if you can reach the last index, or `false` otherwise.

### Example 1:

Input: `nums = [2,3,1,1,4]`
Output: `true`
Explanation: `Jump 1 step from index 0 to 1, then 3 steps to the last index.`

### Example 2:

Input: `nums = [3,2,1,0,4]`
Output: `false`
Explanation: Y`ou will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.`

Constraints:

`1 <= nums.length <= 104`
`0 <= nums[i] <= 105`

## Solution 

### Explanation
**1. Initialization:**

- `maxReach` is initialized to 0.

**2. Iteration:**

- For each index `i` in the array:
    - If `i` is greater than maxReach, it means we cannot reach this index from any of the previous indices, so we return `false`.
    - Update `maxReach` to the maximum of `maxReach` and `i` + `nums[i]`.
    - If `maxReach` reaches or exceeds the last index (`nums.length - 1`), we return `true`.
    
**3. Final Check:**

- If the loop completes, we check if `maxReach` is greater than or equal to the last index.

**This solution runs in O(n) time complexity, where n is the length of the array, and it uses O(1) space complexity. This makes it efficient for large input sizes.**
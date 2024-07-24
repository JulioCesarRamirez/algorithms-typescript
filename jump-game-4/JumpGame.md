## 1345. Jump Game IV

Given an array of integers `arr`, you are initially positioned at the first index of the array.

In one step you can jump from index i to index:

- `i + 1` where: `i + 1 < arr.length`.
- `i - 1` where: `i - 1 >= 0`.
- `j` where: `arr[i] == arr[j]` and `i != j`.

Return the minimum number of steps to reach the last index of the array.

Notice that you can not jump outside of the array at any time.

**Example 1:**

Input: `arr = [100,-23,-23,404,100,23,23,23,3,404]`
Output: `3`
Explanation: `You need three jumps from index 0 --> 4 --> 3 --> 9. Note that index 9 is the last index of the array.`

**Example 2:**

Input: `arr = [7]`
Output: `0`
Explanation: `Start index is the last index. You do not need to jump.`

**Example 3:**

Input: arr = [7,6,9,6,9,6,9,7]
Output: 1
Explanation: `You can jump directly from index 0 to index 7 which is last index of the array.`
 
**Constraints:**

- `1 <= arr.length <= 5 * 10^4`
- `-108 <= arr[i] <= 10^8`

**Explanation:**

Breadth-First Search (BFS) approach. This approach will allow us to find the shortest path (minimum number of steps) to reach the last index of the array. We will also use a map to keep track of indices with the same value to efficiently handle jumps between indices with the same value.

**1. Initialization:**

- `n` is the length of the input array `arr`.
- A `map` is used to store indices for each value in the array.
- A `queue` is used for BFS, starting from index 0 with 0 steps.
`visited` array tracks which indices have been visited to prevent redundant checks.

**2. BFS Loop:**

- Dequeue an element from the `queue`.
- If the current index is the last index, return the number of steps.
- Enqueue the neighboring indices (index + 1, index - 1) if they are within bounds and not visited.
- Enqueue all indices with the same value as the current index if they are not visited.
- Clear the map entry for the current value to avoid redundant checks in future iterations.

**3. Return:**

- If the loop completes without finding the last index, return `-1` (though this shouldn't happen given the problem constraints).

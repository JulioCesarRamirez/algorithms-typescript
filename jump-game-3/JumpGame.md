## 1306. Jump Game III

Given an array of non-negative integers `arr`, you are initially positioned at `start` index of the array. When you are at index `i`, you can jump to `i + arr[i]` or `i - arr[i]`, check if you can reach any index with value 0.

Notice that you can not jump outside of the array at any time.

**Example 1:**

Input: `arr = [4,2,3,0,3,1,2], start = 5`
Output: `true`
Explanation: 
`All possible ways to reach at index 3 with value 0 are: 
index 5 -> index 4 -> index 1 -> index 3 
index 5 -> index 6 -> index 4 -> index 1 -> index 3`

**Example 2:**

Input: `arr = [4,2,3,0,3,1,2], start = 0`
Output: `true` 
Explanation: 
`One possible way to reach at index 3 with value 0 is:` 
`index 0 -> index 4 -> index 1 -> index 3`

**Example 3:**

Input: `arr = [3,0,2,1,2], start = 2`
Output: `false`
Explanation: `There is no way to reach at index 1 with value 0.`
 

**Constraints:**

- `1 <= arr.length <= 5 * 104`
- `0 <= arr[i] < arr.length`
- `0 <= start < arr.length`

## Explanation:

**1. Initialization:**

- `n` is the length of the input array `arr`.
- `visited` is an array to keep track of visited indices to avoid infinite loops.
- `queue` is initialized with the `start` index, and will be used to process each index in the BFS manner.

**2. BFS Loop:**

- While there are indices in the `queue`, process each index:
- If the value at the current index is 0, return `true` as we have reached the target.
- If the current index is already visited, continue to the next iteration.
- Mark the current index as visited.
- Calculate `jumpForward` and `jumpBackward` indices.
- If `jumpForward` is within bounds and not visited, add it to the queue.
- If `jumpBackward` is within bounds and not visited, add it to the queue.

**3. Return:**

- If the loop completes without finding a 0, return `false`. This means there is no way to reach an index with value 0 from the starting index.
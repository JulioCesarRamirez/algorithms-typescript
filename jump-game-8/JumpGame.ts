function minCostJump(nums: number[], costs: number[]): number {
    const n = nums.length;
    const minCosts = new Array(n).fill(Infinity);
    minCosts[0] = 0;
    
    // Priority queue to store the positions with their cumulative costs
    const heap = new MinHeap<{ index: number, cost: number }>((a, b) => a.cost - b.cost);
    heap.push({ index: 0, cost: 0 });

    while (!heap.isEmpty()) {
        const { index, cost } = heap.pop()!;

        // Try to jump to each index j from index
        for (let j = index + 1; j < n; j++) {
            if (nums[index] <= nums[j]) {
                // nums[index] <= nums[j] and all nums[k] < nums[index] for i < k < j
                let validJump = true;
                for (let k = index + 1; k < j; k++) {
                    if (nums[k] >= nums[index]) {
                        validJump = false;
                        break;
                    }
                }
                if (validJump && cost + costs[j] < minCosts[j]) {
                    minCosts[j] = cost + costs[j];
                    heap.push({ index: j, cost: minCosts[j] });
                }
            } else if (nums[index] > nums[j]) {
                // nums[index] > nums[j] and all nums[k] >= nums[index] for i < k < j
                let validJump = true;
                for (let k = index + 1; k < j; k++) {
                    if (nums[k] < nums[index]) {
                        validJump = false;
                        break;
                    }
                }
                if (validJump && cost + costs[j] < minCosts[j]) {
                    minCosts[j] = cost + costs[j];
                    heap.push({ index: j, cost: minCosts[j] });
                }
            }
        }
    }

    return minCosts[n - 1];
}

class MinHeap<T> {
    private heap: T[];
    private comparator: (a: T, b: T) => number;

    constructor(comparator: (a: T, b: T) => number) {
        this.heap = [];
        this.comparator = comparator;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    push(item: T) {
        this.heap.push(item);
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.heap[0];
        const end = this.heap.pop()!;
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown(0);
        }
        return result;
    }

    private bubbleUp(index: number) {
        const item = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (this.comparator(item, parent) >= 0) break;
            this.heap[index] = parent;
            index = parentIndex;
        }
        this.heap[index] = item;
    }

    private bubbleDown(index: number) {
        const length = this.heap.length;
        const item = this.heap[index];
        while (true) {
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;
            let swapIndex: number | null = null;

            if (leftIndex < length) {
                const left = this.heap[leftIndex];
                if (this.comparator(left, item) < 0) {
                    swapIndex = leftIndex;
                }
            }

            if (rightIndex < length) {
                const right = this.heap[rightIndex];
                if (
                    (swapIndex === null && this.comparator(right, item) < 0) ||
                    (swapIndex !== null && this.comparator(right, this.heap[swapIndex]) < 0)
                ) {
                    swapIndex = rightIndex;
                }
            }

            if (swapIndex === null) break;
            this.heap[index] = this.heap[swapIndex];
            index = swapIndex;
        }
        this.heap[index] = item;
    }
}

// Example usage:
const nums1 = [3, 2, 4, 4, 1];
const costs1 = [3, 7, 6, 4, 2];
console.log(minCostJump(nums1, costs1)); // Output: 8

const nums2 = [0, 1, 2];
const costs2 = [1, 1, 1];
console.log(minCostJump(nums2, costs2)); // Output: 2

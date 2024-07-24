function canReach(s: string, minJump: number, maxJump: number): boolean {
    const n = s.length;
    const queue: number[] = [0];
    let maxReach = 0;

    while (queue.length > 0) {
        const i = queue.shift()!;
        
        for (let j = Math.max(i + minJump, maxReach + 1); j <= Math.min(i + maxJump, n - 1); j++) {
            if (s[j] === '0') {
                if (j === n - 1) {
                    return true;
                }
                queue.push(j);
            }
        }
        maxReach = Math.min(i + maxJump, n - 1);
    }

    return false;
}

// Example usage:
const s1 = "011010";
const minJump1 = 2;
const maxJump1 = 3;
console.log(canReach(s1, minJump1, maxJump1)); // Output: true

const s2 = "01101110";
const minJump2 = 2;
const maxJump2 = 3;
console.log(canReach(s2, minJump2, maxJump2)); // Output: false

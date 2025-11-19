// Floyd’s Cycle Detection Algorithm (Tortoise & Hare)
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next)
    {
        slow=slow.next;
        fast=fast.next.next;
        if(slow === fast){
            return 1;
        }
        
    }
    return 0;
};

// Time Complexity: O(n)   
// Space Complexity: O(1)


var hasCycle = function(head) {
    const nodesSeen = new Set();
    let current = head;
    while (current !== null) {
        if (nodesSeen.has(current)) {
            return 1;
        }
        nodesSeen.add(current);
        current = current.next;
    }
    return 0;
};
// Time Complexity: O(n)   
// Space Complexity: O(n) due to the set                


var hasCycle = function(head) {
    if (head === null) return 0;            
    let slow = head;
    let fast = head.next;       
    while (fast !== null && fast.next !== null) {
        if (slow === fast) return 1;
        slow = slow.next;
        fast = fast.next.next;
    }   
    return 0;
};
// Time Complexity: O(n)   
// Space Complexity: O(1)       


var hasCycle = function(head) {
    let current = head; 
    while (current !== null) {
        if (current.visited) {
            return 1; 
        }
        current.visited = true;
        current = current.next;
    }
    return 0;
};
// Time Complexity: O(n)   
// Space Complexity: O(1)               


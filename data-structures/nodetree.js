class NodeTree {
    constructor(value) {
        // Each node has a value
        this.value = value;
        // Each node can have 0 or more children
        this._children = [];
        this._parent = null;
    }
    
    // children getter property that returns shallow copy of array of children
    get children() {
        return [...this._children];
    }

    // The height getter property is the edge count from farthest node to current node
    get height() {
        return nodeHeight(this);
    }

    get parent() {
        return this._parent;
    }

    // addChild property allows you to add children of same node type
    addChild(child) {
        if (Object.getPrototypeOf(child) !== Object.getPrototypeOf(this)) { throw new TypeError(`Children must be instance of ${this.constructor.name}`); }

        child._parent = this;
        this._children.push(child);
    }
        
    // removeChild property allows you to remove children from current node, returns removed child or null otherwise
    removeChild(child) {
        if (Object.getPrototypeOf(child) !== Object.getPrototypeOf(this)) { throw new TypeError(`Children must be instance of ${this.constructor.name}`); }

        const childIndex = this._children.indexOf(child);
        if (childIndex === -1) { return null; }

        const removedChild = this._children.splice(childIndex, 1)[0];
        removedChild._parent = null;

        return removedChild;
    }

    // search through self and children nodes and return matching node
    search(value, algorithm = 'bfs') {
        // allow for depth-first and breadth-first algorithms
        switch(algorithm) {
            case 'dfs':
                return depthFirstSearch(this, value);
            case 'bfs':
                return breadthFirstSearch(this, value);
            default:
                throw new Error('algorithm must be either "bfs" or "dfs"')
        }
    }
}

// O(n) height calculation, but makes adding and removing children O(1)
function nodeHeight(baseNode, height = 0) {
    // O(n) search
    const children = baseNode.children;
    if (children.length === 0) { return height; }

    return children.reduce((maxHeight, child) => {
        const childHeight = nodeHeight(child, height + 1);
        return (childHeight > maxHeight) ? childHeight : maxHeight;
    }, 0);
}

// TODO implement this using a stack
function depthFirstSearch(rootNode, value) {
    // create a stack and push root into the stack
    const stack = [rootNode];
    // while the stack is not empty pop elements
    while(stack.length !== 0) {
        // check if element has matching value, if so return
        const nextNode = stack.pop();
        if (nextNode.value === value) { return nextNode; }
        // push children into stack in reverse order of children array
        const nextNodeChildren = nextNode.children;
        for (let i = nextNodeChildren.length - 1; i >= 0; i--) {
            stack.push(nextNodeChildren[i]);
        }
    }
    // if no matching node was found, return null
    return null;

    /* Below is an implementation with recursion (execution context stack, so essentially same)

    // search current node
    if (rootNode.value === value) { return rootNode; }
    // return null if node has no children
    const children = rootNode.children;
    // recursively search each children in order
    // if found return value, else return null
    for (const child of children) {
        const foundNode = depthFirstSearch(child, value);
        if (foundNode !== null) { return foundNode; }
    }
    return null;

    */
}

function breadthFirstSearch(rootNode, value) {
    // create a queue
    // push self into queue
    const queue = [rootNode];
    // shift elements from queue, searching them and pushing any children into the queue
    while (queue.length !== 0) {
        // repeat untill queue is empty
        const nextNode = queue.shift();
        if (nextNode.value === value) { return nextNode; }
        nextNode.children.forEach(child => queue.push(child));
    }
    // if no item with a matching value was found return null
    return null;
}

module.exports = NodeTree;
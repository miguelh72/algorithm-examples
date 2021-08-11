const NodeTree = require('../../data-structures/nodetree.js');

test('Creating instance of tree and nodes', () => {
    const node1Value = {};
    const node2Value = {};
    const node1 = new NodeTree(node1Value);
    const node2 = new NodeTree(node2Value);

    expect(node1).toBeInstanceOf(NodeTree);
    expect(node1.value).toBe(node1Value);
    expect(node2.value).toBe(node2Value);

    expect(node1.parent).toBe(null);
    expect(node2.parent).toBe(null);

    expect(node1.children).toHaveLength(0);
    expect(node2.children).toHaveLength(0);

    expect(node1.height).toBe(0);
    expect(node2.height).toBe(0);

    const newNode1Value = {};
    node1.value = newNode1Value;

    expect(node1.value).toBe(newNode1Value);
});

test('edge cases', () => {
    const node1Value = {};
    const node2Value = {};
    const node1 = new NodeTree(node1Value);
    const node2 = { value: node2Value, children:[], height:0 };

    expect(() => node1.addChild(node2Value)).toThrow(TypeError);
    expect(() => node1.addChild(node2)).toThrow(TypeError);
    expect(() => node1.removeChild(5)).toThrow(TypeError);
    expect(() => node1.search(node1Value, 'super-fast')).toThrow(Error);

    // Node one was not affected by bad attempts
    expect(node1.value).toBe(node1Value);
    expect(node1.parent).toBe(null);
    expect(node1.children).toHaveLength(0);
    expect(node1.height).toBe(0);
});

test('Adding to tree and nodes', () => {
    const node1Value = {};
    const node2Value = {};
    const node1 = new NodeTree(node1Value);
    const node2 = new NodeTree(node2Value);

    node1.addChild(node2);

    expect(node1.value).toBe(node1Value);
    expect(node2.value).toBe(node2Value);

    expect(node1.parent).toBe(null);
    expect(node2.parent).toBe(node1);

    expect(node1.children).toHaveLength(1);
    expect(node1.children[0]).toBe(node2);
    expect(node2.children).toHaveLength(0);

    expect(node1.height).toBe(1);
    expect(node2.height).toBe(0);

    const node3Value = {};
    const node4Value = {};
    const node3 = new NodeTree(node3Value);
    const node4 = new NodeTree(node4Value);

    node1.addChild(node3);
    node3.addChild(node4);

    expect(node3.value).toBe(node3Value);
    expect(node4.value).toBe(node4Value);

    expect(node1.parent).toBe(null);
    expect(node2.parent).toBe(node1);
    expect(node3.parent).toBe(node1);
    expect(node4.parent).toBe(node3);

    expect(node1.children).toHaveLength(2);
    expect(node1.children).toContain(node2);
    expect(node1.children).toContain(node3);
    expect(node2.children).toHaveLength(0);
    expect(node3.children).toHaveLength(1);
    expect(node3.children).toContain(node4);
    expect(node4.children).toHaveLength(0);

    expect(node1.height).toBe(2);
    expect(node2.height).toBe(0);
    expect(node3.height).toBe(1);
    expect(node2.height).toBe(0);
});

test('Removing nodes', () => {
    const node1Value = {};
    const node2Value = {};
    const node3Value = {};
    const node4Value = {};
    const node1 = new NodeTree(node1Value);
    const node2 = new NodeTree(node2Value);
    const node3 = new NodeTree(node3Value);
    const node4 = new NodeTree(node4Value);
    node1.addChild(node2);
    node1.addChild(node3);
    node3.addChild(node4);

    node3.removeChild(node4);

    expect(node1.removeChild(node1)).toBe(null);
    expect(node3.value).toBe(node3Value);
    expect(node3.parent).toBe(node1);
    expect(node3.children).toHaveLength(0);
    expect(node3.height).toBe(0);
    expect(node1.height).toBe(1);
    expect(node4.parent).toBe(null);
    expect(node4.value).toBe(node4Value);
    expect(node4.children).toHaveLength(0);
    expect(node4.height).toBe(0);

    node1.removeChild(node2);

    expect(node1.children).toHaveLength(1);
    expect(node1.children).toContain(node3);
    expect(node1.height).toBe(1);

    node1.removeChild(node3);

    expect(node1.children).toHaveLength(0);
    expect(node1.height).toBe(0);
    expect(node1.value).toBe(node1Value);
});

test('depth-first search and breadth-first search', () => {
    const node1 = new NodeTree(1);
    const node2 = new NodeTree(2);
    const node3 = new NodeTree(3);
    const node4 = new NodeTree(4);
    node1.addChild(node2);
    node1.addChild(node3);
    node3.addChild(node4);

    expect(node1.search(5, 'dfs')).toBe(null);
    expect(node1.search(1, 'dfs')).toBe(node1);
    expect(node1.search(2, 'dfs')).toBe(node2);
    expect(node1.search(3, 'dfs')).toBe(node3);
    expect(node1.search(4, 'dfs')).toBe(node4);
    
    expect(node1.search(5, 'bfs')).toBe(null);
    expect(node1.search(1, 'bfs')).toBe(node1);
    expect(node1.search(2, 'bfs')).toBe(node2);
    expect(node1.search(3, 'bfs')).toBe(node3);
    expect(node1.search(4, 'bfs')).toBe(node4);
});

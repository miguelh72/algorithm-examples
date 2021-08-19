const Avl = require('../../data-structures/avl.js');

test('Instantiation and single node insertion', () => {
    const rootValue = 14;
    const childValueLeft = 7;
    const childValueRight = 27;

    // instantiate an empty tree
    let avlTreeRoot = new Avl();

    expect(avlTreeRoot.value).toBeNull();
    expect(avlTreeRoot.left).toBeNull();
    expect(avlTreeRoot.right).toBeNull();
    expect(avlTreeRoot.height).toBe(-1);
    expect(avlTreeRoot.balanceFactor).toBe(0);

    // add first value to an empty tree
    avlTreeRoot.insert(rootValue);

    expect(avlTreeRoot.value).toBe(rootValue);
    expect(avlTreeRoot.left).toBeNull();
    expect(avlTreeRoot.right).toBeNull();
    expect(avlTreeRoot.height).toBe(0);
    expect(avlTreeRoot.balanceFactor).toBe(0);

    // add first value at instantiation
    avlTreeRoot = new Avl(rootValue);

    expect(avlTreeRoot.value).toBe(rootValue);
    expect(avlTreeRoot.left).toBeNull();
    expect(avlTreeRoot.right).toBeNull();
    expect(avlTreeRoot.height).toBe(0);
    expect(avlTreeRoot.balanceFactor).toBe(0);

    // add left child to tree of one element
    avlTreeRoot.insert(childValueLeft);

    expect(avlTreeRoot.value).toBe(rootValue);
    expect(avlTreeRoot.left.value).toBe(childValueLeft);
    expect(avlTreeRoot.left).not.toBeNull();
    expect(avlTreeRoot.right).toBeNull();
    expect(avlTreeRoot.left.left).toBeNull();
    expect(avlTreeRoot.left.right).toBeNull();
    expect(avlTreeRoot.height).toBe(1);
    expect(avlTreeRoot.left.height).toBe(0);
    expect(avlTreeRoot.balanceFactor).toBe(-1);
    expect(avlTreeRoot.left.balanceFactor).toBe(0);


    // add right child to tree of one element
    avlTreeRoot = new Avl(rootValue);
    avlTreeRoot.insert(childValueRight);

    expect(avlTreeRoot.value).toBe(rootValue);
    expect(avlTreeRoot.right.value).toBe(childValueRight);
    expect(avlTreeRoot.left).toBeNull();
    expect(avlTreeRoot.right).not.toBeNull();
    expect(avlTreeRoot.right.left).toBeNull();
    expect(avlTreeRoot.right.right).toBeNull();
    expect(avlTreeRoot.height).toBe(1);
    expect(avlTreeRoot.right.height).toBe(0);
    expect(avlTreeRoot.balanceFactor).toBe(1);
    expect(avlTreeRoot.right.balanceFactor).toBe(0);
});

// test building larger balanced trees
test('larger balanced trees', () => {
    // build 3 node tree
    /*
            5
        4       6
    */
    let avlTree = new Avl(5);
    avlTree.insert(6);
    avlTree.insert(4);

    expect(avlTree.value).toBe(5);
    expect(avlTree.right.value).toBe(6);
    expect(avlTree.left.value).toBe(4);
    expect(avlTree.height).toBe(1);
    expect(avlTree.right.height).toBe(0);
    expect(avlTree.left.height).toBe(0);
    expect(avlTree.balanceFactor).toBe(0);
    expect(avlTree.right.balanceFactor).toBe(0);
    expect(avlTree.left.balanceFactor).toBe(0);

    // build 7 node tree
    /*
                    5
            3               7
        2       4       6       8
    */
    avlTree = new Avl(5);
    avlTree.insert(7);
    avlTree.insert(3);
    avlTree.insert(6);
    avlTree.insert(8);
    avlTree.insert(4);
    avlTree.insert(2);

    expect(avlTree.value).toBe(5);

    expect(avlTree.right.value).toBe(7);
    expect(avlTree.right.left.value).toBe(6);
    expect(avlTree.right.right.value).toBe(8);

    expect(avlTree.left.value).toBe(3);
    expect(avlTree.left.right.value).toBe(4);
    expect(avlTree.left.left.value).toBe(2);

    expect(avlTree.height).toBe(2);
    expect(avlTree.right.height).toBe(1);
    expect(avlTree.left.height).toBe(1);
    expect(avlTree.balanceFactor).toBe(0);
    expect(avlTree.right.balanceFactor).toBe(0);
    expect(avlTree.left.balanceFactor).toBe(0);
});

// test building unbalanced trees
test('building small unbalanced trees', () => {
    // build 3 node left-heavy tree: left-left case
    /*
                 5                  3
            3           =>      2       5
        2
    */
    avlTree = new Avl(5);
    avlTree.insert(3);
    avlTree.insert(2);

    expect(avlTree.value).toBe(3);

    expect(avlTree.right.value).toBe(5);
    expect(avlTree.left.value).toBe(2);

    expect(avlTree.height).toBe(1);
    expect(avlTree.right.height).toBe(0);
    expect(avlTree.left.height).toBe(0);

    expect(avlTree.balanceFactor).toBe(0);
    expect(avlTree.right.balanceFactor).toBe(0);
    expect(avlTree.left.balanceFactor).toBe(0);

    // build 3 node right-heavy tree: right-right case
    /*
        5                           6
            6           =>      5       7
                7
    */
    avlTree = new Avl(5);
    avlTree.insert(6);
    avlTree.insert(7);

    expect(avlTree.value).toBe(6);

    expect(avlTree.right.value).toBe(7);
    expect(avlTree.left.value).toBe(5);

    expect(avlTree.height).toBe(1);
    expect(avlTree.right.height).toBe(0);
    expect(avlTree.left.height).toBe(0);

    expect(avlTree.balanceFactor).toBe(0);
    expect(avlTree.right.balanceFactor).toBe(0);
    expect(avlTree.left.balanceFactor).toBe(0);

    // build 3 node left-heavy tree: left-right case
    /*
                5                   4
            3           =>      3       5
                4     
    */
    avlTree = new Avl(5);
    avlTree.insert(3);
    avlTree.insert(4);

    expect(avlTree.value).toBe(4);

    expect(avlTree.right.value).toBe(5);
    expect(avlTree.left.value).toBe(3);

    expect(avlTree.height).toBe(1);
    expect(avlTree.right.height).toBe(0);
    expect(avlTree.left.height).toBe(0);

    expect(avlTree.balanceFactor).toBe(0);
    expect(avlTree.right.balanceFactor).toBe(0);
    expect(avlTree.left.balanceFactor).toBe(0);

    // build 3 node right-heavy tree: right-left case
    /*
        5                           6
            7           =>      5       7
        6
    */
    avlTree = new Avl(5);
    avlTree.insert(7);
    avlTree.insert(6);

    expect(avlTree.value).toBe(6);

    expect(avlTree.right.value).toBe(7);
    expect(avlTree.left.value).toBe(5);

    expect(avlTree.height).toBe(1);
    expect(avlTree.right.height).toBe(0);
    expect(avlTree.left.height).toBe(0);

    expect(avlTree.balanceFactor).toBe(0);
    expect(avlTree.right.balanceFactor).toBe(0);
    expect(avlTree.left.balanceFactor).toBe(0);
});

// test large unbalanced tree
test('build larger unbalanced trees', () => {
    /*  1                                                                       4
            2                                                           2               5
                3                   =>                              1       3               6
                    4
                        5
                            6
    */
    let avlTree = new Avl();
    for (let i = 1; i <= 6; i++) {
        avlTree.insert(i);
    }

    expect(avlTree.value).toBe(4);
    expect(avlTree.right.value).toBe(5);
    expect(avlTree.height).toBe(2);
    expect(avlTree.balanceFactor).toBe(0);

    expect(avlTree.left.value).toBe(2);
    expect(avlTree.left.left.value).toBe(1);
    expect(avlTree.left.right.value).toBe(3);
    expect(avlTree.left.height).toBe(1);
    expect(avlTree.left.balanceFactor).toBe(0);

    expect(avlTree.right.value).toBe(5);
    expect(avlTree.right.left).toBeNull();
    expect(avlTree.right.right.value).toBe(6);
    expect(avlTree.right.height).toBe(1);
    expect(avlTree.right.balanceFactor).toBe(1);

    /*                              9                                                               
                                8                                                       
                            7
                        6
                    5                               => 
                4                                                                   6
            3                                                           4                       8        
        2                                                       2               5       7              9
    1                                                       1       3
    */
    avlTree = new Avl();
    for (let i = 9; i > 0; i--) {
        avlTree.insert(i);
    }

    expect(avlTree.value).toBe(6);
    expect(avlTree.height).toBe(3);
    expect(avlTree.balanceFactor).toBe(-1);

    expect(avlTree.left.value).toBe(4);
    expect(avlTree.left.left.value).toBe(2);
    expect(avlTree.left.right.value).toBe(5);
    expect(avlTree.left.height).toBe(2);
    expect(avlTree.left.balanceFactor).toBe(-1);

    expect(avlTree.left.left.left.value).toBe(1);
    expect(avlTree.left.left.right.value).toBe(3);
    expect(avlTree.left.right.left).toBeNull();
    expect(avlTree.left.right.right).toBeNull();

    expect(avlTree.right.value).toBe(8);
    expect(avlTree.right.left.value).toBe(7);
    expect(avlTree.right.right.value).toBe(9);
    expect(avlTree.right.height).toBe(1);
    expect(avlTree.right.balanceFactor).toBe(0);

    expect(avlTree.right.left.left).toBeNull();
    expect(avlTree.right.left.right).toBeNull();

    expect(avlTree.right.right.left).toBeNull();
    expect(avlTree.right.right.right).toBeNull();
});

// test repeat collisions


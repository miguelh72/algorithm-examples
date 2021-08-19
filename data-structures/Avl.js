class Avl {
    constructor(value) {
        this.root = new AvlNode(value);
    }

    get value() { return this.root.value; }

    get height() { return this.root.height; }

    get balanceFactor() { return this.root.balanceFactor; }

    get left() { return this.root.left; }

    get right() { return this.root.right; }

    insert(value) {
        // update root to handle root rotations - main purpose of this class
        this.root = this.root.insert(value);
    }
}

class AvlNode {
    constructor(value) {
        this.value = value ?? null;
        this.left = null;
        this.right = null;
        this.height = (value === undefined) ? -1 : 0;
        this.balanceFactor = 0;
    }

    // always return new root, even if rotation occured
    insert(value) {
        // if this.value is null, assign the value to this node
        if (this.value === null) {
            this.value = value;
        } else if (value <= this.value) {
            if (this.left === null) {
                // if left node is null, create new node as the left node
                this.left = new AvlNode(value);
            } else {
                // else call insert method on left node
                this.left = this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                // if right node is null, create a new node as the right node
                this.right = new AvlNode(value);
            } else {
                // else call insert method on right node
                this.right = this.right.insert(value);
            }
        }

        // update this node
        this._update();

        // balance this node
        return this._balance();
    }

    _update() {
        // calculate height and reassign this.height
        const leftHeight = (this.left === null) ? -1 : this.left.height;
        const rightHeight = (this.right === null) ? -1 : this.right.height;
        this.height = Math.max(leftHeight, rightHeight) + 1;

        // calculate balance factor and reassign this.balanceFactor
        this.balanceFactor = rightHeight - leftHeight;
    }

    _balance() {
        let root = this;

        // if balance factor is equal to 2, right-heavy
        if (this.balanceFactor === 2) {
            if (this.right.left === null || (this.right.right !== null && this.right.right.height > this.right.left.height)) {
                // if the right node has a larger heigh in its right node, then perform left rotation
                root = this._leftRotate();
            } else {
                // else perform right rotation about the right node, and then left rotation
                this.right = this.right._rightRotate();
                root = this._leftRotate();
            }
        }
        // if balance factor is equal to -2, left-heavy
        if (this.balanceFactor === -2) {
            if (this.left.right === null || (this.left.left !== null && this.left.left.height > this.left.right.height)) {
                // if the left node has a larger height in its left node, then perform right rotation
                root = this._rightRotate();
            } else {
                // else perform left rotation about the left node, and then right rotation
                this.left = this.left._leftRotate();
                root = this._rightRotate();

            }
        }

        // return new base root
        return root;
    }

    _rightRotate() {
        // temporarily hold references to left node
        const left = this.left;
        // swap left.right with the current node and current.left with left.right
        [left.right, this.left] = [this, this.left.right];
        // update this and previously left node
        this._update();
        left._update();
        // return left node
        return left;
    }

    _leftRotate() {
        // temporarily hold reference to right node
        const right = this.right;
        // swap right.left with current node and current.right with right.left
        [right.left, this.right] = [this, right.left];
        // update this and previously right node
        this._update();
        right._update();
        // return right node
        return right;
    }
}

module.exports = Avl;
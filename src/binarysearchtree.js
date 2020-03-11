function BinarySearchTree () {
    //属性
    this.root = null;
    //节点
    function Node (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    //方法
    //1.插入数据: 对外方法
    BinarySearchTree.prototype.insert = function (key) {
        //1.1根据 key 创建节点
        var newNode = new Node(key);

        //1.2判断根节点是否有值
        if (this.root == null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);  //调用内部插入数据方法
        }
    }

    //插入数据: 内部方法: 递归
    BinarySearchTree.prototype.insertNode = function (node, newNode) {
        if (newNode.key < node.key) {    //向左查找
            if (node.left == null) {
                node.left = newNode;  //赋值
            } else {
                this.insertNode(node.left, newNode);  //递归
            }
        } else {    //向右查找
            if (node.right == null) {
                node.right = newNode;  //赋值
            } else {
                this.insertNode(node.right, newNode);  //递归
            }
        }
    }

    //树的遍历
    //1.先序遍历: 外部方法
    BinarySearchTree.prototype.preOrderTraversal = function (handler) {
        this.preOrderTraversalNode(this.root,handler);
    }

    //先序遍历: 内部方法: 递归
    BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
        if (node != null) {
            //1.处理经过的节点
            handler(node.key);

            //2.处理左子树中的节点
            this.preOrderTraversalNode(node.left, handler);

            //3.处理右子树中的节点
            this.preOrderTraversalNode(node.right, handler);
        }
    }

    //2.中序遍历: 外部方法
    BinarySearchTree.prototype.midOrderTraversal = function (handler) {
        this.midOrderTraversalNode(this.root, handler);
    }

    //中序遍历: 内部方法: 递归
    BinarySearchTree.prototype.midOrderTraversalNode = function (node, handler) {
        if (node != null) {
            //1.处理左子树中的节点
            this.midOrderTraversalNode(node.left, handler);

            //2.处理经过节点
            handler(node.key);

            //3.处理右子树中的节点
            this.midOrderTraversalNode(node.right, handler);
        }
    }

    //3.后序遍历: 外部方法
    BinarySearchTree.prototype.postOrderTraversal = function (handler) {
        this.postOrderTraversalNode(this.root, handler);
    }

    //后序遍历: 内部方法: 递归
    BinarySearchTree.prototype.postOrderTraversalNode = function (node, handler) {
        if (node != null) {
            //1.处理左子树中的节点
            this.postOrderTraversalNode(node.left, handler);

            //2.处理右子树中的节点
            this.postOrderTraversalNode(node.right, handler);

            //3.处理经过的节点
            handler(node.key);
        }
    }

    //寻找最值
    //1.寻找最大值
    BinarySearchTree.prototype.max = function () {
        //获取根节点
        var node = this.root;

        //依次不断向右, 直到节点为 null
        var key = null;
        while (node != null) {
            key = node.key;
            node = node.right;
        }

        return key;
    }

    //2.寻找最小值
    BinarySearchTree.prototype.min = function () {
        //获取根节点
        var node = this.root;

        //依次不断向左, 直到节点为 null
        var key = null;
        while (node != null) {
            key = node.key;
            node = node.left;
        }

        return key;
    }

    //搜索 key 循环写法
    BinarySearchTree.prototype.search = function (key) {
        //获取根节点
        var node = this.root;

        //循环搜索 key
        while (node != null) {
            if (key < node.key) {
                node = node.left;
            } else if (key > node.key) {
                node = node.right;
            } else {
                return true;
            }
        }

        return false;
    }
}

let bst = new BinarySearchTree();

bst.insert(20);
bst.insert(21);
bst.insert(22);
bst.insert(19);
bst.insert(29);
bst.insert(25);
bst.insert(24);
bst.insert(17);

let resultString = "";
bst.postOrderTraversal(function (key) {
    resultString += key + " ";
});
console.log(resultString);

console.log(bst.max());
console.log(bst.min());
console.log(bst.search(22));
console.log(bst.search(99));
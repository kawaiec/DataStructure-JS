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

    //删除节点
    BinarySearchTree.prototype.remove = function (key) {
        //1.寻找要删除的节点
        //1.1定义变量, 保存信息
        var current = this.root;
        var parent = null;
        var isLeftChild = true;

        //1.2开始寻找删除节点
        while (current.key != key) {
            parent = current;
            if (key < current.key) {
                isLeftChild = true;
                current = current.left;
            } else {
                isLeftChild = false;
                current = current.right;
            }

            //没有找到节点
            if (current == null) {
                return false;
            }
        }

        //2.根据对应的情况删除节点
        //此时 current.key == key
        //2.1删除的节点是叶子节点(无子节点)
        if (current.left == null && current.right == null) {
            if (current == this.root) {
                this.root = null;
            } else if (isLeftChild) {
                parent.left = null;
            } else {
                parent.right = null;
            }
        }
        //2.2删除的节点有一个子节点
        else if (current.right == null) {  //要删除节点的右节点为空
            if (current == this.root) {    //要删除的是根节点
                this.root = current.left;
            } else if (isLeftChild) {
                parent.left = current.left;
            } else {
                parent.right = current.left;
            }
        } else if (current.left == null) {  //要删除节点的左节点为空
            if (current == this.root) {    //要删除的是根节点
                this.root = current.right;
            } else if (isLeftChild) {
                parent.left = current.right;
            } else {
                parent.right = current.right;
            }
        }

        //2.3删除的节点有两个子节点
        else {
            //1.获取后继节点
            var successor = this.getSuccessor(current);

            //2.判断是否是根节点
            if (current == this.root) {
                this.root = successor;
            } else if (isLeftChild) {
                parent.left = successor;
            } else {
                parent.right = successor;
            }

            //3.删除节点的左子树 = current.left
            successor.left = current.left;
        }
    }

    //寻找后继的方法
    BinarySearchTree.prototype.getSuccessor = function (delNode) {
        //1.定义变量, 保存找到的后继
        var successor = delNode;
        var current = delNode.right;
        var successorParent = delNode;

        //2.循环查找
        while (current != null) {
            successorParent = successor;     //保存后继的父节点
            successor = current;
            current = current.left;
        }

        //3.判断寻找到的后继节点是否为 delNode 的 right 节点
        if (successor != delNode.right) {
            successorParent.left = successor.right;
            successor.right = delNode.right;
        }

        return successor;
    }
}

let bst = new BinarySearchTree();
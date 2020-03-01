function DoubleLinkedList () {
    //内部类: Node
    function Node (data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
    
    //属性
    this.head = null;
    this.tail = null;
     this.length = 0;


     //1.追加方法
     DoubleLinkedList.prototype.append = function (data) {
         //1.创建新节点
         let newNode = new Node(data);

         //2.判断添加的是否是第一个节点
         if (this.length == 0) {
             this.head = newNode;
             this.tail = newNode;
         } else {
             newNode.prev = this.tail;
             this.tail.next = newNode;
             this.tail = newNode;
         }

         //3.length + 1
         this.length += 1;
     }

     //2.将链表准换成字符串形式
     //2.1toString 方法
     DoubleLinkedList.prototype.toString = function () {
         return this.backwardString();    //toString 方法从前向后遍历
     }

     //2.2forwardString 方法
     DoubleLinkedList.prototype.forwardString = function () {
         //1.定义变量
         let current = this.tail;
         let resultString = '';

         //2.依次向前遍历,获取每一个节点
         while (current) {
             resultString += current.data + ' ';
             current = current.prev;
         }

         return resultString;
     }
     //2.3backwardString 方法
     DoubleLinkedList.prototype.backwardString = function () {
         //1.定义变量
         let current = this.head;
         let resultString = '';

         //2.依次向后遍历,获取每一个节点
         while (current) {
             resultString += current.data + ' ';
             current = current.next;
         }

         return resultString;
     }

     //3.insert 方法
     DoubleLinkedList.prototype.insert = function (position, data) {
         //1.越界判断
         if (position < 0 || position > this.length) {
             return false;
         }

         //2.创建新节点
         let newNode = new Node(data);

         //3.插入新节点
         if (this.length == 0) {
             this.head = newNode;
             this.tail = newNode;
         } else {
            if (position == 0) {    //在第一项插入
                this.head.prev = newNode;    //原第一个节点的 prev 指向新加入的节点
                newNode.next = this.head;    //新加入的节点的 next 指向原第一个节点
                this.head = newNode;    //head 指向新节点
            } else if (position == this.length) {    //在末尾添加
                newNode.prev = this.tail;
                this.tail.next = newNode;
                this.tail = newNode; 
            } else {   //其他情况
                let current = this.head;
                let index = 0;

                while (index++ < position) {
                    current = current.next;
                }

                //修改指针
                newNode.next = current;
                newNode.prev = current.prev;
                current.prev.next = newNode;
                current.prev = newNode;
            }
         }

         //4.length + 1
         this.length += 1;

         return true;
     }
}

let dll = new DoubleLinkedList();
dll.append(1);
dll.append(2);
dll.append(3);
dll.append(4);


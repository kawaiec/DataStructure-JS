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

     //4.get 方法
     DoubleLinkedList.prototype.get = function (position) {
         //1.越界判断
         if (position < 0 || position >= this.length) {
             return null;
         }

         //2.获取元素
         let current = this.head;
         let index = 0;

         while (index++ < position) {
             current = current.next;
         }

         return current.data;
     }

     //5.indexOf 方法
     DoubleLinkedList.prototype.indexOf = function (data) {
         //1.定义变量
         let current = this.head;
         let index = 0;

         //2.查找节点
         while (current) {
             if (current.data == data) {
                 return index;
             } else {
                 current = current.next;
                 index += 1;
             }
         }

         return -1;
     }

     //6.update 方法
     DoubleLinkedList.prototype.update = function (position, newData) {
         //1.越界判断
         if (position < 0 || position >= this.length) {
             return false;
         }

         //2.寻找节点
         let current = this.head;
         let index = 0;
         while (index++ < position) {
             current = current.next;
         }

         //3.修改节点
         current.data = newData;

         return true;
     }
     
     //7.removeAt 方法
     DoubleLinkedList.prototype.removeAt = function (position) {
         //1.越界判断
         if (position < 0 || position >= this.length) {
             return false;
         }

         //2.删除
         let current = this.head;
         if (this.length == 1) {    //判断链表中是否只有一个节点
             this.head = null;
             this.tail = null;
         } else {
            if (position == 0) {    //判断删除的是否是第一个节点
                this.head.next.prev = null;
                this.head = this.head.next;
            } else if (position == this.length - 1) {    //判断删除是否是最后一个节点
                current = this.tail;
                this.tail.prev.next = null;
                this.tail = this.tail.prev;
            } else {    //其他情况
                let index = 0;

                while (index++ < position) {
                    current = current.next;
                }

                current.prev.next = current.next;
                current.next.prev = current.prev;
            }
         }

         //3.length - 1
         this.length - 1;

         return current.data;
     }

     //8.remove 方法
     DoubleLinkedList.prototype.remove = function (data) {
         //1.根据 data 获取索引
         let index = this.indexOf(data);

         //2.根据 index 删除对应位置的节点
        return this.removeAt(index);
     }

     //9.isEmpty 方法
     DoubleLinkedList.prototype.isEmpty = function () {
         return this.length == 0;
     }

     //10.size 方法
     DoubleLinkedList.prototype.size = function () {
         return this.length;
     }

     //11.获取链表的第一个元素
     DoubleLinkedList.prototype.getHead = function () {
         return this.head.data;
     }

     //12.获取链表的最后一个元素
     DoubleLinkedList.prototype.getTail = function () {
        return this.tail.data;
     }
}

let dll = new DoubleLinkedList();


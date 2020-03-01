function LinkedList () {
    //内部类:节点类
    function Node (data) {
        this.data = data;
        this.next = null;
    }

    //属性
    this.head = null;
    this.length = 0;

    //1.追加方法
    LinkedList.prototype.append = function (data) {
        //1.创建新节点
        let newNode = new Node(data);

        //2.判断添加的是否是第一个节点
        if (this.length == 0) {  //是第一个节点
            this.head = newNode;
        } else {
            //找到最后一个节点
            let current = this.head;
            while (current.next) {    //判断当前节点是否为最后一个节点
                current = current.next;  //不是最后一个的话就向后找
            }
            //让最后节点的 next 指向最后一个节点
            current.next = newNode;
        }
        //3.长度+1
        this.length += 1;
    }

    //2.toString 方法
    LinkedList.prototype.toString = function () {
        //1.定义变量
        let current = this.head;
        let listString = '';

        //2.循环获取每一个节点
        while (current) {
            listString += current.data + ' ';
            current = current.next;
        }
        return listString
    }

    //3.insert方法:在任意位置插入值
    LinkedList.prototype.insert = function (position, data) {
        //1.对 position 进行越界判断
        if (position < 0 || position > this.length) {
            return false;
        }

        //2.创建新节点
        let newNode = new Node(data);
        
        //3.插入节点
        if (position == 0) {
            newNode.next = this.head;   //先让新节点获取指向第一个节点的指针
            this.head = newNode;    //再让 head 指向新节点
        } else {
            let index = 0;
            let current = this.head;
            let previous = null;
            while (index++ < position) {    //先判断再+1
                previous = current;
                current = current.next;
            }

            newNode.next = current; 
            previous.next = newNode;
        }

        //4.长度+1
        this.length += 1; 

        return true;
    }

    //4.get方法
    LinkedList.prototype.get = function (position) {
        //1.越界判断
        if (position < 0 || position > this.length - 1) {
            return null;
        }

        //2.获取对应 Node
        let current = this.head;
        let index = 0;
        while (index < position) {
            current = current.next;
            index++;
        }

        return current.data;
    }

    //5.indexOf方法
    LinkedList.prototype.indexOf = function (data) {
        //1.定义变量
        let current = this.head;
        let index = 0;
        
        //2.查找
        while (current) {
            if (current.data == data){
                return index;
            } else {
                current = current.next;
                index += 1;
            }
        }

        //3.没找到返回 -1
        return -1;
    }

    //6.update 方法
    LinkedList.prototype.updata = function (position, newData) {
        //1.越界判断
        if (position < 0 || position >= this.length) {
            return false;
        }

        //2.查找正确节点,类似 get 方法
        let current = this.head;
        let index = 0;
        while (index < position) {
            current = current.next;
            index++;
        }

        //3.修改 data
        current.data = newData;
        return true;
    }

    //7.removeAt 方法
    LinkedList.prototype.removeAt = function (position) {
        //1.越界判断
        if (position < 0 || position >= this.length) {
            return null;
        }

        //2.判断删除的是否是第一个节点
        let current = this.head;    //定义在外部方便 return 
        if (position == 0) {
            this.head = this.head.next;
        } else {
            let previous = null;    //前一个节点默认为 null
            let index = 0;
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            //前一个节点的 next 指向后一个节点的 next
            //不被任何节点指向的节点会被自动回收
            previous.next = current.next;
        }

        this.length -= 1;

        return current.data;
    }

    //8.remove 方法
    LinkedList.prototype.remove = function (data) {
        //1.获取 data 在链表中的位置
        let position = this.indexOf(data);

        //2.根据位置信息删除节点
        return this.removeAt(position);
    }

    //9.isEmpty 方法
    LinkedList.prototype.isEmpty = function () {
        return this.length == 0;
    }

    //10.size 方法
    LinkedList.prototype.size = function () {
        return this.length;
    }
}

const linkedlist = new LinkedList();
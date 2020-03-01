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

        //2.获取对应 data 
        let current = this.head;
        let index = 0;
        while (index < position) {
            current = current.next;
            index++;
        }

        return current.data;
    }
}

const linkedlist = new LinkedList();

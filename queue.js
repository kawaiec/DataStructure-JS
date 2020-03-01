function Queue() {
    //属性
    this.items = [];

    //方法
    //1.加入元素
    Queue.prototype.enqueue = function (element) {
        this.items.push(element);
    }

    //2.删除最前端元素
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    }

    //3.查看第一个元素
    Queue.prototype.front = function () {
        return this.items[0];
    }

    //4.查看队列是否为空
    Queue.prototype.isEmpty = function () {
        return this.items.length == 0;
    }

    //5.查看队列中元素个数
    Queue.prototype.size = function () {
        return this.items.length;
    }

    //6.toString方法
    Queue.prototype.toString = function () {
        resultString = '';
        for (let index = 0; index < this.items.length; index++) {
            resultString += this.items[index] + ' '
        }
        return resultString;
    }
}

let q = new Queue();
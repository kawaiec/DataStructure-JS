function PriorityQueue() {

    //定义一个包含优先级和值元素的队列元素
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    //封装属性
    this.items = [];

    //插入方法(其他方法和普通队列一样)
    PriorityQueue.prototype.enqueue = function (element, priority) {
        //创建 QueueElement 对象
        let queueElement = new QueueElement(element, priority);

        //2.判断队列是否为空
        if (this.items.length == 0) {
            this.items.push(queueElement);
        } else {    //不为空的话就一个一个比较优先级
            let added = false;
            for (let index = 0; index < this.items.length; index++) {
                if (queueElement.priority < this.items[index].priority) {     //优先级进行比较
                    this.items.splice(index, 0, queueElement);
                    added = true;
                    break;
                }
            }

            if (!added) {
                this.items.push(queueElement);
            }
        }
    }

    //2.删除最前端元素
    PriorityQueue.prototype.dequeue = function () {
        return this.items.shift();
    }

    //3.查看第一个元素
    PriorityQueue.prototype.front = function () {
        return this.items[0];
    }

    //4.查看队列是否为空
    PriorityQueue.prototype.isEmpty = function () {
        return this.items.length == 0;
    }

    //5.查看队列中元素个数
    PriorityQueue.prototype.size = function () {
        return this.items.length;
    }

    //6.toString方法
    PriorityQueue.prototype.toString = function () {
        resultString = '';
        for (let index = 0; index < this.items.length; index++) {
            resultString += this.items[index].element + '-' + this.items[index].priority + '  '
        }
        return resultString;
    }

    
}

let pq = new PriorityQueue();
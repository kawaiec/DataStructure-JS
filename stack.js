function Stack() {
    //栈的属性
    this.items = [];

    //栈的操作
    //1.放入元素
    Stack.prototype.push = function (element) {
        this.items.push(element);
    }

    //2.取出
    Stack.prototype.pop = function () {
        return this.items.pop();
    }

    //3.查看栈顶元素
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    }

    //4.判断栈是否为空
    Stack.prototype.isEmpty = function () {
        return this.items.length == 0;
    }

    //5.获取栈中元素个数
    Stack.prototype.size = function () {
        return this.items.length;
    }

    //6.toString 方法
    Stack.prototype.toString = function () {
        resultString = '';
        for (let index = 0; index < this.items.length; index++) {
            resultString += this.items[index] + ' '
        }
        return resultString;
    }
}

let s = new Stack();
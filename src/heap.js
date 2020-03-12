function Heap() {
    //属性
    this.array = [];
    this.count = 0;


    //toString 方法
    Heap.prototype.toString = function () {
        var str = "";
        for (var i = 1; i < this.array.length - 1; i++) {
            str += this.array[i] + " ";
        }
        return str;
    }

    //方法
    //1.插入元素并进行堆化
    Heap.prototype.insert = function (data) {
        this.array[++this.count] = data;
        this.heapToTop(this.count);
    }

    //堆化方法: 自底向上
    Heap.prototype.heapToTop = function (end) {
        var i = end;
        while (Math.floor(i / 2) > 0 && this.array[Math.floor(i / 2)] < this.array[i]) {
            this.swap(Math.floor(i / 2), i);
            i = Math.floor(i / 2);
        }
    }

    //交换两个数据位置的方法
    Heap.prototype.swap = function (m, n) {
        var temp = this.array[m];
        this.array[m] = this.array[n];
        this.array[n] = temp;
    }

    //2.删除堆顶元素并进行堆化

    //堆化方法: 自顶向下
    Heap.prototype.heapToBottom = function (begin, end) {
        while (true) {
            //定义最大值的下标
            var maxPosition = begin;

            //当前节点与其左右子节点比较, 找出最大值
            if (2 * begin <= end && this.array[maxPosition] < this.array[2 * begin]) {
                maxPosition = 2 * begin;
            }
            if (2 * begin + 1 <= end && this.array[maxPosition] < this.array[2 * begin + 1]) {
                maxPosition = 2 * begin + 1;
            }
            if (begin == maxPosition) {
                break;
            }
            this.swap(begin, maxPosition);
            begin = maxPosition;
        }
    }

    //删除堆顶元素
    Heap.prototype.removeTop = function () {
        var max = this.array[1];
        this.array[1] = this.array[this.count--];
        this.heapToBottom(1, this.count);

        return max;
    }

    //堆排序
    Heap.prototype.heapSort = function() {
        //建堆
        var n = this.count;
        for (var i = Math.floor(n/2); i > 0; i--) {
            this.heapToBottom(i, n);
        }

        //排序
        while (n > 1) {
            this.swap(1, n);
            this.heapToBottom(1, --n);
        }
    }

}

var heap = new Heap();
heap.insert(100);
heap.insert(200);
heap.insert(22);
heap.insert(12);
heap.insert(21);
heap.insert(23);
heap.insert(112);
heap.insert(2);
heap.insert(22);

heap.insert(1);
console.log(heap);
console.log(heap.toString());
heap.heapSort();
console.log(heap);
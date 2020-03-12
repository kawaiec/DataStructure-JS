function Heap () {
    //属性
    this.array = [];
    this.count = 0;


    //toString 方法
    Heap.prototype.toString = function () {
        return this.array.toString();
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
        while (Math.floor(i/2) > 0 && this.array[Math.floor(i/2)] < this.array[i]) {
            this.swap(Math.floor(i/2), i);
            i = Math.floor(i/2);
        }
    }

    //交换两个数据位置的方法
    Heap.prototype.swap = function (m, n) {
        var temp = this.array[m];
        this.array[m] = this.array[n];
        this.array[n] = temp;
    }
}

let heap = new Heap();
heap.insert(12);
heap.insert(22);
heap.insert(5);
heap.insert(2);
heap.insert(55);
heap.insert(99);
heap.insert(1000);
heap.insert(20);
heap.insert(77);
// heap.insert(100);
console.log(heap);
console.log(heap.toString());
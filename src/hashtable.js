//哈希表: 链地址法
function HashTable(length) {
    //属性
    this.storage = [];
    //表中已存放的元素个数
    this.count = 0;
    //哈希表的总长度
    this.limit = length;


    //方法
    //哈希函数: 字符串, 数组大小
    HashTable.prototype.hashFunc = function (str, size) {
        var hashCode = 0;

        //霍纳算法计算 hashCode, 使用 utf-8 编码
        for (var i = 0; i < str.length; i++) {
            //常数固定使用 37
            var hashCode = 37 * hashCode + str.charCodeAt(i);
        }

        //取余操作
        var index = hashCode % size;
        return index;
    }

    //插入与修改操作
    HashTable.prototype.put = function (key, value) {
        //1.根据 key 获取 index
        var index = this.hashFunc(key, this.limit);

        //2.根据 index 取出对应的 bucket
        var bucket = this.storage[index];

        //3.判断 bucket 是否为 null
        if (bucket == null) {
            bucket = [];
            this.storage[index] = bucket;
        }

        //4.判断是否为修改数据
        for (var i = 0; i < bucket.length; i++) {
            var tuple = bucket[i];
            if (tuple[0] == key) {
                tuple[1] = value;
                return
            }
        }

        //5.进行添加操作
        bucket.push([key, value]);
        this.count += 1;

        //6.判断是否需要扩容
        if (this.count > this.limit * 0.75) {
            var newSize = this.limit * 2;
            var newPrime = this.getPrime(newSize);
            this.resize(newPrime);
        }
    }

    //获取操作
    HashTable.prototype.get = function (key) {
        //1.根据 key 获取 index
        var index = this.hashFunc(key, this.limit);

        //2.根据 index 取出 bucket
        var bucket = this.storage[index];

        //3.判断 bucket 是否为 null
        if (bucket == null) {
            return null;
        }

        //4.在 bucket 中线性查找
        for (var i = 0; i < bucket.length; i++) {
            var tuple = bucket[i];
            if (tuple[0] == key) {
                return tuple[1];
            }
        }

        //5.没有找到 key, 返回 null
        return null;
    }

    //删除操作
    HashTable.prototype.remove = function (key) {
        //1.根据 key 获取 index
        var index = this.hashFunc(key, this.limit);

        //2.根据 index 取出 bucket
        var bucket = this.storage[index];

        //3.判断 bucket 是否为 null
        if (bucket == null) {
            return null;
        }

        //4.在 bucket 中线性查找, 并且删除
        for (var i = 0; i < bucket.length; i++) {
            var tuple = bucket[i];
            if (tuple[0] == key) {
                bucket.splice(i, 1); //从下标为 i 的位置删除一个元素
                this.count--;
                return tuple[1]; //返回 value

                //缩小容量(最小也不会小于创建时的容量)
                if (this.limit > length && this.count < this.limit * 0.25) {
                    var newSize = Math.floor(this.limit / 2);
                    var newPrime = this.getPrime(newSize);
                    this.resize(newPrime);
                }
            }
        }

        //5.没有找到, 返回 null
        return null;
    }

    //判断哈希表是否为空
    HashTable.prototype.isEmpty = function () {
        return this.count == 0;
    }

    //获取哈希表中元素个数
    HashTable.prototype.size = function () {
        return this.count;
    }

    //哈希表扩容/缩小容量
    HashTable.prototype.resize = function (newLimit) {
        //1.保存旧的数组内容
        var oldStorage = this.storage;

        //2.重置所有属性
        this.storage = [];
        this.count = 0;
        this.limit = newLimit;

        //3.遍历 oldStorage 中所有的 bucket 
        for (var i = 0; i < oldStorage.length; i++) {
            //3.1.取出对应的 bucket
            var bucket = oldStorage[i];

            //3.2.判断 bucket 是否为 null
            if (bucket == null) {
                continue;
            }

            //3.3.bucket 中有数据, 则重新插入
            for (var j = 0; j < bucket.length; j++) {
                var tuple = bucket[j];
                this.put(tuple[0], tuple[1]);
            }
        }
    }

    //判断数字是否为质数

    HashTable.prototype.isPrime = function (num) {
        //1.获取 num 的平方根
        var temp = parseInt(Math.sqrt(num));

        //2.循环判断
        for (var i = 2; i <= temp; i++) {
            if (num % i == 0) {
                return false;
            }
        }

        return true;
    }

    //获取质数
    HashTable.prototype.getPrime = function (num) {
        while (!this.isPrime(num)) {
            num ++;
        }

        return num;
    }
}

var ht = new HashTable(100);


//判断质数
function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

//通过开平方根判断质数
function isPrime2(num) {
    //1.获取 num 的平方根
    var temp = parseInt(Math.sqrt(num));

    //2.循环判断
    for (var i = 2; i <= temp; i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}



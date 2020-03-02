function Set () {
    //属性
    this.items = {};

    //方法
    //1.add 方法
    Set.prototype.add = function (value) {
        if (this.has(value)) {
            return false;
        }
        
        this.items[value] = value;
        return true;
    }

    //2.has 方法
    Set.prototype.has = function (value) {
        return this.items.hasOwnProperty(value);  //hasOwnProperty : 判断是否包含这个 key
    }

    //3.remove 方法
    Set.prototype.remove = function (value) {
        if (!this.has(value)) {
            return false;
        }

        delete this.items[value];
        return true;
    }

    //4.clear 方法
    Set.prototype.clear = function () {
        this.items = {};
    }

    //5.size 方法
    Set.prototype.size = function () {
        return Object.keys(this.items).length;
    }

    //6.values 方法
    Set.prototype.values = function () {
        return Object.keys(this.items);
    }


    //集合间操作
    //1.union 方法(并集)
    Set.prototype.union = function (ohterSet) {
        //1.创建一个新的集合
        let unionSet = new Set();

        //2.将原集合中所有元素添加到新集合中
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        //3.取出 otherSet 中元素,判断是否需要加入
        values = ohterSet.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    }

    //2.intersection 方法(交集)
    Set.prototype.intersection = function (otherSet) {
        //1.创建一个新集合
        let intersectionSet = new Set();

        //2.从原集合取出元素判断是否存在于 otherSet,若存在则放入
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            let item = values[i];
            if (otherSet.has(item)) {
                intersectionSet.add(item);
            }
        }

        return intersectionSet;
    }

    //3.differ 方法(差集)
    Set.prototype.differ = function (otherSet) {
        let differSet = new Set();

        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            let item = values[i];
            if (!otherSet.has(item)) {
                differSet.add(item);
            }
        }

        return differSet;
    }

    //4.subset 方法(判断是否为子集)
    Set.prototype.subset = function (otherSet) {
        //判断原集合是否是传入集合的子集
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            let item = values[i];
            //判断原集合的元素是否全部存在于传入集合
            if (!otherSet.has(item)) {
                return false;
            }
        }

        return true;
    }
}

let set = new Set();

set.add('b');

let set2 = new Set();
set2.add('a');
set2.add('b');
set2.add(3);

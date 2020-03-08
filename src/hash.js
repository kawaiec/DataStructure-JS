//哈希函数: 字符串, 数组大小
function hashFunc (str, size) {
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

console.log(hashFunc('hello',7));
console.log(hashFunc('dds',7));
console.log(hashFunc('aac',7));
console.log(hashFunc('bcc',7));

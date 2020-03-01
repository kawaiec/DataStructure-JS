const dec2bin = function (decNumber) {
    //1.定义栈对象
    let stack = new Stack();

    //2.循环操作
    while (decNumber > 0) {
        //2.1获取余数,放入栈中
        stack.push(decNumber % 2);
        //2.2获取整除后的结果,作为下一次运行的数字
        decNumber = Math.floor(decNumber / 2);
    }

    //3.从栈中取出0和1
    let binaryString = '';
    while (!stack.isEmpty()) {
        binaryString += stack.pop();
    }

    return binaryString;
}
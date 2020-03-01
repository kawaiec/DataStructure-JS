function passGame(nameList, number) {
    //1.创建队列结构
    let queue = new Queue()

    //2.将所有人依次加入到队列 
    for (let index = 0; index < nameList.length; index++) {
        queue.enqueue(nameList[index]);
    }

    //3.数数字,不是 number 加入到队列末尾,是 number 淘汰
    while (queue.size() > 1) {

        //number 之前的人重新添加到队尾
        for (let i = 0; i < number - 1; i++) {
            queue.enqueue(queue.dequeue());
        }

        //number 之后的人直接淘汰
        queue.dequeue();
    }

    //4.返回最终剩余元素
    return [nameList.indexOf(queue.front()), queue.front()];

}
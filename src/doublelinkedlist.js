function DoubleLinkedList () {
    //内部类: Node
    function Node (data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
    
    //属性
    this.head = null;
    this.tail = null;
     this.length = 0;
}
function Queue() {
    this.queue = {};
    this.head = 0;
    this.tail = 0;
}

Queue.prototype.enqueue = function (element) {
    this.queue[this.tail++] = element;
};

Queue.prototype.dequeue = function () {
    if (this.tail === this.head) return undefined;

    let element = this.queue[this.head];
    delete this.queue[this.head++];
    return element;
};

module.exports = Queue;

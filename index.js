const Queue = require("./data-structures/Queue");
const log = console.log;

let q = new Queue();

log(q.queue);

q.enqueue("hello");
log(q.queue);

q.enqueue("world");
log(q.queue);

let res = q.dequeue();
log(q.queue);
log(res);

q.enqueue("we");
log(q.queue);

q.enqueue("fine");
log(q.queue);

let res3 = q.dequeue();
log(q.queue);
log(res3);

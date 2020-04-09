// Using OOP ( Class Constructor , Extends)

class stopWatch {
    constructor(obj = {}) {
        this.start = obj.start;
        this.stop = obj.stop;
    }
}



class classDuration extends stopWatch {
    constructor(obj = {}) {
        super(obj);
        this.duration = parseInt(obj.stop) - parseInt(obj.start)
    }
}
const stopWatchTime = new classDuration({
    start: new Date().toLocaleString('id-ID', {
        timeZone: 'Asia/Jakarta',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    }),
    stop: new Date().toLocaleString('id-ID', {
        timeZone: 'Asia/Shanghai',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    }),

    duration: {}
})

console.log(stopWatchTime);
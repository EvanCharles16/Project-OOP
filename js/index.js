// Using OOP -Kompleks

class stopWatch {
    constructor(obj = {}) {
        this.start = obj.start;
        this.stop = obj.stop;
        this.duration = parseInt(obj.stop) - parseInt(obj.start)
    }
    getStart() {
        return `This stopwatch start at ${this.start}`;
    }
    getStop() {
        return `This stopwatch stop at ${this.stop}`;
    }
    durationOfTime(){
        return `Duration Of The Time is ${this.duration}`
    }
}

const stopWatchTime = new stopWatch({
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

let start= stopWatchTime.getStart()
let stop = stopWatchTime.getStop()
let durationTime = stopWatchTime.durationOfTime()

console.log(start);
console.log(stop);
console.log(durationTime);


console.log(stopWatchTime);
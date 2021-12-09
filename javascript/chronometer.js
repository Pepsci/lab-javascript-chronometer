class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      if(typeof callback === 'function')callback()
      this.currentTime += 1;
    }, 1000);

  }

  getMinutes() {
    // ... your code goes here
    // return Math.floor(this.currentTime / 60)
    return this.currentTime / 60 | 0

  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return String(value).length === 2 ? String(value) : '0' + value;
    
    // let result = value.toString()
    // if(result.length === 1) result = '0' + result
    // return result
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    // const minutes = this.computeTwoDigitNumber(this.getMinutes())
    // const seconds = this.computeTwoDigitNumber(this.getSeconds())
    // return minutes + ':' + seconds
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

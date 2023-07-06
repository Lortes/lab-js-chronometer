class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback !== undefined) {
        printTimeCallback()
      }
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60
  }

  getCentiseconds() {
    return this.currentTime % 100
  }

  computeTwoDigitNumber(value) {
    let twoDigit = ''
    if (value < 10) {
      twoDigit = twoDigit + '0' + value
    } else {
      twoDigit += value
    }
    return twoDigit
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let timeFormatted = ''
    let digitMinutes = this.computeTwoDigitNumber(this.getMinutes())
    let digitSeconds = this.computeTwoDigitNumber(this.getSeconds())
    let digitCentiseconds = this.computeTwoDigitNumber(this.getCentiseconds())

    timeFormatted = timeFormatted + digitMinutes + ':' + digitSeconds + '.' + digitCentiseconds

    return timeFormatted
  }
}

class Chronometer {
  constructor() {
    this.currentTime = 0,
      this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 1000)
  }

  getMinutes() {
    console.log("..")
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    const numberString = value.toString()

    if (numberString.length === 2) {
      return numberString
    } else {
      return "0" + numberString
    }
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

    timeFormatted = timeFormatted + digitMinutes + ':' + digitSeconds

    return timeFormatted
  }
}

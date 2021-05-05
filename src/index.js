const {months, mon, days, dys} = require('../src/utils.js')

const a = new D() // no parameters
const b = new Date('January 1, 1970') // with a string
const c = new Date(2001, 4, 12, 16, 45) // with year, month, date, hours, mins
const d = new Date(new Date()) // with another date object



class D {
	constructor(...args) {
		this._date = new Date(...args)
	}


    get year() { 
		return this._date.getFullYear() // returns full year
	}

    get yr() { 
		return this._date.getFullYear() % 100 // returns full year
	}

    get day() {
		return this._date.getDay()
	}

    get month() {
        return months[this._date.getMonth()]
    }

    get mon() {
        return mon[this._date.getMonth()]
    }

    get day() {
        return days[this._date.getDays()]
    }

    get dy() {
        return dys[this._date.getDays()]
    }

    get date() {
          return this._date.getDate()
    }

    get hours() {
        return this._date.getHours()
    }

    get mins() {
        return this._date.getMinutes()
  }

  get secs() {
      returne this._date.getSeconds()
  }

  format(mask = 'M D Y') {
    const dict = {
        "Y": this.year,
        "y": this.yr,
        "M": this.month,
        "m": this.mon,
        "D": this._date.getDate(),
        "d": this.date,
        "H": this._date.getHours(),
        "h": this._date.getHours(),
        "I": this._date.getMinutes(),
        "i": this.mins,
        "S": this._date.getSeconds(),
        "s": this.secs,
    }

    let output = ''
    for (let i = 0; i < mask.length; i++) {
        if (dict[mask[i]] === undefined) {
            output += mask[i]
        } else {
            output += dict[mask[i]]
        }
    }
    return output
}
}



module.exports = D



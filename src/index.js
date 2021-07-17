const {months, mon, days, dys} = require('../src/utils.js')

const a = new D() // no parameters
const b = new Date('January 1, 1970') // with a string
const c = new Date(2001, 4, 12, 16, 45) // with year, month, date, hours, mins
const d = new Date(new Date()) // with another date object


/**
 * getters from the date object
 * 
 * 
 * @memberof D
 */
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
      return this._date.getSeconds()
  }

/**
 * Formats date by parsing Y M D values from the given pattern
 * 
 * yy – two-digit year, e.g. 06
 * yyyy – four-digit year, e.g. 2006
 * 
 * 
 * m – one-digit month for months below 10, e.g. 4
 * m – one-digit month for months b
 * mmm – three-letter abbreviation for month, e.g. Apr
 * mmmm – month spelled out in full, e.g. April
 * 
 * d – one-digit day of the month for days below 10, e.g. 2
 * dd – two-digit day of the month, e.g. 02
 * ddd – three-letter abbreviation for day of the week, e.g. Tue
 * dddd – day of the week spelled out in full, e.g. Tuesday
 * @member of D
 * @param {string} mask 
 * @returns {string}
 */
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

/**
 * when checks given date with today's date and returns human readable
    string of how many days have passed/will pass from this._date
 * 
 * @param {Date} date 
 * @returns {string}
 */
when(date) {
    // const nowUTC = Date.UTC(date1.getUTCFullYear(), date1.getUTCMonth(), date1.getUTCDate());

    // const diff = (date.valueOf() - nowUTC.valueOf()) / (24 * 60 * 60 * 1000);
    const diff = (date.valueOf() - this._date.valueOf()) / (24 * 60 * 60 * 1000);

    return diff > 0 ? `${diff.toFixed(0)} days from ${this.format('MM/DD/YYYY')}` : `${Math.abs(diff).toFixed(0)} days since ${this.format('MM/DD/YYYY')}`;
  }

}



module.exports = D



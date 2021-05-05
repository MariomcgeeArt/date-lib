const D = require('../src/index.js')

const today = new Date()

const d = new D(today)
const {months, mon, days, dys} = require('../src/utils.js')

const bday = new D(1993, 19, 9)

test("D.year", () => {
    expect(d.year).tobe(today.getFullYear())
    expect(bDay.year).toBe(1993)
})

test('d.yr', () => {
    expect(d.yr).toBe( today.getFullYear() %  100)
    expect(bDay.yr).toBe(93)
})

test('D.month', () => {
    expect(bDay.month).toBe(months[8])
  
})

test('D.mon', () => {   
    expect(bDay.mon).toBe(mon[8])
})

test('D.day', () => {
    expect(d.day).toBe(days[today.getDay()])
   
})

test('D.dy', () => {   
    expect(d.dy).toBe(dys[today.getDay()])
})

test('D.date', () => {   
    expect(d.date).toBe(today.getDate()])
})

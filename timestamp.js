var moment = require('moment-timezone')

let str = moment
  .unix(process.argv[2])
  // .tz('UTC+8')
  .format('YYYY-MM-DD HH:mm:ss Z')
console.log(`${process.argv[2]} -> ${str}`)
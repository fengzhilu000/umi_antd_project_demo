/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-10-12 10:34:34
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-10-12 13:45:02
 */
const mock = {}

require('fs').readdirSync(require('path').join(__dirname + '/mock')).forEach(function(file) {

Object.assign(mock, require('./mock/' + file))

})

module.exports = mock;
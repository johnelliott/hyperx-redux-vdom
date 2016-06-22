//const vdom = require('virtual-dom')
//const app = require('./app')

module.exports = function(self) {
  self.addEventListener('message', function(e) {

    var data = JSON.parse(e.data)
    //var stringy = vdom.create(app({value: [42]})).toString()
    //self.postMessage('LOGGER STRINGYYYYYY' + typeof stringy)
    var result = data.map(function(num) { return num * 10})
    self.postMessage(result)
  })
}

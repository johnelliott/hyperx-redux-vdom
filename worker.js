//const render = require('./app-core').list

/*
var h = require('virtual-dom/h');
// 1: Create a function that declares what the DOM should look like
// This is where I'm going to stick in my core app rendering later....
function makeTree(items)  {
    return h('div', {
        style: { border: '1px solid red'}
    }, items);
}

// We need an initial tree, which is a VirtualNode
var tree = makeTree(['hello I am the great content',2,3,4,5])

// Create an initial root DOM node ...
console.log('tree', tree)
*/

module.exports = function(self) {
  self.postMessage('hello from teh workier')

  //var coreAppRenderResult = render({value: [42]})
  //self.postMessage('coreAppRenderResult', coreAppRenderResult)

  // respond to messages
  // later this will be where we take IN redux actions
  self.addEventListener('message', function(e) {
    var data = JSON.parse(e.data)
    var result = data.map(function(num) {return num * 10})

    console.log('we could have renered something here')
    self.postMessage(result)
  })
}

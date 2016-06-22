/*
   When a file is run directly from Node.js, require.main is set to its module.
   That means that you can determine whether a file has been run directly by testing:
   require.main === module
   */
var { store, render, update, loop } = require('./app-core.js')

if (module.parent) {
  console.log('I think I am a module')
  module.exports = render
} else {
  console.log('I think I\m in a browser!')
  // start app
  var root = document.body.firstElementChild
  document.body.replaceChild(loop.target, root)
  store.subscribe(update)
  // set up web workers...
  var work = require('webworkify')
  var worker = work(require('./worker.js'))
  worker.addEventListener('message', function (e) {
    console.log(e)
  })
  console.log('about to start web worker')
  setTimeout(function(e) {
    console.log('posting message')
    console.log(typeof e)
    console.log(e)
    var initialState = JSON.stringify([0,1,2,3,4,5])
    worker.postMessage(initialState)
  }, 1000)

  setTimeout(function stop(e) {
    console.log('stopping worker')
    worker.terminate()
  }, 4000)
}

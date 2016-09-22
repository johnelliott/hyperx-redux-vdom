// views
var h = require('virtual-dom').h
var hyperx = require('hyperx')
var hx = hyperx(h)
function item(state) {
  function onclick () {
    store.dispatch({ type: 'INCREMENT'})
  }
  return hx`<div id='root'><span>${state}</span><button onclick=${onclick}></button></div>`
}
exports.list = function list(state) {
  return hx`<div>${state.value.map(function (d) {
    return item(d)
  })}</div>`
}

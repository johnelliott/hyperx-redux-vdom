var vdom = require('virtual-dom')
var redux = require('redux')
var main = require('main-loop')
var reducer = require('./reducer')

// views
var hyperx = require('hyperx')
var h = require('virtual-dom').h
var hx = hyperx(h)
function item(state) {
  function onclick () {
    store.dispatch({ type: 'INCREMENT'})
  }
  return hx`<div id='root'><span>${state}</span><button onclick=${onclick}></button></div>`
}
function list(state) {
  return hx`<div>${state.value.map(function (d) {
    return item(d)
  })}</div>`
}
function render (state) {
  return list(state)
}
function update () {
  loop.update(store.getState())
}

// state
var store = redux.createStore(reducer)
var loop = main({value: [0]}, render, vdom)

// module
module.exports = { store, render, update, loop }

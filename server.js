const http = require('http')
const ecstatic = require('ecstatic')
const vdom = require('virtual-dom')
const app = require('./app.js')

var staticMiddleware = ecstatic({ root: __dirname + '/public', handleError: true })

var renderPage = function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  // TODO, use app-core.js and change app -> app.render(vdom etc)
  // then later, do more and bring v-dom into the worker if possible
  const page = `<html>
  <body>${vdom.create(app({value: [10000000000]})).toString()}</body>
  <script src="./bundle.js"></script>
  </html>`
  res.end(page)
}

const server = http.createServer(function(req, res) {
  if (req.url.match(/page/)) {
    renderPage(req, res)
  } else {
    staticMiddleware(req, res)
  }
})

server.listen(3000)
console.log('server listening on 3000')

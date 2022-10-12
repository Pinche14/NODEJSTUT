const http = require('http')
const { readFileSync, readFile, rmSync} = require('fs')

const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/style.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req,res) => {
    const url = req.url
    console.log(url)

    if (url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    }
    else if(url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>about page</h1>')
        res.end()
    }
    else if(url === '/style.css'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homeStyles)
        res.end()
    }
    else if (url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    else{
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>page not found</h1>')
        res.end()
    }

})

server.listen(5000)
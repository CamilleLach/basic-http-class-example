const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const client2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const style = fs.readFileSync(`${__dirname}/../client/style.css`);


// const sendPage = (request, response, page) => {
//     response.writeHead(200, {'Content-Type':'text/html'});
//     response.write(page);
//     response.end();
// }

const serveFile = (request, response, content, mimeType) =>{
    response.writeHead(200, {'Content-Type': mimeType});
    response.write(content);
    response.end();
}

const getMessage = (request, response) => serveFile(request, response, 'Hello World', 'text/plain');

const getIndex = (request, response) => serveFile(request, response, index, 'text/html');

const getClient2 = (request, response) => serveFile(request, response, client2, 'text/html');

const getCSS = (request, response) => serveFile(request, response, style, 'text/css');

module.exports = {
    getIndex, 
    getClient2,
    getMessage,
    getCSS
}
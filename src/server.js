const http = require('http');
const responses = require('./responses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
    console.log(request.url);

    if(request.url == '/page2'){
        responses.getClient2(request, response);
    }
    else if(request.url === '/message'){
        responses.getMessage(request, response);

    }
    else if(request.url === '/style.css'){
         responses.getCSS(request, response);
    }
    else{
        responses.getIndex(request, response);
    }

    // switch(request.url){
    //     case '/page2':
    //         responses.getClient2(request, response);
    //         break;
    //     case '/message':
    //         responses.getMessage(request, response);
    //         break;
    //     default:
    //         responses.getIndex(request, response);
    //         break;
    // }
    // responses.getIndex(request, response);
};

http.createServer(onRequest).listen(port, ()=>{
    console.log(`listening on 127.0.0.1:${port}`);
});
//adding comment for test
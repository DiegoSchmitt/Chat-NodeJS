const http = require('http');
const url = require('url');
q.pathname = (q.pathname=="/")?"/chat.html":q.pathname;
const server = http.createServer((request, response)=>{
    var diretorio = __dirname;
    var q = url.parse(request.url, true);
    var arquivo = S(q.pathname).splitLeft('/');

});
server.listen(80);

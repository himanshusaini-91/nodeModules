var http=require("http");
var fs = require("fs");
var path = require("path");
var url=require("url");
http.createServer(function(request,response){
   var urlV=request.url;
    var method=request.method;
    response.writeHead(200,{'content-type':'text/html'});
if(isStaticFile(url)!=-1) {

    var newpath = path.normalize(__dirname + "/..");
    var filepath = path.join(newpath, url);
    var x=newpath;
    //fs.readFile(filepath).pipe(response);
    fs.readFile(filepath, function (error, content) {
        if (error) {
            response.end("File not found...");
        }
        else {
            response.end(content);
        }
    });
}
else if(urlV.indexOf('/')!=-1)
{
    var filePath1 = path.join(__dirname,'/index.html');
    fs.createReadStream(filePath1).pipe(response);
}
else if(urlV.indexOf('/login')!=-1 && method==='GET')
{
    console.log("kjdsjkc",urlV);
   var urlObject = require("url");
      //   this will convert url into object
    var object = urlObject.parse(urlV,true).query;
    console.log("object is ",object);
  /* var userid = url.parse(urlV,true).query.userid;
    var password = url.parse(urlV,true).query.pwd;*/
    if(object.userid==='amit' && object.pwd==='123')
        {
            console.log("adc");
             response.end("Welcome "+object.userid);
        }
        else
        {
            response.end("Invalid Userid or Password");
        }
}

    else {
    //response.redirect('newpath/index.html');
    response.end('welcome to this static page');
}

}).listen(5555,function(){
    console.log(" My Server Start...");
});
function isStaticFile(url)
{
    var extension = [".html",".css",".js",".jpg",".mp3"];
    var ext = require("path").extname(url);
    return extension.indexOf(ext);
}

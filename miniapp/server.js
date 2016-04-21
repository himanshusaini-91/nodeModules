
var http=require("http");
var fs = require("fs");
var path = require("path");
http.createServer(function(request,response){
    var url=request.url;
    var method=request.method;
    response.writeHead(200,{'content-type':'text/html'});
    if(isStaticFile(url)!=-1) {
        console.log("directory is",__dirname);
        var newpath = path.normalize(__dirname+"/../miniapp/view");
        //var x=__dirname+"/../view";
        console.log("path is "+newpath);
        var filepath = path.join(newpath,url);
        console.log("filepath is "+filepath);
        fs.createReadStream(filepath).pipe(response);
        //fs.readFile(filepath).pipe(response);
        /*fs.readFile(filepath, function (error, content) {
            if (error) {
                response.end("File not found...");
            }
            else {
                response.end(content);
            }
        });*/
    }
    else
    if(url.indexOf('/')!=-1 && method==='GET')
    {console.log("home is");
        var filePath1 = path.join(__dirname,'/view/index.html');
        fs.createReadStream(filePath1).pipe(response);

    }

    else{
        response.end("error404");
    }

}).listen(5555,function(){
    console.log(" My Server Start...");
});
function isStaticFile(url)
{
    var extension = [".html",".css",".js",".jpg",".mp3",".png"];
    var ext = require("path").extname(url);
    return extension.indexOf(ext);
}

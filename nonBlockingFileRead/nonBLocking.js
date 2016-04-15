/*
/!**
 * Created by tanvirsaini32 on 15/04/2016.
 *!/
 //this is blocking operation
var fs=require('fs');
var path=require('path');
console.log("before file read");
var x=fs.readFileSync('./input.txt',"utf8");// here we use readfilesync method to synchronize the file then it show some operation
console.log(""+x);
var a=10;
var b=20;
var c=a+b;
console.log("sum of two numbers is ",c);

*/

//now nonblocking file operation
var fs=require('fs');
var path=require('path');
console.log("before file read");
var x=fs.readFile('./input.txt',function(err,content)//this is callback function this makes non blocking event
{
    if(err)
    {
        console.log("invalid file");
    }
    else {
        console.log("After asynchronization read"+content);
    }
});

var a=10;
var b=20;
var c=a+b;
console.log("sum of two numbers is ",c);

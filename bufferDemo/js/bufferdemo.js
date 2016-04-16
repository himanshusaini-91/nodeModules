
/*
// ---------------------------------creating a buffer  mehod 1------------------------------------------------------
var buff=new Buffer(3000);//creating a buffer
var bufw=buff.write("./input.txt");//writing a buffer
//reading from buffer
console.log(""+bufw);
console.log(bufw.toString());//reading from buufer;*!/
//------------------------------common example of readding and writing-------------------------------------------
buf = new Buffer(30);
for (var i = 0 ; i < 26 ; i++) {
    buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz ascii is specify character encodeing
console.log( buf.toString('ascii',0,10));   // outputs: abcde
console.log( buf.toString('hex',0,5));    // outputs: abcde
console.log(buf.toString('base64',0,6));
console.log(buf.toString('utf-8',0,6));
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde
-------------------------------------------------------------------------------------------
var buff=new Buffer(10);
buff.write("helloo",'utf16le'); writing with encoding
console.log(buff.toString("utf8",0,4)); readinng with encoding
*/
/*
//--------------------------------------------------creating buffer method2------------------------------------------------
var buff=new Buffer([1,2,3,4,5]);
buff.write(("hello"),"ascii");//writing
console.log(buff.toString('ascii',0));//reading
console.log(buff.toJSON(buff));//convert into json
//console.log(buff.toString());
*/
/*//----------------------------------------creating buffer method3 ------------------------
var buff=new Buffer("hello i am himanshu saini");
console.log(buff.toString("ascii"));
var json=buff.toJSON(buff);
console.log(json);
-------------------------------------------------------------------------------------------*!/
 */
//-----------concatenate two buffer-----------


/*var buffer1 = new Buffer('hello ');
var buffer2 = new Buffer('I am himanshu saini');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());*/
//-----------------------------------
//--------------------compare two buffer-------------
/*var buffer1 = new Buffer('ab');
var buffer2 = new Buffer('a');
var x=buffer1.compare(buffer2)
if(x==0)
{
    console.log("match is found ");
}
else {
    console.log("match is not found");
}*/
//--------------------------------------------------------copy buffer------------
/*var buffer1 = new Buffer('ABC');
//copy a buffer
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());*/
//-------------------------------------------------------slice buffer
/*var buffer1 = new Buffer('Himanshu saini');
//slicing a buffer
var buffer2 = buffer1.slice(11,13);
console.log("buffer2 content: " + buffer2.toString());*/
//-------------------------------------------------------------
/**
 * Created by tanvirsaini32 on 14/05/2016.
 */
var bcrypt = require('../node_modules/bcrypt-nodejs');

var start = Date.now();
bcrypt.genSalt(10, function(err, salt) {// 10 is no of roundst to process the data  function
    console.log('salt: ' + salt);
    console.log('salt cb end: ' + (Date.now() - start) + 'ms');
console.log("after salt");
    bcrypt.hash('test',salt,null, function (err, crypted) {
        console.log('crypted: ' + crypted);
        console.log('crypted cb end: ' + (Date.now() - start) + 'ms');
        console.log('rounds used from hash:', bcrypt.getRounds(crypted));
    });
});        /*bcrypt.compare('test', crypted, function(err, res) {
            console.log('compared true: ' + res);
            console.log('compared true cb end: ' + (Date.now() - start) + 'ms');
        });
        bcrypt.compare('bacon', crypted, function(err, res) {
            console.log('compared false: ' + res);
            console.log('compared false cb end: ' + (Date.now() - start) + 'ms');
        });

console.log('end: ' + (Date.now() - start) + 'ms');*!/*/
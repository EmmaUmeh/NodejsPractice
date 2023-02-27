var buf1 = new Buffer('ABC');
var buf2 = new Buffer('ABCD')
buf1.compare(buf2)

if(buf1 < 0){
    console.log(buf1 + 'Is same as' + buf2)
}else if(buf1 === buf2){
console.log(buf1 + 'is iden' + buf2)
}else{
    console.log(buf1 + 'should comme before' + buf2)
}

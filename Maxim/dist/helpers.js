function randomNumber() {
    var number = Math.floor(Math.random() * (30 - 0) + 0);
    console.log(number);
    return number;
}
//alert message with delay//////////
function timeMsg() {
    var t = setTimeout("alertMsg()", 300);
}
function alertMsg() {
    alert("No More Coins");
}
///////////////////////////////
var test = 0;

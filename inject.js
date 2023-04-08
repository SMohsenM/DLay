console.log('injected')
var _send = XMLHttpRequest.prototype.send
XMLHttpRequest.prototype.send = function() {
    var that = this
    var args = arguments
    setTimeout(function () {
        _send.apply(that, args);
    }, 5000)
}
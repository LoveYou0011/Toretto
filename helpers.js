function successfullMessage(msg) {
    return "✅ *Toretto*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *Toretto*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "• *Toretto :*  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}

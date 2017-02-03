export var compareStrings = function (a, b) {
    a = a.toUpperCase() // ignore upper and lowercase
    b = b.toUpperCase() // ignore upper and lowercase
    if (a < b) return -1
    if (a > b) return 1
    return 0
}
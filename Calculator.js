
let value = 0
function num_1() {
    document.getElementById("input_").innerHTML = document.getElementById("input_").innerText + 1

}
function num_2() {
    document.getElementById("input_").innerHTML = document.getElementById("input_").innerText + 2

}
function num_3() {
    document.getElementById("input_").innerHTML = document.getElementById("input_").innerText + 3

}
function num_4() {
    document.getElementById("input_").innerHTML = document.getElementById("input_").innerText + 4

}
function num_5() {
    document.getElementById("input_").innerHTML = document.getElementById("input_").innerText + 5

}
function num_6() {
    document.getElementById("input_").innerHTML = document.getElementById("input_").innerText + 6

}
function num_7() {
    document.getElementById("input_").innerHTML = document.getElementById("input_").innerText + 7

}
function num_8() {
    document.getElementById("input_").innerHTML = document.getElementById("input_").innerText + 8

}
function num_9() {
    document.getElementById("input_").innerHTML = document.getElementById("input_").innerText + 9

}
function num_0() {
    document.getElementById("input_").innerHTML = document.getElementById("input_").innerText + 0

}
function add() {
    // document.getElementById("input_").innerHTML = document.getElementById("input_").innerText + "+"
    let a = document.getElementById("input_").innerText
    value = parseInt(a) + parseInt(value)
    document.getElementById("input_").innerText = " "

}
function sub() {
    // document.getElementById("input_").innerHTML = document.getElementById("input_").innerText + 0

}
function output() {
    // document.getElementById("input_").innerHTML = document.getElementById("input_").innerText + 0
    let b = document.getElementById("input_").innerText
    value = parseInt(b) + value
    document.getElementById("input_").innerText = value
    value = 0
    // document.getElementById("input_").innerText = " "

}
function clear_() {
    document.getElementById("input_").innerHTML = " "
    value = 0

}
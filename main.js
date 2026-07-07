function dataChaker() {
    let a = document.getElementById("number").value;

    if ( a % 2 ==0 ) {
        document.getElementById("result").innerText = "Even"
    }
    else {
        document.getElementById("result").innerText = "Odd"
    }
}
let i = 0
let y = document.getElementById("counter")
function increase() {
    let x = document.getElementById("increase");
    y.innerHTML = i+=1
}

function decrease() {
    let x = document.getElementById("decrease");
  
    if(i>0){
        y.innerHTML = i-=i
    }
}

function reset() {
    let x = document.getElementById("reset");
    y.innerHTML = i-=i
  
}
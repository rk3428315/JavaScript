let x = function (e) {
    console.log(e.pointerType);
    console.log(e.target)

    alert("This x listner.")    
}

let y = function (e) {
    alert("This y listener.")    
}

btn.addEventListener('click' ,x)
btn.addEventListener('click' ,y)


let a = prompt("Enter 1 or 2");

if(a == "1"){
    btn.removeEventListener('click',y)
}

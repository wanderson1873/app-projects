function msgErro(){
    p.textContent = "Informe apenas 0 1";
}

function calcBin(number){ 
    p.textContent = "";
    var bina;
        while(number >= 1){
            number /= 2
            console.log(number);
        }
}

var btnElement = document.querySelector("input.btn");
var p = document.querySelector("p");
btnElement.onclick = function(){
    var inputElement = document.querySelector("input.dec");
    var number = inputElement.value;
    if(isNaN(number)) {
        msgErro();
    } else {
        calcBin(number);
    }
}

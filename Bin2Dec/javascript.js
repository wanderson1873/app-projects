function msgErro(){
    var pElement = document.querySelector("div.container p.error");
    var msg = "Informe apenas 0 1";
    var txt = document.createTextNode(msg);
    
    pElement.appendChild(txt);
}

function calcBin(number){ 
    var bina;
        while(number >= 1){
            number /= 2
            console.log(number);
        }
}
var btnElement = document.querySelector("input.btn");

btnElement.onclick = function(){
    var inputElement = document.querySelector("input.dec");
    var number = inputElement.value;
    if(isNaN(number)) {
        msgErro();
    } else {
        calcBin(number);
    }
}

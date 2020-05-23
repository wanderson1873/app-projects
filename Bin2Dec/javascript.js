function calcBin(){
    var visortElement = document.querySelector("div.container input.dec");
    var pElemente = document.querySelector("div.container input.dec");
    var inputElement = document.querySelector("input.text");
    var btnElement = document.querySelector("input.btn");

    btnElement.onclick = function(){
        var number = inputElement.value;
        
        number *= 2;
        
        var textElement = document.createTextNode(number);
        pElemente.appendChild(textElement);
        visortElement.appendChild(pElemente);
    }
}
calcBin();
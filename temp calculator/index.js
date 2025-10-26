const tempcon = document.getElementById("tempcon");
const textbox = document.getElementById("textbox");
const tofarenheit = document.getElementById("tofarenheit");
const tocelsius= document.getElementById("tocelsius");
const result = document.getElementById("result");

function convert(){
    if(tofarenheit.checked){
        temp = Number(textbox.value);
        temp = temp * 9/5 + 32;
        result.textContent= temp.toFixed(1)+"\u00B0F";
    }
    else if(tocelsius.checked){
        temp = Number(textbox.value);
        temp =(temp-32)*(5/9);
        result.textContent= temp.toFixed(1)+"\u00B0c";
    }
    else{
        result.textContent="select a unit";
    }
}
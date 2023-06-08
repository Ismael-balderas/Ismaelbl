//Funcion para agregar caracteres al display 
function append(value){
    const display=document.getElementById("display");
    display.value += value;

}
//funcion para borrar el contenido del display 
function clearDisplay(){
    const display = document.getElementById("display");
    diplay.value="";
}
//funcion para realizar el calculo 
function culate() {
    const display = document.getElementById("display");
    const expression = display.value;

    try{
        const result=eval(expression);
        display.value=result;
    }catch(error){ 
        display.value="ERROR";
    }
    }



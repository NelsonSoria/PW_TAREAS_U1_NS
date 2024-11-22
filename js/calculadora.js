var num1 = -1;
var num2 = -1;
var op = null;
var textnum1 = "";
var textnum2 = "";
function setearValor(valor) {
    let valorActual = document.getElementById("id-display").innerText;
    console.log(valor);
    document.getElementById("id-display").innerText = valor;
}
function limpiarDisplay() {
    document.getElementById("id-display").innerText = "";
    this.num1 = -1;
    this.num2 = -1;
    this.op = null;
    this.textnum1="";
    this.textnum2="";
    setearValor(0);
}

const recibirValor = (idelemento) => {
    let valor = document.getElementById(idelemento).innerText;
    if (op!== null) {
        this.textnum2 = textnum2 + valor
        this.num2 = parseInt(textnum2);
        setearValor(textnum2)
    } else {
        this.textnum1 = textnum1 + valor
        this.num1 = parseInt(textnum1);
        setearValor(textnum1)
    }
}
function borrarDigito(){
    if (op!== null) {
        const aux=this.textnum2.split('')
        aux.pop();
        this.textnum2=aux.join('');
        this.num2=parseInt(textnum2);
        setearValor(textnum2)

    }else{
       const aux=this.textnum1.split('')
       aux.pop();
       this.textnum1=aux.join('');
       this.num1=parseInt(textnum1);
       setearValor(textnum1)
    }
}

function recibirOP(idelemento) {
    let valor = document.getElementById(idelemento).innerText;
    console.log(valor)
    this.op = valor
}
function resultado() {
    let resul = 0;
    if (op === `x`) {
        resul = num1 * num2;
    }
    if (op === `%`) {
        resul = num1 / num2;
    }
    if (op === `+`) {
        resul = num1 + num2;
    }
    if (op === `-`) {
        resul = num1 - num2;
    }

    resul = Number.isInteger(resul) ? resul : Number(resul.toFixed(3));
    console.log('resultado');
    console.log(num1);
    console.log(op);
    console.log(num2);
    setearValor(resul);
}


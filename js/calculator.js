//--------VARIÁVEIS GLOBAIS--------
var resultado = "";
var decimal = "";
var num1 = 0.0;
var num2 = 0.0;
var sinal ="operação"
//-------------FUNÇÕES--------
//--------TECLAS NUMÉRICAS--------
function acumular(a) {
    if (decimal == '.' && a != 0) {
        resultado = resultado + a;
        resultado = parseFloat(resultado);
        document.getElementById("resul").value = resultado;
        console.log(resultado);
        console.log("convertido para Float");
        console.log(typeof resultado);
        decimal = 1;
    }
    else {
        resultado = resultado + a;
        document.getElementById("resul").value = resultado;
        console.log(resultado);
        console.log("variavel decimal:", decimal);
        console.log(typeof resultado);
    }
}
//--------INSERIR PONTO DECIMAL--------
function acumularespecial(x) {
    if (decimal == 1) {
        return resultado
    }
    else{
        resultado = resultado + x;
        document.getElementById("resul").value = resultado;
        console.log(resultado);
        decimal = ".";
        return resultado;
    }
}
//--------Códigos que serão repetidos nos Cases--------
function opnum1(){
    num1 = resultado;
    num1 = parseFloat(num1);
    decimal = "";
    resultado ="";
    console.log("executou opnum1");
}
function opnum2(){
    num2 = resultado;
    num2 = parseFloat(num2);
    decimal = "";
    console.log("executou opnum2");
}
function clear(){
    resultado = "";
    decimal = "";
    num1 = 0.0;
    num2 = 0.0;
    sinal ="operação"
}
//--------FUNÇÕES DA CALCULADORA--------
function operador(o) {
    switch (o) {
        //--------OPERAÇÕES BÁSICAS------
        case "*":
            if (num1 == 0.0){
                sinal = "*";
                opnum1();
                console.log("IF *");
            }
        break;
        case "+":
            if (num1 == 0.0){
                sinal = "+";
                opnum1();
                console.log("IF +");
                }
        break;
        case "-":
            if (num1 == 0.0){
                sinal = "-";
                opnum1();
                console.log("IF -");
                }
        break;
        case "/":
            if (num1 == 0.0){
                sinal = "/";
                opnum1();
                console.log("IF /");
                }
        break;
        //--------OPERAÇÕES ESPECIAIS------
        case "c": //LIMPA TELA
            clear();
            document.getElementById("resul").value = 0.0;
        break;
        case "e": //ELEVADO A 2
            resultado = document.getElementById("resul").value;
            resultado= parseFloat(resultado);
            resultado = resultado**2;
            document.getElementById("resul").value = resultado;
        break;
        case "s": //RAIZ QUADRADA
            resultado = document.getElementById("resul").value;
            resultado= parseFloat(resultado);
            resultado = resultado**0.5;
            document.getElementById("resul").value = resultado;
            clear();
        break;
        case "k": //SENO
            resultado = document.getElementById("resul").value;
            resultado= parseFloat(resultado);
            resultado= (resultado*(Math.PI)/180); // CONVERTER DE RADIANOS PARA GRAUS
            resultado= Math.sin(resultado); // ENTRADA DA FUNÇÃO EM RADIANO
            document.getElementById("resul").value = resultado;
            clear();
        break;
        case "y": //COSSENO
            resultado = document.getElementById("resul").value;
            resultado= parseFloat(resultado);
            resultado= (resultado*(Math.PI)/180);
            resultado= Math.cos(resultado);
            document.getElementById("resul").value = resultado;
            clear();
        break;
        case "z": //TANGENTE
            resultado = document.getElementById("resul").value;
            resultado= parseFloat(resultado);
            resultado= (resultado*(Math.PI)/180);
            resultado= Math.tan(resultado);
            document.getElementById("resul").value = resultado;
            clear();
        break;
        case "w": //PI
            resultado= Math.PI;
            document.getElementById("resul").value = resultado;
        break;
        case "x": // ELEVADO A 3
            resultado = document.getElementById("resul").value;
            resultado= parseFloat(resultado);
            resultado = resultado**3;
            document.getElementById("resul").value = resultado;
            clear();
        break;
        case "^": // 'A' ELEVADO À 'B'
            if (num1 == 0.0){
                sinal = "^";
                opnum1();
                console.log("IF ^");
                }
        break;
    }
    }
           //--------FUNÇÃO DE IGUAL------
function equal(){
    switch (sinal) {
        case "+":
            opnum2();
            console.log("case +");
            resultado = num1 + num2;
        break;
        case "*":
            opnum2();
            console.log("case *");
            resultado = num1 * num2;
        break;
        case "-":
            opnum2();
            console.log("case -");
            resultado = num1 - num2;
        break;
        case "/":
            opnum2();
            console.log("case /");
            resultado = num1 / num2;
        break;
        case "^":
            opnum2();
            console.log("case ^");
            resultado = Math.pow(num1,num2);
        break;
    }
    document.getElementById("resul").value = resultado;
    resultado="";
    clear();
}


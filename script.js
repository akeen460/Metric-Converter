const input = document.getElementById('meter');
const btn1 = document.getElementById('btn1');
document.getElementById('display1').innerHTML = "Waiting";

btn1.addEventListener('click', ()=>{
    const centi = (input.value)*100;
    
    document.getElementById('display1').innerHTML = centi;
    document.getElementById('display1').style.color = "black";

})

const input2 = document.getElementById('kilo');
const btn2 = document.getElementById('btn2');
document.getElementById('display2').innerHTML = "Waiting";

btn2.addEventListener('click', ()=>{
    const centi = (input2.value)*100;
    
    document.getElementById('display2').innerHTML = centi;
})

const input3 = document.getElementById('celcius');
const btn3 = document.getElementById('btn3');
document.getElementById('display3').innerHTML = "Waiting";

btn3.addEventListener('click', ()=>{
    const celci = ((9/5)*input3.value)+32;
    
    document.getElementById('display3').innerHTML = celci;
})


const input4 = document.getElementById('cent');
const btn4 = document.getElementById('btn4');
document.getElementById('dis4').innerHTML = "Waiting";

btn4.addEventListener('click', ()=>{
    const inch = input4.value/2.54 ; 
    document.getElementById('dis4').innerHTML = inch.toFixed(2);
})
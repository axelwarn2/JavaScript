const mainForm = document.forms.mainForm;
var towar = mainForm.towar;
var price = mainForm.price;
var fio = mainForm.fio;
var tel = mainForm.tel;
var adress = mainForm.adress;
var dostavka = mainForm.dostavka;
var count = mainForm.count;
var fullPrice = mainForm.fullPrice;
var button = mainForm.button;

var reg1 = /^[А-Я][а-я]+ [А-Я][а-я]+ [А-Я][а-я]+$/;
function FIO(){
    if(!reg1.test(fio.value)){
        document.querySelector('#error1').style.display = 'block';
    }else{
        document.querySelector('#error1').style.display = 'none';
    }
}

var reg2 = /^\+7 \([\d]{3}\) [\d]{3}-[\d]{2}-[\d]{2}|8 \([\d]{3}\) [\d]{3}-[\d]{2}-[\d]{2}$/;
function Tel(){
    if(!reg2.test(tel.value)){
        document.querySelector('#error2').style.display = 'block';
    }else{
        document.querySelector('#error2').style.display = 'none';
    }
}

var reg3 = /^[\d]{6}, г\.[А-Я][а-я]+, ул\.[А-Я][а-я]+, д\.[\d]+, кв\.[\d]+$/;
function Adress(){
    if(!reg3.test(adress.value)){
        document.querySelector('#error3').style.display = 'block';
    }else{
        document.querySelector('#error3').style.display = 'none';
    }
}

var array = ['Товар1','Товар2','Товар3'];
var proverka = mainForm.proverka;
function Towar(){
    if((towar.value == 'Т' || towar.value == 'т') && towar.value.length == 1){
        let select = document.createElement('select');
        select.className = 'div';
        select.innerHTML = `
        <option value="Товар1">${array[0]}</option>
        <option value="Товар2">${array[1]}</option>
        <option value="Товар3">${array[2]}</option>`
        towar.addEventListener('click', () =>select.remove());
        towar.after(select);
    }
}
towar.addEventListener('input', Towar);

function printPrice(){
    if(towar.value == 'Товар1'){
        price.value = 500;
    }else if(towar.value == 'Товар2'){
        price.value = 1000;
    }else if(towar.value == 'Товар3'){
        price.value = 1500;
    }
}
proverka.addEventListener('click', printPrice);

function printFullPrice(){
    if(dostavka.value == 'Самовывоз'){
        fullPrice.value = price.value * count.value;
    }else if(dostavka.value == 'Курьер'){
        fullPrice.value = price.value * count.value + 300;
    }else if(dostavka.value == 'Почта'){
        fullPrice.value = price.value * count.value + (price.value/100 * 10);
    }
}
count.addEventListener('input', printFullPrice);

function Form(){
    if(towar.value && price.value && fio.value && tel.value && adress.value && fullPrice.value){
        button.disabled = false;
    }else{
        button.disabled = true;
    }
}

function printDiv(event){
    event.preventDefault();
    let div = document.createElement('div');
    div.innerHTML = `
    <h1>Оформление заказа</h1>
    <p>Товар: ${towar.value}</p>
    <p>Цена: ${price.value}</p>
    <p>Количество: ${count.value}</p>
    <p>Ф.И.О ${fio.value}</p>
    <p>Адрес: ${adress.value}</p>
    <p>Способ доставки: ${dostavka.value}</p>
    <p>Стоимость: ${fullPrice.value}</p>`
    button.addEventListener('click', () =>div.remove());
    mainForm.after(div);
}
button.addEventListener('click', printDiv);
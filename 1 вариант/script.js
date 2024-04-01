const mainForm = document.forms.mainForm;
var fio = mainForm.fio;
var organization = mainForm.organization;
var job = mainForm.job;
var formPartner = document.querySelector('input[type="checkbox"]');
let split2 = formPartner.value.split('-');
var price = mainForm.price;
var mail = mainForm.mail;
var button = mainForm.button;

var reg1 = /^[А-Я][а-я]+ [А-Я][а-я]+ [А-Я][а-я]+$/;
function FIO(){
    if(!reg1.test(fio.value)){
        document.querySelector('#error1').style.display = 'block';
    }else{
        document.querySelector('#error1').style.display = 'none';
    }
}

var reg2 = /^[А-Я][а-я]+ [а-я]+ [а-я]+ \([А-Я][А-Я][А-Я]\)$/;
function Organization(){
    if(!reg2.test(organization.value)){
        document.querySelector('#error2').style.display = 'block';
    }else{
        document.querySelector('#error2').style.display = 'none';
    }
}

var reg3 = /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/;
function Mail(){
    if(!reg3.test(mail.value)){
        document.querySelector('#error3').style.display = 'block';
    }else{
        document.querySelector('#error3').style.display = 'none';
    }
}

function Form(){
    let sum = 0;
    for(let i = 1; i < 5; i++){
        if(document.getElementById('check' + i).checked){
            let split2 = document.getElementById('check' + i).value.split('-');
            sum = Number(sum) + Number(split2[1]);
        }
    }
    price.value = sum;

    if(fio.value && organization.value && job.value && price.value && mail.value){
        button.disabled = false;
    }else{
        button.disabled = true;
    }
}

function printDiv(event){
    event.preventDefault();
    let div = document.createElement('div');
    div.className = 'div';
    div.innerHTML = `
    <h1>Форма участника конференции</h1>
    <p>Ф.И.О: ${fio.value}</p>
    <p>Организация: ${organization.value}</p>
    <p>Должность: ${job.value}</p>
    <p>Адрес электронной почты: ${mail.value}</p>
    <p>Форма участия: ${split2[0]}</p>
    <p>Стоимость: ${price.value}</p>`
    button.addEventListener('click', () =>div.remove());
    mainForm.after(div);
}
mainForm.addEventListener('submit', printDiv);
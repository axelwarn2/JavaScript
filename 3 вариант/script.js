const mainForm = document.forms.mainForm;
var fi = mainForm.fi;
var birthday = mainForm.birthday;
var vozrast = mainForm.vozrast;
var obrazovanie = mainForm.obrazovanie;
var social = mainForm.social;
var langProg = document.querySelector('#langProg');
var mail = mainForm.mail;
var button = mainForm.button;

var reg1 = /^[А-Я][а-я]+ [А-Я][а-я]+$/;
function FI(){
    if(!reg1.test(fi.value)){
        document.querySelector('#error1').style.display = 'block';
    }else{
        document.querySelector('#error1').style.display = 'none';
    }
}

var reg2 = /^[\d]{2}\.[\d]{2}\.[\d]{4}|[\d]{2}\/[\d]{2}\/[\d]{4}$/;
function Birthday(){
    if(!reg2.test(birthday.value)){
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
    var split = birthday.value.split(/[\.\/]/);
    var date  = new Date();
    var arrayDay = [date.getDate(), date.getMonth(), date.getFullYear()];
    var age = arrayDay[2] - split[2];
    if(arrayDay[1] > split[1]){
        age - 1;
    }else if(arrayDay[1] == split[1]){
        if(arrayDay[0] > split[0]){
            age - 1;
        }
    }

    if(age >= 17 && age < 25){
        vozrast.value = 'Юношеская';
    }else if(age >= 25 && age < 40){
        vozrast.value = 'Взрослая';
    }else if(age >= 40 && age < 55){
        vozrast.value = 'Зрелый';
    }else if(age >= 55 && age < 75){
        vozrast.value = 'Пожилой';
    }else if(age > 75){
        vozrast.value = 'Старческий';
    }

    if(fi.value && birthday.value && obrazovanie.value && langProg.value && social.value && mail.value){
        button.disabled = false;
    }else{
        button.disabled = true;
    }
}

function printDiv(event){
    event.preventDefault();
    let div = document.createElement('div');
    div.innerHTML = `
    <h1>Голосование на сайте</h1>
    <p>Ф.И: ${fi.value}</p>
    <p>Возрастная категория: ${vozrast.value}</p>
    <p>Образование: ${obrazovanie.value}</p>
    <p>Используемые языки программирования: ${langProg.value}</p>
    <p>Какой социальной сетью вы пользуетесь: ${social.value}</p>
    <p>Адрес электронной почты: ${mail.value}</p>`
    button.addEventListener('click', () => div.remove());
    mainForm.after(div);
}
mainForm.addEventListener('submit', printDiv);
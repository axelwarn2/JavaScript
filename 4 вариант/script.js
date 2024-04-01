const mainForm = document.forms.mainForm;
var datePostup = mainForm.datePostup;
var formPostup = mainForm.formPostup;
var vidDocumenta = mainForm.vidDocumenta;
var srochnost = mainForm.srochnost;
var srok = mainForm.srok;
var adress = mainForm.adress;
var button = mainForm.button;

var reg1 = /^[\d]{2}\.[\d]{2}\.[\d]{4}|[\d]{2}\/[\d]{2}\/[\d]{4}$/;
function DataPostup(){
    if(!reg1.test(datePostup.value)){
        document.querySelector('#error1').style.display = 'block';
    }else{
        document.querySelector('#error1').style.display = 'none';
    }
}
var reg2 = /^[\d]{6}, г\.[А-Я][а-я]+, ул\.[А-Я][а-я]+, д\.[\d]+, кв\.[\d]+$/;
function Adress(){
    if(!reg2.test(adress.value)){
        document.querySelector('#error2').style.display = 'block';
    }else{
        document.querySelector('#error2').style.display = 'none';
    }
}

function Form(){
    var split = datePostup.value.split(/[\.\/]/);
    if(srochnost.value == 'Очень срочно'){
        let newDate = new Date(split[2], split[1], split[0]);
        newDate.setDate(newDate.getDate() + 1);
        srok.value = newDate.getDate() + '.' + '0' + newDate.getMonth() + '.' + newDate.getFullYear(); 
    }else if(srochnost.value == 'Cрочно'){
        let newDate = new Date(split[2], split[1], split[0]);
        newDate.setDate(newDate.getDate() + 3);
        srok.value = newDate.getDate() + '.' + '0' + newDate.getMonth() + '.' + newDate.getFullYear(); 
    }else if(srochnost.value == 'Важно'){
        let newDate = new Date(split[2], split[1], split[0]);
        newDate.setDate(newDate.getDate() + 5);
        srok.value = newDate.getDate() + '.' + '0' + newDate.getMonth() + '.' + newDate.getFullYear(); 
    }else if(srochnost.value == 'Для служебного пользования'){
        let newDate = new Date(split[2], split[1], split[0]);
        newDate.setDate(newDate.getDate() + 8);
        srok.value = newDate.getDate() + '.' + '0' + newDate.getMonth() + '.' + newDate.getFullYear(); 
    }

    if(formPostup.value && vidDocumenta.value && srok.value){
        button.disabled = false;
    }else{
        button.disabled = true;
    }
}

function printDiv(event){
    event.preventDefault();
    let div = document.createElement('div');
    div.innerHTML = `
    <h1>Регистрация корреспонденции</h1>
    <p>Дата поступления документа: ${datePostup.value}</p>
    <p>Форма поступления документа: ${formPostup.value}</p>
    <p>Вид документа: ${vidDocumenta.value}</p>
    <p>Важность: ${srochnost.value}</p>
    <p>Срок исполнения: ${srok.value}</p>
    <p>Адрес: ${adress.value}</p>`
    button.addEventListener('click', () =>div.remove());
    mainForm.after(div);
}
mainForm.addEventListener('submit', printDiv);
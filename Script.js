let cardnum = document.getElementById('cardnumber');
cardnum.addEventListener('keydown', (event) => {
    let str = cardnum.value;
    let key = event.key;
    if (str.length % 5 == 0 && key != 'Backspace' && key!='Delete' && str.length < 20) {
        str += ' ';
    }
    if (key == 'Backspace' || key=='Delete') {
        str = str.substring(0, str.length);
        if (str.length % 5 == 1) {
            str = str.substring(0, str.length);
        }
    }
    cardnum.value = str;
})
function number(event){
let numb=' 0000 0000 0000 0000';
let cnum = document.getElementById("cardnumber");
document.getElementById('egnumber').innerHTML = cnum.value+ numb.substring(cnum.value.length,20);
}
function change(inputid,changeid,beforechange){
    let field = document.getElementById(inputid);
    if(field.value.length!==0){
        document.getElementById(changeid).innerHTML = field.value; 
    }
    else{
        document.getElementById(changeid).innerHTML= beforechange;
    }
}

function checkEmpty(e) {
    e.preventDefault();12
    let name = document.getElementById("cardholder");
    let cnum = document.getElementById("cardnumber");
    let str = cnum.value;
    str = str.replaceAll(' ','');
    let dateMonth = document.getElementById("expdate-month");
    let dateYear = document.getElementById("expdate-year");
    let cvc = document.getElementById("cvc");
    let c1, c2, c3, c4, c5;
    c1 = empty(name.value, name, /^[a-zA-Z ]*$/, 'blank1', 'format1');
    c2 = empty(str, cnum, /^\d{16}$/, 'blank2', 'format2');
    c3 = empty(dateMonth.value, dateMonth, /^\d{2}$/, 'blank3', 'format3');
    c4 = empty(dateYear.value, dateYear, /^\d{2}$/, 'blank5', 'format5');
    c5 = empty(cvc.value, cvc, /^\d{3}$/, 'blank4', 'format4');

    if (c1 == true && c2 == true && c3 == true && c4 == true && c5 == true) {
        document.getElementById('form').style.display = 'none';
        document.getElementById('completed').style.display = 'flex';

    }
}
function empty(val, field, reg, blank, format) {
    let c = false;
    if (val.length === 0) {
        let for1 = document.getElementById(format);
        for1.style.display = 'none';
        let bla1 = document.getElementById(blank);
        bla1.style.display = 'block';
        field.style.border = '3px solid hsl(0, 100%, 66%)';
    }
    else if (!(reg.test(val))) {

        let for1 = document.getElementById(format);
        for1.style.display = 'block';
        let bla1 = document.getElementById(blank);
        bla1.style.display = 'none';
        field.style.border = '3px solid hsl(0, 100%, 66%)';
    }
    else {
        let for1 = document.getElementById(format);
        for1.style.display = 'none';
        let bla1 = document.getElementById(blank);
        bla1.style.display = 'none';
        field.style.border = '3px solid hsl(270, 3%, 87%)';
        c = true;
    }
    return c;
}

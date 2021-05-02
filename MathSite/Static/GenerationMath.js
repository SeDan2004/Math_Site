RememberMeTxtGetPosition = getComputedStyle(document.querySelector('.RememberMeTxt')).left;
RemembMeTxt = document.querySelector('.RememberMeTxt');
RemembMe = document.querySelector('.RememberMe');
Sun = document.querySelector('.Sun');
MathGrid = document.querySelector('.MathGrid');
StartButton = document.querySelector('.StartButton');
NumbTabl = document.querySelector('.NumbTabl');
clickOnSun = 0;
ArrExp = [];
ArrResult = [];

const Uravnenia = {

    Oby4nye() {


        if (NumbTabl.value.indexOf('e') != -1 || NumbTabl.value == '') {

            alert('Пожалуйста введите цифры');
            NumbTabl.value = '';
            return;
        }

StartButton.style.visibility = 'visible';

    DMax = 10;
    DMin = -10;

                for (i = 1; i <= NumbTabl.value; i++) {

                    exp = ['='];

                        Start = 1;
                        Operators = GenOperatorOrNumb(5, 0);

                        
if (Operators != 0) Skobki = GenOperatorOrNumb(2, 0);                        


        while (Start <= Operators) {

                        LeftOrRight = GenOperatorOrNumb(2, 1);
                        NewOp = GenOperatorOrNumb(4, 1);
                        NewOp = checkOperator(NewOp);
                        
                            if (LeftOrRight == 1) exp.push(NewOp);
                            if (LeftOrRight == 2) exp.unshift(NewOp);

                                    Start++;
            }


if (exp.length > 1) {

    if (exp[exp.indexOf('=') - 1] == undefined) exp.unshift(GenOperatorOrNumb(DMax, DMin));
    if (exp[exp.indexOf('=') + 1] == undefined) exp.push(GenOperatorOrNumb(DMax, DMin));

        for (let i = 0; i <= exp.length - 1; i++) {

            if (exp[i] == '=' || isNaN(exp[i]) == false) continue;

                if (exp[i - 1] == undefined || exp[i - 1] == '=') {


        exp[i] = GenOperatorOrNumb(DMax, DMin) + ' ' + exp[i] + ' ' + GenOperatorOrNumb(DMax, DMin);
        continue;

        }
            exp[i] = exp[i] + ' ' + GenOperatorOrNumb(DMax, DMin);
    }
        console.log(exp);
}

if (exp.length == 1) {

            xPosition = GenOperatorOrNumb(1, 0)

                exp.push(GenOperatorOrNumb(DMax, DMin) + '');
                exp.unshift(GenOperatorOrNumb(DMax, DMin) + '');

                    if (+exp[0] == 0 && xPosition == 0) xPosition++;
                    if (+exp[2] == 0 && xPosition == 1) xPosition--;

            if (xPosition == 0) exp[0] = exp[0] + 'x';
            if (xPosition == 1) exp[2] = exp[2] + 'x';

}

    }

},

    Kvadratnye() {


        if (NumbTabl.value.indexOf('e') != -1 || NumbTabl.value == '') {

            alert('Пожалуйста введите цифры');
            NumbTabl.value = '';
            return;
        }

StartButton.style.visibility = 'visible';

    },

    Stepeni() {


        if (NumbTabl.value.indexOf('e') != -1 || NumbTabl.value == '') {

            alert('Пожалуйста введите цифры');
            NumbTabl.value = '';
            return;
        }

StartButton.style.visibility = 'visible';

    },


    Drobi() {


        if (NumbTabl.value.indexOf('e') != -1 || NumbTabl.value == '') {

            alert('Пожалуйста введите цифры');
            NumbTabl.value = '';
            return;
        }

StartButton.style.visibility = 'visible';

    },


    Korni() {


        if (NumbTabl.value.indexOf('e') != -1 || NumbTabl.value == '') {

            alert('Пожалуйста введите цифры');
            NumbTabl.value = '';
            return;
        }

StartButton.style.visibility = 'visible';

    },

    Logarifmy() {


        if (NumbTabl.value.indexOf('e') != -1 || NumbTabl.value == '') {

            alert('Пожалуйста введите цифры');
            NumbTabl.value = '';
            return;
        }

StartButton.style.visibility = 'visible';

    },

    Systemy() {


        if (NumbTabl.value.indexOf('e') != -1 || NumbTabl.value == '') {

            alert('Пожалуйста введите цифры');
            NumbTabl.value = '';
            return;
        }

StartButton.style.visibility = 'visible';

    }

}


const Neravenstva = {

    Oby4nye() {



    },

    Kvadratnye() {



    },

    Stepeni() {



    },


    Drobi() {



    },


    Korni() {



    },

    Logarifmy() {



    },

    Systemy() {



    }

}

  RemembMe.addEventListener('mouseenter', showRememberMeTxt);
  RemembMe.addEventListener('mouseleave', hideRememberMeTxt);
  Sun.addEventListener('click', setColorBody);

  RememberMeTxtGetPosition = parseInt(RememberMeTxtGetPosition);

IterColor = 0;

function createTime() {

function ClockHandl() { createTime() };

DivClock = document.querySelector('.CurrentTime');


    currentTime = new Date();

        DivClock.childNodes[1].innerText = currentTime.getHours() + ':' +  currentTime.getMinutes();
        StartTime = 60000 - (currentTime.getSeconds() * 1000);


if (currentTime.getMinutes() <= 9) {

checkTimeStr = DivClock.childNodes[1].innerText.split('');

    checkTimeStr[checkTimeStr.length] = checkTimeStr[checkTimeStr.length - 1];
    checkTimeStr[checkTimeStr.length - 2] = '0';

DivClock.childNodes[1].innerText = checkTimeStr.join('');

} 
        
    setInterval(ClockHandl, StartTime);


}

function setColorOnRememberMeTxt () {

arrColor = ['yellow', 'blue', 'lime', 'aqua', 'orange', 'purple', 'pink'];

    document.querySelector('.RememberMeTxt').style.color = arrColor[IterColor++];

        if (IterColor == arrColor.length) IterColor = 0;
}

function showRememberMeTxt() {

if (RememberMeTxtGetPosition != 1184 && RememberMeTxtGetPosition != 1200) return;

    function showHandlRememberMeTxt() {

if (RemembMeTxt.style.left == '1040px') {
    
    return clearInterval(Go);
    
}

if (RemembMeTxt.style.left == '1065px') RemembMeTxt.style.visibility = 'visible';

    RemembMeTxt.style.left = (RememberMeTxtGetPosition -= 1) + 'px';
        
}

    Go = setInterval(showHandlRememberMeTxt, 0.1);

}

function hideRememberMeTxt() {

    if (RememberMeTxtGetPosition != 1040 && RememberMeTxtGetPosition != 1200) return;

    function handlhideRememberMeTxt() {

if (RemembMeTxt.style.left == '1200px') {
        
    return clearInterval(Go);

}

if (RemembMeTxt.style.left == '1065px') RemembMeTxt.style.visibility = 'hidden';

        RemembMeTxt.style.left = (RememberMeTxtGetPosition += 1) + 'px'

}

    Go = setInterval(handlhideRememberMeTxt, 0.1);

}

function setColorBody() {

if (clickOnSun == 1) {

clickOnSun = 0;

Sun.style.backgroundColor = 'black';
document.body.style.backgroundColor = 'white';
return;

}

Sun.style.backgroundColor = 'yellow';
document.body.style.backgroundColor = 'black';
clickOnSun++

}

function setHandlOnMathGrid() {

currentElement = event.target;

    if (getComputedStyle(currentElement).color == 'rgb(255, 0, 0)') {

        if (currentElement.innerText == 'Обычные') Uravnenia.Oby4nye();
        if (currentElement.innerText == 'Квадратные') Uravnenia.Kvadratnye();
        if (currentElement.innerText == 'Степени') Uravnenia.Stepeni();
        if (currentElement.innerText == 'Дроби') Uravnenia.Drobi();
        if (currentElement.innerText == 'Корни') Uravnenia.Korni();
        if (currentElement.innerText == 'Логарифмы') Uravnenia.Logarifmy();
        if (currentElement.innerText == 'Системы') Uravnenia.Systemy();

    }   
    
    if (getComputedStyle(currentElement).color == 'rgb(255, 215, 0)') {

        if (currentElement.innerText == 'Обычные') Neravenstva.Oby4nye();
        if (currentElement.innerText == 'Квадратные') Neravenstva.Kvadratnye();
        if (currentElement.innerText == 'Степени') Neravenstva.Stepeni()
        if (currentElement.innerText == 'Дроби') Neravenstva.Drobi()
        if (currentElement.innerText == 'Корни') Neravenstva.Korni();
        if (currentElement.innerText == 'Логарифмы') Neravenstva.Logarifmy();
        if (currentElement.innerText == 'Системы') Neravenstva.Systemy();

    }

}

function addEventOnMathGrid() {

AllChild = MathGrid.childNodes;

    for (i = 0; i <= AllChild.length - 1; i++) {

        if (AllChild[i].nodeName != '#text' && AllChild[i].innerText[AllChild[i].innerText.length - 1] != ':') {

            AllChild[i].addEventListener('click', setHandlOnMathGrid);

        }

    }

}

function GenOperatorOrNumb(Max, Min) {

    return Math.floor(Math.random() * (Max - Min + 1)) + Min;

}

function checkOperator(currentOperator) {

    if (currentOperator == 1) return currentOperator = '+';
    if (currentOperator == 2) return currentOperator = '-';
    if (currentOperator == 3) return currentOperator = '*';
    if (currentOperator == 4) return currentOperator = ':';

}

function MathGridShow() {

MathGrid.style.visibility = 'visible';
document.querySelector('.Work_Txt').style.visibility = 'visible'

}

function GeomGridShow() {

GeomGridShow.style.visibility = 'visible';
document.querySelector('.Work_Txt').style.visibility = 'visible'


}

addEventOnMathGrid();
setInterval(setColorOnRememberMeTxt, 300);
createTime();
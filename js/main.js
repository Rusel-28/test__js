// document.write("gthdfberhdfbht");
// console.log("hello js"); 
// console.info("hello js");
// console.error("hello js"); /*-ошибка-*/
// console.warn("hello js");    /*-уведомление-*/

/*------------------------------------------------------------------*/
// var number;
// number = 10;
// const number = 10; /*--не изменяется-*/


/*------------------------------------------------------------------*/
// var number = 5;
// // number = 7;
// console.log("переменная: " + number + " !!!");


/*------------------------------------------------------------------*/
// var num;
// num = "hello";   /*--строка-*/
// num = true;     /*-- верно-*/
// num = false; /*--не верно-*/


/*------------------------------------------------------------------*/
// var num_1 = 5;
// var num_2 = "5";
// console.log(num_1 + num_2);   /*--55-*/

/*----------------------------------------------------------------*/
// var num_1 = 5;
// var num_2 = 15;
// console.log("результат: " + num_1 * num_2);  /*-75-*/


/*---------------------------------------------------------------*/
// var num_3 = 5;
// num_3 = num_3 + 7;
// console.log("результат: "  + num_3 );   /*-12-*/

/*-------------------------------------------------------------*/
// var num_4 = 5;
// num_4++;
// console.log("результат: "  + num_4 );  /*--6-*/


/*-------------------------------------------------------------*/
// var num_5 = 5;
// num_5--;
// console.log("результат: "  + num_5 );  /*-4-*/


/*------------------------------------------------------------*/
// var str_1 = "12";
// var str_2 = "2";
// console.log("результат: "  + str_1 + str_2);   /*-122-*/

/*------------------------------------------------------------*/
// var str_1 = Number("12");   /*- Number-*/
// var str_2 = Number("2");
// console.log("результат: "  + (str_1 + str_2));   /*-14-*/

/*-----------------------------------------------------*/
// console.log("Math: " + Math.PI);   /*-3.141592653589793-*/
// console.log("Math: " + Math.E);     /*-2.718281828459045-*/
// console.log("Math: " + Math.min(4, 6, 10));   /*-мин значение 4-*/
// console.log("Math: " + Math.max(4, 6, 10));    /*- max значение 10-*/

/*-------------------------------------------------*/
// var numbe = 15;
// if(numbe > 5) {
//     console.log("ok"); /*-+-*/
// }

/*-----------------------------------------------*/
// var numbe = "15";
// if(numbe == "15") {
//     console.log("ok");   /*-+-*/
// }


/*-------------------------------------------------*/
// var numbe = 15;
// if(numbe > 20) {
//     console.log("ok");   /*-  -  -*/
// }
// else if (numbe==20) {console.log("ok =20");}
// else if (numbe < 20) {console.log("ok <20");}

// else{
//     console.log("no");    /*-если ничего не верно -*/
// };


/*-----------------------------------------------------*/


// var numbe = 15;

// var isHasHouse = true;

// if(numbe > 20 || isHasHouse == true ) {   /*- или || будет верно ---*/ 
//     console.log("ok");                     
// }
// else if (numbe==20) {console.log("ok =20");}
// else if (numbe < 20) {console.log("ok <20");}

// else{
//     console.log("no");    
// };



/*-------------------------------------------*/
// var numbe = 15;

// var isHasHouse = true;

// if(numbe < 20 && isHasHouse == true ) {   /*- и && будет верно ---*/ 
//     console.log("ok");                     
// }
// else if (numbe==20) {console.log("ok =20");}
// else if (numbe < 20) {console.log("ok <20");}

// else{
//     console.log("no");    
// };



/*-----------------------------------------------*/

// var stroka = "30";
// switch(stroka){
//     case "4":   /*--случай проверки-*/
//         console.log("переменная 4");
//         break;   /*--конец тела-*/
//     case "45": 
//         console.log("переменная 45");
//         break;
//     case "word": 
//         console.log("переменная word");
//         break;

//     default:      /*-если ничего не верно-*/
//         console.log("defailt");
//         break;
// }


/*-------------------------масив----------------------------*/
// var arr = [5, true, "stroka", 5.7, 0, -100];    /*---масив данных внутри элементы масива---*/
// arr[3]="word";             /*-изменение масива-*/
// // console.log(arr[3]);       /*-вывод из масива по индексу-*/
// console.log(arr.length);     /*-получить длину масива 6 элементов-*/

// /*-------------------масив в масиве----------------------------------------*/

// var matrix = [
//     [6, 8, 4], ["stroka", 5.7], [0, -100]
// ];
// matrix[1][0] = 90;    /*- замена масива, элемента stroka---*/
// console.log(matrix[1]);    /*-вывод определенного масива по индексу-*/



/*------------------------------ЦИКЛЫ--for, while, ----------------------------------------*/

// for(var i = 1; i <= 10; i++) {
//     console.log(i);
// }


// for(var i = 100; i > 5; i /= 2) {
//     console.log(i);
// }


// var j = 1000;
// while(j > 100) {    
//     j -= 300;
//     console.log(j);
// }



// var x = 6;
// do { console.log(x);    /*---только один раз 100%--*/
//     x++;
// } while(x < 10);

// for(var i = 10; i <= 20; i += 2){
//     if(i > 15)
//     break;
    
//     console.log(i);
// }


// for(var i = 10; i <= 20; i++){
//     if(i % 2 == 0) 
//     continue;   /*---прозволяет пропустиить операцию---*/
    
//     console.log(i);
// }


// var arr = [5, 7, 3, 8, 9, 6];

// for(var i = 0; i < arr.length; i++) {
//     arr[i] *=2;      /*---умножаем на элемент масива--*/
//     console.log("Элемент " + (i + 1) + ": " + arr[i]);
// }

/*--------------------------------------------------------------------*/

// alert("какая хрошая погода");                   /*-всплывающие окно--*/




// var data = confirm("вы дома?");       /*----отмена и ok---*/
// if(data){
//     alert("вы молодец!!");
// }





// var data = prompt("скажите сколько вам лет?", 20);
// console.log(data);


/*----------------------------------------ПРОБНИК----------------------*/

var data = confirm("я могу задать пару вопросов для проверки работы программы?")
    
if(data){
    var name = prompt("Как вас зовут?");
    if (name.length < 10) {
        console.log("ok");
    };
    while (name.length > 10) {
        alert("Ну очень длинное имя, давай еще раз!!!");
        var name = prompt("Как вас зовут?");
    };
    
}

if(data){
        var let = prompt("скажите сколько вам лет?");
        while (let.replace (/\d/g, '').length){
            alert ('Введите цифры!!!  Пример: "16"');
            var let = prompt("скажите сколько вам лет?");
        }
        if(let > 0){
            while(let > 100){
                alert("столько не живут, давай еще раз!!! ");
                var let = prompt("скажите сколько вам лет?");
            }
            if(let){
                
            }
        }
        
        
        while(let < 0){
                alert("ты еще не родился, давай еще раз!!! ");
                var let = prompt("скажите сколько вам лет?");
            }
        alert("Ok!  Вам " + let + " !" );
        
};
        

if(data){
    alert("еще один вопросик)");
    var vremia = prompt("до скольки работаешь?");
        
            
    while ( vremia >= 25.00 || vremia.length > 5 ){
        alert ('Введите время ПРАВИЛЬНО!!!  Пример: "15.00"');
        var vremia = prompt("до скольки работаешь?");
        if(vremia > 0 || vremia < 25);
    } 


                
            
                if(  vremia <= 17.00){
                    alert("так рано до " + vremia);
                    
                    
                }
            
                else if (  vremia > 17.00){
                    alert("так поздно до " + vremia);
                    
                };
            
};

if(data){
    alert("Ваше имя " + name + ", вам " + let + " и вы работаете до " + vremia + " !" )
}

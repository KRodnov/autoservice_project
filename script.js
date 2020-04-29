let inform = [];

function printInfo() {
    $('#outPut').html('');
   inform.forEach(function (el) {


$('#outPut').append(`<div class='out ${el.urgency}' id="out"><b> Номер заявки:${el.number}</b> <br><br>
ФИО клиента: ${el.nameOwner} <br>
Номер телефона клиента: ${el.phoneOwner} <br> 
Гос. номер авто: ${el.regNum} <br> 
Модель авто: ${el.modelAuto}   
<br> Тип работы: ${el.kindWork} 
<br> Закреплен мастер: ${el.selectMechanic}
 <br> Цена: ${el.priceWork} .руб  
<br> Комментарий: ${el.comments} 
<br> Срочность: ${el.urgency}</div>`)

   });

}

function clearInfo() {
    $('#number').val("");
    $('#nameOwner').val("");
    $('#phoneOwner').val("");
    $('#regNum').val("");
    $('#modelAuto').val("");
    $('#priceWork').val("");
    $('#comments').val("");
}


let isNumberUniq = function (number) {
    let uniq = true;


    inform.forEach(function (el) {
    if(el.number === number) {
        uniq = false;

    }
    })
    return uniq;
}


$('#regBtn').click(function () {
    let number = parseInt($('#number').val());
    if(!isNumberUniq(number)){
      alert("Номер заявки уже зарегистрирован");
      return;
    }

    let regNum = $('#regNum').val();
    let modelAuto = $('#modelAuto').val();
    let nameOwner = $('#nameOwner').val();
    let phoneOwner = $('#phoneOwner').val();
    let kindWork = $('#kindWork').val();
    let selectMechanic = $('#selectMechanic').val();
    let priceWork = $('#priceWork').val();
    let comments = $('#coments').val();
    let urgency = $('#urgency').val();

    inform.push({number, regNum, modelAuto, nameOwner, phoneOwner, kindWork, selectMechanic,
        priceWork, comments, urgency
});
    orderTasks(inform);
    printInfo();
});


$('#addBtn').click(function () {
    clearInfo();
});




let fetchUrgencyPower = function(el) {
    switch(el.urgency) {
        case 'high': return 3;
        case 'medium': return 2;
        case 'low': return 1;
    }
};


let compareFunction = function(a,b) {
    let pA = fetchUrgencyPower(a); // 3
    let pB = fetchUrgencyPower(b); // 1
    if (pA === pB) {

    return a.number - b.number;
};

    return pA > pB ? -1 : 1;
};


let orderTasks = function(inform) {

    return inform.sort(compareFunction);

};

$('#sorting').click(printInfo);

let orderedTasks = orderTasks(inform);
printInfo(orderedTasks);

















// let urgency = [];
//
// function printUrgency() {
//     $('#outPut').html('');
//
// urgency.forEach(function (el) {
//
//     let highUrgency = [];
//     let mediumUrgency = [];
//     let lowUrgency = [];
//
//
//  switch (el.urgency) {
//      case  'high':
//      highUrgency.push(el);
//      break;
//      case  'medium':
//      mediumUrgency.push(el);
//      break;
//      case  'low':
//      lowUrgency.push(el);
//      break;
//  }}}};







// function printHigh() {
//     $('#outPut').html('');
//     high.forEach(function (el) {
//
//         $('#outPut').append(`<div class='out ${el.urgency}' id="out"></div>`)
//
//     })
// }
//
//
// $('.filter-button').click(function () {
// let button = $(e.target).attr("id");
//
// if (button === 'filterAll') {
//     printInfo()


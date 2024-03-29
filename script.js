window.onload = function() {
    alert("Please Change pagenumber");
}
let arr = [];  
let wholePage = document.getElementById('containId');
const division = document.createElement('div');
division.setAttribute('id', 'pageNumbers');
let pageNumber = document.getElementById('pageNumbers');
const page = document.getElementById('page');
const change = document.getElementById('change');
for(let i = 0; i<=10; i++){
    if(i == 0){
        let firstButton = '<a class = "val" onclick="first()">First</a>'
        let previousButton = '<a class = "val" onclick="previous()">Previous</a>'
        division.innerHTML = firstButton;
        division.innerHTML += previousButton;
    }else{
    let button = document.createElement('a'); 
    button.setAttribute('class', 'val');
     button.setAttribute('value', `${i}`);
     button.setAttribute('onclick', `buttons(${i})`);
     button.innerHTML = `${i}`; 
     division.append(button);  
    }
}    
let tab = document.createElement('table');


document.body.append(division);

const xhr = new XMLHttpRequest();
xhr.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');
xhr.send();
xhr.onload = function(){
arr = JSON.parse(xhr.responseText);
}

function buttons(value){
    localStorage.setItem('number', value);
    let arr2 = arr.slice(0,100);
    let startInd = (value*10) - 10;
    let endInd = 10;
    let arr1 = arr.splice(startInd,endInd);
    // let ol = `<ul>${check.map(check =>`<li>${check}</li>`).join(' ')}</ul>`;
    page.innerHTML = JSON.stringify(arr1);
    change.innerHTML = `<div>change : ${value}</div>`
    arr = arr2;
    }        
function previous(){
    let num = localStorage.getItem('number');
    let previousNum = num - 1;
    let arr2 = arr.slice(0,100);
    let startInd = (previousNum*10) - 10;
    let endInd = 10;
    let arr1 = arr.splice(startInd,endInd); 
    page.innerHTML = JSON.stringify(arr1);
    change.innerHTML = `<div>change : ${previousNum}</div>`
    arr = arr2;
    
}
function first(){
    localStorage.setItem('number',1);
    let first = localStorage.getItem('number');
    let arr2 = arr.slice(0,100);
    let arr1 = arr.splice(0,10); 
    page.innerHTML = JSON.stringify(arr1);
    change.innerHTML = `<div>change : ${first}</div>`
    arr = arr2;
}

    


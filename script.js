let wholePage = document.getElementById('containId');
const footer = document.createElement('footer');
footer.setAttribute('id', 'pageNumbers');
let pageNumber = document.getElementById('pageNumbers');
const page = document.getElementById('page');
const change = document.getElementById('change');
for(let i = 0; i<=100; i++){
    if(i == 0){
        let firstButton = '<a class = "val" onclick="first()">First</a>'
        let previousButton = '<a class = "val" onclick="previous()">Previous</a>'
        footer.innerHTML = firstButton;
        footer.innerHTML += previousButton;
    }else{
    let button = document.createElement('a'); 
    button.setAttribute('class', 'val');
     button.setAttribute('value', `${i}`);
     button.setAttribute('onclick', `buttons(${i})`);
     button.innerHTML = `${i}`; 
     footer.append(button);  
    }
}    
document.body.append(footer);


const xhr = new XMLHttpRequest();
xhr.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');
xhr.send();
xhr.onload = function(){
arr = JSON.parse(xhr.responseText);

}
function buttons(value){
    localStorage.setItem('number', value);
    let numbers = localStorage.getItem('number');
    page.innerHTML = `id : ${numbers} <br/> Name :  ${arr[value-1].name } <br/> Email : ${arr[value-1].email}`;
    change.innerHTML = `<div>change : ${numbers}</div>`
}
function previous(){
    let num = localStorage.getItem('number');
    let previousNum = num - 1;
    page.innerHTML = `id : ${previousNum} <br/> Name : ${arr[previousNum-1].name} <br/> Email : ${arr[previousNum-1].email}`;
    change.innerHTML = `<div>change : ${previousNum}</div>`
}
function first(){
    localStorage.setItem('number',1);
    let first = localStorage.getItem('number');
    page.innerHTML = `id : ${first} <br/> Name : ${arr[first-1].name} <br/> Email : ${arr[first-1].email}`;
    change.innerHTML = `<div>change : ${first}</div>`
}

    


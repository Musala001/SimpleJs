let txt = document.getElementById("txt");
let email = document.getElementById("email");
let btn = document.getElementById("btn");
let textarea = document.getElementById("msg");
let para = document.getElementById("wat");



btn.addEventListener("click",function(event){
    event.preventDefault();
    let name = txt.value;
    let emai = email.value;
    let mes = textarea.value;
    para.textContent = `Thank you, ${name}! We will reach out to you at ${emai} ur message was ${mes}`;
});
let receptorNumber="573166245103";
document.querySelector('#submit').addEventListener('click',function(){
    
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;

    let url = "https://api.whatsapp.com/send?phone="+receptorNumber+"&text=*_Mensaje desde página Web_*%0A%0A*Name:*%0A" + name + "%0A*Email*%0A" + email + "%0A*Message:*%0A" + message;
    window.open(url);

});
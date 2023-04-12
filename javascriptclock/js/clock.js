function saatGuncelle(){
    let now = new Date();
    let saat = now.getHours();
    let dakika = now.getMinutes();
    let saniye = now.getSeconds();
    let gun = now.getDay();
     
    let gunler = ['Pazar','Pazartesi','Sali','Carsamba','Persembe','Cuma','Cumartesi']


    document.getElementById('myClock').innerHTML = `${saat}:${dakika}:${saniye} ${gunler[gun]}`;
    
}

setInterval(saatGuncelle, 1000);



let name = prompt('Lutfen Adinizi Giriniz');
const info = document.querySelector('#myName');
info.innerHTML = `${name}`;

const btnMenu = document.getElementById("menu");
btnMenu.addEventListener('click', function (){
console.log('click');
document.getElementById('desplegable').classList.toggle('pliegue');

});
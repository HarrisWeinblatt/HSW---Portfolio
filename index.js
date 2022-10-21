// ball function to play with on banner

let ball = document.getElementById('float-circle');

function up() {
  ball.style.bottom = '350px';
}
function down() {
  ball.style.bottom = '50px';
}
document.addEventListener('mousedown', up);
document.addEventListener('mouseup', down);

// opens up my resume in a modal box

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
});



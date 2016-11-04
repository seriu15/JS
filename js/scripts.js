// Eventy

var list = document.getElementById('Lista'),
    add = document.getElementById('addElem');

add.addEventListener('click', function() {
  list.innerHTML += '<li>item ' + list.getElementsByTagName('li').length + '</li>';
});

let abrirMenu = document.getElementById('menu'),
    menu = document.getElementById('mn'),
    realMenu = document.getElementById('rm'),
    cerrarMenu = document.getElementById('cerrar');

abrirMenu.addEventListener('click', () => {
    menu.classList.add('response');
    realMenu.classList.add('r1');
})

cerrarMenu.addEventListener('click', () => {
    menu.classList.remove('response');
    realMenu.classList.remove('r1');
})
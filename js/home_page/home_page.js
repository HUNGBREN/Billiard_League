// let bar = document.querySelector('.mini_bar');
// let menu = document.querySelector('.main_menu')

// bar.addEventListener('click', () => {
//     menu.classList.toggle('active');
// })

function handle_mobile_nav() {
    let btn = document.querySelector('.mini_bar'),
        nav = document.querySelector('.main_menu ul');
    btn.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
}
handle_mobile_nav();


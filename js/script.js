
// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//ketika bakso menu diklik
document.querySelector('#bakso-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik Diluar sidebar untuk menghilangkan nav
const bakso = document.querySelector('#bakso-menu');

document.addEventListener('click', function(e) {
if(!bakso.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
}
});


// document.addEventListener("DOMContentLoaded", function () {
    
//     new TypeIt(".typing", {
//         strings: " Kami Menjual Berbagai Varian Bakso Untuk Kalian Nikmati:>",
//         speed: 50,
//         waitUntilVisible: true,
//     }).go()
//   });

new TypeIt(".typing", {
    speed: 50,
    waitUntilVisible: true,
  })
    .type("eeamat", { delay: 200 })
    .move(-4)
    .delete(1)
    .type("l")
    .move(null, { to: "END" })
    .type(" dataang")
    .pause(200)
    .delete(3)
    .type("ng di tko kami!")
    .move(-8)
    .type("o")
    .move(null, { to: "END" })
    .pause(200)
    .break({ delay: 200 })
    .type("Kami Menjual Berbagai Varian Bakso Untuk Kalian Nikmati:>")
    .go()
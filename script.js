// HTMLの要素（ボタンとメニュー）を取得して変数に入れる
const hamburger = document.getElementById('js-hamburger');
const navMenu = document.getElementById('js-nav-menu');

// ボタンがクリックされたときの動き
hamburger.addEventListener('click', () => {
    // ボタンとメニューに「is-active」クラスをつけたり外したりする
    hamburger.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
});

// メニュー内のリンクがクリックされたらメニューを閉じる
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        navMenu.classList.remove('is-active');
    });
});


window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.has('area')) {
        document.getElementById('change-area').value = urlParams.get('area');
    }
    if (urlParams.has('before')) {
        document.getElementById('before-edit').value = urlParams.get('before');
    }
    if (urlParams.has('after')) {
        document.getElementById('after-edit').value = urlParams.get('after');
    }
});
    
let submitted = false;
document.getElementById("proposal-form").onsubmit = function() {
    submitted = true;
}
function showSuccessMessage() {
    if (submitted) {
        document.getElementById("proposal-form").reset();
        document.getElementById("success-message").style.display = "block";
        submitted = false;
    }
}
const inputs = document.querySelectorAll("#proposal-form input, #proposal-form textarea");
const successMessage = document.getElementById("success-message");
inputs.forEach(input => {
    input.addEventListener("input", () => {
        if (successMessage.style.display == "block") {
            successMessage.style.display = "none";
        }
    });
});
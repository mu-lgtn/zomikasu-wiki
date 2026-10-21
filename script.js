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
let timeoutId = null;
const proposalForm = document.getElementById("proposal-form");
const submitButton = document.getElementById("submit-btn");
const successMessage = document.getElementById("success-message");
const errorMessage = document.getElementById("error-message");

if (proposalForm) {
    proposalForm.onsubmit = function() {
        submitted = true;

        if (submitButton) submitButton.disabled = true;
        if (successMessage) successMessage.style.display = "none";
        if (errorMessage) errorMessage.style.display = "none";

        timeoutId = setTimeout(() => {
            if (submitted) {
                submitted = false;
                resetSubmitButton();
                if (errorMessage) {
                    errorMessage.style.display = "block";
                }
            }
        },8000);
    }
}

function showSuccessMessage() {
    if (timeoutId) clearTimeout(timeoutId);
    
    if (submitted) {
        if (proposalForm) proposalForm.reset();
        if (successMessage) successMessage.style.display = "block";
        submitted = false;
        resetSubmitButton();
    }
}

function resetSubmitButton() {
    if (submitButton) {
        submitButton.disabled = false;
    }
}

const inputs = document.querySelectorAll("#proposal-form input, #proposal-form textarea");
inputs.forEach(input => {
    input.addEventListener("input", () => {
        if (successMessage && successMessage.style.display == "block") {
            successMessage.style.display = "none";
        }
        if (errorMessage && errorMessage.style.display == "block") {
            errorMessage.style.display = "none";
        }
    });
});
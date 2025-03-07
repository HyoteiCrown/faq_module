
// получаем все элементы по классу, при клике навопрос добавляем класс active - показываем блок ответа.

document.addEventListener('DOMContentLoaded', function() {
    let questions = document.querySelectorAll('.faq-question');
    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('active');
        });
    });
});

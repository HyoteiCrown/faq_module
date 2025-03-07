
; /* Start:"a:4:{s:4:"full";s:76:"/local/components/custom/faq.list/templates/.default/script.js?1741292627310";s:6:"source";s:62:"/local/components/custom/faq.list/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
document.addEventListener('DOMContentLoaded', function() {
    let questions = document.querySelectorAll('.faq-question');
    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('active');
        });
    });
});

/* End */
;; /* /local/components/custom/faq.list/templates/.default/script.js?1741292627310*/


; /* Start:"a:4:{s:4:"full";s:70:"/local/components/custom/faq/templates/default/script.js?1741279358383";s:6:"source";s:56:"/local/components/custom/faq/templates/default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(question =&gt; {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
});
/* End */
;; /* /local/components/custom/faq/templates/default/script.js?1741279358383*/

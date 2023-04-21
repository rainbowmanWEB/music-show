document.addEventListener('DOMContentLoaded', function(e) {
    let $learnMoreList = document.querySelector('.footer__learn-more-list');
    let $learnMoreListTitle = document.querySelector('.footer__learn-more-title');

    $learnMoreListTitle.addEventListener('click', (e) => {
        if ($learnMoreList.classList.contains('footer__learn-more-list_hidden')) {
            $learnMoreList.classList.toggle('footer__learn-more-list_show');
            $learnMoreList.classList.toggle('footer__learn-more-list_hidden');
            e.target.classList.toggle('footer__learn-more-title_active');
        } else {
            $learnMoreList.classList.toggle('footer__learn-more-list_hidden');
            $learnMoreList.classList.toggle('footer__learn-more-list_show');
            e.target.classList.toggle('footer__learn-more-title_active');
        }
    })
});
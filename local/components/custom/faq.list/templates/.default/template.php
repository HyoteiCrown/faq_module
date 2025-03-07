<?php if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?php if(empty($arResult["ITEMS"])):?>
    <p>Список вопросов пуст</p> <!-- заглушка, если элементы инфоблока пустые -->
<?php else:?>
    <div class="faq-list">

<!--Проходимся по массиву, если ответы есть - выводим.  -->
        <?php foreach($arResult["ITEMS"] as $arItem):?>
            <div class="faq-item">
                <div class="faq-question"><?=$arItem["QUESTION"]?></div>
                <div class="faq-answer"><?=$arItem["ANSWER"]?></div>
            </div>
        <?php endforeach;?>
    </div>
<?php endif;?>

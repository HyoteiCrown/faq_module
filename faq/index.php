<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
	$APPLICATION->SetTitle("Часто задаваемые вопросы:");?>

<?$APPLICATION->IncludeComponent(
    "custom:faq.list",
    "",
    Array(
        "IBLOCK_ID" => 34, // ID инфоблока
        "CACHE_TYPE" => "A",
        "CACHE_TIME" => "36000000"
    )
);?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>

<?php
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

if(!CModule::IncludeModule("iblock"))
    return;

//Поля элементов
$arSelect = array("ID", "NAME", "PREVIEW_TEXT", "SORT");
//Проверяем что поля активны
$arFilter = array("IBLOCK_ID" => $arParams["IBLOCK_ID"], "ACTIVE" => "Y");

//Получение отсортированных элементов
$res = CIBlockElement::GetList(array("SORT" => "ASC"), $arFilter, false, false, $arSelect);

while($ob = $res->GetNext())
{
    $arResult["ITEMS"][] = array(
        "ID" => $ob["ID"],
        "QUESTION" => $ob["NAME"], //название элемента - вопрос
        "ANSWER" => $ob["PREVIEW_TEXT"], //текст элемента - ответ
    );
}

$this->includeComponentTemplate();

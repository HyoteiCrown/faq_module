<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

$arComponentDescription = array(
    "NAME" => GetMessage("FAQ_LIST_NAME"),
    "DESCRIPTION" => GetMessage("FAQ_LIST_DESCRIPTION"),
    "SORT" => 10,
    "PATH" => array(
        "ID" => "custom", //ID группы
        "NAME" => "Пользовательские компоненты" //название группы
    ),
);

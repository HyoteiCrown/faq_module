<?php
use Bitrix\Main\Application;
use Bitrix\Main\Loader;
use Bitrix\Main\Entity\Base;
use Bitrix\Main\ModuleManager;

class faq_module extends CModule
{
    public function DoUninstall()
    {
        ModuleManager::unRegisterModule($this->MODULE_ID);
        
        // Удаляет компонент
        DeleteDirFilesEx("/local/components/custom/faq.list");
        
        // Удаляет инфоблок
        if (Loader::includeModule('iblock')) {
            $iblock = CIBlock::GetList(array(), array("CODE" => "faq"))->Fetch();
            if ($iblock) {
                CIBlock::Delete($iblock['ID']);
            }
        }
    }
};

?>
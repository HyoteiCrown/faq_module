
; /* Start:"a:4:{s:4:"full";s:87:"/bitrix/components/bitrix/landing.start/templates/.default/script.min.js?17407306401426";s:6:"source";s:68:"/bitrix/components/bitrix/landing.start/templates/.default/script.js";s:3:"min";s:72:"/bitrix/components/bitrix/landing.start/templates/.default/script.min.js";s:3:"map";s:72:"/bitrix/components/bitrix/landing.start/templates/.default/script.map.js";}"*/
(function(){"use strict";BX.namespace("BX.Landing");BX.Landing.PaymentAlert=function(n){if(typeof n.nodes==="undefined"){return}for(var t=0,e=n.nodes.length;t<e;t++){BX.bind(n.nodes[t],"click",(function(t){BX.Landing.PaymentAlertShow(n);BX.PreventDefault(t)}))}};BX.Landing.PaymentAlertShow=function(n){var t=BX.Landing.UI.Tool.ActionDialog.getInstance();var e=t.show({title:n.title?n.title:BX.message("LANDING_TPL_JS_PAY_TARIFF_TITLE"),content:'<div class="landing-payrate-popup-content"><span class="landing-payrate-popup-text">'+n.message+"</span></div>",confirm:BX.message("LANDING_TPL_JS_PAY_TARIFF"),contentColor:"grey",type:n.type||null});e.then((function(){top.window.location.href="/bitrix/tools/landing/ajax.php?redirect=upgrade"}),(function(){}))};BX.Landing.AlertShow=function(n){var t=BX.Landing.UI.Tool.ActionDialog.getInstance();var e=t.show({title:n.title?n.title:null,content:n.message,contentColor:"grey",type:n.type||null});e.then((function(){top.window.location.href="/bitrix/tools/landing/ajax.php?redirect=upgrade"}),(function(){}))};BX.ready((function(){var n=document.querySelectorAll(".bitrix24-metrika");if(!n){return}if(typeof BX.Landing.Metrika==="undefined"){return}var t=new BX.Landing.Metrika(true);for(var e=0,i=n.length;e<i;e++){BX.bind(n[e],"click",function(n){t.sendLabel(null,BX.data(this,"metrika24"),BX.data(this,"metrika24value"))}.bind(n[e]))}}))})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:95:"/bitrix/components/bitrix/landing.demo_preview/templates/.default/script.min.js?174073063912100";s:6:"source";s:75:"/bitrix/components/bitrix/landing.demo_preview/templates/.default/script.js";s:3:"min";s:79:"/bitrix/components/bitrix/landing.demo_preview/templates/.default/script.min.js";s:3:"map";s:79:"/bitrix/components/bitrix/landing.demo_preview/templates/.default/script.map.js";}"*/
(function(){"use strict";BX.namespace("BX.Landing");var e=BX.Landing.Utils.proxy;var t=BX.Landing.Utils.bind;var i=BX.Landing.Utils.addClass;var a=BX.Landing.Utils.removeClass;var r=BX.Landing.Utils.isNumber;var n=BX.Landing.Utils.style;var s=BX.Landing.Utils.data;var o=BX.Landing.Utils.addQueryParams;BX.Landing.TemplatePreview=function(t){this.closeButton=document.querySelector(".landing-template-preview-close");this.createButton=document.querySelector(".landing-template-preview-create");this.createByImportButton=document.querySelector(".landing-template-preview-create-by-import");this.title=document.querySelector(".landing-template-preview-input-title");this.description=document.querySelector(".landing-template-preview-input-description");this.themesPalette=document.querySelector(".landing-template-preview-themes");this.themesSiteColorNode=document.querySelector(".landing-template-preview-site-color");this.imageContainer=document.querySelector(".preview-desktop-body-image");this.loaderContainer=document.querySelector(".preview-desktop-body-loader-container");this.previewFrame=document.querySelector(".preview-desktop-body-preview-frame");this.baseUrlNode=document.querySelector(".landing-template-preview-base-url");this.siteGroupPalette=document.querySelector(".landing-template-preview-site-group");this.loader=new BX.Loader({});this.messages=t.messages||{};this.loaderText=null;this.progressBar=null;this.IsLoadedFrame=false;this.baseUrl="";this.color=null;this.ajaxUrl="";this.ajaxParams={};this.createStore=BX.type.isBoolean(t.createStore)?t.createStore:false;this.disableStoreRedirect=BX.type.isBoolean(t.disableStoreRedirect)?t.disableStoreRedirect:false;this.disableClickHandler=BX.type.isBoolean(t.disableClickHandler)?t.disableClickHandler:false;this.adminSection=BX.type.isBoolean(t.adminSection)?t.adminSection:null;this.zipInstallPath=t.zipInstallPath?t.zipInstallPath:null;this.appCode=t.appCode||"";this.siteId=t.siteId||0;this.langId=BX.type.isString(t.langId)?t.langId:"";this.folderId=t.folderId||0;this.replaceLid=t.replaceLid||0;this.isCrmForm=(t.isCrmForm||"N")==="Y";this.context_section=t.context_section||null;this.context_element=t.context_element||null;this.urlPreview=t.urlPreview||"";this.onCreateButtonClick=e(this.onCreateButtonClick,this);this.onCancelButtonClick=e(this.onCancelButtonClick,this);this.onFrameLoad=e(this.onFrameLoad,this);this.init();return this};BX.Landing.TemplatePreview.getInstance=function(e){return BX.Landing.TemplatePreview.instance||(BX.Landing.TemplatePreview.instance=new BX.Landing.TemplatePreview(e))};BX.Landing.TemplatePreview.prototype={init:function(){t(this.previewFrame,"load",this.onFrameLoad);t(this.closeButton,"click",this.onCancelButtonClick);if(!this.disableClickHandler){t(this.createButton,"click",this.onCreateButtonClick)}this.setBaseUrl();this.setDefaultColor();this.showPreview();this.buildHeader();if(BX.SidePanel.Instance.isReload===true){this.createButton.click()}},setBaseUrl:function(e){if(e===undefined){this.baseUrl=s(this.baseUrlNode,"data-base-url")}else{this.baseUrl=e}},setColor:function(e){if(e!==undefined){this.color=e}},setDefaultColor:function(){if(this.getActiveColorNode()){this.color=s(this.getActiveColorNode(),"data-value")}},getColor:function(){return this.color},createPreviewUrl:function(){var e={};if(!this.baseUrl){this.setBaseUrl()}if(this.getColor()){e={color:this.getColor()}}return o(this.baseUrl,e)},onFrameLoad:function(){if(this.createStore){new BX.Landing.SaveBtn(this.createButton)}this.IsLoadedFrame=true},getActiveColorNode:function(){var e=this.themesPalette.querySelector(".active");if(!e&&this.themesSiteColorNode){e=this.themesSiteColorNode.querySelector(".active")}return e},getActiveSiteGroupItem:function(){return this.siteGroupPalette.querySelector(".active")},showPreview:function(e){if(e===undefined){e=this.createPreviewUrl()}return this.showLoader().then(this.createFrameIfNeeded()).then(this.loadPreview(e)).then(this.hideLoader())},buildHeader:function(){var e=BX.create("div");new QRCode(e,{text:this.urlPreview,width:156,height:156,colorLight:"transparent"});this.showPopupButton=document.querySelector(".mobile-view");if(this.showPopupButton){var t=BX.PopupWindowManager.create("landing-popup-preview",this.showPopupButton,{content:BX.create("div",{props:{className:"landing-popup-preview-content"},children:[BX.create("div",{props:{className:"landing-popup-preview-title"},text:this.messages.LANDING_TPL_POPUP_TITLE}),BX.create("div",{props:{className:"landing-popup-preview-qr"},children:[e]}),BX.create("div",{props:{className:"landing-popup-preview-text"},text:this.messages.LANDING_TPL_POPUP_TEXT})]}),closeIcon:true,closeByEsc:true,noAllPaddings:true,autoHide:true,animation:"fading-slide",angle:{position:"top",offset:75},minWidth:375,maxWidth:375,contentBackground:"transparent"});this.showPopupButton.addEventListener("click",(function(){t.toggle()}))}},createFrameIfNeeded:function(){return function(){return new Promise(function(e){var i=function(){if(!this.previewFrame){this.previewFrame=BX.create("iframe",{props:{className:"preview-desktop-body-preview-frame"}});this.imageContainer.appendChild(this.previewFrame);t(this.previewFrame,"load",this.onFrameLoad)}if(!this.previewFrame.style.width){void n(this.previewFrame,{width:"100%",height:"calc(100vh - 69px)",border:"none"})}e(this.previewFrame)}.bind(this);if(document.readyState!=="complete"){BX.bind(window,"load",i.bind(this))}else{i()}}.bind(this))}.bind(this)},loadPreview:function(e){return function(){return new Promise(function(t){if(this.previewFrame.src!==e){this.previewFrame.src=e;this.previewFrame.onload=function(){t(this.previewFrame)}.bind(this);return}t(this.previewFrame)}.bind(this))}.bind(this)},showLoader:function(){return new Promise(function(e){void this.loader.show(this.loaderContainer);i(this.imageContainer,"landing-template-preview-overlay");e()}.bind(this))},hideLoader:function(){return function(e){return new Promise(function(t){void this.loader.hide();a(this.imageContainer,"landing-template-preview-overlay");t(e)}.bind(this))}.bind(this)},delay:function(e){e=r(e)?e:0;return function(t){return new Promise((function(i){setTimeout(i.bind(null,t),e)}))}},getValue:function(){var e={};if(this.getActiveColorNode()){if(this.themesSiteColorNode&&this.getActiveColorNode().parentElement===this.themesSiteColorNode){e[this.themesSiteColorNode.dataset.name]=this.getActiveColorNode().dataset.value}if(this.siteGroupPalette){e[this.siteGroupPalette.dataset.name]=this.getActiveSiteGroupItem().dataset.value}e[this.themesPalette.dataset.name]=this.getActiveColorNode().dataset.value}e[this.title.dataset.name]=this.title.value.replaceAll("&","").replaceAll("?","");e[this.description.dataset.name]=this.description.value;return e},getCreateUrl:function(){return o(this.createButton.getAttribute("href"),this.getValue())},onCancelButtonClick:function(e){e.preventDefault();top.BX.SidePanel.Instance.close()},onCreateButtonClick:function(e){e.preventDefault();if(BX.Dom.hasClass(this.createButton.parentNode,"needed-market-subscription")){top.BX.UI.InfoHelper.show("limit_subscription_market_templates");new Promise((e=>{const t=setInterval((()=>{if(BX.Dom.hasClass(this.createButton,"ui-btn-clock")){clearInterval(t);e()}}),500)})).then((()=>{BX.Dom.removeClass(this.createButton,"ui-btn-clock");BX.Dom.attr(this.createButton,"style","")}));return}const t=new BX.Landing.Metrika(true);t.sendData(this.getMetrikaParams("attempt"));if(this.isStore()&&this.IsLoadedFrame){this.loaderText=BX.create("div",{props:{className:"landing-template-preview-loader-text"},text:this.messages.LANDING_LOADER_WAIT});this.progressBar=new BX.UI.ProgressBar({column:true});this.progressBar.getContainer().classList.add("ui-progressbar-landing-preview");this.loaderContainer.appendChild(this.loaderText);this.loaderContainer.appendChild(this.progressBar.getContainer())}if(this.isStore()){if(this.IsLoadedFrame){this.showLoader().then((()=>{this.initCatalogParams();this.createCatalog()}))}}else if(this.zipInstallPath){this.finalRedirectAjax(this.getCreateUrl())}else{this.showLoader().then(this.delay(200)).then(function(){this.finalRedirectAjax(this.getCreateUrl())}.bind(this))}},getMetrikaParams:function(e){const t={category:this.isStore()?"stores":this.isCrmForm?"crm_forms":"landings",event:"create_page_template",params:{appCode:this.appCode},status:e};if(this.replaceLid>0){t.event="replace_template"}else if(this.siteId!==0){t.event="create_site_template"}if(this.context_section){t.c_section=this.context_section}if(this.context_element){t.c_element=this.context_element}return t},initCatalogParams:function(){if(this.createButton.hasAttribute("data-href")){this.ajaxUrl=this.createButton.getAttribute("data-href")}this.ajaxParams=this.getValue();this.ajaxParams["start"]="Y";this.ajaxParams["showcaseId"]="clothes"},createCatalog:function(){if(this.ajaxUrl===""){this.hideLoader();return}BX.ajax({method:"POST",dataType:"json",url:this.ajaxUrl,data:BX.ajax.prepareData(this.ajaxParams),onsuccess:BX.proxy(this.createCatalogResult,this)})},createCatalogResult:function(e){if(e.status==="continue"){this.ajaxParams["start"]="N";this.progressBar.update(e.progress);this.progressBar.setTextAfter(e.message);this.createCatalog()}else{this.finalRedirectAjax(e.url)}},finalRedirectAjax:function(e){if(this.zipInstallPath){let t=[];const i=this.getValue();for(let e in i){t["additional["+e+"]"]=i[e]}t["additional[siteId]"]=this.siteId;t["additional[folderId]"]=this.folderId;if(this.replaceLid>0){t["additional[replaceLid]"]=this.replaceLid}const a=this.getMetrikaParams("success");t["additional[st_category]"]=a.category;t["additional[st_event]"]=a.event;if(a.c_section){t["additional[st_section]"]=a.c_section}if(a.c_element){t["additional[st_element]"]=a.c_element}t["additional[app_code]"]=this.appCode;t["from"]=this.createParamsStrFromUrl(e);if(this.adminSection&&this.langId!==""){t["lang"]=this.langId}if(typeof top.BX.SidePanel!=="undefined"){const e=document.querySelector(".landing-popup-import");const i=document.querySelector(".landing-popup-import-loader");const a=document.querySelector(".preview-left");if(a&&i){this.loader.show(i);BX.Dom.addClass(a,"landing-import-start")}t["inSlider"]="N";if(this.siteId!==0){t["createType"]="PAGE"}let r;BX.ajax({method:"POST",dataType:"html",url:o(this.zipInstallPath,t),onsuccess:t=>{const a=new Promise(((i,a)=>{const n=BX.Dom.create("div",{html:t});BX.Dom.style(n,"display","none");e.append(n);let s;let o=0;r=setInterval((()=>{if(o>100){a(new Error("Time is up"))}s=n.querySelector(".rest-configuration-wrapper");if(s!==null){i(s)}o++}),300)}));a.then((t=>{clearInterval(r);if(BX.Dom.hasClass(t,"rest-configuration-wrapper")){const a=t.querySelector(".rest-configuration-title");const r=t.querySelector(".rest-configuration-start-icon-main-container");if(a&&r){BX.Dom.remove(a);BX.Dom.insertBefore(a,r.nextSibling)}this.loader.hide();BX.Dom.append(t,e);BX.Dom.style(i,"display","none")}}),(e=>{clearInterval(r);this.addRepeatCreateButton()}))}})}}else if(this.disableStoreRedirect){BX.ajax({method:"POST",dataType:"html",url:e,onsuccess:function(){if(typeof top.BX.SidePanel!=="undefined"){setTimeout((function(){top.BX.onCustomEvent("Landing:onDemoCreateStart");top.BX.SidePanel.Instance.close()}),100)}}})}else{window.location=e}},addRepeatCreateButton:function(){const e=document.querySelector(".landing-popup-import-repeat");if(e){BX.Dom.removeClass(e,"hide")}const i=document.querySelector(".landing-popup-import-repeat-button");if(i){t(i,"click",this.onRepeatButtonClick)}},onRepeatButtonClick:function(){const e=document.querySelector(".landing-popup-import-repeat");if(e){BX.Dom.addClass(e,"hide")}if(this.createButton){this.createButton.click()}},isStore:function(){return this.createStore},createParamsStrFromUrl(e){var t=e.match(/&app_code=[^&]+/i);var i="";if(t!==null){i=t[0].substr(10)}var a=e.match(/&title=[^&]+/iu);var r="";if(a!==null){r=a[0].substr(7)}var n=e.match(/&preview_id=[^&]+/i);var s="";if(n!==null){s=n[0].substr(12)}return"|"+i+"|"+r+"|"+s}}})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:99:"/bitrix/components/bitrix/landing.site_edit/templates/.default/landing-forms.min.js?174073063923307";s:6:"source";s:79:"/bitrix/components/bitrix/landing.site_edit/templates/.default/landing-forms.js";s:3:"min";s:83:"/bitrix/components/bitrix/landing.site_edit/templates/.default/landing-forms.min.js";s:3:"map";s:83:"/bitrix/components/bitrix/landing.site_edit/templates/.default/landing-forms.map.js";}"*/
(function(){"use strict";BX.namespace("BX.Landing");const t=BX.Landing.Utils.slice;const i=BX.Landing.Utils.proxy;const e=BX.Landing.Utils.bind;const o=BX.Landing.Utils.addClass;const s=BX.Landing.Utils.removeClass;const n=BX.Landing.Utils.data;const l=BX.Landing.Utils.onTransitionEnd;const a=function(t){const i=BX.Dom.getPosition(document.body);const e=top.window.innerWidth-i.width;const o=i.width*.4;const s=e+(i.width-o)/2;const n=top.window.innerHeight*.3;return{top:n,left:s}};BX.Landing.EditTitleForm=function(t){this.siteId=t.siteId;this.isAiAvailable=Boolean(t.isAiAvailable)===true;this.isAiActive=Boolean(t.isAiActive)===true;this.aiUnactiveInfoCode=t.aiUnactiveInfoCode??null;this.node=t.node;this.isEventTargetNode=Boolean(t.isEventTargetNode)===true;this.controlButtonContainer=this.node.querySelector(".landing-editable-field-buttons");this.btn=this.node.querySelector(".ui-title-input-btn-js");this.aiCopilotContainer=this.node.querySelector(".landing-editable-field-button.--copilot");this.label=this.node.querySelector(".landing-editable-field-label-js");this.input=this.node.querySelector(".landing-editable-field-input-js");this.hideInput=this.hideInput.bind(this);this.showInput=this.showInput.bind(this);this.adjustInputHeight=this.adjustInputHeight.bind(this);BX.bind(this.input,"input",this.adjustInputHeight);BX.bind(this.input,"paste",this.adjustInputHeight);BX.bind(this.btn,"click",this.showInput);if(this.isEventTargetNode){BX.bind(this.label,"click",this.showInput)}if(this.isAiAvailable&&this.aiCopilotContainer){this.initCopilotBtn()}};BX.Landing.EditTitleForm.prototype={initCopilotBtn(){const t=BX.Tag.render`
				<div class="ui-title-input-btn">
					<div class="ui-icon-set --copilot-ai"></div>
				</div>
			`;if(this.input.value===""){this.context=" "}else{this.context=this.input.value}const i=top.BX.AI?top.BX.AI.Copilot:BX.AI.Copilot;this.copilot=new i({moduleId:"landing",contextId:"settings",category:"landing_setting"});this.copilot.subscribe("finish-init",this.copilotFinishInitHandler.bind(this));this.copilot.subscribe("save",this.copilotSaveHandler.bind(this));this.copilot.subscribe("add_below",this.copilotAddBelowHandler.bind(this));BX.Event.bind(document,"click",this.onClickHandler.bind(this));this.copilot.init();BX.bind(t,"click",(()=>{if(this.isAiActive){if(this.finishInit){this.showCopilot()}else{const t=setInterval((()=>{if(this.finishInit){clearInterval(t);this.showCopilot()}}),500)}}else if(this.aiUnactiveInfoCode&&this.aiUnactiveInfoCode.length>0){BX.UI.InfoHelper.show(this.aiUnactiveInfoCode)}}));BX.Dom.append(t,this.aiCopilotContainer)},adjustInputHeight(){if(!this.input){return}BX.Dom.style(this.input,{height:"auto"});requestAnimationFrame((()=>{BX.Dom.style(this.input,{height:`${this.input.scrollHeight}px`})}))},showInput(t){t.stopPropagation();BX.Dom.style(this.label,"display","none");BX.Dom.addClass(this.controlButtonContainer,"--hidden");BX.Dom.style(this.input,"display","block");this.adjustInputHeight();this.input.focus();if(!BX.Dom.hasClass(this.input,"landing-editable-field-input-js-init")){this.input.selectionStart=this.input.value.length;BX.Dom.addClass(this.input,"landing-editable-field-input-js-init")}BX.bind(this.input,"focusout",this.hideInput)},hideInput(){this.label.textContent=this.input.value;BX.Dom.style(this.label,"display",null);BX.Dom.style(this.input,"display",null);BX.Dom.removeClass(this.controlButtonContainer,"--hidden");BX.unbind(document,"focusout",this.hideInput)},copilotSaveHandler(t){this.copilot.hide();this.label.innerText=t.data.result;this.input.value=t.data.result;this.adjustInputHeight()},copilotAddBelowHandler(t){this.copilot.hide();this.label.innerText=`${this.label.innerText} ${t.data.result}`;this.input.value=`${this.label.value} ${t.data.result}`;this.adjustInputHeight()},onClickHandler(t){if(!this.aiCopilotContainer.contains(t.target)&&this.copilot.isShown()){this.copilot.hide()}},copilotFinishInitHandler(){this.copilot.setSelectedText(this.context);this.finishInit=true},showCopilot(){this.copilot.setSelectedText(this.context);this.copilot.show({width:BX.Dom.getPosition(document.body).width*.4});const t=a(this.copilot);this.copilot.adjust({position:{top:t.top,left:t.left}})}};BX.Landing.FieldLengthLimited=function(t){this.field=t.field;this.node=t.node;this.length=t.length;this.isAiAvailable=Boolean(t.isAiAvailable)===true;this.isAiActive=Boolean(t.isAiActive)===true;this.aiCopilotContainer=this.field.parentNode.querySelector(".landing-editable-field-button.--copilot");if(this.isAiAvailable&&this.aiCopilotContainer){this.initCopilotBtn()}BX.bind(this.field,"keyup",(()=>{if(this.node){if(this.length){this.node.textContent=this.checkLength(this.field.value,this.length)}else{this.node.textContent=this.field.value}}}))};BX.Landing.FieldLengthLimited.prototype={initCopilotBtn(){this.context=this.field.value;if(this.context===""){this.context=" "}const t=BX.Tag.render`
				<div class="ui-title-input-btn">
					<div class="ui-icon-set --copilot-ai"></div>
				</div>
			`;const i=top.BX.AI?top.BX.AI.Copilot:BX.AI.Copilot;this.copilot=new i({moduleId:"landing",contextId:"settings",category:"landing_setting"});this.copilot.subscribe("finish-init",this.copilotFinishInitHandler.bind(this));this.copilot.subscribe("save",this.copilotSaveHandler.bind(this));this.copilot.subscribe("add_below",this.copilotAddBelowHandler.bind(this));BX.Event.bind(document,"click",this.onClickHandler.bind(this));this.copilot.init();BX.bind(t,"click",(()=>{if(this.isAiActive){if(this.finishInit){this.showCopilot()}else{const t=setInterval((()=>{if(this.finishInit){clearInterval(t);this.showCopilot()}}),500)}}else if(this.aiUnactiveInfoCode&&this.aiUnactiveInfoCode.length>0){BX.UI.InfoHelper.show(this.aiUnactiveInfoCode)}}));BX.Dom.append(t,this.aiCopilotContainer)},copilotFinishInitHandler(){this.copilot.setSelectedText(this.context);this.finishInit=true},copilotSaveHandler(t){this.copilot.hide();const i=this.checkLength(t.data.result,this.length);if(this.node){this.node.textContent=i}this.field.value=i},copilotAddBelowHandler(t){this.copilot.hide();if(this.node){this.node.textContent=this.checkLength(`${this.node.textContent} ${t.data.result}`,this.length)}this.field.value=this.checkLength(`${this.field.value} ${t.data.result}`,this.length)},onClickHandler(t){if(!this.aiCopilotContainer.contains(t.target)&&this.copilot.isShown()){this.copilot.hide()}},checkLength(t,i){if(i){if(t.length<=i){return t}return t.slice(0,Math.max(0,i))}return t},showCopilot(){this.context=this.field.value;if(this.context===""){this.context=" "}this.copilot.setSelectedText(this.context);this.copilot.show({width:BX.Dom.getPosition(document.body).width*.4});const t=a(this.copilot);this.copilot.adjust({position:{top:t.top,left:t.left}})}};BX.Landing.Favicon=function(){const t=BX("landing-form-favicon-change");const i=BX("landing-form-favicon-input");const e=BX("landing-form-favicon-value");const o=BX("landing-form-favicon-form");const s=BX("landing-form-favicon-src");const n=BX("landing-form-favicon-error");if(!o||!i||!t){return}BX.bind(t,"click",(t=>{BX.fireEvent(i,"click");BX.PreventDefault(t)}));BX.bind(i,"change",(t=>{BX.ajax.submitAjax(o,{method:"POST",dataType:"json",onsuccess(t){if(t.type==="success"&&typeof t.result!=="undefined"&&t.result!==false){e.value=t.result.id;s.setAttribute("src",t.result.src)}else{n.style.color="red"}}});BX.PreventDefault(t)}))};BX.Landing.Custom404And503=function(t,i){BX.bind(t,"change",(t=>{if(t.currentTarget.value===""){i.checked=false;i.click()}else{i.checked=true}}));BX.addCustomEvent("BX.UI.LayoutForm:onToggle",(e=>{if(e.getData().checkbox&&e.getData().checkbox===i&&!e.getData().checkbox.checked){t.value=""}}))};BX.Landing.Copyright=function(t,i){BX.bind(i,"change",(function(){let i=t.getAttribute("action");i=i.replace(/&feature_copyright=[NY]/,"");i+=`&feature_copyright=${this.checked?"Y":"N"}`;t.setAttribute("action",i)}))};BX.Landing.Access=function(t){BX.Landing.Access.selected=t.selected;this.table=t.table;const i="RIGHTS";const e=t.form;const o=t.select;let s=t.inc;BX.Access.Init({other:{disabled_cr:true}});BX.Access.SetSelected(BX.Landing.Access.selected,i);function n(){BX.Access.ShowForm({callback:t=>{for(const e in t){if(t.hasOwnProperty(e)){for(const n in t[e]){if(t[e].hasOwnProperty(n)){const l=this.table.rows.length;const a=this.table.insertRow(l-1);a.classList.add("landing-form-rights");BX.Landing.Access.selected[n]=true;a.insertCell(-1);a.insertCell(-1);a.cells[0].innerHTML=`${BX.Access.GetProviderName(e)} ${BX.util.htmlspecialchars(t[e][n].name)}:`+`<input type="hidden" name="fields[${i}][ACCESS_CODE][${s}]" value="${n}">`;a.cells[0].classList.add("landing-form-rights-right");a.cells[1].classList.add("landing-form-rights-left");a.cells[1].innerHTML=`${o.replace("#inc#",s)} <a href="javascript:void(0);" onclick="BX.Landing.Access.onRowDelete(this);"`+` data-id="${n}" class="landing-form-rights-delete"></a>`;s++}}}}},bind:i})}e.addEventListener("click",n.bind(this))};BX.Landing.Access.selected=[];BX.Landing.Access.onRowDelete=function(t){BX.Landing.Access.selected[BX.data(BX(t),"id")]=false;BX.remove(BX.findParent(BX(t),{tag:"tr"},true))};BX.Landing.Layout=function(t){this.params=t;this.params.messages=this.params.messages||{};this.container=this.params.container;this.areas=[];const i=[].slice.call(this.container.querySelectorAll(".landing-form-layout-item"));i.forEach((t=>{t.addEventListener("click",this.handleLayoutClick.bind(this))}));this.createBlocks(i[0].dataset.block);if(typeof this.params.areasCount!=="undefined"){this.changeLayout(this.params.areasCount,this.params.current)}const e=this.container.querySelector(".landing-form-select-buttons");e.addEventListener("click",this.handlerOnArrowClick.bind(this));if(this.params.tplUse){this.useCheck=this.params.tplUse;this.inputs=this.container.querySelectorAll(".layout-switcher");BX.addCustomEvent("BX.UI.LayoutForm:onToggle",(t=>{if(t.getData().checkbox&&t.getData().checkbox===this.useCheck){this.container.classList.add("landing-form-page-layout-short");this.inputs.forEach((t=>{t.checked=false}))}}))}};BX.Landing.Layout.prototype={handlerOnArrowClick(t){const i=this.container.querySelector(".landing-form-list-inner");if(t.target.classList.contains("landing-form-select-next")){i.classList.add("--prev")}else{i.classList.remove("--prev")}},createBlocks(t){const i=this.params.tplRefs.value.split(",");this.areas=[];const e=this.container.querySelector(".landing-form-layout-block-container");e.innerHTML="";for(let o=0;o<t;o++){const t=BX.create("div",{attrs:{className:"landing-form-layout-block-item"}});const s=o+1;let n="";if(typeof i[o]!=="undefined"&&i[o].includes(":")){n=parseInt(i[o].split(":")[1]);if(n>0){n=`#landing${n}`}else{n=""}}const l=new BX.Landing.UI.Field.LinkUrl({title:`${this.params.messages.area} #${s}`,content:n,textOnly:true,disableCustomURL:true,disableBlocks:true,disallowType:true,enableAreas:true,allowedTypes:[BX.Landing.UI.Field.LinkUrl.TYPE_PAGE],typeData:{button:{className:"fa fa-chevron-right",text:"",action:BX.Landing.UI.Field.LinkUrl.TYPE_PAGE},hideInput:false,contentEditable:false},settingMode:true,options:{siteId:this.params.siteId,landingId:this.params.landingId,filter:{"=TYPE":this.params.type}},onInit:this.rebuildHiddenField.bind(this),onInput:this.rebuildHiddenField.bind(this),onValueChange:this.rebuildHiddenField.bind(this)});this.areas[o]=l;t.appendChild(l.layout);e.appendChild(t)}},rebuildHiddenField(){let t="";for(let i=0,e=this.areas.length;i<e;i++){t+=`${i+1}:${this.areas[i].getValue()?this.areas[i].getValue().slice(13):0},`}this.params.tplRefs.value=t},handleLayoutClick(t){const i=t.target.parentNode;const e=this.container.querySelector(".landing-form-layout-item-selected");if(e){e.classList.remove("landing-form-layout-item-selected")}this.changeLayout(i.dataset.block,i.dataset.layout)},changeLayout(t,i){const e=this.container.querySelector(".landing-form-layout-detail");this.container.classList.remove("landing-form-page-layout-short");e.classList.remove("landing-form-layout-detail-hidden");this.createBlocks(t);if(typeof i!=="undefined"){this.changeLayoutImg(i)}this.params.tplRefs.value=""},changeLayoutImg(t){const i=this.container.querySelectorAll(".landing-form-layout-img");for(const e of i){if(e.dataset.layout===t){e.style.display="block"}else{e.style.display="none"}}}};BX.Landing.ToggleAdditionalFields=function(t){this.isOpen=false;this.form=t;this.hiddenRows=BX.convert.nodeListToArray(this.form.querySelectorAll(BX.Landing.ToggleAdditionalFields.SELECTOR_ROWS));this.toggleContainer=this.form.querySelector(BX.Landing.ToggleAdditionalFields.SELECTOR_CONTAINER);BX.Event.bind(this.toggleContainer,"click",this.onToggleClick.bind(this));if(window.location.hash){const t=window.location.hash.slice(1);this.hiddenRows.forEach((i=>{const e=i.dataset[BX.Landing.ToggleAdditionalFields.DATA_ROW_OPTION];if(e&&e===t){this.highlightHiddenRow(i)}}));const i=this.form.querySelector(`[${BX.Landing.ToggleAdditionalFields.DATA_MAIN_OPTION_NAME}="${t}"]`);if(i){this.highlightRow(i)}}};BX.Landing.ToggleAdditionalFields.SELECTOR_ROWS=".landing-form-additional-row";BX.Landing.ToggleAdditionalFields.SELECTOR_CONTAINER=".landing-form-additional-fields-js";BX.Landing.ToggleAdditionalFields.DATA_OPTION="landingAdditionalOption";BX.Landing.ToggleAdditionalFields.DATA_ROW_OPTION="landingAdditionalDetail";BX.Landing.ToggleAdditionalFields.DATA_ROW_OPTION_NAME="data-landing-additional-detail";BX.Landing.ToggleAdditionalFields.DATA_MAIN_OPTION_NAME="data-landing-main-option";BX.Landing.ToggleAdditionalFields.CLASS_HIGHLIGHT="landing-form-row-highlight";BX.Landing.ToggleAdditionalFields.prototype={onToggleClick(t){if(t.target.dataset[BX.Landing.ToggleAdditionalFields.DATA_OPTION]){this.onHeaderClick(t)}else{this.toggleRows()}},toggleRows(){return this.isOpen?this.hideRows():this.showRows()},hideRows(){const t=[];this.hiddenRows.forEach((i=>{if(i.scrollHeight>0){i.style.height=0;t.push(l(i))}}));BX.Dom.removeClass(this.form,"landing-form-additional-open");this.isOpen=false;return Promise.all(t)},showRows(){const t=[];this.hiddenRows.forEach((i=>{if(i.scrollHeight>0){i.style.height="auto";t.push(l(i))}}));BX.Dom.addClass(this.form,"landing-form-additional-open");this.isOpen=true;return Promise.all(t)},onHeaderClick(t){const i=t.target.dataset[BX.Landing.ToggleAdditionalFields.DATA_OPTION];if(i){const t=`[${BX.Landing.ToggleAdditionalFields.DATA_ROW_OPTION_NAME} = "${i}"]`;const e=this.form.querySelector(t);if(e){this.highlightHiddenRow(e)}}},highlightHiddenRow(t){const i=this.isOpen?Promise.resolve():this.showRows();i.then((()=>{this.highlightRow(t)}))},highlightRow(t){BX.Dom.addClass(t,BX.Landing.ToggleAdditionalFields.CLASS_HIGHLIGHT);window.scrollTo({top:BX.pos(t).top,behavior:"smooth"});setTimeout((()=>{BX.Dom.removeClass(t,BX.Landing.ToggleAdditionalFields.CLASS_HIGHLIGHT)}),2500)}};BX.Landing.ExternalMetrika=function(t,i,e){if(t.value===""){i.disabled=true;e.disabled=true}t.addEventListener("input",o.bind(this));function o(){if(t.value===""){i.disabled=true;i.checked=false;e.disabled=true;e.checked=false}else{i.disabled=false;e.disabled=false}}};BX.Landing.SaveBtn=function(t){t.addEventListener("click",i.bind(this));function i(){t.classList.add("ui-btn-clock");t.style.cursor="default";t.style.pointerEvents="none"}};BX.Landing.Cookies=function(){this.bgPickerBtn=document.querySelector(".landing-form-cookies-color-bg");this.textPickerBtn=document.querySelector(".landing-form-cookies-color-text");this.simplePreview=document.querySelector(".landing-form-cookies-settings-type-simple");this.advancedPreview=document.querySelector(".landing-form-cookies-settings-type-advanced");this.positions=document.querySelectorAll(".landing-form-cookies-position-item");this.inputApp=document.querySelector("#radio-cookies-mode-A");this.inputInfo=document.querySelector("#radio-cookies-mode-I");this.settings=document.querySelector(".landing-form-cookies-settings-wrapper");this.bgPicker=new BX.ColorPicker({bindElement:this.bgPickerBtn,popupOptions:{angle:false,offsetTop:5},onColorSelected:this.onBgColorSelected.bind(this),colors:BX.Landing.ColorPicker.prototype.setColors()});this.textPicker=new BX.ColorPicker({bindElement:this.textPickerBtn,popupOptions:{angle:false,offsetTop:5},onColorSelected:this.onTextColorSelected.bind(this),colors:BX.Landing.ColorPicker.prototype.setColors()});this.setSelectedBgColor(this.bgPickerBtn.value);this.setSelectedTextColor(this.textPickerBtn.value);this.hideCookiesSettings();this.bindEvents()};BX.Landing.Cookies.prototype={bindEvents(){this.positions.forEach((t=>{t.addEventListener("click",this.onSelectCookiesPosition.bind(this))}));this.bgPickerBtn.addEventListener("click",this.showBgPicker.bind(this));this.textPickerBtn.addEventListener("click",this.showTextPicker.bind(this));this.inputInfo.addEventListener("change",this.hideCookiesSettings.bind(this));this.inputApp.addEventListener("change",this.showCookiesSettings.bind(this))},onBgColorSelected(){const t=this.bgPicker.getSelectedColor();this.setSelectedBgColor(t)},onTextColorSelected(){const t=this.textPicker.getSelectedColor();this.setSelectedTextColor(t)},onSelectCookiesPosition(t){this.positions.forEach((t=>{if(t.classList.contains("landing-form-cookies-position-item-selected")){t.classList.remove("landing-form-cookies-position-item-selected")}}));t.currentTarget.classList.add("landing-form-cookies-position-item-selected")},showBgPicker(){this.bgPicker.open()},showTextPicker(){this.textPicker.open()},setSelectedBgColor(t){this.bgPickerBtn.style.background=t;this.bgPickerBtn.value=t;this.simplePreview.style.background=t;this.advancedPreview.style.background=t},setSelectedTextColor(t){this.textPickerBtn.style.background=t;this.textPickerBtn.value=t;this.advancedPreview.style.color=t;const i=document.querySelectorAll(".landing-form-cookies-settings-preview-svg");i.forEach((i=>{i.style.fill=t}))},hideCookiesSettings(){if(this.inputInfo.checked){this.settings.style.height="0";this.settings.style.opacity="0"}},showCookiesSettings(){if(this.inputApp.checked){this.settings.style.height=`${this.settings.scrollHeight}px`;this.settings.style.opacity="1";l(this.settings).then((()=>{this.settings.height="auto"}))}}};BX.Landing.B24ButtonColor=function(t,i){this.typeSelector=t;this.colorInput=i;this.valueControlWrap=BX.findParent(i,{class:"ui-ctl"});e(t,"change",this.checkVisibility.bind(this));this.checkVisibility()};BX.Landing.B24ButtonColor.prototype={checkVisibility(){this.valueControlWrap.hidden=this.typeSelector.value!=="custom";this.colorInput.labels.forEach((t=>{t.hidden=this.typeSelector.value!=="custom"}))}};BX.Landing.NeedPublicationField=function(t){t.forEach((t=>{const i=BX(t);if(i){BX.bind(i,"click",(()=>{BX.UI.Dialogs.MessageBox.alert(BX.Loc.getMessage("LANDING_EDIT_NEED_PUBLICATION"))}))}}))};BX.Landing.ColorPalette=function(t,i){this.allColorsNode=t;this.customColorNode=null;this.colorPickerNode=null;if(typeof i!=="undefined"&&i){this.customColorNode=i;this.colorPickerNode=i.querySelector('input[type="text"]')}this.init();return this};BX.Landing.ColorPalette.prototype={init(){let i;if(this.allColorsNode){i=t(this.allColorsNode.children)}if(this.customColorNode){i=[...i,this.customColorNode]}if(i){i.forEach(this.initSelectableItem,this)}if(i){this.setColor()}},setColor(t){if(t===undefined){this.color=n(this.getActiveColorNode(),"data-value")}else{this.color=t}if(this.colorPickerNode){this.colorPickerNode.setAttribute("value",this.color)}},getActiveColorNode(){let t;if(this.allColorsNode){t=this.allColorsNode.querySelector(".active")}if(!t&&this.customColorNode&&BX.Dom.hasClass(this.customColorNode,"active")){t=this.customColorNode}if(!t&&this.allColorsNode){t=this.allColorsNode.firstElementChild}return t},initSelectableItem(t){e(t,"click",i(this.onSelectableItemClick,this))},onSelectableItemClick(t){t.preventDefault();if(t.currentTarget.parentElement===this.allColorsNode&&t.currentTarget.hasAttribute("data-value")){s(this.getActiveColorNode(),"active");o(t.currentTarget,"active");this.setColor(n(t.currentTarget,"data-value"))}this.currentTarget=t.currentTarget;BX.Event.EventEmitter.subscribe("BX.Landing.ColorPickerTheme:onSelectColor",(()=>{if(this.currentTarget.hasAttribute("data-value")){s(this.getActiveColorNode(),"active");o(this.currentTarget,"active");this.setColor(n(this.currentTarget,"data-value"))}}))}};BX.Landing.ColorPicker=function(t,i){let e;if(i){e=i.defaultColor}this.picker=new BX.ColorPicker({bindElement:t,popupOptions:{angle:false,offsetTop:5},onColorSelected:this.onColorSelected.bind(this),colors:this.setColors(),selectedColor:e});this.input=t;this.colorPickerNode=t.parentElement;BX.addClass(this.colorPickerNode,"ui-colorpicker");this.colorIcon=BX.create("span",{props:{className:"ui-colorpicker-color"}});BX.insertBefore(this.colorIcon,this.input);this.colorValue=t.value;if(!this.colorValue&&e){t.value=e;this.colorValue=t.value}if(this.colorValue){BX.adjust(this.colorIcon,{attrs:{style:`background-color:${this.colorValue}`}});BX.addClass(this.colorPickerNode,"ui-colorpicker-selected")}this.clearBtn=BX.create("span",{props:{className:"ui-colorpicker-clear"}});BX.insertAfter(this.clearBtn,this.input);BX.bind(this.colorPickerNode,"click",this.show.bind(this));BX.bind(this.clearBtn,"click",this.clear.bind(this))};BX.Landing.ColorPicker.prototype={onColorSelected(t){this.colorPickerNode.classList.add("ui-colorpicker-selected");this.colorIcon.style.backgroundColor=t;this.input.value=t;BX.Event.EventEmitter.emit(this,"BX.Landing.ColorPicker:onSelectColor")},show(t){if(t.target===this.clearBtn){return}this.picker.open()},clear(){this.colorPickerNode.classList.remove("ui-colorpicker-selected");this.input.value="";this.picker.setSelectedColor(null);BX.Event.EventEmitter.emit(this,"BX.Landing.ColorPicker:onClearColorPicker")},setColors(){return[["#f5f5f5","#eeeeee","#e0e0e0","#9e9e9e","#757575","#616161","#212121"],["#cfd8dc","#b0bec5","#90a4ae","#607d8b","#546e7a","#455a64","#263238"],["#d7ccc8","#bcaaa4","#a1887f","#795548","#6d4c41","#5d4037","#3e2723"],["#ffccbc","#ffab91","#ff8a65","#ff5722","#f4511e","#e64a19","#bf360c"],["#ffe0b2","#ffcc80","#ffb74d","#ff9800","#fb8c00","#f57c00","#e65100"],["#ffecb3","#ffe082","#ffd54f","#ffc107","#ffb300","#ffa000","#ff6f00"],["#fff9c4","#fff59d","#fff176","#ffeb3b","#fdd835","#fbc02d","#f57f17"],["#f0f4c3","#e6ee9c","#dce775","#cddc39","#c0ca33","#afb42b","#827717"],["#dcedc8","#c5e1a5","#aed581","#8bc34a","#7cb342","#689f38","#33691e"],["#c8e6c9","#a5d6a7","#81c784","#4caf50","#43a047","#388e3c","#1b5e20"],["#b2dfdb","#80cbc4","#4db6ac","#009688","#00897b","#00796b","#004d40"],["#b2ebf2","#80deea","#4dd0e1","#00bcd4","#00acc1","#0097a7","#006064"],["#b3e5fc","#81d4fa","#4fc3f7","#03a9f4","#039be5","#0288d1","#01579b"],["#bbdefb","#90caf9","#64b5f6","#2196f3","#1e88e5","#1976d2","#0d47a1"],["#c5cae9","#9fa8da","#7986cb","#3f51b5","#3949ab","#303f9f","#1a237e"],["#d1c4e9","#b39ddb","#9575cd","#673ab7","#5e35b1","#512da8","#311b92"],["#e1bee7","#ce93d8","#ba68c8","#9c27b0","#8e24aa","#7b1fa2","#4a148c"],["#f8bbd0","#f48fb1","#f06292","#e91e63","#d81b60","#c2185b","#880e4f"],["#ffcdd2","#ef9a9a","#e57373","#f44336","#e53935","#d32f2f","#b71c1c"]].map(((t,i,e)=>e.map((t=>t[i]))))}}})();
/* End */
;; /* /bitrix/components/bitrix/landing.start/templates/.default/script.min.js?17407306401426*/
; /* /bitrix/components/bitrix/landing.demo_preview/templates/.default/script.min.js?174073063912100*/
; /* /bitrix/components/bitrix/landing.site_edit/templates/.default/landing-forms.min.js?174073063923307*/

//# sourceMappingURL=template_696cef1fae974d24f52356ffb59eb2e9.map.js
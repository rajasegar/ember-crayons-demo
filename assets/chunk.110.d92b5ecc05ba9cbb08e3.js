(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[110],{148:function(e,t,l){"use strict"
l.r(t),l.d(t,"datatable",(function(){return z})),l.d(t,"datepicker",(function(){return a})),l.d(t,"dropdown",(function(){return s})),l.d(t,"fileUploader",(function(){return o})),l.d(t,"filters",(function(){return p})),l.d(t,"form",(function(){return n})),l.d(t,"formBuilder",(function(){return k})),l.d(t,"modal",(function(){return r})),l.d(t,"pagination",(function(){return d})),l.d(t,"platformCouiWidgets",(function(){return c})),l.d(t,"platformTable",(function(){return m})),l.d(t,"search",(function(){return i})),l.d(t,"searchDropdown",(function(){return g})),l.d(t,"sortSelect",(function(){return u}))
var a={cancel:"Mégse",update:"Frissítés",to:"eddig",date:"Dátum",time:"Idő"},s={add:"Hozzáadás",cancel:"Mégse"},o={text:"Fájl feltöltése",description:"vagy húzza át ide",acceptError:"Kizárólag CSV-fájlokat töltsön fel.",maxFileSizeError:"Meghaladta a fájlméretet.",maxFilesLimitError:"Meghaladta a fájlkorlátot.",fileUploadError:"Fájl feltöltése sikertelen",uploading:"Feltöltés",selectedFiles:"Kiválasztott fájlok",remove:"Eltávolítás"},r={cancel:"Mégse",ok:"OK"},i={search:"Keresés",noItemsFound:"Nem található elem",noDataAvailable:"Nincs elérhető adat",startTyping:"Kezdjen el gépelni..."},n={required:"{{field}} kötelező",invalidUrl:"Érvényes URL-címet adjon meg",invalidEmail:"Érvényes e-mail címet adjon meg",invalidNumber:"Érvényes számot adjon meg"},d={buttonGroupLabel:"Oldalszámozási vezérlők",previousButtonLabel:"Előző",nextButtonLabel:"Következő",content:"<span class='record'>{{start}}</span> - <span class='record'>{{end}}</span> / {{total}}"},z={chooseColumns:"Oszlopok kiválasztása",actions:"Műveletek",hide:"Elrejtés",show:"Megjelenítés",showMore:"Több megjelenítése",showLess:"Kevesebb megjelenítése",customizeColumns:"Oszlopok testreszabása"},m={delete:"Törlés",sortby:"Rendezési feltétel",orderby:"Rendezés módja"},k={fieldRequired:"Kötelező űrlap elküldésénél",fieldRequiredTag:"Kötelező",fieldUnique:"Egyedi érték elfogadása minden rekordhoz",fieldUniqueHoverText:"Ebben a mezőben nem lehet két különböző rekordnak egyforma értéke. Ez a beállítás később nem módosítható.",fieldUniqueTag:"Egyedi",fieldFilter:"Használja ezt a mezőt rekordok szűréséhez",fieldFilterHoverText:"Szűrje rekordjai listáját ezt a mezőt használva. Ezt a beállítást később nem módosíthatja.",fieldFilterTag:"Szűrhető",fieldTypeRelationship:"Keresési kapcsolat",fieldTypeRelationshipDesc:"Társítások létrehozása két objektum között.",fieldTypeRelationshipDescLinkLabel:"További információk",fieldTypeText:"Szöveg",fieldTypeParagraph:"Bekezdés",fieldTypeNumber:"Szám",fieldTypeDecimal:"Tizedesjegy",fieldTypeDate:"Dátum",fieldTypeDropdown:"Legördülő lista",fieldTypeCheckbox:"Jelölőnégyzet",fieldTypeMultiselect:"Több kiválasztása",fieldTypeSingleLineText:"Egysoros szöveg",fieldTypeMultiLineText:"Többsoros szöveg",fieldTypeMultiSelectDropdown:"Többválasztós legördülő menü",fieldTypeDependent:"Függő mező",filterFields:"Szűrő :",filterOptionAllFields:"Minden mező",nonCustomDefaultFieldTag:"Alapértelmezett",lookupUniqueTag:"Egyedi",primaryFieldTag:"Elsődleges mező",primaryFieldHeader:"Elsődleges mező",primaryFieldNameHint:"Ez az objektumhoz tartozó elsődleges mező, amely egyedileg képvisel minden rekordot és nem lehet törölni.",deleteFieldTitle:"Biztosan szeretné törölni a mezőt, {{label}} ?",deleteFieldMessage:"Ez a mező véglegesen törlésre kerül és a társított adatok elvesznek. Biztosan folytatja?",deleteFieldSubmit:"Törlés",searchFields:"Keresés mezőcímke alapján",customizeWidget:"Widget testreszabása",addChoices:"Választási lehetőségek hozzáadása",addChoice:"Választási lehetőség hozzáadása",choicePlaceholderSuffix:"Választási lehetőség",headerFieldTypes:"Mező típusok",headerFields:"Mezők",fieldTypesDragDrop:"Áthúzás innen",headerProductConvProps:"Beszélgetés tulajdonságai",subHeaderProductConvProps:"A beszélgetések kategorizálása és nyomon követése. Hozzon létre kategóriát, és adjon hozzá több alkategóriát a beszélgetésekhez. ",fieldTypesDragDropConvProps:"Húzza át a tulajdonságok létrehozásához",behaviour:"Ügyintézők viselkedése",fieldLabel:"Ügyintézők címkéje",fieldLabelPlaceholder:"Adja meg a mező címkét",internalName:"Belső név",fieldNamePlaceholder:"Írja be a mező nevét",addFieldBtn:"Mező hozzáadása",saveFieldBtn:"Mentés",cancelFieldBtn:"Mégse",lookupAssociationHeader:"Társítás",lookupSourceObject:"Forrás objektum",lookupRelationshipPlaceholder:"Kapcsolat kiválasztása",lookupRelationshipLabel:"Kapcsolat típusa",lookupTargetPlaceholder:"Célobjektum kiválasztása",lookupTargetLabel:"Célobjektum",relationshipManyToOne:"Sok az egyhez",relationshipManyToOneDesc:"Kösse össze a forrásobjektum több rekordját a célobjektum egy rekordjával. Pl.: Egy Kontakt több Megrendelést is létrehozhat.",relationshipOneToOne:"Egy az egyhez",relationshipOneToOneDesc:"Kösse össze a forrásobjektum egyetlen rekordját a célobjektum egyetlen rekordjával. Pl.: Egy személy csak egyetlen útlevéllel rendelkezhet.",relationshipManyToOneCO:"<span class='fb-field-lookup-relationship-object-name'>{{source}}</span> sok rekordja <span class='fb-field-lookup-relationship-object-name'>{{target}}</span> egyetlen rekordjához társítható.",relationshipOneToOneCO:"<span class='fb-field-lookup-relationship-object-name'>{{source}}</span> egyetlen rekordja <span class='fb-field-lookup-relationship-object-name'>{{target}}</span> egyetlen rekordjához társítható.",relationshipManyToOneNative:"<span class='fb-field-lookup-relationship-object-name'>{{source}}</span> sok rekordja egyetlen <span class='fb-field-lookup-relationship-object-name'>{{target}}</span> célelemmel társítható.",relationshipOneToOneNative:"<span class='fb-field-lookup-relationship-object-name'>{{source}}</span> egyetlen rekordja egyetlen <span class='fb-field-lookup-relationship-object-name'>{{target}}</span> célelemmel társítható.",customizeWidgetModalHeader:"Widget testreszabása",customizeWidgetModalHint:"Válasszon ki legfeljebb 5 mezőt, melyet a widgeten megjeleníthet.",customizeWidgetModalSaveBtn:"Mentés",customizeWidgetModalCancelBtn:"Mégse",noSearchItemsFound:"Egyező mező nem található",freePlanFieldAddDisabledHeader:"Tudta, hogy egyéni mezőket is felvehet?",freePlanFieldAddDisabledMessage:"Egyéni mezők érhetők el a Növekedési tervből és a fentiekből.",freePlanFieldAddDisabledButton:"Fedezze fel a terveket",errors:{emptyFieldName:"A mezőcímke kötelező elem.",emptyRelationshipType:"Kapcsolat típusát kötelező megadni.",emptyTargetObject:"A célobjektum kötelező elem.",emptyChoice:"A választó szöveg kötelező elem.",duplicate:"A legördülő választási lehetőség már létezik",minimum:"Legalább egy választási lehetőséget adjon meg",formErrors:"Javítsa ki a hibákat és folytassa",useOnlyEnglishChars:"A belső névhez csak angol ábécét, számokat és aláhúzásjelet (_) használjon.",fieldNameExists:"Ezen az űrlapon már van egy ugyanilyen nevű mező. Használjon egy másik nevet.",deleteDropDownChoice:"Választási lehetőség törlése az összes kapcsolódó rekordra hatással lesz"},maximumLimits:{filterable:"Ebben a nézetben legfeljebb {{count}} mező (a keresési mezők kivételével) választható a rekordok szűréséhez.",unique:"Legfeljebb {{count}} mező jelölhető egyedi mezőként.",fields:"Elérte a maximális {{count}} mezőt. Új mező létrehozásához töröljön egy létezőt.",lookups:"Elérte a maximális {{count}} keresési mezőt. Új keresési mező létrehozásához töröljön egy létezőt.",maxCharsWarning:"Elérte a maximális {{count}} karakteres korlátot.",maxChoiceOptionsWarning:"Maximum {{count}} választási lehetőséget adott hozzá."}},c={viewAllWidgetRecords:"Összes rekord megtekintése",noRecordsLinked:"Nincs kapcsolt rekord",linkWidgetButton:"Új rekord kapcsolása",linkModalHeader:"Új rekord kapcsolása",linkModalSelectSearchHeader:"Keresés {{fieldName}} alapján",linkModalSelectSearchPlaceholder:"Keresés...",linkModalSelectEmptySearch:"Kezdjen el gépelni...",linkModalSelectNoResultFound:"Rekord nem található",linkModalSubmitButton:"Mentés",linkModalCancelButton:"Mégse",linkModalSuccess:"Rekord frissítése sikeres",linkModalError:"A rekordot nem sikerült frissíteni",checkBoxYesValue:"Igen",checkBoxNoValue:"Nem",widgetSectionHeader:"A {{fieldLabel}} {{contextLabel}}",linkModalLoadingText:"Részletek lekérése...",relatedWidgetAccordionHeader:"Kapcsolódó {{schema}}"},p={addFilter:"+ Másik feltétel hozzáadása",noFilter:"Még nem adott meg egy szűrőt sem",validation:{required:"Érték megadása kötelező",minMax:"Legyen nagyobb, mint {{fromValue}}"},placeholder:{startRange:"Tartomány kezdete",endRange:"Tartomány vége",and:"és"}},g={placeholder:{search:"Gépeljen a kereséshez"}},u={ascending:"Növekvő",descending:"Csökkenő"},h={datepicker:a,dropdown:s,fileUploader:o,modal:r,search:i,form:n,pagination:d,datatable:z,platformTable:m,formBuilder:k,platformCouiWidgets:c,filters:p,export:{modalTitle:"Kimutatások exportálása",exportFormat:"Export mint:",fields:"Mezők",selectAllFields:"Összes mező kiválasztása",searchFieldsPrompt:"Keresési Mezők",selectedFields:"{{count}} kiválasztva",submitButton:"Exportálás",cancelButton:"Mégse",noSearchResults:"Eredmény nem található",filterInfo:"Az exportálás {{total}} -ből {{filtered}} rekordot tartalmaz a szűrési feltételek alapján. <a class='clearExportFilter'>Törölje a szűrőket</a> az összes rekord exportálásához"},searchDropdown:g,sortSelect:u}
t.default=h}}])
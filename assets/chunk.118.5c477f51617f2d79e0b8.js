(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[118],{156:function(e,n,r){"use strict"
r.r(n),r.d(n,"datatable",(function(){return c})),r.d(n,"datepicker",(function(){return a})),r.d(n,"dropdown",(function(){return o})),r.d(n,"fileUploader",(function(){return i})),r.d(n,"filters",(function(){return g})),r.d(n,"form",(function(){return d})),r.d(n,"formBuilder",(function(){return u})),r.d(n,"modal",(function(){return l})),r.d(n,"pagination",(function(){return s})),r.d(n,"platformCouiWidgets",(function(){return m})),r.d(n,"platformTable",(function(){return p})),r.d(n,"search",(function(){return t})),r.d(n,"searchDropdown",(function(){return v})),r.d(n,"sortSelect",(function(){return k}))
var a={cancel:"Annuleren",update:"Bijwerken",to:"tot",date:"Datum",time:"Tijd"},o={add:"Toevoegen",cancel:"Annuleren"},i={text:"Bestand Uploaden",description:"of sleep hierheen",acceptError:"Upload alleen CSV-bestanden.",maxFileSizeError:"Bestandsgrootte overschreden.",maxFilesLimitError:"Bestandslimiet overschreden.",fileUploadError:"Bestand uploaden mislukt",uploading:"Uploaden",selectedFiles:"Geselecteerde bestanden",remove:"Verwijderen"},l={cancel:"Annuleren",ok:"OK"},t={search:"Zoeken",noItemsFound:"Geen items gevonden",noDataAvailable:"Geen gegevens beschikbaar",startTyping:"Begin met typen..."},d={required:"{{field}} is vereist",invalidUrl:"Voer een geldige URL in",invalidEmail:"Voer een geldig e-mailadres in",invalidNumber:"Voer een geldig nummer in"},s={buttonGroupLabel:"Paginering",previousButtonLabel:"Vorige",nextButtonLabel:"Volgende",content:"<span class='record'>{{start}}</span> naar <span class='record'>{{end}}</span> van {{total}}"},c={chooseColumns:"Kies kolommen",actions:"Acties",hide:"Verbergen",show:"Tonen",showMore:"Meer tonen",showLess:"Minder tonen",customizeColumns:"Kolommen aanpassen"},p={delete:"Verwijderen",sortby:"Sorteren op",orderby:"Rangschikken op"},u={fieldRequired:"Vereist voor indienen van formulier",fieldRequiredTag:"Vereist",fieldUnique:"Accepteer unieke waarde voor elke record",fieldUniqueHoverText:"Twee records kunnen niet dezelfde waarde hebben voor dit veld. U kunt deze instelling later niet meer wijzigen.",fieldUniqueTag:"Uniek",fieldFilter:"Gebruik dit veld om records te filteren",fieldFilterHoverText:"Filter uw lijst met records met dit veld. U kunt deze instelling later niet meer wijzigen.",fieldFilterTag:"Filterbaar",fieldTypeRelationship:"Relatie opzoeken",fieldTypeRelationshipDesc:"Maak associaties tussen twee objecten.",fieldTypeRelationshipDescLinkLabel:"Meer informatie",fieldTypeText:"Tekst",fieldTypeParagraph:"Paragraaf",fieldTypeNumber:"Nummer",fieldTypeDecimal:"Decimaal",fieldTypeDate:"Datum",fieldTypeDropdown:"Dropdown",fieldTypeCheckbox:"Selectievakje",fieldTypeMultiselect:"Meerkeuze selectie",fieldTypeSingleLineText:"Enkele regel tekst",fieldTypeMultiLineText:"Meerregelige tekst",fieldTypeMultiSelectDropdown:"Vervolgkeuzelijst voor meervoudige selectie",fieldTypeDependent:"Afhankelijk veld",filterFields:"Filteren :",filterOptionAllFields:"Alle velden",nonCustomDefaultFieldTag:"Standaard",lookupUniqueTag:"Uniek",primaryFieldTag:"Primair veld",primaryFieldHeader:"Primair veld",primaryFieldNameHint:"Dit is het primaire veld van het object dat op unieke wijze elk record vertegenwoordigt en niet kan worden verwijderd.",deleteFieldTitle:"Weet u zeker dat u het veld {{label}} wilt verwijderen?",deleteFieldMessage:"Dit veld wordt permanent verwijderd en alle bijbehorende gegevens gaan verloren. Wilt u toch doorgaan?",deleteFieldSubmit:"Verwijderen",searchFields:"Zoeken op veldlabel",customizeWidget:"Widget aanpassen",addChoices:"Keuzes toevoegen",addChoice:"Keuze toevoegen",choicePlaceholderSuffix:"Keuze",headerFieldTypes:"Veldtypen",headerFields:"Velden",fieldTypesDragDrop:"Sleep vanaf hier",headerProductConvProps:"Gesprek eigenschappen",subHeaderProductConvProps:"Categoriseer en houd gesprekken bij. Maak een categorie en voeg meerdere subcategorieën toe voor uw gesprekken. ",fieldTypesDragDropConvProps:"Slepen en neerzetten om eigenschappen te maken",behaviour:"Gedrag voor agents",fieldLabel:"Label voor agents",fieldLabelPlaceholder:"Voer het veldlabel in",internalName:"Interne naam",fieldNamePlaceholder:"Voer de veldnaam in",addFieldBtn:"Veld toevoegen",saveFieldBtn:"Opslaan",cancelFieldBtn:"Annuleren",lookupAssociationHeader:"Associatie",lookupSourceObject:"Bronobject",lookupRelationshipPlaceholder:"Selecteer relatie",lookupRelationshipLabel:"Relatietype",lookupTargetPlaceholder:"Selecteer doelobject",lookupTargetLabel:"Doelobject",relationshipManyToOne:"Veel naar één",relationshipManyToOneDesc:"Koppel veel records van het bronobject aan één record van het doelobject. Bijv. één Contact kan veel Orders hebben geplaatst.",relationshipOneToOne:"Eén naar één",relationshipOneToOneDesc:"Koppel één record van het bronobject aan slechts één record van het doelobject. Bijv. een Persoon kan slechts één paspoort hebben.",relationshipManyToOneCO:"Veel records van <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> kunnen gekoppeld worden aan een record van <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipOneToOneCO:"Een record van <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> kan gekoppeld worden aan een record van <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipManyToOneNative:"Veel records van <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> kunnen gekoppeld worden met een <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipOneToOneNative:"Een record van <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> kan gekoppeld worden met een <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",customizeWidgetModalHeader:"Widget aanpassen",customizeWidgetModalHint:"Selecteer maximaal 5 velden om weer te geven in de widget.",customizeWidgetModalSaveBtn:"Opslaan",customizeWidgetModalCancelBtn:"Annuleren",noSearchItemsFound:"Geen overeenkomende velden gevonden",freePlanFieldAddDisabledHeader:"Wist je dat je aangepaste velden kunt toevoegen?",freePlanFieldAddDisabledMessage:"Aangepaste velden zijn beschikbaar vanaf Groeiplan en hoger.",freePlanFieldAddDisabledButton:"Plannen verkennen",errors:{emptyFieldName:"Veldlabel is vereist.",emptyRelationshipType:"Relatietype is vereist.",emptyTargetObject:"Doelobject is vereist.",emptyChoice:"Keuzetekst is vereist.",duplicate:"Dropdown-keuze bestaat al",minimum:"Vul minimaal één keuze in",formErrors:"Corrigeer de fouten en ga verder",useOnlyEnglishChars:"Gebruik alleen Engelse alfabetten, cijfers en underscore (_) voor interne naam.",fieldNameExists:"Er is nog een veld met dezelfde naam in dit formulier. Gebruik een andere naam.",deleteDropDownChoice:"Het verwijderen van een keuze heeft invloed op alle gerelateerde records"},maximumLimits:{filterable:"Er kunnen maximaal {{count}} velden (exclusief zoekvelden) worden geselecteerd om records in de lijstweergave te filteren.",unique:"Er kunnen maximaal {{count}} velden als uniek worden aangemerkt.",fields:"De maximale limiet van {{count}} velden is bereikt. Verwijder een bestaand veld om een nieuw veld aan te maken.",lookups:"De maximale limiet van {{count}} opzoekvelden is bereikt. Verwijder een bestaand opzoekveld om een nieuw te maken.",maxCharsWarning:"U heeft een maximale limiet van {{count}} tekens bereikt.",maxChoiceOptionsWarning:"U heeft een maximale limiet van {{count}} keuzes toegevoegd."}},m={viewAllWidgetRecords:"Bekijk alle records",noRecordsLinked:"Geen records gekoppeld",linkWidgetButton:"Koppel een nieuw record",linkModalHeader:"Koppel een nieuw record",linkModalSelectSearchHeader:"Zoeken op {{fieldName}}",linkModalSelectSearchPlaceholder:"Zoeken...",linkModalSelectEmptySearch:"Begin met typen...",linkModalSelectNoResultFound:"Geen records gevonden",linkModalSubmitButton:"Opslaan",linkModalCancelButton:"Annuleren",linkModalSuccess:"Record bijgewerkt",linkModalError:"Kan het record niet bijwerken",checkBoxYesValue:"Ja",checkBoxNoValue:"Nee",widgetSectionHeader:"{{fieldLabel}} is {{contextLabel}}",linkModalLoadingText:"Details ophalen...",relatedWidgetAccordionHeader:"Gerelateerd {{schema}}"},g={addFilter:"+ Nog een voorwaarde toevoegen",noFilter:"U hebt nog geen filters toegevoegd",validation:{required:"Waarde is vereist",minMax:"Moet groter zijn dan {{fromValue}}"},placeholder:{startRange:"Startbereik",endRange:"Eindbereik",and:"en"}},v={placeholder:{search:"Typ om te zoeken"}},k={ascending:"Oplopend",descending:"Aflopend"},f={datepicker:a,dropdown:o,fileUploader:i,modal:l,search:t,form:d,pagination:s,datatable:c,platformTable:p,formBuilder:u,platformCouiWidgets:m,filters:g,export:{modalTitle:"Exporteer Rapporten",exportFormat:"Exporteren als:",fields:"Velden",selectAllFields:"Alle velden selecteren",searchFieldsPrompt:"Zoekvelden",selectedFields:"{{count}} geselecteerd",submitButton:"Exporteren",cancelButton:"Annuleren",noSearchResults:"Geen resultaten gevonden",filterInfo:"De export bevat {{filtered}} van de {{total}} records op basis van de filtercriteria. <a class='clearExportFilter'>Wis filters</a> om alle records te exporteren"},searchDropdown:v,sortSelect:k}
n.default=f}}])
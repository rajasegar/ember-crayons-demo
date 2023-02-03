(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[101],{139:function(e,o,t){"use strict"
t.r(o),t.d(o,"datatable",(function(){return c})),t.d(o,"datepicker",(function(){return i})),t.d(o,"dropdown",(function(){return a})),t.d(o,"fileUploader",(function(){return l})),t.d(o,"filters",(function(){return h})),t.d(o,"form",(function(){return d})),t.d(o,"formBuilder",(function(){return p})),t.d(o,"modal",(function(){return r})),t.d(o,"pagination",(function(){return s})),t.d(o,"platformCouiWidgets",(function(){return f})),t.d(o,"platformTable",(function(){return u})),t.d(o,"search",(function(){return n})),t.d(o,"searchDropdown",(function(){return m}))
var i={cancel:"Cancel",update:"Update",to:"to",date:"Date",time:"Time"},a={add:"Add",cancel:"Cancel"},l={text:"Upload file",description:"or drag and drop here",acceptError:"Upload CSV files only.",maxFileSizeError:"File size exceeded.",maxFilesLimitError:"File limit exceeded.",fileUploadError:"File upload failed",uploading:"Uploading",selectedFiles:"Selected files",remove:"Remove"},r={cancel:"Cancel",ok:"OK"},n={search:"Search",noItemsFound:"No items found",noDataAvailable:"No data available",startTyping:"Start typing..."},d={required:"{{field}} is required",invalidUrl:"Enter a valid URL",invalidEmail:"Enter a valid email",invalidNumber:"Enter a valid number"},s={buttonGroupLabel:"Pagination controls",previousButtonLabel:"Previous",nextButtonLabel:"Next",content:"<span class='record'>{{start}}</span> to <span class='record'>{{end}}</span> of {{total}}"},c={chooseColumns:"Choose columns",actions:"Actions",hide:"Hide",show:"Show",showMore:"Show more",showLess:"Show less"},u={delete:"Delete",sortby:"Sort by",orderby:"Order by"},p={fieldRequired:"Required when submitting the form",fieldRequiredTag:"Required",fieldUnique:"Accept unique value for every record",fieldUniqueHoverText:"No two records can have the same value for this field. You will not be able to change this setting later.",fieldUniqueTag:"Unique",fieldFilter:"Use this field to filter records",fieldFilterHoverText:"Filter your list of records using this field. You will not be able to change this setting later.",fieldFilterTag:"Filterable",fieldTypeRelationship:"Lookup relationship",fieldTypeRelationshipDesc:"Create associations between two objects.",fieldTypeRelationshipDescLinkLabel:"Learn more",fieldTypeText:"Text",fieldTypeParagraph:"Paragraph",fieldTypeNumber:"Number",fieldTypeDecimal:"Decimal",fieldTypeDate:"Date",fieldTypeDropdown:"Dropdown",fieldTypeCheckbox:"Checkbox",fieldTypeMultiselect:"Multi select",lookupUniqueTag:"Unique",primaryFieldTag:"Primary field",primaryFieldHeader:"Primary field",primaryFieldNameHint:"This is the object's primary field that uniquely represents each record and cannot be deleted.",deleteFieldTitle:"Are you sure you want to delete the field, {{label}} ?",deleteFieldMessage:"This field will be deleted permanently and all associated data will be lost. Do you still want to continue?",deleteFieldSubmit:"Delete",searchFields:"Search by field label",customizeWidget:"Customize widget",addChoices:"Add choices",addChoice:"Add choice",choicePlaceholderSuffix:"Choice",headerFieldTypes:"Field types",headerFields:"Fields",fieldTypesDragDrop:"Drag and drop from here",behaviour:"Behavior for agents",fieldLabel:"Label for agents",fieldLabelPlaceholder:"Enter the field label",addFieldBtn:"Add field",saveFieldBtn:"Save",cancelFieldBtn:"Cancel",lookupAssociationHeader:"Association",lookupSourceObject:"Source object",lookupRelationshipPlaceholder:"Select relationship",lookupRelationshipLabel:"Relationship type",lookupTargetPlaceholder:"Select target object",lookupTargetLabel:"Target object",relationshipManyToOne:"Many to one",relationshipManyToOneDesc:"Link many records of the source object with one record of the target object. e.g Many Orders can be placed by a Contact.",relationshipOneToOne:"One to one",relationshipOneToOneDesc:"Link one record of the source object with only one record of the target object. e.g A Person can have only one Passport.",relationshipManyToOneCO:"Many records of <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> can be associated with one record of <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipOneToOneCO:"One record of <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> can be associated with one record of <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipManyToOneNative:"Many records of <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> can be associated with one <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipOneToOneNative:"One record of <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> can be associated with one <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",customizeWidgetModalHeader:"Customize widget",customizeWidgetModalHint:"Select upto 5 fields to display on the widget.",customizeWidgetModalSaveBtn:"Save",customizeWidgetModalCancelBtn:"Cancel",noSearchItemsFound:"No matching fields found",errors:{emptyFieldName:"Field label is required.",emptyRelationshipType:"Relationship type is required.",emptyTargetObject:"Target object is required.",emptyChoice:"Choice text is required.",duplicate:"Dropdown choice already exists",minimum:"Enter a minimum of one choice",formErrors:"Please fix the errors and continue",fieldNameExists:"There is another field with the same name in this form. Please use a different name.",deleteDropDownChoice:"Deleting a choice will impact all related records"},maximumLimits:{filterable:"At most {{count}} fields (excluding lookups) can be selected to filter records in the list view.",unique:"At most {{count}} fields can be marked as unique.",fields:"Reached the maximum limit of {{count}} fields. Delete an existing field to create a new one.",lookups:"Reached the maximum limit of {{count}} lookup fields. Delete an existing lookup field to create a new one."}},f={viewAllWidgetRecords:"View all records",noRecordsLinked:"No records linked",linkWidgetButton:"Link a new record",linkModalHeader:"Link a new record",linkModalSelectSearchHeader:"Search by {{fieldName}}",linkModalSelectSearchPlaceholder:"Search...",linkModalSelectEmptySearch:"Start typing...",linkModalSelectNoResultFound:"No records found",linkModalSubmitButton:"Save",linkModalCancelButton:"Cancel",linkModalSuccess:"Record updated successfully",linkModalError:"Unable to update the record",checkBoxYesValue:"Yes",checkBoxNoValue:"No",widgetSectionHeader:"{{fieldLabel}} is {{contextLabel}}",linkModalLoadingText:"Fetching details...",relatedWidgetAccordionHeader:"Related {{schema}}"},h={addFilter:"+ Add another condition",noFilter:"You have not added any filters yet",validation:{required:"Value is required",minMax:"Must be greater than {{fromValue}}"},placeholder:{startRange:"Start range",endRange:"End range",and:"and"}},m={placeholder:{search:"Type to search"}},b={datepicker:i,dropdown:a,fileUploader:l,modal:r,search:n,form:d,pagination:s,datatable:c,platformTable:u,formBuilder:p,platformCouiWidgets:f,filters:h,export:{modalTitle:"Export Records",exportFormat:"Export as:",fields:"Fields",selectAllFields:"Select All Fields",searchFieldsPrompt:"Search fields",selectedFields:"{{count}} selected",submitButton:"Export",cancelButton:"Cancel",noSearchResults:"No results found",filterInfo:"The export includes {{filtered}} out of {{total}} records based on the filter criteria. <a class='clearExportFilter'>Clear filters</a> to export all the records"},searchDropdown:m}
o.default=b}}])
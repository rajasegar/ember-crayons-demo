(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[133],{171:function(e,l,i){"use strict"
i.r(l),i.d(l,"datatable",(function(){return c})),i.d(l,"datepicker",(function(){return o})),i.d(l,"dropdown",(function(){return a})),i.d(l,"fileUploader",(function(){return t})),i.d(l,"filters",(function(){return m})),i.d(l,"form",(function(){return d})),i.d(l,"formBuilder",(function(){return u})),i.d(l,"modal",(function(){return n})),i.d(l,"pagination",(function(){return s})),i.d(l,"platformCouiWidgets",(function(){return f})),i.d(l,"platformTable",(function(){return p})),i.d(l,"search",(function(){return r})),i.d(l,"searchDropdown",(function(){return h})),i.d(l,"sortSelect",(function(){return b}))
var o={cancel:"取消",update:"更新",to:"至",date:"日期",time:"时间"},a={add:"添加",cancel:"取消"},t={text:"上传文件",description:"或将其拖放至此处",acceptError:"仅上传 CSV 文件。",maxFileSizeError:"已超出文件大小。",maxFilesLimitError:"已超出文件限制。",fileUploadError:"文件上传失败",uploading:"上传",selectedFiles:"所选文件",remove:"移除"},n={cancel:"取消",ok:"确定"},r={search:"搜索",noItemsFound:"未找到项目",noDataAvailable:"无可用数据",startTyping:"开始输入..."},d={required:"{{field}} 为必要内容",invalidUrl:"输入有效 URL",invalidEmail:"输入有效邮件",invalidNumber:"输入有效号码"},s={buttonGroupLabel:"分页控件",previousButtonLabel:"上一页",nextButtonLabel:"下一页",content:"<span class='record'>{{start}}</span> 至 <span class='record'>{{end}}</span>，共 {{total}}"},c={chooseColumns:"选择列",actions:"操作",hide:"隐藏",show:"显示",showMore:"显示更多",showLess:"显示更少",customizeColumns:"自定义列"},p={delete:"删除",sortby:"整理方式",orderby:"排序方式"},u={fieldRequired:"提交表单时为必要信息",fieldRequiredTag:"必要",fieldUnique:"为每条记录接受唯一值",fieldUniqueHoverText:"此字段的任意两条记录都不能具有相同的值。之后您将无法变更此设置。",fieldUniqueTag:"唯一",fieldFilter:"使用此字段以过滤记录",fieldFilterHoverText:"使用此字段以过滤您的记录列表。之后您将无法变更此设置。",fieldFilterTag:"可过滤",fieldTypeRelationship:"查找关系",fieldTypeRelationshipDesc:"创建两个对象之间的关联。",fieldTypeRelationshipDescLinkLabel:"了解更多",fieldTypeText:"文本",fieldTypeParagraph:"段落",fieldTypeNumber:"数字",fieldTypeDecimal:"小数",fieldTypeDate:"日期",fieldTypeDropdown:"下拉框",fieldTypeCheckbox:"复选框",fieldTypeMultiselect:"多选",fieldTypeSingleLineText:"单行文本",fieldTypeMultiLineText:"多行文本",fieldTypeMultiSelectDropdown:"多选下拉",fieldTypeDependent:"依赖字段",filterFields:"过滤条件 :",filterOptionAllFields:"所有字段",nonCustomDefaultFieldTag:"默认",lookupUniqueTag:"唯一",primaryFieldTag:"主字段",primaryFieldHeader:"主字段",primaryFieldNameHint:"这是对象的主字段，也是记录的唯一代表。其将无法删除。",deleteFieldTitle:"确定要删除字段，{{label}}？",deleteFieldMessage:"该字段将被永久删除，所有相关数据都将丢失。是否继续？",deleteFieldSubmit:"删除",searchFields:"按字段标签搜索",customizeWidget:"自定义小部件",addChoices:"添加选项",addChoice:"添加选项",choicePlaceholderSuffix:"选项",headerFieldTypes:"字段类型",headerFields:"字段",fieldTypesDragDrop:"从此处拖放",headerProductConvProps:"对话属性",subHeaderProductConvProps:"分类并追踪对话。创建类别并为对话添加多个子类别。 ",fieldTypesDragDropConvProps:"拖放以创建属性",behaviour:"处理人行为",fieldLabel:"处理人标签",fieldLabelPlaceholder:"输入字段标签",internalName:"内部名称",fieldNamePlaceholder:"输入字段名称",addFieldBtn:"添加字段",saveFieldBtn:"保存",cancelFieldBtn:"取消",lookupAssociationHeader:"关联",lookupSourceObject:"来源对象",lookupRelationshipPlaceholder:"选择关系",lookupRelationshipLabel:"关系类型",lookupTargetPlaceholder:"选择目标对象",lookupTargetLabel:"目标对象",relationshipManyToOne:"多对一",relationshipManyToOneDesc:"将来源对象的多条记录与目标对象的一条记录链接起来。如：一名客户可下达多个订单。",relationshipOneToOne:"一对一",relationshipOneToOneDesc:"将来源对象的一条记录与目标对象的一条记录链接起来。如：一个人只能有一本护照。",relationshipManyToOneCO:"多条 <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> 记录可被关联至一条 <span class='fb-field-lookup-relationship-object-name'>{{target}}</span> 记录。",relationshipOneToOneCO:"一条 <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> 可被关联至一条 <span class='fb-field-lookup-relationship-object-name'>{{target}}</span> 记录。",relationshipManyToOneNative:"多条 <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> 记录可被关联至一条 <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>。",relationshipOneToOneNative:"一条 <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> 记录可被关联至一条 <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>。",customizeWidgetModalHeader:"自定义小部件",customizeWidgetModalHint:"最多选择 5 个字段以将其显示在小部件中。",customizeWidgetModalSaveBtn:"保存",customizeWidgetModalCancelBtn:"取消",noSearchItemsFound:"未找到匹配的字段",freePlanFieldAddDisabledHeader:"您知道可以添加自定义字段吗？",freePlanFieldAddDisabledMessage:"自定义字段可在 Growth 及更高版本中使用。",freePlanFieldAddDisabledButton:"探索版本",errors:{emptyFieldName:"字段标签为必要信息。",emptyRelationshipType:"关系类型为必要信息。",emptyTargetObject:"目标对象为必要信息。",emptyChoice:"选项文本为必要信息。",duplicate:"下拉选项已存在",minimum:"最少输入一个选项",formErrors:"请修复错误并继续",useOnlyEnglishChars:"内部名称中只能使用英文字母、数字和下划线 (_)。",fieldNameExists:"此表单中还有另一个同名字段。请使用其他名称。",deleteDropDownChoice:"删除选项将影响所有相关记录"},maximumLimits:{filterable:"最多可选择 {{count}} 个字段（不含查找）以过滤列表视图中的记录。",unique:"最多可将 {{count}} 个字段标记为唯一。",fields:"已达到 {{count}} 个字段的上限。请删除现有字段以创建新字段。",lookups:"已达到 {{count}} 个查找字段的上限。请删除现有查找字段以创建新字段。",maxCharsWarning:"您已达到字符的数量上限 {{count}}。",maxChoiceOptionsWarning:"您添加的选项已达到数量上限 {{count}}。"}},f={viewAllWidgetRecords:"查看所有记录",noRecordsLinked:"无已链接的记录",linkWidgetButton:"链接新纪录",linkModalHeader:"链接新记录",linkModalSelectSearchHeader:"按 {{fieldName}} 搜索",linkModalSelectSearchPlaceholder:"搜索...",linkModalSelectEmptySearch:"开始输入...",linkModalSelectNoResultFound:"未找到记录",linkModalSubmitButton:"保存",linkModalCancelButton:"取消",linkModalSuccess:"记录已更新成功",linkModalError:"无法更新记录",checkBoxYesValue:"是",checkBoxNoValue:"否",widgetSectionHeader:"{{fieldLabel}} 为 {{contextLabel}}",linkModalLoadingText:"正在获取详情...",relatedWidgetAccordionHeader:"相关 {{schema}}"},m={addFilter:"+ 添加另一条件",noFilter:"您尚未添加任何过滤条件",validation:{required:"值为必填项",minMax:"必须大于 {{fromValue}}"},placeholder:{startRange:"开始范围",endRange:"结束范围",and:"与"}},h={placeholder:{search:"输入以搜索"}},b={ascending:"升序",descending:"降序"},T={datepicker:o,dropdown:a,fileUploader:t,modal:n,search:r,form:d,pagination:s,datatable:c,platformTable:p,formBuilder:u,platformCouiWidgets:f,filters:m,export:{modalTitle:"导出记录",exportFormat:"导出为：",fields:"字段",selectAllFields:"选择所有字段",searchFieldsPrompt:"搜索字段",selectedFields:"已选择 {{count}}",submitButton:"导出",cancelButton:"取消",noSearchResults:"未找到结果",filterInfo:"根据过滤条件，导出包括 {{total}} 条记录中的 {{filtered}} 条。 <a class='clearExportFilter'>清除过滤条件</a>，以导出所有记录"},searchDropdown:h,sortSelect:b}
l.default=T}}])

(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[115],{153:function(e,l,i){"use strict"
i.r(l),i.d(l,"datatable",(function(){return c})),i.d(l,"datepicker",(function(){return o})),i.d(l,"dropdown",(function(){return a})),i.d(l,"fileUploader",(function(){return t})),i.d(l,"filters",(function(){return m})),i.d(l,"form",(function(){return d})),i.d(l,"formBuilder",(function(){return u})),i.d(l,"modal",(function(){return n})),i.d(l,"pagination",(function(){return s})),i.d(l,"platformCouiWidgets",(function(){return f})),i.d(l,"platformTable",(function(){return p})),i.d(l,"search",(function(){return r})),i.d(l,"searchDropdown",(function(){return h})),i.d(l,"sortSelect",(function(){return b}))
var o={cancel:"취소",update:"업데이트",to:"-",date:"날짜",time:"시간"},a={add:"추가",cancel:"취소"},t={text:"파일 업로드",description:"또는 여기로 드래그앤드롭",acceptError:"CSV 파일만 업로드하세요.",maxFileSizeError:"파일 용량이 초과되었습니다.",maxFilesLimitError:"파일 한도가 초과되었습니다.",fileUploadError:"파일 업로드 실패",uploading:"업로드 중",selectedFiles:"선택한 파일",remove:"제거"},n={cancel:"취소",ok:"확인"},r={search:"검색",noItemsFound:"항목이 없습니다",noDataAvailable:"사용 가능한 데이터 없음",startTyping:"입력하세요..."},d={required:"필수 {{field}} 입니다",invalidUrl:"유효한 URL을 입력하세요",invalidEmail:"유효한 이메일을 입력하세요",invalidNumber:"유효한 숫자를 입력하세요"},s={buttonGroupLabel:"페이지 컨트롤",previousButtonLabel:"이전",nextButtonLabel:"다음",content:"<span class='record'>{{start}}</span> - <span class='record'>{{end}}</span> / {{total}}"},c={chooseColumns:"열 선택",actions:"작업",hide:"숨기기",show:"표시",showMore:"더 보기",showLess:"간단히 보기",customizeColumns:"열 사용자 지정"},p={delete:"삭제",sortby:"정렬 기준",orderby:"정렬 기준"},u={fieldRequired:"양식 제출 시 필수 요구 사항",fieldRequiredTag:"필수",fieldUnique:"모든 레코드에 고유 값 허용",fieldUniqueHoverText:"필드에 있는 두 개의 레코드 값이 동일할 수 없습니다. 추후 이 설정을 변경할 수 없습니다.",fieldUniqueTag:"고유",fieldFilter:"필드를 사용하여 레코드 필터링",fieldFilterHoverText:"필드를 사용하여 레코드 목록을 필터링하세요. 추후 이 설정을 변경할 수 없습니다.",fieldFilterTag:"필터링 가능",fieldTypeRelationship:"조회 관계",fieldTypeRelationshipDesc:"두 개의 객체 간에 연결을 생성하세요.",fieldTypeRelationshipDescLinkLabel:"자세히 알아보기",fieldTypeText:"문자",fieldTypeParagraph:"단락",fieldTypeNumber:"번호",fieldTypeDecimal:"소수",fieldTypeDate:"날짜",fieldTypeDropdown:"드롭다운",fieldTypeCheckbox:"체크 박스",fieldTypeMultiselect:"복수 선택",fieldTypeSingleLineText:"한 줄 텍스트",fieldTypeMultiLineText:"여러 줄 텍스트",fieldTypeMultiSelectDropdown:"다중 선택 드롭다운",fieldTypeDependent:"종속 필드",filterFields:"필터 :",filterOptionAllFields:"모든 필드",nonCustomDefaultFieldTag:"기본",lookupUniqueTag:"고유",primaryFieldTag:"기본 필드",primaryFieldHeader:"기본 필드",primaryFieldNameHint:"각각의 레코드를 고유하게 나타내는 객체의 기본 필드이며 삭제할 수 없습니다.",deleteFieldTitle:"정말로 {{label}} 필드를 삭제하시겠습니까?",deleteFieldMessage:"필드가 영구적으로 삭제되고 모든 관련 데이터가 손실됩니다. 계속 진행하시겠습니까?",deleteFieldSubmit:"삭제",searchFields:"필드 레이블로 검색",customizeWidget:"위젯 사용자 지정",addChoices:"선택 추가",addChoice:"선택 추가",choicePlaceholderSuffix:"선택",headerFieldTypes:"필드 유형",headerFields:"필드",fieldTypesDragDrop:"여기에서 드래그앤드롭",headerProductConvProps:"대화 속성",subHeaderProductConvProps:"대화를 분류하고 추적합니다. 범주를 만들고 대화에 대한 여러 하위 범주를 추가합니다. ",fieldTypesDragDropConvProps:"드래그 앤 드롭하여 속성 만들기",behaviour:"에이전트 행동",fieldLabel:"에이전트 레이블",fieldLabelPlaceholder:"필드 레이블 입력",internalName:"내부 이름",fieldNamePlaceholder:"필드 이름을 입력하세요",addFieldBtn:"필드 추가",saveFieldBtn:"저장",cancelFieldBtn:"취소",lookupAssociationHeader:"연결",lookupSourceObject:"소스 개체",lookupRelationshipPlaceholder:"관계 선택",lookupRelationshipLabel:"관계 유형",lookupTargetPlaceholder:"대상 개체 선택",lookupTargetLabel:"대상 개체",relationshipManyToOne:"다 대 일",relationshipManyToOneDesc:"여러 개의 소스 객체 레코드를 하나의 대상 객체 레코드에 연결하세요. 예: 하나의 연락처가 여러 개의 주문을 넣을 수 있습니다.",relationshipOneToOne:"일 대 일",relationshipOneToOneDesc:"하나의 소스 객체의 레코드는 단 하나의 대상 객체 레코드에만 연결할 수 있습니다. 예: 개인은 하나의 여권만 소유할 수 있습니다.",relationshipManyToOneCO:"여러 개의 <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> 레코드는 하나의 <span class='fb-field-lookup-relationship-object-name'>{{target}}</span> 레코드에 연결할 수 있습니다.",relationshipOneToOneCO:"하나의 <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> 레코드는 하나의 <span class='fb-field-lookup-relationship-object-name'>{{target}}</span> 레코드에 연결할 수 있습니다.",relationshipManyToOneNative:"여러 개의 <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> 레코드는 하나의 <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>에 연결할 수 있습니다.",relationshipOneToOneNative:"하나의 <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> 레코드는 하나의 <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>에 연결할 수 있습니다.",customizeWidgetModalHeader:"위젯 사용자 지정",customizeWidgetModalHint:"위젯에 표시할 필드를 최대 5개 선택하세요.",customizeWidgetModalSaveBtn:"저장",customizeWidgetModalCancelBtn:"취소",noSearchItemsFound:"일치하는 필드가 없습니다",freePlanFieldAddDisabledHeader:"사용자 지정 필드를 추가할 수 있다는 것을 알고 계셨습니까?",freePlanFieldAddDisabledMessage:"사용자 정의 필드는 성장 계획 이상에서 사용할 수 있습니다.",freePlanFieldAddDisabledButton:"플랜 살펴보기",errors:{emptyFieldName:"필드 레이블은 필수 항목입니다.",emptyRelationshipType:"관계 유형은 필수 항목입니다.",emptyTargetObject:"대상 객체는 필수 항목입니다.",emptyChoice:"선택 텍스트는 필수 항목입니다.",duplicate:"드롭다운 선택이 이미 존재합니다",minimum:"최소 하나의 선택 항목을 입력하세요",formErrors:"오류를 수정하고 진행해 주세요",useOnlyEnglishChars:"내부 이름은 영문, 숫자, 밑줄(_)만 사용하세요.",fieldNameExists:"양식에 동일한 이름의 필드가 있습니다. 다른 이름을 사용하세요.",deleteDropDownChoice:"선택을 삭제하면 모든 관련 레코드가 영향을 받습니다"},maximumLimits:{filterable:"최대 {{count}}개의 필드(조회 필드 제외)를 선택하여 목록 보기에서 레코드를 필터링할 수 있습니다.",unique:"최대 {{count}}개의 필드를 고유 필드로 표시할 수 있습니다.",fields:"필드의 최대 한도 {{count}}개에 도달했습니다. 새 필드를 만들려면 기존 필드를 삭제하세요.",lookups:"조회 필드의 최대 한도 {{count}}개에 도달했습니다. 새 필드를 만들려면 기존 필드를 삭제하세요.",maxCharsWarning:"최대 한도인 {{count}} 자에 도달했습니다.",maxChoiceOptionsWarning:"{{count}} 개 선택의 최대 제한을 추가했습니다."}},f={viewAllWidgetRecords:"모든 레코드 보기",noRecordsLinked:"연결된 레코드 없음",linkWidgetButton:"새 레코드 연결",linkModalHeader:"새 레코드 연결",linkModalSelectSearchHeader:"{{fieldName}}(으)로 검색",linkModalSelectSearchPlaceholder:"검색...",linkModalSelectEmptySearch:"입력하세요...",linkModalSelectNoResultFound:"레코드가 없습니다",linkModalSubmitButton:"저장",linkModalCancelButton:"취소",linkModalSuccess:"레코드가 업데이트되었습니다",linkModalError:"레코드를 업데이트할 수 없습니다",checkBoxYesValue:"예",checkBoxNoValue:"아니오",widgetSectionHeader:"{{fieldLabel}}은/는 {{contextLabel}}입니다",linkModalLoadingText:"세부정보를 가져오는 중...",relatedWidgetAccordionHeader:"관련 {{schema}}"},m={addFilter:"+ 다른 조건 추가",noFilter:"아직 추가한 필터가 없습니다",validation:{required:"값은 필수 항목입니다",minMax:"{{fromValue}}보다 커야 합니다"},placeholder:{startRange:"시작 범위",endRange:"종료 범위",and:"및"}},h={placeholder:{search:"검색하려면 입력하세요"}},b={ascending:"오름차순",descending:"내림차순"},T={datepicker:o,dropdown:a,fileUploader:t,modal:n,search:r,form:d,pagination:s,datatable:c,platformTable:p,formBuilder:u,platformCouiWidgets:f,filters:m,export:{modalTitle:"보고서 내보내기",exportFormat:"내보낼 형식:",fields:"필드",selectAllFields:"모든 필드 선택",searchFieldsPrompt:"필드 검색",selectedFields:"{{count}}개 선택됨",submitButton:"내보내기",cancelButton:"취소",noSearchResults:"검색 결과 없음",filterInfo:"내보내기에는 필터 기준에 따라 {{total}}개 중 {{filtered}}개의 보고서가 포함됩니다. 모든 보고서를 내보내려면 <a class='clearExportFilter'>필터 삭제</a>를 누르십시오."},searchDropdown:h,sortSelect:b}
l.default=T}}])
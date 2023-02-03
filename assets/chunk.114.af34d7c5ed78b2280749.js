(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[114],{152:function(e,l,i){"use strict"
i.r(l),i.d(l,"datatable",(function(){return c})),i.d(l,"datepicker",(function(){return o})),i.d(l,"dropdown",(function(){return a})),i.d(l,"fileUploader",(function(){return t})),i.d(l,"filters",(function(){return m})),i.d(l,"form",(function(){return d})),i.d(l,"formBuilder",(function(){return u})),i.d(l,"modal",(function(){return n})),i.d(l,"pagination",(function(){return s})),i.d(l,"platformCouiWidgets",(function(){return f})),i.d(l,"platformTable",(function(){return p})),i.d(l,"search",(function(){return r})),i.d(l,"searchDropdown",(function(){return h})),i.d(l,"sortSelect",(function(){return b}))
var o={cancel:"キャンセル",update:"更新",to:"へ",date:"日付",time:"時間"},a={add:"追加",cancel:"キャンセル"},t={text:"ファイルをアップロードする",description:"またはこちらにドラッグアンドドロップします",acceptError:"CSVファイルのみアップロード可能です。",maxFileSizeError:"ファイルサイズが超過しました。",maxFilesLimitError:"ファイル制限を超過しました。",fileUploadError:"ファイルのアップロードに失敗しました",uploading:"アップロード中",selectedFiles:"選択されたファイル",remove:"削除"},n={cancel:"キャンセル",ok:"OK"},r={search:"検索",noItemsFound:"アイテムが見つかりません。",noDataAvailable:"利用できるデータはありません",startTyping:"入力を開始..."},d={required:"{{field}}は必須です",invalidUrl:"有効なURLを入力してください",invalidEmail:"有効なメールアドレスを入力してください",invalidNumber:"有効な番号を入力してください"},s={buttonGroupLabel:"パジネーションコントロール",previousButtonLabel:"前",nextButtonLabel:"次へ",content:"{{total}}の内<span class='record'>{{start}}</span>から<span class='record'>{{end}}</span>まで"},c={chooseColumns:"列を選択する",actions:"アクション",hide:"隠す",show:"表示する",showMore:"もっと表示",showLess:"表示を減らす",customizeColumns:"列をカスタマイズする"},p={delete:"削除",sortby:"並び替え",orderby:"注文者"},u={fieldRequired:"フォーム送信時に必要です",fieldRequiredTag:"必須",fieldUnique:"全ての記録に対して一意の値を受け入れる",fieldUniqueHoverText:"このフィールドに2つの記録が同じ値を持つことはできません。また、この設定を後で変更することはできません。",fieldUniqueTag:"ユニークな",fieldFilter:"このフィールドを使用して記録を絞り込みします",fieldFilterHoverText:"このフィールドを使用して記録のリストを絞り込みます。この設定は後で変更することはできません。",fieldFilterTag:"フィルタリング可能",fieldTypeRelationship:"関係をルックアップする",fieldTypeRelationshipDesc:"二つのオブジェクト間の紐づけを作成する。",fieldTypeRelationshipDescLinkLabel:"詳細はこちらから。",fieldTypeText:"テキスト",fieldTypeParagraph:"段落",fieldTypeNumber:"数字",fieldTypeDecimal:"少数",fieldTypeDate:"日付",fieldTypeDropdown:"ドロップダウン",fieldTypeCheckbox:"チェックボックス",fieldTypeMultiselect:"複数選択",fieldTypeSingleLineText:"1 行のテキスト",fieldTypeMultiLineText:"複数行テキスト",fieldTypeMultiSelectDropdown:"複数選択ドロップダウン",fieldTypeDependent:"依存フィールド",filterFields:"フィルター :",filterOptionAllFields:"すべてのフィールド",nonCustomDefaultFieldTag:"デフォルト",lookupUniqueTag:"ユニークな",primaryFieldTag:"一次フィールド",primaryFieldHeader:"一次フィールド",primaryFieldNameHint:"これは、各記録を一意に表すオブジェクトのプライマリフィールドであるため、削除することはできません。",deleteFieldTitle:"{{label}}フィールドを削除してよろしいですか？",deleteFieldMessage:"このフィールドは完全に削除され、関連する全てのデータが失われます。本当に続行しますか？",deleteFieldSubmit:"削除",searchFields:"フィールドラベルで検索",customizeWidget:"ウィジェットをカスタマイズする",addChoices:"選択肢を追加",addChoice:"選択肢を追加",choicePlaceholderSuffix:"選択",headerFieldTypes:"フィールドタイプ",headerFields:"フィールド",fieldTypesDragDrop:"ここからドラッグ＆ドロップします",headerProductConvProps:"会話のプロパティ",subHeaderProductConvProps:"会話を分類して追跡します。カテゴリを作成し、会話に複数のサブカテゴリを追加します。 ",fieldTypesDragDropConvProps:"ドラッグ アンド ドロップしてプロパティを作成する",behaviour:"エージェントの行動",fieldLabel:"エージェントのラベル",fieldLabelPlaceholder:"フィールドラベルを入力",internalName:"内部名",fieldNamePlaceholder:"フィールド名を入力してください",addFieldBtn:"フィールドを追加",saveFieldBtn:"保存する",cancelFieldBtn:"キャンセル",lookupAssociationHeader:"関連",lookupSourceObject:"ソースオブジェクト",lookupRelationshipPlaceholder:"関係を選択",lookupRelationshipLabel:"関係タイプ",lookupTargetPlaceholder:"ターゲットオブジェクトを選択します",lookupTargetLabel:"ターゲットオブジェクト",relationshipManyToOne:"多対1",relationshipManyToOneDesc:"多くのソースオブジェクトの記録をターゲットオブジェクトの1つの記録にリンクします。たとえば、多くの注文を一人の顧客が行うことができます。",relationshipOneToOne:"1対1",relationshipOneToOneDesc:"ソースオブジェクトの記録1件をターゲットオブジェクトの記録1件のみにリンクしますので、個人が持つことができるパスポートは1つのみになります。",relationshipManyToOneCO:"多数の<span class='fb-field-lookup-relationship-object-name'>{{source}}</span>の記録を一件の<span class='fb-field-lookup-relationship-object-name'>{{target}}</span>に関連付けすることが可能です。",relationshipOneToOneCO:"一件の<span class='fb-field-lookup-relationship-object-name'>{{source}}</span>の記録を一件の<span class='fb-field-lookup-relationship-object-name'>{{target}}</span>に関連付けすることが可能です。",relationshipManyToOneNative:"多数の<span class='fb-field-lookup-relationship-object-name'>{{source}}</span>の記録を一件の<span class='fb-field-lookup-relationship-object-name'>{{target}}</span>の記録に関連付けすることが可能です。",relationshipOneToOneNative:"一件の<span class='fb-field-lookup-relationship-object-name'>{{source}}</span>の記録を一件の<span class='fb-field-lookup-relationship-object-name'>{{target}}</span>の記録に関連付けすることが可能です。",customizeWidgetModalHeader:"ウィジェットをカスタマイズする",customizeWidgetModalHint:"ウィジェットに表示する最大5つのフィールドを選択します.",customizeWidgetModalSaveBtn:"保存する",customizeWidgetModalCancelBtn:"キャンセル",noSearchItemsFound:"一致するフィールドが見つかりません",freePlanFieldAddDisabledHeader:"カスタムフィールドを追加できることをご存知ですか?",freePlanFieldAddDisabledMessage:"カスタム フィールドは、Growth プラン以上から利用できます。",freePlanFieldAddDisabledButton:"プランを見る",errors:{emptyFieldName:"フィールドラベルは必須です。",emptyRelationshipType:"関係タイプは必須です。",emptyTargetObject:"ターゲットオブジェクトは必須です。",emptyChoice:"選択テキストは必須です。",duplicate:"ドロップダウンの選択肢は既に存在します",minimum:"少なくとも1つの選択肢を入力してください",formErrors:"エラーを修正して続行してください",useOnlyEnglishChars:"内部名には英語のアルファベット、数字、アンダースコア (_) のみを使用してください。",fieldNameExists:"このフォームの名前が他のものと重複しています。別の名前を使用してください。",deleteDropDownChoice:"選択肢を削除すると、関連するすべての記録に影響します"},maximumLimits:{filterable:"リストビューで記録を絞り込むために、最大 {{count}} 個のフィールド（ルックアップを除く）を選択することができます。",unique:"最大 {{count}} 個のフィールドを一意としてマークできます。",fields:"フィールドの上限である{{count}}件に達しました。既存のフィールドを削除して、新しいフィールドを作成してください。",lookups:"ルックアップの上限である{{count}}件に達しました。既存のフィールドを削除して、新しいルックアップを作成してください。",maxCharsWarning:"{{count}} 文字の上限に達しました。",maxChoiceOptionsWarning:"最大 {{count}} 個の選択肢を追加しました。"}},f={viewAllWidgetRecords:"全ての記録を表示",noRecordsLinked:"リンクされている記録はありません",linkWidgetButton:"新しい記録をリンクする",linkModalHeader:"新しい記録をリンクする",linkModalSelectSearchHeader:"{{fieldName}}で検索",linkModalSelectSearchPlaceholder:"検索...",linkModalSelectEmptySearch:"トピックを開始...",linkModalSelectNoResultFound:"記録が見つかりませんでした",linkModalSubmitButton:"保存する",linkModalCancelButton:"キャンセル",linkModalSuccess:"記録が正常に更新されました",linkModalError:"記録を更新できません",checkBoxYesValue:"はい",checkBoxNoValue:"いいえ",widgetSectionHeader:"{{fieldLabel}}は{{contextLabel}}です",linkModalLoadingText:"詳細を取得しています...",relatedWidgetAccordionHeader:"関連 {{schema}}"},m={addFilter:"+ 別の条件を追加",noFilter:"まだフィルターが追加されていません",validation:{required:"値は必須です",minMax:"{{fromValue}}より大きくなければなりません"},placeholder:{startRange:"開始範囲",endRange:"終了範囲",and:"そして"}},h={placeholder:{search:"入力して検索する"}},b={ascending:"昇順",descending:"降順"},T={datepicker:o,dropdown:a,fileUploader:t,modal:n,search:r,form:d,pagination:s,datatable:c,platformTable:p,formBuilder:u,platformCouiWidgets:f,filters:m,export:{modalTitle:"レコードのエクスポート",exportFormat:"次の名前でエクスポート：",fields:"フィールド",selectAllFields:"すべてのフィールドを選択",searchFieldsPrompt:"フィールドを検索",selectedFields:"{{count}} 選択中",submitButton:"エクスポート",cancelButton:"キャンセル",noSearchResults:"見つかりませんでした",filterInfo:"エクスポートには、フィルター条件に基づいて {{total}} レコードのうち {{filtered}} レコードが含まれます。 <a class='clearExportFilter'>フィルターをクリア</a> すると、すべてのレコードをエクスポートします"},searchDropdown:h,sortSelect:b}
l.default=T}}])
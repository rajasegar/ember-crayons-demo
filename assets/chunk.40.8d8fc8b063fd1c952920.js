(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[40],{120:function(t,e,n){"use strict"
n.r(e)
var a=n(31),i={lessThanXSeconds:{standalone:{one:"సెకను కన్నా తక్కువ",other:"{{count}} సెకన్ల కన్నా తక్కువ"},withPreposition:{one:"సెకను",other:"{{count}} సెకన్ల"}},xSeconds:{standalone:{one:"ఒక సెకను",other:"{{count}} సెకన్ల"},withPreposition:{one:"ఒక సెకను",other:"{{count}} సెకన్ల"}},halfAMinute:{standalone:"అర నిమిషం",withPreposition:"అర నిమిషం"},lessThanXMinutes:{standalone:{one:"ఒక నిమిషం కన్నా తక్కువ",other:"{{count}} నిమిషాల కన్నా తక్కువ"},withPreposition:{one:"ఒక నిమిషం",other:"{{count}} నిమిషాల"}},xMinutes:{standalone:{one:"ఒక నిమిషం",other:"{{count}} నిమిషాలు"},withPreposition:{one:"ఒక నిమిషం",other:"{{count}} నిమిషాల"}},aboutXHours:{standalone:{one:"సుమారు ఒక గంట",other:"సుమారు {{count}} గంటలు"},withPreposition:{one:"సుమారు ఒక గంట",other:"సుమారు {{count}} గంటల"}},xHours:{standalone:{one:"ఒక గంట",other:"{{count}} గంటలు"},withPreposition:{one:"ఒక గంట",other:"{{count}} గంటల"}},xDays:{standalone:{one:"ఒక రోజు",other:"{{count}} రోజులు"},withPreposition:{one:"ఒక రోజు",other:"{{count}} రోజుల"}},aboutXWeeks:{standalone:{one:"సుమారు ఒక వారం",other:"సుమారు {{count}} వారాలు"},withPreposition:{one:"సుమారు ఒక వారం",other:"సుమారు {{count}} వారాలల"}},xWeeks:{standalone:{one:"ఒక వారం",other:"{{count}} వారాలు"},withPreposition:{one:"ఒక వారం",other:"{{count}} వారాలల"}},aboutXMonths:{standalone:{one:"సుమారు ఒక నెల",other:"సుమారు {{count}} నెలలు"},withPreposition:{one:"సుమారు ఒక నెల",other:"సుమారు {{count}} నెలల"}},xMonths:{standalone:{one:"ఒక నెల",other:"{{count}} నెలలు"},withPreposition:{one:"ఒక నెల",other:"{{count}} నెలల"}},aboutXYears:{standalone:{one:"సుమారు ఒక సంవత్సరం",other:"సుమారు {{count}} సంవత్సరాలు"},withPreposition:{one:"సుమారు ఒక సంవత్సరం",other:"సుమారు {{count}} సంవత్సరాల"}},xYears:{standalone:{one:"ఒక సంవత్సరం",other:"{{count}} సంవత్సరాలు"},withPreposition:{one:"ఒక సంవత్సరం",other:"{{count}} సంవత్సరాల"}},overXYears:{standalone:{one:"ఒక సంవత్సరం పైగా",other:"{{count}} సంవత్సరాలకు పైగా"},withPreposition:{one:"ఒక సంవత్సరం",other:"{{count}} సంవత్సరాల"}},almostXYears:{standalone:{one:"దాదాపు ఒక సంవత్సరం",other:"దాదాపు {{count}} సంవత్సరాలు"},withPreposition:{one:"దాదాపు ఒక సంవత్సరం",other:"దాదాపు {{count}} సంవత్సరాల"}}},o={date:Object(a.b)({formats:{full:"d, MMMM y, EEEE",long:"d MMMM, y",medium:"d MMM, y",short:"dd-MM-yy"},defaultWidth:"full"}),time:Object(a.b)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Object(a.b)({formats:{full:"{{date}} {{time}}'కి'",long:"{{date}} {{time}}'కి'",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},r={lastWeek:"'గత' eeee p",yesterday:"'నిన్న' p",today:"'ఈ రోజు' p",tomorrow:"'రేపు' p",nextWeek:"'తదుపరి' eeee p",other:"P"},u={code:"te",formatDistance:function(t,e,n){var a,o=(n=n||{}).addSuffix?i[t].withPreposition:i[t].standalone
return a="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e),n.addSuffix?n.comparison>0?a+"లో":a+" క్రితం":a},formatLong:o,formatRelative:function(t,e,n,a){return r[t]},localize:{ordinalNumber:function(t,e){return Number(t)+"వ"},era:Object(a.a)({values:{narrow:["క్రీ.పూ.","క్రీ.శ."],abbreviated:["క్రీ.పూ.","క్రీ.శ."],wide:["క్రీస్తు పూర్వం","క్రీస్తుశకం"]},defaultWidth:"wide"}),quarter:Object(a.a)({values:{narrow:["1","2","3","4"],abbreviated:["త్రై1","త్రై2","త్రై3","త్రై4"],wide:["1వ త్రైమాసికం","2వ త్రైమాసికం","3వ త్రైమాసికం","4వ త్రైమాసికం"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:Object(a.a)({values:{narrow:["జ","ఫి","మా","ఏ","మే","జూ","జు","ఆ","సె","అ","న","డి"],abbreviated:["జన","ఫిబ్ర","మార్చి","ఏప్రి","మే","జూన్","జులై","ఆగ","సెప్టెం","అక్టో","నవం","డిసెం"],wide:["జనవరి","ఫిబ్రవరి","మార్చి","ఏప్రిల్","మే","జూన్","జులై","ఆగస్టు","సెప్టెంబర్","అక్టోబర్","నవంబర్","డిసెంబర్"]},defaultWidth:"wide"}),day:Object(a.a)({values:{narrow:["ఆ","సో","మ","బు","గు","శు","శ"],short:["ఆది","సోమ","మంగళ","బుధ","గురు","శుక్ర","శని"],abbreviated:["ఆది","సోమ","మంగళ","బుధ","గురు","శుక్ర","శని"],wide:["ఆదివారం","సోమవారం","మంగళవారం","బుధవారం","గురువారం","శుక్రవారం","శనివారం"]},defaultWidth:"wide"}),dayPeriod:Object(a.a)({values:{narrow:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"},abbreviated:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"},wide:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"}},defaultWidth:"wide",formattingValues:{narrow:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"},abbreviated:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"},wide:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:Object(a.c)({matchPattern:/^(\d+)(వ)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:Object(a.d)({matchPatterns:{narrow:/^(క్రీ\.పూ\.|క్రీ\.శ\.)/i,abbreviated:/^(క్రీ\.?\s?పూ\.?|ప్ర\.?\s?శ\.?\s?పూ\.?|క్రీ\.?\s?శ\.?|సా\.?\s?శ\.?)/i,wide:/^(క్రీస్తు పూర్వం|ప్రస్తుత శకానికి పూర్వం|క్రీస్తు శకం|ప్రస్తుత శకం)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(పూ|శ)/i,/^సా/i]},defaultParseWidth:"any"}),quarter:Object(a.d)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^త్రై[1234]/i,wide:/^[1234](వ)? త్రైమాసికం/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Object(a.d)({matchPatterns:{narrow:/^(జూ|జు|జ|ఫి|మా|ఏ|మే|ఆ|సె|అ|న|డి)/i,abbreviated:/^(జన|ఫిబ్ర|మార్చి|ఏప్రి|మే|జూన్|జులై|ఆగ|సెప్|అక్టో|నవ|డిసె)/i,wide:/^(జనవరి|ఫిబ్రవరి|మార్చి|ఏప్రిల్|మే|జూన్|జులై|ఆగస్టు|సెప్టెంబర్|అక్టోబర్|నవంబర్|డిసెంబర్)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^జ/i,/^ఫి/i,/^మా/i,/^ఏ/i,/^మే/i,/^జూ/i,/^జు/i,/^ఆ/i,/^సె/i,/^అ/i,/^న/i,/^డి/i],any:[/^జన/i,/^ఫి/i,/^మా/i,/^ఏ/i,/^మే/i,/^జూన్/i,/^జులై/i,/^ఆగ/i,/^సె/i,/^అ/i,/^న/i,/^డి/i]},defaultParseWidth:"any"}),day:Object(a.d)({matchPatterns:{narrow:/^(ఆ|సో|మ|బు|గు|శు|శ)/i,short:/^(ఆది|సోమ|మం|బుధ|గురు|శుక్ర|శని)/i,abbreviated:/^(ఆది|సోమ|మం|బుధ|గురు|శుక్ర|శని)/i,wide:/^(ఆదివారం|సోమవారం|మంగళవారం|బుధవారం|గురువారం|శుక్రవారం|శనివారం)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ఆ/i,/^సో/i,/^మ/i,/^బు/i,/^గు/i,/^శు/i,/^శ/i],any:[/^ఆది/i,/^సోమ/i,/^మం/i,/^బుధ/i,/^గురు/i,/^శుక్ర/i,/^శని/i]},defaultParseWidth:"any"}),dayPeriod:Object(a.d)({matchPatterns:{narrow:/^(పూర్వాహ్నం|అపరాహ్నం|అర్ధరాత్రి|మిట్టమధ్యాహ్నం|ఉదయం|మధ్యాహ్నం|సాయంత్రం|రాత్రి)/i,any:/^(పూర్వాహ్నం|అపరాహ్నం|అర్ధరాత్రి|మిట్టమధ్యాహ్నం|ఉదయం|మధ్యాహ్నం|సాయంత్రం|రాత్రి)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^పూర్వాహ్నం/i,pm:/^అపరాహ్నం/i,midnight:/^అర్ధ/i,noon:/^మిట్ట/i,morning:/ఉదయం/i,afternoon:/మధ్యాహ్నం/i,evening:/సాయంత్రం/i,night:/రాత్రి/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}}
e.default=u},31:function(t,e,n){"use strict"
function a(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth]
return a}}function i(t){return function(e,n){var a,i=n||{}
if("formatting"===(i.context?String(i.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,r=i.width?String(i.width):o
a=t.formattingValues[r]||t.formattingValues[o]}else{var u=t.defaultWidth,d=i.width?String(i.width):t.defaultWidth
a=t.values[d]||t.values[u]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function o(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.match(t.matchPattern)
if(!a)return null
var i=a[0],o=e.match(t.parsePattern)
if(!o)return null
var r=t.valueCallback?t.valueCallback(o[0]):o[0]
r=n.valueCallback?n.valueCallback(r):r
var u=e.slice(i.length)
return{value:r,rest:u}}}function r(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,i=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(i)
if(!o)return null
var r,s=o[0],h=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(h)?d(h,(function(t){return t.test(s)})):u(h,(function(t){return t.test(s)}))
r=t.valueCallback?t.valueCallback(l):l,r=n.valueCallback?n.valueCallback(r):r
var c=e.slice(s.length)
return{value:r,rest:c}}}function u(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function d(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return r}))}}])

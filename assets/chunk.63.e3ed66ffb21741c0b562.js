(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[63],{31:function(a,n,t){"use strict"
function e(a){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.width?String(n.width):a.defaultWidth,e=a.formats[t]||a.formats[a.defaultWidth]
return e}}function i(a){return function(n,t){var e,i=t||{}
if("formatting"===(i.context?String(i.context):"standalone")&&a.formattingValues){var r=a.defaultFormattingWidth||a.defaultWidth,o=i.width?String(i.width):r
e=a.formattingValues[o]||a.formattingValues[r]}else{var d=a.defaultWidth,u=i.width?String(i.width):a.defaultWidth
e=a.values[u]||a.values[d]}return e[a.argumentCallback?a.argumentCallback(n):n]}}function r(a){return function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.match(a.matchPattern)
if(!e)return null
var i=e[0],r=n.match(a.parsePattern)
if(!r)return null
var o=a.valueCallback?a.valueCallback(r[0]):r[0]
o=t.valueCallback?t.valueCallback(o):o
var d=n.slice(i.length)
return{value:o,rest:d}}}function o(a){return function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.width,i=e&&a.matchPatterns[e]||a.matchPatterns[a.defaultMatchWidth],r=n.match(i)
if(!r)return null
var o,c=r[0],l=e&&a.parsePatterns[e]||a.parsePatterns[a.defaultParseWidth],m=Array.isArray(l)?u(l,(function(a){return a.test(c)})):d(l,(function(a){return a.test(c)}))
o=a.valueCallback?a.valueCallback(m):m,o=t.valueCallback?t.valueCallback(o):o
var s=n.slice(c.length)
return{value:o,rest:s}}}function d(a,n){for(var t in a)if(a.hasOwnProperty(t)&&n(a[t]))return t}function u(a,n){for(var t=0;t<a.length;t++)if(n(a[t]))return t}t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return e})),t.d(n,"c",(function(){return r})),t.d(n,"d",(function(){return o}))},48:function(a,n,t){"use strict"
t.r(n)
var e=t(31),i={lessThanXSeconds:{one:"bir saniyədən az",other:"{{count}} bir saniyədən az"},xSeconds:{one:"1 saniyə",other:"{{count}} saniyə"},halfAMinute:"yarım dəqiqə",lessThanXMinutes:{one:"bir dəqiqədən az",other:"{{count}} bir dəqiqədən az"},xMinutes:{one:"bir dəqiqə",other:"{{count}} dəqiqə"},aboutXHours:{one:"təxminən 1 saat",other:"təxminən {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 gün",other:"{{count}} gün"},aboutXWeeks:{one:"təxminən 1 həftə",other:"təxminən {{count}} həftə"},xWeeks:{one:"1 həftə",other:"{{count}} həftə"},aboutXMonths:{one:"təxminən 1 ay",other:"təxminən {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"təxminən 1 il",other:"təxminən {{count}} il"},xYears:{one:"1 il",other:"{{count}} il"},overXYears:{one:"1 ildən çox",other:"{{count}} ildən çox"},almostXYears:{one:"demək olar ki 1 il",other:"demək olar ki {{count}} il"}},r={date:Object(e.b)({formats:{full:"EEEE, do MMMM y 'il'",long:"do MMMM y 'il'",medium:"d MMM y 'il'",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:Object(e.b)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:Object(e.b)({formats:{full:"{{date}} {{time}} - 'də'",long:"{{date}} {{time}} - 'də'",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"'sonuncu' eeee p -'də'",yesterday:"'dünən' p -'də'",today:"'bugün' p -'də'",tomorrow:"'sabah' p -'də'",nextWeek:"eeee p -'də'",other:"P"},d={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"},u={code:"az",formatDistance:function(a,n,t){t=t||{}
var e,r=i[a]
return e="string"==typeof r?r:1===n?r.one:r.other.replace("{{count}}",String(n)),t.addSuffix?t.comparison&&t.comparison>0?e+" əvvəl":e+" sonra":e},formatLong:r,formatRelative:function(a,n,t,e){return o[a]},localize:{ordinalNumber:function(a,n){var t=Number(a)
return t+function(a){if(0===a)return a+"-ıncı"
var n=a%10,t=a%100-n,e=a>=100?100:null
return d[n]?d[n]:d[t]?d[t]:null!==e?d[e]:""}(t)},era:Object(e.a)({values:{narrow:["e.ə","b.e"],abbreviated:["e.ə","b.e"],wide:["eramızdan əvvəl","bizim era"]},defaultWidth:"wide"}),quarter:Object(e.a)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1ci kvartal","2ci kvartal","3cü kvartal","4cü kvartal"]},defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:Object(e.a)({values:{narrow:["Y","F","M","A","M","İ","İ","A","S","O","N","D"],abbreviated:["Yan","Fev","Mar","Apr","May","İyun","İyul","Avq","Sen","Okt","Noy","Dek"],wide:["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"]},defaultWidth:"wide"}),day:Object(e.a)({values:{narrow:["B.","B.e","Ç.a","Ç.","C.a","C.","Ş."],short:["B.","B.e","Ç.a","Ç.","C.a","C.","Ş."],abbreviated:["Baz","Baz.e","Çər.a","Çər","Cüm.a","Cüm","Şə"],wide:["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"]},defaultWidth:"wide"}),dayPeriod:Object(e.a)({values:{narrow:{am:"am",pm:"pm",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},abbreviated:{am:"AM",pm:"PM",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},wide:{am:"a.m.",pm:"p.m.",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},abbreviated:{am:"AM",pm:"PM",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},wide:{am:"a.m.",pm:"p.m.",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:Object(e.c)({matchPattern:/^(\d+)(-?(ci|inci|nci|uncu|üncü|ncı))?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:Object(e.d)({matchPatterns:{narrow:/^(b|a)$/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)$/i,wide:/^(bizim eradan əvvəl|bizim era)$/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b$/i,/^(a|c)$/i]},defaultParseWidth:"any"}),quarter:Object(e.d)({matchPatterns:{narrow:/^[1234]$/i,abbreviated:/^K[1234]$/i,wide:/^[1234](ci)? kvartal$/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return Number(a)+1}}),month:Object(e.d)({matchPatterns:{narrow:/^[(?-i)yfmaisond]$/i,abbreviated:/^(Yan|Fev|Mar|Apr|May|İyun|İyul|Avq|Sen|Okt|Noy|Dek)$/i,wide:/^(Yanvar|Fevral|Mart|Aprel|May|İyun|İyul|Avgust|Sentyabr|Oktyabr|Noyabr|Dekabr)$/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^[(?-i)y]$/i,/^[(?-i)f]$/i,/^[(?-i)m]$/i,/^[(?-i)a]$/i,/^[(?-i)m]$/i,/^[(?-i)i]$/i,/^[(?-i)i]$/i,/^[(?-i)a]$/i,/^[(?-i)s]$/i,/^[(?-i)o]$/i,/^[(?-i)n]$/i,/^[(?-i)d]$/i],abbreviated:[/^Yan$/i,/^Fev$/i,/^Mar$/i,/^Apr$/i,/^May$/i,/^İyun$/i,/^İyul$/i,/^Avg$/i,/^Sen$/i,/^Okt$/i,/^Noy$/i,/^Dek$/i],wide:[/^Yanvar$/i,/^Fevral$/i,/^Mart$/i,/^Aprel$/i,/^May$/i,/^İyun$/i,/^İyul$/i,/^Avgust$/i,/^Sentyabr$/i,/^Oktyabr$/i,/^Noyabr$/i,/^Dekabr$/i]},defaultParseWidth:"narrow"}),day:Object(e.d)({matchPatterns:{narrow:/^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,short:/^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,abbreviated:/^(Baz\.e|Çər|Çər\.a|Cüm|Cüm\.a|Şə)$/i,wide:/^(Bazar|Bazar ertəsi|Çərşənbə axşamı|Çərşənbə|Cümə axşamı|Cümə|Şənbə)$/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^B\.$/i,/^B\.e$/i,/^Ç\.a$/i,/^Ç\.$/i,/^C\.a$/i,/^C\.$/i,/^Ş\.$/i],abbreviated:[/^Baz$/i,/^Baz\.e$/i,/^Çər\.a$/i,/^Çər$/i,/^Cüm\.a$/i,/^Cüm$/i,/^Şə$/i],wide:[/^Bazar$/i,/^Bazar ertəsi$/i,/^Çərşənbə axşamı$/i,/^Çərşənbə$/i,/^Cümə axşamı$/i,/^Cümə$/i,/^Şənbə$/i],any:[/^B\.$/i,/^B\.e$/i,/^Ç\.a$/i,/^Ç\.$/i,/^C\.a$/i,/^C\.$/i,/^Ş\.$/i]},defaultParseWidth:"any"}),dayPeriod:Object(e.d)({matchPatterns:{narrow:/^(a|p|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i,any:/^(am|pm|a\.m\.|p\.m\.|AM|PM|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a$/i,pm:/^p$/i,midnight:/^gecəyarı$/i,noon:/^gün$/i,morning:/səhər$/i,afternoon:/gündüz$/i,evening:/axşam$/i,night:/gecə$/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}}
n.default=u}}])
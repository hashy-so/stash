define(["@grafana/data","@grafana/runtime","react","@grafana/ui"],((e,t,r,n)=>(()=>{var o={539:(e,t,r)=>{var n=r(938).Symbol;e.exports=n},349:e=>{e.exports=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}},213:(e,t,r)=>{var n=r(701),o=r(900),a=r(785),i=r(854),s=r(383),c=r(519),l=Object.prototype.hasOwnProperty;e.exports=function(e,t){var r=a(e),u=!r&&o(e),p=!r&&!u&&i(e),f=!r&&!u&&!p&&c(e),h=r||u||p||f,m=h?n(e.length,String):[],y=m.length;for(var b in e)!t&&!l.call(e,b)||h&&("length"==b||p&&("offset"==b||"parent"==b)||f&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||s(b,y))||m.push(b);return m}},736:(e,t,r)=>{var n=r(539),o=r(840),a=r(258),i=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)}},829:(e,t,r)=>{var n=r(736),o=r(360);e.exports=function(e){return o(e)&&"[object Arguments]"==n(e)}},729:(e,t,r)=>{var n=r(338),o=r(678),a=r(611),i=r(532),s=/^\[object .+?Constructor\]$/,c=Function.prototype,l=Object.prototype,u=c.toString,p=l.hasOwnProperty,f=RegExp("^"+u.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(n(e)?f:s).test(i(e))}},972:(e,t,r)=>{var n=r(736),o=r(194),a=r(360),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,e.exports=function(e){return a(e)&&o(e.length)&&!!i[n(e)]}},464:(e,t,r)=>{var n=r(611),o=r(16),a=r(586),i=Object.prototype.hasOwnProperty;e.exports=function(e){if(!n(e))return a(e);var t=o(e),r=[];for(var s in e)("constructor"!=s||!t&&i.call(e,s))&&r.push(s);return r}},197:(e,t,r)=>{var n=r(137),o=r(871),a=r(132);e.exports=function(e,t){return a(o(e,t,n),e+"")}},459:(e,t,r)=>{var n=r(551),o=r(630),a=r(137),i=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:n(t),writable:!0})}:a;e.exports=i},701:e=>{e.exports=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}},334:e=>{e.exports=function(e){return function(t){return e(t)}}},937:(e,t,r)=>{var n=r(938)["__core-js_shared__"];e.exports=n},630:(e,t,r)=>{var n=r(822),o=function(){try{var e=n(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=o},120:(e,t,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},822:(e,t,r)=>{var n=r(729),o=r(371);e.exports=function(e,t){var r=o(e,t);return n(r)?r:void 0}},840:(e,t,r)=>{var n=r(539),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,s=n?n.toStringTag:void 0;e.exports=function(e){var t=a.call(e,s),r=e[s];try{e[s]=void 0;var n=!0}catch(e){}var o=i.call(e);return n&&(t?e[s]=r:delete e[s]),o}},371:e=>{e.exports=function(e,t){return null==e?void 0:e[t]}},383:e=>{var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,r){var n=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&t.test(e))&&e>-1&&e%1==0&&e<r}},535:(e,t,r)=>{var n=r(638),o=r(68),a=r(383),i=r(611);e.exports=function(e,t,r){if(!i(r))return!1;var s=typeof t;return!!("number"==s?o(r)&&a(t,r.length):"string"==s&&t in r)&&n(r[t],e)}},678:(e,t,r)=>{var n,o=r(937),a=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";e.exports=function(e){return!!a&&a in e}},16:e=>{var t=Object.prototype;e.exports=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||t)}},586:e=>{e.exports=function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}},125:(e,t,r)=>{e=r.nmd(e);var n=r(120),o=t&&!t.nodeType&&t,a=o&&e&&!e.nodeType&&e,i=a&&a.exports===o&&n.process,s=function(){try{return a&&a.require&&a.require("util").types||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=s},258:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},871:(e,t,r)=>{var n=r(349),o=Math.max;e.exports=function(e,t,r){return t=o(void 0===t?e.length-1:t,0),function(){for(var a=arguments,i=-1,s=o(a.length-t,0),c=Array(s);++i<s;)c[i]=a[t+i];i=-1;for(var l=Array(t+1);++i<t;)l[i]=a[i];return l[t]=r(c),n(e,this,l)}}},938:(e,t,r)=>{var n=r(120),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();e.exports=a},132:(e,t,r)=>{var n=r(459),o=r(591)(n);e.exports=o},591:e=>{var t=Date.now;e.exports=function(e){var r=0,n=0;return function(){var o=t(),a=16-(o-n);if(n=o,a>0){if(++r>=800)return arguments[0]}else r=0;return e.apply(void 0,arguments)}}},532:e=>{var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},551:e=>{e.exports=function(e){return function(){return e}}},236:(e,t,r)=>{var n=r(197),o=r(638),a=r(535),i=r(893),s=Object.prototype,c=s.hasOwnProperty,l=n((function(e,t){e=Object(e);var r=-1,n=t.length,l=n>2?t[2]:void 0;for(l&&a(t[0],t[1],l)&&(n=1);++r<n;)for(var u=t[r],p=i(u),f=-1,h=p.length;++f<h;){var m=p[f],y=e[m];(void 0===y||o(y,s[m])&&!c.call(e,m))&&(e[m]=u[m])}return e}));e.exports=l},638:e=>{e.exports=function(e,t){return e===t||e!=e&&t!=t}},137:e=>{e.exports=function(e){return e}},900:(e,t,r)=>{var n=r(829),o=r(360),a=Object.prototype,i=a.hasOwnProperty,s=a.propertyIsEnumerable,c=n(function(){return arguments}())?n:function(e){return o(e)&&i.call(e,"callee")&&!s.call(e,"callee")};e.exports=c},785:e=>{var t=Array.isArray;e.exports=t},68:(e,t,r)=>{var n=r(338),o=r(194);e.exports=function(e){return null!=e&&o(e.length)&&!n(e)}},854:(e,t,r)=>{e=r.nmd(e);var n=r(938),o=r(714),a=t&&!t.nodeType&&t,i=a&&e&&!e.nodeType&&e,s=i&&i.exports===a?n.Buffer:void 0,c=(s?s.isBuffer:void 0)||o;e.exports=c},338:(e,t,r)=>{var n=r(736),o=r(611);e.exports=function(e){if(!o(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},194:e=>{e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},611:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},360:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},519:(e,t,r)=>{var n=r(972),o=r(334),a=r(125),i=a&&a.isTypedArray,s=i?o(i):n;e.exports=s},893:(e,t,r)=>{var n=r(213),o=r(464),a=r(68);e.exports=function(e){return a(e)?n(e,!0):o(e)}},714:e=>{e.exports=function(){return!1}},305:t=>{"use strict";t.exports=e},545:e=>{"use strict";e.exports=t},388:e=>{"use strict";e.exports=n},650:e=>{"use strict";e.exports=r}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={id:e,loaded:!1,exports:{}};return o[e](r,r.exports,i),r.loaded=!0,r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var s={};return(()=>{"use strict";i.r(s),i.d(s,{plugin:()=>O});var e=i(305),t=i(545);function r(e,t,r,n,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}class n extends t.DataSourceWithBackend{applyTemplateVariables(e,t){return e.queryText=this.templateSrv.replace(e.rawQueryText,t),e}metricFindQuery(e,t){var n,o=this;return(n=function*(){if(!e)return[];const t=yield o.query({targets:[{refId:"metricFindQuery",rawQueryText:e,queryText:e,timeColumns:[]}]}).toPromise();if(void 0===t)throw new Error("Received no response at all");if(t.error)throw new Error(t.error.message);const r=t.data[0];if(1!==r.fields.length)throw new Error(`Received more than one (${r.fields.length}) fields: ${r.fields.map((e=>e.name)).join(",")}`);return r.fields[0].values.toArray().map((e=>({text:e})))},function(){var e=this,t=arguments;return new Promise((function(o,a){var i=n.apply(e,t);function s(e){r(i,o,a,s,c,"next",e)}function c(e){r(i,o,a,s,c,"throw",e)}s(void 0)}))})()}constructor(e){var r,n;super(e),n=void 0,(r="templateSrv")in this?Object.defineProperty(this,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):this[r]=n,this.templateSrv=(0,t.getTemplateSrv)()}}var o=i(650),a=i.n(o),c=i(388);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}const{FormField:f}=c.LegacyForms;class h extends o.PureComponent{render(){const{options:e,onOptionsChange:t}=this.props,{jsonData:r,secureJsonFields:n,secureJsonData:o}=e;return void 0===r.pathPrefix&&t(p(u({},e),{jsonData:p(u({},e.jsonData),{pathPrefix:"file:"})})),void 0===r.attachLimit&&t(p(u({},e),{jsonData:p(u({},e.jsonData),{attachLimit:0})})),a().createElement("div",{className:"gf-form-group"},a().createElement("div",{className:"gf-form"},a().createElement(f,{label:"Path",tooltip:"(absolute) path to the SQLite database file",labelWidth:10,inputWidth:20,onChange:this.onPathChange,value:r.path,placeholder:"/path/to/the/database.db"})),a().createElement("div",{className:"gf-form"},a().createElement(f,{label:"Path Prefix",tooltip:'This string is prefixed before the path in the connection string. Unless you know what you are doing this should be "file:" (without the quotes). Not using "file:" can cause the Path Options to not take effect.',labelWidth:10,inputWidth:20,onChange:this.onPathPrefixChange,value:r.pathPrefix})),a().createElement("div",{className:"gf-form"},a().createElement(f,{label:"Path Options",tooltip:'This string is appended to the path (after adding a "?") when opening the database. A typical example is "mode=ro" (without the quotes) for readonly mode.',labelWidth:10,inputWidth:20,onChange:this.onPathOptionsChange,value:r.pathOptions,placeholder:"mode=ro&_ignore_check_constraints=1"})),a().createElement("div",{className:"gf-form"},a().createElement(f,{label:"Secure Path Options",tooltip:"This is combined with the regular path options. Typical for the secure options are credentials (options starting with _auth).",labelWidth:10,inputWidth:20,placeholder:(null==n?void 0:n.securePathOptions)?"configured":"",value:null==o?void 0:o.securePathOptions,onChange:this.onSecurePathOptionsChange})),a().createElement("div",{className:"gf-form"},a().createElement(f,{label:"Attach limit",tooltip:"The runtime limit for attached databases (see: https://www.sqlite.org/limits.html).",labelWidth:10,inputWidth:20,value:r.attachLimit,onChange:this.onAttachLimitChange})),a().createElement("div",{className:"gf-form"},a().createElement(c.Alert,{title:"File System Permissions",severity:"info"},a().createElement("div",null,"The plugin runs with the same permissions as the Grafana user. Any file that can be opened with the Grafana user can be opened with the SQLite plugin."),a().createElement("div",null,'Beware that by enabling attaching databases (setting an "attach limit" above 0) you enable any user with access to the plugin to attach any database that the Grafana user has access to.'),a().createElement("div",null,'It is the most secure (and recommended) approach to set the "attach limit" to 0.'))))}constructor(...e){super(...e),l(this,"onPathPrefixChange",(e=>{const{onOptionsChange:t,options:r}=this.props,n=p(u({},r.jsonData),{pathPrefix:e.target.value});t(p(u({},r),{jsonData:n}))})),l(this,"onPathOptionsChange",(e=>{const{onOptionsChange:t,options:r}=this.props,n=p(u({},r.jsonData),{pathOptions:e.target.value});t(p(u({},r),{jsonData:n}))})),l(this,"onSecurePathOptionsChange",(e=>{const{onOptionsChange:t,options:r}=this.props;t(p(u({},r),{secureJsonData:{securePathOptions:e.target.value}}))})),l(this,"onPathChange",(e=>{const{onOptionsChange:t,options:r}=this.props,n=p(u({},r.jsonData),{path:e.target.value});t(p(u({},r),{jsonData:n}))})),l(this,"onAttachLimitChange",(e=>{let t;if(""!==e.target.value&&(t=parseInt(e.target.value,10),Number.isNaN(t)))return;const{onOptionsChange:r,options:n}=this.props,o=p(u({},n.jsonData),{attachLimit:t});r(p(u({},n),{jsonData:o}))}))}}var m=i(236),y=i.n(m);const b={rawQueryText:"SELECT CAST(strftime('%s', 'now', '-1 minute') as INTEGER) as time, 4 as value \nWHERE time >= $__from / 1000 and time < $__to / 1000",queryText:"\n    SELECT CAST(strftime('%s', 'now', '-1 minute') as INTEGER) as time, 4 as value\n    WHERE time >= 1234 and time < 134567\n  ",timeColumns:["time","ts"],queryType:"table"};function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}function v(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function j(e){let t=20*e.split("\n").length;return Math.min(500,Math.max(200,t))}const O=new e.DataSourcePlugin(n).setConfigEditor(h).setQueryEditor((function(e){function t(t){const{onChange:r,query:n}=e;r(v(g({},n),{rawQueryText:t,queryText:t})),e.onRunQuery()}const r=y()(e.query,b),{rawQueryText:n,timeColumns:i}=r,[s,l]=(0,o.useState)(!1),[u,p]=(0,o.useState)(!1),f=[{label:"Table",value:"table"},{label:"Time series",value:"time series"}],h=f.find((e=>e.value===r.queryType))||f[0];return a().createElement(a().Fragment,null,u?a().createElement("div",{className:"gf-form"},a().createElement(c.TextArea,{style:{height:100},role:"query-editor-input",value:n,onBlur:()=>e.onRunQuery(),onChange:e=>t(e.target.value)})):a().createElement(c.CodeEditor,{height:j(n),value:n,onBlur:t,onSave:t,language:"sql",showMiniMap:!1}),a().createElement("div",{className:"gf-form-inline"},a().createElement("div",{className:"gf-form",role:"query-type-container",style:{marginRight:15}},a().createElement(c.InlineFormLabel,null,a().createElement("div",{style:{whiteSpace:"nowrap"}},"Format as:")),a().createElement(c.Select,{allowCustomValue:!1,isSearchable:!1,onChange:function(t){const{onChange:r,query:n}=e;r(v(g({},n),{queryType:t.value||"table"})),e.onRunQuery()},options:f,value:h})),a().createElement("div",{className:"gf-form"},a().createElement("div",{style:{display:"flex",flexDirection:"row",marginRight:15},role:"time-column-selector"},a().createElement(c.InlineFormLabel,null,a().createElement("div",{style:{whiteSpace:"nowrap"},onClick:()=>l(!s)},"Time formatted columns ",a().createElement(c.Icon,{name:s?"angle-down":"angle-right"}))),a().createElement(c.TagsInput,{onChange:t=>function(t,r){const{onChange:n,query:o}=e;n(v(g({},o),{timeColumns:r})),e.onRunQuery()}(0,t),tags:i})),a().createElement("div",{className:"gf-form",style:{alignItems:"center"}},a().createElement(c.InlineFormLabel,null,a().createElement("div",{style:{whiteSpace:"nowrap"}},"Use legacy code editor:")),a().createElement(c.Switch,{role:"use-legacy-editor-switch",value:u,onChange:()=>p(!u)})))),s&&a().createElement(c.Alert,{title:"Time formatted columns",severity:"info"},'Columns with these names, will be formatted as time. This is required as SQLite has no native "time" format, but mostly strings and numbers. See:'," ",a().createElement("a",{href:"https://www.sqlite.org/datatype3.html",target:"_blank",rel:"noreferrer"},"SQLite3 Data Types Documentation"),a().createElement("br",null),"For more information (like supported formats) see:"," ",a().createElement("a",{href:"https://github.com/fr-ser/grafana-sqlite-datasource#support-for-time-formatted-columns",target:"_blank",rel:"noreferrer"},"Plugin documentation")))}))})(),s})()));
//# sourceMappingURL=module.js.map
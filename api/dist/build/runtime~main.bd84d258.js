(()=>{"use strict";var u={},m={};function a(n){var r=m[n];if(r!==void 0)return r.exports;var e=m[n]={id:n,loaded:!1,exports:{}};return u[n].call(e.exports,e,e.exports,a),e.loaded=!0,e.exports}a.m=u,(()=>{var n=[];a.O=(r,e,t,i)=>{if(e){i=i||0;for(var o=n.length;o>0&&n[o-1][2]>i;o--)n[o]=n[o-1];n[o]=[e,t,i];return}for(var s=1/0,o=0;o<n.length;o++){for(var[e,t,i]=n[o],f=!0,l=0;l<e.length;l++)(i&!1||s>=i)&&Object.keys(a.O).every(j=>a.O[j](e[l]))?e.splice(l--,1):(f=!1,i<s&&(s=i));if(f){n.splice(o--,1);var c=t();c!==void 0&&(r=c)}}return r}})(),a.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return a.d(r,{a:r}),r},(()=>{var n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r;a.t=function(e,t){if(t&1&&(e=this(e)),t&8||typeof e=="object"&&e&&(t&4&&e.__esModule||t&16&&typeof e.then=="function"))return e;var i=Object.create(null);a.r(i);var o={};r=r||[null,n({}),n([]),n(n)];for(var s=t&2&&e;typeof s=="object"&&!~r.indexOf(s);s=n(s))Object.getOwnPropertyNames(s).forEach(f=>o[f]=()=>e[f]);return o.default=()=>e,a.d(i,o),i}})(),a.d=(n,r)=>{for(var e in r)a.o(r,e)&&!a.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},a.f={},a.e=n=>Promise.all(Object.keys(a.f).reduce((r,e)=>(a.f[e](n,r),r),[])),a.u=n=>""+({46:"content-type-builder-translation-zh-Hans-json",90:"i18n-translation-de-json",92:"api-tokens-edit-page",96:"email-translation-de-json",123:"ru-json",129:"i18n-translation-es-json",302:"sso-settings-page",320:"en-json",349:"review-workflows-settings-list-view",395:"tr-json",435:"email-translation-it-json",562:"no-json",585:"upload-translation-pt-json",606:"sk-json",615:"upload-translation-uk-json",695:"upload-settings",742:"content-type-builder-translation-th-json",744:"email-translation-cs-json",749:"th-json",801:"Admin-authenticatedApp",830:"he-json",931:"content-type-builder-translation-en-json",994:"content-manager",1001:"content-type-builder-translation-nl-json",1009:"upload-translation-ms-json",1011:"zh-json",1018:"email-translation-ko-json",1023:"content-type-builder-translation-it-json",1056:"upload-translation-tr-json",1157:"email-translation-pt-BR-json",1167:"users-permissions-translation-ko-json",1180:"i18n-translation-tr-json",1312:"ja-json",1331:"upload-translation-es-json",1375:"upload-translation-pt-BR-json",1377:"ko-json",1442:"users-permissions-translation-cs-json",1495:"email-settings-page",1674:"users-permissions-translation-ru-json",1930:"users-permissions-translation-pt-json",2137:"i18n-translation-fr-json",2151:"content-type-builder-translation-id-json",2246:"content-type-builder-translation-dk-json",2248:"gu-json",2282:"users-providers-settings-page",2380:"users-permissions-translation-tr-json",2411:"email-translation-tr-json",2464:"users-permissions-translation-de-json",2489:"upload-translation-ko-json",2492:"transfer-tokens-edit-page",2544:"admin-edit-roles-page",2553:"zh-Hans-json",2567:"content-type-builder-translation-ko-json",2603:"email-translation-en-json",2648:"email-translation-ar-json",2657:"content-type-builder-translation-cs-json",2671:"nl-json",2742:"users-permissions-translation-zh-Hans-json",2812:"audit-logs-settings-page",3025:"ms-json",3038:"upload-translation-sk-json",3043:"email-translation-zh-Hans-json",3095:"users-permissions-translation-sk-json",3098:"users-permissions-translation-fr-json",3166:"email-translation-pt-json",3206:"email-translation-nl-json",3278:"vi-json",3304:"content-type-builder-translation-tr-json",3340:"pt-json",3455:"admin-roles-list",3516:"ca-json",3530:"users-permissions-translation-vi-json",3552:"i18n-settings-page",3650:"upload",3677:"Admin_pluginsPage",3702:"users-permissions-translation-pl-json",3825:"email-translation-dk-json",3948:"content-type-builder-translation-pl-json",3964:"content-type-builder-translation-ms-json",3981:"Admin_homePage",4021:"upload-translation-de-json",4121:"webhook-list-page",4179:"users-permissions-translation-id-json",4263:"admin-edit-users",4299:"api-tokens-create-page",4302:"content-type-builder-translation-zh-json",4409:"review-workflows-settings-edit-view",4587:"email-translation-th-json",4693:"email-translation-fr-json",4804:"upload-translation-ru-json",4816:"transfer-tokens-create-page",4987:"upload-translation-pl-json",5053:"upload-translation-zh-json",5162:"webhook-edit-page",5199:"admin-users",5222:"upload-translation-it-json",5296:"i18n-translation-dk-json",5388:"email-translation-ru-json",5396:"users-permissions-translation-zh-json",5516:"Admin_marketplace",5538:"admin-app",5751:"email-translation-es-json",5880:"upload-translation-ja-json",5894:"hu-json",5895:"Admin_settingsPage",5905:"content-type-builder-list-view",5906:"content-type-builder-translation-pt-BR-json",6232:"upload-translation-th-json",6280:"i18n-translation-ko-json",6332:"hi-json",6377:"users-permissions-translation-dk-json",6434:"upload-translation-en-json",6460:"users-permissions-translation-en-json",6745:"email-translation-uk-json",6784:"email-translation-ms-json",6817:"it-json",6831:"upload-translation-zh-Hans-json",6836:"users-permissions-translation-uk-json",6848:"email-translation-zh-json",6901:"de-json",7048:"users-permissions-translation-nl-json",7094:"users-permissions-translation-ar-json",7155:"content-type-builder-translation-de-json",7186:"content-type-builder-translation-ru-json",7327:"email-translation-vi-json",7347:"highlight.js",7403:"uk-json",7465:"upload-translation-dk-json",7519:"cs-json",7663:"email-translation-id-json",7808:"i18n-translation-zh-json",7817:"users-permissions-translation-es-json",7828:"users-permissions-translation-th-json",7833:"upload-translation-fr-json",7846:"pl-json",7898:"dk-json",7934:"content-type-builder-translation-pt-json",7958:"ar-json",7997:"content-type-builder-translation-sk-json",8006:"fr-json",8056:"api-tokens-list-page",8175:"i18n-translation-en-json",8178:"email-translation-ja-json",8329:"content-type-builder-translation-sv-json",8342:"content-type-builder-translation-es-json",8360:"eu-json",8367:"es-json",8418:"users-email-settings-page",8423:"upload-translation-ca-json",8467:"users-permissions-translation-sv-json",8481:"email-translation-pl-json",8573:"content-type-builder-translation-uk-json",8736:"users-permissions-translation-pt-BR-json",8853:"users-roles-settings-page",8880:"content-type-builder",8897:"id-json",8907:"content-type-builder-translation-ja-json",8936:"review-workflows-settings-create-view",8965:"content-type-builder-translation-fr-json",9220:"users-permissions-translation-ms-json",9303:"sv-json",9366:"i18n-translation-pl-json",9412:"email-translation-sk-json",9460:"users-advanced-settings-page",9497:"Admin_profilePage",9501:"Admin_InternalErrorPage",9502:"users-permissions-translation-ja-json",9511:"content-type-builder-translation-ar-json",9514:"Upload_ConfigureTheView",9600:"transfer-tokens-list-page",9647:"pt-BR-json",9726:"sa-json",9737:"i18n-translation-ru-json",9762:"i18n-translation-zh-Hans-json",9797:"upload-translation-he-json",9903:"ml-json",9905:"users-permissions-translation-it-json"}[n]||n)+"."+{46:"d0ef7623",90:"ff982729",92:"b182f1f9",96:"14f77215",123:"04f5d2cd",129:"40843447",169:"a1f6ccea",302:"432de007",320:"0e124db2",349:"2d780489",395:"19e24576",435:"102b37b7",562:"53e503d9",566:"90213d1d",568:"6bd290a2",585:"d22cac25",606:"150ce788",615:"80c5bd83",695:"478f9123",742:"43499095",744:"17119962",749:"96a73137",801:"51f53ade",830:"44b162d8",931:"f9d56976",994:"8286cdf3",1001:"125a762b",1009:"35761936",1011:"b3f4cfcc",1018:"6f075d6c",1023:"75554bb0",1056:"a75f3218",1057:"9dc892da",1157:"4c147137",1167:"f223da46",1180:"cabd83b5",1312:"4ef16d2f",1331:"827c1b8b",1375:"1418312c",1377:"09e4c417",1442:"7c859c34",1470:"81e6e7ec",1495:"0d2e020c",1588:"d31d6113",1674:"5b0caa80",1924:"a3110024",1930:"3cd0bdf9",2137:"8f03567a",2151:"04d7a6da",2246:"c6e18e0d",2248:"58345a56",2282:"bd8b5e1a",2380:"2f9423c6",2411:"d9e93653",2458:"b734da61",2464:"6fe24dc4",2489:"5c6c6fe3",2492:"0242a446",2501:"7c941ca3",2544:"544b317b",2553:"3b2b0ab9",2567:"07333483",2603:"a856e8c0",2648:"241491ff",2657:"61932d19",2671:"d66673c1",2742:"96db7c3c",2786:"9c566069",2812:"e6b23281",3025:"8d7737fe",3038:"9af7132e",3043:"548e69d9",3095:"1fae71a8",3098:"d5e70e00",3166:"e62525d2",3206:"fce05ddf",3278:"ead6eea7",3304:"d0a2beb7",3340:"f92a4291",3455:"778d368e",3467:"6aa5ea9b",3516:"a58a5c51",3530:"c95848dd",3552:"311c8708",3650:"2204f491",3677:"9ca88ee8",3683:"2911f423",3702:"cb75fe4c",3825:"80d14395",3948:"80ac6660",3964:"6567c73a",3981:"39ca8f11",4021:"4d3d4976",4121:"7975ab18",4179:"6a32c194",4263:"34b68ef9",4299:"40bbfbe2",4302:"5bc16b5e",4409:"814a7d79",4565:"9af0e609",4587:"9f04d6c0",4693:"28e74d7a",4804:"60699591",4816:"f0af79a0",4972:"c8e8adbe",4987:"d5ad8f94",5013:"c75309b6",5053:"5db82b5d",5162:"447c6441",5199:"b4332fbc",5222:"59b14894",5296:"0dfef41d",5388:"a8988c6e",5396:"ba3d7ecf",5481:"63e0cffc",5516:"99c9635e",5538:"f2379d41",5751:"1ade22a2",5833:"22e4f049",5880:"8c04c6b2",5894:"297533d1",5895:"c3d39313",5905:"e85dfc2f",5906:"ad0b41b5",6033:"6174a0cd",6232:"65a17b04",6280:"9a770b1b",6332:"369b5d5c",6377:"4cd4e953",6394:"aa51f7e1",6434:"a514076e",6460:"ba36dfe7",6630:"8fc44549",6745:"0389ac99",6784:"1f864818",6817:"3812157f",6831:"ea921a24",6836:"e3b3501c",6848:"2a80a74d",6901:"4af9776d",6992:"2d04c262",7048:"c49f04d5",7094:"322a651f",7155:"cdfc4264",7186:"03ac1959",7242:"061ade42",7327:"551949a5",7347:"a67b96aa",7403:"c66531c1",7465:"97b159bd",7519:"bee7c1ae",7663:"76ea2e1d",7808:"f46f8c2f",7817:"fcea0d86",7828:"6ca0493d",7833:"5b812d4f",7846:"9e3a2fb7",7898:"8cd1427e",7934:"e7324481",7958:"79cd51c6",7974:"cf361011",7997:"bf0be35d",8006:"5752d32b",8056:"16b918ae",8175:"1b6af800",8178:"f733947d",8296:"95a81194",8329:"c9476e75",8342:"2d24fc2c",8360:"04dabfe9",8367:"e002c881",8385:"b63cfd8b",8418:"4ba576ab",8423:"5ca8aca6",8467:"e441fe29",8481:"5956e799",8573:"74839e90",8736:"2fef44d2",8853:"3cbb16c4",8880:"bc856a05",8897:"2aa2076f",8907:"be2d37bc",8936:"0561600d",8965:"11e76d56",9133:"fcbd9cba",9220:"37485170",9303:"2ca5d9c1",9329:"0202ca2f",9350:"746988c3",9366:"8f92b2d6",9412:"a4604d9a",9460:"f824bd49",9497:"bd83255c",9501:"12f8fef3",9502:"2abd2e98",9508:"e7083c70",9511:"5ea17d91",9514:"efde1d14",9600:"aec7e2ab",9647:"82da65ce",9726:"dc07afcb",9737:"c0fd85f0",9762:"5ec8c35c",9797:"c84f6709",9903:"0b14af11",9905:"de121625"}[n]+".chunk.js",a.miniCssF=n=>{},a.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),a.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n={},r="strapi-vercel-test:";a.l=(e,t,i,o)=>{if(n[e]){n[e].push(t);return}var s,f;if(i!==void 0)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+i){s=d;break}}s||(f=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",r+i),s.src=e),n[e]=[t];var b=(g,j)=>{s.onerror=s.onload=null,clearTimeout(p);var h=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),h&&h.forEach(v=>v(j)),g)return g(j)},p=setTimeout(b.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=b.bind(null,s.onerror),s.onload=b.bind(null,s.onload),f&&document.head.appendChild(s)}})(),a.r=n=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.nmd=n=>(n.paths=[],n.children||(n.children=[]),n),a.p="/admin/",(()=>{a.b=document.baseURI||self.location.href;var n={1303:0};a.f.j=(t,i)=>{var o=a.o(n,t)?n[t]:void 0;if(o!==0)if(o)i.push(o[2]);else if(t!=1303){var s=new Promise((d,b)=>o=n[t]=[d,b]);i.push(o[2]=s);var f=a.p+a.u(t),l=new Error,c=d=>{if(a.o(n,t)&&(o=n[t],o!==0&&(n[t]=void 0),o)){var b=d&&(d.type==="load"?"missing":d.type),p=d&&d.target&&d.target.src;l.message="Loading chunk "+t+` failed.
(`+b+": "+p+")",l.name="ChunkLoadError",l.type=b,l.request=p,o[1](l)}};a.l(f,c,"chunk-"+t,t)}else n[t]=0},a.O.j=t=>n[t]===0;var r=(t,i)=>{var[o,s,f]=i,l,c,d=0;if(o.some(p=>n[p]!==0)){for(l in s)a.o(s,l)&&(a.m[l]=s[l]);if(f)var b=f(a)}for(t&&t(i);d<o.length;d++)c=o[d],a.o(n,c)&&n[c]&&n[c][0](),n[c]=0;return a.O(b)},e=self.webpackChunkstrapi_vercel_test=self.webpackChunkstrapi_vercel_test||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))})(),a.nc=void 0})();
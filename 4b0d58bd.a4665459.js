(window.webpackJsonp=window.webpackJsonp||[]).push([[627],{2196:function(e,t,n){"use strict";function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var b in n)Object.prototype.hasOwnProperty.call(n,b)&&(e[b]=n[b])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return b}))},2197:function(e,t,n){"use strict";function b(e,t){if(null==e)return{};var n,b,r={},l=Object.keys(e);for(b=0;b<l.length;b++)n=l[b],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return b}))},2198:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return p}));var b=n(0),r=n.n(b);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,b)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,b,r=function(e,t){if(null==e)return{};var n,b,r={},l=Object.keys(e);for(b=0;b<l.length;b++)n=l[b],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(b=0;b<l.length;b++)n=l[b],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},o=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,b=e.mdxType,l=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),o=s(n),d=b,p=o["".concat(c,".").concat(d)]||o[d]||O[d]||l;return n?r.a.createElement(p,a(a({ref:t},i),{},{components:n})):r.a.createElement(p,a({ref:t},i))}));function p(e,t){var n=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var l=n.length,c=new Array(l);c[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:b,c[1]=a;for(var i=2;i<l;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},692:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var b=n(2196),r=n(2197),l=(n(0),n(2198)),c={title:"Taro.requestSubscribeMessage(option)",sidebar_label:"requestSubscribeMessage"},a={unversionedId:"apis/open-api/subscribe-message/requestSubscribeMessage",id:"version-3.2.0-canary.3/apis/open-api/subscribe-message/requestSubscribeMessage",isDocsHomePage:!1,title:"Taro.requestSubscribeMessage(option)",description:"\u8bf7\u6c42\u8ba2\u9605\u6d88\u606f",source:"@site/versioned_docs/version-3.2.0-canary.3/apis/open-api/subscribe-message/requestSubscribeMessage.md",slug:"/apis/open-api/subscribe-message/requestSubscribeMessage",permalink:"/taro/docs/3.2.0-canary.3/apis/open-api/subscribe-message/requestSubscribeMessage",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.2.0-canary.3/apis/open-api/subscribe-message/requestSubscribeMessage.md",version:"3.2.0-canary.3",sidebar_label:"requestSubscribeMessage",sidebar:"version-3.2.0-canary.3/API",previous:{title:"Taro.getWeRunData(option)",permalink:"/taro/docs/3.2.0-canary.3/apis/open-api/werun/getWeRunData"},next:{title:"Taro.stopBeaconDiscovery(option)",permalink:"/taro/docs/3.2.0-canary.3/apis/device/ibeacon/stopBeaconDiscovery"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"FailCallbackResult",id:"failcallbackresult",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"template_reflex",id:"template_reflex",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-1",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:u};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(b.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u8bf7\u6c42\u8ba2\u9605\u6d88\u606f"),Object(l.b)("p",null,"\u6ce8\u610f\uff1a",Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html"}),"2.8.2")," \u7248\u672c\u5f00\u59cb\uff0c\u7528\u6237\u53d1\u751f\u70b9\u51fb\u884c\u4e3a\u6216\u8005\u53d1\u8d77\u652f\u4ed8\u56de\u8c03\u540e\uff0c\u624d\u53ef\u4ee5\u8c03\u8d77\u8ba2\u9605\u6d88\u606f\u754c\u9762\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult | FailCallbackResult>\n")),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"option"},"Option"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"tmplIds"),Object(l.b)("td",null,Object(l.b)("code",null,"any[]")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u9700\u8981\u8ba2\u9605\u7684\u6d88\u606f\u6a21\u677f\u7684id\u7684\u96c6\u5408\uff08\u6ce8\u610f\uff1aiOS\u5ba2\u6237\u7aef7.0.6\u7248\u672c\u3001Android\u5ba2\u6237\u7aef7.0.7\u7248\u672c\u4e4b\u540e\u7684\u4e00\u6b21\u6027\u8ba2\u9605/\u957f\u671f\u8ba2\u9605\u624d\u652f\u6301\u591a\u4e2a\u6a21\u677f\u6d88\u606f\uff0ciOS\u5ba2\u6237\u7aef7.0.5\u7248\u672c\u3001Android\u5ba2\u6237\u7aef7.0.6\u7248\u672c\u4e4b\u524d\u7684\u4e00\u6b21\u8ba2\u9605\u53ea\u652f\u6301\u4e00\u4e2a\u6a21\u677f\u6d88\u606f\uff09\u6d88\u606f\u6a21\u677fid\u5728[\u5fae\u4fe1\u516c\u4f17\u5e73\u53f0(mp.weixin.qq.com)-\u529f\u80fd-\u8ba2\u9605\u6d88\u606f]\u4e2d\u914d\u7f6e")),Object(l.b)("tr",null,Object(l.b)("td",null,"complete"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"fail"),Object(l.b)("td",null,Object(l.b)("code",null,"(result: FailCallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(l.b)("tr",null,Object(l.b)("td",null,"success"),Object(l.b)("td",null,Object(l.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.b)("h3",{id:"failcallbackresult"},"FailCallbackResult"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"errCode"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u9519\u8bef\u7801")),Object(l.b)("tr",null,Object(l.b)("td",null,"errMsg"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u9519\u8bef\u4fe1\u606f")))),Object(l.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"[TEMPLATE_ID]"),Object(l.b)("td",null,Object(l.b)("code",null,'"accept" | "reject" | "ban"')),Object(l.b)("td",null,"\u52a8\u6001\u7684\u952e\uff0c\u5373\u6a21\u677fid")),Object(l.b)("tr",null,Object(l.b)("td",null,"errMsg"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u65f6errMsg\u503c\u4e3a'requestSubscribeMessage:ok'")))),Object(l.b)("h4",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("p",null,"\u8868\u793a\u7528\u6237\u540c\u610f\u8ba2\u9605 zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE \u8fd9\u6761\u6d88\u606f"),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-json"}),'{\n  "errMsg": "requestSubscribeMessage:ok",\n  "zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE": "accept"\n}\n')),Object(l.b)("h3",{id:"template_reflex"},"template_reflex"),Object(l.b)("p",null,"\u6a21\u7248\u6d88\u606f\u8ba2\u9605\u7c7b\u578b"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"accept"),Object(l.b)("td",null,"\u8868\u793a\u7528\u6237\u540c\u610f\u8ba2\u9605\u8be5\u6761id\u5bf9\u5e94\u7684\u6a21\u677f\u6d88\u606f")),Object(l.b)("tr",null,Object(l.b)("td",null,"reject"),Object(l.b)("td",null,"\u8868\u793a\u7528\u6237\u62d2\u7edd\u8ba2\u9605\u8be5\u6761id\u5bf9\u5e94\u7684\u6a21\u677f\u6d88\u606f")),Object(l.b)("tr",null,Object(l.b)("td",null,"ban"),Object(l.b)("td",null,"\u8868\u793a\u5df2\u88ab\u540e\u53f0\u5c01\u7981")))),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801-1"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.requestSubscribeMessage({\n  tmplIds: [''],\n  success: function (res) { }\n})\n")),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Taro.requestSubscribeMessage"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0}}]);
;/*!index.tsx*/
amis.define("8d0e5e4",(function(e,t,a,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bootstrap=void 0;var o=e("849c8c1"),r=o.__importDefault(e("cc4bbf0")),u=o.__importDefault(e("3c5b02d")),f=o.__importDefault(e("4c5556c"));t.bootstrap=function(e){u.default.render(r.default.createElement(f.default,null),e)}}));
;/*!loadMonacoEditor.ts*/
amis.define("800eaff",(function(s,a,e,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.__mod__async__load=void 0,a.__mod__async__load=function(s){amis.require.loadJs("/amis-editor-demo/n/monaco-editor/min/vs/loader.js").onload=function(){return function(s,a){var e={"vs/nls":{availableLanguages:{"*":"zh-cn"}},paths:{vs:"/amis-editor-demo/n/monaco-editor/min/vs/editor/editor.main.js".replace(/\/vs\/.*$/,""),"vs/base/worker/workerMain":"/amis-editor-demo/n/monaco-editor/min/vs/base/worker/workerMain.js","vs/basic-languages/apex/apex":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/apex/apex.js","vs/basic-languages/azcli/azcli":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/azcli/azcli.js","vs/basic-languages/clojure/clojure":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/clojure/clojure.js","vs/basic-languages/bat/bat":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/bat/bat.js","vs/basic-languages/coffee/coffee":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/coffee/coffee.js","vs/basic-languages/cpp/cpp":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/cpp/cpp.js","vs/basic-languages/csharp/csharp":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/csharp/csharp.js","vs/basic-languages/css/css":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/css/css.js","vs/basic-languages/dockerfile/dockerfile":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/dockerfile/dockerfile.js","vs/basic-languages/fsharp/fsharp":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/fsharp/fsharp.js","vs/basic-languages/go/go":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/go/go.js","vs/basic-languages/handlebars/handlebars":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/handlebars/handlebars.js","vs/basic-languages/html/html":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/html/html.js","vs/basic-languages/ini/ini":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/ini/ini.js","vs/basic-languages/java/java":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/java/java.js","vs/basic-languages/javascript/javascript":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/javascript/javascript.js","vs/basic-languages/less/less":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/less/less.js","vs/basic-languages/lua/lua":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/lua/lua.js","vs/basic-languages/markdown/markdown":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/markdown/markdown.js","vs/basic-languages/msdax/msdax":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/msdax/msdax.js","vs/basic-languages/objective-c/objective-c":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/objective-c/objective-c.js","vs/basic-languages/php/php":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/php/php.js","vs/basic-languages/postiats/postiats":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/postiats/postiats.js","vs/basic-languages/powershell/powershell":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/powershell/powershell.js","vs/basic-languages/pug/pug":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/pug/pug.js","vs/basic-languages/python/python":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/python/python.js","vs/basic-languages/r/r":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/r/r.js","vs/basic-languages/razor/razor":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/razor/razor.js","vs/basic-languages/redis/redis":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/redis/redis.js","vs/basic-languages/redshift/redshift":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/redshift/redshift.js","vs/basic-languages/ruby/ruby":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/ruby/ruby.js","vs/basic-languages/rust/rust":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/rust/rust.js","vs/basic-languages/sb/sb":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/sb/sb.js","vs/basic-languages/scheme/scheme":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/scheme/scheme.js","vs/basic-languages/scss/scss":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/scss/scss.js","vs/basic-languages/shell/shell":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/shell/shell.js","vs/basic-languages/solidity/solidity":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/solidity/solidity.js","vs/basic-languages/sql/sql":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/sql/sql.js","vs/basic-languages/st/st":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/st/st.js","vs/basic-languages/swift/swift":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/swift/swift.js","vs/basic-languages/typescript/typescript":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/typescript/typescript.js","vs/basic-languages/vb/vb":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/vb/vb.js","vs/basic-languages/xml/xml":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/xml/xml.js","vs/basic-languages/yaml/yaml":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/yaml/yaml.js","vs/editor/editor.main":"/amis-editor-demo/n/monaco-editor/min/vs/editor/editor.main.js","vs/editor/editor.main.css":"/amis-editor-demo/n/monaco-editor/min/vs/editor/editor.main.css","vs/editor/editor.main.nls":"/amis-editor-demo/n/monaco-editor/min/vs/editor/editor.main.nls.js","vs/editor/editor.main.nls.zh-cn":"/amis-editor-demo/n/monaco-editor/min/vs/editor/editor.main.nls.zh-cn.js","vs/language/typescript/tsMode":"/amis-editor-demo/n/monaco-editor/min/vs/language/typescript/tsMode.js","vs/language/typescript/tsWorker":"/amis-editor-demo/n/monaco-editor/min/vs/language/typescript/tsWorker.js","vs/language/json/jsonMode":"/amis-editor-demo/n/monaco-editor/min/vs/language/json/jsonMode.js","vs/language/json/jsonWorker":"/amis-editor-demo/n/monaco-editor/min/vs/language/json/jsonWorker.js","vs/language/html/htmlMode":"/amis-editor-demo/n/monaco-editor/min/vs/language/html/htmlMode.js","vs/language/html/htmlWorker":"/amis-editor-demo/n/monaco-editor/min/vs/language/html/htmlWorker.js","vs/language/css/cssMode":"/amis-editor-demo/n/monaco-editor/min/vs/language/css/cssMode.js","vs/language/css/cssWorker":"/amis-editor-demo/n/monaco-editor/min/vs/language/css/cssWorker.js"}};Object.keys(e.paths).forEach((function(s){e.paths[s]=e.paths[s].replace(/\.js$/,"")})),s.config(e),/^(https?:)?\/\//.test(e.paths.vs)?window.MonacoEnvironment={getWorkerUrl:function(){return"data:text/javascript;charset=utf-8,"+encodeURIComponent("\n              self.MonacoEnvironment = {\n                  baseUrl: '"+e.paths.vs+"',\n                  paths: "+JSON.stringify(e.paths)+"\n              };\n              importScripts('/amis-editor-demo/n/monaco-editor/min/vs/base/worker/workerMain.js');")}}:delete window.MonacoEnvironment;s(["vs/editor/editor.main"],(function(s){a(s)}))}(window.require,s)}}}));
;/*!route/NotFound.tsx*/
amis.define("0d8fb78",(function(e,t,a,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=e("849c8c1").__importDefault(e("cc4bbf0")),r=e("f7998ad"),c=e("167c905");t.default=function(){return l.default.createElement(c.NotFound,{links:l.default.createElement(r.Link,{to:"/",className:"list-group-item"},l.default.createElement("i",{className:"fa fa-chevron-right text-muted"}),l.default.createElement("i",{className:"fa fa-fw fa-mail-forward m-r-xs"}),"去首页"),footerText:""})}}));
;/*!component/AMISRenderer.tsx*/
amis.define("bf6b35d",(function(e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.schema2component=void 0;var a=e("849c8c1"),o=a.__importDefault(e("cc4bbf0")),s=e("6af3be1"),i=e("024943c"),p=e("2426036"),u=a.__importDefault(e("9c65a3c")),c=e("167c905");function f(e,t,r){void 0===r&&(r="page");var n=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return a.__extends(s,n),s.prototype.getEnv=function(){var e=this;if(this.env)return this.env;var t=this.props,n=t.store,o=p.getEnv(n),s=function(t,r){if(/^\/api\//.test(t))return t;t=t||"";var n=e.props.history.location,a=u.default.parse(n.search.substring(1));(t=c.filter(t.replace(/\$\$/g,u.default.stringify(a)),a))&&"#"===t[0]?t=n.pathname+n.search+t:t&&"?"===t[0]&&(t=n.pathname+t);var o=t.indexOf("?"),s=t.indexOf("#"),i=~o?t.substring(0,o):~s?t.substring(0,s):t,p=~o?t.substring(o,~s?s:void 0):"",f=~s?t.substring(s):r?n.hash:"";if(i){if("/"!=i[0]&&!/^\w+\:/.test(i)){var h=n.pathname.split("/");h.pop();for(var d=void 0;d=/^\.\.?\//.exec(i);)"../"===d[0]&&h.pop(),i=i.substring(d[0].length);i=h.concat(i).join("/")}}else i=n.pathname;return i+p+f},i=function(t){var r=e.props.history,n=s(t),a=r.location,o=n,i="",p=n.indexOf("?");if(~p&&(o=n.substring(0,p),i=n.substring(p)),i){if(o!==a.pathname||!a.search)return!1;var c=u.default.parse(a.search.substring(1)),f=u.default.parse(i.substring(1));return Object.keys(f).every((function(e){return f[e]===c[e]}))}return o===a.pathname};return this.env=a.__assign(a.__assign({},o),{session:r,isCurrentUrl:i,updateLocation:t.updateLocation||function(t,r){var n=e.props.history;return"goBack"===t?n.goBack():/^https?\:\/\//.test(t)?window.location.href=t:void n[r?"replace":"push"](s(t,r))},jumpTo:t.jumpTo||function(t,r){var n=e.props.history;if("goBack"===t)return n.goBack();t=s(t),i(t)||(r&&"url"===r.actionType?!1===r.blank?window.location.href=t:window.open(t,"_blank"):r&&r.blank?window.open(t,"_blank"):/^https?:\/\//.test(t)?window.location.href=t:n.push(t))},affixOffsetTop:t.embedMode?0:50,theme:n.theme})},s.prototype.render=function(){var r,n=this.props,s=(n.router,n.match),i=n.location,p=(n.history,n.store),u=n.schema,f=(n.jumpTo,n.updateLocation,n.embedMode,a.__rest(n,["router","match","location","history","store","schema","jumpTo","updateLocation","embedMode"])),h=u||e;return h.type||(h.type="page"),r=c.render(h,a.__assign(a.__assign({location:i,data:c.utils.createObject(a.__assign(a.__assign({},s.params),{amisStore:p,pathname:i.pathname,params:s.params}))},f),{propsTransform:t}),this.getEnv()),o.default.createElement(o.default.Fragment,null,r)},s.displayName="SchemaRenderer",s=a.__decorate([i.inject("store"),i.observer],s)}(o.default.Component);return s.withRouter(n)}t.schema2component=f,t.default=f({type:"page",body:"It works"})}));
;/*!component/AddPageModal.tsx*/
amis.define("3b1184e",(function(e,t,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("849c8c1"),r=e("bf6b35d");t.default=r.schema2component({type:"dialog",title:"新增页面",body:{type:"form",controls:[{type:"text",label:"名称",name:"label",validations:{maxLength:20},required:!0},{type:"text",label:"路径",name:"path",validations:{isUrlPath:!0},required:!0,validate:function(e,t){return!!e.pages.filter((function(e){return e.path===t})).length?"当前路径已被占用，请换一个":""}},{type:"icon-picker",label:"图标",name:"icon"}]}},(function(e){var t=e.onConfirm,n=e.pages,a=i.__rest(e,["onConfirm","pages"]);return i.__assign(i.__assign({},a),{data:{pages:n},onConfirm:function(e){return t&&t(e[0])}})}))}));
;/*!route/Preview.tsx*/
amis.define("816c31c",(function(e,a,t,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=e("849c8c1"),i=l.__importDefault(e("cc4bbf0")),d=e("024943c"),c=e("167c905"),s=e("6af3be1"),o=e("f7998ad"),r=l.__importDefault(e("0d8fb78")),u=l.__importDefault(e("bf6b35d")),f=l.__importDefault(e("3b1184e"));a.default=d.inject("store")(d.observer((function(e){var a,t,n=e.store,d=e.location,m=e.history;return i.default.createElement(c.Layout,{aside:(a=n.pages.map((function(e){return{label:e.label,path:"/"+e.path,icon:e.icon}})),t=a.map((function(e){return e.path})),i.default.createElement(c.AsideNav,{key:n.asideFolded?"folded-aside":"aside",navigations:[{label:"导航",children:a}],renderLink:function(e){var a=e.link,l=e.toggleExpand,d=e.classnames,s=e.depth;if(a.hidden)return null;var r=[];return a.children&&r.push(i.default.createElement("span",{key:"expand-toggle",className:d("AsideNav-itemArrow"),onClick:function(e){return l(a,e)}})),a.badge&&r.push(i.default.createElement("b",{key:"badge",className:d("AsideNav-itemBadge",a.badgeClassName||"bg-info")},a.badge)),a.icon?r.push(i.default.createElement("i",{key:"icon",className:d("AsideNav-itemIcon",a.icon)})):n.asideFolded&&1===s&&r.push(i.default.createElement("i",{key:"icon",className:d("AsideNav-itemIcon",a.children?"fa fa-folder":"fa fa-info")})),a.active||r.push(i.default.createElement("i",{key:"delete","data-tooltip":"删除","data-position":"bottom",className:"navbtn fa fa-times",onClick:function(e){e.preventDefault(),c.confirm("确认要删除").then((function(e){e&&n.removePageAt(t.indexOf(a.path))}))}})),r.push(i.default.createElement("i",{key:"edit","data-tooltip":"编辑","data-position":"bottom",className:"navbtn fa fa-pencil",onClick:function(e){e.preventDefault(),m.push("/edit/"+t.indexOf(a.path))}})),r.push(i.default.createElement("span",{key:"label",className:d("AsideNav-itemLabel")},a.label)),a.path?a.active?i.default.createElement("a",null,r):i.default.createElement(o.Link,{to:"/"===a.path[0]?a.path:""+a.path},r):i.default.createElement("a",{onClick:a.onClick?a.onClick:a.children?function(){return l(a)}:void 0},r)},isActive:function(e){return function(e,a){return!!s.matchPath(a.pathname,{path:e?e.replace(/\?.*$/,""):"",exact:!0,strict:!0})}(e.path&&"/"===e.path[0]?e.path:""+e.path,d)}})),header:i.default.createElement("div",null,i.default.createElement("div",{className:"a-Layout-brandBar"},i.default.createElement("button",{onClick:n.toggleOffScreen,className:"pull-right visible-xs"},i.default.createElement("i",{className:"glyphicon glyphicon-align-justify"})),i.default.createElement("div",{className:"a-Layout-brand"},i.default.createElement("i",{className:"fa fa-paw"}),i.default.createElement("span",{className:"hidden-folded m-l-sm"},"AMIS 编辑器"))),i.default.createElement("div",{className:"a-Layout-headerBar"},i.default.createElement("div",{className:"hidden-xs p-t-sm pull-right"},i.default.createElement(c.Button,{size:"sm",className:"m-r-xs",level:"success",disabled:!0,disabledTip:"Todo..."},"全部导出"),i.default.createElement(c.Button,{size:"sm",level:"info",onClick:function(){return n.setAddPageIsOpen(!0)}},"新增页面")))),folded:n.asideFolded,offScreen:n.offScreen},i.default.createElement(s.Switch,null,n.pages.map((function(e){return i.default.createElement(s.Route,{key:e.id,path:"/"+e.path,render:function(){return i.default.createElement(u.default,{schema:e.schema})}})})),i.default.createElement(s.Route,{component:r.default})),i.default.createElement(f.default,{show:n.addPageIsOpen,onClose:function(){return n.setAddPageIsOpen(!1)},onConfirm:function(e){n.addPage(l.__assign(l.__assign({},e),{schema:{type:"page",title:e.label,body:"这是你刚刚新增的页面。"}})),n.setAddPageIsOpen(!1)},pages:n.pages.concat()}))})))}));
;/*!renderer/MyRenderer.tsx*/
amis.define("de955de",(function(e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=e("849c8c1"),d=e("167c905"),l=u.__importDefault(e("cc4bbf0")),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u.__extends(t,e),t.prototype.render=function(){var e=this.props.target;return l.default.createElement("p",null,"Hello ",e,"!")},t.defaultProps={target:"world"},t=u.__decorate([d.Renderer({test:/\bmy-renderer$/,name:"my-renderer"})],t)}(l.default.Component);t.default=o}));
;/*!editor/MyRenderer.tsx*/
amis.define("bef2b8d",(function(e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("849c8c1"),o=e("39ea9ea"),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tipName="自定义组件",t.settingsSchema={title:"自定义组件配置",controls:[{type:"tabs",tabsMode:"line",className:"m-t-n-xs",contentClassName:"no-border p-l-none p-r-none",tabs:[{title:"常规",controls:[{name:"target",label:"Target",type:"text"}]},{title:"外观",controls:[]}]}]},t}return a.__extends(t,e),t=a.__decorate([o.RendererEditor("my-renderer",{name:"自定义渲染器",description:"这只是个示例",type:"my-renderer",previewSchema:{type:"my-renderer",target:"demo"},scaffold:{type:"my-renderer",target:"233"}})],t)}(o.BasicEditor);t.default=s}));
;/*!route/Editor.tsx*/
amis.define("218f7cb",(function(e,t,a,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("849c8c1").__importDefault(e("cc4bbf0")),s=e("39ea9ea"),r=e("024943c"),l=e("167c905");e("de955de"),e("bef2b8d");var c=-1,o=window.location.protocol+"//"+window.location.host,d="/editor.html";/^\/amis-editor-demo/.test(window.location.pathname)&&(o+="/amis-editor",d="/amis-editor-demo"+d);var m=o+"/schema.json";t.default=r.inject("store")(r.observer((function(e){var t=e.store,a=(e.location,e.history),i=e.match,r=parseInt(i.params.id,10);function o(){t.updatePageSchemaAt(r),l.toast.success("保存成功","提示",{position:"top-center"})}function u(){a.push("/"+t.pages[r].path)}return r!==c&&(c=r,t.updateSchema(t.pages[r].schema)),n.default.createElement(l.Layout,{header:n.default.createElement("div",{className:"editor-header clearfix box-shadow bg-dark"},n.default.createElement("div",{className:"navbar-brand text-lt font-thin"},"AMis 编辑器"),n.default.createElement("div",{className:"editor-preview"},"预览"," ",n.default.createElement(l.Switch,{value:t.preview,onChange:function(e){return t.setPreview(e)},className:"m-l-xs",inline:!0})),n.default.createElement("div",{className:"editor-preview"},"移动端"," ",n.default.createElement(l.Switch,{value:t.isMobile,onChange:function(e){return t.setIsMobile(e)},className:"m-l-xs",inline:!0})),n.default.createElement("div",{className:"editor-header-btns"},n.default.createElement("div",{className:l.classnames("btn-item"),onClick:o},"保存"),n.default.createElement("div",{className:"btn-item",onClick:u},"退出"))),headerFixed:!1},n.default.createElement(s.Editor,{theme:"default",preview:t.preview,value:t.schema,onChange:function(e){return t.updateSchema(e)},className:"is-fixed",$schemaUrl:m,iframeUrl:d,isMobile:t.isMobile}))})))}));
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{447:function(t,e,s){},449:function(t,e,s){},450:function(t,e,s){"use strict";s(447)},456:function(t,e,s){"use strict";s(449)},458:function(t,e,s){"use strict";var a={props:{pageInfo:{type:Object,default:function(){return{}}}},computed:{headerImage:function(){return this.pageInfo.bgImage?{backgroundImage:"url(".concat(this.$withBase(this.pageInfo.bgImage.path),")")}:{}}}},n=(s(456),s(72)),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-header",class:{"style-img":t.pageInfo.bgImage},style:t.headerImage},[t.pageInfo.bgImage&&t.pageInfo.bgImage.mask?s("div",{staticClass:"header-mask",style:{background:t.pageInfo.bgImage.mask}}):t._e(),t._v(" "),s("h1",{staticClass:"title"},[t._v("\n    "+t._s(t.pageInfo.title||t.$page.frontmatter.title)+"\n  ")]),t._v(" "),t.pageInfo.subtitle?s("h3",{staticClass:"subtitle"},[t._v("\n    "+t._s(t.pageInfo.subtitle)+"\n  ")]):t._e()])}),[],!1,null,"56febcde",null);e.a=i.exports},493:function(t,e,s){},537:function(t,e,s){t.exports=s.p+"assets/img/default-link-avatar.59621d5c.jpg"},538:function(t,e,s){"use strict";s(493)},550:function(t,e,s){"use strict";s.r(e);var a=s(451),n=s(458),i={components:{Common:a.a,PageHeader:n.a},computed:{getPageInfo:function(){var t=this.$themeConfig.pages&&this.$themeConfig.pages.links?this.$themeConfig.pages.links:{};return t.title=this.$themeLocales.links,t}}},r=(s(538),s(450),s(72)),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Common",[a("PageHeader",{attrs:{"page-info":t.getPageInfo}}),t._v(" "),a("div",{staticClass:"links-wrapper"},t._l(t.$page.frontmatter.links,(function(e,n){return a("div",{key:"link-group-"+n,staticClass:"section"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("div",{staticClass:"group"},t._l(e.items,(function(e,n){return a("div",{key:"link-"+n,staticClass:"item"},[a("div",{staticClass:"content"},[a("a",{attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:e.img?t.$withBase(e.img):s(537)}}),t._v(" "),a("span",{staticClass:"sitename"},[t._v("\n                "+t._s(e.sitename)+"\n              ")]),t._v(" "),a("div",{staticClass:"desc"},[t._v("\n                "+t._s(e.desc)+"\n              ")])])])])})),0),t._v(" "),a("hr",{staticStyle:{visibility:"hidden"}})])})),0)],1)}),[],!1,null,null,null);e.default=o.exports}}]);
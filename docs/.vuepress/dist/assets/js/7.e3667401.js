(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{271:function(t,n,e){"use strict";var r=e(0),s=e(78),i=e(13),a=e(1),o=e(22),c=[],u=c.sort,l=a((function(){c.sort(void 0)})),f=a((function(){c.sort(null)})),p=o("sort");r({target:"Array",proto:!0,forced:l||!f||!p},{sort:function(t){return void 0===t?u.call(i(this)):u.call(i(this),s(t))}})},272:function(t,n,e){var r=e(21),s=Date.prototype,i=s.toString,a=s.getTime;new Date(NaN)+""!="Invalid Date"&&r(s,"toString",(function(){var t=a.call(this);return t==t?i.call(this):"Invalid Date"}))},283:function(t,n,e){"use strict";e(17),e(271),e(272)},311:function(t,n,e){},355:function(t,n,e){"use strict";var r=e(311);e.n(r).a},374:function(t,n,e){"use strict";e.r(n);e(17),e(55),e(271),e(272),e(136),e(283);var r={computed:{posts:function(){return this.$site.pages.filter((function(t){return t.path.startsWith("/series/")&&!t.frontmatter.series_index})).sort((function(t,n){return new Date(n.frontmatter.date)-new Date(t.frontmatter.date)})).slice(0,2)}}},s=(e(355),e(33)),i=Object(s.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._l(t.posts,(function(n){return[e("article",{staticClass:"col-sm-5bx"},[e("a",{staticClass:"post-description",attrs:{href:n.path}},[e("div",{staticClass:"caption"},[e("h5",{staticClass:"caption-heading"},[t._v(t._s(n.frontmatter.title))])])])])]}))],2)}),[],!1,null,"704507e7",null);n.default=i.exports}}]);
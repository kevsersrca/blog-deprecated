(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{388:function(e,t,a){"use strict";a.r(t);var s=a(33),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Delete all created docker container command")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker rm $( docker ps -q -f status=created)\n")])])]),a("p",[e._v("Delete all exited docker container command")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker rm $( docker ps -q -f status=exited)\n")])])]),a("p",[e._v("Delete all unused images command")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker rmi $( docker images -q -f dangling=true)\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
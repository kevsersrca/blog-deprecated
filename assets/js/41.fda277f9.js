(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{392:function(e,t,n){"use strict";n.r(t);var r=n(33),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"create-file-and-write-inside-data-in-go"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-file-and-write-inside-data-in-go"}},[e._v("#")]),e._v(" Create file and write inside data in Go")]),e._v(" "),n("p",[e._v("Hi,")]),e._v(" "),n("p",[e._v("Golang create file and write file in here.")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("func saveFile(filename string, body []byte) (bool, error) {\n\tf, err := os.Create(filename)\n\tif err != nil {\n\t\treturn false, err\n\t}\n\tdefer f.Close()\n\n\t_, err = f.Write(body)\n    if err != nil {\n        return false, err\n    }\n\treturn true, nil\n}\n")])])]),n("p",[e._v("instead of "),n("code",[e._v("f.Write()")]),e._v(" function, you should use "),n("code",[e._v("f.WriteString()")]),e._v(".")]),e._v(" "),n("p",[e._v("Happy Coding,")])])}),[],!1,null,null,null);t.default=a.exports}}]);
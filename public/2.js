(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{4:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),n=l(a(1)),u=l(a(6));t.default=function(e){var t=e.bookmark;return n.default.createElement(u.default,null,n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col-md-6"},t.title&&n.default.createElement("div",{className:"card"},n.default.createElement("div",{className:"card-header"},t.title),n.default.createElement("div",{className:"card-body"},n.default.createElement("p",null,"Url: ",t.url),n.default.createElement("p",null,t.description),n.default.createElement("div",{className:"mb-3"},n.default.createElement("img",{src:t.img_url,alt:t.title,width:"100%"})),n.default.createElement("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),r.Inertia.post("/bookmark/make-active",{id:t.id})}},"Save"))))))}},6:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(1));t.default=function(e){var t=e.children;return r.default.createElement("div",{className:"container"},t)}}}]);
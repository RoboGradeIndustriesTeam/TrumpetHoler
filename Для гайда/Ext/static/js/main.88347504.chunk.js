(this["webpackJsonptrumpetholer-web-react"]=this["webpackJsonptrumpetholer-web-react"]||[]).push([[0],{39:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(31),s=n.n(c),u=(n(39),n(1)),o=n.n(u),i=n(4),p=n(20),b=n(32),j=n(33),l=n(13),d=n(10),f=n(19),m=n(9),h=n(34),x=n(12),w=n(21),O=n(15),v=n(0),k=n(46).default;function g(e){return M.apply(this,arguments)}function M(){return(M=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(document.getElementById("tosendnm").value);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return N.apply(this,arguments)}function N(){return(N=Object(i.a)(o.a.mark((function e(t){var n,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.post("http://"+window.ip+":9981/cmd",{cmd:t});case 2:n=e.sent,(r=document.createElement("li")).className="list-group-item",(a=document.createElement("p")).innerText="[\u041e\u0422\u0412\u0415\u0422] "+n.data.resp,a.className="font-monospace text-info",r.appendChild(a),document.getElementById("lognm").appendChild(r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=function(){var e=Object(r.useState)(!1),t=Object(p.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),s=Object(p.a)(c,2),u=(s[0],s[1]);return window.soplo_status=!1,Object(r.useEffect)((function(){a(!0)}),[]),Object(r.useEffect)((function(){n&&(u(!0),window.ip=prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 IP \u0410\u0434\u0440\u0435\u0441 \u0440\u043e\u0431\u043e\u0442\u0430"))}),[n]),Object(v.jsx)("div",{className:"body",children:Object(v.jsxs)(l.a,{children:[Object(v.jsx)(d.a,{children:Object(v.jsxs)(f.a,{children:[Object(v.jsx)("h1",{className:"heading-text",children:"\u041a\u0430\u043c\u0435\u0440\u0430"}),Object(v.jsx)("img",{id:"camera",className:"camera-video"}),Object(v.jsxs)("div",{className:"sel-cam",children:[Object(v.jsxs)("div",{onChange:function(e){"cam1"===e.target.id&&(document.getElementById("camera").src="http://"+window.ip+":9978/video0.jpg"),"cam2"===e.target.id&&(document.getElementById("camera").src="http://"+window.ip+":9978/video1.jpg")},children:[Object(v.jsxs)(w.a,{className:"form-check form-check-inline",children:[Object(v.jsx)(x.a,{type:"radio",id:"cam1",name:"cam"}),Object(v.jsx)(O.a,{htmlFor:"cam1",children:"\u041a\u0430\u043c\u0435\u0440\u0430 1"})]}),Object(v.jsxs)(w.a,{className:"form-check form-check-inline",children:[Object(v.jsx)(x.a,{type:"radio",id:"cam2",name:"cam"}),Object(v.jsx)(O.a,{htmlFor:"cam2",children:"\u041a\u0430\u043c\u0435\u0440\u0430 2"})]})]}),Object(v.jsxs)("div",{onChange:function(e){e.target.checked?y("[R1 1]"):y("[R1 0]")},className:"form-check form-check-inline form-switch",children:[Object(v.jsx)(x.a,{type:"checkbox",id:"flash"}),Object(v.jsx)(O.a,{htmlFor:"flash",children:"\u0424\u043e\u043d\u0430\u0440\u044c"})]})]})]})}),Object(v.jsx)(d.a,{children:Object(v.jsxs)(f.a,{children:[Object(v.jsx)("h1",{className:"heading-text",children:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435"}),Object(v.jsxs)(l.a,{children:[Object(v.jsxs)(d.a,{children:[Object(v.jsx)(m.a,{onMouseDown:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[M0 f]"));case 1:case"end":return e.stop()}}),e)}))),onMouseUp:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[P]"));case 1:case"end":return e.stop()}}),e)}))),className:"btn-primary btn-lg btn-levels-up-main",children:"\u25b2"}),Object(v.jsxs)("div",{children:[Object(v.jsxs)(l.a,{children:[Object(v.jsx)(d.a,{xs:4,children:Object(v.jsx)(m.a,{onMouseDown:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[M1 f]"));case 1:case"end":return e.stop()}}),e)}))),onMouseUp:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[P]"));case 1:case"end":return e.stop()}}),e)}))),className:"btn-primary btn-lg btn-levels-up",children:"\u25b2"})}),Object(v.jsx)(d.a,{xs:4,children:Object(v.jsx)(m.a,{onMouseDown:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[M2 f]"));case 1:case"end":return e.stop()}}),e)}))),onMouseUp:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[P]"));case 1:case"end":return e.stop()}}),e)}))),className:"btn-primary btn-lg btn-levels-up",children:"\u25b2"})}),Object(v.jsx)(d.a,{xs:4,children:Object(v.jsx)(m.a,{onMouseDown:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[M3 f]"));case 1:case"end":return e.stop()}}),e)}))),onMouseUp:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[P]"));case 1:case"end":return e.stop()}}),e)}))),className:"btn-primary btn-lg btn-levels-up",children:"\u25b2"})})]}),Object(v.jsxs)(l.a,{children:[Object(v.jsx)(d.a,{xs:4,children:Object(v.jsx)(m.a,{onMouseDown:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[M1 b]"));case 1:case"end":return e.stop()}}),e)}))),onMouseUp:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[P]"));case 1:case"end":return e.stop()}}),e)}))),className:"btn-primary btn-lg btn-levels-down",children:"\u25bc"})}),Object(v.jsx)(d.a,{xs:4,children:Object(v.jsx)(m.a,{onMouseDown:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[M2 b]"));case 1:case"end":return e.stop()}}),e)}))),onMouseUp:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[P]"));case 1:case"end":return e.stop()}}),e)}))),className:"btn-primary btn-lg btn-levels-down",children:"\u25bc"})}),Object(v.jsx)(d.a,{xs:4,children:Object(v.jsx)(m.a,{onMouseDown:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[M3 b]"));case 1:case"end":return e.stop()}}),e)}))),onMouseUp:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[P]"));case 1:case"end":return e.stop()}}),e)}))),className:"btn-primary btn-lg btn-levels-down",children:"\u25bc"})})]}),Object(v.jsx)(m.a,{onMouseDown:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[M0 b]"));case 1:case"end":return e.stop()}}),e)}))),onMouseUp:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[P]"));case 1:case"end":return e.stop()}}),e)}))),className:"btn-primary btn-lg btn-levels-down-main",children:"\u25bc"})]}),Object(v.jsx)(m.a,{onClick:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.soplo_status=!window.soplo_status,window.soplo_status&&y("[L3 f]"),window.soplo_status||y("[L3 b]");case 3:case"end":return e.stop()}}),e)}))),className:"btn-primary btn-lg text-break info-btn",children:"\u0412\u044b\u0434\u0432\u0438\u043d\u0443\u0442\u044c \u0441\u043e\u043f\u043b\u043e"})]}),Object(v.jsxs)(d.a,{children:[Object(v.jsxs)(l.a,{children:[Object(v.jsx)(d.a,{className:"cls",children:Object(v.jsx)(m.a,{onMouseDown:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[L1 f]"));case 1:case"end":return e.stop()}}),e)}))),onMouseUp:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[P]"));case 1:case"end":return e.stop()}}),e)}))),className:"btn-primary btn-lg btn-joystick-\ud83e\udc79-\ud83e\udc78",children:"\ud83e\udc79"})}),Object(v.jsx)(d.a,{className:"cls",children:Object(v.jsx)(m.a,{onMouseDown:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[L2 f]"));case 1:case"end":return e.stop()}}),e)}))),onMouseUp:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[P]"));case 1:case"end":return e.stop()}}),e)}))),className:"btn-primary btn-lg btn-joystick-\ud83e\udc79-\ud83e\udc7a",children:"\ud83e\udc79"})})]}),Object(v.jsxs)(l.a,{children:[Object(v.jsx)(d.a,{className:"cls",children:Object(v.jsx)(m.a,{onMouseDown:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[S1 f]"));case 1:case"end":return e.stop()}}),e)}))),onMouseUp:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[P]"));case 1:case"end":return e.stop()}}),e)}))),className:"btn-primary btn-lg btn-joystick-left",children:"\ud83e\udc78"})}),Object(v.jsx)(d.a,{className:"cls",children:Object(v.jsx)(m.a,{onMouseDown:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[S1 b]"));case 1:case"end":return e.stop()}}),e)}))),onMouseUp:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[P]"));case 1:case"end":return e.stop()}}),e)}))),className:"btn-primary btn-lg btn-joystick-right",children:"\ud83e\udc7a"})})]}),Object(v.jsxs)(l.a,{children:[Object(v.jsx)(d.a,{className:"cls",children:Object(v.jsx)(m.a,{onMouseDown:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[L1 b]"));case 1:case"end":return e.stop()}}),e)}))),onMouseUp:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[P]"));case 1:case"end":return e.stop()}}),e)}))),className:"btn-primary btn-lg btn-joystick-\ud83e\udc83-\ud83e\udc78",children:"\ud83e\udc83"})}),Object(v.jsx)(d.a,{className:"cls",children:Object(v.jsx)(m.a,{onMouseDown:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[L2 b]"));case 1:case"end":return e.stop()}}),e)}))),onMouseUp:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[P]"));case 1:case"end":return e.stop()}}),e)}))),className:"btn-primary btn-lg btn-joystick-\ud83e\udc83-\ud83e\udc7a",children:"\ud83e\udc83"})})]}),Object(v.jsx)(m.a,{onMouseDown:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[S1 f]"));case 1:case"end":return e.stop()}}),e)}))),onMouseUp:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[P]"));case 1:case"end":return e.stop()}}),e)}))),className:"btn-primary btn-lg text-break info-btn btn-foam",children:"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043f\u0435\u043d\u044b"}),Object(v.jsx)(m.a,{onMouseDown:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[R2 1]"));case 1:case"end":return e.stop()}}),e)}))),onMouseUp:Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("[R2 0]"));case 1:case"end":return e.stop()}}),e)}))),className:"btn-primary btn-lg text-break info-btn",children:"\u041f\u043e\u043c\u043f\u0430"})]})]}),Object(v.jsx)("div",{className:"deb-list-div",children:Object(v.jsx)("ul",{className:"list-group deb-list",id:"lognm"})}),Object(v.jsxs)(h.a,{children:[Object(v.jsx)("input",{type:"text",id:"tosendnm",className:"form-control deb-input"}),Object(v.jsx)(m.a,{className:"deb-btn",onClick:g,children:Object(v.jsx)(b.a,{icon:j.a})})]})]})})]})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};n(64);s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(P,{})}),document.getElementsByTagName("body")[0]),D()}},[[65,1,2]]]);
//# sourceMappingURL=main.88347504.chunk.js.map
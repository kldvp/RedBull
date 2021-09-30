(this["webpackJsonpredbull-frontend"]=this["webpackJsonpredbull-frontend"]||[]).push([[0],{157:function(t,e,n){},212:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(41),o=n.n(r),s=(n(157),n(22)),i=n.n(s),u=n(42),l=n(70),d=n(71),j=n(135),h=n(133),f=n(293),b=n(292),x=n(277),p=n(275),O=(n.p,n(1)),g=function(t){var e=t.title;return Object(O.jsx)(b.a,{position:"fixed",sx:{zIndex:function(t){return t.zIndex.drawer+1},backgroundColor:function(t){return t.palette.common.black}},children:Object(O.jsx)(x.a,{children:Object(O.jsx)(p.a,{variant:"h4",noWrap:!0,component:"div",children:e})})})},v=n(8),m=n(272),k=n(288),S=n(280),w=n(281),y=n(291),z=function(t){var e=t.states,n=t.handlecurrentStatus,a=t.currentStatus;return Object(O.jsxs)(m.a,{variant:"permanent",sx:Object(v.a)({width:240,flexShrink:0},"& .MuiDrawer-paper",{width:240,boxSizing:"border-box"}),children:[Object(O.jsx)(x.a,{}),Object(O.jsx)(f.a,{sx:{overflow:"auto"},children:Object(O.jsx)(k.a,{children:e.map((function(t,e){return Object(O.jsxs)(y.a,{onClick:function(e){return n(e,t.status)},selected:a===t.status,children:[Object(O.jsx)(S.a,{children:Object(O.jsx)(t.icon,{})},"".concat(t.status,"-LII-").concat(e)),Object(O.jsx)(w.a,{primary:Object(O.jsx)(p.a,{align:"left",variant:"button",children:t.status})}),Object(O.jsx)(w.a,{secondary:Object(O.jsx)(p.a,{align:"right",variant:"subtitle2",children:t.count})})]},"".concat(t.status,"-LIB-").concat(e))}))})})]})},C=n(274),M=n(282),D=n(283),P=n(273),T=n(285),B=n(287),A=n(124),I=n.n(A);function J(t){var e=t.dialog,n=t.closeModal,c=t.data,r=t.dialogButtons,o=t.showJson,s=t.dialogTitle,i=a.useRef(null);return a.useEffect((function(){if(e){var t=i.current;null!==t&&t.focus()}}),[e]),Object(O.jsxs)(M.a,{open:e,onClose:n,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[Object(O.jsx)(B.a,{id:"scroll-dialog-title",children:s}),Object(O.jsx)(P.a,{dividers:!0,children:Object(O.jsx)(T.a,{id:"scroll-dialog-description",ref:i,tabIndex:-1,component:"span",children:o?Object(O.jsx)(I.a,{src:c}):c})}),Object(O.jsx)(D.a,{children:r&&r.map((function(t){return Object(O.jsx)(C.a,{onClick:t.onClick,children:t.label})}))})]})}var H=n(268),F=n(263),L=n(270),E=n(260);function R(t){var e=t.snack,n=t.closeSnack,a=t.snackSeverity,c=t.snackMessage;return Object(O.jsx)(F.a,{sx:{width:"100%"},spacing:2,children:Object(O.jsx)(L.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:e,onClose:n,TransitionComponent:E.a,autoHideDuration:3e3,children:Object(O.jsx)(H.a,{severity:a,children:c})})})}var U=n(286);function q(){return Object(O.jsx)(F.a,{sx:{width:"100%"},position:"fixed",children:Object(O.jsx)(U.a,{color:"inherit"})})}var N=n(4),W=n(290),G=n(278),Y=n(265),$=n(94),K=n(289),Q=n(276),V=n(284),X=n(279),Z=n(294),_=n(266),tt=Object(N.a)(Y.a)((function(t){var e,n=t.theme;return e={},Object(v.a)(e,"&.".concat($.a.head),{backgroundColor:n.palette.common.black,color:n.palette.common.white}),Object(v.a)(e,"&.".concat($.a.body),{fontSize:14}),e})),et=Object(N.a)(V.a)((function(t){return{"&:nth-of-type(odd)":{backgroundColor:t.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}}));function nt(t){var e=t.data,n=t.handleAction,a=t.actions;if(!e||!e.length)return Object(O.jsx)("div",{children:" NO DATA "});var c=function(){var t=Object.keys(e[0]);return t.length&&a&&a.length&&t.push("actions"),t}(),r=function(t){var c=Object.keys(e[0]).map((function(e,n){return Object(O.jsx)(tt,{component:"th",scope:"row",children:t[e]},"".concat(e,"-").concat(n))}));if(!a||!a.length)return c;var r=Object(O.jsx)(tt,{component:"th",scope:"row",children:a.map((function(e,a){return Object(O.jsx)(_.a,{TransitionComponent:E.a,TransitionProps:{timeout:600},title:e.name,children:Object(O.jsx)(Z.a,{"aria-label":"delete",size:"small",onClick:function(a){return n(a,t.queue,t.id,e.name)},children:Object(O.jsx)(e.icon,{})},"".concat(a))},"".concat(e,"-").concat(a))}))},"$action-".concat(t.id));return c.concat(r)};return Object(O.jsx)(K.a,{component:X.a,sx:{maxHeight:700},children:Object(O.jsxs)(W.a,{sx:{minWidth:700},stickyHeader:!0,"aria-label":"customized table",children:[Object(O.jsx)(Q.a,{children:Object(O.jsx)(V.a,{children:c.map((function(t){return Object(O.jsxs)(tt,{children:[" ",t.toUpperCase()," "]},t)}))})}),Object(O.jsx)(G.a,{children:e.map((function(t,e){return Object(O.jsx)(et,{children:r(t)},"".concat(t.id||t.name,"-").concat(e))}))})]})})}var at=n(125),ct=n.n(at)()("ws://localhost:5000");ct.on("connect",(function(){console.log("connected to socket")}));var rt=ct,ot=n(64),st=n.n(ot),it="http://localhost:5000/api",ut=function(){var t=Object(u.a)(i.a.mark((function t(e){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,st.a.get("".concat(it,"/").concat(e));case 3:return n=t.sent,a=n.data,t.abrupt("return",a);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),lt=function(){var t=Object(u.a)(i.a.mark((function t(e,n){var a,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,st.a.get("".concat(it,"/job/").concat(e,"/").concat(n));case 3:return a=t.sent,c=a.data,t.abrupt("return",c);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}(),dt=function(){var t=Object(u.a)(i.a.mark((function t(e,n){var a,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,st.a.delete("".concat(it,"/job/").concat(e,"/").concat(n));case 3:return a=t.sent,c=a.data,t.abrupt("return",c);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}(),jt=function(){var t=Object(u.a)(i.a.mark((function t(e,n){var a,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,st.a.put("".concat(it,"/job/").concat(e,"/").concat(n));case 3:return a=t.sent,c=a.data,t.abrupt("return",c);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}(),ht=n(129),ft=n.n(ht),bt=n(126),xt=n.n(bt),pt=n(128),Ot=n.n(pt),gt=n(127),vt=n.n(gt),mt=n(131),kt=n.n(mt),St=n(130),wt=n.n(St),yt=n(50),zt=n.n(yt),Ct=n(51),Mt=n.n(Ct),Dt=n(80),Pt=n.n(Dt),Tt=[{status:"active",count:0,icon:function(){return Object(O.jsx)(xt.a,{})},actions:[{name:"info",icon:function(){return Object(O.jsx)(zt.a,{fontSize:"inherit"})}},{name:"retry",icon:function(){return Object(O.jsx)(Pt.a,{fontSize:"inherit"})}},{name:"delete",icon:function(){return Object(O.jsx)(Mt.a,{fontSize:"inherit"})}}]},{status:"pending",count:0,icon:function(){return Object(O.jsx)(vt.a,{})},actions:[{name:"info",icon:function(){return Object(O.jsx)(zt.a,{fontSize:"inherit"})}},{name:"delete",icon:function(){return Object(O.jsx)(Mt.a,{fontSize:"inherit"})}}]},{status:"completed",count:0,icon:function(){return Object(O.jsx)(Ot.a,{})},actions:[{name:"info",icon:function(){return Object(O.jsx)(zt.a,{fontSize:"inherit"})}},{name:"retry",icon:function(){return Object(O.jsx)(Pt.a,{fontSize:"inherit"})}},{name:"delete",icon:function(){return Object(O.jsx)(Mt.a,{fontSize:"inherit"})}}]},{status:"failed",count:0,icon:function(){return Object(O.jsx)(ft.a,{})},actions:[{name:"info",icon:function(){return Object(O.jsx)(zt.a,{fontSize:"inherit"})}},{name:"retry",icon:function(){return Object(O.jsx)(Pt.a,{fontSize:"inherit"})}},{name:"delete",icon:function(){return Object(O.jsx)(Mt.a,{fontSize:"inherit"})}}]},{status:"delayed",count:0,icon:function(){return Object(O.jsx)(wt.a,{})},actions:[{name:"info",icon:function(){return Object(O.jsx)(zt.a,{fontSize:"inherit"})}},{name:"delete",icon:function(){return Object(O.jsx)(Mt.a,{fontSize:"inherit"})}}]},{status:"queues",count:0,icon:function(){return Object(O.jsx)(kt.a,{})}}],Bt=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).getDetails=function(){var t=Object(u.a)(i.a.mark((function t(e){var n,c,r,o,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=a.state.states,a.setState({showProgress:!0}),t.next=5,ut(e);case 5:c=t.sent,r=c.jobs,o=c.count,s=n.map((function(t){return"pending"===t.status?t.count=o.wait:t.count=o[t.status],t})),a.setState({data:[]}),a.setState({data:r.reverse(),states:s,showProgress:!1}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),a.setState({err:t.t0,showProgress:!1});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}(),a.handlecurrentStatus=function(t,e){a.setState({currentStatus:e})},a.closeModal=function(){a.setState({dialog:!1})},a.handleAction=function(){var t=Object(u.a)(i.a.mark((function t(e,n,c){var r,o,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e&&n){t.next=2;break}return t.abrupt("return");case 2:if(t.prev=2,a.setState({showProgress:!0}),"info"!==c){t.next=13;break}if(r={},a.state.dialog||!e||!n){t.next=11;break}return t.next=9,lt(e,n);case 9:r=t.sent,a.setState({dialog:!0,dialogData:r,showProgress:!1});case 11:t.next=27;break;case 13:if("delete"!==c){t.next=21;break}return a.closeModal(),t.next=17,dt(e,n);case 17:o=t.sent,a.setState({snack:!0,snackMessage:o.message,showProgress:!1}),t.next=27;break;case 21:if("retry"!==c){t.next=27;break}return a.closeModal(),t.next=25,jt(e,n);case 25:s=t.sent,a.setState({snack:!0,snackMessage:s.message,snackSeverity:"success",showProgress:!1});case 27:t.next=32;break;case 29:t.prev=29,t.t0=t.catch(2),a.setState({snack:!0,snackMessage:t.t0.message,snackSeverity:"error",showProgress:!1});case 32:case"end":return t.stop()}}),t,null,[[2,29]])})));return function(e,n,a){return t.apply(this,arguments)}}(),a.dialogHandler=function(t,e,n,c){var r=[{label:"YES",onClick:function(){return a.handleAction(e,n,c)}},{label:"NO",onClick:function(){return a.closeModal()}}];"info"===c?(a.setState({dialogButtons:[{label:"cancel",onClick:function(){return a.closeModal()}}],showJson:!0,dialogTitle:"Info"}),a.handleAction(e,n,c)):"delete"===c?a.setState({dialog:!0,dialogData:"Are you sure, you want to delete?",dialogButtons:r,showJson:!1,dialogTitle:"Delete"}):"retry"===c&&a.setState({dialog:!0,dialogData:"Are you sure, you want to retry?",dialogButtons:r,showJson:!1,dialogTitle:"Retry"})},a.closeSnack=function(){return a.setState({snack:!1,snackMessage:""})},a.state={currentStatus:"active",data:[],error:null,states:Tt,dialog:!1,dialogData:null,dialogButtons:[],dialogTitle:"",actions:[],snack:!1,snackMessage:"",snackSeverity:"success",showJson:!1,showProgress:!1},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.getDetails(this.state.currentStatus),rt.on("count",(function(e){t.getDetails(t.state.currentStatus)}))}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.currentStatus;e.currentStatus!==n&&this.getDetails(n)}},{key:"render",value:function(){var t=this.state,e=t.currentStatus,n=t.data,a=t.states,c=t.dialog,r=t.dialogData,o=t.dialogButtons,s=t.dialogTitle,i=t.snack,u=t.snackMessage,l=t.snackSeverity,d=t.showJson,j=t.showProgress,h=a.find((function(t){return t.status===e})).actions;return Object(O.jsxs)(f.a,{sx:{display:"flex"},children:[Object(O.jsx)(g,{title:"Red Bull"}),Object(O.jsx)(z,{states:a,currentStatus:e,handlecurrentStatus:this.handlecurrentStatus}),Object(O.jsxs)(f.a,{component:"main",sx:{flexGrow:1,mt:9,ml:2,mr:1},children:[j&&Object(O.jsx)(q,{}),Object(O.jsx)("h4",{children:e.toUpperCase()}),Object(O.jsx)(nt,{data:n,handleAction:this.dialogHandler,actions:h}),Object(O.jsx)(J,{dialog:c,data:r,closeModal:this.closeModal,dialogButtons:o,showJson:d,dialogTitle:s}),Object(O.jsx)(R,{snack:i,snackMessage:u,snackSeverity:l,closeSnack:this.closeSnack})]})]})}}]),n}(a.Component),At=Bt;var It=function(){return Object(O.jsx)(At,{})},Jt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,295)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(It,{})}),document.getElementById("root")),Jt()}},[[212,1,2]]]);
//# sourceMappingURL=main.23fd5e82.chunk.js.map
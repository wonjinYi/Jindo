(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{113:function(e,n,t){"use strict";t.r(n);var a=t(3),o=t(0),r=t.n(o),c=t(10),i=t.n(c),d=(t(91),t(11)),l=t(17),s=t.n(l),u=t(42),b=t(29),j=t(30),f=t(33),m=t(32),p=t(12),h=t(43),x=t.n(h),O=t(5),g=t(147);function v(){var e=Object(d.a)(["\n    display : flex;\n    "]);return v=function(){return e},e}var k=function(e){Object(f.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(b.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).state={giveModalInfo:function(){var n=e.props,t=n.id,a=n.name,o=n.memo;e.props.setModalInfo(t,a,o)}},e}return Object(j.a)(t,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.memo;return Object(a.jsxs)(C,{className:"Do",children:[Object(a.jsx)(D,{children:n.length<20?n:n.slice(0,20)+"..."}),Object(a.jsx)(w,{variant:"outlined",onClick:this.state.giveModalInfo,children:t.length<30?t:t.slice(0,30)+"..."})]})}}]),t}(r.a.Component),C=p.a.div(v()),D=Object(O.a)({root:{textTransform:"none",margin:"5px",border:"none",padding:"5px",fontWeight:"bold",color:"#4a4a4a",backgroundColor:"#FFD57E","&:hover":{backgroundColor:"#e3bc6b"},"&:active":{backgroundColor:"#e3bc6b"}}})(g.a),w=Object(O.a)({root:{textTransform:"none",margin:"5px",border:"none",padding:"5px",color:"#4a4a4a",backgroundColor:"white","&:hover":{backgroundColor:"#ededed",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#ededed"}}})(g.a),y=t(151),S=t(75),F=t.n(S);function M(){var e=Object(d.a)(["\n  color : red;\n  margin : 0;\n  padding : 0;\n  "]);return M=function(){return e},e}function N(){var e=Object(d.a)(["\n  display : flex;\n  flex-direction : column;\n  justify-contents : center;\n  \n  padding : 10px;\n  border-radius : 5px;\n\n  background : #ffefa0;\n  "]);return N=function(){return e},e}var I=t(66),W=function(e){Object(f.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(b.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).state={name:"",memo:""},e.giveUpdatedFormData=function(){var n=e.state,t=n.name,a=n.memo;t.length>0&&a.length>0&&e.props.updateFormData(t,a,"create")},e}return Object(j.a)(t,[{key:"render",value:function(){var e=this,n=this.state,t=n.name,o=n.memo;return console.log(t.length,o.length),Object(a.jsxs)(z,{className:"DoMaker",children:[Object(a.jsx)(L,{value:t,onChange:function(n){e.setState({name:n.target.value})},id:"input-name",label:"Who",variant:"outlined",margin:"dense",defaultValue:"WHO"}),Object(a.jsx)(A,{children:t.length>I?"\u2191 53 Characters or less":""}),Object(a.jsx)(L,{value:o,onChange:function(n){e.setState({memo:n.target.value})},id:"input-memo",label:"What",variant:"outlined",margin:"dense",defaultValue:"WHAT"}),Object(a.jsx)(A,{children:o.length>10*I?"\u2191 530 Characters or less":""}),Object(a.jsx)(E,{onClick:this.giveUpdatedFormData,variant:"contained",disableElevation:!0,children:Object(a.jsx)(F.a,{})})]})}}]),t}(r.a.Component),L=Object(O.a)({root:{margin:"10px 0 0 0","& label":{color:"#fca652"},"& label.Mui-focused":{color:"#fca652"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#fca652"},"&:hover fieldset":{borderColor:"#fca652"},"&.Mui-focused fieldset":{borderColor:"#fca652"}}}})(y.a),E=Object(O.a)({root:{margin:"10px 0 0 0",boxShadow:"none",textTransform:"none",fontSize:"1.5em",padding:"6px 0",border:"none",lineHeight:1.5,color:"white",backgroundColor:"#fca652","&:hover":{backgroundColor:"#e0944a",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#e0944a"}}})(g.a),z=p.a.div(N()),A=p.a.p(M()),T=t(49),H=t(148),J=t(152),U=t(149),V=t(76),B=t.n(V),Y=t(51),q=t.n(Y),G=t(77),K=t.n(G),P=t(78),Q=t.n(P);function R(){var e=Object(d.a)(["\n  color : red;\n  margin : 0;\n  padding : 0;\n  "]);return R=function(){return e},e}function X(){var e=Object(d.a)(["\n    display : flex;\n    "]);return X=function(){return e},e}function Z(){var e=Object(d.a)(["\n    background : #FFFFFF;\n    color : #4a4a4a;\n    padding : 10px;\n    border-radius : 5px;\n    word-break: break-all;\n    overflow-wrap: break-word; \n    "]);return Z=function(){return e},e}function $(){var e=Object(d.a)(["\n    padding : 10px;\n    \n    text-align : center;\n\n    background : #FFD57E;\n    border-radius : 5px;\n    color : #4a4a4a;\n    font-weight : bold\n    "]);return $=function(){return e},e}function _(){var e=Object(d.a)(["\n    width : 100%;\n    max-width : 100%;\n    \n    display : flex;\n    flex-direction : column;\n    justify-contents : center;\n    align-items : center;\n    "]);return _=function(){return e},e}function ee(){var e=Object(d.a)(["\n    display : flex;\n    flex-direction : column;\n    align-items : flex-end;\n    top : 50%;\n    left : 50%;\n    transform : translate(-50%, -50%);\n\n    min-width : 70%;\n\n    "]);return ee=function(){return e},e}var ne=t(66),te=Object(H.a)((function(e){return{paper:{position:"absolute",maxWidth:"80%",backgroundColor:"rgba(255,255,255,0.8)",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function ae(e){var n=e.modalOpened,t=e.handleClose,r=e.deleteDo,c=e.updateFormData,i=e.id,d=e.name,l=e.memo,s=te(),u=Object(o.useState)(!1),b=Object(T.a)(u,2),j=b[0],f=b[1],m=Object(o.useState)(d),p=Object(T.a)(m,2),h=p[0],x=p[1],O=Object(o.useState)(l),g=Object(T.a)(O,2),v=g[0],k=g[1];Object(o.useEffect)((function(){x(d)}),[d]),Object(o.useEffect)((function(){k(l)}),[l]);var C=Object(a.jsxs)(oe,{className:s.paper,children:[Object(a.jsxs)(re,{children:[Object(a.jsx)(ce,{children:h}),Object(a.jsx)(ie,{children:v})]}),Object(a.jsxs)(de,{children:[Object(a.jsx)(U.a,{onClick:function(){return f(!0)},children:Object(a.jsx)(B.a,{})}),Object(a.jsx)(U.a,{onClick:r,children:Object(a.jsx)(q.a,{})})]})]}),D=Object(a.jsxs)(oe,{className:s.paper,children:[Object(a.jsxs)(re,{children:[Object(a.jsx)(le,{value:h,onChange:function(e){x(e.target.value)},id:"input-name",label:"Who",variant:"outlined",margin:"dense",fullWidth:!0}),Object(a.jsx)(se,{children:h.length>ne?"\u2191 53 Characters or less":""}),Object(a.jsx)(le,{value:v,onChange:function(e){k(e.target.value)},id:"input-memo",label:"What",variant:"outlined",margin:"dense",multiline:!0,fullWidth:!0}),Object(a.jsx)(se,{children:v.length>10*ne?"\u2191 530 Characters or less":""})]}),Object(a.jsxs)(de,{children:[Object(a.jsx)(U.a,{onClick:function(){!function(e,n,t,a,o){a.length>0&&o.length>0&&(n(a,o,"edit",t),e(!1))}(f,c,i,h,v)},children:Object(a.jsx)(K.a,{})}),Object(a.jsx)(U.a,{onClick:function(){f(!1)},children:Object(a.jsx)(Q.a,{})}),Object(a.jsx)(U.a,{onClick:function(){f(!1),r()},children:Object(a.jsx)(q.a,{})})]})]});return Object(a.jsx)("div",{className:"SimpleModal",children:Object(a.jsx)(J.a,{open:n,onClose:function(){f(!1),t()},children:j?D:C})})}var oe=p.a.div(ee()),re=p.a.div(_()),ce=p.a.p($()),ie=p.a.p(Z()),de=p.a.div(X()),le=Object(O.a)({root:{margin:"16px 0","& label":{color:"#fca652"},"& label.Mui-focused":{color:"#fca652"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#fca652"},"&:hover fieldset":{borderColor:"#fca652"},"&.Mui-focused fieldset":{borderColor:"#fca652"}}}})(y.a),se=p.a.p(R()),ue=t(150),be=t(153),je=Object(H.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function fe(){var e=je();return Object(a.jsx)("div",{className:"Loading",children:Object(a.jsx)(be.a,{className:e.backdrop,open:!0,children:Object(a.jsx)(ue.a,{color:"inherit"})})})}var me=t.p+"static/media/jindodog.c390091a.png";function pe(){return Object(a.jsx)("div",{className:"EmptyListNoti",children:Object(a.jsx)("img",{src:me,height:"300",alt:"jindo dog"})})}function he(){var e=Object(d.a)(["\n    font-size : 1em;\n    color : #fca652;\n    "]);return he=function(){return e},e}function xe(){var e=Object(d.a)(["\n    display : flex;\n    flex-direction : column;\n    justify-contents : center;\n    max-width : 50%;\n\n    padding : 10px;\n    margin : 30px 0; \n    border-radius : 5px;\n\n    background : #ffefa0;\n    "]);return xe=function(){return e},e}function Oe(){var e=Object(d.a)(["\n    font-size: 5em;\n    text-align: center;\n\n    padding : 20px;\n    border-radius : 5px;\n    background: #fca652;\n    color: #ac4b1c;\n    "]);return Oe=function(){return e},e}function ge(){var e=Object(d.a)(["\n    display : flex;\n    flex-direction : column;\n    align-items : center;\n    "]);return ge=function(){return e},e}var ve=function(e){Object(f.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(b.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).state={isLoading:!0,formData:{name:"",memo:""},modalData:{modalId:0,modalName:"",modalMemo:"",modalOpened:!1},doList:[]},e.handleOpen=function(n,t,a){e.setState((function(e){return{modalData:{modalId:n,modalName:t,modalMemo:a,modalOpened:!0}}})),console.log(e.state.modalData)},e.handleClose=function(){e.setState((function(e){return{modalData:{modalId:0,modalName:"",modalMemo:"",modalOpened:!1}}}))},e.updateFormData=function(n,t,a,o){e.setState({isLoading:!0}),"create"===a?e.setState((function(){return{formData:{name:n,memo:t}}}),e.createDo):"edit"===a&&e.setState({modalData:{modalId:o,modalName:n,modalMemo:t,modalOpened:!0}},e.editDo)},e.getDo=Object(u.a)(s.a.mark((function n(){var t,a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x.a.get("https://jindoback.wonj.in/data");case 2:t=n.sent,a=t.data.data,console.log(a),e.setState({doList:a,isLoading:!1});case 6:case"end":return n.stop()}}),n)}))),e.createDo=Object(u.a)(s.a.mark((function n(){var t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.state.formData,n.next=3,x.a.post("https://jindoback.wonj.in/create",t);case 3:return n.next=5,e.getDo();case 5:case"end":return n.stop()}}),n)}))),e.editDo=Object(u.a)(s.a.mark((function n(){var t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.state.modalData,console.log(t),n.next=4,x.a.post("https://jindoback.wonj.in/edit",t);case 4:return n.next=6,e.getDo();case 6:case"end":return n.stop()}}),n)}))),e.deleteDo=Object(u.a)(s.a.mark((function n(){var t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.state.modalData.modalId,e.handleClose(),e.setState({isLoading:!0}),n.next=5,x.a.post("https://jindoback.wonj.in/delete",{id:t});case 5:return n.next=7,e.getDo();case 7:case"end":return n.stop()}}),n)}))),e}return Object(j.a)(t,[{key:"componentDidMount",value:function(){this.getDo()}},{key:"render",value:function(){var e=this,n=this.state,t=n.isLoading,o=n.doList,r=n.modalData,c=r.modalId,i=r.modalName,d=r.modalMemo,l=r.modalOpened;return Object(a.jsxs)(ke,{className:"App",children:[Object(a.jsx)(Ce,{className:"title",children:"Jindo"}),Object(a.jsx)(W,{updateFormData:this.updateFormData}),Object(a.jsx)(De,{children:o.length>0?function(){for(var n=[],t=o.length-1;t>=0;t--)n.push(Object(a.jsx)(k,{id:o[t].id,setModalInfo:e.handleOpen,name:o[t].name,memo:o[t].memo},t));return n}():Object(a.jsx)(pe,{})}),Object(a.jsx)(ae,{modalOpened:l,handleClose:this.handleClose,deleteDo:this.deleteDo,updateFormData:this.updateFormData,id:c,name:i,memo:d}),Object(a.jsx)(we,{children:"Wonjin Yi"}),t?Object(a.jsx)(fe,{}):""]})}}]),t}(r.a.Component),ke=p.a.div(ge()),Ce=p.a.h1(Oe()),De=p.a.div(xe()),we=p.a.p(he());i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(ve,{})}),document.getElementById("root"))},91:function(e,n,t){}},[[113,1,2]]]);
//# sourceMappingURL=main.835df204.chunk.js.map
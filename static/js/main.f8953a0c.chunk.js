(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{138:function(e,n,t){},235:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t(0),o=t.n(r),c=t(12),i=t.n(c),d=(t(138),t(10)),s=t(17),l=t.n(s),u=t(26),b=t(42),j=t(43),f=t(48),p=t(47),h=t(11),x=t(37),m=t.n(x),O=t(5),v=t(279),g=t(274),k=t(108),y=t.n(k);function w(){var e=Object(d.a)(["\n  color : red;\n  margin : 0;\n  padding : 0;\n  "]);return w=function(){return e},e}function C(){var e=Object(d.a)(["\n  display : flex;\n  flex-direction : column;\n  justify-contents : center;\n  \n  padding : 0 10px 10px 10px;\n  border-radius : 5px;\n\n  background : #ffefa0;\n  "]);return C=function(){return e},e}var D=t(93),I=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(){var e;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={name:"",memo:""},e.giveUpdatedFormData=function(){var n=e.state,t=n.name,a=n.memo,r=t.length>0&&t.length<=D,o=a.length>0&&a.length<=10*D;(r||"private"===e.props.boardType)&&o&&e.props.updateFormData(t,a,"create")},e}return Object(j.a)(t,[{key:"render",value:function(){var e=this,n=this.state,t=n.name,r=n.memo,o="private"===this.props.boardType;return Object(a.jsxs)(F,{className:"DoMaker",children:[Object(a.jsx)(S,{disabled:o,value:t,onChange:function(n){e.setState({name:n.target.value})},id:"input-name",label:"Who",variant:"outlined",margin:"dense"}),Object(a.jsx)(L,{children:t.length>D?"\u2191 53 Characters or less":""}),Object(a.jsx)(S,{value:r,onChange:function(n){e.setState({memo:n.target.value})},id:"input-memo",label:"What",variant:"outlined",margin:"dense"}),Object(a.jsx)(L,{children:r.length>10*D?"\u2191 530 Characters or less":""}),Object(a.jsx)(M,{onClick:this.giveUpdatedFormData,variant:"contained",disableElevation:!0,children:Object(a.jsx)(y.a,{})})]})}}]),t}(o.a.Component),S=Object(O.a)({root:{margin:"10px 0 0 0","& label":{color:"#fca652"},"& label.Mui-focused":{color:"#fca652"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#fca652"},"&:hover fieldset":{borderColor:"#fca652"},"&.Mui-focused fieldset":{borderColor:"#fca652"}}}})(v.a),M=Object(O.a)({root:{margin:"10px 0 0 0",boxShadow:"none",textTransform:"none",fontSize:"1.5em",padding:"6px 0",border:"none",lineHeight:1.5,color:"white",backgroundColor:"#fca652","&:hover":{backgroundColor:"#e0944a",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#e0944a"}}})(g.a),F=h.a.div(C()),L=h.a.p(w());function T(){var e=Object(d.a)(["\n    display : flex;\n    "]);return T=function(){return e},e}var A=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(){var e;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={giveModalInfo:function(){var n=e.props.id;e.props.setModalInfo(n)}},e}return Object(j.a)(t,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.memo;return Object(a.jsxs)(N,{className:"Do",children:[Object(a.jsx)(B,{children:n.length<20?n:n.slice(0,20)+"..."}),Object(a.jsx)(W,{variant:"outlined",onClick:this.state.giveModalInfo,children:t.length<30?t:t.slice(0,30)+"..."})]})}}]),t}(o.a.Component),N=h.a.div(T()),B=Object(O.a)({root:{textTransform:"none",margin:"5px",border:"none",padding:"5px",fontWeight:"bold",color:"#4a4a4a",backgroundColor:"#FFD57E","&:hover":{backgroundColor:"#e3bc6b"},"&:active":{backgroundColor:"#e3bc6b"}}})(g.a),W=Object(O.a)({root:{textTransform:"none",margin:"5px",border:"none",padding:"5px",color:"#4a4a4a",backgroundColor:"white","&:hover":{backgroundColor:"#ededed",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#ededed"}}})(g.a),E=t.p+"static/media/jindodog.c390091a.png";function z(){return Object(a.jsx)("div",{className:"EmptyListNoti",children:Object(a.jsx)("img",{src:E,height:"300",alt:"jindo dog"})})}function P(){var e=Object(d.a)(["\n    display : flex;\n    flex-direction : column;\n    justify-contents : center;\n    "]);return P=function(){return e},e}function J(e){var n=e.setModalInfo,t=e.doList;return Object(a.jsx)(U,{children:t.length>0?function(){for(var e=[],r=t.length-1;r>=0;r--)e.push(Object(a.jsx)(A,{id:t[r].id,setModalInfo:n,name:t[r].name,memo:t[r].memo},r));return e}():Object(a.jsx)(z,{})})}var U=h.a.div(P());function G(e){var n=e.setModalInfo,t=e.doList;return Object(a.jsx)("div",{className:"PublicBoard",children:Object(a.jsx)(J,{setModalInfo:n,doList:t})})}var H=t(25),R=t(282),Y=t(275),q=t(116),K=t.n(q);function Q(){var e=Object(d.a)(["\n    display : flex;\n    flex-direction : column;\n    align-items : flex-end;\n    "]);return Q=function(){return e},e}function V(e){var n=e.setModalInfo,t=e.doList,o=Object(r.useState)(0),c=Object(H.a)(o,2),i=c[0],d=c[1];return Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X();case 2:n=e.sent,d(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i]),Object(a.jsx)("div",{className:"PrivateBoard",children:!0===i?Object(a.jsxs)($,{children:[Object(a.jsx)(R.a,{title:"Logout",placement:"left",children:Object(a.jsx)(Y.a,{onClick:function(){!function(e){m.a.get("https://jindoback.wonj.in/logout",{withCredentials:!0}),e(!1)}(d)},children:Object(a.jsx)(K.a,{})})}),Object(a.jsx)(J,{setModalInfo:n,doList:t})]}):!1===i?Object(a.jsx)($,{children:Object(a.jsx)("a",{href:"https://jindoback.wonj.in/login/daldalso",children:Object(a.jsx)("img",{src:"https://daldal.so/media/images/oauth-button.png",alt:"daldalso-Login"})})}):Object(a.jsx)(z,{})})}function X(){return Z.apply(this,arguments)}function Z(){return(Z=Object(u.a)(l.a.mark((function e(){var n,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://jindoback.wonj.in/islogin",{withCredentials:!0});case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var $=h.a.div(Q()),_=t(117),ee=t.n(_),ne=t.p+"static/media/info.5f36deab.md";function te(){var e=Object(d.a)(["\n\n    "]);return te=function(){return e},e}function ae(){var e=Object(r.useState)(""),n=Object(H.a)(e,2),t=n[0],o=n[1];return Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ne).then((function(e){return e.text()}));case 2:n=e.sent,o(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(a.jsx)(re,{className:"InfoBoard",children:Object(a.jsx)(ee.a,{children:t})})}var re=h.a.div(te());function oe(){var e=Object(d.a)(["\n    padding : 10px;\n    margin : 30px 0; \n    border-radius : 5px;\n\n    background : #ffefa0;\n    "]);return oe=function(){return e},e}function ce(e){var n=e.setModalInfo,t=e.doList,r=e.boardType;return Object(a.jsx)(ie,{className:"Board",children:"public"===r?Object(a.jsx)(G,{setModalInfo:n,doList:t}):"private"===r?Object(a.jsx)(V,{setModalInfo:n,doList:t}):"info"===r?Object(a.jsx)(ae,{}):void 0})}var ie=h.a.div(oe()),de=t(276),se=t(281),le=t(118),ue=t.n(le),be=t(77),je=t.n(be),fe=t(119),pe=t.n(fe),he=t(120),xe=t.n(he);function me(){var e=Object(d.a)(["\n  color : red;\n  margin : 0;\n  padding : 0;\n  "]);return me=function(){return e},e}function Oe(){var e=Object(d.a)(["\n    display : flex;\n    "]);return Oe=function(){return e},e}function ve(){var e=Object(d.a)(["\n    background : #FFFFFF;\n    color : #4a4a4a;\n    padding : 10px;\n    border-radius : 5px;\n    word-break: break-all;\n    overflow-wrap: break-word; \n    "]);return ve=function(){return e},e}function ge(){var e=Object(d.a)(["\n    padding : 10px;\n    \n    text-align : center;\n\n    background : #FFD57E;\n    border-radius : 5px;\n    color : #4a4a4a;\n    font-weight : bold\n    "]);return ge=function(){return e},e}function ke(){var e=Object(d.a)(["\n    width : 100%;\n    max-width : 100%;\n    \n    display : flex;\n    flex-direction : column;\n    justify-contents : center;\n    align-items : center;\n    "]);return ke=function(){return e},e}function ye(){var e=Object(d.a)(["\n    display : flex;\n    flex-direction : column;\n    align-items : flex-end;\n    top : 50%;\n    left : 50%;\n    transform : translate(-50%, -50%);\n\n    min-width : 70%;\n    "]);return ye=function(){return e},e}var we=t(93),Ce=Object(de.a)((function(e){return{paper:{position:"absolute",maxWidth:"80%",backgroundColor:"rgba(255,255,255,0.8)",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function De(e){var n=e.modalOpened,t=e.handleClose,o=e.deleteDo,c=e.updateFormData,i=e.boardType,d=e.id,s=e.name,l=e.memo,u=e.updatedAt,b=Ce(),j=Object(r.useState)(!1),f=Object(H.a)(j,2),p=f[0],h=f[1],x=Object(r.useState)(s),m=Object(H.a)(x,2),O=m[0],v=m[1],g=Object(r.useState)(l),k=Object(H.a)(g,2),y=k[0],w=k[1],C=u.substring(0,10)+" "+u.substring(11,16),D="private"===i,I=Object(a.jsxs)(Ie,{className:b.paper,children:[Object(a.jsxs)(Se,{children:[Object(a.jsx)("p",{children:C}),Object(a.jsx)(Me,{children:s}),Object(a.jsx)(Fe,{children:l})]}),Object(a.jsxs)(Le,{children:[Object(a.jsx)(Y.a,{onClick:function(){h(!0)},children:Object(a.jsx)(ue.a,{})}),Object(a.jsx)(Y.a,{onClick:o,children:Object(a.jsx)(je.a,{})})]})]}),S=Object(a.jsxs)(Ie,{className:b.paper,children:[Object(a.jsxs)(Se,{children:[Object(a.jsx)(Te,{disabled:D,value:O,onChange:function(e){v(e.target.value)},id:"input-name",label:"Who",variant:"outlined",margin:"dense",fullWidth:!0}),Object(a.jsx)(Ae,{children:O.length>we?"\u2191 53 Characters or less":""}),Object(a.jsx)(Te,{value:y,onChange:function(e){w(e.target.value)},id:"input-memo",label:"What",variant:"outlined",margin:"dense",multiline:!0,fullWidth:!0}),Object(a.jsx)(Ae,{children:y.length>10*we?"\u2191 530 Characters or less":""})]}),Object(a.jsxs)(Le,{children:[Object(a.jsx)(Y.a,{onClick:function(){!function(e,n,t,a,r){var o=a.length>0&&a.length<=we,c=r.length>0&&r.length<=10*we;o&&c&&(n(a,r,"edit",t),e(!1))}(h,c,d,O,y)},children:Object(a.jsx)(pe.a,{})}),Object(a.jsx)(Y.a,{onClick:function(){h(!1)},children:Object(a.jsx)(xe.a,{})}),Object(a.jsx)(Y.a,{onClick:function(){h(!1),o()},children:Object(a.jsx)(je.a,{})})]})]});return Object(a.jsx)("div",{className:"SimpleModal",children:Object(a.jsx)(se.a,{open:n,onClose:function(){h(!1),t()},children:p?S:I})})}var Ie=h.a.div(ye()),Se=h.a.div(ke()),Me=h.a.p(ge()),Fe=h.a.p(ve()),Le=h.a.div(Oe()),Te=Object(O.a)({root:{margin:"16px 0","& label":{color:"#fca652"},"& label.Mui-focused":{color:"#fca652"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#fca652"},"&:hover fieldset":{borderColor:"#fca652"},"&.Mui-focused fieldset":{borderColor:"#fca652"}}}})(v.a),Ae=h.a.p(me()),Ne=t(280),Be=t(277),We=t(121),Ee=t.n(We),ze=t(122),Pe=t.n(ze),Je=t(123),Ue=t.n(Je);function Ge(){var e=Object(d.a)(["\n  margin-bottom : 30px;\n  "]);return Ge=function(){return e},e}var He=["public","private","info"];function Re(e){var n=e.updateBoardType,t=o.a.useState(function(){var e=localStorage.getItem("boardType");return e?parseInt(e):0}()),c=Object(H.a)(t,2),i=c[0],d=c[1];return Object(r.useEffect)((function(){n(He[i])}),[i,n]),Object(a.jsx)(Ye,{children:Object(a.jsxs)(qe,{value:i,onChange:function(e,n){d(n),localStorage.setItem("boardType",n)},variant:"fullWidth","aria-label":"board selector",children:[Object(a.jsx)(Ke,{icon:Object(a.jsx)(Ee.a,{}),label:"Public"}),Object(a.jsx)(Ke,{icon:Object(a.jsx)(Pe.a,{}),label:"Private"}),Object(a.jsx)(Ke,{icon:Object(a.jsx)(Ue.a,{}),label:"Info"})]})})}var Ye=h.a.div(Ge()),qe=Object(O.a)({root:{flexGrow:1,maxWidth:500,backgroundColor:"#FFEFA0",borderRadius:"10px"},indicator:{backgroundColor:"#FCA652"}})(Ne.a),Ke=Object(O.a)({root:{color:"#4A4A4A",backgroundColor:"#FFEFA0",transition:"background-color 1s"},disabled:{},selected:{backgroundColor:"#FCA652"}})(Be.a),Qe=t(278),Ve=t(283),Xe=Object(de.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function Ze(){var e=Xe();return Object(a.jsx)("div",{className:"Loading",children:Object(a.jsx)(Ve.a,{className:e.backdrop,open:!0,children:Object(a.jsx)(Qe.a,{color:"inherit"})})})}function $e(){var e=Object(d.a)(["\n    font-size : 1em;\n    color : #fca652;\n    "]);return $e=function(){return e},e}function _e(){var e=Object(d.a)(["\n    font-size: 5em;\n    text-align: center;\n\n    padding : 20px;\n    border-radius : 5px;\n    background: #fca652;\n    color: #ac4b1c;\n    "]);return _e=function(){return e},e}function en(){var e=Object(d.a)(["\n    display : flex;\n    flex-direction : column;\n    align-items : center;\n    "]);return en=function(){return e},e}var nn=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(){var e;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={isLoading:!0,formData:{name:"",memo:""},modalData:{modalId:0,modalOpened:!1},boardType:null,doList:[]},e.openModal=function(n){e.setState({modalData:{modalId:n,modalOpened:!0}})},e.closeModal=function(){e.setState({modalData:{modalId:0,modalOpened:!1}})},e.updateFormData=function(n,t,a,r){e.setState({isLoading:!0}),"create"===a?e.setState((function(){return{formData:{name:n,memo:t}}}),e.createDo):"edit"===a&&e.setState({modalData:{modalId:r,modalOpened:!0}},(function(){return e.editDo(r,n,t)}))},e.updateBoardType=function(n){e.setState({boardType:n}),e.setState({isLoading:!0},e.getDo)},e.findDoById=function(n){var t=e.state.doList,a=t.findIndex((function(e){return e.id===n}));if(-1!==a)return t[a];return{id:"error",name:"error",memo:"error",updatedAt:"error"}},e.getDo=Object(u.a)(l.a.mark((function n(){var t,a,r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!==(t=e.state.boardType)){n.next=3;break}return n.abrupt("return",0);case 3:return n.next=5,m.a.get("https://jindoback.wonj.in/".concat(t,"/read"),{withCredentials:!0});case 5:if(a=n.sent,"error"!==(r=a.data)){n.next=10;break}return e.setState({isLoading:!1}),n.abrupt("return",0);case 10:e.setState({doList:r,isLoading:!1});case 11:case"end":return n.stop()}}),n)}))),e.createDo=Object(u.a)(l.a.mark((function n(){var t,a,r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.state,a=t.formData,r=t.boardType,n.next=3,m.a.post("https://jindoback.wonj.in/".concat(r,"/create"),a,{withCredentials:!0});case 3:return n.next=5,e.getDo();case 5:case"end":return n.stop()}}),n)}))),e.editDo=function(){var n=Object(u.a)(l.a.mark((function n(t,a,r){var o,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.state.boardType,c={id:t,name:a,memo:r},n.next=4,m.a.post("https://jindoback.wonj.in/".concat(o,"/edit"),c,{withCredentials:!0});case 4:return n.next=6,e.getDo();case 6:case"end":return n.stop()}}),n)})));return function(e,t,a){return n.apply(this,arguments)}}(),e.deleteDo=Object(u.a)(l.a.mark((function n(){var t,a,r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.state,a=t.modalData.modalId,r=t.boardType,e.closeModal(),e.setState({isLoading:!0}),n.next=5,m.a.post("https://jindoback.wonj.in/".concat(r,"/delete"),{id:a},{withCredentials:!0});case 5:return n.next=7,e.getDo();case 7:case"end":return n.stop()}}),n)}))),e}return Object(j.a)(t,[{key:"componentDidMount",value:function(){this.getDo()}},{key:"render",value:function(){var e=this,n=this.state,t=n.isLoading,r=n.doList,o=n.boardType,c=n.modalData,i=c.modalId,d=c.modalOpened;return Object(a.jsxs)(tn,{className:"App",children:[Object(a.jsx)(an,{className:"title",children:"Jindo"}),Object(a.jsx)(Re,{updateBoardType:this.updateBoardType}),Object(a.jsx)(I,{updateFormData:this.updateFormData,boardType:o}),Object(a.jsx)(ce,{setModalInfo:this.openModal,doList:r,boardType:o}),function(){if(d){var n=e.findDoById(i);return Object(a.jsx)(De,{modalOpened:d,handleClose:e.closeModal,deleteDo:e.deleteDo,updateFormData:e.updateFormData,boardType:o,id:n.id,name:n.name,memo:n.memo,updatedAt:n.updatedAt})}}(),Object(a.jsx)(rn,{children:"Wonjin Yi"}),t?Object(a.jsx)(Ze,{}):""]})}}]),t}(o.a.Component),tn=h.a.div(en()),an=h.a.h1(_e()),rn=h.a.p($e());i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(nn,{})}),document.getElementById("root"))}},[[235,1,2]]]);
//# sourceMappingURL=main.f8953a0c.chunk.js.map
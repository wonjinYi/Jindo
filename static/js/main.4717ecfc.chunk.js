(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{120:function(e,n,t){"use strict";t.r(n);var a=t(2),o=t(0),r=t.n(o),c=t(10),i=t.n(c),d=(t(98),t(12)),s=t(21),l=t.n(s),u=t(47),b=t(31),j=t(32),f=t(37),p=t(36),m=t(11),h=t(41),x=t.n(h),O=t(5),g=t(161),v=t(156),k=t(73),C=t.n(k);function D(){var e=Object(d.a)(["\n  color : red;\n  margin : 0;\n  padding : 0;\n  "]);return D=function(){return e},e}function w(){var e=Object(d.a)(["\n  display : flex;\n  flex-direction : column;\n  justify-contents : center;\n  \n  padding : 0 10px 10px 10px;\n  border-radius : 5px;\n\n  background : #ffefa0;\n  "]);return w=function(){return e},e}var y=t(71),I=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(){var e;Object(b.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).state={name:"",memo:""},e.giveUpdatedFormData=function(){var n=e.state,t=n.name,a=n.memo,o=t.length>0&&t.length<=y,r=a.length>0&&a.length<=10*y;o&&r&&e.props.updateFormData(t,a,"create")},e}return Object(j.a)(t,[{key:"render",value:function(){var e=this,n=this.state,t=n.name,o=n.memo;return Object(a.jsxs)(S,{className:"DoMaker",children:[Object(a.jsx)(F,{value:t,onChange:function(n){e.setState({name:n.target.value})},id:"input-name",label:"Who",variant:"outlined",margin:"dense",defaultValue:"WHO"}),Object(a.jsx)(L,{children:t.length>y?"\u2191 53 Characters or less":""}),Object(a.jsx)(F,{value:o,onChange:function(n){e.setState({memo:n.target.value})},id:"input-memo",label:"What",variant:"outlined",margin:"dense",defaultValue:"WHAT"}),Object(a.jsx)(L,{children:o.length>10*y?"\u2191 530 Characters or less":""}),Object(a.jsx)(M,{onClick:this.giveUpdatedFormData,variant:"contained",disableElevation:!0,children:Object(a.jsx)(C.a,{})})]})}}]),t}(r.a.Component),F=Object(O.a)({root:{margin:"10px 0 0 0","& label":{color:"#fca652"},"& label.Mui-focused":{color:"#fca652"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#fca652"},"&:hover fieldset":{borderColor:"#fca652"},"&.Mui-focused fieldset":{borderColor:"#fca652"}}}})(g.a),M=Object(O.a)({root:{margin:"10px 0 0 0",boxShadow:"none",textTransform:"none",fontSize:"1.5em",padding:"6px 0",border:"none",lineHeight:1.5,color:"white",backgroundColor:"#fca652","&:hover":{backgroundColor:"#e0944a",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#e0944a"}}})(v.a),S=m.a.div(w()),L=m.a.p(D());function A(){var e=Object(d.a)(["\n    display : flex;\n    "]);return A=function(){return e},e}var N=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(){var e;Object(b.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).state={giveModalInfo:function(){var n=e.props.id;e.props.setModalInfo(n)}},e}return Object(j.a)(t,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.memo;return Object(a.jsxs)(T,{className:"Do",children:[Object(a.jsx)(W,{children:n.length<20?n:n.slice(0,20)+"..."}),Object(a.jsx)(B,{variant:"outlined",onClick:this.state.giveModalInfo,children:t.length<30?t:t.slice(0,30)+"..."})]})}}]),t}(r.a.Component),T=m.a.div(A()),W=Object(O.a)({root:{textTransform:"none",margin:"5px",border:"none",padding:"5px",fontWeight:"bold",color:"#4a4a4a",backgroundColor:"#FFD57E","&:hover":{backgroundColor:"#e3bc6b"},"&:active":{backgroundColor:"#e3bc6b"}}})(v.a),B=Object(O.a)({root:{textTransform:"none",margin:"5px",border:"none",padding:"5px",color:"#4a4a4a",backgroundColor:"white","&:hover":{backgroundColor:"#ededed",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#ededed"}}})(v.a),E=t.p+"static/media/jindodog.c390091a.png";function z(){return Object(a.jsx)("div",{className:"EmptyListNoti",children:Object(a.jsx)("img",{src:E,height:"300",alt:"jindo dog"})})}function P(){var e=Object(d.a)(["\n    display : flex;\n    flex-direction : column;\n    justify-contents : center;\n    "]);return P=function(){return e},e}function H(e){var n=e.setModalInfo,t=e.doList;return Object(a.jsx)(J,{children:t.length>0?function(){for(var e=[],o=t.length-1;o>=0;o--)e.push(Object(a.jsx)(N,{id:t[o].id,setModalInfo:n,name:t[o].name,memo:t[o].memo},o));return e}():Object(a.jsx)(z,{})})}var J=m.a.div(P());function R(e){var n=e.setModalInfo,t=e.doList;return Object(a.jsx)("div",{className:"PublicBoard",children:Object(a.jsx)(H,{setModalInfo:n,doList:t})})}function U(e){var n=e.setModalInfo,t=e.doList,o=e.sessionID;return Object(a.jsx)("div",{className:"PublicBoard",children:null!=o?Object(a.jsx)(H,{setModalInfo:n,doList:t}):Object(a.jsx)("a",{href:"https://jindoback.wonj.in/login/daldalso",target:"_blank",children:Object(a.jsx)("img",{src:"https://daldal.so/media/images/oauth-button.png"})})})}function V(){return Object(a.jsx)("div",{className:"InfoBoard",children:"INFO BOARD"})}function G(){var e=Object(d.a)(["\n    padding : 10px;\n    margin : 30px 0; \n    border-radius : 5px;\n\n    background : #ffefa0;\n    "]);return G=function(){return e},e}function Y(e){var n=e.setModalInfo,t=e.doList,o=e.boardType,r=e.sessionID;return Object(a.jsx)(_,{className:"Board",children:"public"==o?Object(a.jsx)(R,{setModalInfo:n,doList:t}):"private"==o?Object(a.jsx)(U,{setModalInfo:n,doList:t,sessionID:r}):"info"==o?Object(a.jsx)(V,{}):void 0})}var _=m.a.div(G()),q=t(40),K=t(157),Q=t(163),X=t(158),Z=t(80),$=t.n(Z),ee=t(55),ne=t.n(ee),te=t(81),ae=t.n(te),oe=t(82),re=t.n(oe);function ce(){var e=Object(d.a)(["\n  color : red;\n  margin : 0;\n  padding : 0;\n  "]);return ce=function(){return e},e}function ie(){var e=Object(d.a)(["\n    display : flex;\n    "]);return ie=function(){return e},e}function de(){var e=Object(d.a)(["\n    background : #FFFFFF;\n    color : #4a4a4a;\n    padding : 10px;\n    border-radius : 5px;\n    word-break: break-all;\n    overflow-wrap: break-word; \n    "]);return de=function(){return e},e}function se(){var e=Object(d.a)(["\n    padding : 10px;\n    \n    text-align : center;\n\n    background : #FFD57E;\n    border-radius : 5px;\n    color : #4a4a4a;\n    font-weight : bold\n    "]);return se=function(){return e},e}function le(){var e=Object(d.a)(["\n    width : 100%;\n    max-width : 100%;\n    \n    display : flex;\n    flex-direction : column;\n    justify-contents : center;\n    align-items : center;\n    "]);return le=function(){return e},e}function ue(){var e=Object(d.a)(["\n    display : flex;\n    flex-direction : column;\n    align-items : flex-end;\n    top : 50%;\n    left : 50%;\n    transform : translate(-50%, -50%);\n\n    min-width : 70%;\n\n    "]);return ue=function(){return e},e}var be=t(71),je=Object(K.a)((function(e){return{paper:{position:"absolute",maxWidth:"80%",backgroundColor:"rgba(255,255,255,0.8)",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function fe(e){var n=e.modalOpened,t=e.handleClose,r=e.deleteDo,c=e.updateFormData,i=e.id,d=e.name,s=e.memo,l=e.updatedAt,u=je(),b=Object(o.useState)(!1),j=Object(q.a)(b,2),f=j[0],p=j[1],m=Object(o.useState)(d),h=Object(q.a)(m,2),x=h[0],O=h[1],g=Object(o.useState)(s),v=Object(q.a)(g,2),k=v[0],C=v[1];Object(o.useEffect)((function(){O(d)}),[d]),Object(o.useEffect)((function(){C(s)}),[s]);var D=l.substring(0,10)+" "+l.substring(11,16),w=Object(a.jsxs)(pe,{className:u.paper,children:[Object(a.jsxs)(me,{children:[Object(a.jsx)("p",{children:D}),Object(a.jsx)(he,{children:x}),Object(a.jsx)(xe,{children:k})]}),Object(a.jsxs)(Oe,{children:[Object(a.jsx)(X.a,{onClick:function(){return p(!0)},children:Object(a.jsx)($.a,{})}),Object(a.jsx)(X.a,{onClick:r,children:Object(a.jsx)(ne.a,{})})]})]}),y=Object(a.jsxs)(pe,{className:u.paper,children:[Object(a.jsxs)(me,{children:[Object(a.jsx)(ge,{value:x,onChange:function(e){O(e.target.value)},id:"input-name",label:"Who",variant:"outlined",margin:"dense",fullWidth:!0}),Object(a.jsx)(ve,{children:x.length>be?"\u2191 53 Characters or less":""}),Object(a.jsx)(ge,{value:k,onChange:function(e){C(e.target.value)},id:"input-memo",label:"What",variant:"outlined",margin:"dense",multiline:!0,fullWidth:!0}),Object(a.jsx)(ve,{children:k.length>10*be?"\u2191 530 Characters or less":""})]}),Object(a.jsxs)(Oe,{children:[Object(a.jsx)(X.a,{onClick:function(){!function(e,n,t,a,o){var r=a.length>0&&a.length<=be,c=o.length>0&&o.length<=10*be;r&&c&&(n(a,o,"edit",t),e(!1))}(p,c,i,x,k)},children:Object(a.jsx)(ae.a,{})}),Object(a.jsx)(X.a,{onClick:function(){p(!1)},children:Object(a.jsx)(re.a,{})}),Object(a.jsx)(X.a,{onClick:function(){p(!1),r()},children:Object(a.jsx)(ne.a,{})})]})]});return Object(a.jsx)("div",{className:"SimpleModal",children:Object(a.jsx)(Q.a,{open:n,onClose:function(){p(!1),t()},children:f?y:w})})}var pe=m.a.div(ue()),me=m.a.div(le()),he=m.a.p(se()),xe=m.a.p(de()),Oe=m.a.div(ie()),ge=Object(O.a)({root:{margin:"16px 0","& label":{color:"#fca652"},"& label.Mui-focused":{color:"#fca652"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#fca652"},"&:hover fieldset":{borderColor:"#fca652"},"&.Mui-focused fieldset":{borderColor:"#fca652"}}}})(g.a),ve=m.a.p(ce()),ke=t(162),Ce=t(159),De=t(83),we=t.n(De),ye=t(84),Ie=t.n(ye),Fe=t(85),Me=t.n(Fe);function Se(){var e=Object(d.a)(["\n  margin-bottom : 30px;\n  \n  "]);return Se=function(){return e},e}function Le(e){var n=e.updateBoardType,t=r.a.useState(0),o=Object(q.a)(t,2),c=o[0],i=o[1],d=["public","private","info"];return Object(a.jsx)(Ae,{children:Object(a.jsxs)(Ne,{value:c,onChange:function(e,t){i(t),n(d[t])},variant:"fullWidth","aria-label":"icon label tabs example",children:[Object(a.jsx)(Te,{icon:Object(a.jsx)(we.a,{}),label:"Public"}),Object(a.jsx)(Te,{icon:Object(a.jsx)(Ie.a,{}),label:"Private"}),Object(a.jsx)(Te,{icon:Object(a.jsx)(Me.a,{}),label:"Info"})]})})}var Ae=m.a.div(Se()),Ne=Object(O.a)({root:{flexGrow:1,maxWidth:500,backgroundColor:"#FFEFA0",borderRadius:"10px"},indicator:{backgroundColor:"#FCA652"}})(ke.a),Te=Object(O.a)({root:{color:"#4A4A4A",backgroundColor:"#FFEFA0",transition:"background-color 1s"},disabled:{},selected:{backgroundColor:"#FCA652"}})(Ce.a),We=t(160),Be=t(164),Ee=Object(K.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function ze(){var e=Ee();return Object(a.jsx)("div",{className:"Loading",children:Object(a.jsx)(Be.a,{className:e.backdrop,open:!0,children:Object(a.jsx)(We.a,{color:"inherit"})})})}function Pe(){var e=Object(d.a)(["\n    font-size : 1em;\n    color : #fca652;\n    "]);return Pe=function(){return e},e}function He(){var e=Object(d.a)(["\n    font-size: 5em;\n    text-align: center;\n\n    padding : 20px;\n    border-radius : 5px;\n    background: #fca652;\n    color: #ac4b1c;\n    "]);return He=function(){return e},e}function Je(){var e=Object(d.a)(["\n    display : flex;\n    flex-direction : column;\n    align-items : center;\n    "]);return Je=function(){return e},e}var Re=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(){var e;Object(b.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).state={isLoading:!0,formData:{name:"",memo:""},modalData:{modalId:0,modalOpened:!1},boardType:"public",doList:[],sessionID:null},e.openModal=function(n){e.setState({modalData:{modalId:n,modalOpened:!0}})},e.closeModal=function(){e.setState({modalData:{modalId:0,modalOpened:!1}})},e.updateFormData=function(n,t,a,o){e.setState({isLoading:!0}),"create"===a?e.setState((function(){return{formData:{name:n,memo:t}}}),e.createDo):"edit"===a&&e.setState({modalData:{modalId:o,modalOpened:!0}},(function(){return e.editDo(o,n,t)}))},e.updateBoardType=function(n){e.setState({boardType:n}),console.log("boardtype : ",n),e.setState({isLoading:!0}),e.getDo()},e.findDoById=function(n){var t=e.state.doList,a=t.findIndex((function(e){return e.id==n}));if(-1!=a)return t[a];return{id:"error",name:"error",memo:"error",updatedAt:"error"}},e.getDo=Object(u.a)(l.a.mark((function n(){var t,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.state.boardType,n.next=3,x.a.get("https://jindoback.wonj.in/public/data",{withCredentials:!0});case 3:return t=n.sent,a=t.data,console.log(a),n.next=8,x.a.post("https://jindoback.wonj.in/sessiontest",{withCredentials:!0});case 8:e.setState({doList:a,isLoading:!1});case 9:case"end":return n.stop()}}),n)}))),e.createDo=Object(u.a)(l.a.mark((function n(){var t;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.state.formData,n.next=3,x.a.post("https://jindoback.wonj.in/public/create",t);case 3:return n.next=5,e.getDo();case 5:case"end":return n.stop()}}),n)}))),e.editDo=function(){var n=Object(u.a)(l.a.mark((function n(t,a,o){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={id:t,name:a,memo:o},n.next=3,x.a.post("https://jindoback.wonj.in/public/edit",r);case 3:return n.next=5,e.getDo();case 5:case"end":return n.stop()}}),n)})));return function(e,t,a){return n.apply(this,arguments)}}(),e.deleteDo=Object(u.a)(l.a.mark((function n(){var t;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.state.modalData.modalId,e.closeModal(),e.setState({isLoading:!0}),n.next=5,x.a.post("https://jindoback.wonj.in/public/delete",{id:t});case 5:return n.next=7,e.getDo();case 7:case"end":return n.stop()}}),n)}))),e}return Object(j.a)(t,[{key:"componentDidMount",value:function(){this.getDo()}},{key:"render",value:function(){var e=this.state,n=e.isLoading,t=e.doList,o=e.boardType,r=e.sessionID,c=e.modalData,i=c.modalId,d=c.modalOpened,s=this.findDoById(i);return Object(a.jsxs)(Ue,{className:"App",children:[Object(a.jsx)(Ve,{className:"title",children:"Jindo"}),Object(a.jsx)(Le,{updateBoardType:this.updateBoardType}),Object(a.jsx)(I,{updateFormData:this.updateFormData}),Object(a.jsx)(Y,{setModalInfo:this.openModal,doList:t,boardType:o,sessionID:r}),Object(a.jsx)(fe,{modalOpened:d,handleClose:this.closeModal,deleteDo:this.deleteDo,updateFormData:this.updateFormData,id:s.id,name:s.name,memo:s.memo,updatedAt:s.updatedAt}),Object(a.jsx)(Ge,{children:"Wonjin Yi"}),n?Object(a.jsx)(ze,{}):""]})}}]),t}(r.a.Component),Ue=m.a.div(Je()),Ve=m.a.h1(He()),Ge=m.a.p(Pe());i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(Re,{})}),document.getElementById("root"))},98:function(e,n,t){}},[[120,1,2]]]);
//# sourceMappingURL=main.4717ecfc.chunk.js.map
(this["webpackJsonpjob-listing-app"]=this["webpackJsonpjob-listing-app"]||[]).push([[0],{66:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var c=n(6),a=n(36),r=n.n(a),s=(n(66),n(13)),o=n(25),l=n(12),i=n(29),b=Object(i.c)({name:"global",initialState:function(){return{pagesCounter:0,pages:[],numOfResults:10,toIndex:10,category:"",search:"",limit:0,openFilters:!1,fromIndex:0,chunkedPages:[],goToPage:!1,jobPositionTop:0,pageNum:1}},reducers:{setpagesCounter:function(e,t){e.pagesCounter=t.payload},setPages:function(e,t){e.pages=Object(l.a)(t.payload)},setNumOfResults:function(e,t){e.numOfResults=t.payload},setCategory:function(e,t){e.category=t.payload},setSearch:function(e,t){e.search=t.payload},setLimit:function(e,t){e.limit=t.payload},setOpenFilters:function(e,t){e.openFilters=!t.payload},setfromIndex:function(e,t){e.fromIndex=t.payload},setChunkedPages:function(e,t){e.chunkedPages=Object(l.a)(t.payload)},setgoToPage:function(e,t){e.goToPage=t.payload},setJobPositionTop:function(e,t){e.jobPositionTop=t.payload},settoIndex:function(e,t){e.toIndex=t.payload},setPageNum:function(e,t){e.pageNum=t.payload}}}),d=b.actions,u=d.setpagesCounter,j=d.setPages,m=d.setNumOfResults,h=d.setCategory,g=d.setSearch,p=d.setLimit,x=d.setOpenFilters,f=d.setfromIndex,O=d.setChunkedPages,v=d.setgoToPage,y=d.setJobPositionTop,w=d.settoIndex,N=d.setPageNum,k=b.reducer,C=n(5);var J=function(e){var t=e.job,n=e.fromUserPage,c=Object(s.b)();return Object(C.jsxs)(o.b,{onClick:function(e){window.screen.width<640?c(y(e.target.offsetTop-40)):c(y(e.target.offsetTop-100))},className:" job border-b  hover:bg-gray-50 p-4 block xl:p-4 xl:pl-6 lg:flex justify-between ",to:"/JobDescription",state:{job:t,fromUserPage:n},children:[Object(C.jsxs)("div",{className:"flex gap-4 xl:gap-5",children:[Object(C.jsx)("img",{src:"https://remotive.io/job/".concat(t.id,"/logo"),alt:"logo ".concat(t.company_name),className:"rounded-full w-16 h-16"}),Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{className:"text-blue-400",children:t.company_name}),Object(C.jsx)("h2",{className:"text-blue-900 font-semibold",children:t.title})]})]}),Object(C.jsxs)("div",{className:"hidden text-blue-400 text-right text-sm lg:grid ",children:[Object(C.jsx)("p",{children:t.category}),Object(C.jsx)("div",{children:t.candidate_required_location})]})]})},S=n(59),E=n.n(S),I=n(11);var P=function(e){var t=e.lastChunk,n=e.chunkIndex,a=e.chunk,r=Object(c.useState)(0),o=Object(I.a)(r,2),l=o[0],i=o[1],b=Object(s.c)((function(e){return e.global})),d=b.numOfResults,u=b.pages,j=Object(s.b)();return Object(c.useEffect)((function(){i(a.filter((function(e,t){return a.length-1===t})))}),[a]),Object(C.jsxs)("select",{className:" border rounded-md ",onChange:function(e){var t=e.target.value;j(N(+t+1)),j(f(t*d)),j(w(+t*d+ +d)),e.target.selectedIndex=0,j(y(0))},children:[u&&u.length>100?Object(C.jsx)("option",{children:"".concat(100*(n+1)-100+1,"...").concat(t===n?+l+1:100*(n+1))}):Object(C.jsx)("option",{children:"1...".concat(+l+1)}),a.map((function(e,t){return Object(C.jsx)("option",{value:e,children:e+1},t)}))]})};var L=function(e){var t=e.pageNumElement,n=Object(s.b)(),c=Object(s.c)((function(e){return e.global})),a=c.numOfResults,r=c.fromIndex,o=c.toIndex;return Object(C.jsx)("button",{disabled:0===r,className:"font-bold bg-blue-400 hover:bg-blue-500 px-2 pb-0.5 rounded-full text-xl text-white",onClick:function(){var e=t.innerHTML;n(N(e-1)),n(f(r-a)),n(w(o-a)),n(y(0))},children:"<"})};var R=function(e){var t=e.pageNumElement,n=Object(s.c)((function(e){return e.jobs})),c=Object(s.b)(),a=Object(s.c)((function(e){return e.global})),r=a.numOfResults,o=a.fromIndex,l=a.toIndex;return Object(C.jsx)("button",{disabled:l>n.jobs.length-1,className:"font-bold bg-blue-400 hover:bg-blue-500 px-2 pb-0.5 rounded-full text-xl text-white",onClick:function(){var e=t.innerHTML;c(N(+e+1)),c(f(+o+ +r)),c(w(+l+ +r)),c(y(0))},children:">"})};var T=function(){var e=Object(c.useState)(0),t=Object(I.a)(e,2),n=t[0],a=t[1],r=document.querySelector(".pageNum"),o=Object(s.c)((function(e){return e.global})),l=o.pages,i=o.chunkedPages,b=o.goToPage,d=o.numOfResults,u=Object(s.b)();return Object(c.useEffect)((function(){window.innerWidth>425?a(11):a(5)}),[]),Object(C.jsxs)("div",{className:"m-auto my-4 flex gap-6 justify-center mb-1.5 items-center px-4",children:[Object(C.jsx)(L,{pageNumElement:r}),l&&l.length>100&&!b&&Object(C.jsx)("button",{onClick:function(e){u(v(!b)),u(y(e.target.offsetTop))},className:"rounded-lg px-1 bg-blue-400 hover:bg-blue-500 text-white",children:"Go to page..."}),b&&l.length>100&&Object(C.jsx)("div",{className:"flex gap-3 flex-wrap justify-center",children:i.map((function(e,t){return Object(C.jsx)(P,{lastChunk:i.length-1,chunkIndex:t,chunk:e},t)}))}),i.length>0&&l.length<100&&l.length>=n&&Object(C.jsx)(P,{chunk:i[0]}),i.length>0&&l.length<n&&Object(C.jsx)("div",{className:"flex flex-wrap gap-2 justify-center",children:i[0].map((function(e,t){return Object(C.jsx)("button",{className:"".concat(e+1===10&&"pr-0.5"," rounded-full w-8 py-1  bg-blue-400 hover:bg-blue-500 text-white"),onClick:function(){u(N(e+1)),u(f(e*d)),u(w(+e*d+ +d)),u(y(0))},children:e+1},t)}))}),Object(C.jsx)(R,{pageNumElement:r})]})};var M=function(){var e=Object(s.c)((function(e){return e.jobs})).jobs,t=Object(s.c)((function(e){return e.global})),n=t.pages,a=t.openFilters,r=t.fromIndex,o=t.numOfResults,l=t.toIndex,i=t.pageNum,b=Object(s.b)();return Object(c.useEffect)((function(){b(O(E()(n,100)))}),[n,b,l]),Object(C.jsxs)("main",{className:" ".concat(!a&&"md:mt-16"," grid mb-2 md:mx-auto md:w-2/3 items-start"),children:[Object(C.jsxs)("div",{className:"text-center",children:[Object(C.jsxs)("div",{className:"".concat(a?"md:bg-opacity-30 bg-blue-400":"bg-blue-500"," p-1 text-white mb-4 md:rounded-b-full md:bg-blue-300 xl:p-1.5"),children:["Found ",Object(C.jsxs)("span",{children:[e.length," results"]})]}),Object(C.jsxs)("h2",{className:"".concat(e.length<o?"hidden":"inline-block"," font-bold text-blue-900"),children:["Page ",Object(C.jsx)("span",{className:"pageNum",children:i})," "]})]}),Object(C.jsx)("div",{className:"jobs-container",children:e.map((function(e,t){return t>=r&&t<l&&Object(C.jsx)(J,{job:e},t)}))}),Object(C.jsxs)("div",{className:"text-center self-end",children:[Object(C.jsxs)("h2",{className:"".concat(e.length<o?"hidden":"inline-block"," font-bold text-center text-blue-900"),children:["Page ",Object(C.jsx)("span",{className:"pageNum",children:i})," "]}),e.length>o&&Object(C.jsx)(T,{})]})]})},_=n(0),F=n.n(_),D=n(1),q=Object(i.c)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),z=q.actions,H=z.login,B=z.logout,U=q.reducer,A=n(38),G=n(19),K={apiKey:"AIzaSyCVcIuzcmjNF9LwJlp3pJITSGrG4LnjS58",authDomain:"remote-jobs-3854f.firebaseapp.com",projectId:"remote-jobs-3854f",storageBucket:"remote-jobs-3854f.appspot.com",messagingSenderId:"701677305242",appId:"1:701677305242:web:db41ed69271ecfdb888e23"},V=n(28);var W=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.jobs})),n=Object(c.useState)(0),a=Object(I.a)(n,2),r=a[0],o=a[1],l=Object(c.useState)(""),i=Object(I.a)(l,2),b=i[0],d=i[1],O=Object(c.useState)(""),y=Object(I.a)(O,2),k=y[0],J=y[1],S=Object(c.useState)(10),E=Object(I.a)(S,2),P=E[0],L=E[1];return Object(C.jsxs)("form",{className:"pb-6 grid gap-3 bg-white md:p-5 md:rounded-lg md:gap-6",onSubmit:function(n){n.preventDefault(),e(p(r)),e(h(b)),e(m(P)),e(g(k));for(var c=[],a=0;a<t.jobs.length/P;a++)c.push(a);e(u(c.length)),e(j(c)),e(f(0)),e(w(P)),e(N(1)),e(v(!1)),e(x(!0))},children:[Object(C.jsxs)("select",{className:"border p-1.5",onChange:function(e){d(e.target.value)},children:[Object(C.jsx)("option",{children:"Choose a job category"}),Object(C.jsx)("option",{children:"All jobs"}),t.categories.map((function(e,t){return Object(C.jsx)("option",{value:e.slug,children:e.name},t)}))]}),Object(C.jsxs)("div",{className:"border p-2",children:[Object(C.jsx)("label",{className:"mb-2 block",htmlFor:"search",children:"Search job listing title and description"}),Object(C.jsx)("input",{className:"pl-2 border",type:"search",id:"search",onChange:function(e){J(e.target.value)}})]}),Object(C.jsxs)("div",{className:"border p-2",children:[Object(C.jsxs)("label",{className:"block",htmlFor:"limit",children:["Limit the number of results:"," "]}),Object(C.jsx)("input",{className:"border w-20 my-1.5",type:"number",id:"limit",min:"1",onChange:function(e){o(e.target.value)}})]}),Object(C.jsxs)("div",{className:"border p-2",children:[Object(C.jsxs)("label",{className:"block",htmlFor:"numOfResults",children:["Results per page:"," "]}),Object(C.jsx)("input",{className:"border w-20 my-1.5",type:"number",id:"numOfResults",min:"1",onChange:function(e){""!==e.target.value?L(e.target.value):L(10)}})]}),Object(C.jsxs)("div",{className:"flex justify-evenly mt-2 xl:justify-center xl:gap-14 xl:mt-0",children:[Object(C.jsx)("button",{className:" rounded-lg px-4 py-1  bg-blue-400 text-white",type:"submit",children:"Go!"}),Object(C.jsx)("button",{className:" rounded-lg px-4 py-1  bg-blue-400 text-white",onClick:function(){e(p(0)),e(h("")),e(g("")),e(m(10)),o(0),d(""),J(""),L(10),e(x(!1)),document.querySelector("#limit").value="",document.querySelector("select").selectedIndex=0,document.querySelector("#search").value="",document.querySelector("#numOfResults").value=""},children:"Reset"})]})]})},X=n(14),Z=Object(A.a)(K),Q=Object(G.c)(Z);var Y=function(){var e=Object(V.b)(),t=Object(X.f)(),n=Object(s.b)(),a=Object(s.c)((function(e){return e.global})).openFilters,r=Object(s.c)((function(e){return e.persistedReducer.user})),i=Object(c.useState)(!1),b=Object(I.a)(i,2),d=b[0],u=b[1],j=function(){var c=Object(D.a)(F.a.mark((function c(){return F.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:Object(V.d)(e,new V.a).then((function(e){var c=Object(G.a)(Q,"users",e.user.uid);Object(G.b)(c).then((function(t){void 0===t.data()?Object(G.d)(Object(G.a)(Q,"users",e.user.uid),{likedJobs:[]}).then(n(H({uid:e.user.uid,name:e.user.displayName,likedJobs:[]}))):(console.log("user with that id already exists"),n(H({uid:e.user.uid,name:e.user.displayName,likedJobs:Object(l.a)(t.data().likedJobs)})))})),t("/user")})).catch((function(e){console.log(e)}));case 1:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}(),m=function(){var t=Object(D.a)(F.a.mark((function t(){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(V.e)(e).then((function(){n(B())}));case 2:u(!1);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(C.jsxs)("header",{className:"".concat(a?"md:pb-4 md:bg-opacity-60 h-screen":"pb-3"," bg-blue-400 grid auto-rows-min grid-cols-4 md:grid-cols-8 md:fixed z-10 w-full left-0 top-0 md:px-7  md:gap-3"),children:[Object(C.jsx)("h1",{className:"col-span-2 m-3 mb-2  text-white text-2xl cursor-pointer self-start",onClick:function(){return window.location.replace("/")},children:"Remote Jobs"}),Object(C.jsxs)("div",{className:"".concat(a?"":"mt-4"," nav  col-span-2 col-start-3 justify-self-end  md:col-start-7 "),children:[Object(C.jsxs)("button",{className:"".concat(a?"bg-opacity-0 mr-6 md:self-start md:mt-2":""," tracking-wide xl:mr-3 cursor-pointer  px-2 py-1   text-white  md:px-3"),onClick:function(){n(y(0)),n(x(a))},children:[" ",a?Object(C.jsx)("span",{className:"text-xl md:text-2xl",children:"x"}):Object(C.jsx)("span",{children:"Filters"})]}),r?!a&&Object(C.jsxs)("div",{onClick:function(){u(!d)},onMouseLeave:function(){return u(!1)},className:"dropdown relative  tracking-wide cursor-pointer  text-white mr-3  px-2 py-1  md:px-3` ",children:["My Profile ",Object(C.jsx)("span",{className:"relative bottom-0.5",children:"\u2304"}),Object(C.jsxs)("ul",{className:"".concat(d?"block":"hidden","  dropdown-content absolute max-w-max pt-5 text-white bg-blue-400 text-black"),children:[Object(C.jsx)("li",{children:Object(C.jsx)(o.b,{className:"",to:"/user",children:"My job list"})}),Object(C.jsx)("li",{children:Object(C.jsx)("button",{className:"",onClick:m,children:"Logout"})})]})]}):Object(C.jsx)("div",{onClick:j,className:"".concat(a?"hidden":"inline"," tracking-wide mr-2 lg:mr-3 cursor-pointer   px-2 pb-1 pt-0.5 text-white "),children:"Login"})]}),Object(C.jsx)("div",{className:"".concat(a?"col-span-full md:col-start-2 md:col-end-7  xl:col-start-3 xl:col-end-7 xl:row-start-1":"hidden"," md:mt-5 md:mb-1 "),children:Object(C.jsx)(W,{})})]})};var $,ee=function(e){var t=e.isLoading;return Object(C.jsxs)("footer",{className:"".concat(t&&"fixed bottom-0 left-0 w-full"," text-white mt-4 text-center"),children:[Object(C.jsxs)("p",{className:"py-2 bg-blue-400 md:mx-40 lg:mx-50 xl:mx-60 md:rounded-t-full xl:bg-blue-300  xl:p-1.5",children:["API Source: ",Object(C.jsx)("a",{href:"https://remotive.io/api-documentation",rel:"noreferrer",target:"_blank",children:"https://remotive.io/api-documentation"})]}),Object(C.jsxs)("p",{className:"bg-blue-500 py-2",children:["Made by ",Object(C.jsx)("a",{className:"underline",href:"https://github.com/BogdanCikota",rel:"noreferrer",target:"_blank",children:"Bogdan"})," "]})]})},te=n(31),ne=["title","titleId"];function ce(){return(ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function re(e,t){var n=e.title,a=e.titleId,r=ae(e,ne);return c.createElement("svg",ce({width:25,height:25,viewBox:"0 -30 645 645",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,$||($=c.createElement("path",{d:"M297.297 550.868c-13.774-15.437-48.17-45.529-76.435-66.874-83.744-63.242-95.142-72.395-129.144-103.703-62.684-57.721-89.305-115.71-89.213-194.34.044-38.384 2.66-53.172 13.409-75.797C34.152 71.768 61.015 43.245 95.36 25.799c24.326-12.355 36.323-17.845 76.945-18.07 42.493-.235 51.438 4.72 76.435 18.452 30.424 16.714 61.739 52.436 68.213 77.811l3.998 15.672 9.859-21.584c55.716-121.973 233.599-120.148 295.502 3.031 19.638 39.076 21.794 122.513 4.381 169.513-22.716 61.309-65.38 108.05-164.007 179.676-64.681 46.974-137.885 118.046-142.98 128.028-5.916 11.589-.283 1.817-26.409-27.46z",fill:"red"})))}var se,oe,le,ie,be,de,ue,je,me,he,ge,pe,xe,fe,Oe,ve,ye=c.forwardRef(re),we=(n.p,["title","titleId"]);function Ne(){return(Ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function ke(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Ce(e,t){var n=e.title,a=e.titleId,r=ke(e,we);return c.createElement("svg",Ne({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 490.4 490.4",style:{enableBackground:"new 0 0 490.4 490.4"},xmlSpace:"preserve",width:25,height:25,ref:t,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,se||(se=c.createElement("g",null,c.createElement("g",null,c.createElement("path",{d:"M222.5,453.7c6.1,6.1,14.3,9.5,22.9,9.5c8.5,0,16.9-3.5,22.9-9.5L448,274c27.3-27.3,42.3-63.6,42.4-102.1 c0-38.6-15-74.9-42.3-102.2S384.6,27.4,346,27.4c-37.9,0-73.6,14.5-100.7,40.9c-27.2-26.5-63-41.1-101-41.1 c-38.5,0-74.7,15-102,42.2C15,96.7,0,133,0,171.6c0,38.5,15.1,74.8,42.4,102.1L222.5,453.7z M59.7,86.8 c22.6-22.6,52.7-35.1,84.7-35.1s62.2,12.5,84.9,35.2l7.4,7.4c2.3,2.3,5.4,3.6,8.7,3.6l0,0c3.2,0,6.4-1.3,8.7-3.6l7.2-7.2 c22.7-22.7,52.8-35.2,84.9-35.2c32,0,62.1,12.5,84.7,35.1c22.7,22.7,35.1,52.8,35.1,84.8s-12.5,62.1-35.2,84.8L251,436.4 c-2.9,2.9-8.2,2.9-11.2,0l-180-180c-22.7-22.7-35.2-52.8-35.2-84.8C24.6,139.6,37.1,109.5,59.7,86.8z"})))),oe||(oe=c.createElement("g",null)),le||(le=c.createElement("g",null)),ie||(ie=c.createElement("g",null)),be||(be=c.createElement("g",null)),de||(de=c.createElement("g",null)),ue||(ue=c.createElement("g",null)),je||(je=c.createElement("g",null)),me||(me=c.createElement("g",null)),he||(he=c.createElement("g",null)),ge||(ge=c.createElement("g",null)),pe||(pe=c.createElement("g",null)),xe||(xe=c.createElement("g",null)),fe||(fe=c.createElement("g",null)),Oe||(Oe=c.createElement("g",null)),ve||(ve=c.createElement("g",null)))}var Je=c.forwardRef(Ce);n.p;var Se=function(){var e=Object(X.e)(),t=Object(X.f)(),n=Object(c.useState)(),a=Object(I.a)(n,2),r=a[0],i=a[1],b=Object(c.useState)(),d=Object(I.a)(b,2),u=d[0],j=d[1],m=Object(V.b)(),h=Object(s.b)(),g=Object(X.f)(),p=Object(s.c)((function(e){return e.persistedReducer.user})),x=Object(A.a)(K),f=Object(G.c)(x),O=function(){var e=Object(D.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(V.d)(m,new V.a).then((function(e){var n=Object(G.a)(f,"users",e.user.uid);Object(G.b)(n).then((function(n){void 0===n.data()?Object(G.d)(Object(G.a)(f,"users",e.user.uid),{likedJobs:[t]}).then(h(H({uid:e.user.uid,name:e.user.displayName,likedJobs:[t]}))):(console.log("user with that id already exists"),n.data().likedJobs.find((function(e){return e===t}))?h(H({uid:e.user.uid,name:e.user.displayName,likedJobs:n.data().likedJobs})):Object(G.d)(Object(G.a)(f,"users",e.user.uid),{likedJobs:[].concat(Object(l.a)(n.data().likedJobs),[t])}).then(h(H({uid:e.user.uid,name:e.user.displayName,likedJobs:[].concat(Object(l.a)(n.data().likedJobs),[t])}))))}))})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){if(void 0===e.state.job)t.push("/");else{i(e.state.job.publication_date);var n=new Date(r+"Z");j(n.toUTCString().slice(5,16)),window.scroll(0,0);for(var c=document.querySelector(".job-description"),a=0;a<c.children.length;a++)"&nbsp;"!==c.children[a].innerHTML&&""!==c.children[a].innerHTML&&"<br><br>"!==c.children[a].innerHTML&&"<br>"!==c.children[a].innerHTML||c.children[a].classList.add("hidden")}}),[e.state.job,t,r]),Object(C.jsx)("div",{children:void 0!==e.state.job&&Object(C.jsxs)("div",{className:"md:mt-16 xl:mt-16 m-auto max-w-5xl xl:p-4 text-gray-800",children:[Object(C.jsxs)(o.b,{to:e.state.fromUserPage?"/user":"/",className:"ml-2 underline font-semibold lg:text-lg",children:[" ","\u2190 back"]}),Object(C.jsxs)("div",{className:"xl:flex gap-2 px-4 xl:px-0 relative",children:[Object(C.jsx)("div",{className:"w-20 my-4 h-20 xl:border xl:my-0 xl:p-3 xl:m-0 xl:w-auto xl:h-auto self-center",children:Object(C.jsx)("img",{className:"rounded-full xl:rounded-none",src:"https://remotive.io/job/".concat(e.state.job.id,"/logo"),alt:"logo ".concat(e.state.job.company_name)})}),Object(C.jsxs)("div",{className:"font-semibold p-2 xl:grid gap-2",children:[Object(C.jsxs)("h3",{children:[Object(C.jsx)("span",{className:"font-bold",children:e.state.job.company_name})," "]}),Object(C.jsxs)("h2",{children:["Job title: ",e.state.job.title]}),Object(C.jsxs)("p",{children:["Category:"," ",Object(C.jsx)("span",{className:"font-normal",children:e.state.job.category})," "]}),Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{className:"inline",children:[""===e.state.job.candidate_required_location?Object(C.jsx)("span",{children:"/"}):Object(C.jsx)("span",{className:"font-normal",children:e.state.job.candidate_required_location})," "]})," ","/",Object(C.jsxs)("div",{className:"inline",children:[" ",e.state.job_type?Object(C.jsx)("span",{className:"font-normal",children:e.state.job_type}):Object(C.jsx)("span",{children:"/"})," "]})]}),Object(C.jsxs)("div",{children:["Published: ",Object(C.jsx)("span",{className:"font-normal",children:u})," "]})]}),Object(C.jsx)("div",{className:"HeartRed flex-1 grid justify-end z-0 absolute top-7 right-12 md:top-4 ",children:p&&p.likedJobs.find((function(t){return t===e.state.job.id}))?Object(C.jsx)(ye,{className:"cursor-pointer",onClick:function(){!function(e){var t=p.likedJobs.filter((function(t){return t!==e}));Object(G.e)(Object(G.a)(f,"users",p.uid),{likedJobs:t}).then(h(H(Object(te.a)(Object(te.a)({},p),{},{likedJobs:t})))),g("/user")}(e.state.job.id)}}):Object(C.jsx)(Je,{className:"cursor-pointer",onClick:function(){var t;p?(t=e.state.job.id,p.likedJobs.find((function(e){return e===t}))?console.log("job with that id already exist"):Object(G.d)(Object(G.a)(f,"users",p.uid),{likedJobs:[].concat(Object(l.a)(p.likedJobs),[t])}).then(h(H(Object(te.a)(Object(te.a)({},p),{},{likedJobs:[].concat(Object(l.a)(p.likedJobs),[t])}))))):O(e.state.job.id)}})})]}),Object(C.jsx)("div",{className:"border job-description py-3 px-5 w-screen overflow-scroll sm:w-full sm:overflow-visible grid gap-4 leading-relaxed",dangerouslySetInnerHTML:{__html:e.state.job.description}}),Object(C.jsxs)(o.b,{to:e.state.fromUserPage?"/user":"/",className:"ml-2 underline font-semibold lg:text-lg",children:[" ","\u2190 back"]})]})})};var Ee=function(){var e=Object(s.c)((function(e){return e.jobs}));return Object(C.jsxs)("div",{className:"loading grid gap-0.5 mb-2 md:mx-40 md:mt-16 xl:mt-16 xl:m-auto xl:w-2/3",children:[Object(C.jsx)("div",{className:"bg-blue-500 text-center  p-1 text-white mb-4 md:rounded-b-full md:bg-blue-300 xl:p-1.5",children:e.hasData?Object(C.jsx)("span",{children:"Loading..."}):Object(C.jsx)("span",{children:"No data! Try again later!"})}),Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:"job border-b hover:bg-gray-50 h-24"}),Object(C.jsx)("div",{className:"job border-b hover:bg-gray-50 h-24"}),Object(C.jsx)("div",{className:"job border-b hover:bg-gray-50 h-24"}),Object(C.jsx)("div",{className:"hidden job border-b hover:bg-gray-50 xl:block h-24"}),Object(C.jsx)("div",{className:"hidden job border-b hover:bg-gray-50 xl:block h-24"})]})]})};var Ie=function(){return Object(C.jsxs)("div",{className:"loading grid gap-0.5 mb-2 xl:mt-16 xl:m-auto xl:w-2/3",children:[Object(C.jsx)("div",{className:"bg-blue-500 text-center  p-1 text-white mb-4 xl:bg-blue-300 xl:rounded-b-full xl:p-1.5",children:"0 results"}),Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:"job border-b hover:bg-gray-50 h-24"}),Object(C.jsx)("div",{className:"job border-b hover:bg-gray-50 h-24"}),Object(C.jsx)("div",{className:"job border-b hover:bg-gray-50 h-24"}),Object(C.jsx)("div",{className:"hidden job border-b hover:bg-gray-50 xl:block h-24"}),Object(C.jsx)("div",{className:"hidden job border-b hover:bg-gray-50 xl:block h-24"})]})]})},Pe=function(e){var t=e.children,n=Object(V.b)(),a=Object(X.f)(),r=Object(c.useState)(!0),s=Object(I.a)(r,2),o=s[0],l=s[1];return Object(V.c)(n,(function(e){e?l(!1):(console.log("unauthorized"),a("/"))})),Object(C.jsx)("div",{children:o?Object(C.jsx)("p",{children:"loading..."}):t})},Le=n(41),Re=n.n(Le),Te=Object(i.b)("jobs/getCategories",Object(D.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://remotive.io/api/remote-jobs/categories",e.next=3,Re.a.get("https://remotive.io/api/remote-jobs/categories");case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})))),Me=Object(i.b)("jobs/getJobs",function(){var e=Object(D.a)(F.a.mark((function e(t,n){var c,a,r,s,o,l,i,b,d;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.limit,a=t.category,r=t.search,s=n.getState().global,o=s.numOfResults,l="https://remotive.io/api/remote-jobs?limit=".concat(c,"&category=").concat(a,"&search=").concat(r),e.next=6,Re.a.get(l);case 6:for(i=e.sent,b=[],d=0;d<i.data.jobs.length/o;d++)b.push(d);return n.dispatch(u(b.length)),n.dispatch(j(b)),e.abrupt("return",i.data);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),_e=Object(i.b)("jobs/getAllJobs",Object(D.a)(F.a.mark((function e(){var t,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 0,"","",t="https://remotive.io/api/remote-jobs?limit=".concat(0,"&category=").concat("","&search=").concat(""),e.next=6,Re.a.get(t);case 6:return n=e.sent,e.abrupt("return",n.data);case 8:case"end":return e.stop()}}),e)})))),Fe=Object(i.c)({name:"jobs",initialState:{loading:!1,jobs:[],errorMessage:null,hasData:!0,categories:[],allJobs:[]},reducers:{setIsLoading:function(e,t){e.loading=t.payload}},extraReducers:function(e){e.addCase(Me.pending,(function(e){e.loading=!0})).addCase(Me.fulfilled,(function(e,t){e.loading=!1,e.jobs=Object(l.a)(t.payload.jobs)})).addCase(Me.rejected,(function(e){e.loading=!1,e.hasData=!1,e.errorMessage="Ops, something went wrong!"})).addCase(Te.fulfilled,(function(e,t){e.categories=Object(l.a)(t.payload.jobs)})).addCase(Te.rejected,(function(e){e.hasData=!1,e.errorMessage="Ops, something went wrong!"})).addCase(_e.fulfilled,(function(e,t){e.allJobs=Object(l.a)(t.payload.jobs)})).addCase(_e.rejected,(function(e){e.hasData=!1,e.errorMessage="Ops, something went wrong!"}))}}),De=(Fe.actions.setIsLoading,Fe.reducer);var qe=function(){var e=Object(s.c)((function(e){return e.persistedReducer.user})),t=Object(s.c)((function(e){return e.jobs})).allJobs;return Object(C.jsxs)("main",{class:" md:mt-20 grid mb-2 md:mx-auto md:w-2/3 items-start gap-4",children:[Object(C.jsx)(o.b,{to:"/",className:"underline font-semibold lg:text-lg",children:"\u2190 back"}),Object(C.jsx)("div",{className:"jobs-container",children:e&&Object(l.a)(e.likedJobs).reverse().map((function(e){return t.map((function(t,n){return e===t.id&&Object(C.jsx)(J,{fromUserPage:!0,job:t},n)}))}))})]})};var ze=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.jobs})),n=Object(s.c)((function(e){return e.global})),a=t.loading,r=void 0!==a&&a,l=t.jobs,i=void 0===l?[]:l,b=n.category,d=n.search,u=n.limit,j=n.jobPositionTop,m=n.openFilters;return Object(c.useEffect)((function(){e(Me({limit:u,category:b,search:d})),e(Te()),e(_e())}),[e,u,b,d]),Object(C.jsx)(o.a,{basemname:"/",children:Object(C.jsxs)("div",{className:"".concat(!r&&"grid"," App"),children:[Object(C.jsx)(Y,{}),r?Object(C.jsx)(Ee,{}):0===i.length?Object(C.jsx)(Ie,{}):Object(C.jsxs)(X.c,{onClick:window.scrollTo(0,j),children:[Object(C.jsx)(X.a,{exact:!0,path:"/",element:!m&&Object(C.jsx)(M,{})}),Object(C.jsx)(X.a,{path:"/user",element:Object(C.jsx)(Pe,{children:Object(C.jsx)(qe,{})})}),Object(C.jsx)(X.a,{path:"/JobDescription",element:Object(C.jsx)(Se,{})})]}),!m&&Object(C.jsx)(ee,{isLoading:r})]})})},He=n(60),Be=n.n(He),Ue=n(46),Ae={key:"root",storage:Be.a},Ge=Object(Ue.a)(Ae,U),Ke=Object(i.a)({reducer:{jobs:De,global:k,persistedReducer:Ge},middleware:function(e){return e({serializableCheck:!1})}});Object(Ue.b)(Ke);r.a.render(Object(C.jsx)(s.a,{store:Ke,children:Object(C.jsx)(ze,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.aec71a17.chunk.js.map
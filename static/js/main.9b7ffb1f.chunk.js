(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{101:function(e,t,n){"use strict";t.a=n.p+"static/media/cat.06a5c78a.png"},103:function(e,t,n){"use strict";n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return k})),n.d(t,"g",(function(){return N})),n.d(t,"e",(function(){return S})),n.d(t,"f",(function(){return C})),n.d(t,"a",(function(){return E}));var r=n(7),a=n.n(r),c=n(13),o=n(30),i=n(3),s=n(14),u=function(e){return s.a.get("profile/".concat(e)).then((function(e){return e.data}))},l=function(e){return s.a.get("profile/status/".concat(e))},d=function(e){return s.a.put("profile/status/",{status:e})},_=function(e){var t=new FormData;return t.append("image",e),s.a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},f=function(e){return s.a.put("profile",e)},h=n(28),j="social-network/profile/ADD-POST",b="social-network/profile/DELETE-POST",p="social-network/profile/SET_USER_PROFILE",O="social-network/profile/SET-STATUS",v="social-network/profile/SAVE_PHOTO_SUCCESS",m="social-network/profile/SAVE_PROFILE_SUCCESS",g={profile:null,posts:[{id:1,message:"Hi, how are you?",likesCount:13},{id:2,message:"It's my first post",likesCount:15}],newPostText:"",status:""},x=function(e){return{type:j,newPost:e}},w=function(e){return{type:O,status:e}},y=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(e);case 2:r=t.sent,n({type:p,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,n(w(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:0===t.sent.data.resultCode&&n(w(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:v,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,f(e);case 3:if(0!==(o=t.sent).data.resultCode){t.next=8;break}n(y(c)),t.next=10;break;case 8:return n(Object(h.b)("editProfile",{_error:o.data.messages[0]})),t.abrupt("return",Promise.reject(o.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(x(e));case 2:n(Object(h.a)("sendPost"));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(i.a)(Object(i.a)({},e),{},{newPostText:"",posts:[].concat(Object(o.a)(e.posts),[{id:5,message:t.newPost,likesCount:0}])});case p:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case O:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case b:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case v:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});case m:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});default:return e}}},104:function(e,t,n){},134:function(e,t,n){"use strict";n.d(t,"b",(function(){return f}));var r=n(7),a=n.n(r),c=n(13),o=n(30),i=n(3),s=n(28),u="social-network/dialogs/SEND-MESSAGE",l="social-network/dialogs/DELETE-MESSAGE",d={dialogs:[{id:1,name:"Viktor"},{id:2,name:"Dasha"},{id:3,name:"Andrew"},{id:4,name:"Roman"}],messages:[{id:1,message:"This is message"},{id:2,message:"Yo"},{id:3,message:"Hi"}]},_=function(e){return{type:u,newMessage:e}},f=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(_(e));case 2:n(Object(s.a)("sendMessage"));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{messages:[].concat(Object(o.a)(e.messages),[{id:4,message:t.newMessage}])});case l:return Object(i.a)(Object(i.a)({},e),{},{messages:e.messages.filter((function(e){return e.id!==t.messageId}))});default:return e}}},136:function(e,t,n){"use strict";n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return w})),n.d(t,"c",(function(){return k})),n.d(t,"b",(function(){return N})),n.d(t,"f",(function(){return S}));var r=n(7),a=n.n(r),c=n(13),o=n(30),i=n(3),s=n(14),u={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return s.a.get("users?page=".concat(e,"&count=").concat(t),{withCredentials:!0}).then((function(e){return e.data}))},followUser:function(e){return s.a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollowUser:function(e){return s.a.delete("follow/".concat(e)).then((function(e){return e.data}))}},l=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),r):e}))},d="social-network/users/FOLLOW",_="social-network/users/UNFOLLOW",f="social-network/users/SET-USERS",h="social-network/users/SET-CURRENT-PAGE",j="social-network/users/SET-TOTAL-COUNT",b="social-network/users/TOGGLE_IS_FETCHING",p="social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS",O={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,isFollowingInProgress:[]},v=function(e){return{type:d,userId:e}},m=function(e){return{type:_,userId:e}},g=function(e){return{type:h,currentPage:e}},x=function(e){return{type:b,isFetching:e}},w=function(e,t){return{type:p,isFetching:e,userId:t}},y=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(c(n)),t(w(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),k=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),r(g(e)),n.next=4,u.getUsers(e,t);case 4:c=n.sent,r(x(!1)),r((o=c.items,{type:f,users:o})),r((a=c.totalCount,{type:j,totalUsersCount:a}));case 8:case"end":return n.stop()}var a,o}),n)})));return function(e){return n.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y(n,e,u.followUser.bind(u),v);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y(n,e,u.unfollowUser.bind(u),m);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(i.a)(Object(i.a)({},e),{},{users:l(e.users,t.userId,"id",{followed:!0})});case _:return Object(i.a)(Object(i.a)({},e),{},{users:l(e.users,t.userId,"id",{followed:!1})});case f:return Object(i.a)(Object(i.a)({},e),{},{users:Object(o.a)(t.users)});case h:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case j:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalUsersCount});case b:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case p:return Object(i.a)(Object(i.a)({},e),{},{isFollowingInProgress:t.isFetching?[].concat(Object(o.a)(e.isFollowingInProgress),[t.userId]):e.isFollowingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},138:function(e,t,n){e.exports={common__loader:"common_common__loader__1ie9L"}},14:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(140),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"c44afb3b-3190-4267-a47c-ee639a0d16bd"}})},142:function(e,t,n){"use strict";n.r(t);n(0);var r=n(17),a=n.n(r),c=n(39),o=n.n(c),i=n(95),s=n(135),u=n(54),l=n(46),d=n(8),_=n.n(d),f=n(1),h=Object(u.a)(40),j=Object(s.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(f.jsx)("div",{className:_()(a.a.form,a.a.form__container),children:Object(f.jsxs)("form",{onSubmit:t,children:[Object(f.jsx)("div",{className:a.a.form__email,children:Object(l.c)("Email","email",[u.b,h],l.a,{},"email",[a.a.form__style])}),Object(f.jsx)("div",{className:a.a.form__password,children:Object(l.c)("Password","password",[u.b,h],l.a,{},"password",[a.a.form__style])}),Object(f.jsxs)("div",{className:a.a.form__checkbox,children:[Object(f.jsx)(i.a,{className:a.a.form__checkbox_style,type:"checkbox",component:"input",name:"checkbox"})," Remember me"]}),r&&Object(f.jsx)("img",{src:r,alt:""}),r&&Object(f.jsx)(i.a,{className:a.a.form__email,type:"text",component:l.a,name:"captcha",validate:[u.b]}),n&&Object(f.jsx)("div",{className:o.a.validation__group,children:n}),Object(f.jsx)("div",{className:a.a.form__btn,children:Object(f.jsx)("button",{className:a.a.form__btn_style,children:"Login"})})]})})})),b=n(20),p=n(29),O=n(12);t.default=Object(b.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{setLoginUser:p.d,setLogoutUser:p.e,getCaptchaUrl:p.c})((function(e){var t=e.isAuth,n=e.setLoginUser,r=e.captchaUrl;return t?Object(f.jsx)(O.a,{to:"/profile"}):Object(f.jsxs)("div",{className:_()(a.a.login,a.a.login__container),children:[Object(f.jsx)("div",{className:"".concat(a.a.login__title),children:"Welcome to Cool network!"}),Object(f.jsx)(j,{onSubmit:function(e){n(e.email,e.password,e.checkbox,e.captcha)},captchaUrl:r})]})}))},17:function(e,t,n){e.exports={login:"login_login__3Li2d",login__container:"login_login__container__32oOD",login__title:"login_login__title__2y1lP",form__email:"login_form__email__MvMPZ",form__password:"login_form__password__3iQm6",form__checkbox:"login_form__checkbox__3gCIg",form__btn:"login_form__btn__337yb",form__btn_style:"login_form__btn_style__57bYs",form__style:"login_form__style__1xus_"}},173:function(e,t,n){},23:function(e,t,n){e.exports={header:"header_header__3PUjW",header__container:"header_header__container__2dGy0",header__main:"header_header__main__1jxIL",header__title:"header_header__title__1GN5O",header__menu:"header_header__menu__ZNNv9",header__photo:"header_header__photo__2pxh5",login__container:"header_login__container__2cSA6",login__photo:"header_login__photo__UgSVD",login__notfoto:"header_login__notfoto__3Iy5F",login__link:"header_login__link__B_KAL",header__icon:"header_header__icon__3s-kW",active:"header_active__x0PWz",login:"header_login__3wMEC"}},29:function(e,t,n){"use strict";n.d(t,"b",(function(){return O})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return m})),n.d(t,"c",(function(){return g}));var r=n(7),a=n.n(r),c=n(13),o=n(3),i=n(14),s=function(){return i.a.get("auth/me").then((function(e){return e.data}))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return i.a.get("profile/".concat(e)).then((function(e){return e.data.photos.small}))},l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return i.a.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},d=function(){return i.a.delete("/auth/login").then((function(e){return e.data}))},_=n(28),f=function(){return i.a.get("security/get-captcha-url")},h="social-network/auth/SET-USER-DATA",j="social-network/auth/GET_CAPTCHA_URL_SUCCESS",b={userId:null,email:null,login:null,userPhoto:null,rememberMe:!1,isFetching:!1,isAuth:!1,captchaUrl:null},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:19470,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;return{type:h,payload:{userId:e,email:t,login:n,userPhoto:r,isAuth:a}}},O=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,o,i,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:if(0!==(n=e.sent).resultCode){e.next=9;break}return c=n.data,o=c.id,i=c.email,l=c.login,e.next=7,u(o);case 7:r=e.sent,t(p(o,i,l,r,!0));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(e,t,n,r){return function(){var o=Object(c.a)(a.a.mark((function c(o){var i,s;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l(e,t,n,r);case 2:0===(i=a.sent).resultCode?o(O()):(10===i.resultCode&&o(g()),s=i.messages.length>0?i.messages[0]:"Some error",o(Object(_.b)("login",{_error:s})));case 4:case"end":return a.stop()}}),c)})));return function(e){return o.apply(this,arguments)}}()},m=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:0===e.sent.resultCode&&t(p(null,null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:n=e.sent,r=n.data.url,t({type:j,payload:{captchaUrl:r}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:case j:return Object(o.a)(Object(o.a)({},e),t.payload);default:return e}}},298:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=(n(104),function(e){e&&e instanceof Function&&n.e(9).then(n.bind(null,308)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))}),o=n(72),i=n.n(o),s=(n(172),n(41)),u=n(42),l=n(44),d=n(43),_=(n(173),n(61)),f=n.n(_),h=n(12),j=n(3),b=n(71),p=n(1),O=function(e){return function(t){return Object(p.jsx)(a.a.Suspense,{fallback:Object(p.jsx)(b.a,{}),children:Object(p.jsx)(e,Object(j.a)({},t))})}},v=n(33),m=n(40),g=n.n(m),x=n(15),w=n(142),y=n(8),k=n.n(y),N=function(e){var t=e.isAuth,n=e.isShowedNavBar,r=e.setLogoutUser,a=e.showHideNavBar;return Object(p.jsxs)("nav",{className:k()(g.a.navbar,g.a.navbar__menu,Object(v.a)({},g.a.active,n)),children:[Object(p.jsxs)("ul",{className:k()(g.a.navbar__list),children:[Object(p.jsx)("li",{onClick:function(){return a(!1)},children:Object(p.jsx)(x.c,{to:"/profile",children:"Profile"})}),Object(p.jsx)("li",{onClick:function(){return a(!1)},children:Object(p.jsx)(x.c,{to:"/dialogs",children:"Messages"})}),Object(p.jsx)("li",{onClick:function(){return a(!1)},children:Object(p.jsx)(x.c,{to:"/news",children:"News"})}),Object(p.jsx)("li",{onClick:function(){return a(!1)},children:Object(p.jsx)(x.c,{to:"/music",children:"Music"})}),Object(p.jsx)("li",{onClick:function(){return a(!1)},children:Object(p.jsx)(x.c,{to:"/users",children:"Users"})}),Object(p.jsx)("li",{onClick:function(){return a(!1)},children:Object(p.jsx)(x.c,{to:"/settings",children:"Settings"})})]}),Object(p.jsx)("div",{className:k()(g.a.login__link),children:t?Object(p.jsx)("div",{onClick:r,className:k()(g.a.login__exit),children:"Logout"}):Object(p.jsx)(x.c,{to:"/login",render:function(){return Object(p.jsx)(w.default,{})},children:"Login"})})]})},S=n(20),C=n(29),E="social-network/navbar/SHOW_HIDE_NAVBAR",U={isShowedNavBar:!1},P=function(e){return{type:E,isShowedNavBar:e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return{isShowedNavBar:t.isShowedNavBar};default:return e}},A=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onOffScroll=function(e){document.body.style.overflowY=e?"hidden":"scroll"},e}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(e,t){this.props.isShowedNavBar!==e.isShowedNavBar&&this.onOffScroll(this.props.isShowedNavBar)}},{key:"render",value:function(){return Object(p.jsx)(N,Object(j.a)({},this.props))}}]),n}(a.a.Component),F=Object(S.b)((function(e){return{isAuth:e.auth.isAuth,isShowedNavBar:e.navbar.isShowedNavBar}}),{setLogoutUser:C.e,showHideNavBar:P})(A),L=n(62),T=n.n(L),B=function(){return Object(p.jsxs)("div",{className:k()(T.a.error,T.a.error__container),children:[Object(p.jsx)("h2",{className:T.a.error__title,children:"404 - Not Found!"}),Object(p.jsx)(x.b,{to:"/profile",className:T.a.error__link,children:"Go Home"})]})},D=a.a.lazy((function(){return n.e(4).then(n.bind(null,314))})),z=a.a.lazy((function(){return n.e(3).then(n.bind(null,312))})),G=a.a.lazy((function(){return n.e(5).then(n.bind(null,313))})),H=a.a.lazy((function(){return Promise.resolve().then(n.bind(null,142))})),R=a.a.lazy((function(){return n.e(7).then(n.bind(null,309))})),M=a.a.lazy((function(){return n.e(8).then(n.bind(null,310))})),W=a.a.lazy((function(){return n.e(6).then(n.bind(null,311))})),V=function(){return Object(p.jsx)("main",{className:k()(f.a.main,"container-fluid","p-0"),children:Object(p.jsxs)("div",{className:k()(f.a.main__container,"row","m-0"),children:[Object(p.jsx)("div",{className:k()(f.a.main__nav,"col-lg-2","p-0"),children:Object(p.jsx)(F,{})}),Object(p.jsx)("div",{className:k()(f.a.main__content,"col-lg-10","col-12","p-0"),children:Object(p.jsxs)(h.d,{children:[Object(p.jsx)(h.b,{path:"/profile/:userId?",render:O(z)}),Object(p.jsx)(h.b,{path:"/dialogs",render:O(D)}),Object(p.jsx)(h.b,{path:"/news",render:O(R)}),Object(p.jsx)(h.b,{path:"/music",render:O(W)}),Object(p.jsx)(h.b,{path:"/users",render:O(G)}),Object(p.jsx)(h.b,{path:"/login",render:O(H)}),Object(p.jsx)(h.b,{path:"/settings",render:O(M)}),Object(p.jsx)(h.a,{from:"/",to:"/profile"}),Object(p.jsx)(h.b,{component:B})]})})]})})},K=n(77),Y=n.n(K),Z=function(){return Object(p.jsx)("footer",{className:"".concat(Y.a.footer," ").concat(Y.a.footer__container),children:Object(p.jsx)("div",{className:Y.a.footer__copyright,children:Object(p.jsx)("h2",{children:"\xa9 2021 Copyright: Ivashko Vladyslav"})})})},J=n(23),Q=n.n(J),q=n(101),X=n(102),$=function(e){var t=e.isShowedNavBar,n=e.showHideNavBar,a=Object(r.useState)(!1),c=Object(X.a)(a,2),o=c[0],i=c[1];return Object(p.jsx)("div",{onClick:function(){i(!o),n(o)},className:k()(Q.a.header__icon,Object(v.a)({},Q.a.active,t)),children:Object(p.jsx)("span",{})})},ee=function(e){var t=e.isAuth,n=e.imgUrl,r=e.isShowedNavBar,a=e.showHideNavBar;return Object(p.jsx)("header",{className:k()(Q.a.header,"container-fluid","p-0"),children:Object(p.jsxs)("div",{className:k()(Q.a.header__container,"row"),children:[Object(p.jsx)("div",{className:k()(Q.a.header__main,"col-lg-6","col-4","justify-content-lg-start","justify-content-md-center","justify-content-center","p-0"),children:Object(p.jsx)("div",{className:Q.a.header__title,children:Object(p.jsx)("h1",{children:Object(p.jsx)(x.c,{to:"/",children:"Cool Network"})})})}),Object(p.jsx)("div",{className:k()(Q.a.login,Q.a.login__container,"col-lg-6","col-4","justify-content-lg-end","p-0"),children:Object(p.jsx)("div",{className:t?Q.a.login__photo:Q.a.login__notfoto,children:Object(p.jsx)("img",{src:null!=n?n:q.a,alt:""})})}),Object(p.jsx)("div",{className:k()(Q.a.header__menu,"col-4","justify-content-end","p-0"),children:Object(p.jsx)($,{isShowedNavBar:r,showHideNavBar:a})})]})})},te=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(ee,{isAuth:this.props.isAuth,imgUrl:this.props.imgUrl,isShowedNavBar:this.props.isShowedNavBar,showHideNavBar:this.props.showHideNavBar})}}]),n}(a.a.Component),ne=Object(S.b)((function(e){return{isAuth:e.auth.isAuth,imgUrl:e.auth.userPhoto,isShowedNavBar:e.navbar.isShowedNavBar}}),{showHideNavBar:P})(te),re=n(11),ae=n(7),ce=n.n(ae),oe=n(13),ie="social-network/app/INITIALIZED-SUCCESS",se={initialized:!1},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie:return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},le=n(103),de=n(134),_e=n(136),fe=n(141),he=n(137),je=Object(re.c)({profilePage:le.b,dialogsPage:de.a,usersPage:_e.a,navbar:I,auth:C.a,app:ue,form:he.a}),be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||re.d,pe=Object(re.e)(je,be(Object(re.a)(fe.a)));window.store=pe;var Oe=pe,ve=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedApp()}},{key:"render",value:function(){return this.props.initialized?Object(p.jsxs)("div",{className:k()("wrapper"),children:[Object(p.jsx)(ne,{}),Object(p.jsx)(V,{}),Object(p.jsx)(Z,{})]}):Object(p.jsx)(b.a,{})}}]),n}(r.Component),me=Object(re.d)(h.g,Object(S.b)((function(e){return{initialized:e.app.initialized}}),{initializedApp:function(){return function(){var e=Object(oe.a)(ce.a.mark((function e(t){return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(C.b)());case 2:return e.next=4,t({type:ie});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(ve),ge=function(){return Object(p.jsx)(x.a,{children:Object(p.jsx)(S.a,{store:Oe,children:Object(p.jsx)(me,{})})})};i.a.render(Object(p.jsx)(ge,{}),document.getElementById("root")),c()},39:function(e,t,n){e.exports={validation__container:"controlForms_validation__container__31BGM",validation__field:"controlForms_validation__field__2PrKz",validation__message:"controlForms_validation__message__2FpW1",validation__group:"controlForms_validation__group__3aNuk",validation__f:"controlForms_validation__f__3vLkL"}},40:function(e,t,n){e.exports={navbar:"navbar_navbar__290VP",navbar__menu:"navbar_navbar__menu__IiBlh",navbar__list:"navbar_navbar__list__igNav",login__link:"navbar_login__link__171-1",login__exit:"navbar_login__exit__p6ZqN",active:"navbar_active__28gjk"}},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return O}));var r=n(30),a=n(3),c=n(96),o=n(33),i=(n(0),n(39)),s=n.n(i),u=n(95),l=n(8),d=n.n(l),_=n(1),f=["input","meta","child","styles"],h=["input","meta","child","styles"],j=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(_.jsxs)("div",{className:s.a.validation__container,children:[Object(_.jsx)("div",{className:d()(s.a.validation__f,Object(o.a)({},s.a.validation__field,c)),children:a}),Object(_.jsx)("div",{className:s.a.validation__message,children:c&&Object(_.jsx)("span",{children:r})})]})},b=function(e){var t=e.input,n=(e.meta,e.child,e.styles),r=Object(c.a)(e,f);return Object(_.jsx)(j,Object(a.a)(Object(a.a)({},e),{},{children:Object(_.jsx)("input",Object(a.a)(Object(a.a)({className:d()(n)},t),r))}))},p=function(e){var t=e.input,n=(e.meta,e.child,e.styles),r=Object(c.a)(e,h);return Object(_.jsx)(j,Object(a.a)(Object(a.a)({},e),{},{children:Object(_.jsx)("textarea",Object(a.a)(Object(a.a)({className:d()(n)},t),r))}))},O=function(e,t,n,c){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"text",s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[];return Object(_.jsx)(u.a,Object(a.a)({placeholder:e,type:i,component:c,name:t,validate:Object(r.a)(n),styles:s},o))}},54:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){return e?void 0:"Required"},a=function(e){return function(t){return t&&t.length>e?"Max be ".concat(e," characters or less"):void 0}}},61:function(e,t,n){e.exports={main:"content_main__2UGQ1",main__container:"content_main__container__3v046",main__nav:"content_main__nav__3a-lJ"}},62:function(e,t,n){e.exports={error__container:"notFound_error__container__1WIGf",error__title:"notFound_error__title__3r2DP",error__link:"notFound_error__link__2H82A"}},71:function(e,t,n){"use strict";var r=n.p+"static/media/loader.ce32e07d.gif",a=n(138),c=n.n(a),o=(n(0),n(1));t.a=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:r,className:c.a.common__loader})})}},77:function(e,t,n){e.exports={footer:"footer_footer__1sR2K",footer__copyright:"footer_footer__copyright__2OjIQ"}}},[[298,1,2]]]);
//# sourceMappingURL=main.9b7ffb1f.chunk.js.map
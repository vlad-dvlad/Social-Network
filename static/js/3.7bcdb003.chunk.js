(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[3],{299:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var s=a(3),o=a(40),c=a(41),i=a(43),n=a(42),r=a(0),_=a.n(r),l=a(12),p=a(20),d=a(1),u=function(t){var e=function(e){Object(i.a)(r,e);var a=Object(n.a)(r);function r(){return Object(o.a)(this,r),a.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(t,Object(s.a)({},this.props)):Object(d.jsx)(l.a,{to:"/login"})}}]),r}(_.a.Component);return Object(p.b)((function(t){return{isAuth:t.auth.isAuth}}),{})(e)}},300:function(t,e,a){t.exports={profile:"profile_profile__3exxN",profile__container:"profile_profile__container__2MEml",profile__main:"profile_profile__main__2NpVj",profile__header:"profile_profile__header__1sZBY",profile__info:"profile_profile__info__1Ni4h",profile__ava:"profile_profile__ava__2hvPA",profile__load:"profile_profile__load__X1jOb",data__name:"profile_data__name__137y3",data__status:"profile_data__status__33yJD",data__text:"profile_data__text__3J6Sp",data__contacts:"profile_data__contacts__1XTJk",data__edit:"profile_data__edit__1DYPJ",data__form:"profile_data__form__3rnzx",data__area:"profile_data__area__3R7Xm",contacts:"profile_contacts__3F2T2",contacts__value:"profile_contacts__value__1z7MH",contacts__title:"profile_contacts__title__wWE9-"}},303:function(t,e,a){t.exports={post__container:"post_post__container__3pYen",post__body:"post_post__body__Y9Xhh",post__image:"post_post__image__22kjV",post__text:"post_post__text__3wCH_",post__footer:"post_post__footer__2j26s",post__like:"post_post__like__h40U1"}},311:function(t,e,a){"use strict";a.r(e);var s=a(40),o=a(41),c=a(43),i=a(42),n=a(0),r=a.n(n),_=a(300),l=a.n(_),p=a(101),d=a(70),u=a(1),j=function(t){var e=Object(n.useState)(!1),a=Object(p.a)(e,2),s=a[0],o=a[1],c=Object(n.useState)(t.status),i=Object(p.a)(c,2),r=i[0],_=i[1];Object(n.useEffect)((function(){_(t.status)}),[t.status]);return Object(u.jsxs)("div",{className:l.a.data__status,children:[!s&&Object(u.jsx)("div",{children:Object(u.jsx)("div",{onDoubleClick:function(){return o(!0)},children:t.status||"------"})}),s&&Object(u.jsx)("div",{children:Object(u.jsx)("input",{onChange:function(t){return _(t.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),t.updateStatus(r)},value:r})})]})},f=a(100),b=a(45),h=a(134),O=a(47),m=a.n(O),x=Object(h.a)({form:"editProfile"})((function(t){var e=t.handleSubmit,a=t.profile,s=t.error;return Object(u.jsxs)("form",{onSubmit:e,className:l.a.profile__description,children:[Object(u.jsxs)("div",{className:l.a.data__contacts,children:["Full name: ",Object(b.c)("Full name","fullName",[],b.a,{},"text",[l.a.data__form])]}),Object(u.jsxs)("div",{className:l.a.data__contacts,children:["Looking for a job: ",Object(b.c)("","lookingForAJob",[],b.a,{},"checkbox")]}),Object(u.jsxs)("div",{className:l.a.data__contacts,children:["My professional skills:",Object(b.c)("Skills","lookingForAJobDescription",[],b.b,{},"",[l.a.data__area],"")]}),Object(u.jsxs)("div",{className:l.a.data__contacts,children:["About Me: ",Object(b.c)("About me","aboutMe",[],b.a,{},"text",[l.a.data__form])]}),Object(u.jsxs)("div",{className:l.a.data__contacts,children:["Contacts: ",Object.keys(a.contacts).map((function(t){return Object(u.jsx)("div",{children:Object(b.c)(t,"contacts."+t,[],b.a,{},"text",[l.a.data__form])},t)}))]}),s&&Object(u.jsx)("div",{className:m.a.validation__group,children:s}),Object(u.jsx)("button",{className:l.a.data__edit,children:"Save"})]})})),v=a(10),N=a.n(v),g=function(t){var e=t.profile,a=t.isOwner,s=t.goToEditMode;return Object(u.jsxs)("div",{className:l.a.profile__description,children:[Object(u.jsxs)("div",{className:l.a.data__text,children:["Looking for a job: ",Object(u.jsx)("span",{children:e.lookingForAJob?"yes":"no"})]}),Object(u.jsxs)("div",{className:l.a.data__text,children:["About me: ",Object(u.jsx)("span",{children:e.aboutMe})]}),Object(u.jsxs)("div",{className:l.a.data__text,children:["My professional skills: ",Object(u.jsx)("span",{children:e.lookingForAJobDescription})]}),Object(u.jsxs)("div",{className:l.a.data__contacts,children:["Contacts: ",Object.keys(e.contacts).map((function(t){return Object(u.jsx)(k,{contactTitle:t,contactValue:e.contacts[t]},t)}))]}),a&&Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:l.a.data__edit,onClick:s,children:"Edit"})})]})},k=function(t){var e=t.contactTitle,a=t.contactValue;return Object(u.jsxs)("div",{className:l.a.contacts,children:[Object(u.jsx)("span",{className:l.a.contacts__title,children:e}),":",Object(u.jsx)("span",{className:l.a.contacts__value,children:a})]})},P=function(t){var e=t.profile,a=t.status,s=t.isOwner,o=t.updateStatus,c=t.savePhoto,i=t.saveProfile,r=Object(n.useState)(!1),_=Object(p.a)(r,2),b=_[0],h=_[1];if(!e)return Object(u.jsx)(d.a,{});return Object(u.jsx)("div",{className:l.a.profile__main,children:Object(u.jsxs)("div",{className:l.a.profile__info,children:[Object(u.jsxs)("div",{className:l.a.profile__ava,children:[Object(u.jsx)("img",{src:e.photos.large||f.a,alt:""}),s&&Object(u.jsxs)("label",{className:l.a.profile__load,children:[Object(u.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&c(t.target.files[0])}}),"Change Photo"]})]}),Object(u.jsxs)("div",{className:N()(l.a.profile__data,l.a.data),children:[Object(u.jsx)("span",{className:l.a.data__name,children:e.fullName}),Object(u.jsx)(j,{status:a,updateStatus:o}),b?Object(u.jsx)(x,{initialValues:e,profile:e,onSubmit:function(t){i(t).then((function(){h(!1)}))}}):Object(u.jsx)(g,{profile:e,isOwner:s,goToEditMode:function(){h(!0)}})]})]})})},S=a(142),y=a.n(S),w=a(303),A=a.n(w),C=function(t){var e=t.photos,a=t.likeCount,s=t.message;return Object(u.jsxs)("div",{className:"".concat(A.a.post," ").concat(A.a.post__container),children:[Object(u.jsxs)("div",{className:A.a.post__body,children:[Object(u.jsx)("div",{className:A.a.post__image,children:Object(u.jsx)("img",{src:e||f.a,alt:""})}),Object(u.jsx)("div",{className:A.a.post__text,children:s})]}),Object(u.jsx)("div",{className:A.a.post__footer,children:Object(u.jsx)("div",{className:A.a.post__like,children:Object(u.jsxs)("span",{children:["Like ",a]})})})]})},M=a(54),J=Object(M.a)(50),F=r.a.memo((function(t){var e=t.posts,a=t.imgUrl,s=t.addPostClear;return Object(u.jsxs)("div",{className:"".concat(y.a.posts," ").concat(y.a.posts__container),children:[Object(u.jsx)(D,{onSubmit:function(t){s(t.newPost)}}),Object(u.jsx)("div",{className:y.a.posts__title,children:"My post"}),Object(u.jsx)(U,{posts:e,imgUrl:a})]})})),U=function(t){var e=t.posts,a=t.imgUrl;return Object(u.jsx)("div",{className:y.a.posts__items,children:e.map((function(t,e){return Object(u.jsx)("div",{className:y.a.posts__item,children:Object(u.jsx)(C,{photos:a,message:t.message,likeCount:t.likesCount})},e)}))})},D=Object(h.a)({form:"sendPost"})((function(t){var e=t.handleSubmit;return Object(u.jsxs)("form",{onSubmit:e,className:y.a.posts__form,children:[Object(b.c)("Enter something","newPost",[M.b,J],b.b,{},"text",[y.a.posts__text]),Object(u.jsx)("button",{className:y.a.posts__btn,children:"Add post"})]})})),E=F,I=a(102),T=a(20),V=Object(T.b)((function(t){return{imgUrl:t.auth.userPhoto,posts:t.profilePage.posts}}),{addPostClear:I.a})(E),z=function(t){var e=t.profile,a=t.status,s=t.isOwner,o=t.updateStatus,c=t.savePhoto,i=t.saveProfile;return Object(u.jsx)("div",{className:l.a.profile,children:Object(u.jsxs)("div",{className:l.a.profile__container,children:[Object(u.jsx)(P,{profile:e,status:a,isOwner:s,updateStatus:o,savePhoto:c,saveProfile:i}),Object(u.jsx)(V,{})]})})},X=a(12),Y=a(11),L=a(299),B=function(t){Object(c.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(s.a)(this,a);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).refreshProfile=function(){var e=t.props.match.params.userId;e||(e=t.props.authorizedUserId)||t.props.history.push("/login"),t.props.getProfile(e),t.props.getStatus(e)},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(u.jsx)(z,{profile:this.props.profile,status:this.props.status,isOwner:!this.props.match.params.userId,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile})}}]),a}(r.a.Component);e.default=Object(Y.d)(Object(T.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getProfile:I.c,getStatus:I.d,updateStatus:I.g,savePhoto:I.e,saveProfile:I.f}),X.f,L.a)(B)}}]);
//# sourceMappingURL=3.7bcdb003.chunk.js.map
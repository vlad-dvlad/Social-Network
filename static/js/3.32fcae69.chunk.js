(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[3],{298:function(t,e,s){"use strict";s.d(e,"a",(function(){return u}));var a=s(3),o=s(40),c=s(41),i=s(43),n=s(42),r=s(0),_=s.n(r),l=s(12),p=s(20),d=s(1),u=function(t){var e=function(e){Object(i.a)(r,e);var s=Object(n.a)(r);function r(){return Object(o.a)(this,r),s.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(t,Object(a.a)({},this.props)):Object(d.jsx)(l.a,{to:"/login"})}}]),r}(_.a.Component);return Object(p.b)((function(t){return{isAuth:t.auth.isAuth}}),{})(e)}},299:function(t,e,s){t.exports={profile:"profile_profile__3exxN",profile__container:"profile_profile__container__2MEml",profile__main:"profile_profile__main__2NpVj",profile__header:"profile_profile__header__1sZBY",profile__info:"profile_profile__info__1Ni4h",profile__ava:"profile_profile__ava__2hvPA",profile__load:"profile_profile__load__X1jOb",data__name:"profile_data__name__137y3",data__status:"profile_data__status__33yJD",data__text:"profile_data__text__3J6Sp",data__contacts:"profile_data__contacts__1XTJk",data__edit:"profile_data__edit__1DYPJ",data__form:"profile_data__form__3rnzx",data__area:"profile_data__area__3R7Xm",contacts:"profile_contacts__3F2T2",contacts__value:"profile_contacts__value__1z7MH",contacts__title:"profile_contacts__title__wWE9-"}},302:function(t,e,s){t.exports={posts__container:"myPosts_posts__container__4sDY8",posts__text:"myPosts_posts__text__26El_",posts__item:"myPosts_posts__item__1o0qM",posts__form:"myPosts_posts__form__1bzyd",posts__btn:"myPosts_posts__btn__iB-Dl",posts__title:"myPosts_posts__title__22ugd"}},303:function(t,e,s){t.exports={post__container:"post_post__container__3pYen",post__body:"post_post__body__Y9Xhh",post__image:"post_post__image__22kjV",post__text:"post_post__text__3wCH_",post__footer:"post_post__footer__2j26s",post__like:"post_post__like__h40U1"}},311:function(t,e,s){"use strict";s.r(e);var a=s(40),o=s(41),c=s(43),i=s(42),n=s(0),r=s.n(n),_=s(299),l=s.n(_),p=s(101),d=s(70),u=s(1),j=function(t){var e=Object(n.useState)(!1),s=Object(p.a)(e,2),a=s[0],o=s[1],c=Object(n.useState)(t.status),i=Object(p.a)(c,2),r=i[0],_=i[1];Object(n.useEffect)((function(){_(t.status)}),[t.status]);return Object(u.jsxs)("div",{className:l.a.data__status,children:[!a&&Object(u.jsx)("div",{children:Object(u.jsx)("div",{onDoubleClick:function(){return o(!0)},children:t.status||"------"})}),a&&Object(u.jsx)("div",{children:Object(u.jsx)("input",{onChange:function(t){return _(t.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),t.updateStatus(r)},value:r})})]})},f=s(100),b=s(45),h=s(134),m=s(47),O=s.n(m),x=Object(h.a)({form:"editProfile"})((function(t){var e=t.handleSubmit,s=t.profile,a=t.error;return Object(u.jsxs)("form",{onSubmit:e,className:l.a.profile__description,children:[Object(u.jsxs)("div",{className:l.a.data__contacts,children:["Full name: ",Object(b.c)("Full name","fullName",[],b.a,{},"text",[l.a.data__form])]}),Object(u.jsxs)("div",{className:l.a.data__contacts,children:["Looking for a job: ",Object(b.c)("","lookingForAJob",[],b.a,{},"checkbox")]}),Object(u.jsxs)("div",{className:l.a.data__contacts,children:["My professional skills:",Object(b.c)("Skills","lookingForAJobDescription",[],b.b,{},"",[l.a.data__area],"")]}),Object(u.jsxs)("div",{className:l.a.data__contacts,children:["About Me: ",Object(b.c)("About me","aboutMe",[],b.a,{},"text",[l.a.data__form])]}),Object(u.jsxs)("div",{className:l.a.data__contacts,children:["Contacts: ",Object.keys(s.contacts).map((function(t){return Object(u.jsx)("div",{children:Object(b.c)(t,"contacts."+t,[],b.a,{},"text",[l.a.data__form])},t)}))]}),a&&Object(u.jsx)("div",{className:O.a.validation__group,children:a}),Object(u.jsx)("button",{className:l.a.data__edit,children:"Save"})]})})),v=s(9),N=s.n(v),g=function(t){var e=t.profile,s=t.isOwner,a=t.goToEditMode;return Object(u.jsxs)("div",{className:l.a.profile__description,children:[Object(u.jsxs)("div",{className:l.a.data__text,children:["Looking for a job: ",Object(u.jsx)("span",{children:e.lookingForAJob?"yes":"no"})]}),Object(u.jsxs)("div",{className:l.a.data__text,children:["About me: ",Object(u.jsx)("span",{children:e.aboutMe})]}),Object(u.jsxs)("div",{className:l.a.data__text,children:["My professional skills: ",Object(u.jsx)("span",{children:e.lookingForAJobDescription})]}),Object(u.jsxs)("div",{className:l.a.data__contacts,children:["Contacts: ",Object.keys(e.contacts).map((function(t){return Object(u.jsx)(P,{contactTitle:t,contactValue:e.contacts[t]},t)}))]}),s&&Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:l.a.data__edit,onClick:a,children:"Edit"})})]})},P=function(t){var e=t.contactTitle,s=t.contactValue;return Object(u.jsxs)("div",{className:l.a.contacts,children:[Object(u.jsx)("span",{className:l.a.contacts__title,children:e}),":",Object(u.jsx)("span",{className:l.a.contacts__value,children:s})]})},k=function(t){var e=t.profile,s=t.status,a=t.isOwner,o=t.updateStatus,c=t.savePhoto,i=t.saveProfile,r=Object(n.useState)(!1),_=Object(p.a)(r,2),b=_[0],h=_[1];if(!e)return Object(u.jsx)(d.a,{});return Object(u.jsx)("div",{className:l.a.profile__main,children:Object(u.jsxs)("div",{className:l.a.profile__info,children:[Object(u.jsxs)("div",{className:l.a.profile__ava,children:[Object(u.jsx)("img",{src:e.photos.large||f.a,alt:""}),a&&Object(u.jsxs)("label",{className:l.a.profile__load,children:[Object(u.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&c(t.target.files[0])}}),"Change Photo"]})]}),Object(u.jsxs)("div",{className:N()(l.a.profile__data,l.a.data),children:[Object(u.jsx)("span",{className:l.a.data__name,children:e.fullName}),Object(u.jsx)(j,{status:s,updateStatus:o}),b?Object(u.jsx)(x,{initialValues:e,profile:e,onSubmit:function(t){i(t).then((function(){h(!1)}))}}):Object(u.jsx)(g,{profile:e,isOwner:a,goToEditMode:function(){h(!0)}})]})]})})},y=s(302),S=s.n(y),w=s(303),A=s.n(w),C=function(t){var e=t.photos,s=t.likeCount,a=t.message;return Object(u.jsxs)("div",{className:"".concat(A.a.post," ").concat(A.a.post__container),children:[Object(u.jsxs)("div",{className:A.a.post__body,children:[Object(u.jsx)("div",{className:A.a.post__image,children:Object(u.jsx)("img",{src:e||f.a,alt:""})}),Object(u.jsx)("div",{className:A.a.post__text,children:a})]}),Object(u.jsx)("div",{className:A.a.post__footer,children:Object(u.jsx)("div",{className:A.a.post__like,children:Object(u.jsxs)("span",{children:["Like ",s]})})})]})},M=s(54),J=Object(M.a)(50),D=r.a.memo((function(t){var e=t.posts,s=t.imgUrl,a=t.addPostClear;return Object(u.jsxs)("div",{className:"".concat(S.a.posts," ").concat(S.a.posts__container),children:[Object(u.jsx)(F,{onSubmit:function(t){a(t.newPost)}}),Object(u.jsx)("div",{className:S.a.posts__title,children:"My post"}),Object(u.jsx)(E,{posts:e,imgUrl:s})]})})),E=function(t){var e=t.posts,s=t.imgUrl;return Object(u.jsx)("div",{className:S.a.posts__items,children:e.map((function(t,e){return Object(u.jsx)("div",{className:S.a.posts__item,children:Object(u.jsx)(C,{photos:s,message:t.message,likeCount:t.likesCount})},e)}))})},F=Object(h.a)({form:"sendPost"})((function(t){var e=t.handleSubmit;return Object(u.jsxs)("form",{onSubmit:e,className:S.a.posts__form,children:[Object(b.c)("Enter something","newPost",[M.b,J],b.b,{},"text",[S.a.posts__text]),Object(u.jsx)("button",{className:S.a.posts__btn,children:"Add post"})]})})),U=D,I=s(102),T=s(20),z=Object(T.b)((function(t){return{imgUrl:t.auth.userPhoto,posts:t.profilePage.posts}}),{addPostClear:I.a})(U),V=function(t){var e=t.profile,s=t.status,a=t.isOwner,o=t.updateStatus,c=t.savePhoto,i=t.saveProfile;return Object(u.jsx)("div",{className:l.a.profile,children:Object(u.jsxs)("div",{className:l.a.profile__container,children:[Object(u.jsx)(k,{profile:e,status:s,isOwner:a,updateStatus:o,savePhoto:c,saveProfile:i}),Object(u.jsx)(z,{})]})})},Y=s(12),X=s(11),B=s(298),L=function(t){Object(c.a)(s,t);var e=Object(i.a)(s);function s(){var t;Object(a.a)(this,s);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).refreshProfile=function(){var e=t.props.match.params.userId;e||(e=t.props.authorizedUserId)||t.props.history.push("/login"),t.props.getProfile(e),t.props.getStatus(e)},t}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(u.jsx)(V,{profile:this.props.profile,status:this.props.status,isOwner:!this.props.match.params.userId,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile})}}]),s}(r.a.Component);e.default=Object(X.d)(Object(T.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getProfile:I.c,getStatus:I.d,updateStatus:I.g,savePhoto:I.e,saveProfile:I.f}),Y.f,B.a)(L)}}]);
//# sourceMappingURL=3.32fcae69.chunk.js.map
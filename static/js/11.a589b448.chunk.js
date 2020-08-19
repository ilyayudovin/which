(this.webpackJsonpwhich=this.webpackJsonpwhich||[]).push([[11],{412:function(e,a,t){"use strict";t.r(a);var n=t(63),r=t(0),c=t.n(r),l=t(10),o=t(195),i=t(402),s=t(395),u=t(403),m=t(43),h=t(184),p=t(60),d=t(23),E=t(372),g=t.n(E),v=t(413),f=t(289),b=t(401),y=t(75),w=Object(p.a)((function(e){return{root:{margin:e.spacing(4,0,1,0)}}})),k=function(e){var a=e.feedback,t=w();return c.a.createElement(f.a,{className:t.root,elevation:2},c.a.createElement(y.a,{user:a.author,info:c.a.createElement(v.a,{value:a.score,readOnly:!0,size:"small"})}),a.contents&&c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,null),c.a.createElement(b.a,null,c.a.createElement(m.a,null,a.contents))))},j=t(77),O=t(12),x=t(408),F=t(78),N=t(27),z=Object(p.a)((function(e){return{root:{display:"flex",flexDirection:"column"},textField:{margin:e.spacing(2,0)}}})),C=function(){var e=Object(r.useState)(""),a=Object(O.a)(e,2),t=a[0],n=a[1],o=Object(r.useState)(0),i=Object(O.a)(o,2),u=i[0],m=i[1],h=z(),p=Object(l.f)(),d=Object(F.b)().enqueueSnackbar;return c.a.createElement("div",{className:h.root},c.a.createElement(v.a,{value:u,onChange:function(e,a){m(a||0)},size:"large"}),c.a.createElement(x.a,{value:t,onChange:function(e){var a;n((null===(a=e.target)||void 0===a?void 0:a.value)||"")},label:"Feedback",variant:"outlined",className:h.textField,rows:4,multiline:!0}),c.a.createElement("div",null,c.a.createElement(s.a,{variant:"contained",color:"primary",size:"large",onClick:function(){u&&Object(N.c)("/feedback",{contents:t,score:u,version:"v1.0.0"}).then((function(){d("Your feedback has been submitted!",{variant:"success"}),p.push("/feed")}))}},"submit")))},I=t(32),H=t(74),A=Object(p.a)((function(e){return{root:{overflow:"hidden",padding:e.spacing(0,2)},logo:{width:e.spacing(20),height:e.spacing(20)},score:{fontWeight:"bold"},signup:{marginLeft:e.spacing(2)},reviews:Object(n.a)({},e.breakpoints.up("md"),{padding:e.spacing(0,10)})}}));a.default=function(){var e=Object(H.b)().data,a=A(),t=Object(l.f)(),n=Object(I.b)(),r=n.isAuthenticated,p=n.user,E=Object(d.a)(),f=Object(o.a)(E.breakpoints.down("sm")),b=(null===e||void 0===e?void 0:e.length)?e.reduce((function(e,a){return e+a.score}),0)/e.length:0,y=function(){t.push("/registration")},w=c.a.createElement(i.a,{href:"https://github.com/which-ecosystem"},"GitHub"),O=c.a.createElement(i.a,{href:"https://www.typescriptlang.org/"},"Typescript"),x=c.a.createElement(i.a,{href:"https://reactjs.org/"},"React"),F=c.a.createElement(i.a,{href:"https://feathersjs.com"},"Feathers"),N=c.a.createElement(i.a,{href:"https://material-ui.com"},"Material-UI"),z=c.a.createElement(i.a,{href:"mailto: eug-vs@keemail.me"},"eug-vs@keemail.me"),S=c.a.createElement("div",{className:a.reviews},null===e||void 0===e?void 0:e.map((function(e){return c.a.createElement(k,{feedback:e})}))),W=e&&e.findIndex((function(e){return e.author._id===(null===p||void 0===p?void 0:p._id)}))>=0?c.a.createElement("p",null,"You have already left feedback for this version. If you have more to say, please open GitHub issue or contact us directly via email: ",z,". Alternatively, you can just wait for another application patch to come out."):c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Here you can share your thougts about Which with us! Note that you can ony leave feedback once per application version (there will be plenty of them later)."),r?c.a.createElement(C,null):c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null," You must be authorized to leave feedback."),c.a.createElement(s.a,{variant:"outlined",color:"primary",onClick:y},"sign in")));return c.a.createElement("div",{className:a.root},c.a.createElement(u.a,{container:!0,spacing:4},c.a.createElement(u.a,{item:!0,xs:12,md:4},c.a.createElement(u.a,{container:!0,direction:"column",spacing:1,alignItems:"center"},c.a.createElement(u.a,{item:!0},c.a.createElement(j.a,{src:"".concat("","/which-logo-512.png"),alt:"logo",className:a.logo})),c.a.createElement(u.a,{item:!0},0!==b&&c.a.createElement(v.a,{value:b,readOnly:!0,size:"large"})),c.a.createElement(u.a,{item:!0},0!==b&&c.a.createElement(m.a,{variant:"h5",className:a.score},"User score: ",b.toFixed(1)))),f||S),c.a.createElement(u.a,{item:!0,xs:12,md:5},c.a.createElement(u.a,{container:!0,direction:"column",spacing:6},c.a.createElement(u.a,{item:!0},c.a.createElement(m.a,{variant:"h4"}," Which one to choose? "),c.a.createElement(h.a,null),c.a.createElement(m.a,null,c.a.createElement("p",null,"Have you ever found yourself stuck between two options, not being able to choose any? This is exactly the problem we are going to solve!"),c.a.createElement("p",null,"Share your minor everyday uncertainties with the whole world and see what others think!"),c.a.createElement(s.a,{variant:"contained",color:"primary",size:"large",onClick:function(){t.push("/feed")}},"let's go!"),!r&&c.a.createElement(s.a,{variant:"outlined",color:"primary",size:"large",className:a.signup,onClick:y},"sign up"))),c.a.createElement(u.a,{item:!0},c.a.createElement(m.a,{variant:"h4"}," About the project "),c.a.createElement(h.a,null),c.a.createElement(m.a,null,c.a.createElement("p",null,"The project is written in ",O," and features ",x,", ",F,", and ",N,". It is currently open-source and you can visit our ",w," (make sure to star our repositories)!"),c.a.createElement("p",null,"We encourage any developer to check it out. Feel free to open issues and create Pull Requests!"),c.a.createElement("p",null,"All the development process is being tracked on the KanBan board (thanks GitHub). You can always check it to see what is the current state of the project."),c.a.createElement(s.a,{variant:"outlined",color:"primary",startIcon:c.a.createElement(g.a,null),href:"https://github.com/orgs/which-ecosystem/projects/1"},"track our progress"))),c.a.createElement(u.a,{item:!0},c.a.createElement(m.a,{variant:"h4"}," Leave feedback "),c.a.createElement(h.a,null),c.a.createElement(m.a,null,W)),f&&c.a.createElement(u.a,{item:!0},S)))))}}}]);
//# sourceMappingURL=11.a589b448.chunk.js.map
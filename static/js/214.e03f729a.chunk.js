"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[214],{120:function(e,n){n.Z={name:"",number:""}},1214:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var a=t(9434),r=t(120),s="form_form__v9NsD",c="form_btn_form__fNy-R",i=t(2115),u=t(184),o=function(){var e=(0,a.v9)((function(e){return e.contacts.items})),n=(0,a.I0)(),t=function(e){r.Z[e.target.name]=e.target.value,console.log(e.target.value)};return(0,u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(t){var a=t.name;if(e.find((function(e){return e.name===a})))alert("".concat(a," is already in contacts"));else{var r=t.number,s=(0,i.v6)({name:a,number:r});n(s)}}(r.Z),t.target.reset()},className:s,children:[(0,u.jsx)("label",{children:"Name"}),(0,u.jsx)("input",{type:"text",name:"name",placeholder:"Enter the name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:t}),(0,u.jsx)("label",{children:"Number"}),(0,u.jsx)("input",{type:"tel",name:"number",placeholder:"Enter the number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:t}),(0,u.jsx)("button",{type:"submit",className:c,children:"Add contact"})]})},l=t(1634),m=function(e){return e.filter},d="filter_filter__HJEMj",f=function(){var e=(0,a.v9)(m),n=(0,a.I0)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("label",{className:d,children:["Find contact by name",(0,u.jsx)("input",{type:"text",value:e,onChange:function(e){var t=(0,l.T)(e.target.value);n(t)}})]})})},h=t(2791),b="contactList_list__R0BG5",p="contactList_contact_item__vjYhh",v="contactList_button__twtQb",_=function(e){var n=e.name,t=e.number,r=e.nameId,s=(0,a.I0)();return(0,u.jsxs)("li",{className:p,children:[(0,u.jsxs)("p",{children:[n,": ",t]}),(0,u.jsx)("button",{className:v,type:"button",onClick:function(){return function(e){var n=(0,i.in)(e);s(n)}(r)},children:"Delete"})]})},x=function(){var e=(0,a.v9)((function(e){return e.contacts.items})),n=(0,a.v9)((function(e){return e.filter})),t=(0,a.I0)();(0,h.useEffect)((function(){t((0,i.CL)())}),[t]);var r=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,u.jsx)("ol",{className:b,children:r.map((function(e){var n=e.id,t=e.name,a=e.number;return(0,u.jsx)(_,{name:t,number:a,nameId:n},n)}))})},j=function(){return(0,u.jsxs)("div",{children:[(0,u.jsx)(o,{}),(0,u.jsx)(f,{}),(0,u.jsx)(x,{})]})}}}]);
//# sourceMappingURL=214.e03f729a.chunk.js.map
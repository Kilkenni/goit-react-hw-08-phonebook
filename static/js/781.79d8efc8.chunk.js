"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[781],{3781:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(4942),s=n(1413),r=n(885),c=n(9434),o=n(2791),i="ContactForm_formAddContact__PiX5x",l="ContactForm_formLabel__TSwxK",u="ContactForm_formInput__GszVU",m="ContactForm_formBtnSubmit__vYcgg",d=n(8001),h=n(9375),_=n(3329),p={name:"",number:""};function b(){var e=(0,o.useState)((0,s.Z)({},p)),t=(0,r.Z)(e,2),n=t[0],b=t[1],x=(0,c.I0)();function f(e){var t=e.currentTarget,r=t.name,c=t.value;b((0,s.Z)((0,s.Z)({},n),{},(0,a.Z)({},r,c)))}var C=(0,c.v9)(h.mW);return(0,_.jsxs)("form",{action:"submit",className:i,onSubmit:function(e){e.preventDefault(),x((0,d.s0)(n)),b((0,s.Z)({},p))},children:[(0,_.jsxs)("label",{className:l,children:["Name",(0,_.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:f,value:n.name,className:u})]}),(0,_.jsxs)("label",{className:l,children:["Phone number",(0,_.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:f,value:n.number,className:u})]}),(0,_.jsx)("button",{type:"submit",className:m,disabled:"adding"===C,children:"adding"===C?"Adding...":"Add contact"})]})}var x="Filter_inputFilter__8QMOp",f=n(1833),C=function(){var e=(0,c.v9)(h.AD),t=(0,c.I0)();return(0,_.jsxs)("label",{children:["Filter contacts:",(0,_.jsx)("input",{type:"text",name:"filter",onChange:function(e){t((0,f.a)(e.currentTarget.value))},value:e,className:x})]})},j="ContactItem_contact__C4k7V",g="ContactItem_contactName__ZAMAK",v=function(e){var t=e.name,n=e.number;e.onDelete;return(0,_.jsxs)("span",{className:j,children:[(0,_.jsxs)("span",{className:g,children:[t," :"]}),n]})},N="ContactList_contactList__UFVCg",A="ContactList_contact__0STHS",F="ContactList_btnDeleteContact__yYG3c",Z=n(1025),k=function(){var e=(0,o.useState)(!1),t=(0,r.Z)(e,2),n=t[0],a=t[1],s=(0,c.v9)(h.AD).toLowerCase(),i=(0,c.I0)(),l=(0,c.v9)(h.a1),u=(0,c.v9)(h.mW);return(0,o.useEffect)((function(){return n||(i((0,d.IY)()),a(!0)),function(){}}),[n,i]),(0,_.jsxs)(_.Fragment,{children:["loading"===u&&(0,_.jsx)("p",{children:"[Loading contacts]"}),l&&0===l.length&&(0,_.jsx)("p",{children:"No contacts so far..."}),l&&l.length>0&&(0,_.jsx)("ul",{className:N,children:l.map((function(e){return e.name.toLowerCase().includes(s)&&(0,_.jsxs)("li",{className:A,children:[(0,_.jsx)(v,{name:e.name,number:e.number}),(0,_.jsx)("button",{type:"button",onClick:function(){return(0,Z.r)(e.id)},className:F,children:"Delete contact"})]},e.id)}))})]})};function w(e){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("h1",{children:"Phonebook"}),(0,_.jsx)(b,{}),(0,_.jsx)("h2",{children:"Contacts"}),(0,_.jsx)(C,{}),(0,_.jsx)(k,{})]})}}}]);
//# sourceMappingURL=781.79d8efc8.chunk.js.map
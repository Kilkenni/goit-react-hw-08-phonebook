"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[781],{3781:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var a=t(4942),s=t(1413),c=t(885),r=t(9434),o=t(2791),i="ContactForm_formAddContact__PiX5x",l="ContactForm_formLabel__TSwxK",u="ContactForm_formInput__GszVU",m="ContactForm_formBtnSubmit__vYcgg",d=t(2770),h=t(9263),_=t(184),p={name:"",phone:""};function x(){var e=(0,o.useState)((0,s.Z)({},p)),n=(0,c.Z)(e,2),t=n[0],x=n[1],b=(0,r.I0)();function C(e){var n=e.currentTarget,c=n.name,r=n.value;x((0,s.Z)((0,s.Z)({},t),{},(0,a.Z)({},c,r)))}var f=(0,r.v9)(h.m);return(0,_.jsxs)("form",{action:"submit",className:i,onSubmit:function(e){e.preventDefault(),b((0,d.Og)(t)),x((0,s.Z)({},p))},children:[(0,_.jsxs)("label",{className:l,children:["Name",(0,_.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:C,value:t.name,className:u})]}),(0,_.jsxs)("label",{className:l,children:["Phone number",(0,_.jsx)("input",{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:C,value:t.phone,className:u})]}),(0,_.jsx)("button",{type:"submit",className:m,disabled:"adding"===f,children:"adding"===f?"Adding...":"Add contact"})]})}var b="Filter_inputFilter__8QMOp",C=t(1833),f=function(){var e=(0,r.v9)(C.AD),n=(0,r.I0)();return(0,_.jsxs)("label",{children:["Filter contacts:",(0,_.jsx)("input",{type:"text",name:"filter",onChange:function(e){n((0,C.Vx)(e.currentTarget.value))},value:e,className:b})]})},g="ContactItem_contact__C4k7V",j="ContactItem_contactName__ZAMAK",v=function(e){var n=e.name,t=e.number;e.onDelete;return(0,_.jsxs)("span",{className:g,children:[(0,_.jsxs)("span",{className:j,children:[n," :"]}),t]})},N="ContactList_contactList__UFVCg",A="ContactList_contact__0STHS",F="ContactList_btnDeleteContact__yYG3c",Z=t(7965),k=function(){var e=(0,r.v9)(C.AD).toLowerCase(),n=(0,r.I0)(),t=(0,r.v9)(Z.a1),a=(0,r.v9)(h.m);return t||n((0,d.g6)()),(0,_.jsxs)(_.Fragment,{children:["loading"===a&&(0,_.jsx)("p",{children:"[Loading contacts]"}),t&&0===t.length&&(0,_.jsx)("p",{children:"No contacts so far..."}),t&&t.length>0&&(0,_.jsx)("ul",{className:N,children:t.map((function(t){return t.name.toLowerCase().includes(e)&&(0,_.jsxs)("li",{className:A,children:[(0,_.jsx)(v,{name:t.name,number:t.phone}),(0,_.jsx)("button",{type:"button",onClick:function(){return n((0,d.e4)(t.id))},className:F,children:"Delete contact"})]},t.id)}))})]})};function w(e){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("h1",{children:"Phonebook"}),(0,_.jsx)(x,{}),(0,_.jsx)("h2",{children:"Contacts"}),(0,_.jsx)(f,{}),(0,_.jsx)(k,{})]})}}}]);
//# sourceMappingURL=781.875a0861.chunk.js.map
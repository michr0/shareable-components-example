import { r as registerInstance, h } from './index-577d973c.js';

const myComponentCss = ":host{display:block}.header{height:80px;border-bottom:2px solid purple;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;padding:10px 100px}.header__logo{color:blueviolet;display:block;-ms-flex:1;flex:1;font-family:Helvetica;font-size:48px;-ms-flex-item-align:center;align-self:center;text-decoration:none;font-weight:bold}.header__linkList{display:-ms-flexbox;display:flex;-ms-flex:9;flex:9;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}.header__linkList ul{list-style-type:none;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;margin:0}.header__linkList li{-ms-flex:1;flex:1;font-size:18px;padding:0 10px}.header__linkList li a{color:black;font-weight:bolder;text-decoration:none;font-family:Helvetica}.header__linkList li a:hover{color:darkslategrey}";

const links = [
    {
        url: 'www.google.com',
        name: 'Home'
    },
    {
        url: 'www.google.com',
        name: 'About'
    },
    {
        url: 'www.google.com',
        name: 'Support'
    },
    {
        url: 'www.google.com',
        name: 'Contact'
    },
];
const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "header" }, h("a", { class: "header__logo", href: "http://google.com" }, "LOGO"), h("nav", { class: "header__linkList" }, h("ul", null, links.map((link) => (h("li", null, h("a", { href: link.url }, link.name))))))));
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };

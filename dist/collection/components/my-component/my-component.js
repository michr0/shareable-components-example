import { Component, h, } from '@stencil/core';
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
export class MyComponent {
    render() {
        return (h("div", { class: "header" },
            h("a", { class: "header__logo", href: "http://google.com" }, "LOGO"),
            h("nav", { class: "header__linkList" },
                h("ul", null, links.map((link) => (h("li", null,
                    h("a", { href: link.url }, link.name))))))));
    }
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["my-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["my-component.css"]
    }; }
}

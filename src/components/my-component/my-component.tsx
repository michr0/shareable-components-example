import { Component, h, } from '@stencil/core';

interface Link {
  url: string,
  name: string
}

const links:Array<Link> = [
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

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  render() {
    return (
      <div class="header">
        <a  class="header__logo" href="http://google.com">
          LOGO
        </a>
        <nav class="header__linkList">
          <ul>
            {links.map((link) => (
              <li><a href={link.url}>{link.name}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

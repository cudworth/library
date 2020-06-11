import View from './view';
import Style from './style';
import { lorem } from './misc';

const myStyle = Style();
myStyle.addLink('../assets/reset.css');
myStyle.addLink('../assets/style.css');

const myView = View();

myView.setTitle('Library Testing Page');
myView.setTextContent('header', 'Library Testing');
myView.createNavBar('footer');
myView.createNavLink('link 1', () => null);
myView.createNavLink('link 2', () => null);
myView.createNavLink('link 3', () => null);

lorem.forEach((paragraph) => {
  myView.createParagraph('body', paragraph);
});

function hello() {}
const listItems = ['Menu Item #1', 'Menu Item #2', 'Menu Item #3'];
const clickFn = [hello, hello, hello];
myView.createDropMenu('body', 'Hamburger Menu', listItems, clickFn);

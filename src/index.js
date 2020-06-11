import View from './view';
import Style from './style';
import { lorem } from './misc';

const myStyle = Style();
myStyle.addLink('../assets/reset.css');
myStyle.addLink('../assets/style.css');

const myView = View();

myView.setTitle('Library Testing');
myView.createNavBar();
myView.createNavLink('link 1', () => null);
const [div, link] = myView.createNavLink('link 2', () => null);
myView.createNavLink('link 3', () => null);

function hello(e) {
  console.log(e.target);
}
const listItems = ['Menu Item #1', 'Menu Item #2', 'Menu Item #3'];
const clickFn = [hello, hello, hello];

const id = myView.createDropMenu(listItems, clickFn, div);

lorem.forEach((paragraph) => {
  myView.createParagraph(paragraph);
});

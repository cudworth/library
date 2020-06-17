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

function hello(e) {
  console.log(e.target);
}

const menuOptions = [];
for (let i = 1; i < 6; i += 1) {
  menuOptions.push({
    icon: null,
    text: 'menu option',
    fn: hello,
  });
}

myView.createDropMenu('body', 'Hamburger Menu', menuOptions);
myView.createDrawer('header', 'DRAWER BUTTON', 'Drawer Menu', menuOptions);

const images = [
  '../assets/images/image_1.jpg',
  '../assets/images/image_2.jpg',
  '../assets/images/image_3.jpg',
  '../assets/images/image_4.jpg',
];
myView.createCarousel('header', '800px', '600px', images);

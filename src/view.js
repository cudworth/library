import { titleCase } from './misc';

function View() {
  const self = {};

  function init() {
    ['root', 'header', 'body', 'footer'].forEach((block) => {
      self[block] = document.createElement('div');
      self[block].id = block;
    });
    document.body.append(self.root);
    self.root.append(self.header, self.body, self.footer);
  }

  /*
  function drawForm(keys, obj) {
    const form = createAndAppendElement(self.content, 'form', {});
    const ol = createAndAppendElement(form, 'ol', {});
    keys.forEach((key) => {
      const li = createAndAppendElement(ol, 'li', {});
      const label = createAndAppendElement(li, 'label', { for: key });
      label.textContent = titleCase(key);
      const input = createAndAppendElement(li, 'input', {
        name: key,
        type: 'text',
      });
      input.value = obj[key];
    });
  }

  function readForm() {
    const obj = {};
    const form = document.querySelector('form');
    const nodes = form.querySelectorAll('input');
    nodes.forEach((node) => {
      const key = node.getAttribute('name');
      obj[key] = node.value;
    });
    return obj;
  }
  */

  function clear(block) {
    while (self[block].lastChild) {
      self[block].lastChild.remove();
    }
  }

  function setTitle(string) {
    document.title = string;
  }

  function setTextContent(block, string) {
    self[block].textContent = string;
  }

  function createParagraph(block, string) {
    const p = document.createElement('p');
    p.textContent = string;
    self[block].append(p);
  }

  function drawCard(block, keys, obj, onClick) {
    const div = document.createElement('div');
    div.class = 'card';
    div.addEventListener('click', () => onClick);
    keys.forEach((key) => {
      const span = document.createElement('span');
      span.class = 'field';
      span.textContent = `${titleCase(key)}: ${obj[key]}`;
      div.append(span);
    });
    self[block].append(div);
  }

  /*
  function drawDetailCard(keys, obj) {
    const card = createAndAppendElement(self.content, 'div', {
      class: 'detail_card',
    });
    keys.forEach((key) => {
      const div = createAndAppendElement(card, 'div', { class: 'field' });
      div.textContent = `${titleCase(key)}: ${obj[key]}`;
    });
  }
  */

  function drawButton(block, text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', () => onClick);
    self[block].append(button);
  }

  function createNavBar(block) {
    self.navbar = document.createElement('div');
    self.navbar.id = 'navbar';
    self[block].append(self.navbar);
  }

  function createNavLink(text, onClick) {
    const div = document.createElement('div');
    div.class = 'navlink';
    div.textContent = text;
    div.addEventListener('click', () => onClick);
    self.navbar.append(div);
  }

  function createDropMenu(block, title, menuItems, onClick) {
    const menu = document.createElement('div');
    menu.setAttribute('class', 'drop_menu');
    menu.textContent = title;

    const contents = document.createElement('div');
    contents.setAttribute('class', 'drop_menu_hidden');

    menu.addEventListener('mouseover', () => {
      contents.setAttribute('class', 'drop_menu_visible');
    });

    menu.addEventListener('mouseout', () => {
      contents.setAttribute('class', 'drop_menu_hidden');
    });

    for (let i = 0; i < menuItems.length; i += 1) {
      const item = document.createElement('div');
      item.textContent = menuItems[i];
      item.setAttribute('class', 'drop_menu_content');
      item.addEventListener('click', onClick[i]);
      contents.append(item);
    }

    menu.append(contents);
    self[block].append(menu);
  }

  function createDrawer(block, contents, onClickFn) {
    const chest = document.createElement('div');
  }

  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key.toString(), attributes[key]);
    });
  }

  init();

  return {
    clear,
    setTextContent,
    setTitle,
    drawCard,
    drawButton,
    createParagraph,
    createNavBar,
    createNavLink,
    createDropMenu,
  };
}

export default View;

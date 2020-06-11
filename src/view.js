import { createAndAppendElement, titleCase, uniqueNumericString } from './misc';

function View() {
  const self = {};

  function init() {
    self.parent = document.body;
    self.root = createAndAppendElement(self.parent, 'div', { id: 'root' });
    self.drop_menus = {};
    // self.header = createAndAppendElement(self.root, 'div', { id: 'header' });
    // self.content = createAndAppendElement(self.root, 'div', { id: 'content' });
  }

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

  function clear() {
    while (self.content.lastChild) {
      self.content.lastChild.remove();
    }
  }

  function setTitle(string) {
    self.title = string;
    document.title = string;
  }

  function setHeader(string) {
    self.header.textContent = string;
  }

  function createParagraph(string, parent = self.root, attributes = {}) {
    const p = createAndAppendElement(parent, 'p', attributes);
    p.textContent = string;
  }

  function drawCard(keys, obj, onClick) {
    const card = createAndAppendElement(self.content, 'div', { class: 'card' });
    card.addEventListener('click', () => onClick);
    keys.forEach((key) => {
      const span = createAndAppendElement(card, 'span', { class: 'field' });
      span.textContent = `${titleCase(key)}: ${obj[key]}`;
    });
  }

  function drawDetailCard(keys, obj) {
    const card = createAndAppendElement(self.content, 'div', {
      class: 'detail_card',
    });
    keys.forEach((key) => {
      const div = createAndAppendElement(card, 'div', { class: 'field' });
      div.textContent = `${titleCase(key)}: ${obj[key]}`;
    });
  }

  function drawButton(text, onClick) {
    const button = createAndAppendElement(self.content, 'button', {});
    button.textContent = text;
    button.addEventListener('click', () => onClick);
  }

  function createNavBar(parent = self.root) {
    self.navbar = createAndAppendElement(parent, 'div', { id: 'navbar' });
  }

  function createNavLink(text, onClick, attributes = { class: 'navlink' }) {
    const div = createAndAppendElement(self.navbar, 'div', attributes);
    const link = createAndAppendElement(div, 'a', attributes);
    link.textContent = text;
    link.addEventListener('click', () => onClick());
    return [div, link];
  }

  function createDropMenu(menuItems, onClick, parent = self.root) {
    const id = uniqueNumericString(Object.keys(self.drop_menus));

    const menu = createAndAppendElement(parent, 'div', {
      class: 'drop_menu_hidden',
    });

    parent.style.position = 'relative';

    parent.addEventListener('mouseover', () => {
      menu.setAttribute('class', 'drop_menu_visible');
    });

    parent.addEventListener('mouseout', () => {
      menu.setAttribute('class', 'drop_menu_hidden');
    });

    for (let i = 0; i < menuItems.length; i += 1) {
      const item = createAndAppendElement(menu, 'div', {});
      item.textContent = menuItems[i];
      item.setAttribute('class', 'drop_menu_content');
      item.addEventListener('click', onClick[i]);
    }
    self.drop_menus[id] = menu;
    return id;
  }

  function deleteDropMenu(id) {
    delete self.drop_menus[id];
  }

  init();

  return {
    clear,
    drawForm,
    readForm,
    setTitle,
    setHeader,
    drawCard,
    drawDetailCard,
    drawButton,
    createParagraph,
    createNavBar,
    createNavLink,
    createDropMenu,
    deleteDropMenu,
  };
}

export default View;

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
    div.className = 'card';
    div.addEventListener('click', () => onClick);
    keys.forEach((key) => {
      const span = document.createElement('span');
      span.className = 'field';
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
    div.className = 'navlink';
    div.textContent = text;
    div.addEventListener('click', () => onClick);
    self.navbar.append(div);
  }

  function createDropMenu(block, title, options) {
    const menu = document.createElement('div');
    menu.className = 'drop_menu';
    menu.textContent = title;

    const contents = document.createElement('div');
    contents.className = 'hidden';

    menu.addEventListener('mouseover', () => {
      contents.className = 'drop_menu_visible';
    });

    menu.addEventListener('mouseout', () => {
      contents.className = 'hidden';
    });

    options.forEach((option) => {
      const div = document.createElement('div');
      div.setAttribute('class', 'drop_menu_content');
      div.textContent = option.text;
      div.addEventListener('click', option.fn);
      contents.append(div);
    });

    menu.append(contents);
    self[block].append(menu);
  }

  function createDrawer(block, btnText, menuTitle, items) {
    const drawerBtn = document.createElement('button');
    drawerBtn.className = 'drawer_btn';
    drawerBtn.textContent = btnText;
    drawerBtn.addEventListener('click', (e) => {
      if (e.target === drawerBtn) {
        drawer.setAttribute('class', 'drawer_visible');
      }
    });

    const drawer = document.createElement('div');
    drawer.className = 'hidden';
    self.body.append(drawer);

    const titleBar = document.createElement('div');
    titleBar.className = 'drawer_title_bar';
    titleBar.textContent = menuTitle;
    drawer.append(titleBar);

    const closeBtn = document.createElement('button');
    closeBtn.className = 'drawer_close_btn';
    closeBtn.textContent = 'Close';
    closeBtn.addEventListener('click', (e) => {
      if (e.target === closeBtn) {
        drawer.className = 'hidden';
      }
    });
    drawer.append(closeBtn);

    const contents = document.createElement('div');
    contents.className = 'drawer_contents';
    drawer.append(contents);

    items.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'drawer_card';
      card.textContent = item.text;
      card.addEventListener('click', (e) => item.fn(e));
      contents.append(card);
    });

    self[block].append(drawerBtn);
  }

  function createCarousel(block, width, height, images) {
    const carousel = {};

    ['frame', 'slides', 'prevBtn', 'nextBtn', 'navBar'].forEach((element) => {
      carousel[element] = document.createElement('div');
      carousel[element].className = `carousel_${element}`;
    });

    carousel.frame.append(
      carousel.slides,
      carousel.prevBtn,
      carousel.nextBtn,
      carousel.navBar
    );

    carousel.prevBtn.addEventListener('click', () => prevSlide());

    carousel.nextBtn.addEventListener('click', () => nextSlide());

    carousel.frame.style.width = width;
    carousel.frame.style.height = height;

    const navLinkWidth = `${(1 / images.length) * 100}%`;

    for (let i = 0; i < images.length; i += 1) {
      const slide = document.createElement('img');
      slide.className = 'carousel_slide';
      slide.src = images[i];
      slide.style.width = width;
      slide.style.height = height;
      carousel.slides.append(slide);

      const navLink = document.createElement('div');
      navLink.className = 'carousel_navLink';
      navLink.style.width = navLinkWidth;
      navLink.addEventListener('click', () => {
        changeSlide(i);
      });

      const icon = carouselIcon(10);
      icon.className = 'carousel_icon';

      navLink.append(icon);

      carousel.navBar.append(navLink);
    }

    carousel.currentSlide = 0;

    function changeSlide(index) {
      carousel.currentSlide = index;
      carousel.slides.style.left = `${-100 * index}%`;
    }

    function nextSlide() {
      if (carousel.currentSlide < images.length - 1) {
        changeSlide(carousel.currentSlide + 1);
      }
    }

    function prevSlide() {
      if (carousel.currentSlide > 0) {
        changeSlide(carousel.currentSlide - 1);
      }
    }

    carousel.frame.addEventListener('mouseover', (e) => {
      carousel.navBar.className = 'carousel_navBar';
    });

    carousel.frame.addEventListener('mouseout', (e) => {
      carousel.navBar.className = 'hidden';
    });

    function carouselIcon(radius) {
      const canvas = document.createElement('canvas');
      canvas.style.width = `${2 * radius}px`;
      canvas.style.height = `${2 * radius}px`;

      //canvas.style.width = '200px';
      //canvas.style.height = '200px';

      const ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.arc(radius, radius, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;

      ctx.stroke();
      ctx.fillStyle = 'black';
      ctx.fill();
      return canvas;
    }

    self[block].append(carousel.frame);
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
    createDrawer,
    createCarousel,
  };
}

export default View;

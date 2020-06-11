function Style() {
  function addLink(file) {
    const link = document.createElement('link');
    link.setAttribute('type', 'text/css');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', file);
    document.head.append(link);
  }

  return {
    addLink,
  };
}

export default Style;

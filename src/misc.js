function uniqueNumericString(existing, digits = 4) {
  function getNumericString(length) {
    const array = [];
    while (array.length < length) {
      array.push(Math.floor(10 * Math.random()));
    }
    return array.join('');
  }

  let numericString;
  let iterate = true;
  while (iterate) {
    numericString = getNumericString(digits);
    if (!existing.includes(numericString)) {
      iterate = false;
    }
  }
  return numericString;
}

function createAndAppendElement(parent, type, attributes) {
  const child = document.createElement(type);
  parent.append(child);
  Object.keys(attributes).forEach((key) => {
    child.setAttribute(key.toString(), attributes[key]);
  });
  return child;
}

function titleCase(string) {
  const words = string.toLowerCase().split('_');
  const array = [];
  words.forEach((word) => {
    array.push(word.charAt(0).toUpperCase() + word.slice(1));
  });
  return array.join(' ');
}

const lorem = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue, arcu et mollis consectetur, ante est elementum eros, a aliquet est felis ut nisi. Maecenas viverra imperdiet justo, ac porta orci suscipit euismod. Nunc posuere risus sit amet justo rhoncus, quis ultricies erat faucibus. In consequat metus nec blandit pharetra. Fusce a dui quis ante placerat pharetra. Proin sit amet porta risus. Morbi eget convallis orci. Ut ut egestas lectus. Suspendisse pretium quam nec felis vehicula, ut interdum purus sollicitudin. Proin porta aliquam lectus, ac efficitur sem.',
  'Nulla nec lorem id turpis malesuada venenatis eget sit amet risus. Morbi ac felis ac ligula elementum euismod. Sed quis sapien vel nunc congue ornare eget in lorem. Donec pulvinar ante eget nisl mollis suscipit et a nibh. Cras sollicitudin ligula eget facilisis rhoncus. Donec libero ligula, egestas vel tincidunt quis, sagittis at neque. Aliquam erat volutpat. Aliquam at ex nec lacus interdum molestie. Vivamus consequat mattis consectetur. Pellentesque viverra ornare commodo. Nullam ut semper orci. Cras quis risus pretium, vestibulum felis id, fermentum purus. Duis elit metus, cursus vulputate porttitor pretium, tempus at leo. Ut ac felis facilisis, elementum magna sed, viverra sapien. Aliquam malesuada hendrerit diam, non cursus tellus vehicula sed.',
  'Mauris euismod ligula lorem, a bibendum enim convallis nec. Aliquam erat volutpat. Nunc purus nunc, feugiat ac quam sit amet, finibus porttitor lectus. Curabitur rhoncus eros non eros tempor, vel aliquet augue commodo. Praesent eu malesuada quam. Cras semper sagittis risus a convallis. Etiam at nulla convallis, eleifend sem at, lacinia ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed lacinia elit est, ac maximus dolor pellentesque eu. Nam nec ultrices tortor. Suspendisse egestas arcu a massa imperdiet, non aliquam neque fringilla.',
  'Fusce dignissim hendrerit vulputate. Morbi massa lorem, rhoncus vel sapien vitae, blandit placerat sem. Morbi dui dolor, vehicula eu ex tincidunt, scelerisque varius augue. Proin pulvinar, nunc eu pretium mollis, lectus turpis tristique arcu, eu pulvinar nunc nunc interdum lorem. Vivamus nec lobortis orci, id porttitor risus. Maecenas eleifend fermentum arcu, sit amet bibendum tortor sagittis sed. In consequat feugiat turpis.',
  'Cras id leo convallis, dignissim tellus at, sollicitudin turpis. Nam vel luctus lacus. Vivamus et lacus ut nunc commodo iaculis at id eros. Quisque eget leo congue urna cursus scelerisque sit amet in leo. Praesent suscipit ipsum a ligula consectetur eleifend. Quisque luctus ante quis finibus tristique. Vivamus semper vulputate enim, non imperdiet purus tempor et. Nullam in sapien ut nisi sagittis maximus quis at enim. Phasellus cursus arcu justo, id congue lectus pellentesque ac. Cras pulvinar, risus nec efficitur vestibulum, quam turpis tincidunt augue, eu porta metus augue sit amet leo. Vestibulum feugiat sem ac nibh ultricies, at feugiat eros fringilla. Vivamus tincidunt ante facilisis nulla faucibus, nec vestibulum tellus hendrerit.',
];

export { uniqueNumericString, createAndAppendElement, titleCase, lorem };

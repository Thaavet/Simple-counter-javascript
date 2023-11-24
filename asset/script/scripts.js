function createElement(options) {
  let element = document.createElement(options.tagName);
  if (options.className) {
    element.className = options.className;
  }
  if (options.id) {
    element.id = options.id;
  }
  if (options.textContent) {
    element.textContent = options.textContent;
  }
  if (options.children) {
    for (let child of options.children) {
      element.appendChild(createElement(child));
    }
  }
  return element;
}

let container = createElement({
  tagName: 'div',
  className: 'container',
  children: [
    {
      tagName: 'div',
      className: 'counter-body',
      children: [
        {
          tagName: 'h1',
          id: 'count',
          textContent: '0'
        },
        {
          tagName: 'div',
          id: 'counter-button',
          className: 'counter-button',
          children: [
            {
              tagName: 'button',
              id: 'minus',
              textContent: '-'
            },
            {
              tagName: 'button',
              id: 'reset',
              textContent: 'Reset'
            },
            {
              tagName: 'button',
              id: 'plus',
              textContent: '+'
            }
          ]
        }
      ]
    }
  ]
});

document.body.appendChild(container);

let value = 0;
const total = document.getElementById('count');
const counterButton = document.getElementById('counter-button');

counterButton.addEventListener('click', (event) => {
  const target = event.target;

  if (target.id === 'plus') {
    value++;
  } else if (target.id === 'minus') {
    value--;
  } else if (target.id === 'reset') {
    value = 0;
  }

  total.textContent = value;
});

//create element function
export const makeElement = (tagName, options) => {
  let element = document.createElement(tagName);

  if (options) {
    //add classes to elements

    if (typeof options.classlist === 'object') {
      element.classList.add(...options.classlist);
    } else if (typeof options.classlist === 'string') {

      element.classList.add(options.classlist);
    };

    //add id
    if (options.id) {
      element.id = options.id;

    }
    //add content
    if (typeof options.content === 'string') {
      element.innerHTML = options.content;
    } else if (typeof options.content === 'object') {

      element.appendChild(options.content)

    } 
  
  }
  return element;
}

//render function

export const render = (parent, element) => {

  if (typeof element === 'string') {
    parent.innerHTML += element;
  }
  if (Array.isArray(element) === true) {
    element.forEach((item) => {
      parent.appendChild(item)
    })
  } else if (typeof element === 'object') {
    parent.appendChild(element);

  }

}
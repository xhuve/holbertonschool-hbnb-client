function createElementWithText(type, textContent="") {
    const element = document.createElement(type);
    element.textContent = textContent;
    return element;
  }

export default createElementWithText
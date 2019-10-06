// Helper functions
const handleStyleProperties = (components, property, value) => components.forEach((element) => element.style[property] = value)
const generateCard = (text) => `<div class="card__body">${text}</div>`

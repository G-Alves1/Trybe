window.onload = function() {
  function setBackgroundColor(color) {
    let content = document.querySelector(".content")
    content.style.backgroundColor = color
    localStorage.setItem("backgroundColor", color)
  }

  function setFontColor(color) {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.color = color
    }
    localStorage.setItem("fontColor", color)
  }

  function setFontSize(size) {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontSize = size
    }
    localStorage.setItem("fontSize", size)
  }

  function setLineHeight(height) {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.lineHeight = height
    }
    localStorage.setItem("lineHeight", height)
  }

  function setFontFamily(family) {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontFamily = family
    }
    localStorage.setItem("fontFamily", family)
  }

  let backgroundColorButtons = document.querySelectorAll("#background-color>button")
  for (let index = 0; index < backgroundColorButtons.length; index += 1) {
    backgroundColorButtons[index].addEventListener("click", function(event) {
      setBackgroundColor(event.target.innerHTML)
    })
  }

  let fontColorButtons = document.querySelectorAll("#font-color>button")
  for (let index = 0; index < fontColorButtons.length; index += 1) {
    fontColorButtons[index].addEventListener("click", function(event) {
      setFontColor(event.target.innerHTML)
    })
  }

  let fontSizeButtons = document.querySelectorAll("#font-size>button")
  for (let index = 0; index < fontSizeButtons.length; index += 1) {
    fontSizeButtons[index].addEventListener("click", function(event) {
      setFontSize(event.target.innerHTML)
    })
  }

  let lineHeightButtons = document.querySelectorAll("#line-height>button")
  for (let index = 0; index < lineHeightButtons.length; index += 1) {
    lineHeightButtons[index].addEventListener("click", function(event) {
      setLineHeight(event.target.innerHTML)
    })
  }

  let fontFamilyButtons = document.querySelectorAll("#font-family>button")
  for (let index = 0; index < fontFamilyButtons.length; index += 1) {
    fontFamilyButtons[index].addEventListener("click", function(event) {
      setFontFamily(event.target.innerHTML)
    })
  }

  function initialize() {
    let backgroundColor = localStorage.getItem("backgroundColor")
    if (backgroundColor) setBackgroundColor(backgroundColor)

    let fontColor = localStorage.getItem("fontColor")
    if (fontColor) setFontColor(fontColor)

    let fontSize = localStorage.getItem("fontSize")
    if (fontSize) setFontSize(fontSize)

    let lineHeight = localStorage.getItem("lineHeight")
    if (lineHeight) setLineHeight(lineHeight)

    let fontFamily = localStorage.getItem("fontFamily")
    if (fontFamily) setFontFamily(fontFamily)
  }

  initialize()
}
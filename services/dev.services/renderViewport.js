const elBody = document.querySelector('body')
let gViewportWidth = window.innerWidth
const viewportEl = document.createElement('div')
viewportEl.classList.add('viewport')
elBody.appendChild(viewportEl)

const styleEl = document.createElement('style')
styleEl.innerHTML = `
  .viewport {
    position: fixed;
    top: 0;
    right: 0;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 14px;
  }
`

document.head.appendChild(styleEl)

function renderViewPort() {
  viewportEl.innerText = `Height: ${gViewportHeight}px\nWidth: ${gViewportWidth}px`
}

function onResize() {
  gViewportWidth = window.innerWidth;
  renderViewPort()
}

/**
 * The requestAnimationFrame function is a built-in method of the window object in modern web browsers. It is used to request that the browser call a specified function to update an animation before the next repaint.

The requestAnimationFrame function takes a callback function as an argument, which is called by the browser before the next repaint. This allows you to synchronize your animation with the browser's rendering pipeline and create smooth, efficient animations.
 */
window.addEventListener('resize', () => {
  requestAnimationFrame(onResize)
})

onResize()
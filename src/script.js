const elements = {

  color1swatch: document.querySelector('.color-1'),

  color1input: document.querySelector('#color1input'),

  color2swatch: document.querySelector('.color-2'),

  color2input: document.querySelector('#color2input'),

  mixed: document.querySelector('.colors-mixed'),

  mixresults: document.querySelector('#mix-results'),

  slider: document.querySelector('#mix-amount'),

  select: document.querySelector('#in-colorspace'),

  interp: document.querySelector('#hue-interpolation'),

  code: document.querySelector('#codepreview'),

  main: document.querySelector('main'),

}

const cylindericalSpaces = ['lch', 'oklch', 'hsl', 'hwb']

elements.slider.oninput = e =>

  elements.main.style.setProperty('--color-2-amount', e.target.value + '%')

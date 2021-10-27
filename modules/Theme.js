export default function Theme() {
  const html = document.querySelector('html')
  const toggle = document.querySelector('.theme')
  const themeIcon = toggle.querySelector('span')

  const getStyle = (el, style) =>
    window.getComputedStyle(el).getPropertyValue(style).trim()

  const transformKey = key => '--' + key.replace(/([A-Z])/, '-$1').toLowerCase()

  const changeColors = theme => {
    Object.keys(theme).map(key =>
      html.style.setProperty(transformKey(key), theme[key])
    )
  }

  const darkTheme = {
    darkWhite: getStyle(html, '--dark-white'),
    darkGray: getStyle(html, '--dark-gray'),
    darkBlack: getStyle(html, '--dark-black'),
    darkColor1: getStyle(html, '--dark-color1'),
    darkColor2: getStyle(html, '--dark-color2'),
    darkColor3: getStyle(html, '--dark-color3')
  }

  const lightTheme = {
    darkWhite: '#53565a',
    darkGray: '#a3a3a3',
    darkBlack: '#ccc',
    darkColor1: '#F1F2F6',
    darkColor2: '#ffffff',
    darkColor3: '#f8f8f8'
  }

  const changeTheme = (theme, color) => {
    changeColors(theme)
    if (color === 'white') {
      themeIcon.innerText = 'wb_sunny'
      localStorage.setItem('theme', 'black')
    } else {
      themeIcon.innerText = 'dark_mode'
      localStorage.setItem('theme', 'white')
    }
  }

  toggle.addEventListener('click', () => {
    if (themeIcon.innerText === 'dark_mode') {
      changeTheme(darkTheme, 'white')
    } else {
      changeTheme(lightTheme, 'black')
    }
  })

  const currentTheme = localStorage.getItem('theme')
  currentTheme === 'white'
    ? changeTheme(lightTheme, 'black')
    : changeTheme(darkTheme, 'white')
}

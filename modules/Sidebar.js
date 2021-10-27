export default function Sidebar() {
  const sidebar = document.querySelector('#sidebar')
  const sidebarContainer = document.querySelector('#sidebar .container')
  const sidebarNav = document.querySelectorAll('.nav-sidebar li a')
  const closeSidebar = document.querySelector('.close-sidebar')
  const openSidebar = document.querySelector('.open-sidebar')

  const sidebarControl = {
    verify(element, callback) {
      const html = document.documentElement
      const outside = 'data-outside'

      function handleOutsideClick(event) {
        if (!element.contains(event.target) && !openSidebar) {
          element.removeAttribute(outside)
          html.removeEventListener('click', handleOutsideClick)

          callback()
        }
      }

      if (!element.hasAttribute(outside)) {
        setTimeout(() => html.addEventListener('click', handleOutsideClick))
        element.setAttribute(outside, '')
      }
    },

    open() {
      sidebar.classList.add('active')
      sidebarControl.verify(sidebarContainer, sidebarControl.close)
    },

    close() {
      let timer = null

      function intervalClose() {
        if (timer) clearInterval(timer)
        timer = setTimeout(() => {
          sidebar.classList.remove('close')
          sidebar.classList.remove('active')
          timer = null
        }, 650)
        sidebar.classList.add('close')
      }

      intervalClose()
    }
  }

  closeSidebar.addEventListener('click', sidebarControl.close)

  openSidebar.addEventListener('click', sidebarControl.open)

  sidebarNav.forEach(nav => {
    nav.addEventListener('click', ({ target }) => {
      sidebarNav.forEach(nav => nav.classList.remove('active'))
      target.classList.add('active')
    })
  })
}

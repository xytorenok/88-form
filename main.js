const groupList = document.getElementById('groups')

document.addEventListener('click', e => {
  const btn = e.target.closest('button, .button')
  if (!btn) {
    const activeItems = document.querySelectorAll('.active')
    for (const li of activeItems) {
      li.classList.remove('active')
    }
  }
}, true)


groupList.addEventListener('click', e => {
  const btn = e.target.closest('button, .button')
  if (!btn) return

  const activeItems = document.querySelectorAll('.active')
  const li = btn.closest('li')

  const controls = btn.closest('.controls')
  if (controls) {
    const box = controls.previousElementSibling
    box.checked = !box.checked
  }

  if (btn.matches('.up')) {
    li.previousElementSibling?.insertAdjacentElement('beforebegin', li)
  }

  if (btn.matches('.down')) {
    li.nextElementSibling?.insertAdjacentElement('afterend', li)
  }

  if (btn.matches('.in')) {
    li.querySelector('ul').append(activeItems[0])
    li.querySelector('input').checked = true
    return
  }

  for (const li of activeItems) {
    li.classList.remove('active')
  }

  li.classList.add('active')

})



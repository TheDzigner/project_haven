const open_menu = 

document.querySelector('#open_menu')

open_menu.addEventListener('click',()=>{

  document.querySelector('.menu_container').classList.toggle('active')

  if (document.querySelector('.menu_container').classList.contains('active')) {

    open_menu.textContent = 'close'

  }else {

    open_menu.textContent = 'menu'

  }

})

const buttons_filter = 

Array.from(document.querySelectorAll('.buttons_filter_wrapper button'))

const project_cards = 

Array.from(document.querySelectorAll('.project_cards .card'))

let Filterindex = 0 

let activeIndex = 0 

buttons_filter.forEach(button => {

  button.addEventListener('click',function(){

    Filterindex =

    this.getAttribute('data-filter')

   buttons_filter[activeIndex].classList.remove('active')

   activeIndex = buttons_filter.indexOf(this)

    buttons_filter[activeIndex].classList.add('active')

    

    for (var i = 0; i < project_cards.length; i++) {

      if (Filterindex == project_cards[i].getAttribute('data-filter')) {

       project_cards[i].style.display = 'block'

      } else {

    project_cards[i].style.display = 'none'

      }if (Filterindex == 'all') {

       project_cards[i].style.display = 'block'

      }

    }

    

  })

})


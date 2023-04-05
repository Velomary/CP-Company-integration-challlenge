let bars = document.querySelector('.bars')
let item = document.querySelector('.item')
let liste = document.querySelector('.liste')
let liste_li =document.querySelectorAll('.liste li')

bars.addEventListener('click',()=>{
    liste.classList.toggle('active')
})


liste_li.forEach(item => {
    item.addEventListener('click',()=>{
        liste.classList.toggle("active")
    })
})

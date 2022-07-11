document.querySelector('main').addEventListener('mousemove', function(event) {
    let x = event.clientX
    let y = event.clientY
    // console.log('x : '+x+' y : '+y)
    let cir = document.createElement('div')
    cir.classList.add('circle')
    cir.style.top= y+'px'
    cir.style.left= x+'px'
    document.querySelector('main').appendChild(cir)
    cir.style.animationName = 'anime1'
    function _remove() {
        document.querySelector('main').removeChild(cir)
    }
    setTimeout(_remove, 500)
})
document.querySelector('main').addEventListener('click', function(event) {
    let rand = Math.floor(Math.random()*200)+100
    let x = event.clientX - rand / 2
    let y = event.clientY - rand / 2
    let ink = document.createElement('img')
    ink.src='src/img/ink.png'
    ink.classList.add('ink')
    ink.style.top = y + 'px'
    ink.style.width = rand+'px'
    ink.style.height = rand+'px'
    ink.style.left = x + 'px'
    ink.style.animationName = 'anime2'
    ink.style.transform = 'rotate('+rand+'deg)'
    document.querySelector('main').appendChild(ink)
})

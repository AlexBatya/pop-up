const button = document.querySelector('button')
const article = document.querySelector('article')
const header = document.querySelector('header')

button.onclick = function(event) {
    article.classList.add('popa')
    article.insertAdjacentHTML('afterBegin',`<div class = 'cardPop'>
    <button class = 'X'>X</button>
    </div>`)
    const X =document.querySelector('.X') 
    const popa = document.querySelector('.popa')
        X.onclick = function(event) {
            popa.querySelector('button').remove()    
            article.classList.remove('popa')

        }
        document.addEventListener('keydown', function(event) {
            if (event.keyCode == 27) {
                popa.querySelector('button').remove()    
                article.classList.remove('popa')
        }
    });
}


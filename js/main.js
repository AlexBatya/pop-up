const button = document.querySelector('button')
const article = document.querySelector('article')

button.onclick = function(event) {
    article.classList.add('popa')
    article.insertAdjacentHTML('afterBegin',`<div class = 'cardPop'>
    <button class = 'X'>X</button>
    </div>`)
    const X =document.querySelector('.X') 
    const popa = document.querySelector('.popa')
        X.onclick = function(event) {
            // popa.querySelector('button').remove()    
            article.classList.remove('popa')

        }
}

if(document.querySelector('.popa')) {
    
}
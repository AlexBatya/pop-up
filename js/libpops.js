
export default class PopUp {
    addContent(content){
        return `${content}`
    }
    
    creatPop(elem,classCss,buttonClose){
        return elem.insertAdjacentHTML('afterBegin',`<div class = '${classCss}'>
        <button class = ${buttonClose}>X</button>
        </div>`)
    }

    removePop(elem){
        return elem.remove()
    }
}   
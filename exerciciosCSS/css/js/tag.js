const colors = {
    p: '#388ec',
    div: '#388ec',
    span: '#388ec',
    section: '#388ec',
    ul: '#388ec',
    ol: '#388ec',
    header: '#358ec',
    nav: '#388ec',
    main: '#fffff',
    footer: '#388ec',
    form: '#388ec',
    body: '#388ec',
    padrao: '#388ec',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}


document.querySelectorAll('.tag').forEch(elemento => {
    const name = elemento.tagName.toLowerCase()
    
    elemento.style.borderColo = colors.get(tagName)

    if(!elemento.classList.contains(nolabel)) {
        const label = document.createElement('label')
        lebel.style.backgroundColor = colors.get(tagName)
        lebel.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})
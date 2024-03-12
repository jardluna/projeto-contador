function contar() {
    let ini = window.document.getElementById('txtI')
    let fim = window.document.getElementById('txtF')
    let pas = window.document.getElementById('txtP')
    let res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert(`Por favor, insira todos os dados`)
        res.innerHTML = `Preparando a contagem...`
    } else {
        res.innerHTML = `Contagem: <br>`
        res.style.padding = `5px`
        res.style.fontSize = '1.2em'
        res.style.textAlign = 'center'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        
        if (p <= 0) {
            window.alert(`Passo inválido. Considerando passo 1`)
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `\u{1F449} ${c} `
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` \u{1F449} ${c} `
            }
        }
        res.innerHTML += ` \u{1F3C1} `
    }
}
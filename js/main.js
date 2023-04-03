function consomeApiCorreios(url) {
    const request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function main(el) {
    let input = document.querySelector('.input').value
    let cepDigitado = input;

    let api = consomeApiCorreios(`https://viacep.com.br/ws/${cepDigitado}/json/`);
    let data = JSON.parse(api);
    return criarUlComDados(data);
}

function criarUlComDados(el) {

    let validaImagem = document.querySelector('.cep')
    let retornoValida = document.body.contains(validaImagem)

    if (retornoValida == false) {

        // Criiando os itens
        let liCep = document.querySelector('.lista').appendChild(document.createElement('li')).classList.add('cep')
        let liLogradouro = document.querySelector('.lista').appendChild(document.createElement('li')).classList.add('logradouro')
        let liComplemento = document.querySelector('.lista').appendChild(document.createElement('li')).classList.add('complemento')
        let liBairro = document.querySelector('.lista').appendChild(document.createElement('li')).classList.add('bairro')
        let liLocalidade = document.querySelector('.lista').appendChild(document.createElement('li')).classList.add('localidade')
        let liUf = document.querySelector('.lista').appendChild(document.createElement('li')).classList.add('uf')

        // capturando os itens
        let liCepEl = document.querySelector('.cep')
        liCepEl.innerHTML = `Cep: ${el.cep}`

        let liLogradouroEl = document.querySelector('.logradouro')
        liLogradouroEl.innerHTML = `Logradouro: ${el.logradouro}`

        let liComplementoEl = document.querySelector('.complemento')
        if (el.complemento === ''){
            liComplementoEl.innerHTML = "Complemento: NA"
        } else {
            liComplementoEl.innerHTML = `Complemento: ${el.complemento}`
        }       

        let liBairroEl = document.querySelector('.bairro')
        liBairroEl.innerHTML = `Bairro: ${el.bairro}`

        let liLocalidadeEl = document.querySelector('.localidade')
        liLocalidadeEl.innerHTML = `Localidade: ${el.localidade}`

        let liUfEl = document.querySelector('.uf')
        liUfEl.innerHTML = `Uf: ${el.uf}`


    } else {
        let liCepEl = document.querySelector('.cep')
        liCepEl.innerHTML = `Cep: ${el.cep}`

        let liLogradouroEl = document.querySelector('.logradouro')
        liLogradouroEl.innerHTML = `Logradouro: ${el.logradouro}`

        let liComplementoEl = document.querySelector('.complemento')
        liComplementoEl.innerHTML = `Complemento: ${el.complemento}`

        let liBairroEl = document.querySelector('.bairro')
        liBairroEl.innerHTML = `Bairro: ${el.bairro}`
    }
}
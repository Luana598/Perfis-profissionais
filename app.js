'use strict'

import funcionarios from "./funcionarios.json" with {type: "json"}

console.log(funcionarios.cargo)

function criarPerfil (funcionario){

    const body = document.querySelector('body')

    const conteiner = document.createElement('div')
    conteiner.className = 'conteiner'

    const foto = document.createElement('img')

    const nome = document.createElement('span')
    const cargo = document.createElement('p')

    foto.src = `./img/${funcionario.imagem}`
    nome.textContent = funcionario.nome
    cargo.textContent = funcionario.cargo


    body.appendChild(conteiner)
    conteiner.appendChild(foto)
    conteiner.appendChild(nome)
    conteiner.appendChild(cargo)

}


funcionarios.forEach(criarPerfil)
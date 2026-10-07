/*

    ---AULA DE LISTAS EM JAVASCRIPT---

    lista = ['Omori', 'Mari', 'Hero', 'Kel', 'Aubrey' -----  Declara uma lista
    lista[1] ----- Mostra o componente que está naquele índice
    lista.indexOf('item') ----- Devolve o índice de um componente
    lista.length ----- Devolve o comprimento da lista
    lista.push('item') ----- Adiciona um item no final da lista
    lista.unshift('item') ----- Adiciona um item no início da lista
    lista.pop() ----- Remove o último item da lista
    lista.shift() ----- Remove o primeiro item da lista
    lista.splice(1,1) ----- Remove uma quantidade de itens entre si (ex: remove os itens 3-1)
    lista.includes('item') ----- Declara se o item existe na lista (True ou False)
    lista.join() ----- Escreve todos os itens da lista com algum valor desejado entre eles (ex: ('.') = maçã.banana.melao.uva )

*/ 
lista = []
function AdicionarItem(){

    // Pegando o item do input
    item = document.getElementById('txt').value.toLowerCase().trim()
    document.getElementById('txt').value = ''
    
    // Verificação dos itens
    if( item.length = 0 ){
        alert('Preencha o Campo.')
    }else if( lista.includes(item)){
        alert('Item Repetido')
    }else{
        lista.push(item)
    }

    // Devolvendo a lista pro site
    document.getElementById('p').innerHTML = '<li>'+lista.join('</li><li>')+'</li>'
}

function RemoverItem(){

    // Pegando o item do input
    item = document.getElementById('txt').value.toLowerCase().trim()
    document.getElementById('txt').value = ''

    // Verificar item para a remoção
    if(lista.includes(item)){
        index = lista.indexOf(item)
        lista.splice(index,1)
    }else{
        alert('Item não encontrado.')
    }

    // Devolvendo a lista pro site
    document.getElementById('p').innerHTML = '<li>'+lista.join('</li><li>')+'</li>'
}


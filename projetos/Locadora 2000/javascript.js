function insere(titulo, diretor, data, ator,nota, genero) {

    let tabela = document.getElementById('cadastro');
    let linhas = tabela.rows.length; 
    let inserir = tabela.insertRow(linhas)

    
    // // data edition
    function ano(dt){

    let data = dt.split('-');
    
    let month = data[1].replace('0', '');
    
 
    // // // month array
    let months = ['' ,'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'] 
    
    return (`${data[2]} de ${months[month]} de ${data[0]}`)
    }

    let celCod = inserir.insertCell(0)
    let celTitulo = inserir.insertCell(1)
    let celDiretor = inserir.insertCell(2)
    let celData = inserir.insertCell(3)
    let celGenero = inserir.insertCell(4)
    let celAtor= inserir.insertCell(5)
    let celNota = inserir.insertCell(6)

    celCod.innerHTML = `<b>${(linhas - 7)}</b>`;
    celTitulo.innerHTML = titulo;
    celDiretor.innerHTML = diretor
    celData.innerHTML = ano(data)
    celGenero.innerHTML = genero
    celAtor.innerHTML = ator
    celNota.innerHTML = `${nota}/10`

    console.log(typeof(data))
    console.log(data)
    console.log(ano(data))
}


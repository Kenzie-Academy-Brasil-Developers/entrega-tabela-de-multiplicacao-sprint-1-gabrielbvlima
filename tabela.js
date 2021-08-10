//Tabela de multiplicação principal, setada em 10.
//Abra o console, chame a função e a tabela aparecerá.

console.log('Para exibir a tabela de multiplicação básica apenas chame a função multi10()')
function multi10() {

    let tabela = []
    for (let l = 0; l <= 10; l++) {
        tabela[l] = []
        for (let c = 0; c <= 10; c++) {
            tabela[l][c] = l * c
        }
    }
    console.table(tabela)
}

console.log(' ')

//Tabela de multiplicação bônus, não setada, entre com qualquer número.
//Para escolher o tamanho da tabela digite multi(n), substitua N pelo tamanho da tabela que deseja.

console.log('Para escolher o tamanho da tabela chame a função multi(N), substituindo N pelo número que deseja que a tabela tenha de tamanho.')
function multi(n) {

    let tabela = []
    for (let l = 0; l <= n; l++) {
        tabela[l] = []
        for (let c = 0; c <= n; c++) {
            tabela[l][c] = l * c
        }
    }
    console.table(tabela)
}

console.log(' ')
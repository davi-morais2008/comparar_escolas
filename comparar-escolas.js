

/* 🚨NÃO ALTERAR A CLASSE 🚨 */

class Senai {
  constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
    this.codigo = codigo;
    this.cidade = cidade;
    this.anoConstrucao = anoConstrucao;
    this.qtdeCursos = qtdeCursos;

    this.idade = new Date().getFullYear() - anoConstrucao;
    this.statusFuncionamento = false;
  }

  abrirEscola() {
    this.statusFuncionamento = true;
  }

  fecharEscola() {
    this.statusFuncionamento = false;
  }
}

/* 🚨NÃO ALTERAR A CLASSE 🚨 */
let unidadeA
let unidadeB


/* SUGESTÃO DE LÓGICA PARA O DESENVOLVIMENTO */


/* ===== OBTER ELEMENTOS ===== */
const btnInstanciarA = document.querySelector('.unidadeA__instanciar');
const btnAbrirA = document.querySelector('.unidadeA__abrir');
const btnFecharA = document.querySelector('.unidadeA__fechar');
const mensagem = document.querySelector('.unidadeA__mensagem');

// Escola b
const btnInstanciarB = document.querySelector('.unidadeB__instanciar');
const btnAbrirB = document.querySelector('.unidadeB__abrir');
const btnFecharB = document.querySelector('.unidadeB__fechar');
const mensagemB = document.querySelector('.unidadeB__mensagem');

const btnComparar = document.querySelector('.botao--comparar');
const relatorio = document.querySelector('.relatorio--oculto');
const relatorioVeredito = document.querySelector('relatorio__veredito');
const relatorioLinhaA = document.querySelector('relatorio__linha--a');
const relatorioLinhaB = document.querySelector('relatorio__linha--b');


/* ===== FUNÇÃO DE VALIDAÇÃO ===== */
function validacao(codigo,cidade,ano,curso){
  if (cidade === '' || codigo === '' || ano === '' || curso === '' ){
    mensagem.textContent = 'Preencha todos os campos para criar a escola.'
    return false
  } else {
    return true
  }
};
  
/* ===== INSTANCIAR ESCOLA A ===== */
const instanciarA = () => {
  const codigoA = document.querySelector('.unidadeA__codigo').value;
  const cidadeA = document.querySelector('input.unidadeA__cidade').value;
  const anoA = document.querySelector('.unidadeA__ano').value;
  const cursosA = document.querySelector('.unidadeA__cursos').value;

  if(validacao(codigoA, cidadeA, anoA, cursosA)){
    mensagem.textContent = 'Criada'
    return new Senai(codigoA, cidadeA, anoA, cursosA)
  }
};
btnInstanciarA.addEventListener('click', () => unidadeA = instanciarA())


/* ===== INSTANCIAR ESCOLA B ===== */

const instanciarB = () => {
  const codigoB = document.querySelector('.unidadeB__codigo').value;
  const cidadeB = document.querySelector('input.unidadeB__cidade').value;
  const anoB = document.querySelector('.unidadeB__ano').value;
  const cursosB = document.querySelector('.unidadeB__cursos').value;

  if(validacao(codigoB, cidadeB, anoB, cursosB)){
    mensagemB.textContent = 'Criada'
    return new Senai(codigoB, cidadeB, anoB, cursosB)
  }

};
btnInstanciarB.addEventListener('click', () => unidadeB = instanciarB())


/* ===== ABRIR ESCOLA ===== */
btnAbrirA.addEventListener('click', () => {
  if (!unidadeA) {
    mensagem.textContent = 'Primeiro instancie a escola!'
    return
  }

  unidadeA.abrirEscola()
  unidadeA.statusFuncionamento = true;
  mensagem.textContent = `Aberta: Bem-vindos ao SENAI ${unidadeA.cidade}`}) 

// abrir escola b
btnAbrirB.addEventListener('click', () => {
  if (!unidadeB) {
    mensagemB.textContent = 'Primeiro instancie a escola!'
    return
  }

  unidadeB.abrirEscola()
  unidadeB.statusFuncionamento = true;
  mensagemB.textContent = `Aberta: Bem-vindos ao SENAI ${unidadeB.cidade}`}) 

/* ===== FECHAR ESCOLA ===== */
btnFecharA.addEventListener('click', () => {
  if (!unidadeA){
    mensagem.textContent = 'Primeiro instancie a escola!'
    return
  }

  unidadeA.fecharEscola()
  unidadeA.statusFuncionamento = false;
  mensagem.textContent = 'Escola fechada'
})

btnFecharB.addEventListener('click', () => {
  if (!unidadeB){
    mensagemB.textContent = 'Primeiro instancie a escola!'
    return
  }

  unidadeB.fecharEscola()
  unidadeB.statusFuncionamento = false;
  mensagemB.textContent = 'Escola fechada'
});



/* ===== RELATÓRIO DE COMPARAÇÃO ===== */
const compararEscolas = (e1, e2) => {
  relatorio.style.display = 'flex';
  if(e1.qtDCursos > e2.qnDCursos){
    relatorioVeredito.innerHTML = `${e1} lidera com ${e1.qtDCursos} cursos.`
  } else if (e2.qtDCursos > e1.qtDCursos){
    relatorioVeredito.innerHTML = `${e2} lidera com ${e2.qtdeCursos} cursos.`
  } else {
    relatorioVeredito.innerHTML = `Ambas as unidades possuem a mesma quantidade de cursos.`
  }

  relatorioLinhaA.innerHTML = `Unidade A
  Código ${e1.codigo} - Cidade ${e1.cidade}
  Fundação ${ano} (${e1.idade})
  Oferta ${e1.qtDCursos} cursos`

  relatorioLinhaB.innerHTML = `Unidade B
  Código ${e2.codigo} - Cidade ${e2.cidade}
  Fundação ${ano} (${e2.idade})
  Oferta ${e2.qtDCursos} cursos`
};


btnComparar.addEventListener('click', compararEscolas(unidadeA, unidadeB))
/* ===== NOVA CONSULTA ===== */


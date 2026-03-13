

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



/* SUGESTÃO DE LÓGICA PARA O DESENVOLVIMENTO */



/* ===== OBTER ELEMENTOS ===== */
const cidadeA = document.querySelector('input.unidadeA__cidade').value;
const codigoA = document.querySelector('.unidadeA__codigo').value;
const anoA = document.querySelector('.unidadeA__ano').value;
const cursosA = document.querySelector('.unidadeA__cursos').value;
const btnInstanciarA = document.querySelector('.unidadeA__instanciar')
console.log(btnInstanciarA)

const cidadeB = document.querySelector('.unidadeB__cidade').value;
const codigoB = document.querySelector('.unidadeB__codigo').value;
const anoB = document.querySelector('.unidadeB__ano').value;
const cursosB = document.querySelector('.unidadeB__cursos').value;
const btnInstanciarB = document.querySelector('.unidadeB__instanciar')




const mensagem = document.querySelector('.unidade__status p')
mensagem.innerHTML = `${cidadeA} dfd`


/* ===== FUNÇÃO DE VALIDAÇÃO ===== */
if (cidadeA === '' | codigoA === '' | anoA === '' | cursosA === '' | cidadeB === '' | codigoB === '' | anoB === '' | cursosB === ''){
  mensagem.innerHTML = 'Preencha todos os campos para criar a escola.'
}

/* ===== INSTANCIAR ESCOLA A ===== */
function instanciarA(){
  new Senai(codigoA, cidadeA, anoA, cursosA)
}
btnInstanciarA.addEventListener('click', instanciarA);

/* ===== INSTANCIAR ESCOLA B ===== */
function instanciarB(){
  new Senai(codigoB, cidadeB, anoB, cursosB)
}
btnInstanciarA.addEventListener('click', instanciarB);

/* ===== ABRIR ESCOLA ===== */


/* ===== FECHAR ESCOLA ===== */


/* ===== RELATÓRIO DE COMPARAÇÃO ===== */


/* ===== NOVA CONSULTA ===== */



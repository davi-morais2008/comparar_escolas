

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
const cidadeA = document.querySelector('.unidadeA__cidade');
const codigoA = document.querySelector('.unidadeA__codigo');
const anoA = document.querySelector('.unidadeA__ano');
const cursosA = document.querySelector('.unidadeA__cursos');
const btnInstanciarA = document.querySelector('.unidadeA__instanciar')

const cidadeB = document.querySelector('.unidadeB__cidade');
const codigoB = document.querySelector('.unidadeB__codigo');
const anoB = document.querySelector('.unidadeB__ano');
const cursosB = document.querySelector('.unidadeB__cursos');
const btnInstanciarB = document.querySelector('.unidadeB__instanciar')




const mensagem = document.querySelector('.unidade__status p')



/* ===== FUNÇÃO DE VALIDAÇÃO ===== */
if (cidadeA === '' | codigoA === '' | anoA === '' | cursosA === '' | cidadeB === '' | codigoB === '' | anoB === '' | cursosB === ''){
  mensagem.innerHTML = 'Preencha todos os campos para criar a escola.'
}

/* ===== INSTANCIAR ESCOLA A ===== */
const instanciarEscolaA = () => {
   if (btnInstanciarA){
    btnInstanciarA.addEventListener('click', function(){new Senai(codigoA, cidadeA, anoA, cursosA)})
  }
};

/* ===== INSTANCIAR ESCOLA B ===== */
const instanciarEscolaB = () => {
  if (btnInstanciarB){
    btnInstanciarB.addEventListener('click', function(){new Senai(codigoB, cidadeB, anoB, cursosB)})
  }
};

/* ===== ABRIR ESCOLA ===== */


/* ===== FECHAR ESCOLA ===== */


/* ===== RELATÓRIO DE COMPARAÇÃO ===== */


/* ===== NOVA CONSULTA ===== */



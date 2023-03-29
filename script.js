let a1 = '';
let a2 = '';
let a3 = '';

let b1 = '';
let b2 = '';
let b3 = '';

let c1 = '';
let c2 = '';
let c3 = '';
let valor = 1;

iniciarJogo();

function iniciarJogo() {
  mostraTabuleiro();
  let x = 0;
  while (x < 9) {
    marcaPosicao(rodada());
    mostraTabuleiro();
    x++;
    if (x >= 5) {
      if (bolinhaVenceu()) {
        alert("O jogador: bolinha venceu!");
        break;
      } else if (xisVenceu()) {
        alert("O jogador: xis venceu!");
        break;
      } else {
        alert("O jogo empatou!!");
        break;
      }
    }
  }
}



function bolinhaVenceu() {
  if (a1 === 'o' && b1 === 'o' && c1 === 'o') {
    return true;
  } else if (a2 === 'o' && b2 === 'o' && c2 === 'o') {
    return true;
  } else if (a3 === 'o' && b3 === 'o' && c3 === 'o') {
    return true;
  } else if (a1 === 'o' && a2 === 'o' && a3 === 'o') {
    return true;
  } else if (b1 === 'o' && b2 === 'o' && b3 === 'o') {
    return true;
  } else if (c1 === 'o' && c2 === 'o' && c3 === 'o') {
    return true;
  } else if (a1 === 'o' && b2 === 'o' && c3 === 'o') {
    return true;
  } else if (c1 === 'o' && b2 === 'o' && a3 === 'o') {
    return true;
  }
  else {
    return false;
  }
}

function xisVenceu() {
  if (a1 === 'x' && b1 === 'x' && c1 === 'x') {
    return true;
  } else if (a2 === 'x' && b2 === 'x' && c2 === 'x') {
    return true;
  } else if (a3 === 'x' && b3 === 'x' && c3 === 'x') {
    return true;
  } else if (a1 === 'x' && a2 === 'x' && a3 === 'x') {
    return true;
  } else if (b1 === 'x' && b2 === 'x' && b3 === 'x') {
    return true;
  } else if (c1 === 'x' && c2 === 'x' && c3 === 'x') {
    return true;
  } else if (a1 === 'x' && b2 === 'x' && c3 === 'x') {
    return true;
  } else if (c1 === 'x' && b2 === 'x' && a3 === 'x') {
    return true;
  }
  else {
    return false;
  }
}

function rodada() {
  if (valor % 2 == 0) {
    valor++;
    return 'x';
  }
  else {
    valor++;
    return 'o';
  }
}


function mostraTabuleiro() {
  const tabuleiro = pegaTabuleiro();
  alert(tabuleiro);

}
function pegaTabuleiro() {
  const tabuleiro = `
    a  b   c
1 [${a1} ] [${b1} ] [${c1} ]
2 [${a2} ] [${b2} ] [${c2} ]
3 [${a3} ] [${b3} ] [${c3} ]
`;
  return tabuleiro;
}


function marcaPosicao(marcador) {
  let isSelected = true;
  while (isSelected) {
    const marcacao = prompt(`Digite a posição (a1, a2,...) para marcar com ${marcador}`);
    switch (marcacao) {
      case 'a1':
        if (a1 != "") {
          alert(`A posição ${marcacao} já foi escolhida!`);
          isSelected = true;
          break;
        } else {
          a1 = marcador;
          isSelected = false;
          break;
        }

      case 'a2':
        if (a2 != "") {
          alert(`A posição ${marcacao} já foi escolhida!`);
          isSelected = true;
           break;
        } else {
          a2 = marcador;
          isSelected = false;
          break;
        }

      case 'a3':
        if (a3 != "") {
          alert(`A posição ${marcacao} já foi escolhida!`);
          isSelected = true;
           break;
        } else {
          a3 = marcador;
          isSelected = false;
          break;
        }

      case 'b1':
        if (b1 != "") {
          alert(`A posição ${marcacao} já foi escolhida!`);
          isSelected = true;
           break;
        } else {
          b1 = marcador;
          isSelected = false;
          break;
        }

      case 'b2':
        if (b2 != "") {
          alert(`A posição ${marcacao} já foi escolhida!`);
          isSelected = true;
           break;
        } else {
          b2 = marcador;
          isSelected = false;
          break;
        }

      case 'b3':
        if (b3 != "") {
          alert(`A posição ${marcacao} já foi escolhida!`);
          isSelected = true;
           break;
        } else {
          b3 = marcador;
          isSelected = false;
          break;
        }
      case 'c1':
        if (c1 != "") {
          alert(`A posição ${marcacao} já foi escolhida!`);
          isSelected = true;
           break;
        } else {
          c1 = marcador;
          isSelected = false;
          break;
        }
      case 'c2':
        if (c2 != "") {
          alert(`A posição ${marcacao} já foi escolhida!`);
          isSelected = true;
           break;
        } else {
          c2 = marcador;
          isSelected = false;
          break;
        }
      case 'c3':
        if (c3 != "") {
          alert(`A posição ${marcacao} já foi escolhida!`);
          isSelected = true;
           break;
        } else {
          c3 = marcador;
          isSelected = false;
          break;
        }
      default:
        alert("Essa posição não existe.");
        isSelected=true;
        break;
    }
  }
}




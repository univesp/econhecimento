$(document).ready(function() {

  // Ações do usuário que mostram e/ou escondem o logotipo.
  // Por padrão, mostra no topo e fim da página.
  // Remova ou reescreva de acordo com o projeto.

  $(window).scroll(function() {

    var nav = $("nav");
    var scroll = $(window).scrollTop();

    // Mostra o nav quando a página está no topo
    if (scroll == 0) {
      nav.fadeIn();
      //Mostra a nav quando a página chega no fim
    } else if (scroll == $(document).height() - $(window).height()) {
      nav.fadeIn();
      //Esconde a nav
    } else {
      nav.fadeOut();
    }

  });

  // Seu código abaixo

  $('.carousel').carousel({
    pause: false
  });

  let boaEcoleitura = document.getElementById('boaEcoleitura');

  let troca = function() {
    $('#tela1').fadeOut();

    setTimeout(function() {
      $('#tela2').fadeIn();
    }, 400);;
  }

  boaEcoleitura.addEventListener('click', troca);

  let flipCard = []
  flipCard[0] = document.getElementsByClassName('flipCard')[0];
  flipCard[1] = document.getElementsByClassName('flipCard')[1];
  flipCard[2] = document.getElementsByClassName('flipCard')[2];
  flipCard[3] = document.getElementsByClassName('flipCard')[3];


  let flip = function() {
    let card = "." + this.id;
    $(card).toggleClass('flipped');
  }

  flipCard[0].addEventListener('click', flip);
  flipCard[1].addEventListener('click', flip);
  flipCard[2].addEventListener('click', flip);
  flipCard[3].addEventListener('click', flip);

  let repensar = true;
  let reduzir = false;
  let reutilizar = false;
  let reciclar = false;

  let botoes = document.querySelectorAll('.botoes>div');

  let revela = function() {
    let qual = this.querySelector('div:nth-of-type(2)').innerHTML;
    let quadros = document.querySelectorAll('.telaWeb');

    for (var i = 0; i < quadros.length; i++) {
      quadros[i].style.display = 'none'
    }

    for (var i = 0; i < botoes.length; i++) {
      botoes[i].classList.remove('ativo');
    }

    if (qual == 'REPENSAR') {
      $(document.querySelectorAll('.telaWeb')[0]).fadeIn();
      botoes[0].classList.add('ativo');
    } else if (qual == 'REDUZIR') {
      $(document.querySelectorAll('.telaWeb')[1]).fadeIn();
      botoes[1].classList.add('ativo');
    } else if (qual == 'REUTILIZAR') {
      $(document.querySelectorAll('.telaWeb')[2]).fadeIn();
      botoes[2].classList.add('ativo');
    } else if (qual == 'RECICLAR') {
      $(document.querySelectorAll('.telaWeb')[3]).fadeIn();
      botoes[3].classList.add('ativo');
    }

  }

  for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', revela);
  }



  $('#carouselExampleControls').carousel('pause');


  let repensarCelular = document.getElementById('collapseExample1');
  let reduzirCelular = document.getElementById('collapseExample2');
  let reutilizarCelular = document.getElementById('collapseExample3');
  let reciclarCelular = document.getElementById('collapseExample4');

  $(repensarCelular).collapse({
    toggle: false
  })

  $(reduzirCelular).collapse({
    toggle: false
  })

  $(reutilizarCelular).collapse({
    toggle: false
  })

  $(reciclarCelular).collapse({
    toggle: false
  })

  let botoesCelular = document.querySelectorAll('.botoesCelular>div');

  let colapse = function() {
    let qual = this.querySelector('div:nth-of-type(2)').innerHTML;

    for (var i = 0; i < botoesCelular.length; i++) {
      botoesCelular[i].classList.remove('ativo');
    }

    $(repensarCelular).collapse('hide');
    $(reduzirCelular).collapse('hide');
    $(reutilizarCelular).collapse('hide');
    $(reciclarCelular).collapse('hide');

    if (qual == 'REPENSAR') {
      $(repensarCelular).collapse('show');
      botoesCelular[0].classList.add('ativo');
    } else if (qual == 'REDUZIR') {
      $(reduzirCelular).collapse('show');
      botoesCelular[1].classList.add('ativo');
    } else if (qual == 'REUTILIZAR') {
      $(reutilizarCelular).collapse('show');
      botoesCelular[2].classList.add('ativo');
    } else if (qual == 'RECICLAR') {
      $(reciclarCelular).collapse('show');
      botoesCelular[3].classList.add('ativo');
    }
  }

  for (var i = 0; i < botoesCelular.length; i++) {
    botoesCelular[i].addEventListener('click', colapse);
  }




  let mensagens = document.querySelectorAll('.textosParalax > p');
  let cena = 0;

  //Botões.

  let anterior = document.querySelectorAll('.botaoParalax > div')[0];
  let proximo = document.querySelectorAll('.botaoParalax > div')[1];

  let anterior2 = document.querySelectorAll('.botaoParalax > div')[2];
  let proximo2 = document.querySelectorAll('.botaoParalax > div')[3];


  //Fundo e frente.
  let fundo = document.getElementById('fundo');
  let frenteCena1 = document.getElementById('frenteCena1');

  //Cena 1
  let meioCena1 = document.getElementById('meioCena1');

  //Transição - Cena 1 - Cena 2.
  let arvoreTransicao = document.getElementById('arvoreTransicao');

  //Cena 2
  let meioCena2 = document.getElementById('meioCena2');

  let prediosCena2 = document.getElementById('prediosCena2');

  // Cena 3
  let meioCena3 = document.getElementById('meioCena3');

  //Transição - Cena 3 - Cena 4.
  let troncoTransicao = document.getElementById('troncoTransicao');

  //Cena 4
  let meioCena4 = document.getElementById('meioCena4');
  let meioCena42 = document.getElementById('meioCena42');

  //Cena 5
  let meioCena5 = document.getElementById('meioCena5');
  let matoFrenteCena5 = document.getElementById('matoFrenteCena5');

  let matoTransicaoCena4 = document.getElementById('matoTransicaoCena4');


  // Cena 6

  let menino = document.getElementById('menino');
  let terra = document.getElementById('terra');

  // Cena 7

  let pessoas = document.getElementById('pessoas');

  let caixaParalax = document.getElementsByClassName("caixaDoParalax")[0];

  //Falas

  let fala01 = document.getElementById('fala01');
  let fala02 = document.getElementById('fala02');
  let fala03 = document.getElementById('fala03');
  let fala04 = document.getElementById('fala04');

  let bicicleta = document.getElementById('bicicleta');
  let bicicleta2 = document.getElementById('bicicleta2');


  proximo.addEventListener("click", proximoFuncao);
  anterior.addEventListener("click", anteriorFuncao);


  function proximoFuncao() {

    escondeBotoes();
    $(mensagens).fadeOut();
    if (cena < 9)
      cena++;

    console.log('Próxima: ', cena);

    switch (cena) {
      case 1:
        alteraLeft(frenteCena1, '-114%');
        alteraLeft(meioCena1, '-65%');
        alteraLeft(nuvens, '-26%');
        setTimeout(function() {
          $(mensagens[1]).fadeIn();
        }, 2500)

        break;
      case 2:
        alteraLeft(frenteCena1, '-450%');
        alteraLeft(meioCena1, '-193%');
        alteraLeft(arvoreTransicao, '-110%');
        alteraLeft(meioCena2, '-20%');
        alteraLeft(prediosCena2, '0%');
        alteraBottom(prediosCena2, '0%');
        alteraLeft(nuvens, '-52%');
        setTimeout(function() {
          $(mensagens[2]).fadeIn();
        }, 2500)
        break;
      case 3:
        alteraLeft(meioCena1, '-240%');
        alteraLeft(meioCena2, '-204%');
        alteraLeft(frenteCena1, '-234%');
        alteraLeft(meioCena3, '-19%');
        alteraLeft(nuvens, '-78%');
        alteraLeft(prediosCena2, '-50%');
        setTimeout(function() {
          $(mensagens[3]).fadeIn();
        }, 2500)

        setTimeout(function() {
          alteraLeft(fala01, '20%');
          alteraWidth(fala01, '22.28%');
        }, 2500);
        setTimeout(function() {
          alteraLeft(fala02, '40%');
          alteraWidth(fala02, '14.82%');
        }, 3000);

        setTimeout(function() {
          alteraLeft(fala03, '67%');
          alteraWidth(fala03, '10.43%');
        }, 3500);

        setTimeout(function() {
          alteraLeft(fala04, '77%');
          alteraWidth(fala04, '17.1%');
        }, 4000);

        break;
      case 4:
        alteraLeft(fala01, '42%');
        alteraLeft(fala02, '52%');
        alteraLeft(fala03, '72%');
        alteraLeft(fala04, '86%');
        alteraWidth(fala01, '0%');
        alteraWidth(fala02, '0%');
        alteraWidth(fala03, '0%');
        alteraWidth(fala04, '0%');
        setTimeout(function() {
          alteraLeft(meioCena3, '-141%');
          alteraLeft(troncoTransicao, '-100%');
          alteraLeft(meioCena4, '-26%');
          alteraLeft(meioCena42, '-19%');
          alteraLeft(nuvens, '-104%');
          alteraLeft(prediosCena2, '-100%');
          setTimeout(function() {
            $(mensagens[4]).fadeIn();
          }, 2500)
        }, 2500);

        break;
      case 5:
        alteraLeft(meioCena4, '-133%');
        alteraLeft(meioCena42, '-141%');
        alteraLeft(meioCena5, '-10%');
        alteraLeft(matoFrenteCena5, '-68%');
        alteraLeft(matoTransicaoCena4, '-100%');
        alteraLeft(nuvens, '-130%');
        setTimeout(function() {
          $(mensagens[5]).fadeIn();
        }, 2500)
        break;
      case 6:
        alteraLeft(meioCena4, '-152%');
        alteraLeft(meioCena5, '-120%');
        alteraLeft(matoFrenteCena5, '-170%');
        alteraLeft(menino, '52%');

        alteraLeft(terra, '23%');
        alteraBottom(terra, '-43%');

        alteraBottom(pessoas, '-49%');
        alteraLeft(nuvens, '-156%');
        setTimeout(function() {
          $(mensagens[6]).fadeIn();
        }, 2500)
        break;
      case 7:
        alteraLeft(matoFrenteCena5, '-285%');
        alteraBottom(menino, '3%');
        alteraLeft(menino, '34%');
        alteraLeft(meioCena5, '-288%');
        alteraBottom(terra, '9%');
        rotaciona(terra, '0');
        alteraLeft(terra, '23%');
        alteraLeft(pessoas, '6%');
        alteraBottom(pessoas, '8%');
        alteraLeft(nuvens, '-182%');
        alteraLeft(bicicleta, '-27%');
        caixaParalax.style.backgroundColor = 'white';
        setTimeout(function() {
          $(mensagens[7]).fadeIn();
        }, 2500)
        break;
      case 8:
        alteraLeft(pessoas, '0%');
        alteraLeft(terra, '16%');
        alteraLeft(bicicleta2, '62%');
        bicicleta2.style.zIndex = 99;
        setTimeout(function() {
          $(mensagens[8]).fadeIn();
        }, 2500)
        break;

      default:
    }
    if (cena == 4) {
      setTimeout(function() {
        movimentoContinuoProximo();
      }, 2500);
      setTimeout(function() {
        revelaBotoes();
      }, 4500);
    } else if (cena == 3) {
      movimentoContinuoProximo();
      setTimeout(function() {
        revelaBotoes();
      }, 7500);
    }
     else {
      movimentoContinuoProximo();
      setTimeout(function() {
        if(cena == 8){
          anterior.style.display = 'flex';
          proximo.style.display = 'none';
          anterior2.style.display = 'none';
          proximo2.style.display = 'flex';
        }else{
          revelaBotoes();
        }
      }, 3500);
    }
  }

  function anteriorFuncao() {

    console.log('Anterior', cena);
    escondeBotoes();

    $(mensagens).fadeOut();
    switch (cena) {
      case 1:
        alteraLeft(frenteCena1, '0%');
        alteraLeft(meioCena1, '0%');
        alteraLeft(nuvens, '0%');
        setTimeout(function() {
          $(mensagens[0]).fadeIn();
        }, 2500);
        break;
      case 2:
        alteraLeft(frenteCena1, '-114%');
        alteraLeft(meioCena1, '-65%');
        alteraLeft(arvoreTransicao, '100%');
        alteraLeft(meioCena2, '100%');
        alteraLeft(nuvens, '-26%');
        alteraLeft(prediosCena2, '100%');
        alteraBottom(prediosCena2, '-50%');
        setTimeout(function() {
          $(mensagens[1]).fadeIn();
        }, 2500);
        break;
      case 3:
        alteraLeft(fala01, '42%');
        alteraLeft(fala02, '52%');
        alteraLeft(fala03, '72%');
        alteraLeft(fala04, '86%');
        alteraWidth(fala01, '0%');
        alteraWidth(fala02, '0%');
        alteraWidth(fala03, '0%');
        alteraWidth(fala04, '0%');
        setTimeout(function() {
          alteraLeft(meioCena3, '95%');
          alteraLeft(frenteCena1, '-234%');
          alteraLeft(meioCena2, '-20%');
          alteraLeft(frenteCena1, '-192%');
          alteraLeft(meioCena1, '-228%');
          alteraLeft(nuvens, '-52%');
          alteraLeft(prediosCena2, '0%');
        }, 2500);
        setTimeout(function() {
          $(mensagens[2]).fadeIn();
        }, 2500)
        break;
      case 4:
        alteraLeft(troncoTransicao, '100%');
        alteraLeft(meioCena3, '-19%');
        alteraLeft(meioCena4, '95%');
        alteraLeft(meioCena42, '95%');
        alteraLeft(nuvens, '-78%');
        alteraLeft(prediosCena2, '-50%');
        setTimeout(function() {
          $(mensagens[3]).fadeIn();
        }, 2500)
        setTimeout(function() {
          alteraLeft(fala01, '20%');
          alteraWidth(fala01, '22.28%');
        }, 2500);
        setTimeout(function() {
          alteraLeft(fala02, '40%');
          alteraWidth(fala02, '14.82%');
        }, 3000);

        setTimeout(function() {
          alteraLeft(fala03, '67%');
          alteraWidth(fala03, '10.43%');
        }, 3500);

        setTimeout(function() {
          alteraLeft(fala04, '77%');
          alteraWidth(fala04, '17.1%');
        }, 4000);
        break;
      case 5:
        alteraLeft(meioCena4, '-26%');
        alteraLeft(meioCena42, '-19%');
        alteraLeft(meioCena5, '95%');
        alteraLeft(matoFrenteCena5, '95%');
        alteraLeft(matoTransicaoCena4, '95%');
        alteraLeft(nuvens, '-104%');
        alteraLeft(prediosCena2, '-100%');
        setTimeout(function() {
          $(mensagens[4]).fadeIn();
        }, 2500)
        break;
      case 6:
        alteraLeft(meioCena5, '-10%');
        alteraLeft(matoFrenteCena5, '-68%');
        alteraLeft(menino, '100%');
        alteraLeft(terra, '100%');
        alteraBottom(terra, '-160%');
        alteraLeft(pessoas, '-80%');
        alteraLeft(nuvens, '-130%');
        setTimeout(function() {
          $(mensagens[5]).fadeIn();
        }, 2500)

        break;
      case 7:
        alteraLeft(meioCena5, '-127%');
        alteraLeft(matoFrenteCena5, '-170%');
        alteraLeft(menino, '52%');
        alteraBottom(menino, '14%');
        alteraLeft(terra, '23%');
        alteraBottom(terra, '-43%');
        rotaciona(terra, '45');
        alteraLeft(pessoas, '6%');
        alteraBottom(pessoas, '-49%');
        alteraLeft(nuvens, '-156%');
        alteraLeft(bicicleta, '130%');
        caixaParalax.style.backgroundColor = '#00b2ff42';
        setTimeout(function() {
          $(mensagens[6]).fadeIn();
        }, 2500)
      case 8:
        alteraLeft(pessoas, '6%');
        alteraLeft(terra, '23%');
        alteraLeft(bicicleta2, '-45%');
        bicicleta2.style.zIndex = 99;
        setTimeout(function() {
          $(mensagens[7]).fadeIn();
        }, 2500)
        break;
      default:
    }

    if (cena == 3) {
      setTimeout(function() {
        movimentoContinuoAnterior();
      }, 2500);
      setTimeout(function() {
        revelaBotoes();
      }, 5000)
    } else if(cena==4){
      movimentoContinuoAnterior();
      setTimeout(function() {
        revelaBotoes();
      }, 7500)
    }
    else {
      movimentoContinuoAnterior();
      setTimeout(function() {
        revelaBotoes();
      }, 2500)

    }

    if (cena > 0)
      cena--;
  }

  //Função que movimenta as imagens que se movimentam em todas cenas(botão próximo).
  function movimentoContinuoProximo() {
    switch (cena) {
      case 1:
        alteraLeft(fundo, '-66%');
        break;
      case 2:
        alteraLeft(fundo, '-112%');
        break;
      case 3:
        alteraLeft(fundo, '-221%');
        break;
      case 4:
        alteraLeft(fundo, '-352%');
        break;
      case 5:
        alteraLeft(fundo, '-471%');
        break;
      case 6:
        alteraLeft(fundo, '-540%');
        break;
      case 7:
        alteraLeft(fundo, '-669%');
        break;
      default:
    }
  }

  //Função que movimenta as imagens que se movimentam em todas cenas(botão anterior).
  function movimentoContinuoAnterior() {
    switch (cena) {
      case 1:
        alteraLeft(fundo, '0%');
        break;
      case 2:
        alteraLeft(fundo, '-66%');
        break;
      case 3:
        alteraLeft(fundo, '-112%');
        break;
      case 4:
        alteraLeft(fundo, '-221%');
        break;
      case 5:
        alteraLeft(fundo, '-352%');
        break;
      case 6:
        alteraLeft(fundo, '-471%');
        break;
      case 7:
        alteraLeft(fundo, '-540%');
        break;
      default:
    }
  }



  function rotaciona(argumento, angulo) {
    argumento.style.transform = 'rotate(' + angulo + 'deg)'
  }

  function voltaProComecoDaTela(argumento) {
    argumento.style.left = '100%';
  }

  function alteraLeft(argumento, left) {
    argumento.style.left = left;
  }

  function alteraBottom(argumento, bottom) {
    argumento.style.bottom = bottom;
  }

  function alteraWidth(argumento, width) {
    argumento.style.width = width;
  }

  function escondeBotoes() {
    anterior.style.display = 'none';
    proximo.style.display = 'none';
    anterior2.style.display = 'flex';
    proximo2.style.display = 'flex';
  }

  function revelaBotoes() {
    anterior.style.display = 'flex';
    proximo.style.display = 'flex';
    anterior2.style.display = 'none';
    proximo2.style.display = 'none';
  }

  let primeiraVez = true;


  window.addEventListener('scroll', function() {
    var element = document.querySelector('.botaoParalax');
    var position = element.getBoundingClientRect();
    // checking whether fully visible
    if(position.top >= 0 && position.bottom <= window.innerHeight && primeiraVez) {
      proximo.click();
      primeiraVez = false;
    }
  });



});

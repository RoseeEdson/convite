function countDown() {
  const diasCasamento = new Date('28 September 2024 12:00:00');
  const dataAtual = new Date();
  const quantoTempo = diasCasamento.getTime() - dataAtual.getTime();
  const dias = Math.floor(quantoTempo / (24 * 60 * 60 * 1000));
  const horas = Math.floor(quantoTempo / (60 * 60 * 1000)) % 24;
  const minutos = Math.floor(quantoTempo / (60 * 1000)) % 60;
  const segundos = Math.floor(quantoTempo / 1000) % 60;
  const diasDom = (document.querySelector('.dias').innerHTML = dias);
  const horasDom = (document.querySelector('.horas').innerHTML = horas);
  const minutosDom = (document.querySelector('.minutos').innerHTML = minutos);
  const container = document.querySelector('.container_tempo');
  const chegou = document.querySelector('.chegou');
  const segundosDom = (document.querySelector('.segundos').innerHTML =
    segundos);

  const faltam = document.querySelector('.faltam');
  const container_tempo = document.querySelector('.container_tempo');
  const grandeDia = document.querySelector('#grandeDia');
  if (dias <= 0) {
    faltam.classList.add('desativado');
    container_tempo.classList.add('desativado');
    grandeDia.classList.add('ativo');
  }
}

setInterval(() => {
  countDown();
}, 1000);

$('.slider').each(function () {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;

  function move(newIndex) {
    var animateLeft, slideLeft;
    advance();

    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }

    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');

    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }

    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft,
    });
    $group.animate(
      {
        left: animateLeft,
      },
      function () {
        $slides.eq(currentIndex).css({
          display: 'none',
        });
        $slides.eq(newIndex).css({
          left: 0,
        });
        $group.css({
          left: 0,
        });
        currentIndex = newIndex;
      },
    );
  }

  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (currentIndex < $slides.length - 1) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }

  $('.next_btn').on('click', function () {
    if (currentIndex < $slides.length - 1) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });

  $('.previous_btn').on('click', function () {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });

  $.each($slides, function (index) {
    var $button = $('<a class="slide_btn">&bull;</a>');

    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button
      .on('click', function () {
        move(index);
      })
      .appendTo('.slide_buttons');
    bulletArray.push($button);
  });

  advance();
});

// Função para abrir o modal
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Impede o rolamento da página
}

// Função para fechar o modal
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Permite o rolamento da página novamente
}

// Fechar o modal quando o usuário clicar fora dele
window.onclick = function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
};


document.querySelector('.copy-button').addEventListener('click', function () {
  var pixKey = '11940868202'; // Substitua pelo valor da sua chave Pix
  var textArea = document.createElement('textarea');
  textArea.value = pixKey;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);

  var copyMessage = document.getElementById('copy-message');
  copyMessage.classList.remove('hidden');

  setTimeout(function () {
    copyMessage.classList.add('hidden');
  }, 2000);
});


// Função para abrir a modal com a imagem em tamanho grande
function openModalFoto(imgSrc) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  modal.style.display = "block";
  modalImg.src = imgSrc;
}

// Função para fechar a modal ao clicar no botão de fechar (X)
document.getElementsByClassName("close")[0].onclick = function() {
  document.getElementById("myModal").style.display = "none";
}
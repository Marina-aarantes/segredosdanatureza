function displayMessage() {
    alert("Bem-vindo ao mundo dos insetos! Explore e aprenda mais sobre eles! Segredos da natureza, um espaço dedicado a explorar as incríveis características e curiosidades do universo dos insetos! Somos apaixonados por revelar os mistérios e as maravilhas dessas criaturas fascinantes que desempenham papéis essenciais na natureza e nos ecossistemas. Nosso objetivo é educar, inspirar e conectar pessoas ao mundo dos insetos, apresentando informações detalhadas e acessíveis sobre suas características, comportamentos, e importância para o planeta.");
}

function showText(textId) {
    const infoBox = document.getElementById('info-box');
    if (textId === 'text1') {
        infoBox.innerHTML = "<h3>Abelha</h3><p>As abelhas prestam um serviço fundamental para a humanidade e a biodiversidade, pois são responsáveis pela polinização de aproximadamente 73% das plantas no mundo. Sem polinização, não temos produção de alimentos. Em Santa Catarina, o impacto econômico da apicultura vai muito além da produção de mel..</p>";
    } else if (textId === 'text2') {
        infoBox.innerHTML = "<h3>Borboleta</h3><p>As borboletas só voam durante o dia, o que as distingue das mariposas que saem a noite. <br> Sua metamorfose de lagarta em borboleta pode durar de dez a quinze dias e sua vida dura de um mês a um ano, de acordo com a espécie.</p>";
    } else if (textId === 'text3') {
        infoBox.innerHTML = "<h3>Joaninha</h3><p>De acordo com Ismar Santos (analista da Embrapa), entre as mais de quatro mil espécies de joaninhas existentes no mundo, algumas “pegam, matam e comem” de três a quatro mil presas em seu curto ciclo de vida, que dura 130 dias, no máximo.</p>";
    }
    infoBox.style.display = 'block';
}


let index = 0;

function showSlide(n) {
  const slides = document.querySelector('.carousel-images');
  const totalSlides = slides.children.length;
  index = (n + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function next() {
  showSlide(index + 1);
}

function previous() {
  showSlide(index - 1);
}
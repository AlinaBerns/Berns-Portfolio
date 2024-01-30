document.addEventListener("DOMContentLoaded", function () {
  animateRandomly();
});

function animateRandomly() {
  const rectangles = Array.from(document.querySelectorAll(".skill"));

  // Перемешивание массива
  rectangles.sort(() => Math.random() - 0.5);

  let index = 0;

  function animateNext() {
    if (index < rectangles.length) {
      const currentRectangle = rectangles[index];

      // Сброс предыдущей анимации
      currentRectangle.style.animation = "none";
      void currentRectangle.offsetWidth; // Принудительный рефлоу

      // Задание новой анимации
      currentRectangle.style.animation = "colorChange 3s forwards";
      index++;

      // Задержка перед следующей анимацией
      setTimeout(animateNext, 2000 + Math.random() * 3000);
    }
  }

  // Начать с первого прямоугольника
  animateNext();
}

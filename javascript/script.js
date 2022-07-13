
  newFunction();

function newFunction() {
  const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')), animationTime = 300, framesCount = 20;

  anchors.forEach(function (item) {

    item.addEventListener('click', function (e) {

      e.preventDefault();


      let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

      let scroller = setInterval(function () {

        let scrollBy = coordY / framesCount;

        if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {

          window.scrollBy(0, scrollBy);
        } else {

          window.scrollTo(0, coordY);
          clearInterval(scroller);
        }

      }, animationTime / framesCount);
    });
  });
  const btns = document.querySelectorAll('.popup-btn');
  const modalOverlay = document.querySelector('.modal-overlay ');
  const modals = document.querySelectorAll('.modal');

  btns.forEach((el) => {
    el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');

      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
      modalOverlay.classList.add('modal-overlay--visible');
    });
  });

  modalOverlay.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target == modalOverlay) {
      modalOverlay.classList.remove('modal-overlay--visible');
      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });
    }
  });
}
    
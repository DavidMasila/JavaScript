// Varibale

const accordion = document.getElementsByClassName('content-container');

// for (let i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener('click', function() {
//       this.classList.toggle('active');
//     });
//   }

Array.from(accordion).forEach((el) => {
    el.addEventListener('click', function() {
        this.classList.toggle('active')
    })
})

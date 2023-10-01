document.addEventListener('DOMContentLoaded', function () {

    // darkmode

    const checkbox = document.getElementById('darkModeSheet');
    const darkModeSheet = document.querySelector('link[href="darkModeSheet.css"]');

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            darkModeSheet.removeAttribute('disabled');
        } else {
            darkModeSheet.setAttribute('disabled', 'disabled');
        }
    });

    // repsonsive header

    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('show');
    });

    // EFFET sur mes 4 1er Images = opacité + slide

    const isResponsiveMode = window.innerWidth < 768;
    const mesImages = document.querySelector('.mes-images');

    if (!isResponsiveMode) { // permet de dire que ( si la width de la xindow est plus grand que 768px, faire le code qui suit )   le ! inverse le signe qu'on a mit plus hait 
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // L'élément est à 50% ou plus visible à l'écran
                    mesImages.style.left = '0px'; // Faites apparaître la div en déplaçant son margin-left à 0 (position d'origine)
                    mesImages.style.opacity = 1
                } else {
                    mesImages.style.left = '-500px'; // Remettre la valeur par défaut pour permettre à l'élément de suivre son flux normal
                    mesImages.style.opacity = 0
                }
            });
        }, {
            threshold: 0.2 // Définir le seuil de visibilité ( peut pas mettre plus sinon ca décleche pas car hors zone de mon observer )
        });

        observer.observe(mesImages);

    }


    // clique affiche pop up sur lettuce ( entrainemeent )

    const fond = document.getElementsByClassName('fond1')[0];

    fond.addEventListener('click', () => {
        alert('je commence a savoir ce que je fais je crois, BREFF, continue de scroll');
    });





//   // EFFET sur mes Images = opacité + slide


    const card1 = document.getElementsByClassName('card-1')[0];

    if (!isResponsiveMode) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            card1.style.left = '-120px';
            card1.style.opacity = 1;
          } else {
            card1.style.left = '300px';
            card1.style.opacity = 0;
          }
        });
      }, {
        threshold: 0.3
      });
    
      observer.observe(card1);
    }


    const card2 = document.getElementsByClassName('card-2')[0];

    if (!isResponsiveMode){

        const observer = new IntersectionObserver (entries => {
            entries.forEach (entry => {
                if (entry.isIntersecting) {
                    card2.style.left = '0px';
                    card2.style.opacity = 1;
                } else {
                    card2.style.left = '300px';
                    card2.style.opacity = 0;
                };
            });
        }, {
            threshold: 0.3
        });

        observer.observe(card2);
    };
    

const card3 = document.getElementsByClassName('card-3')[0];

if (!isResponsiveMode){
    const observer = new IntersectionObserver (entries => {
        entries.forEach (entry =>{
            if (entry.isIntersecting){
                card3.style.left = '120px';
                card3.style.opacity = 1;
            } else {
                card3.style.left = '300px';
                card3.style.opacity = 0;
            };
        });
    }, {
        threshold: 0.3
    });
observer.observe(card3);
};


const card4 = document.getElementsByClassName('card-4')[0];

if(!isResponsiveMode) {
    const observer = new IntersectionObserver (entries => {
        entries.forEach (entry =>{
            if(entry.isIntersecting) {
                card4.style.opacity = 1;
                card4.style.left = ('-120px');
            } else {
                card4.style.opacity = 0;
                card4.style.left = ('-350px');
            };
        });
    }, {
        threshold: 0.3
    });
    observer.observe(card4);
}


const card5 = document.getElementsByClassName('card-5')[0];

if(!isResponsiveMode){
    const observer = new IntersectionObserver ( entries => {
        entries.forEach (entry => {
            if (entry.isIntersecting) {
                card5.style.opacity = 1;
                card5.style.left = ('0px');
            } else {
                card5.style.opacity = 0;
                card5.style.left = ('-350px');
            };
        });
    },{
        threshold: 0.3
    })
    observer.observe(card5);
}


const card6 = document.getElementsByClassName('card-6')[0];

if(!isResponsiveMode){
    const observer = new IntersectionObserver (entries =>{
        entries.forEach (entry =>{
            if (entry.isIntersecting){
                card6.style.opacity = 1;
                card6.style.left = ('120px');
            } else {
                card6.style.opacity = 0;
                card6.style.left = ('-300px');
            };
        });
    }, {threshold: 0.4
    });
    observer.observe(card6);
}


const fond8 = document.getElementsByClassName('fond8')[0];
if(!isResponsiveMode) {
    const observer = new IntersectionObserver (entries =>{
        entries.forEach (entry => {
            if (entry.isIntersecting){
                fond8.style.opacity = 1;
                fond8.style.top = ('0px');
            } else {
                fond8.style.opacity = 0;
                fond8.style.top = ('100px');
            };
        });
    }, {
        threshold: 0.4
    });

    observer.observe(fond8);
};


const fond10 = document.getElementsByClassName('fond10')[0];
if(!isResponsiveMode) {
    const observer = new IntersectionObserver (entries =>{
        entries.forEach (entry => {
            if (entry.isIntersecting){
                fond10.style.opacity = 1;
                fond10.style.top = ('0px');
            } else {
                fond10.style.opacity = 0;
                fond10.style.top = ('100px');
            };
        });
    }, {
        threshold: 0.4
    });

    observer.observe(fond10);
};


const telephone = document.getElementsByClassName('telephone')[0];

if(!isResponsiveMode){
    const observer = new IntersectionObserver (entries => {
        entries.forEach (entry => {
            if (entry.isIntersecting){
                telephone.style.top = ('0px');
                telephone.style.opacity = 1;

            } else {
                telephone.style.top = ('100px');
                telephone.style.opacity = 0;
            };
        });
    }, {
        threshold: 0.1
    });
    observer.observe(telephone);
}







});
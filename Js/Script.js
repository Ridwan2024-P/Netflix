  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#project-slider', {
      perPage     : 6,
     
      autoplay    : true,  
        pagination: false,      
      interval    : 3000,        
      speed       : 800,         
      pauseOnHover: true,       
      pauseOnFocus: true,       
      breakpoints : {
        992 : { perPage: 1 },
        768 : { perPage: 1 }
      }
    }).mount();
  });
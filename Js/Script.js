  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#project-slider', {
      perPage     : 4.5,
      gap:'20px', 
        perMove: 1,
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
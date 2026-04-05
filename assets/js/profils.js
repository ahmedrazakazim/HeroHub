const darkmodeButton = document.getElementById('darkmode');
const body = document.body;

if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
  darkmodeButton.classList.add('dark-mode');
}

darkmodeButton.addEventListener('click', () => {
  console.log('Button clicked!');
  body.classList.toggle('dark-mode');
  darkmodeButton.classList.toggle('dark-mode');


  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

 
profile1.addEventListener('click', () => {
  
  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  
  const image = document.createElement('img');
  image.setAttribute('src', 'assets/images/bat.png');
  
  overlay.appendChild(image);
  
  document.body.appendChild(overlay);
  
  overlay.classList.add('show');
  
  
  overlay.classList.add('show');



      
      

      setTimeout(() => {
          window.location.href = 'batman.html';
      }, 700);
  });
 
  profile2.addEventListener('click', () => {
  
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    
    const image = document.createElement('img');
    image.setAttribute('src', 'assets/images/super2.png');
    
    overlay.appendChild(image);
    
    document.body.appendChild(overlay);
    
  
   
    overlay.classList.add('show');
  
  
  
        
        
  
        setTimeout(() => {
            window.location.href = 'superman.html';
        }, 700);
    });
 
    profile3.addEventListener('click', () => {
  
      const overlay = document.createElement('div');
      overlay.id = 'overlay';
      
      const image = document.createElement('img');
      image.setAttribute('src', 'assets/images/pool.png');
      
      overlay.appendChild(image);
      
      document.body.appendChild(overlay);
      
    
     
      overlay.classList.add('show');
    
    
    
          
          
    
          setTimeout(() => {
              window.location.href = 'deadpool.html';
          }, 500);
      });
 
      profile4.addEventListener('click', () => {
  
        const overlay = document.createElement('div');
        overlay.id = 'overlay';
        
        const image = document.createElement('img');
         image.id ="sup"
        image.setAttribute('src', 'assets/images/spidermanlgo2.png');
        
        overlay.appendChild(image);
        
        document.body.appendChild(overlay);
        
      
       
        overlay.classList.add('show');
      
      
      
            
            
      
            setTimeout(() => {
                window.location.href = 'spiderman.html';
            }, 500);
        });
 
        profile5.addEventListener('click', () => {
  
          const overlay = document.createElement('div');
          overlay.id = 'overlay';
          
          const image = document.createElement('img');
           image.id ="sup"
          image.setAttribute('src', 'assets/images/ironlogo.png');
          
          overlay.appendChild(image);
          
          document.body.appendChild(overlay);
          
        
         
          overlay.classList.add('show');
        
        
        
              
              
        
              setTimeout(() => {
                  window.location.href = 'ironman.html';
              }, 500);
          });

          document.addEventListener("DOMContentLoaded", function() {
    const splashScreen = document.getElementById("splash-screen");
    
    // We are aggressively stripping the sessionStorage lock out. It will just play 4000ms every time index.html loads!
    if (splashScreen) {
        splashScreen.style.display = "flex";
        splashScreen.style.opacity = 1;
        setTimeout(() => {
            splashScreen.style.opacity = 0;
            setTimeout(() => {
                splashScreen.style.display = "none";
            }, 800); 
        }, 2000); 
    }
});

const pis1 = document.getElementById('pis1');
if (pis1) {
    pis1.addEventListener('click', function() {
        const overlay = document.createElement('div');
        overlay.classList.add('red-overlay');  
        
        const closeButton = document.createElement('button');
        closeButton.innerHTML = 'X';
        overlay.appendChild(closeButton);
        
        document.body.appendChild(overlay);
        
        closeButton.addEventListener('click', function() {
            if (document.body.contains(overlay)) {
                document.body.removeChild(overlay);
            }
        });
    });
}

// BFCache Mouse4/Mouse5 complete flush - aggressive variant
window.addEventListener("pageshow", function(event) {
    let isBack = event.persisted;
    try {
        if (!isBack && window.performance && window.performance.getEntriesByType) {
            let entries = window.performance.getEntriesByType("navigation");
            if (entries.length > 0 && entries[0].type === "back_forward") {
                isBack = true;
            }
        }
    } catch(e) {}
    
    // Nuke ANY AND ALL overlays hiding in the index.html DOM
    let overlays = document.querySelectorAll("#overlay");
    overlays.forEach(function(ov) {
        ov.remove();
    });
    
    document.body.classList.remove('locked');
});

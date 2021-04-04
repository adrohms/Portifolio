let pages = document.getElementsByClassName('pages');
let page1 = document.getElementById('page1');
let page2 = document.getElementById('page2');
let page3 = document.getElementById('page3');

let about = document.getElementById('aboutB');
let contact = document.getElementById('contactB');
let home = document.getElementById('homeB');

about.addEventListener('click', () => {
    if (page1.style.transform == 'scale(1)') {
        page1.style.transform = 'scale(0)';
        
        
    } else {
        page1.style.transform = 'scale(1)';
        
    }
});

contact.addEventListener('click', () => {
    if (page2.style.transform == 'scale(1)') {
        page2.style.transform = 'scale(0)';
        
        
    } else {
        page2.style.transform = 'scale(1)';
        
        
    }
});

home.addEventListener('click', () => {
    if (page3.style.transform == 'scale(1)') {
        page3.style.transform = 'scale(0)';
        
        
        
        
    } else {
        page3.style.transform = 'scale(1)';
        
        
    }
});


 


    
  
    
    


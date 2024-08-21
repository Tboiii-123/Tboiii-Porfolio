
const observer = new IntersectionObserver ((entries)=>{

    entries.forEach((entry) => {

        console.log(entry)
        
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        
        else{
            entry.target.classList.remove('show');
        }
        
    });
});





const hiddenElemnt =document.querySelectorAll('.hidden');

hiddenElemnt.forEach((el) => observer.observe(el));
const observer = new IntersectionObserver ((entries)=>{

    entries.forEach((entry) => {

        console.log(entry)
        
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        // else{
        //     entry.target.classList.remove('show');
        // }

    });
});





const hiddenElemnt =document.querySelectorAll('.hidden');
const hiddenElemnt2 =document.querySelectorAll('.hid');


hiddenElemnt.forEach((el) => observer.observe(el));

hiddenElemnt2.forEach((el) => observer.observe(el));

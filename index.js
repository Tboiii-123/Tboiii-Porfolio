
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

hiddenElemnt.forEach((el) => observer.observe(el));


const hiddenElemnt2 =document.querySelectorAll('.hid');

hiddenElemnt2.forEach((el) => observer.observe(el));





const text = "Hello!!!";
const textOutput = document.getElementById('text-output');
let index=0;

    function typeLetterByLetter() {
      if (index < text.length) {
        textOutput.textContent += text[index];
        index++;
        setTimeout(typeLetterByLetter, 120);
      }
    }
  
    // Start typing effect
    typeLetterByLetter();


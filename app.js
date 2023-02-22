const click = document.querySelectorAll('#click')
const rotate = document.querySelectorAll(".rotate" )
const toggle = document.querySelectorAll('#toggle')
const toggleclick = document.querySelector('#toggle-click')



// bugger menu 
toggleclick.addEventListener('click',((e)=>{
     const  i = e.target.previousElementSibling
     
     if (i.style.maxHeight) {
        
      i.style.maxHeight = null;
  } else {
      i.style.maxHeight = i.scrollHeight + "px";
      

  }
}))


// rotate.forEach((item)=>{
   
   
//    item.addEventListener('click',((e)=>{
//       const value = e.target
     
//       console.log(value)
//    }))
// })


click.forEach((item)=>{
   

   item.addEventListener('click',(e)=>{
      
       const daniel = e.target.querySelector('.rotate')
        daniel.classList.toggle('open-close-icon')
    
      const content = e.target.nextElementSibling
         
   
      if (content.style.maxHeight) {
        
         content.style.maxHeight = null;
     } else {
         content.style.maxHeight = content.scrollHeight + "px";
         console.log(e)
   
     }
   
   })
})

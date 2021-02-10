






function mafonction(){
	const demoDIV = document.querySelector('#demo')
  
  demoDIV.style.backgroundColor="green";
  
  

}


function bouger(){
   const inDIV =document.querySelector('#in')
   //inDIV.style.top=50+"px"

   var indent =setInterval(mv,5)
   var position=0

  function mv() {
    
    position++
    inDIV.style.top=position+"px"
    inDIV.style.left=position+"px"
    inDIV.textContent="top:"+inDIV.style.top +"\n left:" +inDIV.style.left
    
    
    if (position==350){
    	//position=0
      clearInterval(indent)
    }

	}
}

setTimeout(()=> {
	const inDIV =document.querySelector('#in')
  inDIV.textContent='gaggné'
  
},5000)

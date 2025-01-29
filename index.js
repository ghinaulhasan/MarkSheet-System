const result = ()=>{
    
   let totalMarks = 300
   let eng = +document.getElementById("eng").value
   let maths = +document.getElementById("maths").value
   let phy = +document.getElementById("phy").value

   if(eng >=98 || maths >=98 || phy >=98 ){
    alert("out of range (Max. Marks-98)")
   }
   else{
    let obt = document.getElementById("obt").innerHTML = eng + maths + phy
    let per = document.getElementById("per").innerHTML = obt / totalMarks * 100

     if(per>=79.9 && per<=99){
        document.getElementById("grade").innerHTML = "A+ ❤❤"
        document.getElementById("grade").style.color ="green"
        // document.body.style.color = "green"
    }
    
    else if(per>=69.9 && per<=79.9){
        document.getElementById("grade").innerHTML = "A 👍"
        document.getElementById("grade").style.color ="deepskyblue"
    }
    
    else if(per>=59.9 && per<=69.9){
        document.getElementById("grade").innerHTML = "B 👏"
        document.getElementById("grade").style.color ="orange"
    }
    else if(per>=49.9 && per<=59.9){
        document.getElementById("grade").innerHTML = "C 😁"
        document.getElementById("grade").style.color ="greenyellow"
    }
    
    else if(per>=39.9 && per<=49.9){
        document.getElementById("grade").innerHTML = "D ✌"
        document.getElementById("grade").style.color ="orchid"
    }
    
    // else if(per>=1 && per<=39.9){
        //     document.getElementById("grade").innerHTML = "Fail"
        // }     
    else{
            
            document.getElementById("grade").innerHTML = "Fail 😒"
            document.getElementById("grade").style.color ="red"
    }

   }  
}

const reload = ()=>{
    window.location.reload()
}


//    if(eng >= 98 || maths>=98 || phy >=98){
//     alert("out of range")
//     window.location.reload()
// }
// else{
//     let obt = document.getElementById("obt").innerHTML = eng + maths + phy
//     let per = document.getElementById("per").innerHTML = obt / totalMarks * 100
// } 


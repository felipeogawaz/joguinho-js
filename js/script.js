
d1 = 5;
d2 = 5;

$("#Cima").click(() =>{
        d1 -= 10 
        $("#anima-div").animate({ top: d1 + "px" }, { duration: 200 })
    }
)

$("#Baixo").click(() =>{
        d1 += 10  
        $("#anima-div").animate({ top: d1 + "px" }, { duration: 200 })
    }
)

$("#Esquerda").click(() =>{
        d2 -= 5
        $("#anima-div").animate({ left:d2 +"px" }, { duration: 200 })
    }
)

$("#Direita").click(() =>{
        d2 += 5
        $("#anima-div").animate({ left: d2 + "px" }, { duration: 200 } )
    }
)





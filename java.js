var vez = 1;
var vencedor = "";
let aux = 0;

function casasIguais(a, b, c){
       // var casaA = $("#casa"+a);
       // var casaB = $("#casa"+b);
        //var casaC = $("#casa"+c);
        var bgA = $("#casa"+a).css("background-color");
        var bgB = $("#casa"+b).css("background-color");
        var bgC = $("#casa"+c).css("background-color");
        if( (bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")){
            if(bgA.bgColor("red") >= 0)
                vencedor = "1";
            else
                vencedor = "2";
            return true;
        }
        else{
            return false;
        }
}


    function verificarFimDeJogo(){
        if( casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
            casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
            casasIguais(1, 5, 9) || casasIguais(3, 5, 7)){
            $("#resultado").html("<h1>O jogador " + vencedor + "venceu! </h1>");
            $(".casa").off("click");
        }
    }
      $(".casa").click(function(){
        var bg = $(this).css("background-color");
          console.log(bg.toString());
      if(bg.toString() == "rbga(0,0,0,0)" && aux == 0){

        if( aux == 1 || aux == 0) {
            aux =2;

             console.log("red");
            $(this).css("background-color", "red");

        } else if(aux ==2 ){
            aux=1;
            console.log("blue");
            $(this).css("background-color", "blue");

        }
      }
    });


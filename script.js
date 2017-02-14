$(document).ready(function(){
   $("button").click(function(){
    var x= $("input").val();

   if(x == 5) { 
       
        $("div").html("WOOHOO!1");
    }
    else if (x < 5){
         $("div").html("Too Low!");
    }
    else if (x > 5){
         $("div").html("Too High");
    }
//   else{
//         $('div').html
//         ('WRONG')
        
//     }
    });
   
});
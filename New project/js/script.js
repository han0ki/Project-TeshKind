
       $(".button-collapse").sideNav();

 $(document).ready(function() {
        $('.slider').slider({ 
            interval: 5000,              
        });
    });     
$(document).ready(function(){
        $(".carousel1").carousel({
            dist: 0,
            padding: 40,
            indicators: true,
            numVisible: 5    
        }); 
    });

  $(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });
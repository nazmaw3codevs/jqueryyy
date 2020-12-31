$(document).ready(function(){

   $(".hide").click(function(){
        $(".hide-1").hide(2000);
   });

   $(".show").click(function(){
        $(".hide-1").show(5000);
    });

});

  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });

  $(".fadein").click(function(){
    $(".box-1").fadeIn("slow");
    $(".box-2").fadeIn(2000);
    $(".box-3").fadeIn(3000);
  });

  $(".fadeout").click(function(){
    $(".box-1").fadeOut("slow");
    $(".box-2").fadeOut(2000);
    $(".box-3").fadeOut(3000);
  });

  $(".fadetoggle").click(function(){
    $(".box-1").fadeToggle("slow");
    $(".box-2").fadeToggle(2000);
    $(".box-3").fadeToggle(3000);
  });

  $(".toggle").click(function(){
    $(".sign").toggle(2000);
  });

  $(".form-control").focus(function(){
    $(this).css({
      backgroundColor: 'yellow',
      color: '#fff'
    });
  });

  $(".form-control").blur(function(){
    $(this).css({
      backgroundColor: '#01f5f0',
      color: '#fff',
    });

  });
  
  $(".signup-form").submit(function(n){
    n.preventDefault();
    $(".message").text("Your form submitted successfully !!");
    $(".message").css("color", "#fff");
  });
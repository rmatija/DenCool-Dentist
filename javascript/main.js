$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {       
        $('#to_top').fadeIn(200);    
    } else {
        $('#to_top').fadeOut(200);   
    }
});
$('#to_top').click(function() {      
    $('body,html').animate({
        scrollTop : 0                       
    }, 500);
});

$("#gen_den").click(function (){
    $("#gen_den_para").toggle();
});

$("#cos_den").click(function(){
    $("#cos_den_para").toggle();
});

$("#spec_den").click(function(){
    $("#spec_den_para").toggle();
});
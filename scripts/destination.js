$(document).ready(function () {
    
    name2("mars");
    name2("europa");
    name2("titan");

    $("#moon").click(function () { 
        $(".section").load("destination-moon.html .section");
        $(".buttons-item").removeClass("active");
        $("#moon").addClass("active");
        $(".img").attr("src", "style/assets/destination/image-moon.png");
    });
});

function name2(planet) {
    $("#"+planet).click(function () { 
        $(".section").load("destination-"+planet+".html");
        $(".buttons-item").removeClass("active");
        $("#"+planet).addClass("active");
        $(".img").attr("src", "style/assets/destination/image-"+planet+".png");
    });
}
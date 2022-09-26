$(document).ready(function () {
    jobs("specialist");
    jobs("pilot");
    jobs("engineer");

    $("#commander").click(function () { 
        $(".crew-section").load("crew-commander.html .crew-refresh");
        $(".bottom-buttons-item").removeClass("active-bottom-buttons");
        $("#commander").addClass("active-bottom-buttons");
        $(".com-img").attr("src", "style/assets/crew/image-douglas-hurley.png");
    });

});

function jobs(job) {
    $("#"+job).click(function () { 
        $(".crew-section").load("crew-"+job+".html");
        $(".bottom-buttons-item").removeClass("active-bottom-buttons");
        $("#"+job).addClass("active-bottom-buttons");
        $(".com-img").attr("src", "style/assets/crew/image-"+job+".png");
    });
}
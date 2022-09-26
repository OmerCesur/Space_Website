$(document).ready(function(){
    name3(".destination","destination-moon.html");
    name3("#crew","crew-commander.html");
    name3("#technology","technology-vehicle.html");
});

function name3(target,site) {
    $(target).click(function(){
        $("#body").load(site);
        $(".nav-items").removeClass("active");
        $(target).addClass("active");
    });
}
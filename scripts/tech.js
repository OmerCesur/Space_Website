$(document).ready(function () {
    tech("spaceport");
    tech("capsule");
    $("#vehicle").click(function techfunction() {
        $(".tech-section").load("technology-vehicle.html .tech-refresh");
        $(".tech-buttons").removeClass("tech-buttons-active");
        $("#vehicle").addClass("tech-buttons-active");
        $(".tech-img").attr("src", "style/assets/technology/image-vehicle-portrait.jpg");
        if (window.innerWidth < 990) {
            document.querySelector(".tech-img").setAttribute("src", "style/assets/technology/image-vehicle-landscape.jpg");
        }
    }
    );
});

function tech(techs) {
    $("#" + techs).click(function () {
        $(".tech-section").load("technology-" + techs + ".html");
        $(".tech-buttons").removeClass("tech-buttons-active");
        $("#" + techs).addClass("tech-buttons-active");
        $(".tech-img").attr("src", "style/assets/technology/image-" + techs + "-portrait.jpg");
        if (window.innerWidth < 990) {
            document.querySelector(".tech-img").setAttribute("src", "style/assets/technology/image-" + techs + "-landscape.jpg");
        }
    });
};

$("#capsule").click(function () {
    if (window.innerWidth < 990) {
        $(".tech-img").attr("src", "style/assets/technology/image-capsule-landscape.jpg");
    }
});

function test() {
    if (window.innerWidth < 800) {
        
        document.querySelector(".tech-img").setAttribute("src", "style/assets/technology/image-" + document.getElementsByClassName("tech-buttons-active")[0].getAttribute("id") + "-landscape.jpg");
    } else {
        document.querySelector(".tech-img").setAttribute("src", "style/assets/technology/image-" + document.getElementsByClassName("tech-buttons-active")[0].getAttribute("id") + "-portrait.jpg");
    }
};

addEventListener("resize", test);
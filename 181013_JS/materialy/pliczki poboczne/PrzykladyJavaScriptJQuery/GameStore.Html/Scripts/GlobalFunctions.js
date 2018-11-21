/// <reference path="jquery-1.5.1-vsdoc.js" /> 
var Cart = (function() {
    this.Games = new Array();
});

var Game = (function()
{
    this.gameId = 0;
    this.name = "";
    this.imageUrl = "";
});

function contentLoaded() {
    addCollapsiblePanels();
    collapseAllPanels();
    startSlideShow();
}

document.addEventListener("DOMContentLoaded", contentLoaded, false);

function addCollapsiblePanels() {
    $(".genre").each(function () {
        var element = $(this);
        element.find("> header").click(function() {
            element.find(".games").toggle();
        });
    });
}

function collapseAllPanels() {
    $(".games").toggle();
}

function switchSlide() {
    var active = $("#slideshow img.active");
    if (active.length ==0) {
        active = $("#slideshow img:last");
    }
    var next = active.next().length ? active.next() : $("#slideshow img:first");
    active.addClass("last-active");
    next.css({ opacity: 0.0 }).addClass("active").animate({ opacity: 1.0 }, 1000, function() {
        active.removeClass("active last-active");
    });
}

function startSlideShow() {
    setInterval("switchSlide()", 8000);
    $("#slideshow").click(function() {
        switchSlide();
    });
}






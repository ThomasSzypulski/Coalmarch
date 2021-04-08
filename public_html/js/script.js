$(document).ready(function () {
    $('ul.nav.navbar-nav li a').click(function () {
        $("ul.nav.navbar-nav li").removeClass("selected");
        $(this).parent().addClass("selected");
        $(this).blur();
    });
    $('input[type="button"]').click(function () {
        $("ul.nav.navbar-nav li").removeClass("selected");
        $('li#contactItem').addClass("selected");
    });
    console.log("script!");
});



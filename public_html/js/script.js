
$(document).ready(function () {

    $.getJSON("datos/slider.json", function (data) {
        var items = [];
        $.each(data, function (key, val) {
            var item_html = "";
            item_html += '<div class="item_slider">';
            item_html += '<div class="item_slider_content text-end" style="background-image: url(images/' + val.img + ')">';
            item_html += '<div class="oscur position-relative p-4">';
            item_html += '<h2>' + val.title + '</h2> ' + val.descript;
            item_html += '</div>';
            item_html += '</div>';

            $(".slider").append(item_html);
        });
        $('.slider').slick({
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            fade: true
        });
    });


//    $('.slider').slick({
//        infinite: true,
//        speed: 500,
//        slidesToShow: 1,
//        slidesToScroll: 1,
//        dots: true,
//        autoplay: true,
//        autoplaySpeed: 5000,
//        fade: true
//    });
});
(function($) {
    // Instagram Client ID : 46e6b62622d248b99cd4e7d7204d534a
    var url = "https://api.instagram.com/v1/tags/corgi/media/recent?client_id=46e6b62622d248b99cd4e7d7204d534a&callback=?",
        $thumbs = $('.thumbs');
    // Populate <li> with thumbnails
    function printImages(return_data) {
        var limit = 19;
        for (var i = limit - 1; i >= 0; i--) {
            var img = return_data.data[i].images.thumbnail.url;
            $thumbs.append('<li><img src="' + img + '" /></li>');
        }
    }
    // Get IG JSON
    $.ajax({
        dataType: "jsonp",
        url: url,
        success: function(return_data) {
            printImages(return_data);
        }
    });
})(jQuery);



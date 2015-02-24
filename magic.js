var request = $.ajax({
    type: "POST",
    url: "https://s3.amazonaws.com/media.mobstac.com/test/slideshow.json",
    dataType:"json",
    success: function(data){
        var a = data;
        var b = a.content;
        for (var i=0; i<b.length; i++){
            var c = b[i].media.images;
            for (var j=0; j<c.length; j++)
        {
            $('<img />', {
                src: c[j].origSrc,
                width: '600px',
                height: '400px',
        }).appendTo("#slideshow")
        }
    }

}
});

var img = $('#slideshow img');

for (var j=0; j<img.length; j++){
        $('#wrapper ul').append($("<li>").html(img[j])).css('list-style', 'none');
}

//hide images
$('#slideshow').hide()

//display images in new class
var speed = 5000;

var run = setInterval('rotate()', speed);

var item_width = $('#wrapper li').outerWidth();

var left_value = item_width * (-1);

$('#wrapper li:first').before($('#wrapper li:last'));

$('#wrapper ul').css({'left': left_value});

$('.left').click(function(){
    var left_indent = parseInt($('#wrapper ul').css('left'));

    $('#wrapper ul').animate({'left':left_indent}, 200, function(){
        $('#wrapper li:first').before($('#wrapper li:last'));
        $('#wrapper ul').css({'left':left_value});
});
    return false;
});

$('.right').click(function(){
   var left_indent = parseInt($('#wrapper ul').css('left')) - item_width;

   $('#wrapper ul').animate({'left': left_indent}, 200, function(){
       $('#wrapper li:last').after($('#wrapper li:first'));
       $('#wrapper ul').css({'left':left_value});
    });
   return false;
});

function rotate(){
    $('.right').click();
}

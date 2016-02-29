$( document ).ready(function() {

  console.log("jQuery " + $.fn.jquery);

  images = $('img[class*="lightbox"]')
  console.log('Found ' + images.length + ' matching tags');

  images.wrap(function(i,elem){

    return '<a href = "' + $(this).attr('src') + '" data-lightbox = "' + $(this).attr('class').split(' ')[0] + '" data-title = "' + $(this).attr('alt') + '"></a>'

  });
});

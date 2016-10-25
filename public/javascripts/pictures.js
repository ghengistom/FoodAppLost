$( document ).ready(function() {
  $.get( "/images", function( data ) {
    //$( "#pictureContainer" ).text( data );
    //Use jquery each method on the array that we get from json object
  $.each(data.imagesJSON, function( index, value ) {  //passes in value
    //console.log(value.imgSrcHtml);
    //inside double qutoes is path to images
    $("#pictureContainer").append('<div class = "row"> <img src="'+ value.imgSrcHtml+'" /></div>');          //jquery selector
  });
    //1 key and 1 value-is array for each object
    //for each object create markup that includes an image tag where the
    //source "src" attribute is = pathToImg
    //Append this to pictureContainer element

  });


});

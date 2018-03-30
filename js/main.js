$(document).ready(function () {



    //  Flicker send Ajax for json response
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";    
    var bm = 'billmurray';
    var flickrOptions = {
      tags: bm,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
 // END Flicker send Ajax for json response
    //  Button controls
     $('button').click(function () {

    $("button").removeClass("selected");
    $(this).addClass("selected");
    var hrefLink = $(this).text();
        if(hrefLink === "Home"){
           hrefLink = "index"
           }
         if(hrefLink === "About"){
           hrefLink = "about"
           }
     var linkHTML = hrefLink + '.html';        

//         console.log(linkHTML);
         window.open(linkHTML, "_self");
/*         var windowObjectReference;


  windowObjectReference = window.open(
    linkHTML,
    "_self",
    "resizable,scrollbars,status"
  );*/
//  End Button controls
         
    });
 
    
}); // end ready

    //  Validate email address
   function validateemail(inputText)
    {
       // console.log(inputText);
//        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
       var mailformat = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
                         
        if(inputText.value.match(mailformat))
        {
            document.visited.mail.focus();
        return true;
        }
        else
        {
         document.visited.mail.preventDefault();
        alert("You have entered an invalid email address!");
        var 
        document.visited.mail.focus();
        return false;
        }
    }

//  END Validate email address
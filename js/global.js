define([
    /* Includes go here. */
    'third_party/jquery/jquery-1.12.1.min',
  ], function() {

  /*
   * Determine the size of the video: the entire screen minus a multiple of
   * the height of the header.
   */
  function CalculateVideoSize() {
    var videos = $(".video_iframe");
    for(var idx = 0; idx < videos.length; idx++) {
      var headers = $("#header_common");
      var header_height = 0;
      if(headers.length > 0) {
        header_height = $(headers[0]).height();
        console.log("screen height: " + screen.height);
        console.log("header height: " + header_height);
      }
      var height = (screen.height * 0.9) - (3 * header_height);
      videos[idx].style.height = "" + height + "px";
      videos[idx].style.width = "" + (height * aspect_ratio) + "px";
    }
  }

  var aspect_ratio = 768 / 480; /* width over height */
  $(document).ready(function() {

    /* Load the common html. */
    $("#header_common").load("html/common/header.html", null, CalculateVideoSize);
    $("#footer_common").load("html/common/footer.html");

  });

  /* Public variables go here. */
  return {

  };
});

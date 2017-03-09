define([
    /* Includes go here. */
    'third_party/jquery/jquery-1.12.1.min',
  ], function() {

  /*
   * Determine the size of the video: the entire screen minus a multiple of
   * the height of the header.
   */
  var aspect_ratio = 768 / 480; /* width over height */
  $(document).ready(function() {
    var videos = $(".video_iframe");
    for(var idx = 0; idx < videos.length; idx++) {
      var headers = $(".lm-header");
      var header_height = 0;
      if(headers.length > 0) {
        header_height = $(headers[0]).height();
      }
      var height = (screen.height * 0.9) - (3 * header_height);
      videos[idx].style.height = "" + height + "px";
      videos[idx].style.width = "" + (height * aspect_ratio) + "px";
    }
  });

  /* Public variables go here. */
  return {

  };
});

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
    var headers = $("#header_common");
    var footers = $("#footer_common");

    var header_height = 0;
    if(headers.length > 0) {
      header_height = $(headers[0]).height();
    }

    var footer_height = 0;
    if(footers.length > 0) {
      footer_height = $(footers[0]).height();
    }

    for(var idx = 0; idx < videos.length; idx++) {
      var height = (screen.height * 0.88) - (3 * header_height);
      videos[idx].style.height = "" + height + "px";
      videos[idx].style.width = "" + (height * aspect_ratio) + "px";
    }

    var contents = $(".lm_content");
    if(contents.length > 0) {
      var content = contents[0];
      var content_height = screen.height - header_height - footer_height;
      content.style.minHeight = "" + content_height + "px"; 
    }

  }

  var aspect_ratio = 768 / 480; /* width over height */
  $(document).ready(function() {

    /* Load the common html. */
    $.when(
      $.get("html/common/header.html"),
      $.get("html/common/footer.html")
    ).then(function(header_response, footer_response) {
      $("#header_common").html(header_response[0]);
      $("#footer_common").html(footer_response[0]);
      CalculateVideoSize();
    });

  });

  /* Public variables go here. */
  return {

  };
});

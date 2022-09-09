(function() {
  $(function() {
    var $demo, duration, remaining, tour;
    $demo = $("#demo");
    duration = 5000;
    remaining = duration;
    tour = new Tour({
      onStart: function() {
        return $demo.addClass("disabled", true);
      },
      onEnd: function() {
        return $demo.removeClass("disabled", true);
      },
      debug: true,
    }).init();
    if (tour.ended()) {
      $('<div class="alert alert-info alert-dismissable"><button class="close" data-dismiss="alert" aria-hidden="true">&times;</button>You ended the demo tour. <a href="#" data-demo>Restart the demo tour.</a></div>').prependTo(".content").alert();
    }
    $(document).on("click", "[data-demo]", function(e) {
      e.preventDefault();
      if ($(this).hasClass("disabled")) {
        return;
      }
      tour.restart();
      return $(".alert").alert("close");
    });
    $("html").smoothScroll();
    return $(".gravatar").each(function() {
      var $this, email;
      $this = $(this);
      email = md5($this.data("email"));
      return $(this).attr("src", "http://www.gravatar.com/avatar/" + email + "?s=60");
    });
  });

}).call(this);
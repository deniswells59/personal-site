jQuery(document).ready(function($) {
  $(document).on('scroll', onScroll);
  $('.scroll').click(function (event) {
    // $('a').each(function () {
    //   $(this).removeClass('active');
    // });
    // $(this).addClass('active');
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).position().top + 1 }, 1200);
  });

  function onScroll(event) {
    const scrollPos = $(document).scrollTop();
    $('.top-nav a').each(function () {
      const currLink = $(this);
      const refElement = $(currLink.attr('href'));
      if (refElement.position().top <= scrollPos + 90 && refElement.position().top +
      refElement.height() > scrollPos) {
        $('.top-nav ul li a').removeClass('active');
        currLink.parent().addClass('active');
      } else {
        currLink.parent().removeClass('active');
      }
    });
  }
});

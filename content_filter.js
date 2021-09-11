$('.filter a').click(function(e) {
  e.preventDefault();
  var a = $(this).attr('href');
  a = a.substr(1);
  $('.gallery a').each(function() {
    if (!$(this).hasClass(a) && a != 'all')
      $(this).addClass('hide').addClass('p-0');
    else
      $(this).removeClass('hide').removeClass('p-0');
  });

});

$('.gallery a').click(function(e) {
  e.preventDefault();
  var $i = $(this);
  $('.gallery a').not($i).toggleClass('pophide');
  $i.toggleClass('pop');
});
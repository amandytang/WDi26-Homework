let pageNum = 1; // When you console log, note you are showing the page that you are setting up for requesting next i.e. not the current page you are on

// Alternative for throttling
// let requestInProgress = false; // Because when you first load the page, you are not requesting. You could declare this and your pagenum globally, or wrap it as below,

// const state = {
//   page: 1,
//   requestInProgress: false
// };

const searchFlickr = function (term) {
  console.log('Searching Flickr for', term);

  // state.requestInProgress = true; // Set this as true when you are making a request
  // if (state.requestInProgress === true) {return; } // Note that this line by itself would only let you make one request ever if you don't have a mechanism that changes your requestInProgress back to false

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';


  $.getJSON(flickrURL, {  // This bit of code is asynchronous and is not really AJAX
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: term,
    format: 'json',
    page: pageNum // Alternatively, let page = 1 globally and here you can use page++
  }).done(showImages)//.done(function () {
    // state.requestInProgress = false;
  // }); // When done, run the showImages function
  // You don't want to set the stateInProgress here because above code is asynchronous
};

const showImages = function (results) {  // We can put this here because this function is only run on search
// state.requestInProgress = false; // Alternative to chaining your dones above
  const generateURL = function (p) { // p = photo
    return [
      'http://farm',
      p.farm,
      '.static.flickr.com/',
      p.server,
      '/',
      p.id,
      '_',
      p.secret,
      '_q.jpg' // Change q to something else for different sizes
    ].join(''); // Splitting each part of our photo object to a string (url)
  }

  // For each photo, generate a URL, create an image for that URL and display the image. We would drop into debugger here to see what the object looks like

  let imageCount = document.getElementsByTagName('img').length;

  if (imageCount === results.photos.total) {
    // Do nothing
  } else {
    results.photos.photo.forEach(function (photo) {

      const thumbnailURL = generateURL(photo);
      const $img = $('<img />', {src: thumbnailURL});
      $img.appendTo('#images');

    });

    pageNum = pageNum + 1;
    return pageNum;

}};

const throttledSearchFlickr = _.throttle(searchFlickr, 6000); // Using underscore.js to prevent another query within 6s interval

$(document).ready( function () {

  $('#search').on('submit', function () {
    event.preventDefault();

    const query = $('#query').val();
    throttledSearchFlickr(query); // This would normally fire multiple times but we are throttling - don't want to ask for more before we're done with it = politeness

    $('#images').html(""); // Clear the images div each time you search again - not sure why this placement works though
  });


  $(window).on('scroll', function () {
    const documentHeight = $(document).height();
    const windowHeight = $(window).height();
    const scrollTop = $(document).scrollTop();

    const scrollBottom = documentHeight - (windowHeight + scrollTop);

    if (scrollBottom < 500) {
      const query = $('#query').val();

      throttledSearchFlickr(query);

    }
  });
});
 

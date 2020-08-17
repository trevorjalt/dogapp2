import $ from 'jquery';

// start by getting the dog pic api


// set up page to take image and display them

// make sure it takes between 1 and 50 random pics
// feature of a form that indicates the number the user wants

function main () {
  let url = 'https://dog.ceo/api/breeds/image/random/3';
  console.log('DOM is loaded');

  fetch(url)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

//   const startMsg = $('<p>Dog Webpack is working!</p>');
//   $('#root').append(startMsg);

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    main();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});


function displayResults(responseJson) {
  console.log(responseJson.message);
    let images = responseJson.message.map(url => `<img src="${url}" class="results-img">` );
    $('.hidden').html(images);
}
  // return ` 
  //     //replace the existing image with the new one
  //     $('.results-img').replaceWith(
  //       `<img src="${responseJson.message}" class="results-img">`
  //     )
  //     //display the results section
  //     $('.results').removeClass('hidden');
  //   }`






  



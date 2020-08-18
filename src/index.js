import $ from 'jquery';

function main(limit) {
  let url = `https://dog.ceo/api/breed/${limit}/images/random`;


  fetch(url)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const limit = $('#js-breed-results').val();
    main(limit);
  });
}

function displayResults(responseJson) {
  let image = `<img src="" class ="results-img">`
  console.log(responseJson.message);
  if (responseJson.message === 'Breed not found (master breed does not exist)') {
    image = `<p>Sorry, we cannot find a picture of your requested breed. Sad days.`;
  } else {
    image = `<img src="${responseJson.message}" class="results-img">`;
  }
  $('.hidden').html(image);
}

$(watchForm);

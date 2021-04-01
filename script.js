function readable_stream_fetch() {
  fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
    // The API call was successful!
    console.log('success!', response);
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
}


function response_json_fetch(){
  fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
	  // The API call was successful!
	  return response.json();
  }).then(function (data) {
    // This is the JSON from our response
    console.log(data);
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
}

//the Promise only rejects and and triggers the catch() method if there request fails to resolve. If there’s a response from the server, even if it’s a 404 or 500 error, the then() methods still run.
function basic_error_handling(){
  fetch('https://jsonplaceholder.typicode.com/postses').then(function (response) {
    // The API call was successful!
    return response.json();
  }).then(function (data) {
    // This is the JSON from our response
    console.log(data);
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
}

//To “fix” behavior of method running when error thrown. We can use the ok property on the response that the Fetch Promise returns.
//If the response.ok property is true, we’ll return the response.json(). If not, we’ll return a rejected Promise object, passing in the response, to trigger our catch() method.
function proper_error_handling(){
  fetch('https://jsonplaceholder.typicode.com/postses').then(function (response) {
	// The API call was successful!
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  }).then(function (data) {
    // This is the JSON from our response
    console.log(data);
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
}

//XMLHttpRequest 
function xhr(){
  var xhr = new XMLHttpRequest();

  // Setup our listener to process compeleted requests
  xhr.onreadystatechange = function () {

    // Only run if the request is complete
    if (xhr.readyState !== 4) return;

    // Process our return data
    if (xhr.status >= 200 && xhr.status < 300) {
      // What do when the request is successful
      console.log('success', JSON.parse(xhr.responseText));
    } else {
      // What to do when the request has failed
      console.log('error', xhr);
    }

  };
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  
  xhr.onload = () => {
    console.log(xhr.response)
  };

  xhr.send();

}

//XMLHttpRequest with error
//has same error as fetch. Will not catch error if error code is returned. Why we need to check if response falls between 200 & 300
function xhr_error(){
  var xhr = new XMLHttpRequest();

  // Setup our listener to process compeleted requests
  xhr.onreadystatechange = function () {

    // Only run if the request is complete
    if (xhr.readyState !== 4) return;

    // Process our return data
    if (xhr.status >= 200 && xhr.status < 300) {
      // What do when the request is successful
      console.log('success', JSON.parse(xhr.responseText));
    } else {
      // What to do when the request has failed
      console.log('error', xhr);
    }

  };
  xhr.open("GET", "https://jsonplaceholder.typicode.com/postses");
  
  xhr.onload = () => {
    console.log(xhr.response)
  };

  xhr.send();
}

//can use method to make a POST request to ex) publish a new article via an API.
function basic_post_fetch(){
  fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST'
  }).then(function (response) {
    // The API call was successful!
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  }).then(function (data) {
    // This is the JSON from our response
    console.log(data);
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
}

// may also need to pass data along with the request. You can do this with the body property on on your options object.
function body_post_fetch(){
  fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: 'title=' + encodeURIComponent('My awesome new article') + '&body=' + encodeURIComponent('This is the text of my article')
  }).then(function (response) {
    // The API call was successful!
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  }).then(function (data) {
    // This is the JSON from our response
    console.log(data);
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
}

function headers_post_fetch(){
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: 'title=' + encodeURIComponent('My awesome new article') + '&body=' + encodeURIComponent('This is the text of my article'),
     headers: {
       'Content-Type': 'application/json'
     },
     referrer: 'no-referrer'
  }).then(function (response) {
    // The API call was successful!
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  }).then(function (data) {
    // This is the JSON from our response
    console.log(data);
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
}

function axios_alt(){
  axios({
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/posts'
  }).then((response) => {
  console.log(response);
  }, (error) => {
    console.log(error);
  });
}

//Notes: https://gomakethings.com/how-to-use-the-fetch-api-with-vanilla-js/



//fetch statement

//response object

//.then response

//.catch error handling

//response.json();

//response.ok

//Promise.reject(response)

//XMLHttpRequest();
//xhr.onreadystatechange
//xhr.readyState
//xhr.status
//xhr.open()
//xhr.onload
//xhr.response
//xhr.send()

//method: 'POST'

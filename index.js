const owner  = 'jcpny1';
const repo   = 'javascript-fetch-lab';
const source = 'learn-co-curriculum';

function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
  fetch(`https://api.github.com/repos/${owner}/${repo}/issues`, {
    method: 'POST',
    headers: { Authorization: `token ${getToken()}` },
    body: JSON.stringify({title: $('#title').val(), body: $('#body').val()})
  }).then(function(response) {
    if(response.ok) { return Promise.resolve(response) }
    return response.json().then(json => {
      const error = new Error(json.message || response.statusText);
      displayError(error.message);
    })
  })
}

function showResults(json) {
  console.log(json);
  const template = Handlebars.compile($('#repo-template').html());
  $('#results').html(template(json));
}

function forkRepo() {
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${source}/${repo}/forks`, {
    method: 'POST',
    headers: { Authorization: `token ${getToken()}` }
  }).then(function(response) {
    if(response.ok) { return response }
    throw new Error('Network response was not ok.')
  }).then(res => res.json()).then(json => showResults(json)
   ).catch(function(error) {
     displayError(error.message)
   });
}

function displayError(msg) {
  $('#errors').html('There has been a problem with your fetch operation: ' + msg)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

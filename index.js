const api = 'https://api.github.com';

function getIssues() {
  fetch(`${api}/repos/mcansh/javascript-fetch-lab/issues`)
    .then(resp => resp.json())
    .then((json) => {
      showIssues(json)
    });
}

function showIssues(json) {
  const template = Handlebars.compile(document.querySelector('#issues-template').innerHTML);
  document.querySelector('#issues').innerHTML = template(json);
}

function createIssue() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const postData = {
    title: title,
    body: body
  }

  fetch(`${api}/repos/mcansh/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues());
}

function showResults(json) {
  const template = Handlebars.compile(document.querySelector('#repo-template').innerHTML);
  document.querySelector('#results').innerHTML = template(json);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`${api}/repos/learn-co-curriculum/javascript-fetch-lab/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(resp => resp.json())
    .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

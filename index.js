function getIssues() {
  const repo = 'lisaychuang/javascript-fetch-lab';

  fetch(`${baseApi}/repos/${repo}/issues`, {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).
    then(json => showIssues(json))
}

function showIssues(json) {
  const str = json.map(x=>{
    return `<li>Title: ${x.title} <br>
                Issue: ${x.body}
            </li>
    `
  })
  $('#issues').append(`<h3>Issues</h3><ul>${str.join('')}</ul>`);
}

function createIssue() {
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;

  // POST /repos/:owner/:repo/issues
  const repo = 'lisaychuang/javascript-fetch-lab';
  const requestBody = {
    title: issueTitle,
    body: issueBody
  }
  fetch(`${baseApi}/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(requestBody),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => getIssues())
}

function showResults(json) {
  const url = json.url
  $('#results').append(`Forked repo: <a href="#">${url}</a>`);
  console.log('Added json');
}

const baseApi = 'https://api.github.com';

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!

  fetch(`${baseApi}/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).
    then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return ''

  return '';
}
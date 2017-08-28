const username = 'weezwo'
const rootURI = 'https://api.github.com/'
const fork = `${username}/javascript-fetch-lab`

function getIssues() {
  fetch(`${rootURI}repos/${fork}/issues`).
    then(resp => {
      resp.json().then( data => {
        for (let i = 0; i < data.length; i++){
          displayIssue(new Issue(data[i]));
        }
      } )
    })
}

function createIssue() {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  fetch(`${rootURI}${fork}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify({title: title, body: body})
  }).then(res => getIssues());
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`${rootURI}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
  }
}).then(res => res.json()).then(json => console.log(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

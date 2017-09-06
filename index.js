function getIssues() {
  fetch(`https://api.github.com/repos/carakane/javascript-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  debugger;
  const jsonResults = `${json.map(j => '<p>' + j.title + '</p><p>' + j.body)}</p>`;
  document.getElementById("issues").innerHTML += jsonResults;
}

function createIssue() {
  // POST /repos/:owner/:repo/issues
  const issueData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  }
  fetch(`https://api.github.com/repos/carakane/javascript-fetch-lab/issues`, {
    method: 'post',
    title: JSON.stringify(issueData),
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => getIssues(json));

}

function showResults(json) {
  const jsonResults = `<a href="${json.html_url}">${json.html_url}</a>`;
  document.getElementById("results").innerHTML += jsonResults;
}

function forkRepo() {
  // POST /repos/:owner/:repo/forks
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

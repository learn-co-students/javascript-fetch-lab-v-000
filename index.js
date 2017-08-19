// https://api.github.com

// /repos/:owner/:repo/issues
function createIssue() {
  const repo = 'sarjumulmi/javascript-fetch-lab'
  const token = getToken();
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;
  const postData = {title: issueTitle, body: issueBody};
  console.log(postData);
  fetch(`https://api.github.com/repos/${repo}/issues`,{
    method: 'post',
    headers: {
      'Authorization': `token ${token}`
    },
    body: JSON.stringify(postData)
  }).then(resp =>  {
    return resp.json();
  }).then(json =>{
    getIssues();
  })
}

function getIssues() {
  const repo = 'sarjumulmi/javascript-fetch-lab'
  const token = getToken();
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      'Authorization': `token ${token}`
    }
  }).then(resp => {
    return resp.json()
  }).then (json => showIssues(json))
}

function showIssues(data) {
  var issues = data.map(item =>{
    return `<li>Title: <a href="${item.url}">${item.title} </a>
            <p>${item.body}</p>
            `
  });
  document.getElementById('issues').innerHTML = issues;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken();
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${token}`
    }
  }).then(res => {
    return res.json();
  //use fetch to fork it!
}).then(json => showForkedRepo(json));
}

function showForkedRepo(json) {
  console.log(json);
  $('#results').append(`
      <a href="${json.html_url}" target="_blank">${json.url} </a>
    `);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return 'e1b39cf006e7fbcadc75a17e84565a23296d32fc';
  return '';
}

const token = 'c69e87809b5759cd3abc041724f33b82717441f3';
function getIssues() {
  fetch('https://api.github.com/repos/asaki444/javascript-fetch-lab/issues', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
 
}

function createIssue() {
  const postData = {
  body: 'test body',
  title: 'title'
    };

  fetch('https://api.github.com/repos/asaki444/javascript-fetch-lab/issues', {
  method: 'post',
  body: JSON.stringify(postData),
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => {
  document.getElementById("title") = json.title;
  document.getElementById("body") = json.body;

});
}

function showResults(json) {
}

function forkRepo() {
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks', {
  method: 'post',
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

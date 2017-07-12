function getIssues() {
  const ownerRepo = document.querySelector("#full-repo-name").innerHTML.trim();
  fetch(`https://api.github.com/repos/andrewjford/javascript-fetch-lab/issues`, {
    method: "GET",
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(
    handleErrors
  ).then(
    res => res.json()
  ).then(
    json =>{
    console.log(json);
    showIssues(json)}
  ).catch(
    error => console.log(error)
  );
}

function showIssues(json) {
  var template_src = document.getElementById("issues-template").innerHTML;
  var templater = Handlebars.compile(template_src);
  var output = templater(json);

  document.getElementById("issues").innerHTML += output;
}

function createIssue() {
  const ownerRepo = document.querySelector("#full-repo-name").innerHTML.trim();

  var title = {title: document.querySelector("#title").value};
  var body = {title: document.querySelector("#title").value,
    body: document.querySelector("#body").value};

  fetch(`https://api.github.com/repos/andrewjford/javascript-fetch-lab/issues`, {
  method: "POST",
  body: JSON.stringify(body),
  headers: {
    Authorization: `token ${getToken()}`
  }
  }).
    then(handleErrors).
    then(res => res.json()).
    then(json => getIssues()).
    catch(error => console.log(error));

}

function handleErrors(response){
  if (!response.ok){
    throw Error(response.statusText);
  }
  return response;
}

function showResults(json) {
  var template_src = document.getElementById("repo-template").innerHTML;
  var templater = Handlebars.compile(template_src);
  document.querySelector("#results").innerHTML = templater(json);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "POST",
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

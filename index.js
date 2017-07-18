
const userName = 'nadinesk'
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`



/*function Issue(attributes){
  this.title = attributes.title;
  this.body = attributes.body;
  this.url = attributes.url;
}


function Repo(attributes){
  	
  this.url = attributes.url;
  
  this.html_url = attributes.html_url;


  
} 


/*Issue.prototype.template = function(){
   var template = `<li>Title: <a href="${this.url}">${this.title} </a><span> | Body: ${this.body}</span></li>`
   return template;
}; */

Repo.prototype.template = function() {
	var template = `<h3>Forked Successfully!</h3> 
					<a href="${this.url}">${this.url} </a>`
	return template; 
}; 

function getIssues(data) {
	fetch(`${baseApi}repos/${fork}/issues`).
		then(resp => {
			resp.json().then( data => {
				//console.log("data", data)
        
					//showIssues(new Issue(data[i]));
					//console.log("datanum", data) 
					
					showIssues(data); 
					//console.log(data[i].body);
				
			})
		})
}



function showIssues(issue) {
 
  var template = Handlebars.compile(document.getElementById("issues-template").innerHTML);
  var result = template(issue);
 
  document.getElementById('issues').innerHTML += result;
}


function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }
  fetch(`${baseApi}repos/${fork}/issues`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
}

/*function showResults(json) {
} */

function forkRepo() {  
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`https://api.github.com/repos/${repo}/forks`, {
  method: 'POST',  
  headers: {
    Authorization: `token ${getToken()}`
  },   
}).then(resp => 
  resp.json()).then(json => showResults(json))
}

function showResults(repo) {
  
  
	var template = Handlebars.compile(document.getElementById("repo-template").innerHTML);
  var result = template(repo);
    
	document.getElementById('results').innerHTML += result;
}; 

function getToken() {
  
  return ''
}


$(document).ready(function (){
	
});


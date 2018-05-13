console.log("before");

// ==CALLBACK HELL getUser(1, (user) => { getRepositories(user.gitHubUsername,
// repo => { getCommits(repo,commits=>{         })     }) }); == Promise
// getUser(1)     .then(user => getRepositories(user.gitHubUsername)) .then(repo
// => getCommits(repo[0]))     .then(displayCommits)     .catch(err =>
// console.log("error", err)); Async and Await approach

async function displayCommits(commit) {
    try {

        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    } catch (error) {
        console.error('ERROR', error);

    }
}

displayCommits()
console.log("after");
console.log("then after");

//==to get the user Callback Promise Async/awit

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Reading a user form a database...");
            resolve({id: id, gitHubUsername: 'razzkumar'});
        }, 2000);
    })
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('calling Github API...');
            // resolve(['repo1', 'repo2', "repo3"])
            reject("Cannot get repos")
        }, 2000);
    })
}
function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getting Commits from Github API...');
            resolve(['commit1', 'commit2', "commit3"])
        }, 2000);
    })
}
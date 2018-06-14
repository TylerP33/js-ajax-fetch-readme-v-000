const app = "I don't do much.";

const token = e925a34c3e859d9b4c27c4288d2ba5970ad561c5
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
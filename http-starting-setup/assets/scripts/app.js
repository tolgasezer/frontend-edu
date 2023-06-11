const postElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchPostsButton = document.querySelector("#available-posts button");
//const postList = document.querySelector('')

// function sendHttpRequest(method, url, data) {
//   // const promise = new Promise((resolve, reject) => {
//   //   const xhr = new XMLHttpRequest();
//   //   xhr.open(method, url);

//   //   xhr.responseType = "json";

//   //   xhr.onload = function () {
//   //     if (xhr.status >=200 && xhr.status<300){
//   //       resolve(xhr.response);

//   //     }else {
//   //       reject(new Error ('Something went wrong!'));
//   //     }
//   //   };

//   //   xhr.send(JSON.stringify(data));
//   // });
//   // return promise;
//   return fetch(url, {
//     method: method,
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then(response => {
//     if (response.status >= 200 && response.status < 300) {
//       return response.json()
//     }else {
//       response.json().then(errData => {
//         console.log(errData);
//         throw new Error('Something went wrong!');
//       });
//     }
//   } ).catch (error => {
//     console.log(error);
//     throw new Error('Something bla bla');
//   })
// };

async function fetchPost() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const listOfPosts = response.data;
    console.log(listOfPosts);
    listOfPosts.forEach((post) => {
      const postEL = document.importNode(postTemplate.content, true);
      postEL.querySelector("h2").textContent = post.title.toUpperCase();
      postEL.querySelector("p").textContent = post.body;
      postEL.querySelector("li").id = post.id;
      postElement.append(postEL);
    });
  }catch (error){
    alert(error.message);
  }

  }

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };
  const fd = new FormData (form);
  fd.append('userId', userId);
  const response = await axios.post("https://jsonplaceholder.typicode.com/posts", fd);
  console.log(response);
}

fetchPostsButton.addEventListener("click", fetchPost);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;

  createPost(enteredTitle, enteredContent);
});
postElement.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id;
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
});

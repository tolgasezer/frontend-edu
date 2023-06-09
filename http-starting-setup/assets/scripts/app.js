const postElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const fetchPostsButton = document
  .getElementById("available-posts")
  .querySelector("button");

function sendHttpRequest(method, url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = "json";

    xhr.onload = function () {
      resolve(xhr.response);
    };

    xhr.send();
  });
  return promise;
};

async function fetchPost() {
  const responseData = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  const listOfPosts = responseData;
  console.log(listOfPosts);
  listOfPosts.forEach((post) => {
    const postEL = document.importNode(postTemplate.content, true);
    postEL.querySelector("h2").textContent = post.title.toUpperCase();
    postEL.querySelector("p").textContent = post.body;
    postElement.append(postEL);
  });
}

fetchPostsButton.addEventListener("click", fetchPost);

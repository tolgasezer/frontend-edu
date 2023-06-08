const postElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const fetchPostsButton = document
  .getElementById("available-posts")
  .querySelector("button");

  
  const getPosts = () => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
      
      xhr.responseType = "json";
      
      xhr.onload = function () {
          const listOfPosts = xhr.response;
          
          listOfPosts.forEach((post) => {
              const postEL = document.importNode(postTemplate.content, true);
              postEL.querySelector("h2").textContent = post.title.toUpperCase();
              postEL.querySelector("p").textContent = post.body;
              postElement.append(postEL);
            });
            
            console.log(listOfPosts);
        };
        
        xhr.send();
    };
    
fetchPostsButton.addEventListener("click", getPosts);
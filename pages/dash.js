
async function fetchCommentsData() {
    try {
      const commentData = await fetch("https://fakestoreapi.com/products");
      const data = await commentData.json();
  
      console.log(data); 
  
      const sec = document.getElementById("comment-list");
  
      sec.innerHTML = '';
  
      data.forEach((item) => {
        const newItem = document.createElement("div");

        newItem.classList.add("item");

        newItem.innerText = item.title; 
  
        sec.appendChild(newItem);
      });
  
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  fetchCommentsData();
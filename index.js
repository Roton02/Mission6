const getPosts = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts`
  );
  const data = await response.json();
  data.posts.forEach((post) => {
    dataLoad(post);
  });
};

const dataLoad = (post) => {
  console.log(post);
  const showCardData = document.getElementById("show card");
  const div = document.createElement("div");
  div.classList = "card card-side bg-[#797DFC1A]  shadow-xl";
  div.innerHTML = `
    <div class="flex">
    <div>
        <figure><img class="p-6 w-48" src="${post.image }" alt=""></figure>
    </div>
    <div class="card-body">
      <div class="flex gap-3">
        <h1># ${post.category}</h1>
        <h1>Author : ${post.author.name}</h1>
      </div>
      <div class="space-y-2"><h1 class="text-xl font-semibold">${post.title}</h1>
        <h1>${post.description }</h1></div> <hr class="my-4">
        <div class="flex justify-between">
          <div class="flex gap-4">
            <h2> <i class="fa-regular fa-comment-dots"></i> ${post.comment_count}</h2>
            <h2> <i class="fa-solid fa-eye"></i> ${post.view_count }</h2>
            <h2> <i class="fa-solid fa-clock"></i> ${post.posted_time}</h2>
          </div>
          <div>  <button onclick="showCard2Data()" class="bg-green-400 px-2 py-1 rounded-full"><i class="fa-solid fa-envelope-open"></i></button></div>
        </div>
    </div>
 </div>
    `;
  showCardData.appendChild(div);
};

const showCard2Data = () =>{
console.log('CLICK PAICI');
}


getPosts();

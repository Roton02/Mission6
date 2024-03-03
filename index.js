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
  // console.log(post);
  // is active cheek

  const showCardData = document.getElementById("show card");
  const div = document.createElement("div");
  div.classList = "card card-side bg-[#797DFC1A]  shadow-xl";
  div.innerHTML = `
    <div class="flex">
    <div>  
        <div class="relative"> 
        <figure><img class="p-2 lg:p-6 w-32 lg:w-48 rounded-2xl  " src="${post.image}" alt=""></figure>
        <div id="isActive" class="w-4 h-4 bg-red-700    rounded-full absolute 
        top-0 right-0 lg:top-4 lg:right-4 ">  </div>
        </div>
    </div>
    <div class="card-body">
      <div class="flex gap-3 flex-col lg:flex-row">
        <h1># ${post.category}</h1>
        <h1>Author : ${post.author.name}</h1>
      </div>
      <div class="space-y-2"><h1 class="text-xl font-semibold">${post.title}</h1>
        <h1>${post.description}</h1></div> <hr class="my-4">
        <div class="flex justify-between ">
          <div class="flex gap-2 lg:gap-4">
            <h2> <i class="fa-regular fa-comment-dots"></i> ${post.comment_count}</h2>
            <h2> <i class="fa-solid fa-eye"></i> ${post.view_count}</h2>
            <h2> <i class="fa-solid fa-clock"></i> ${post.posted_time}</h2>
          </div>
          <div>  <button onclick="showCard2Data('${post.title, post.view_count}')" class="bg-green-400 px-2 py-1 rounded-full"><i class="fa-solid fa-envelope-open"></i></button></div>
        </div>
    </div>
 </div>
    `;
  showCardData.appendChild(div);

  const cheekActive = document.getElementById("isActive");
  // console.log(cheekActive);
  if (`${post.isActive}`) {
    cheekActive.style.backgroundColor = "green";
  } else {
    cheekActive.style.backgroundColor = "red";
  }
};

const showCard2Data = async (data1, data2) => {
  console.log(data1 , data2);
  const respone = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${data1, data2}`
  );
  const postData = await respone.json();
  console.log(postData);

  const showMarkNews = document.getElementById("show-mark-news");
  const div = document.createElement("div");
  div.classList = "card lg:w-96 bg-[#12132D0D] p-6";
  div.innerHTML = `
        <div class="flex justify-between mb-5 ">
        <h1 class="text-xl font-semibold">Title</h1>
        <h1><i class="fa-solid fa-check-double mr-1 text-green-500"></i> Mark as read ( <span>0</span> )</h1>
       </div>
       <div class="flex justify-between rounded-xl p-2 bg-white space-y-5 ">
        <h1>10 Kids Unaware of Their <br> Halloween Costume</h1>
        <h1>51010</h1>
       </div>
      </div>
    `;
};

const latestPost = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await response.json();
  data.forEach((element) => {
    // console.log(element);

    const latestPostShow = document.getElementById("letest-post");
    const div = document.createElement("div");
    div.classList = " card  bg-base-100 shadow-xl";
    div.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${element.cover_image}" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body ">
        <h1> <i class="fa-regular fa-calendar-days mr-4"></i> ${
          element.author?.posted_date
            ? element.author?.posted_date
            : "No publish date"
        }</h1>
        <h1 class="text-xl font-semibold">${element.title}</h1>
        <p>${element.description} </p>
        <div class="flex gap-5" >
          <img class="w-12 rounded-full" src="${element.profile_image}" alt="">
          <div>
            <h1 class="font-bold">${element.author.name}</h1>
            <p>${
              element.author?.designation
                ? element.author.designation
                : "Unknown"
            }</p>
          </div>
        </div>
      </div>
        `;
    latestPostShow.appendChild(div);
  });
};

getPosts();
latestPost();

let items = [{
  "link": "./youtube/thumbnails/thumbnail-1.webp",
  "time": "14:20",
  "imgUrl": "./youtube/channel-pictures/channel-1.jpeg",
  "title": "Talking Tech and AI with Google CEO Sundar Pichai!",
  "author": "Marques Brownlee",
  "prevNum": "3.4M views &#183; 6 months ago"
},
{
  "link": "./youtube/thumbnails/thumbnail-2.webp",
  "time": "8:22",
  "imgUrl": "./youtube/channel-pictures/channel-2.jpeg",
  "title": "Try Not To Laugh Challenge #9",
  "author": " Markiplier",
  "prevNum": "19M views &#183; 4 years ago"
},
{
  "link": "./youtube/thumbnails/thumbnail-3.webp",
  "time": "9:13",
  "imgUrl": "./youtube/channel-pictures/channel-3.jpeg",
  "title": "Crazy Tik Toks Taken Moments Before DISASTER",
  "author": "SSSniperWolf",
  "prevNum": "12M views &#183;1 year ago"
},
{
  "link": "./youtube/thumbnails/thumbnail-4.webp",
  "time": "22:09",
  "imgUrl": "./youtube/channel-pictures/channel-4.jpeg",
  "title": "The Simplest Math Problem No One Can Solve - Collatz Conjecture",
  "author": "Veritasium",
  "prevNum": "18M views &#183; 4 months ago"
},
{
  "link": "./youtube/thumbnails/thumbnail-5.webp",
  "time": "11:17",
  "imgUrl": "./youtube/channel-pictures/channel-5.jpeg",
  "title": "Kadane&#39;s Algorithm to Maximum Sum Subarray Problem",
  "author": "VCS Dojo",
  "prevNum": "519K views &#183; 5 years ago"
},
{
  "link": "./youtube/thumbnails/thumbnail-6.webp",
  "time": "19:59",
  "imgUrl": "./youtube/channel-pictures/channel-6.jpeg",
  "title": "Anythung You Can Fit In The Circle I&#39;ll Pay For",
  "author": "MrBeast",
  "prevNum": "141M views &#183; 1 year ago"
},
{
  "link": "./youtube/thumbnails/thumbnail-7.webp",
  "time": "17:35",
  "imgUrl": "./youtube/channel-pictures/channel-7.jpeg",
  "title": "Why Planes Don&#39;t Fly Over Tibet",
  "author": "RealLifeLore",
  "prevNum": "6.6M views &#183; 1 year ago"
},
{
  "link": "./youtube/thumbnails/thumbnail-8.webp",
  "time": "08:38",
  "imgUrl": "./youtube/channel-pictures/channel-8.jpeg",
  "title": "Inside The World&#39;s Biggest Passenger Plane",
  "author": "Tech Vision",
  "prevNum": "3.7M views &#183; 10 months ago"
},
{
  "link": "./youtube/thumbnails/thumbnail-9.webp",
  "time": "11:27",
  "imgUrl": "./youtube/channel-pictures/channel-9.jpeg",
  "title": "The SECRET to Super Human STRENGHT",
  "author": "ThenX",
  "prevNum": "20M views &#183; 3 years ago"
},
{
  "link": "./youtube/thumbnails/thumbnail-10.webp",
  "time": "12:03",
  "imgUrl": "./youtube/channel-pictures/channel-10.jpeg",
  "title": "How the World&#39;s Largest Cruise Ship Makes 30,000 Meals Every Day",
  "author": "Business Insider",
  "prevNum": "14M views &#183; 1 year ago"
},
{
  "link": "./youtube/thumbnails/thumbnail-11.webp",
  "time": "26:33",
  "imgUrl": "./youtube/channel-pictures/channel-11.jpeg",
  "title": "Dubai&#39;s Crazy Underwater Train and Other Things &#35;Only in Dubai",
  "author": "Destination Tips",
  "prevNum": " 3M views &#183; 1 year ago"
},
{
  "link": "./youtube/thumbnails/thumbnail-12.webp",
  "time": "07:12",
  "imgUrl": "./youtube/channel-pictures/channel-12.jpeg",
  "title": "What would happen if you didn&#39;t drink water? - Mia Nacamulli",
  "author": "TED-Ed",
  "prevNum": "12M views &#183; 5 years ago"
}
];
function showVideos(text) {
  var container = document.getElementById("main-container");
  container.innerHTML = '';
  items.forEach((item) => {
    if (text == '' || item.author.toLocaleLowerCase().includes(text) || item.title.toLocaleLowerCase().includes(text)) {
      container.innerHTML += `<div class="video-preview">
       <div class="thumbnail-row">
       <img class="thumbnail" src="${item.link}">
       <div class="video-time">${item.time}</div>
       </div>
       <div class="video-info-grid">
       <div class="channel-picture">
       <img class="profile-picture" src="${item.imgUrl}">
       </div>
      <div class="video-info">
     <p class="video-title">
      ${item.title}
      </p>
      <p class="video-author">
      ${item.author}
      </p>
      <p class="video-stats">
      ${item.prevNum}
      </p>
      </div>
      </div>
      <div>`;
    }
  });
}
window.onload = function () {
  showVideos('');
  const search = document.querySelector('.search-bar');
  search.addEventListener("input", (e) => {
    let text = e.target.value.toLocaleLowerCase();
    showVideos(text);
  });
}

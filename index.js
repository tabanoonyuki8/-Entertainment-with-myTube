const loadAll = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/category/1000");
    const data = await res.json();
    const all = data.data;
    displayAll(all);
}
const loadMusic = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/category/1001");
    const data = await res.json();
    const all = data.data;
    displayAll(all);
}
const loadComedy = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/category/1003");
    const data = await res.json();
    const all = data.data;
    displayAll(all);
}
const loadDrawing = async () => {
    const res = await fetch( "https://openapi.programming-hero.com/api/videos/category/${id}");
    const data = await res.json();
    const all = data.data;
    displayAll(all);
}
const displayAll =(all) =>{
const DisplayAll=document.getElementById("video-container");
DisplayAll.textContent= '';
all.forEach(all =>{
   //create div
   const allCard=document.createElement("div");
//    allCard.classList= card bg-gray-100 p-4 shadow-xl h-full flex flex-col;
allCard.innerHTML=`
<figure>
          <img src="${all.thumbnail}" alt="${all.title}" class="h-48 w-full object-cover mb-2" />
        </figure>
        <div class="card-body flex-grow">
          <div class="mb-2">
            ${all.authors.map((author) => `
              <div class="flex items-center">
                <img src="${author.profile_picture}" alt="${author.profile_name}" class="w-12 h-12 rounded-full mr-2" />
                <div class="flex flex-col"> <!-- Changed to flex-col -->
                  <span class="text-gray-600 text-lg font-bold">${all.title}</span> <!-- video name -->
                  <h2 class="text-gray-600 text-sm text-lg ${author.verified ? 'text-blue-500' : 'text-base'}">${author.profile_name} ${author.verified ? '<span class=" ml-2">&#10004;</span>' : ''}</h2>
  
  
                  <span class="text-gray-600 text-sm text-lg">${all.others.views} views</span> <!-- Views below -->
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      DisplayAll.appendChild(allCard);
})
}

//handle button

const allBitton =() =>{
    loadAll();
}
const MusicButton =() =>{
   
    loadMusic();
}
const ComedyButton =() =>{
    loadComedy ();
}
const drawingButton =() =>{
    loadDrawing ();
}



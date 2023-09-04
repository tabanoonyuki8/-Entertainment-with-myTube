const loadVideo = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/category/1000");
    const data = await res.json();
    const videos = data.data;
  
    // Move the "verified" information to the  API data
    const modifiedVideos = videos.map((video) => {
      const verifiedAuthors = video.authors.filter((author) => author.verified);
      const nonVerifiedAuthors = video.authors.filter((author) => !author.verified);
  
      return {
        ...video,
        authors: [...verifiedAuthors, ...nonVerifiedAuthors],
      };
    });
  
    displayVideos(modifiedVideos);
  };
  
  const displayVideos = (videos) => {
    const videoContainer = document.getElementById('video-container');
  
    videos.forEach((video) => {
      const videoCard = document.createElement("div");
    //   videoCard.classList = card bg-gray-100 p-4 shadow-xl h-full flex flex-col;
  
      videoCard.innerHTML = `
        <figure>
          <img src="${video.thumbnail}" alt="${video.title}" class="h-48 w-full object-cover mb-2" />
        </figure>
        <div class="card-body flex-grow">
          <div class="mb-2">
            ${video.authors.map((author) => `
              <div class="flex items-center">
                <img src="${author.profile_picture}" alt="${author.profile_name}" class="w-12 h-12 rounded-full mr-2" />
                <div class="flex flex-col"> <!-- Changed to flex-col -->
                  <span class="text-gray-600 text-lg font-bold">${video.title}</span> <!-- video name -->
                  <h2 class="text-gray-600 text-sm text-lg ${author.verified ? 'text-blue-500' : 'text-base'}">${author.profile_name} ${author.verified ? '<span class=" ml-2">&#10004;</span>' : ''}</h2>
  
  
                  <span class="text-gray-600 text-sm text-lg">${video.others.views} views</span> <!-- Views below -->
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
  
      videoContainer.appendChild(videoCard);
    });
  };
  
  loadVideo();
  
  // btn add
  const loadCategories = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    const categories = data.data;
  
    displayCategories(categories);
  };
  
  const displayCategories = (categories) => {
    const header = document.querySelector('header');
  
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('flex', 'space-x-4', 'mb-4', 'justify-center');
  
    categories.forEach((category) => {
      const categoryButton = document.createElement('button');
      categoryButton.classList.add('btn', 'btn-primary','bg-red-500');
      categoryButton.textContent = category.category;
      categoryButton.addEventListener('click', () => {
        // Handle button click event here, we can use category.category_id or category.category for further actions
      });
  
      buttonContainer.appendChild(categoryButton);
    });
  
    header.appendChild(buttonContainer);
  };
  
  loadCategories();
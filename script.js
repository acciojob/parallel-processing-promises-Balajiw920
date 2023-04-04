//your JS code here. If required.
const images = [
  {
    url: 'https://picsum.photos/200',
    alt: 'Random Image 1'
  },
  {
    url: 'https://picsum.photos/250',
    alt: 'Random Image 2'
  },
  {
    url: 'https://picsum.photos/300',
    alt: 'Random Image 3'
  }
];

function downloadAndDisplayImages() {
  const promises = images.map(image => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = image.url;
      img.onload = () => {
        resolve(img);
      };
      img.onerror = () => {
        reject(`Failed to load image's URL: ${image.url}`);
      };
    });
  });

  Promise.all(promises)
    .then(images => {
      const outputDiv = document.getElementById('output');
      images.forEach(img => {
        outputDiv.appendChild(img);
      });
    })
    .catch(error => {
      console.error(error);
    });
}

const downloadButton = document.getElementById('download-images-button');
downloadButton.addEventListener('click', downloadAndDisplayImages);

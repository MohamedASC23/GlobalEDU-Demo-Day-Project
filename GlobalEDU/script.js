const firebaseConfig = {
  apiKey: "",
  authDomain: "fir-day-project-globaledu.firebaseapp.com",
  projectId: "fir-day-project-globaledu",
  storageBucket: "fir-day-project-globaledu.appspot.com",
  messagingSenderId: "396793205448",
  appId: "1:396793205448:web:25936aafddd3099be70bfd",
  measurementId: "G-1JH67YGHD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





















var images = [
  "Photos/edu1.jpg",
  "Photos/edu2.jpg",
  "Photos/edu3.jpg",
  // Add more image URLs here
];

var currentImageIndex = 0;

function changeImage() {
  var imageElement = document.querySelector(".images");
  imageElement.src = images[currentImageIndex];

  currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Call the changeImage function every 5 seconds
setInterval(changeImage, 5000);
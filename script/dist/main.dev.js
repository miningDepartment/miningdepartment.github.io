"use strict";

var menuButton = document.getElementById('menuButton');
menuButton.addEventListener('click', menuToggle);

function menuToggle() {
  console.log('menuToggle');
  var menuList = document.getElementById('menuList');
  menuList.classList.toggle('show');

  if (menuList.classList.contains('show')) {
    menuButton.innerHTML = 'close';
  } else {
    menuButton.innerHTML = 'menu';
  }
} // popup scripts


var modal = document.getElementById("myModal");
var img = document.querySelectorAll('.main__photo');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.forEach(function (element) {
  element.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
}; // popup scripts
// Get the video


var video = document.getElementById("myVideo"); // Get the button

var btn = document.getElementById("myBtn"); // Pause and play the video, and change the button text

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

function test() {
  var introVideo = document.getElementById('myVideo');
  var introVideoSource = document.createElement('source');
  introVideoSource.removeAttribute('src');
  introVideoSource.setAttribute('src', './introPhone.mp4');
  introVideo.appendChild(introVideoSource);
  introVideo.play();
}
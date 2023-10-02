// $(document).ready(function() {
//   $('.card-front').on('click', function() {
//       // $("#showImg").empty();
//       // var image = $(this).attr("src");
//       // $("#showImg").append("<img class='modal-content' src='" + image + "' />")
//   })
// });
    
// document.addEventListener('DOMContentLoaded', function() {  
//     // Get the modal
//     var modal = document.getElementById("myModal");
    
//     // Get the image and insert it inside the modal - use its "alt" text as a caption
//     var imgfront = document.getElementsByClassName("card-front");
//     var imgback = document.getElementsByClassName("card-back");
//     var modalImg = document.getElementById("img01");
//     var captionText = document.getElementById("caption");

// Loop through the elements and simulate clicking the images
// for (let i = 0; i < img.length; i++) {
//     img[i].onclick = function(){
//       modal.style.display = "block";
//       modalImg.src = this.src;
//       captionText.innerHTML = this.alt;
      
//     }
//   };

// for (let i = 0; i < imgfront.length; i++) {
//   imgfront[i].onclick = function(){
//         var showImage = this.src
//         modal.style.display = "block";
//         this.src = "imgback"[i];
//         imgback.src = this.src;
//         this.src = showImage[i];
//         modalImg.src = this.src;
//         captionText.innerHTML = this.alt;
    
//   }
// };

// });

// document.addEventListener('DOMContentLoaded', function() {
//   var images = document.querySelectorAll('.card-front');

//   images.forEach(function(img) {
//       img.addEventListener('click', function() {
        
//         var revealMovie = this.closest('.day').querySelector('.revealMovie');
//         myModal.style.display = "block";
//     revealMovie.style.display = 'block'; // or 'inline-block' if you prefer
//           // var showImg = document.getElementsByClassName('card-front');
//           // showImg.innerHTML = ' ';

//           var image = this.getAttribute('src');
//           var imgElement = document.createElement('img');
//           var revealMovie = this.closest('.day').querySelector('.revealMovie');
//           // var revealImg = document.getElementsByClassName('card-back');

//           imgElement.classList.add('img01');
//           imgElement.setAttribute('src', image);
//             //img                 class="card-back"
//           revealImg.appendChild(imgElement);
//       });
//   });
// });

// var cardFronts = document.querySelectorAll('.card-front');
// var revealMovies = document.querySelectorAll('.revealMovie');
// var closeModalButtons = document.querySelectorAll('.close');

// cardFronts.forEach(function (cardFront, index) {
//    cardFront.addEventListener('click', function () {
//       revealMovies[index].style.display = 'block';
//    });
// });

// closeModalButtons.forEach(function (closeButton) {
//    closeButton.addEventListener('click', function () {
//       var modal = closeButton.parentElement;
//       modal.style.display = 'none';
//    });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   var cardFronts = document.querySelectorAll('.card-front');
//   var revealMovies = document.querySelectorAll('.revealMovie');
//   var closeModalButtons = document.querySelectorAll('.close');
//   var modal = document.getElementById('myModal');
  
//   cardFronts.forEach(function (cardFront, index) {
//      cardFront.addEventListener('click', function () {
//         modal.style.display = 'block';
//      });
//   });
  
//   closeModalButtons.forEach(function (closeButton) {
//      closeButton.addEventListener('click', function () {
//         modal.style.display = 'none';
//      });
//   });
// });


// var cardFronts = document.querySelectorAll('.card-front');
// var revealMovies = document.querySelectorAll('.revealMovie');
// var closeModalButtons = document.querySelectorAll('.close');
// var myModal = document.getElementById('myModal');

// cardFronts.forEach(function (cardFront, index) {
//    cardFront.addEventListener('click', function () {
//     myModal.style.display = 'block';
//       revealMovies[index].style.display = 'block';
      
//    });
// });

// closeModalButtons.forEach(function (closeButton) {
//    closeButton.addEventListener('click', function () {
//       var modal = closeButton.parentElement;
//       modal.style.display = 'none';
//    });
// });




// var cardFronts = document.querySelectorAll('.card-front');
// var revealMovies = document.querySelectorAll('.revealMovie');
// var closeModalButtons = document.querySelectorAll('.close');
// var myModal = document.getElementById('myModal');
// var modalImg = document.getElementById('modalImg');
// var captionText = document.getElementById('caption');

// cardFronts.forEach(function (cardFront, index) {
//    cardFront.addEventListener('click', function () {
//     myModal.style.display = 'block';
//       modalImg.src = revealMovies[index].src;
//    });
// });

// var modal = document.getElementById('myModal');
//     var modalImg = document.getElementById('modalImg');
//     var captionText = document.getElementById('caption');

//     var cardFronts = document.getElementsByClassName('card-front');
//     for (var i = 0; i < cardFronts.length; i++) {
//         cardFronts[i].addEventListener('click', function () {
//             modal.style.display = 'block';
//             modalImg.src = this.nextElementSibling.firstElementChild.src;
//             captionText.innerHTML = this.nextElementSibling.firstElementChild.alt;
//         });
//     }

//     var span = document.getElementsByClassName('close')[0];

//     span.addEventListener('click', function () {
//         modal.style.display = 'none';
//     })

// document.addEventListener('DOMContentLoaded', function () {
   var modal = document.getElementById('myModal');
   var modalImg = document.getElementById('modalImg');
   var captionText = document.getElementById('caption');
   var movieDescription = document.getElementById('movieDescription');

   var cardFronts = document.getElementsByClassName('card-front');
   for (var i = 0; i < cardFronts.length; i++) {
       cardFronts[i].addEventListener('click', function () {
           modal.style.display = 'block';
           var revealMovie = this.nextElementSibling.querySelector('.revealMovie');
           modalImg.src = revealMovie.src;
           captionText.innerHTML = revealMovie.alt;
           movieDescription.innerHTML = revealMovie.nextElementSibling.innerHTML;
       });
   }

   var span = document.getElementsByClassName('close')[0];

   span.addEventListener('click', function () {
       modal.style.display = 'none';
   });
// });

// closeModalButtons.forEach(function (closeButton) {
//    closeButton.addEventListener('click', function () {
//       myModal.style.display = 'none';
//    });
// });



// document.addEventListener('DOMContentLoaded', function() {

//   imgfront.forEach(function(img) {
//       img.addEventListener('click', function() {
//           imgback.innerHTML = '';

//           var imgfront = this.getAttribute('src');
//           var imgElement = document.createElement('img');
//           imgElement.classList.add('card-back');
//           imgElement.setAttribute('src', imgfront);

//           showImg.appendChild(imgElement);
//       });
//   });
// });


// Array.from(img).forEach(function(imgArray, i) {
//   imgArray.onclick = function(){
//     let showImage = this.src;
//     modal.style.display = "block";
//     this.src = showImage[i];
//     modalImg.src = this.src;
//     this.src = default_image;
//     captionText.innerHTML = this.alt;
//   }
// });


// good one
  // for (let i = 0; i < img.length; i++) {
  //   img[i].onclick = function(){
  //     modal.style.display = "block";
  //     this.src = "imgback";
  //     imgback.src = this.src;
  //     this.src = [i];
  //     modalImg.src = this.src;
  //     captionText.innerHTML = this.alt;
      
  //   }



  // for (let i = 0; i < imgback.length; i++) {
  //   imgback
  //   imgback[i].style.display="block";
  //   span.onclick = function(){
  //     modal.style.display = "block";
  //     imgback.src = this.src;
  //  }
  // };



    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      myModal.style.display = "none";
    }
    // function toggle(img, none){
    //     var elements = document.getElementsByClassName(img)
    
    //     for (var i = 0; i < elements.length; i++){
    //         elements[i].style.display = none;
    //     }
    // }

    // $('#exampleModal').on('show.bs.modal', function (event) {
    //   var button = $(event.relatedTarget) // Button that triggered the modal
    //   var recipient = button.data('card') // Extract info from data-* attributes
    //   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    //   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    //   var modal = $(this)
    //   modal.find('modal-content')
    // })

  // });
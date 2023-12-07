 $(document).ready(function() {
     $(document).on('mousemove', function(e) {
       $('#circularcursor').css({
         left: e.pageX,
         top: e.pageY
       });
     })
   });

 var typed = new Typed('.auto-type', {
   strings: [" Endless runner", " Futuristic Cyberpunk theme", "10+ Youth"],
   typeSpeed: 100,
   backSpeed: 100,
   loop: true
   });
  function loadSection(sectionId) {
     var section = document.getElementById(sectionId);
     var xhr = new XMLHttpRequest();
     xhr.open('GET', sectionId + '.html', true);
     xhr.onreadystatechange = function () {
         if (xhr.readyState === XMLHttpRequest.DONE) {
             if (xhr.status === 200) {
                 section.innerHTML = xhr.responseText;
                 section.classList.add('visible');
             } else {
                 console.error('Error loading content:', xhr.status);
             }
         }
     };
     xhr.send();
 }

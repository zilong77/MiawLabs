
  


   document.addEventListener('DOMContentLoaded', function () {
     const toggleButton = document.getElementById('toggleButton');
     const htmlElement = document.documentElement;

     toggleButton.addEventListener('click', function () {
       htmlElement.classList.toggle('dark');
       const icon = toggleButton.querySelector('i');
       if (htmlElement.classList.contains('dark')) {
         icon.classList.remove('fa-sun');
         icon.classList.add('fa-moon');
       } else {
         icon.classList.remove('fa-moon');
         icon.classList.add('fa-sun');
       }
     });
   });
  
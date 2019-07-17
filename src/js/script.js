$(document).ready(function () {

      //hamburger nav 
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });

      //Top Nav Drop down 
      $('#dropdownMenuButton').on('click', function () {
          $('#top-dropdown').toggleClass('active');
      });


      //Dashboard blue drop down 
      $('.blue-btn').on('click', function (){
          $('#blue-dropdown').toggleClass('active');
      });


      //Revenue drop down 
      $('#filter').on('click', function (){
          $('#filter-dropdown').toggleClass('active');
      });

      $(window).resize(function() {
        if ($(window).width() < 1200) {
           $('#sidebar').addClass('active');
          
        }
       else {
          $('#sidebar').removeClass('active');
       }
      });

  });
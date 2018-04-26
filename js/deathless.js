/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$( "#index-read-more" ).click(function(e) {
     e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#feature").offset().top
    }, 1000);
});

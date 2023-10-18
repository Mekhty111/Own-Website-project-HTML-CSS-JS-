document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    var thumbnailElement2 = document.getElementById("smart_thumbnail2");
    thumbnailElement.addEventListener("click", function() {

        if (thumbnailElement.className != "small") {
            thumbnailElement.className = "small";
        }
        else thumbnailElement.className = "";


        
      });
      thumbnailElement2.addEventListener("click", function() {

        if (thumbnailElement2.className != "small") {
            thumbnailElement2.className = "small";
        }
        else thumbnailElement2.className = "";


        
      });
});
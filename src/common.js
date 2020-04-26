$(function(){
    $("#header").load("/views/includes/header.html");
    $("#exp3").load("/views/includes/exp3.html");
    $("#exp2").load("/views/includes/exp2.html");
    $("#exp1").load("/views/includes/exp1.html");
    $("#skill").load("/views/includes/skillSet.html");
    $("#footer").load("/views/includes/footer.html"); 
});

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }
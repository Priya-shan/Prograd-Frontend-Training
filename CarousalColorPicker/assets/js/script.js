const colorPicker = document.getElementById('colorPicker');

colorPicker.addEventListener('input', function () {
  const selectedColor = colorPicker.value;
  console.log(selectedColor);
  document.getElementById('wholeBody').style.backgroundColor = selectedColor;
  document.getElementById('displayColor').innerText = 'Color Picked: ' + selectedColor;
});

const totalPages = 4;
if(localStorage.getItem("currentPage")==null){
    console.log("eneteered ifff");
    localStorage.setItem("1",'white');
    localStorage.setItem("2",'white');
    localStorage.setItem("3",'white');
    localStorage.setItem("currentPage",1);
}

var currentPage=localStorage.getItem("currentPage");
var color=localStorage.getItem(currentPage);
document.getElementById("wholeBody").style.backgroundColor=color;
document.getElementById("displayColor").innerText='Color Picked: '+color;
function nextPage() {
    console.log("**"+localStorage.getItem("currentPage"));
    var element =document.getElementById("wholeBody");
    var backgroundColor = window.getComputedStyle(element).backgroundColor;
   var currentPage=localStorage.getItem("currentPage");
   localStorage.setItem(currentPage,backgroundColor);
  if (currentPage < totalPages) {
    currentPage++;
    localStorage.setItem("currentPage",currentPage);
   
    loadPage();
  }
}

function prevPage() {
 console.log("**"+localStorage.getItem("currentPage"));
 var element =document.getElementById("wholeBody");
 var backgroundColor = window.getComputedStyle(element).backgroundColor;
   var currentPage=localStorage.getItem("currentPage");
   localStorage.setItem(currentPage,backgroundColor);
  if (currentPage > 1) {
    currentPage--;
    localStorage.setItem("currentPage",currentPage)
    loadPage();
  }
}

function loadPage() {
  pageNumber=localStorage.getItem("currentPage");
  var src = pageNumber + '.html'; // Assuming the HTML pages are named as "1.html", "2.html", etc.
  window.location.href = src;
}
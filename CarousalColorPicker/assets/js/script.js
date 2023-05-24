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
    localStorage.setItem("currentPage",1);
}


function nextPage() {
    console.log("**"+localStorage.getItem("currentPage"));
   var currentPage=localStorage.getItem("currentPage");
  if (currentPage < totalPages) {
    currentPage++;
    localStorage.setItem("currentPage",currentPage);
    loadPage();
  }
}

function prevPage() {
 console.log("**"+localStorage.getItem("currentPage"));
 var currentPage=localStorage.getItem("currentPage");
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

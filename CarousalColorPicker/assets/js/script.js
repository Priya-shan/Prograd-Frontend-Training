const colorPicker = document.getElementById('colorPicker');

colorPicker.addEventListener('input', function () {
  const selectedColor = colorPicker.value;
  console.log(selectedColor);
  document.getElementById('wholeBody').style.backgroundColor = selectedColor;
  document.getElementById('displayColor').innerText = 'Color Picked: ' + selectedColor;
});

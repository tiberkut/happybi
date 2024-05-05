function displayPhoto() {
  const url1 = "img/download.jpg";
  const url2 = "img/iloveu.jpg";
  const imgElement = document.getElementById("displayed-photo");
  if (imgElement.src.includes(url1)) {
    imgElement.src = url2;
  } else {
    imgElement.src = url1;
  }

}

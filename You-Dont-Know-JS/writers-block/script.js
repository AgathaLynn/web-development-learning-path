

var wordRequest = new XMLHttpRequest();
wordRequest.open("GET", "http://www.setgetgo.com/randomword/get.php");
wordRequest.onload = function() {
  if (wordRequest.status === 200) {
    console.log(wordRequest);
    var inspiration = document.getElementById("inspiration");
    inspiration.innerHTML = "<img src=\"https://unsplash.it/200/?random\" alt=\"random image\"/>";
    inspiration.innerHTML += "<p>" + wordRequest.responseText + "</p>";
  }
  else {
    console.log("word request failed");
  }
};
wordRequest.send();

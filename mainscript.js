document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
  });

  document.getElementById("modifyButton").addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "modifyFile.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          alert(xhr.responseText); // Display response from server
        } else {
          alert("Error: " + xhr.status);
        }
      }
    };
    xhr.send();
  });

  
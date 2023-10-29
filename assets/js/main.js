document.addEventListener("DOMContentLoaded", function () {
  // Get all modal trigger buttons
  var modalTriggerButtons = document.querySelectorAll('[data-toggle="modal"]');

  // Attach click event listeners to all trigger buttons
  modalTriggerButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Get the target modal ID
      var targetModalId = button.getAttribute("data-target");
      var modal = document.querySelector(targetModalId);

      if (modal) {
        // Create and append the backdrop element
        var backdrop = document.createElement("div");
        backdrop.className = "modal-backdrop fade";
        document.body.appendChild(backdrop);

        backdrop.offsetWidth; // This triggers a reflow, allowing the "fade" class to work
        backdrop.classList.add("show");

        // Display the modal
        setTimeout(() => {
          modal.style.display = "block";
        }, 80);
        setTimeout(() => {
          modal.classList.add("show");
        }, 100);

        // Get the close button within the modal
        var closeButtons = modal.querySelectorAll('[data-dismiss="modal"]');

        // Close the modal and remove the backdrop when the close button is clicked
        closeButtons.forEach(function (closeButton) {
          closeButton.addEventListener("click", function () {
            modal.classList.remove("show");
            setTimeout(() => {
              modal.style.display = "none";
            }, 100);
            setTimeout(() => {
              backdrop.classList.remove("show");
              backdrop.addEventListener(
                "transitionend",
                function () {
                  backdrop.remove();
                },
                { once: true }
              );
            }, 150);
          });
        });

        // Close the modal and remove the backdrop when clicking anywhere outside of it
        window.addEventListener("click", function (event) {
          console.log(event.target);
          if (event.target == modal) {
            modal.classList.remove("show");
            setTimeout(() => {
              modal.style.display = "none";
            }, 100);
            setTimeout(() => {
              backdrop.classList.remove("show");
              backdrop.addEventListener(
                "transitionend",
                function () {
                  backdrop.remove();
                },
                { once: true }
              );
            }, 150);
          }
        });
      }
    });
  });

  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  dropdownToggle.addEventListener("click", function () {
    if (!dropdownMenu.classList.contains("show")) {
      dropdownMenu.classList.add("show");
    } else {
      dropdownMenu.classList.remove("show");
    }
  });

  // Close the dropdown when clicking outside of it
  window.addEventListener("click", function (event) {
    if (
      event.target !== dropdownToggle &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.remove("show");
    }
  });

  // Prevent the dropdown from closing when clicking inside it
  dropdownMenu.addEventListener("click", function (event) {
    event.stopPropagation();
  });


  var fileChoose = document.querySelector("input[type=file]");
  fileChoose.addEventListener("change", function () {
    var input = fileChoose;
    var numFiles = input.files ? input.files.length : 1;
    var label = input.value.replace(/\\/g, "/").replace(/.*\//, "");
    var textinput = document.querySelector("input[type=text]");
    var log = numFiles > 1 ? numFiles + " files selected" : label;
    textinput.value = log;
  }); 

  document
    .querySelector("#submitbutton")
    .addEventListener("click", function () {
      var btn = document.querySelector("#submitbutton");
      btn.innerHTML =
        '<i class="icon icon-spinner spin">&#xf110;</i> Uploading... Please Wait...';
      btn.classList.add("disabled");
    });

});

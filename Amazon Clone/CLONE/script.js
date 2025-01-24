// DOM Elements
const navCountry = document.querySelector(".nav-country");
const deliverOverlay = document.querySelector(".deliverOverlay");
const overlayContent = document.querySelector(".overlayContent");
const titleButton = document.querySelector(".titleButton");
const deliveryList = document.querySelector(".deliveryList");
const deliveryCountry = document.querySelector(".deliveryCountry");
const doneButton = document.querySelector(".done");
const deliveryApplyInput = document.querySelector(".deliveryApply-input");
const errorMessage = document.querySelector(".error-message");
const deliveryApplyButton = document.querySelector(".deliveryApply-button");
const navLanguage = document.querySelector(".nav-language");
const navLanguageHover = document.querySelector(".nav-language-hover");
const navTextOne = document.querySelector(".nav-text-one");
const navTextHover = document.querySelector(".nav-text-hover");
const seeAllToggle = document.querySelector(".see-all-toggle");
const seeAllToggleTwo = document.querySelector(".see-all-toggle-two");
const hiddenLists = document.querySelector(".hidden-lists");
const hiddenListsTwo = document.querySelector(".hidden-lists-two");
const seeLessToggle = document.querySelector(".see-less-toggle");
const seeLessToggleTwo = document.querySelector(".see-less-toggle-two");
const searchCategory = document.getElementById("searchCategory");
const dropdownMenu = document.getElementById("dropdownMenu");
const allLink = document.getElementById("allLink");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");
const searchInput = document.querySelector(".nav-search-input");
const images = document.querySelectorAll(".header-slider ul img");
const prevButton = document.querySelector(".control-prev");
const nextButton = document.querySelector(".control-next");
const regularSlider = document.querySelector(".regularBookList");
const BookSlider = document.querySelector(".hoverBookList");
const movieSlider = document.querySelector(".hoverMovieList");
const leftButton = document.querySelector(".left-btn");
const rightButton = document.querySelector(".right-btn");
const leftButtonHover = document.querySelector(".left-btn-hover");
const leftButtonHoverTwo = document.querySelector(".left-btn-hover-two");
const rightButtonHover = document.querySelector(".right-btn-hover");
const rightButtonHoverTwo = document.querySelector(".right-btn-hover-two");

document.addEventListener("DOMContentLoaded", function () {
  // Deliver to Ethiopia functionality
  navCountry.addEventListener("click", () => {
    deliverOverlay.style.display = "block";
    document.body.classList.add("overlayContent-open");
    deliveryApplyInput.focus();
  });

  deliveryList.addEventListener("click", (event) => {
    event.stopPropagation();
    deliveryCountry.style.display =
      deliveryCountry.style.display === "block" ? "none" : "block";
  });

  deliveryCountry.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      const selectedText = event.target.textContent;
      deliveryList.querySelector("span").textContent = selectedText;
      deliveryCountry.style.display = "none";
      // navCountry.querySelector("h1").textContent = selectedText;
    }
  });

  // Change nav country's h1 and close overlay
  doneButton.addEventListener("click", () => {
    const selectedText = deliveryList.textContent.trim();
    navCountry.querySelector("h1").textContent = selectedText;
    deliverOverlay.style.display = "none";
    errorMessage.classList.remove("active");
    deliveryApplyInput.style.border = "1px solid #888787";
  });

  // Close dropdown when clicking outside
  deliverOverlay.addEventListener("click", () => {
    deliveryCountry.style.display = "none";
  });

  // Close dropdown when clicking X button
  titleButton.addEventListener("click", (event) => {
    resetDeliveryState("Ethiopia");
    errorMessage.classList.remove("active");
    deliveryApplyInput.style.border = "1px solid #888787";
  });

  // Error message and form validation
  deliveryApplyButton.addEventListener("click", function (e) {
    if (!deliveryApplyInput.value.trim()) {
      e.preventDefault();
      showErrorMessage();
    } else {
      resetDeliveryState("Ethiopia");
      deliveryApplyInput.value = "";
    }
  });

  // Helper function to reset delivery state
  function resetDeliveryState(defaultCountry) {
    deliveryList.querySelector("span").textContent = defaultCountry;
    deliverOverlay.style.display = "none";
    deliveryCountry.style.display = "none";
    deliveryApplyInput.style.border = "1px solid #888787";
    overlayContent.style.height = "395px";
    errorMessage.classList.remove("active");
  }

  // Helper function to show error message
  function showErrorMessage() {
    deliveryApplyInput.focus();
    deliveryApplyInput.style.border = "3px solid #007185";
    deliveryApplyInput.style.borderRadius = "5px";
    overlayContent.style.height = "415px";
    errorMessage.classList.add("active");
    deliveryList.querySelector("span").textContent = "Choose";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // dropdown toggle
  searchCategory.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
    // searchCategory.style.border = " 3px solid #dd8b21";
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", () => {
    dropdownMenu.style.display = "none";
  });

  // handle dropdown item clicks
  dropdownMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      // change text of dropdown btn
      searchCategory.querySelector("span").textContent =
        event.target.textContent;
      // focus on input field
      searchInput.focus();
      //
      overlay.style.display = "block";
      overlay.classList.add("overlay-dropdown");
    }
  });

  // Function to handle mouse enter
  function handleMouseEnter(navElement, hoverElement, overlay) {
    overlay.style.display = "block";
    // overlay.style.zIndex = 99;
    overlay.classList.add("overlay-dropdown");
    hoverElement.style.display = "block";
  }

  // Function to handle mouse leave
  function handleMouseLeave(hoverElement, overlay, isInside) {
    if (!isInside) {
      overlay.style.display = "none";
      hoverElement.style.display = "none";
      // overlay.classList.remove("overlay-dropdown");
    }
  }

  let isInside = false;

  // For navLanguage hover functionality
  navLanguage.addEventListener("mouseenter", () => {
    handleMouseEnter(navLanguage, navLanguageHover, overlay);
    navTextHover.style.display = "none";
  });

  navLanguageHover.addEventListener("mouseleave", () => {
    handleMouseLeave(navLanguageHover, overlay, isInside);
  });

  // For navTextHover functionality
  navTextOne.addEventListener("mouseenter", () => {
    handleMouseEnter(navTextOne, navTextHover, overlay);
    navLanguageHover.style.display = "none";
  });

  navTextHover.addEventListener("mouseleave", () => {
    handleMouseLeave(navTextHover, overlay, isInside);
  });

  // document.addEventListener("mousemove", (e) => {
  //   const isHoveringNavLanguage =
  //     navLanguage.contains(e.target) || navLanguageHover.contains(e.target);
  //   const isHoveringNavTextOne =
  //     navTextOne.contains(e.target) || navTextHover.contains(e.target);

  //   if (!isHoveringNavLanguage && !isHoveringNavTextOne) {
  //     handleMouseLeave(navLanguageHover, overlay);
  //     handleMouseLeave(navTextHover, overlay);
  //     isInsideNavLanguage = false;
  //     isInsideNavText = false;
  //   }
  // });

  // sidebar functionality
  // Toggle the sidebar visibility when clicking "All" link
  allLink.addEventListener("click", (event) => {
    event.stopPropagation();
    sidebar.classList.add("active");
    closeBtn.style.display = "block";
    overlay.style.display = "block"; // Show overlay
    overlay.classList.add("overlay-sidebar");
    document.body.classList.add("sidebar-open");
  });

  // Close the sidebar when clicking the "X" button
  closeBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click event from propagating
    // document.body.classList.remove("sidebar-active");
    sidebar.classList.remove("active");
    closeBtn.style.display = "none";
    overlay.style.display = "none"; // hide overlay
    overlay.classList.remove("overlay-sidebar");
    document.body.classList.remove("sidebar-open");
  });

  // Close sidebar when overlay is clicked
  overlay.addEventListener("click", () => {
    document.body.classList.remove("sidebar-open");
  });

  // Close the sidebar when clicking anywhere outside of it
  document.addEventListener("click", (event) => {
    // Check if the click is outside the sidebar and "All" link
    if (
      !sidebar.contains(event.target) &&
      !allLink.contains(event.target) &&
      !closeBtn.contains(event.target)
    ) {
      sidebar.classList.remove("active"); // Hide sidebar
      closeBtn.style.display = "none";
      overlay.style.display = "none"; // hide overlay
      document.body.classList.remove("sidebar-open"); // Enable scrolling and remove blur
    }
  });

  // Prevent closing the sidebar when clicking inside the sidebar or on the "All" link
  sidebar.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the document
  });

  // See all toogle
  seeAllToggle.addEventListener("click", () => {
    hiddenLists.style.display = "block";
    seeAllToggle.style.display = "none";
    // hiddenLists.style.borderTop = "1px solid #eaeaea";
  });

  // See all toogle two
  seeAllToggleTwo.addEventListener("click", () => {
    hiddenListsTwo.style.display = "block";
    seeAllToggleTwo.style.display = "none";
    // hiddenLists.style.borderTop = "1px solid #eaeaea";
  });

  // See less toggle
  seeLessToggle.addEventListener("click", () => {
    hiddenLists.style.display = "none";
    seeAllToggle.style.display = "block";
  });

  // See less toggle two
  seeLessToggleTwo.addEventListener("click", () => {
    hiddenListsTwo.style.display = "none";
    seeAllToggleTwo.style.display = "block";
  });
});

// header slider

let currentIndex = 0;

function showSlide(index) {
  // hide all images
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  images[currentIndex].style.display = "block";
}

prevButton.addEventListener("click", (e) => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = images.length - 1;
  }
  showSlide();
});

nextButton.addEventListener("click", (e) => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  showSlide();
});

// Book slider

const scrollAmount = 700; // Pixels to scroll on each click

// Function to handle slider movement
function scrollSlider(slider, direction) {
  if (!slider) return; // Ensure the slider exists
  // console.log(`${direction}`, slider);
  if (direction === "left") {
    slider.scrollLeft -= scrollAmount;
  } else if (direction === "right") {
    slider.scrollLeft += scrollAmount;
  }
}

// Attach event listeners for the regular slider
if (leftButton && rightButton && regularSlider) {
  leftButton.addEventListener("click", () =>
    scrollSlider(regularSlider, "left")
  );
  rightButton.addEventListener("click", () =>
    scrollSlider(regularSlider, "right")
  );
}

// Attach event listeners for the hover buttons
if (leftButtonHover && rightButtonHover) {
  leftButtonHover.addEventListener("click", () => {
    scrollSlider(BookSlider, "left");
  });
  rightButtonHover.addEventListener("click", () => {
    scrollSlider(BookSlider, "right");
  });
}

// Attach event listeners for the hover two buttons
if (leftButtonHoverTwo && rightButtonHoverTwo) {
  leftButtonHoverTwo.addEventListener("click", () => {
    scrollSlider(movieSlider, "left");
  });
  rightButtonHoverTwo.addEventListener("click", () => {
    scrollSlider(movieSlider, "right");
  });
}

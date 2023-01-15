const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = [
  "ZAHRA JAVIDI",
  "From Shiraz",
  "A junior front end developer",
];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
// ------------------

const menu = [
  {
    id: 1,
    title: "Web",
    category: "htmlcss",
    img: "portfolio-1.jpg",
  },
  {
    id: 2,
    title: "Web",
    category: "htmlcss",
    img: "portfolio-3.jpg",
  },
  {
    id: 3,
    title: "Web",
    category: "javascript",
    img: "project-1.jpg.webp",
  },
  {
    id: 4,
    title: "Web",
    category: "javascript",
    img: "project-4.jpg.webp",
  },
  {
    id: 5,
    title: "Web",
    category: "javascript",
    img: "project-3.jpg.webp",
  },
  {
    id: 6,
    title: "Web",
    category: "bootstrap",
    img: "project-2.jpg.webp",
  },
  {
    id: 7,
    title: "Web",
    category: "sass",
    img: "project-5.jpg.webp",
  },
  {
    id: 8,
    title: "Web",
    category: "bootstrap",
    img: "project-6.jpg.webp",
  },
  {
    id: 9,
    title: "Web",
    category: "bootstrap",
    img: "portfolio-2.jpg",
  },
];

function activeTheButton(item) {
  document.querySelectorAll(".category-btn").forEach(function (btn) {
    btn.classList.remove("active");
  })
  if (item) {
    item.classList.add("active");

  }
}

function setButtonCategories() {
  const categoryMenu = document.getElementById("category-menu");

  const categories = menu.reduce(
    function (values, item) {
      if (item && item.category && !values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const works = categories.map(function (category) {
    const classList = category === "all" ? "category-btn active": "category-btn"
    return `<li class="${classList}" data-id=${category}>${category}</li>`;
  });
  categoryMenu.innerHTML = works.join("");
  // console.log(works);
  document.querySelectorAll('.category-btn').forEach(function(item){
    const categoryType = item.getAttribute('data-id')
    item.addEventListener('click', function(){
      activeTheButton(item)
      if(categoryType === "all") {
        displayMenuItems(menu);
        return;
      }
      const filteredMenu = menu.filter(function(item) {
        return item.category === categoryType
      })
      console.log(filteredMenu)
      displayMenuItems(filteredMenu)

    })
  })
}
function displayMenuItems(items) {
  const portfolioWrap = document.getElementById("portfolio-wrap");
  if (items) {
    portfolioWrap.innerHTML = items.map(function (item) {
      return `<div class="col-lg-4 col-md-6"> 
              
      <div class="portfolio-wrap">
       <figure class="project">
         <img src="${item.img}" alt="portfolio-1" class="project-img">
         <figcaption class="project-detail">
           <h4 class="title">${item.title}</h4>
           <p class="category">${item.category}</p>
           <a href="" target="_blank"><i class="fas fa-link"></i></a>
         </figcaption>
       </figure>
      </div>
     </div>`
    })
    .join("");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setButtonCategories();
  displayMenuItems(menu);
});
// --------------------------------

document.addEventListener("scroll", function(e) {
  if (window.scrollY >= 110) {
    document.getElementById("back-to-top").classList.add("back-to-top");
    return;
  }
  if (window.scrollY < 110) {
    document.getElementById("back-to-top").classList.remove("back-to-top");
  }
})

// --------------------------------------

function closeMenu() {
  const menuCheckbox = document.getElementById("menu-checkbox");
  if (menuCheckbox.checked === true) {
    menuCheckbox.checked = false;
    return;
  }
}
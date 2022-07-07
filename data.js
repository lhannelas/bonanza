let shopItemData = [{
  id: "one",
  name: "Mini-Cooper",
  price: "200",
  desc1: "Automatic Transmission",
  desc2: "211-731 litres luggage space",
  desc3: "4 seats",
  img: "Pictures/pexels-brett-sayles-3226806.jpg"
  
},{
  id: "two",
  name: "MacBook Air",
  price: "100",
  desc1: "M1 Chip",
  desc2: "13.30 inch display",
  desc3: "8GB Ram",
  img: "Pictures/pexels-pixabay-459653.jpg"
},{
  id: "three",
  name: "Retro Fridge",
  price: "100",
  desc1: "375L",
  desc2: "Surround Cooling",
  desc3: "Fast Cooling system",
  img: "Pictures/pexels-max-vakhtbovych-6758518.jpg"
},
]


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
const testimonials = [
  {
    name: "Irina L.",
    photoUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    text: "I'd be lost without Instagram. Thank you so much for your help.",
  },
  {
    name: "David M.",
    photoUrl:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    text: "Instagram saved my business. I would be lost without Instagram.",
  },
  {
    name: "Karena R.",
    photoUrl:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    text: "It's the perfect solution for our business. It really saved me time and effort. Instagram is exactly what our business has been lacking.",
  },
  {
    name: "Jack R.",
    photoUrl:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    text: "Instagram is worth much more than I paid. Not able to tell you how happy I am with Instagram. Instagram should be nominated for service of the year.",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const nameEl = document.querySelector(".username");

let currentPerson = 0;

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[currentPerson];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  nameEl.innerText = name;
  currentPerson++;

  if (currentPerson === testimonials.length) {
    currentPerson = 0;
  }

  setTimeout(() => {
    updateTestimonial();
  }, 5000);
}

updateTestimonial();

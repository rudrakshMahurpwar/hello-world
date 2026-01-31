const testimonials = [
  {
    name: "Rachel Thompson",
    photoUrl:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "I am thoroughly impressed with Apple's innovative mobile technology. From sleek designs to cutting-edge features, their products never fail to exceed my expectations. The user experience is seamless, making Apple a top choice for anyone seeking quality and style.",
  },
  {
    name: "Emily Thompson",
    photoUrl:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfDJ8MHx8fDA%3D",
    text: "I am extremely satisfied with my experience with Samsung. Their mobile devices are top-notch, providing me with everything I need in a smartphone. The sleek design and advanced features make it a must-have for tech enthusiasts like me.",
  },
  {
    name: "Sophia Anderson",
    photoUrl:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnxlbnwwfDJ8MHx8fDA%3D",
    text: "I am extremely impressed with the sleek design and high performance of my new Vivo mobile. It has exceeded all my expectations and I highly recommend it to anyone in need of a reliable device.",
  },
];

const imgE1 = document.querySelector("img");
const textE1 = document.querySelector(".text");
const usernameE1 = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];

  imgE1.src = photoUrl;
  textE1.innerText = text;
  usernameE1.innerText = name;

  idx++;

  if (idx === testimonials.length) {
    idx = 0;
  }
}
setInterval(updateTestimonial, 5000);

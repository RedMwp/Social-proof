import testimonialCard from "./components/testimonialCard.js";
import ratingCard from "./components/ratingCard.js";

import { render, makeElement } from "./utils.js";
//select container
const app = document.getElementById("app");

//upper section

let upperSection = makeElement("section", {
    classlist: "text-section"
});
let textBlock = makeElement("article", {
    content: `
  
  <h1>10,000+ of our<br> users love our<br> products.</h1>
  <p>
    We only provide great products combined with excellent customer service.
    See what our satisfied customers are saying about our services.</p>
  `,
    classlist: "col"
});

//ratings section

const ratingsSection = makeElement("section", {
    classlist:"col"
});

let reviewRate = ratingCard("Rated 5 Stars in Reviews");

let reviewRate2 = ratingCard("Rated 5 Stars in Report Guru");

let reviewRate3 = ratingCard("Rated 5 Stars in BestTech");

let ratingsContainer = makeElement("section", {
    classlist: "col"
});

render(ratingsSection, [reviewRate, reviewRate2, reviewRate3]);

//lower section

const testimonials = makeElement("section", {
    classlist: "testmonials"
});

let smith = testimonialCard({
    avater: "/social-proof-section-master/images/image-colton.jpg",
    name: "Colton Smith",
    text: `
    "We needed the same printed design as the one we had ordered a week prior.
    Not only did they find the original order, but we also received it in time.
    Excellent!"`
});
let iren = testimonialCard({
    avater: "/social-proof-section-master/images/image-irene.jpg",
    name: "Irene Roberts",
    text: `"Customer service is always excellent and very quick turn around. Completely
delighted with the simplicity of the purchase and the speed of delivery.
"`
});

let anne = testimonialCard({
    avater: "/social-proof-section-master/images/image-anne.jpg",
    name: "Anne Wallace",
    text: `    "Put an order with this company and can only praise them for the very high
    standard.Will definitely use them again and recommend them to everyone!"`
});

render(testimonials, [iren, smith, anne]);

render(upperSection, [textBlock, ratingsSection]);
render(app, [upperSection, testimonials]);

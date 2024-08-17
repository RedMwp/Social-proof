import { makeElement } from '../utils.js';


 const testimonialCard = (props) => {

  let card = makeElement('article', {
    classlist: 'testimonial-card',
    content: `
    <section class="card-head">
    
    <img src="${props.avater}"/>
    
    <span>
    <h2>${props.name}</h2>
    <h3>Verified Buyer</h3>
    </span>
    
    </section>
    
    <section class="card-body">
    <p> ${props.text}</p>
    </section>
    
    `
  });

  return card;
};
export default testimonialCard;
import { makeElement } from '../utils.js';


const ratingCard = (content) => {

  return makeElement('div', {
    content: `
    <span> <img src="./images/icon-star.svg" alt="star icon"/>
    
    <img src="./images/icon-star.svg" alt="star icon"/>
    
    <img src="./images/icon-star.svg" alt="star icon"/>
    
    <img src="./images/icon-star.svg" alt="star icon"/>
  
    </span>  
    
    ${content}`,

    classlist: "ratings-card"
  });

};
export default ratingCard;

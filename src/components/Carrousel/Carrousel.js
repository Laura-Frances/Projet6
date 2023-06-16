// import React, { useState } from 'react';
// import './Carrousel.scss';


// const Carrousel = ({ jsonData }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const goToPreviousSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? jsonData.pictures.length - 1 : currentSlide - 1);
//   };

//   const goToNextSlide = () => {
//     setCurrentSlide(currentSlide === jsonData.pictures.length - 1 ? 0 : currentSlide + 1);
//   };

//   return (
//     <div className="carrousel">
//       {jsonData.pictures.length > 1 && (
//         <button onClick={goToPreviousSlide}>Précédent</button>
//       )}

//       <img src={jsonData.pictures[currentSlide]} alt={`Slide ${currentSlide + 1}`} />

//       {jsonData.pictures.length > 1 && (
//         <button onClick={goToNextSlide}>Suivant</button>
//       )}

//       {jsonData.pictures.length > 1 && (
//         <div className="pagination">
//           {jsonData.pictures.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={index === currentSlide ? 'active' : ''}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Carrousel;

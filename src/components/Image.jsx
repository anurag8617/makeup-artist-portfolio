// import React, { useRef, useEffect, useCallback } from "react";
// import { MoveHorizontal } from "lucide-react";
// import img1 from "../assets/imgh1.png";
// import img2 from "../assets/imgh2.png";

// // Internal CSS for the component
// const internalCSS = `
//   .image-compare-container {
//     position: relative;
//     width: 100%;
//     max-width: 800px;
//     aspect-ratio: 497 / 438;
//     overflow: hidden;
//     border-radius: 1rem; /* rounded-2xl */
//     box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); /* shadow-lg */
//     user-select: none; /* select-none */
//     cursor: ew-resize;
//   }

//   .image-compare-image {
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   .image-compare-slider {
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     transform: translateX(-50%); /* -translate-x-1/2 */
//   }

//   .image-compare-line {
//     width: 3px;
//     height: 100%;
//     background-color: rgba(255, 255, 255, 0.9); /* bg-white/90 */
//     box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1); /* shadow-md */
//   }

//   .image-compare-handle {
//     position: absolute;
//     background-color: #ffffff;
//     border: 1px solid #9ca3af; /* border-gray-400 */
//     border-radius: 9999px; /* rounded-full */
//     padding: 0.375rem; /* p-1.5 */
//     box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1); /* shadow-md */
//     transition: transform 0.15s ease-in-out;
//     cursor: ew-resize;
//   }

//   .image-compare-handle:hover {
//     transform: scale(1.1); /* hover:scale-110 */
//   }

//   .image-compare-handle:active {
//     transform: scale(0.95); /* active:scale-95 */
//   }

//   .image-compare-icon {
//     width: 1rem; /* w-4 */
//     height: 1rem; /* h-4 */
//     color: #374151; /* text-gray-700 */
//   }

//   .image-compare-label {
//     position: absolute;
//     background-color: rgba(0, 0, 0, 0.5); /* bg-black/50 */
//     color: #ffffff;
//     padding: 0.125rem 0.5rem; /* px-2 py-0.5 */
//     border-radius: 0.375rem; /* rounded-md */
//     pointer-events: none;
//     font-size: 0.75rem; /* text-xs */
//   }

//   .image-compare-label-before {
//     top: 0.5rem; /* top-2 */
//     left: 0.5rem; /* left-2 */
//   }

//   .image-compare-label-after {
//     top: 0.5rem; /* top-2 */
//     right: 0.5rem; /* right-2 */
//   }

//   /* Responsive styles (sm: breakpoint at 640px) */
//   @media (min-width: 640px) {
//     .image-compare-handle {
//       padding: 0.625rem; /* sm:p-2.5 */
//     }

//     .image-compare-icon {
//       width: 1.25rem; /* sm:w-5 */
//       height: 1.25rem; /* sm:h-5 */
//     }

//     .image-compare-label {
//       padding: 0.25rem 0.75rem; /* sm:px-3 sm:py-1 */
//       font-size: 1rem; /* sm:text-base */
//     }

//     .image-compare-label-before {
//       top: 1rem; /* sm:top-4 */
//       left: 1rem; /* sm:left-4 */
//     }

//     .image-compare-label-after {
//       top: 1rem; /* sm:top-4 */
//       right: 1rem; /* sm:right-4 */
//     }
//   }
// `;

// export default function ImageCompare({ before, after, initialPosition = 50 }) {
//   const containerRef = useRef(null);
//   const afterImageRef = useRef(null);
//   const sliderRef = useRef(null);
//   const isDragging = useRef(false);

//   // This function will be responsible for moving the slider
//   const handleMoveSlider = useCallback((x) => {
//     if (!containerRef.current || !afterImageRef.current || !sliderRef.current)
//       return;

//     const rect = containerRef.current.getBoundingClientRect();
//     // Calculate position as a percentage, clamping between 0 and 100
//     const percent = Math.max(
//       0,
//       Math.min(100, ((x - rect.left) / rect.width) * 100)
//     );

//     // Directly update the styles for maximum performance
//     sliderRef.current.style.left = `${percent}%`;
//     afterImageRef.current.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
//   }, []); // Empty deps are correct here, it only uses refs

//   // Event handler for when dragging starts, now wrapped in useCallback
//   const handleDragStart = useCallback((e) => {
//     isDragging.current = true;
//     // Prevent default text selection behavior while dragging
//     e.preventDefault();
//   }, []); // Empty deps are correct here, it only uses a ref

//   // Event handler for when dragging ends
//   const handleDragEnd = useCallback(() => {
//     isDragging.current = false;
//   }, []); // Empty deps are correct here, it only uses a ref

//   // Event handler for the actual dragging movement
//   const handleDragging = useCallback(
//     (e) => {
//       if (!isDragging.current) return;
//       // Use clientX for mouse events, and the first touch for touch events
//       const clientX = e.touches ? e.touches[0].clientX : e.clientX;
//       handleMoveSlider(clientX);
//     },
//     [handleMoveSlider] // Correct dependency
//   );

//   // Set up and clean up global event listeners
//   useEffect(() => {
//     // We listen on the window to catch mouse movements outside the container
//     window.addEventListener("mousemove", handleDragging);
//     window.addEventListener("touchmove", handleDragging);
//     window.addEventListener("mouseup", handleDragEnd);
//     window.addEventListener("touchend", handleDragEnd);

//     // Set the initial position when the component mounts
//     if (containerRef.current) {
//       const initialX =
//         containerRef.current.getBoundingClientRect().left +
//         (containerRef.current.offsetWidth * initialPosition) / 100;
//       handleMoveSlider(initialX);
//     }

//     // Cleanup function to remove listeners when the component unmounts
//     return () => {
//       window.removeEventListener("mousemove", handleDragging);
//       window.removeEventListener("touchmove", handleDragging);
//       window.removeEventListener("mouseup", handleDragEnd);
//       window.removeEventListener("touchend", handleDragEnd);
//     };
//   }, [handleDragging, handleDragEnd, handleMoveSlider, initialPosition]); // These dependencies are all correct

//   return (
//     <>
//       <style>{internalCSS}</style>
//       <div ref={containerRef} className="image-compare-container">
//         <h1>Before</h1>
//         {/* Before Image */}
//         <img
//           src={
//             before || img2 // "https://carservices.labhayatech.com/carwash/wp-content/uploads/2025/09/2-2.png"
//           }
//           alt="Before"
//           className="image-compare-image"
//         />

//         {/* After Image */}
//         <img
//           ref={afterImageRef}
//           src={
//             after || img1 // "https://carservices.labhayatech.com/carwash/wp-content/uploads/2025/09/1-2.png"
//           }
//           alt="After"
//           className="image-compare-image"
//         />

//         {/* Divider Line + Icon */}
//         <div
//           ref={sliderRef}
//           className="image-compare-slider"
//           onMouseDown={handleDragStart}
//           onTouchStart={handleDragStart}
//         >
//           <div className="image-compare-line"></div>
//           <button className="image-compare-handle" aria-label="Drag to compare">
//             <MoveHorizontal className="image-compare-icon" />
//           </button>
//         </div>

//         {/* Labels */}
//         <div className="image-compare-label image-compare-label-before">
//           Before
//         </div>
//         <div className="image-compare-label image-compare-label-after">
//           After
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useRef, useEffect, useCallback } from "react";
import { MoveHorizontal } from "lucide-react";
import img1 from "../assets/imgh1.png";
import img2 from "../assets/imgh2.png";

// Internal CSS for the component
const internalCSS = `
  /* --- Style for the title I added --- */
  .compare-section-title {
    font-size: 2.25rem; /* 3xl */
    font-weight: 700;
    color: #fff; 
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .image-compare-container {
    position: relative;
    width: 100%;
    max-width: 800px;
    /* --- FIX 1: Changed aspect ratio for 2:3 images --- */
    background-color: #1a1a1d; 
    aspect-ratio: 2 / 3;
    overflow: hidden;
    border-radius: 1rem; /* rounded-2xl */
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); /* shadow-lg */
    user-select: none; /* select-none */
    cursor: ew-resize;
  }

  .image-compare-image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-compare-slider {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-50%); /* -translate-x-1/2 */
  }

  .image-compare-line {
    width: 3px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9); /* bg-white/90 */
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1); /* shadow-md */
  }

  .image-compare-handle {
    position: absolute;
    background-color: #ffffff;
    border: 1px solid #9ca3af; /* border-gray-400 */
    border-radius: 9999px; /* rounded-full */
    padding: 0.375rem; /* p-1.5 */
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1); /* shadow-md */
    transition: transform 0.15s ease-in-out;
    cursor: ew-resize;
  }

  .image-compare-handle:hover {
    transform: scale(1.1); /* hover:scale-110 */
  }

  .image-compare-handle:active {
    transform: scale(0.95); /* active:scale-95 */
  }

  .image-compare-icon {
    width: 1rem; /* w-4 */
    height: 1rem; /* h-4 */
    color: #374151; /* text-gray-700 */
  }

  .image-compare-label {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5); /* bg-black/50 */
    color: #ffffff;
    padding: 0.125rem 0.5rem; /* px-2 py-0.5 */
    border-radius: 0.375rem; /* rounded-md */
    pointer-events: none;
    font-size: 0.75rem; /* text-xs */
  }

  .image-compare-label-before {
    top: 0.5rem; /* top-2 */
    left: 0.5rem; /* left-2 */
  }

  .image-compare-label-after {
    top: 0.5rem; /* top-2 */
    right: 0.5rem; /* right-2 */
  }

  /* Responsive styles (sm: breakpoint at 640px) */
  @media (min-width: 640px) {
    .image-compare-handle {
      padding: 0.625rem; /* sm:p-2.5 */
    }

    .image-compare-icon {
      width: 1.25rem; /* sm:w-5 */
      height: 1.25rem; /* sm:h-5 */
    }

    .image-compare-label {
      padding: 0.25rem 0.75rem; /* sm:px-3 sm:py-1 */
      font-size: 1rem; /* sm:text-base */
    }
    
    .image-compare-label-before {
      top: 1rem; /* sm:top-4 */
      left: 1rem; /* sm:left-4 */
    }

    .image-compare-label-after {
      top: 1rem; /* sm:top-4 */
      right: 1rem; /* sm:right-4 */
    }
  }
`;

function ImageCompare({ before, after, initialPosition = 50 }) {
  const containerRef = useRef(null);
  const afterImageRef = useRef(null);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);

  // This function will be responsible for moving the slider
  const handleMoveSlider = useCallback((x) => {
    if (!containerRef.current || !afterImageRef.current || !sliderRef.current)
      return;

    const rect = containerRef.current.getBoundingClientRect();
    // Calculate position as a percentage, clamping between 0 and 100
    const percent = Math.max(
      0,
      Math.min(100, ((x - rect.left) / rect.width) * 100)
    );

    // Directly update the styles for maximum performance
    sliderRef.current.style.left = `${percent}%`;
    afterImageRef.current.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
  }, []); // Empty deps are correct here, it only uses refs

  // Event handler for when dragging starts, now wrapped in useCallback
  const handleDragStart = useCallback((e) => {
    isDragging.current = true;
    // Prevent default text selection behavior while dragging
    e.preventDefault();
  }, []); // Empty deps are correct here, it only uses a ref

  // Event handler for when dragging ends
  const handleDragEnd = useCallback(() => {
    isDragging.current = false;
  }, []); // Empty deps are correct here, it only uses a ref

  // Event handler for the actual dragging movement
  const handleDragging = useCallback(
    (e) => {
      if (!isDragging.current) return;
      // Use clientX for mouse events, and the first touch for touch events
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      handleMoveSlider(clientX);
    },
    [handleMoveSlider] // Correct dependency
  );

  // Set up and clean up global event listeners
  useEffect(() => {
    // We listen on the window to catch mouse movements outside the container
    window.addEventListener("mousemove", handleDragging);
    window.addEventListener("touchmove", handleDragging);
    window.addEventListener("mouseup", handleDragEnd);
    window.addEventListener("touchend", handleDragEnd);

    // Set the initial position when the component mounts
    if (containerRef.current) {
      const initialX =
        containerRef.current.getBoundingClientRect().left +
        (containerRef.current.offsetWidth * initialPosition) / 100;
      handleMoveSlider(initialX);
    }

    // Cleanup function to remove listeners when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleDragging);
      window.removeEventListener("touchmove", handleDragging);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchend", handleDragEnd);
    };
  }, [handleDragging, handleDragEnd, handleMoveSlider, initialPosition]); // These dependencies are all correct

  return (
    <>
      {/* This <style> tag is fine here, but in a real app
        you would move this to its own .css file.
      */}
      <style>{internalCSS}</style>
      <div ref={containerRef} className="image-compare-container">
        {/* --- FIX 2: Removed the broken <h1>Before</h1> tag from here --- */}

        {/* Before Image */}
        <img
          src={
            before || img2 // Use your local import as fallback
          }
          alt="Before"
          className="image-compare-image"
        />

        {/* After Image */}
        <img
          ref={afterImageRef}
          src={
            after || img1 // Use your local import as fallback
          }
          alt="After"
          className="image-compare-image"
        />

        {/* Divider Line + Icon */}
        <div
          ref={sliderRef}
          className="image-compare-slider"
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
        >
          <div className="image-compare-line"></div>
          <button className="image-compare-handle" aria-label="Drag to compare">
            <MoveHorizontal className="image-compare-icon" />
          </button>
        </div>

        {/* Labels (These are the correct way to show 'Before' and 'After') */}
        <div className="image-compare-label image-compare-label-before">
          Before
        </div>
        <div className="image-compare-label image-compare-label-after">
          After
        </div>
      </div>
    </>
  );
}

// --- FIX 2: Added an App component to show how to add a title ---
export default function App() {
  return (
    <div style={{ width: "100%", padding: "2rem", backgroundColor: "#1a1a1d" }}>
      <h2 className="compare-section-title">Nanoplatia Hair Treatment</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ImageCompare
        // You can pass your images as props here if you want
        // before={img2}
        // after={img1}
        />
      </div>
    </div>
  );
}

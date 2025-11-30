import React from "react";
import "./ReelsGrid.css";
// import { MdArrowBack } from "react-icons/md"; // Uncomment if using icons

// --- Mock Data (Expanded to fill screen) ---
const POST_DATA = [
  // --- Original Data ---
  {
    id: 1,
    type: "video",
    src: "https://www.instagram.com/ad33cc6c-f8b4-46d1-aecd-879850cc62cb",
    size: "square",
  },
  {
    id: 2,
    type: "image",
    src: "https://via.placeholder.com/300x600/777/FFF?text=Rect+(1x2)",
    size: "rectangle",
  },
  {
    id: 3,
    type: "video",
    src: "blob:https://www.instagram.com/3a9b18a8-7b4a-4385-a6d1-4b8fd81fcd32",
    size: "square",
  },
  {
    id: 4,
    type: "image",
    src: "https://via.placeholder.com/300/CCC/FFF?text=Square",
    size: "square",
  },
  {
    id: 5,
    type: "video",
    src: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
    size: "square",
  },
  {
    id: 6,
    type: "image",
    src: "https://via.placeholder.com/300/AAA/FFF?text=Square",
    size: "square",
  },
  {
    id: 7,
    type: "image",
    src: "https://via.placeholder.com/300/888/FFF?text=Square",
    size: "square",
  },
  {
    id: 8,
    type: "image",
    src: "https://via.placeholder.com/300x600/777/FFF?text=Rect+(1x2)",
    size: "rectangle",
  },
  {
    id: 9,
    type: "video",
    src: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
    size: "square",
  },
  {
    id: 10,
    type: "image",
    src: "https://via.placeholder.com/300/666/FFF?text=Square",
    size: "square",
  },

  // --- New Data Added to Fill Screen ---
  {
    id: 11,
    type: "image",
    src: "https://via.placeholder.com/300/555/FFF?text=Square",
    size: "square",
  },
  {
    id: 12,
    type: "image",
    src: "https://via.placeholder.com/300/444/FFF?text=Square",
    size: "square",
  },
  {
    id: 13,
    type: "image",
    src: "https://via.placeholder.com/300x600/333/FFF?text=Rect+(1x2)",
    size: "rectangle",
  },
  {
    id: 14,
    type: "video",
    src: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
    size: "square",
  },
  {
    id: 15,
    type: "image",
    src: "https://via.placeholder.com/300/222/FFF?text=Square",
    size: "square",
  },
  {
    id: 16,
    type: "image",
    src: "https://via.placeholder.com/300/111/FFF?text=Square",
    size: "square",
  },
  {
    id: 17,
    type: "image",
    src: "https://via.placeholder.com/300/000/FFF?text=Square",
    size: "square",
  },
  {
    id: 18,
    type: "image",
    src: "https://via.placeholder.com/300/333/FFF?text=Square",
    size: "square",
  },
  {
    id: 19,
    type: "video",
    src: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
    size: "square",
  },
  {
    id: 20,
    type: "image",
    src: "https://via.placeholder.com/300/555/FFF?text=Square",
    size: "square",
  },
  {
    id: 21,
    type: "image",
    src: "https://via.placeholder.com/300/777/FFF?text=Square",
    size: "square",
  },
];

const renderMedia = (item) => {
  if (item.type === "video") {
    return (
      <>
        <video src={item.src} autoPlay muted loop playsInline />
        <span className="media-icon">▶</span>
      </>
    );
  }

  if (item.type === "image") {
    return <img src={item.src} alt="Grid post" loading="lazy" />;
  }

  return null;
};

// Accept onBack prop
function ReelsGrid({ onBack }) {
  return (
    <div className="reels-page">
      {/* Header with Back Button */}
      <div className="reels-header">
        <button onClick={onBack} className="back-btn">
          ← Back
        </button>
        <h2>Highlights</h2>
        <div style={{ width: "40px" }}></div> {/* Spacer for alignment */}
      </div>

      <div className="reels-grid-container">
        {POST_DATA.map((item) => {
          const itemClass = `grid-item ${
            item.size === "rectangle" ? "grid-item--rectangle" : ""
          }`;

          return (
            <div key={item.id} className={itemClass}>
              {renderMedia(item)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ReelsGrid;

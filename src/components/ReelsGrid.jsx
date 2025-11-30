import React from "react";
import "./ReelsGrid.css";

// --- Mock Data ---
// We use mock data to build the layout.
// 'size' can be 'square' (1x1) or 'rectangle' (1x2).
const POST_DATA = [
  {
    id: 1,
    type: "video",
    src: "https://www.instagram.com/ad33cc6c-f8b4-46d1-aecd-879850cc62cb",
    // src: "https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-15/524622242_1257149359037207_3423579419189067487_n.jpg?stp=dst-jpg_e15_tt6&_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2QH4r5oEAZO9Lsd-4Jx3a6PtTqcFzf-epdRQLSFCw90XquuUpN_H7JD-JWZdL44ThAYOi_A1TtOyH1RNfmoLMENI&_nc_ohc=I-wpgilFqYEQ7kNvwEsARRA&_nc_gid=c8ZXvtCtuEcDReS4GO2PlQ&edm=APU89FABAAAA&ccb=7-5&oh=00_AfhE6m-DiGoVRHIt72xtZSm9vG0t1aj4ZGvZiQ2jb4KJbQ&oe=691A0F98&_nc_sid=bc0c2c",
    size: "square",
  },
  {
    id: 2,
    src: "blob:https://www.instagram.com/3a9b18a8-7b4a-4385-a6d1-4b8fd81fcd32",
    type: "image",
    size: "rectangle",
  },
  {
    id: 3,
    src: "blob:https://www.instagram.com/3a9b18a8-7b4a-4385-a6d1-4b8fd81fcd32",
    type: "video",
    size: "square",
  },
  {
    id: 4,
    type: "image",
    src: "https://via.placeholder.com/300/CCC/FFF?text=Square+(1x1)",
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
    // src: "https://via.placeholder.com/300/AAA/FFF?text=Square+(1x1)",
    size: "square",
  },
  {
    id: 7,
    type: "image",
    src: "https://via.placeholder.com/300/888/FFF?text=Square+(1x1)",
    size: "square",
  },
  {
    id: 8,
    type: "image",
    src: "https://via.placeholder.com/300x600/777/FFF?text=Rectangle+(1x2)",
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
    src: "https://via.placeholder.com/300/666/FFF?text=Square+(1x1)",
    size: "square",
  },
];
// --- End Mock Data ---

// Helper function to render the media (image or video)
const renderMedia = (item) => {
  if (item.type === "video") {
    return (
      <>
        <video
          src={item.src}
          autoPlay
          muted // Autoplay requires 'muted' in most browsers
          loop
          playsInline // Important for iOS
        />
        {/* Simple Reel/Video icon */}
        <span className="media-icon">▶</span>
      </>
    );
  }

  if (item.type === "image") {
    return <img src={item.src} alt="Grid post" />;
  }

  return null;
};

// The main component
function ReelsGrid() {
  return (
    <div className="reels-grid-container">
      {POST_DATA.map((item) => {
        // Apply a dynamic class for rectangular items
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
  );
}

export default ReelsGrid;

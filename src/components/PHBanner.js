import React from "react";

const POST_ID = "176300";

export const PHBanner = () => {
  return (
    <a
      href="https://www.producthunt.com/posts/wireframer"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=${POST_ID}&theme=dark`}
        alt="VisualEyes | Attention heatmaps inside your favorite design tool | Product Hunt Embed"
        style={{
          zIndex: "100000000",
          margin: "0",
          position: "fixed",
          bottom: "0",
          right: 0,
          margin: "1rem"
        }}
      />
    </a>
  );
};

export default PHBanner;

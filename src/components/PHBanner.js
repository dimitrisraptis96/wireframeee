import React from "react";

const POST_ID = "176300";
const IS_DARK = true;

export const PHBanner = () => {
  return (
    <a
      href="https://www.producthunt.com/posts/wireframer?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-wireframer"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={`https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=${POST_ID}&theme=${
          IS_DARK ? "dark" : "light"
        }&period=daily`}
        alt="Wireframer | Flawless SVG text for your wireframes | Product Hunt Embed"
        // style={{
        //   zIndex: "100000000",
        //   margin: "0",
        //   position: "fixed",
        //   bottom: "0",
        //   right: 0,
        //   margin: "1rem"
        // }}
      />
    </a>
  );
};

export default PHBanner;

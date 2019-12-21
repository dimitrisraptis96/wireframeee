import React from "react";

function FigmaLogo({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "100"}
      height={size || "100"}
      fill="none"
      viewBox="0 0 100 100"
    >
      <path
        fill="#0ACF83"
        d="M33.571 100c8.872 0 16.071-7.466 16.071-16.666V66.667h-16.07c-8.872 0-16.072 7.467-16.072 16.667 0 9.2 7.2 16.666 16.071 16.666z"
      ></path>
      <path
        fill="#A259FF"
        d="M17.5 50c0-9.2 7.2-16.666 16.071-16.666h16.072v33.333H33.57c-8.871 0-16.071-7.466-16.071-16.666z"
      ></path>
      <path
        fill="#F24E1E"
        d="M17.501 16.667c0-9.2 7.2-16.667 16.071-16.667h16.072v33.334H33.572c-8.871 0-16.071-7.467-16.071-16.667z"
      ></path>
      <path
        fill="#FF7262"
        d="M49.643 0h16.07c8.872 0 16.072 7.467 16.072 16.667 0 9.2-7.2 16.666-16.071 16.666H49.643V0z"
      ></path>
      <path
        fill="#1ABCFE"
        d="M81.786 50c0 9.2-7.2 16.667-16.072 16.667-8.871 0-16.07-7.466-16.07-16.666s7.199-16.667 16.07-16.667c8.872 0 16.072 7.467 16.072 16.667z"
      ></path>
    </svg>
  );
}

export default React.memo(FigmaLogo);

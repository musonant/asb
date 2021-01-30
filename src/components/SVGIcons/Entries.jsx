import React from "react";

const Entries = ({ color = "#72809D" }) => {
  return (
    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.06667 0C0.477333 0 0 0.477333 0 1.06667V2.13333H12.8V1.06667C12.8 0.477333 12.3227 0 11.7333 0H1.06667ZM0.533333 3.2V10.6667C0.533333 11.256 1.01067 11.7333 1.6 11.7333H11.2C11.7893 11.7333 12.2667 11.256 12.2667 10.6667V3.2H0.533333ZM8 4.8H4.8C4.5056 4.8 4.26667 5.03893 4.26667 5.33333C4.26667 5.62773 4.5056 5.86667 4.8 5.86667H8C8.2944 5.86667 8.53333 5.62773 8.53333 5.33333C8.53333 5.03893 8.2944 4.8 8 4.8Z" fill={color} />
    </svg>
  );
};

export default Entries;

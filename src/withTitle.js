import React from "react";

const withTitle = (WrappedComponent) => {
  return (props) => {
    const title = props.title || "Default Title"; // Judul default jika tidak ada props.title

    return (
      <div>
        <h1>Halaman: {title}</h1>
        <WrappedComponent {...props} /> {/* Render komponen yang dibungkus */}
      </div>
    );
  };
};

export default withTitle;
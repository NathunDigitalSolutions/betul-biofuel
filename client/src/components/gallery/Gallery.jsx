import React, { useState } from "react";
import gallery from "../../data/gallery";

const Gallery = () => {
  const [file, setFile] = useState(null);
  return (
    <div className="galleryContainer text-center">
      <h2 className="text-4xl font-bold text-primary relative mb-10 inline-block">
          Our Gallery
          {/* <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-600 mx-auto mt-2"></div> */}
        </h2>
      <span className="absolute left-1/2 bottom-[-5px] w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-600 transform -translate-x-1/2"></span>
      <div className="media-container">
        {gallery.map((file) => (
          <div className="media" key={file.id} onClick={() => setFile(file)}>
            <img
              src={file.url}
              alt={`Gallery Image ${file.id}`}
              className="media-image"
            />
          </div>
        ))}
      </div>

      <div className="popup-media" style={{ display: file ? "block" : "none" }}>
        <span onClick={() => setFile(null)}>&times;</span>
        {file && <img src={file.url} alt={`Gallery Image ${file.id}`} />}
      </div>
    </div>
  );
};

export default Gallery;
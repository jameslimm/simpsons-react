const Image = ({ characterDirection, image, alt }) => {
  // if image faces right, add the image on left class

  return <img alt={alt} className={characterDirection === "Left" ? "image-on-left" : ""} src={image} />;
};

export default Image;

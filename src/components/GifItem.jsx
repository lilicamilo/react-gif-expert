export const GifItem = ({ image }) => {
  //console.log(props);
  return (
    <>
      <div className="card">
        <img src={image.url} alt={image.title} />
        <p>{image.title}</p>
      </div>
    </>
  );
};

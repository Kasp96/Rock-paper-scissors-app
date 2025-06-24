export const Choice = ({ img, className, handleOnChoiceButtonClick }) => {
  return (
    <img
      onClick={handleOnChoiceButtonClick}
      className={className}
      src={img}
      alt="Choice Icon"
    />
  );
};

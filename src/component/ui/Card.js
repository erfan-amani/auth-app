const Card = (props) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-sm shadow-md p-12 space-y-10 w-4/5 sm:w-3/5 lg:w-2/5 xl:w-1/3">
      {props.children}
    </div>
  );
};

export default Card;

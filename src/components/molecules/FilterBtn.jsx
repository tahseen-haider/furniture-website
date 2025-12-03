const FilterBtn = ({ text = 'Filters', onClick = () => {} }) => {
  return (
    <div
      onClick={onClick}
      className="border border-gray-400 transition-colors duration-300 w-fit h-fit px-8 py-4 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-300"
    >
      {text}
      <span className="rotate-90 text-xl">{'>'}</span>
    </div>
  );
};

export default FilterBtn;

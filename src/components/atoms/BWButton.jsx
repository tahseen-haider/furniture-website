const BWButton = ({
  text = 'Button',
  className = '',
  onClick = () => {},
  variant = 'black',
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={`
        ${className} ${
          variant === 'black'
            ? 'bg-(--color-text-dark) hover:bg-(--color-text-inverse) text-(--color-text-inverse) hover:text-(--color-text-dark) border border-(--color-text-dark)'
            : 'bg-(--color-text-inverse) hover:bg-(--color-text-dark) text-(--color-text-dark) hover:text-(--color-text-inverse) border border-(--color-text-dark)'
        }
        w-full cursor-pointer h-11 font-normal text-[12px] transition-colors duration-300 select-none
      `}
    >
      {text}
    </button>
  );
};

export default BWButton;

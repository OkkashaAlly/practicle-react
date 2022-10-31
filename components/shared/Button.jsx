const Button = ({ text, action, styles }) => {
  const primaryStyles = "text-pink bg-[#3b0619]";
  const secondaryStyles = "text-neutral-500 bg-stone-900";

  return (
    <button
      className={`py-2 px-4 rounded-lg capitalize text-base font-semibold  ${
        styles === "secondary" ? secondaryStyles : primaryStyles
      }`}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;

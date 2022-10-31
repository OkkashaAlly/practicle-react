const Button = ({ text, action, styles, type = "button" }) => {
  const primaryStyles = "text-pink bg-[#3b0619]";
  const secondaryStyles = "text-neutral-500 bg-stone-900";

  return (
    <button
      className={`py-2 px-4 rounded-lg capitalize shadow-lg hover:shadow-none text-base font-semibold  ${
        styles === "secondary" ? secondaryStyles : primaryStyles
      }`}
      onClick={action}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;

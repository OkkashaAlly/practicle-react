const Button = ({ isMenu, style, text, action, type, disabled }) => {
  return (
    <>
      <button
        className={`w-full px-8 ${isMenu ? "py-[.1rem]" : "py-4"}
        ${
          style.solid
            ? `bg-${style.solid}`
            : style.outline
            ? `border border-${style.outline}`
            : "bg-transparent"
        } ${
          disabled && style.solid
            ? "bg-gray-300"
            : disabled && style.outline
            ? "border border-gray-300"
            : false
        }`}
        onClick={action}
        type={type}
        disabled={disabled}
      >
        <span
          className={`whitespace-nowrap ${
            isMenu ? "text-base neutra-demi" : "text-lg neutra-book uppercase"
          }
            ${
              style.solid === "purple" || style.outline === "purple"
                ? "text-white"
                : "text-black"
            }
          `}
        >
          {text}
        </span>
      </button>
    </>
  );
};

export default Button;

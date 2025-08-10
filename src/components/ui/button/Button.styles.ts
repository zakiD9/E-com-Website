const variantStyles = {
  primary: {
    base: "bg-primary text-white transition duration-300 ease-in-out",
    hover: "hover:bg-prhover",
    disabled: "bg-blue-300 border-blue-300 text-blue-100 cursor-not-allowed",
  },
  secondary: {
    base: "bg-secondary text-white transition duration-300 ease-in-out",
    hover: "hover:bg-sechover",
    disabled: "bg-orange-300 border-orange-300 text-orange-100 cursor-not-allowed",
  },
  default: {
    base: "bg-white text-black transition border border-black duration-300 ease-in-out",
    hover: "hover:bg-gray-100",
    disabled: "bg-gray-100 border-gray-100 text-gray-300 cursor-not-allowed",
  },
};

export default variantStyles;

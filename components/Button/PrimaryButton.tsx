interface PrimaryProps {
  children: React.ReactNode;
  fullwidth: boolean;
  onClick?: () => void;
}
export const PrimaryButton = (Props: PrimaryProps) => {
  const { children, fullwidth = false, onClick } = Props;
  const fullWidth = fullwidth ? "w-full" : "w-fit";
  return (
    <button
      onClick={onClick}
      className={`${fullWidth} text-text-s md:text-text-m flex items-center justify-center rounded-md border bg-[#318161] px-6 py-1 text-white duration-300`}
    >
      {children}
    </button>
  );
};

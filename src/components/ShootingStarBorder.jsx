const ShootingStarBorder = ({ onSubmit }) => {
  return (
    <button
      className="group w-40 relative grid overflow-hidden rounded-xl px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200"
      type="submit"
    >
      <span>
        <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(#ff5a00,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,#ff5a00_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
      </span>
      <span className="backdrop absolute inset-[1px] rounded-xl bg-[black] transition-colors duration-200 group-hover:bg-slate-800" />
      <span className="text z-10 m-1 text-[#cbd5e1]">Register</span>
    </button>
  );
};

export default ShootingStarBorder;

export const Cards = ({ titulo, descripcion, img, color }) => {
  return (
    <div className=" rounded-sm p-6 h-[222px] shadow-[0_15px_30px_-11px_rgba(131,166,210,0.5)]  relative overflow-hidden xl:max-w-[350px]">
      <div className={`${color} h-[5px] w-full absolute top-0 left-0`}></div>
      <h2 className="font-semibold text-[1.25rem]">{titulo}</h2>
      <p className="text-Grey-400 text[.8125rem] xl:text-[.875rem]">
        {descripcion}
      </p>
      <img src={img} alt="" className="absolute bottom-[24px] right-[24px]" />
    </div>
  );
};

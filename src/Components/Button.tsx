import type { FC } from "react";

const Button: FC<{
  label: string;
  width: string;
  height: string;
}> = (props) => {
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
      }}
      className={`relative cursor-pointer shadow-[0px_1px_3px_1px_#00000059] p-[0.9px] rounded-full bg-[#0057b6] overflow-y-auto flex flex-col justify-between items-center`}
    >
      <div className="text-lg font-semibold z-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        {props.label}
      </div>
      <div className="h-[30%] w-[85%] bg-white rounded-t-4xl rounded-b-xl opacity-50 blur-[0.5px]"></div>
      <div className="h-[37%] w-[85%] bg-[#84c3ff] rounded-b-xl rounded-t-md blur-[3px] shadow-[0px_0px_7px_4px_#97c8ff]"></div>
      {/* <div className="h-[50%] w-full"></div> */}
    </div>
  );
};

export default Button;

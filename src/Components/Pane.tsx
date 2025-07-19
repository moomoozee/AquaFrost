import type { FC } from "react";

const Pane: FC<{ children: React.ReactNode; height: string; width: string }> = (
  props,
) => {
  return <div>{props.children}</div>;
};

export default Pane;

import { SwipeableDrawer } from "@mui/material";
import cn from "classnames";
import React, { FC } from "react";
import { Sidebar } from "..";
import s from "./Layout.module.css";
import Drawer from "@mui/material/SwipeableDrawer";

interface Props {
  pageProps: {};
}

const Layout: FC<Props> = ({ children }) => {
  const width = 676;
  return (
    <div className={cn(s.root)}>
      <Sidebar />
      <main className="ml-[300px]">{children}</main>
      <Drawer
        anchor={"right"}
        open={true}
        onClose={() => {}}
        onOpen={() => {}}
        children={<div className="w-[676px]">Drawer</div>}
      />
    </div>
  );
};

export default Layout;

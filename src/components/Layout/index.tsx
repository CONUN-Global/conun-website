import useIsMobile from "@/hooks/useIsMobile";
import React from "react";
import classNames from "classnames";

import Sidebar from "../Sidebar";

import useStore from "@/store/store";

import styles from "./Layout.module.scss";

interface Layout {
  children: React.ReactNode;
}

function Layout({ children }: Layout) {
  const isMobile = useIsMobile();
  const locale = useStore((state) => state.currentLocale);

  return (
    <div className={classNames(styles.Appwrapper, styles[locale])}>
      {isMobile && <Sidebar />}
      <div className={styles.Layout}>{children}</div>
    </div>
  );
}

export default Layout;

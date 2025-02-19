import { mergeClasses } from "@fluentui/react-components";
import { FunctionComponent, ReactNode } from "react";
import style from "./footer.module.css";

export interface FooterItemProps {
  className?: string;
  link?: string;
  children: ReactNode;
}

export const FooterItem: FunctionComponent<FooterItemProps> = ({ children, link, className }) => {
  const resolvedClassName = mergeClasses(style["footer-item"], className);
  return link ? (
    <a className={resolvedClassName} href={link} target="_blank">
      {children}
    </a>
  ) : (
    <div className={resolvedClassName}>{children}</div>
  );
};

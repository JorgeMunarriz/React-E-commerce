import { FC, PropsWithChildren } from "react";
import "./productstyles.css";

/**
 * Represents the section of the product list where the products styles and properties
 */

export const ProductStyles: FC<PropsWithChildren> = ({ children }) => {
	return <div className="col ">{children}</div>;
};



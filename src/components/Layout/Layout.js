import React from "react";
import Sidebar from "../SideBar/SideBar";
import Navbar from "../Navbar/Navbar";
import { SLayout, SMain } from "./styles";

const LayoutSB = ({ children }) => {
    return (
        <SLayout>
            <Sidebar />
            <SMain>{children}</SMain>
        </SLayout>
    );
};

export default LayoutSB;
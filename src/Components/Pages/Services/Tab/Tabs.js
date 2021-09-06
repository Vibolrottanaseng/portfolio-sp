import React, { useState } from "react";
import './Tabs.css'
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
    };
    const handleTab3 = () => {
        setActiveTab("tab3");
    }
    const handleTab4 = () => {
        setActiveTab("tab4");
    }
    return (
        <div className="Tabs">
            {/* Tab nav */}
            <ul className="nav">
                <li className={activeTab === "tab1" ? "active" : ""}>All Templates</li>
                <li className={activeTab === "tab2" ? "active" : ""}>Simple</li>


            </ul>
            <div className="outlet">
                {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
            </div>
        </div>
    );
};
export default Tabs;

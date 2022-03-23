import React from "react";
import {Button} from "antd";
import {Link} from "react-router-dom";
import SearchPanel from "../searchPanel/searchPanel";
import "./header.css";

const Header = ({setValue}) => {
    return (
        <div className="headerWrapper">
            <div>
                <div><Link className="headerTitle" style={{color: "white"}} to="/">Announcement</Link></div>
                <SearchPanel
                    setValue={setValue}/>
            </div>
            <div className="headerBtn">
                <Button className="addBtn">
                    <Link to="/add">
                        Add new announcement
                    </Link>
                </Button>
            </div>
        </div>
    )
};

export default Header;


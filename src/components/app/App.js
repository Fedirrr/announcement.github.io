import React, {useState} from 'react';
import Header from "../header/header";
import AnnouncementList from "../announcementList/announcementList";
import AddAnnouncement from "../addAnnouncement/addAnnouncement";
import EditAnnouncement from "../editAnnouncement/editAnnouncement";
import {Route, Routes} from "react-router-dom";
import AnnouncementItem from "../announcementPageItem/announcementPage";

const App = () => {
    const [value, setValue] = useState('')
    return (
        <div>
            <Header
            setValue={setValue}/>
            
            <Routes>
                <Route path="/" element={<AnnouncementList
                value={value}/>}/>
                <Route path="/add" exact element={<AddAnnouncement/>}/>
                <Route path="/editAnnouncement" exact element={<EditAnnouncement/>}/>
                <Route path="/announcement/:id" element={<AnnouncementItem/>}/>
            </Routes>
        </div>
    );
};

export default App;
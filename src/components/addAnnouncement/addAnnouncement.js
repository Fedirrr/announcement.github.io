import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Input, notification} from "antd";
import {addAnnouncement} from "../redux/reducer/reducer";
import {Link} from "react-router-dom";

const AddAnnouncement = () => {
    const {TextArea} = Input
    const dispatch = useDispatch()
    
    const announcement = useSelector(({announcement}) => announcement)
    const [addedTitle, setAddedTitle] = useState('');
    const [addedDescription, setAddedDescription] = useState('');
    
    const popUpHandler = () => {
        notification.open({
            message: 'Notification Title',
            description: "Added new announcement"
        });
        
        let announcementId = new Date().getTime()
        if (announcement.length && announcement[announcement.length - 1].id) {
            announcementId = announcement[announcement.length - 1].id + 1
        }
        dispatch(addAnnouncement(
            {
                id: announcementId,
                title: addedTitle,
                description: addedDescription,
                date: new Date().toDateString()
            }
        ))
        setAddedTitle("")
        setAddedDescription("")
    }
    
    return (
        <div style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "center"
        }}>
            <form
                style={
                    {
                        width: '300px'
                    }
                } action="#">
                <label htmlFor="title">Title</label>
                <Input
                    name="title"
                    value={addedTitle}
                    onChange={e => setAddedTitle(e.target.value)}
                    placeholder="Enter book title"
                />
                <label htmlFor="description">Description</label>
                <TextArea
                    name="description"
                    value={addedDescription}
                    onChange={e => setAddedDescription(e.target.value)}
                />
                <div style={{
                    marginTop: "10px"
                }}>
                    <Button
                        onClick={popUpHandler}
                        style={{marginRight: "5px"}}
                        disabled={!addedTitle || !addedDescription}
                    >
                        Add
                    </Button>
                    
                    <Button>
                        <Link to="/">
                            Back to list
                        </Link>
                    </Button>
                </div>
            
            </form>
        </div>
    );
};

export default AddAnnouncement;
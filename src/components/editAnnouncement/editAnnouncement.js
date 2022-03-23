import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Input, notification} from "antd";
import {updatedAnnouncementItem} from "../redux/reducer/reducer";
import {Link} from "react-router-dom";

const EditAnnouncement = () => {
    const dispatch = useDispatch()
    const editableAnnouncementId = useSelector(({editableAnnouncementId}) => editableAnnouncementId);
    const editableAnnouncementItemSelector = useSelector((state) =>
        state.announcement.find((el) => el.id === editableAnnouncementId));
    
    const [title, setTitle] = useState(editableAnnouncementItemSelector.title)
    const [description, setDescription] = useState(editableAnnouncementItemSelector.description)
    
    const popUpHandler = () => {
        notification.open({
            message: 'Notification Title',
            description: "Your data has changed"
        });
        dispatch(updatedAnnouncementItem(
            {...editableAnnouncementItemSelector, title, description})
        )
    }
    
    return (
        <div style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "center"}}>
            <div className="formWrapper">
                <form className="form">
                    <label htmlFor="title">Title</label>
                    <Input
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter book title"
                    />
                    
                    <label htmlFor="body">Description</label>
                    <Input
                        name="body"
                        value={description}
                        placeholder="Enter book body"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    
                    <div style={{
                        marginTop: "10px"
                    }}>
                        <Button
                            disabled={!title || !description}
                            onClick={popUpHandler}
                            style={{marginRight: "5px"}}>
                            Edit
                        </Button>
                        
                        <Button>
                            <Link to="/">
                                Back to list
                            </Link>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditAnnouncement;
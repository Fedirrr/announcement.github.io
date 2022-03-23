import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Button} from "antd";
import {deleteAnnouncement, editableAnnouncementId} from "../redux/reducer/reducer";
import './announcementList.css'

const AnnouncementList = ({value}) => {
    const dispatch = useDispatch()
    const announcement = useSelector(({announcement}) => announcement)
    const filteredAnnouncement = announcement.filter(({title}) =>
        title.toLowerCase().startsWith(value.toLowerCase()))
    
    return (
        <div className="announcementListWrapper">
            <div className="announcementItems">
                {
                    filteredAnnouncement.map(({title, description, id, date}) => {
                        return (
                            <div className="announcementWrapper" key={id}>
                                <p style={
                                    {
                                        position: "absolute",
                                        top: '0',
                                        right: '10px',
                                        color: "gray",
                                        fontSize: '11px'
                                    }
                                }>
                                    date uploaded:{date} </p>
                                <h3>
                                    <Link to={`/announcement/${id}`}>
                                        {title}
                                    </Link>
                                </h3>
                                <span>{description}</span>
                                
                                <div>
                                    <Button
                                        onClick={() => {
                                            dispatch(deleteAnnouncement(id))
                                        }
                                        }>
                                        Delete</Button>
                                    <Button
                                        onClick={() => {
                                            dispatch(editableAnnouncementId(id))
                                        }}>
                                        <Link to='/editAnnouncement'>
                                            Edit
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    
    )
};

export default AnnouncementList;
import React from 'react';
import {useParams} from "react-router";
import {useSelector} from "react-redux";

const AnnouncementItem = () => {
    const {id} = useParams()
    const announcements = useSelector(({announcement}) => announcement.filter(el => el.id !== +id));
    const {title, description, date} = useSelector(({announcement}) => announcement.find(el => el.id === +id))
    console.log(date)
    const findSimilarAnnouncements = announcements.reduce((acc, el) => {
        const splitTitleBySpace = el.title.split(' ')
        const splitDescriptionBySpace = el.description.split(' ')
        const findSimilarWordInTitle = splitTitleBySpace.some(item => title.includes(item.toLowerCase()))
        const findSimilarWordInDescription = splitDescriptionBySpace.some(item => description.includes(item.toLowerCase()))
        if (findSimilarWordInTitle && findSimilarWordInDescription) acc.push(el)
        return acc
    }, []).slice(0, 3)
    
    return (
        <div
            style={{padding: "10px"}}>
            <p><b>Published</b> {date}</p>
            <h2>Title</h2>
            <div style={{fontSize: "18px"}}>
                {title}
            </div>
            <h3>Description</h3>
            <div style={{fontSize: "18px"}}>
                {description}
            </div>
            
            <div
                style={{marginTop: "20%"}}>
                <h2>Similar announcement</h2>
                <div style={{display: "flex"}}>
                    
                    {
                        findSimilarAnnouncements.map(({id, title, description}) => {
                            return (
                                <div
                                    style={{
                                        border: "1px solid black",
                                        margin: "5px",
                                        boxSizing: "border-box",
                                        width: "200px",
                                        display: "flex"
                                    }}
                                    key={id}>
                                    <div style={{padding: "15px"}}>
                                        <div>
                                            <h4>{title}</h4>
                                            <h5>{description}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default AnnouncementItem;
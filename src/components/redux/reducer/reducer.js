import {baseAnnouncement} from "../../../mock/mockData";

const ADD_ANNOUNCEMENT = "ADD_ANNOUNCEMENT";
const DELETE_ANNOUNCEMENT = "DELETE_ANNOUNCEMENT";
const EDITABLE_ANNOUNCEMENT_ID = "EDITABLE_ANNOUNCEMENT_ID";
const UPDATE_ANNOUNCEMENT_ITEM = "UPDATE_ANNOUNCEMENT_ITEM";

const initialState = {
    announcement: JSON.parse(localStorage.getItem('announcement')) || baseAnnouncement,
    editableAnnouncementId: null,
    loading: true
}
export const announcementReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_ANNOUNCEMENT:
            const addAnnouncement = [...state.announcement, action.payload]
            localStorage.setItem('announcement', JSON.stringify(addAnnouncement))
            return {
                ...state,
                loading: false,
                announcement: addAnnouncement
            }
        case DELETE_ANNOUNCEMENT:
            const deletedAnnouncement = state.announcement.filter(({id}) => id !== action.payload)
            localStorage.setItem('announcement', JSON.stringify(deletedAnnouncement))
            return {
                ...state,
                loading: false,
                announcement: deletedAnnouncement
            }
        case EDITABLE_ANNOUNCEMENT_ID:
            return {
                ...state,
                loading: false,
                editableAnnouncementId: action.payload
            }
        case UPDATE_ANNOUNCEMENT_ITEM:
            const updatedAnnouncement = state.announcement.map((el) => {
                return el.id === action.payload.id ? action.payload : el
            })
            localStorage.setItem('announcement', JSON.stringify(updatedAnnouncement))
            return {
                ...state,
                loading: false,
                announcement: updatedAnnouncement,
            }
        
        default:
            return state
    }
}

export const addAnnouncement = (announcement) => ({type: ADD_ANNOUNCEMENT, payload: announcement});
export const deleteAnnouncement = (announcement) => ({type: DELETE_ANNOUNCEMENT, payload: announcement});
export const editableAnnouncementId = (id) => ({type: EDITABLE_ANNOUNCEMENT_ID, payload: id})
export const updatedAnnouncementItem = (announcement) => ({type: UPDATE_ANNOUNCEMENT_ITEM, payload: announcement})
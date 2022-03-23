import React from 'react';
import {Input} from "antd";

const SearchPanel = ({setValue}) => {
    return (
        <div>
            <Input
                onChange={event => setValue(event.target.value) }
            placeholder="search"/>
        </div>
    );
};

export default SearchPanel;
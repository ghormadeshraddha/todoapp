import React from "react";
import { Button } from 'antd';
import 'antd/dist/antd.css'; 

function Todolist(props) {

    return (
        <>
            <div className="delete-container">

                <ul className="list-item">{props.text}</ul>

                <Button className="delete-btn" type="primary" shape="round"
                    onClick={() => {
                        props.onSelect(props.id)
                    }}>
                    X</Button>
            </div>

        </>
    )
}

export default Todolist;
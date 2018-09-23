import React from 'react';

const newsList = (props) => {

    const items = props.newstag.map((item) => {
        return(
            <div key = {item.id}>
                <h3 className="newTitle">{item.title}</h3>
                <h2>{item.feed}</h2>
            </div>
        )
    })


    return(
        <div>
            {items}
        </div>
    )
}

export default newsList;
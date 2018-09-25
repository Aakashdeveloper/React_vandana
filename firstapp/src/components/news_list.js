import React from 'react';

const newsList = (props) => {

    const items = props.newstag.map((item) => {
        return(
        
                
                        <tr key = {item.id}>
                            <td>{item.title}</td>
                            <td>{item.feed}</td>
                        </tr>
                  
            
        )
    })


    return(
        <div>
            <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>News</th>
                        </tr>
                    </thead>
                    <tbody>
                       {items}
                    </tbody>
                </table>
        </div>
    )
}

export default newsList;
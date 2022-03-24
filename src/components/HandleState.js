import React from 'react';

const HandleState = ({ state, setState }) => {
    console.log(state)
    const uniqueNames = Array.from(new Set(state));
    const sumWithInitial = uniqueNames.reduce(
        (previousValue, currentValue) => previousValue + currentValue.cost,
        0
    );


    const HandleDelete = (id) => {
        if (window.confirm("Delete the item?")) {
            const newD = state.filter(data => data.id !== id)
            setState(newD)
        }

    }
    return (
        <div className="sidebar-team">
            <div className="handleState">
                <div className="handleMain">
                    <p>added player :  {uniqueNames.length}</p>
                    <p>total cost : $ {sumWithInitial}</p>
                </div>

                <div>
                    {
                        uniqueNames.map((data, index) => {
                            return (
                                <div key={index}>
                                    <p> {index + 1} <img width="50px" height="30px" src={data.img} alt="images" />  {data.name} <button onClick={() => HandleDelete(data.id)}>delete</button></p>
                                </div>
                            )
                        })
                        // }).reverse()
                    }
                </div>
                <button onClick={() => {
                    alert("added");
                    setState([]);
                }}>add them</button>
            </div>
        </div>

    );
};

export default HandleState;
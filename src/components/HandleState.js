import React from 'react';

const HandleState = ({state,setState}) => {
    console.log(state)
    const sumWithInitial = state.reduce(
        (previousValue, currentValue) => previousValue + currentValue.cost,
        0
      );


      const HandleDelete = (id)=>{
        if(window.confirm("Delete the item?")){
            const newD= state.filter(data => data.id !== id)
            setState(newD)
        }
          
      }
    return (
        <div style={{position: 'relative'}}>
            <div className="handleState">
            <p>added  {state.length}</p>
            <p>total cost {sumWithInitial}</p>
            <div>
                {
                    state.map((data,index)=>{
                        return (
                            <div key={index}>
                                <p> {index+1} <img width="50px" height="20px" src={data.img} alt="images" /> name: {data.name} <button onClick={()=>HandleDelete(data.id)}>delete</button></p>
                            </div>
                        )
                    })
                    // }).reverse()
                }
            </div>
            <button onClick={()=>{
                alert("added");
                setState([]);
            }}>add them</button>
        </div>
        </div>
        
    );
};

export default HandleState;
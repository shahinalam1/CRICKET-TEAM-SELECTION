import React, { useState } from 'react';
import FakeData from '../FakeData'
import HandleState from './HandleState';
const HomeData = () => {
    const [data, setData] = useState(FakeData);
    const [state,setState]=useState([])


    const uniqueData = (id) => {
       const newData= data.filter(data => data.id === id);
        setState([...state,newData[0]]);
    }
    console.log(state.length);
    const uniqueNames = Array.from(new Set(state));
    return (
        <div className="HomeData">
            <p style={{marginLeft:"104px", color: '#f42e0d',fontsize:"20px",padding: "10px"}}> Here,Total Players :- {data.length}</p>
            <div className="homeDiv">
                <div className="homeitem">
                    {
                        data.map(dt => {
                            return <div key={dt.id}  className="homeitem-in">
                                <img width="100%" height="150px" src={dt.img} alt="images"  style={{display: 'block'}}/>
                                <p>NAME :{dt.name}</p>
                                <p>COST :{dt.cost}</p>
                                { 
                                
                                uniqueNames.length>10 ? <button className="btn-select" onClick={()=>{ alert('you are already selected 11 playears for your team !!!'); }}>select</button> :<button className="btn-select" onClick={() => uniqueData(dt.id)}>select</button>
                                }
                            </div>
                        })
                    }
                </div>
                <HandleState state={state} setState={setState}/>

            </div>

        </div>
    );
};

export default HomeData;
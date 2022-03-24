import React, { useState } from 'react';
import FakeData from '../FakeData'
import HandleState from './HandleState';
const HomeData = () => {
    const [data, setData] = useState(FakeData);
    const [state,setState]=useState([])


    const uniqueData = (id) => {
       const newData= data.filter(data => data.id === id);
        setState([...state,newData[0]])
    }
    return (
        <div className="HomeData">
            <p>Total fakeData {data.length}</p>

            <div className="homeDiv">
                <div className="homeitem">
                    {
                        data.map(dt => {
                            return <div key={dt.id}  className="homeitem-in">
                                <img width="100%" height="150px" src={dt.img} alt="images"  style={{display: 'block'}}/>
                                <p>NAME :{dt.name}</p>
                                <p>COST :{dt.cost}</p>
                                <button className="btn-select" onClick={() => uniqueData(dt.id)}>select</button>
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
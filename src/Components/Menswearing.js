import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MensWearing (){
    const [state, setState] = useState([]);
    
        useEffect(()=>{
            axios.get(`https://fakestoreapi.com/products/category/men's clothing`).then((res)=>{
                setState(res.data);
            })
    
        },[]);
    
    
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            {state.length > 0 ? (<h3 className="text-success text-center">{state[0].category.toUpperCase()}</h3>):
                             (<h3 className="text-danger text-center">No Data</h3>)}
                        </div>
                        <div className="card-body">
                            {state.map((ele,i)=>{
                                return (
                                <div>
                                <ul>
                                    <li><Link>{ele.title.slice(0, 20)}</Link></li>
                                </ul>
                                </div>
                            )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MensWearing;
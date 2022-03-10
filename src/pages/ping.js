import React, { useEffect, useState } from 'react';
import { useForm,Controller } from "react-hook-form";
import {RangeStepInput} from 'react-range-step-input';
import  '../mystyle.css'; 
import PingService from '../services/PingService';
function Ping() {
    const { register, handleSubmit,control } = useForm(); // useForm requried react-hook-form
    const [pingResult,setPingResult] = useState('');
    const [topFiveResult,setTopFiveResult] = useState([])
    const onSubmit = data => {
      let pingService = new PingService();
      pingService.ping(data.host,data.count).then(res=>{
        setPingResult(res);
      });
    };
    useEffect(()=>{
      let pingService = new PingService();
      pingService.getTopFive().then(res=>{
        console.log(res);
        setTopFiveResult(res);
      })
    },[]);
  
    return (
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit)} >
          <div><h1>Ping Form</h1></div>
          <div>
            <label htmlFor="Host">Host : </label>
            <input class="host" {...register("host")} type="text"/>
          </div>
          <div>
            <label htmlFor="Count">Count : </label>
            <input type="range" defaultValue={1}  {...register("count")} class="slider"></input>
            
          </div>
          <div> <button type="submit">Run</button></div> 
          <div>
          <h1>Output:</h1>
          <div>
            <textarea value={pingResult}></textarea>
          </div>
          <div>
            <table class="tableTopFive">
              <tr>
                <th>host</th>
                <th>count</th>
              </tr>
              {
                topFiveResult.map(x=>{
                  return (
                    <tr>
                      <td>{x.url}</td>
                      <td>{x.count}</td>
                    </tr>
                  )
                })
              }
            </table>
          </div>
        </div>
        </form>
      
      </div>
      
    );
  }
export default Ping;
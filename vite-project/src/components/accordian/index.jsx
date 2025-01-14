import React,{useState} from "react"
import data from './data'
export default function Accordian() {
    const [selected,setSelected]=useState(null)
    
     function handleSingleSelection(getcurr){
 setSelected(getcurr===selected ? null : getcurr);
 
     }
    return(
        <>
       <div className="wrapper">
        <div className="accordian">
            {

                data && data.length > 0 ?
data.map(dataItem=><div className="item">
    <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
        <h3>{dataItem.question}</h3>
        <span>+</span>
    </div>
  {
    selected===dataItem.id ? <div >{dataItem.answer}</div>:null
  }
</div>)
                : <div>NoData found !</div>
            }
        </div>
       </div>
        </>
    )
}
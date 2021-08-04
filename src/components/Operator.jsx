import './Operator.css';

let Operator=(props)=>{
    return(
        <div className= "allOperators">
            <div className="button">
            <button className="op" value="0" onClick ={(e)=>{props.HandleOp(e.currentTarget.value)}}>0</button>
            <button className="op" value="1" onClick ={(e)=>{ props.HandleOp(e.currentTarget.value)}}>1</button>
            <button className="op" value="2" onClick ={(e)=>{props.HandleOp(e.currentTarget.value)}}>2</button>
            <button className="op" value="3" onClick ={(e)=>{props.HandleOp(e.currentTarget.value)}}>3</button>
            </div>
            <div className="button">
            <button className="op" value="4" onClick ={(e)=>{props.HandleOp(e.currentTarget.value)}}>4</button>
            <button className="op" value="5" onClick ={(e)=>{ props.HandleOp(e.currentTarget.value)}}>5</button>
            <button className="op" value="6" onClick ={(e)=>{props.HandleOp(e.currentTarget.value)}}>6</button>
            <button className="op" value="7" onClick ={(e)=>{props.HandleOp(e.currentTarget.value)}}>7</button>
            </div>
            <div className="button">
            <button className="op" value="8" onClick ={(e)=>{props.HandleOp(e.currentTarget.value)}}>8</button>
            <button className="op" value="9" onClick ={(e)=>{ props.HandleOp(e.currentTarget.value)}}>9</button>
            <button className="op" value="C" onClick ={(e)=>{props.HandleOp(e.currentTarget.value)}}>C</button>
            <button className="op" value="=" onClick ={(e)=>{props.HandleOp(e.currentTarget.value)}}>=</button>
            </div>
            <div className= "button">
            <button className="op" value="+" onClick ={(e)=>{ props.HandleOp(e.currentTarget.value)}}>+</button>
            <button className="op" value="-" onClick ={(e)=>{props.HandleOp(e.currentTarget.value)}}>-</button>
            <button className="op" value="/" onClick ={(e)=>{props.HandleOp(e.currentTarget.value)}}>/</button>
            <button className="op" value="*" onClick ={(e)=>{props.HandleOp(e.currentTarget.value)}}>*</button>
            </div>

        </div>
    )
}
export default Operator;
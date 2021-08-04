import './Input.css';
let Input= (props)=>{
    return(
        <div>
            <input className="input-box"
            type= "text"
            value={props.currInput}
            />
        </div>
    )
}
export default Input;
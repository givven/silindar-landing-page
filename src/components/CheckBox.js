export default function CheckBox({class_name, name,id, check_state, setStateCheck}){
    const onChange = ({target})=>{
        console.log(target.checked);
        console.log(target.id);
        console.log(check_state);
        try{
            console.log("오잉");
            check_state[target.id] = target.checked;
            setStateCheck({...check_state});
            console.log("또또또")
        }
        catch{

        }
        console.log(check_state);
    };
    
    return (
        <article className={class_name}>
        <input 
        type="checkbox" id={id} 
        name="radios" value={id} onChange={onChange}/>
        <div>
            <span>{name}</span>
        </div>
        </article>
    );
}
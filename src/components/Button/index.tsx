import './style.css';

interface actionCounter{
    type:'increment'|'decrement',
    value:number,
  }

interface actionInput{
type:'name',
value:string,
}

interface actionColor{
type:'dvcolor',
value:'dvColor'|'dvColor dvColorBlue'
}

interface actionReveal{
type:'dvReveal',
value:boolean
}

interface propsButton{
    action:'sum'|'sub',
    setState:React.Dispatch<actionCounter | actionInput | actionColor | actionReveal>,
}

function ButtonCounter(props:propsButton) {
    return (
        <button onClick={()=>{
            if(props.action == 'sum'){
                props.setState({
                    type:'increment',
                    value:1
                })
            }else{
                props.setState({
                    type:'decrement',
                    value:1
                })
            }
        }} className="bttPrimary">{props.action == 'sum' ? '+' : '-'}</button>
    );
}

export default ButtonCounter;
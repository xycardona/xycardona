import "./button.css";
type PropsBoton={
    text?:string;
    onClick?: () => void;
    disabled?: boolean;
    variant?:'primary'|'secundary'
}
const MiBoton: React.FC<PropsBoton>= ({text,onClick,disabled,variant}) => {
    const getVariant=()=>{
        switch (variant) {
            case 'primary':
                return 'bt bt-primary';
            case 'secundary':
                return 'bt bt-secundary';
            default:
                return 'bt bt-primary'
        }
    }
    const dice=() => {
        
        return (text == undefined)?"ja":text;
    }
    return (
    <button onClick={onClick} disabled={disabled} className={getVariant()}>{dice()}</button>
    );
};
export default MiBoton;
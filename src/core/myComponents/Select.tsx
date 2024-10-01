type SelectPr ={
    onChange? :()=> void;
};
const MiSelect: React.FC<SelectPr> = ({onChange}) => {
    return <select onChange={onChange}>
         <option value="red">Rojo</option>
         <option value="blue">Azul</option>
         <option value="green">Verde</option>
    </select>
}
export default MiSelect;
import {FC} from "react";


interface Props {
    value:string;
    color:string;
    onClick?:()=>void;
    isSelected?:boolean;
}
const Chip:FC<Props> = ({color, value, onClick, isSelected}) => {
    return (
        <div
            onClick={onClick}
            className={`relative grid items-center whitespace-nowrap rounded-2xl py-1.5 px-3 font-sans text-xs font-bold uppercase text-black 
            ${isSelected ? 'bg-fuchsia-50 border-2 border-blue-900' : 'bg-white border-2'}`}>
            <span className="">{value}</span>
        </div>

    )
   /* return (
        <div
            className={`relative grid items-center whitespace-nowrap rounded-lg py-1.5 px-3 font-sans text-xs font-bold uppercase text-white ${color}`}>
            <span className="">{value}</span>
        </div>

    )*/
}

export default Chip;
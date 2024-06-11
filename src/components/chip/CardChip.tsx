import {FC} from "react";
import {bgColourList, borderColourList} from "@/app/lib/utils";

interface Props {
    value:string;
}
const CardChip:FC<Props> = ({ value}) => {
    const randomNumer = Math.floor(Math.random() * 8)
    const cssValue = `${borderColourList[randomNumer]} ${bgColourList[randomNumer]}`
    return (
        <span
            className={`inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs text-gray-600 ring-1 ring-inset ${cssValue}`}>{value}</span>

    )
}

export default CardChip;
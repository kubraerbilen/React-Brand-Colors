import { useState, useContext } from "react";
import { getContrast } from "../helpers";
import MainContext from "../MainContext";
import ClipboardButton from "react-clipboard.js";

function Brand({ brand }) {

    const { selectedBrands, setSelectedBrands, setCopied } = useContext(MainContext)

    const toggleSelected = () => {
        if (selectedBrands.includes(brand.slug)) {
            setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
        } else {
            setSelectedBrands([...selectedBrands, brand.slug])
        }
    }
    const setColor = (color) => {
        setCopied(color)
    }

    return (
        <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>
            <h5 onClick={toggleSelected} >{brand.title}</h5>
            <div className="brands-colors">
                {brand.colors.map(color => (
                    <ClipboardButton data-clipboard-text={color} onSuccess={() => setColor(color)} component="span" style={{ '--bgColor': `#${color}`, '--textColor': `${getContrast(color)}` }}>
                        {color}
                    </ClipboardButton>
                ))}
            </div>
        </div>

    )
}
export default Brand
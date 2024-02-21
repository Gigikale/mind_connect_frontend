import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { useState } from "react";

const Roundbox = ({ label = '', onValueChanged }) => {
    const [ state, setState ] = useState(false)

    const handleSelect = () => {
        setState(!state)
        onValueChanged(state)
    }
    return (
        <div className="flex gap-2.5 mb-2 self-start items-center" style={{ alignItems: "center" }}>
            <div
                onClick={handleSelect}
                style={{
                    width: "16px",
                    height: "16px",
                    border: "#08284E solid 2px",
                    borderRadius: "50px",
                    cursor: "pointer",
                    backgroundColor: state ? "#08284E" : null,
                    color: "#fff"
                }}
            > {
                state ? <RiCheckboxBlankCircleLine width="12px" height="12px"/> : <div></div>
            } </div>
            <div
                htmlFor="checked-checkbox"
                className="text-sky-950 text-xs font-bold grow whitespace-nowrap"
            > { label } </div>
        </div>
    );
};

export default Roundbox
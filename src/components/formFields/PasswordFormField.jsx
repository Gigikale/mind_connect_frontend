import { CiLock, CiUnlock } from "react-icons/ci";

function PasswordFormField({title = '', visible = false, placeholder= '', id = 'password', onValueChanged, onToggle, value}) {
    return (
        <>
            <p className="text-sm font-medium leading-5 text-neutral-800"
               style={{fontFamily: 'Inter'}}
            > { title } </p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    type={visible ? "text" : "password"}
                    id={ id }
                    value={ value }
                    placeholder={ placeholder }
                    onChange={e => onValueChanged(e.target.value)}
                    style={{ padding: '1rem', flex: '1' }}
                    className="justify-center items-start py-3 pr-16 pl-3 mt-1 text-base leading-6 bg-white rounded border border-solid 
                    border-[color:var(--Gray-400,#BDBDBD)] text-neutral-500 max-md:pr-5 h-12 w-600"
                />
                <div style={{ marginLeft: '-2rem', cursor: 'pointer' }} onClick={onToggle}>
                    {visible ? <CiLock /> : <CiUnlock />}
                </div>
            </div>
        </>
    )
}

export default PasswordFormField;
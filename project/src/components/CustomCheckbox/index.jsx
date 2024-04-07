import './style.css'

const CustomCheckbox = ({children, setValue}) => {
    const handleClick = () => setValue(children);

    return (
        <label className="custom-label" onClick={handleClick}>
            <input type="checkbox" className="custom-checkbox"/>
            <span className="custom-style" ></span>
            <p>{children}</p>
        </label>        
    )
}

export default CustomCheckbox
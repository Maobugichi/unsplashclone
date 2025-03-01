
import { useEffect, useState, useCallback } from "react"

const Header = ({fetchAnswer,setSearchParam}) => {
    const [inputValue, setInputValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState(null)
    
    const handleSearch = useCallback((e) => {
        setInputValue(e.target.value);
        setTimeout(() => {
            setSearchParam(e.target.value)
        },5000)
    },[])

    useEffect(() => {
        if (inputValue.length == 0) {
            setSearchParam('Africa')
        }
    },[inputValue])
   
    
   
    return(
        <form className="relative bg-[#dce3eb] h-[200px] grid place-items-center" action="">
            <input onChange={handleSearch} placeholder="Search for photos" className="bg-white w-[80%] h-16 rounded-md pl-10" type="search" value={inputValue} />
        </form>
    )
}

export default Header
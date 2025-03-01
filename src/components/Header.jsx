
import { p } from "motion/react-client";
import { useEffect, useState, useCallback } from "react"
import Search from "./SearchBtn";

const Header = ({fetchAnswer,setSearchParam}) => {
    const [inputValue, setInputValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState(null)
    const [isLoading, setIsLoading] = useState(false);

    
    const handleChange = useCallback((e) => {
        setInputValue(e.target.value);
       
    },[])

    function handleSearch(e) {
        e.preventDefault()
        setIsLoading(true);
        setTimeout(() => {
            setSearchParam(inputValue)
            setIsLoading(false);
            setInputValue("")
        },3000)
    }
    return(
        <form className="relative bg-[#dce3eb] h-[200px] grid place-items-center" action="">
            {isLoading ? <p>Searching for {inputValue}</p> : 
             <>
               <input onChange={handleChange} placeholder="Search for photos" className="bg-white w-[80%] h-16 rounded-md pl-10" type="text" value={inputValue} /> 
                <Search
                handleSearch={handleSearch}
                />
             </> }
            
        </form>
    )
}

export default Header
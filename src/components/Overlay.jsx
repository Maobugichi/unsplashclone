const Overlay = ({handleClick}) => {
    return(
        <div onClick={handleClick} className="h-full rounded-xl w-full absolute bg-[#333] opacity-35 z-30"></div>
    )
}

export default Overlay
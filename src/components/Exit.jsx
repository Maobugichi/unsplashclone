const Exit = ({setShow}) => {
    function close() {
        setShow(prev => !prev)
    }
    return(<svg onClick={close} className="absolute top-7 left-5" xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24"><path fill="#000" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"></path></svg>)
}

export default Exit
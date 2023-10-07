import "./styles.css";

function Search({searchText,setSearchText}){

    return(
        <>
            <input type={"text"} placeholder="Start typing to search" onChange={(e)=>setSearchText(e.target.value)}/>
        </>
    )
}

export default Search;
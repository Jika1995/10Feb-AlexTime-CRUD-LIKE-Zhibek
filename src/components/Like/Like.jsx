import {React, useState} from "react";

const Like = ({item}) => {

    const [like, setLike] = useState(false);

    return (
        <>
            <a href="#" className="mx-2" style={{textDecoration: 'none'}} onClick = {(e) => {e.preventDefault(); setLike(!like)}}>
                {like ? '❤️' : '🤍'}
                {like ? item.isLike = true : item.isLike = false}
                {console.log(item)}
            </a>
        </>
    )
}; 

export default Like

{/* <a href="#" className="mx-2" style={{textDecoration: 'none'}} onClick = {(e) => {e.preventDefault(); setLike(!like)}}>
{like ? '❤️': '🤍'}
</a> */}
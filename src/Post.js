import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingAction } from "./actions";

const PostRender =() =>{
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    useEffect(() => {
        dispatch(fetchingAction())
    },[])
    const renderItems = () => {
        if (state.loading) {
            return <h1>Loading...</h1>
        }
        return state.items.map(item => {
            return(
                <h2 key={item.id}>{item.name}</h2>
            )
        })
    }


    return <div>{renderItems()}</div>;
}
export default PostRender;
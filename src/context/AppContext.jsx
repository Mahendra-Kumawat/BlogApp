import { createContext, useEffect, useState } from "react";
import { getDataFromApi } from "../utils/Api";

export const AppContext = createContext()


export function AppContextProvider({children}){

    const [loading , setLoading] = useState(false)
    const [posts , setPosts] = useState([]) 
    const [page , setPage] = useState(1)
    const [totalPages , setTotalPages] = useState(null)

    useEffect(()=> {
        blogData(page);
    },[page])


    async function blogData(page){
        setLoading(true)
        try {
            const {data} = await getDataFromApi(page)
            setPosts(data.posts)
            setPage(data.page)
            setTotalPages(data.totalPages)
        } catch (error) {
            console.log(error)
            setPosts([]);
            setPage(1);
            setTotalPages(null);
        }

        setLoading(false)

    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages
    }

    return <AppContext.Provider value={value}>
            {
                children
            }
    </AppContext.Provider>
}
import { useEffect, useState } from "react"

export const useArticlesFetch = () => {
    const [ posts, setPosts ] = useState(null);

    useEffect(() => {
         fetch("https://moieducentre.ac.ke/articles/wp-json/wp/v2/posts?_embed&per_page=100")
             .then(res => res.json())
             .then(data => {
                    setPosts(data)
             })
    }, []) 

    return { posts }
}
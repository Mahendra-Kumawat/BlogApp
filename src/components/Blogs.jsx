import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import Card from './Card'
import Spinner from './Spinner'
import NotFound from './NotFound'

const Blogs = () => {

    const {posts, loading} = useContext(AppContext)
 
  return (
    <div className='my-24 flex flex-col items-center justify-center gap-y-8'>
        {
            loading ? (<Spinner /> ) : (
                
                posts.length > 0 ? (posts.map((post) => {
                return <Card key={post.id} post = {post}/>
            })) : (<NotFound/>)
                
            ) 
        }
    </div>
  )
}

export default Blogs

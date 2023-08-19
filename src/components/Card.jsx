import React from 'react'

const Card = ({post}) => {

  return (
    <div className='flex flex-col gap-1 max-w-[700px] mx-auto w-11/12'>
      <h1 className='font-bold text-xl'>{post.title}</h1>
      <div>
        <div>
          <p className='text-[15px]'>
            By <span className='italic'> {post.author} </span> On <span className='font-bold underline'> {post.category} </span>
          </p>
          <p className='text-[15px] mt-1'>
            Posted On <span> {post.date} </span>
          </p>
          <p className='mt-3 mb-2'>{post.content}</p>
        </div>
      </div>
      <div className='flex flex-wrap text-sm gap-x-2'>
        {post.tags.map((tag, index) => (
          <span className='font-bold underline text-blue-800 cursor-pointer' key={index}> #{tag} </span>
        ))}
      </div>
    </div>
  );
}

export default Card

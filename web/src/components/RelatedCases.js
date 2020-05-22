import React from 'react';
import PortableText from './PortableText'
import Image from '../components/Image';

//TODO: Fix date syntax to "8.august 2018"
export default ({ data }) => {
  console.log(data)
  return (
    <div className="">

      <h2 className="text-md md:float-left">Har du fått med deg disse?</h2>

      <a href="https://www.netlife.com/blogg/" className="underline text-sm md:float-right">Se flere saker</a>

      <ul className="flex flex-wrap float-left border-b border-solid border-black border-0 pb-8 justify-between mt-4">
        {data.map(post => (
           <li
           key={post._id}
           className="w-full md:w-1/5"
         >
           <div>
             <div className="" key={post._id}>
               <div className="">
               <Image image={post.mainImage.image} alt={post.mainImage.alt} />
               </div>
               <div className="text-xs mt-4">
                 {post.serviceCategories[0].title} | {post.publishDate}
             </div>
               <div className="mt-2">
                 {post.title}
             </div>
             </div>
           </div>
         </li>
        )
        )}
        
      </ul>

    </div>
  )
}

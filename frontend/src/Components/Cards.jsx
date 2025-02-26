import React from 'react'

function Cards({item}) {
    return (
        <>
            <div className='mt-4 mb-4 p-3'>       
                <div className="card bg-base-100 w-90 h-90 shadow-xl hover:scale-105 duration-200 dark:border">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className=" border-[2px] rounded-full px-2 py-2 hover:text-white hover:bg-pink-500 duration-200 hover:p-6 hover:cursor-pointer">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards

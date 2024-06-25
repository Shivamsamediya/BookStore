/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function Cards({ item }) {
    return (
        <div className="mt-4 my-4 sm:mx-3 md:mx-5 lg:mx-10">
            <div className="card w-full bg-base-100 shadow-xl hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white dark:border">
                <figure className="w-full h-48 overflow-hidden">
                    <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-lg md:text-xl">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p className="text-sm md:text-base">{item.title}</p>
                    <div className="card-actions flex justify-between mt-4">
                        <div className="badge badge-outline h-8">${item.price}</div>
                        <div className="badge badge-outline h-8 hover:bg-pink-500 hover:text-white duration-200 cursor-pointer">Buy Now!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Cards.propTypes = {
    item: PropTypes.object.isRequired,
};

export default Cards;

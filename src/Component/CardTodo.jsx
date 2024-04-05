import React from 'react';
import image from './../assets/images.jpg'
import index from './../assets/index.jpg'

const CardTodo = ({todo}) => {
    return (
        <>
            <div class="max-h-[550px] max-w-xl max-w-sm rounded overflow-hidden shadow-lg">
                <div className="w-full h-[290px]">
                    <img class="w-full h-full object-cover" src={todo.completed ? image:index} alt="Sunset in the mountains"/>
                </div>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className='d-flex  justify-content-between'>
                        <button className='btn btn-succes'>modifier</button>
                        <button className='btn btn-danger'>supprimer</button>
                    </div>
            </div>
        </>
    );
}

export default CardTodo;

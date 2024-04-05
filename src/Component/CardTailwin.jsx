import React from 'react';

const CardTailwin = ({photo}) => {
    return (
        <>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={photo.thumbnailUrl} alt="Sunset in the mountains"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">ID:.{photo.id}</div>
                        <p class="text-gray-700 text-base"> {photo.title} </p>
                    </div>
                    
            </div>
        </>
    );
}

export default CardTailwin;

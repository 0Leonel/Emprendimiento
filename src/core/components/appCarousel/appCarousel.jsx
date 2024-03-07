import React, { useState } from 'react';

export const AppCarousel = (props) => {
    const { imagenN1, imagenN2, imagenN3 } = props;
    const imagenes = [imagenN1, imagenN2, imagenN3].filter(Boolean); // Elimina valores nulos o indefinidos

    const [imagenActual, setImagenActual] = useState(0);

    const avanzarImagen = () => {
        setImagenActual((prevImagen) => (prevImagen === imagenes.length - 1 ? 0 : prevImagen + 1));
    };

    const retrocederImagen = () => {
        setImagenActual((prevImagen) => (prevImagen === 0 ? imagenes.length - 1 : prevImagen - 1));
    };

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative h-[_24rem] overflow-hidden rounded-lg md:h-96">
                {/* Renderizar solo las imágenes disponibles */}
                {imagenes.map((item, index) => (
                    <img
                        key={index}
                        src={item}
                        className={`absolute block w-full h-full rounded-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${index === imagenActual ? 'opacity-100' : 'opacity-0'}`}
                        alt={`Imagen ${index + 1}`}
                    />
                ))}
            </div>
            {/* Slider controls */}
            {imagenes.length > 1 && (
                <>
                    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={retrocederImagen}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>

                        {/* Icono del botón anterior */}
                    </button>
                    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={avanzarImagen}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                        {/* Icono del botón siguiente */}
                    </button>
                </>
            )}
        </div>
    );
};

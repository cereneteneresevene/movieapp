"use client"
import React from "react";
import Image from 'next/image'; // Next.js'in Image bileşeni
import { useRouter } from "next/navigation"; // `next/navigation`'dan al

const Movies = ({ dt }) => {
    const router = useRouter(); // Router'ı al

    const handleMovieClick = () => {
        router.push(`/movie/${dt?.id}`); // Yönlendirme işlemi
    };

    console.log(dt, "dt");

    const imageUrl = `https://image.tmdb.org/t/p/w500/${dt?.backdrop_path || dt?.poster_path}`; // Doğru TMDB image URL'si
    
    return (
        <div onClick={handleMovieClick} className="min-w-[470px] relative imgContainer cursor-pointer "> 
            <Image 
                
                src={imageUrl} 
                style={{objectFit:'cover'}}
                alt={dt?.title || "Movie Poster"} 
                width={470}
                height={300}
                objectFit="cover" // Resmin nasıl hizalanacağını belirler
                priority // Önemli resimlerin önce yüklenmesi
            />
            <div className='absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity'>
                <div className='text-2xl font-bold'>{dt?.title}</div>
                <div>{dt?.vote_average} - {dt?.release_date}</div>
            </div>
        </div>
    );
};

export default Movies;

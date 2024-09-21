import React from "react";
import Image from 'next/image'; // Next.js'in Image bileşeni

const getMovie = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=31aec2818216b37f6a0824883f2f95f0`);
    if (!res.ok) {
        throw new Error('Failed to fetch movie data');
    }
    return res.json(); // JSON verisini döndür
}

const Page = async ({ params }) => {
    const id = params.id;
    const movieDetail = await getMovie(id); // await burada kullanılabilir
    console.log(id, "id");

    const imageUrl = `https://image.tmdb.org/t/p/w500/${movieDetail?.backdrop_path || movieDetail?.poster_path}`; // Doğru TMDB image URL'si

    return (
        <div className="relative p-7 h-screen">
            <Image 
                style={{objectFit:'cover'}}
                src={imageUrl} 
                alt={movieDetail?.title || "Movie Poster"} 
                layout="fill" // Resmin dolmasını sağlar
                objectFit="cover" // Resmin nasıl hizalanacağını belirler
                priority // Önemli resimlerin önce yüklenmesi
            />
            <div className="absolute">
                <div className="text-4xl font-bold my-3">{movieDetail?.title}</div>
                <div className="w-1/2">{movieDetail?.overview}</div>
                <div className="my-3">{movieDetail?.vote_average} - {movieDetail?.release_date}</div>
                <div className="my-2 border w-32 hover:bg-white hover:text-black p-2 rounded-md text-center text-large cursor-pointer">Trail</div>
            </div>
        </div>
    );
}

export default Page;

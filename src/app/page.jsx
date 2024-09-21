"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'; // Next.js 13 kancası
import Movies from "@/components/Movies";

const Page = () => {
    const [data, setData] = useState(null);
    const searchParams = useSearchParams(); // Sorgu parametrelerini almak için
    const genre = searchParams.get('genre'); // 'genre' parametresini al
    
    const apiKey = '31aec2818216b37f6a0824883f2f95f0';
    let url;

    if (genre === "latest") {
        url = `https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=en-US`;
    } else if (genre === "upcoming") {
        url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
    } else {
        url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await res.json();
                setData(result); // Veriyi state'e kaydet
            } catch (error) {
                console.error('Error fetching the movies:', error);
            }
        };

        fetchData(); // useEffect içinde asenkron işlemi başlat
    }, [url]); // URL değişirse, API isteğini yenile

    return (
        <div className='flex items-center justify-center flex-wrap gap-3'>
            {
                genre === "latest" ? (
                    data && (
                        <Movies dt={data} />
                    )
                ) : (
                    data?.results?.map((dt, i) => (
                        <Movies key={i} dt={dt} />
                    ))
                )
            }
        </div>
    );
};

export default Page;

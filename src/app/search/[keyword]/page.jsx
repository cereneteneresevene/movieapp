import React from "react";
import Movies from "../../../components/Movies"; // Movies bileşenini içe aktar
import Image from 'next/image'; // Next.js'in Image bileşeni

const API_KEY = '31aec2818216b37f6a0824883f2f95f0'; // API anahtarını burada tanımlayın

const Page = async ({ params }) => {
    const keyword = params.keyword;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}&language=en-US&page=1&include_adult=false`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    console.log(data, "data");

    return (
        <div className="flex flex-wrap justify-center gap-3"> {/* Flex düzeni ve gap ayarı */}
            {
                !data?.results?.length ? (
                    <div>Aranılan şey bulunamadı!!!</div>
                ) : (
                    data.results.map((dt) => (
                        <Movies key={dt.id} dt={dt} /> // Movies bileşenini kullan
                    ))
                )
            }
        </div>
    );
}

export default Page;

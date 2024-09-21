import React from "react";
import Header from "@/components/Header";
import './globals.css';
import Providers from "./Providers";
import Tabs from "@/components/Tabs";

export const metadata = {
    title: 'MovieApp',
    description: 'This is the global description for MovieApp',
    keywords: 'movies, app, entertainment',
};

const Layout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Providers> 
                    <Header />
                    <Tabs/>
                    {children}
                </Providers>
            </body>
        </html>
    );
}

export default Layout;

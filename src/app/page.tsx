import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/FooterSection";
import NewsLetterSection from "@/components/NewsLetterSection";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";

export default function Home() {


    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
            <Header/>

            <HeroSection/>

            <FeatureSection/>
            <NewsLetterSection/>

            <Footer/>
        </div>
    );
}
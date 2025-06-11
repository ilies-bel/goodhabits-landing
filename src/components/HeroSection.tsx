import {ArrowRight, Play, Star, Zap} from "lucide-react";
import React from "react";

export default function HeroSection() {
    return (
        <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Le sport accessible à
                                <span
                                    className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> tous</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                GoodHabit révolutionne l&#39;activité physique pour les seniors et personnes a mobilité
                                réduite
                                avec des programmes personnalisés, sécurisés et adaptés à chaque situation.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center group">
                                Découvrir l&#39;application
                                <ArrowRight
                                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                            </button>
                            <button
                                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center">
                                <Play className="mr-2 w-5 h-5"/>
                                Voir la démo
                            </button>
                        </div>

                        <div className="flex items-center space-x-6 pt-4">
                            <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current"/>
                                ))}
                            </div>
                            <p className="text-gray-600">Approuvé par plus de 500 professionnels de santé</p>
                        </div>
                    </div>

                    <div className="relative">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-3xl blur-3xl"></div>
                        <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                            <div className="space-y-6">
                                <div className="text-center">
                                    <div
                                        className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <Zap className="w-8 h-8 text-white"/>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">Votre coach personnel</h3>
                                    <p className="text-gray-600">Adapté à vos capacités et objectifs</p>
                                </div>

                                <div className="bg-gray-50 rounded-2xl p-6 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">Exercice du jour</span>
                                        <span className="text-sm font-semibold text-green-600">15 min</span>
                                    </div>
                                    <h4 className="font-semibold text-gray-900">Étirements matinaux en douceur</h4>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full w-3/4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
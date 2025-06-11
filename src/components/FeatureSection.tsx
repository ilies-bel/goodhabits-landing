import {Shield, Users, Zap} from "lucide-react";
import React from "react";

export default function FeatureSection() {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Pourquoi choisir GoodHabit ?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Une approche révolutionnaire du bien-être physique, pensée spécifiquement pour répondre aux
                        besoins uniques de chaque utilisateur.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div
                        className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
                        <div
                            className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                            <Shield className="w-8 h-8 text-white"/>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Sécurité maximale</h3>
                        <p className="text-gray-600">
                            Tous nos exercices sont validés par des kinésithérapeutes et adaptés aux contraintes
                            médicales de chaque utilisateur.
                        </p>
                    </div>

                    <div
                        className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow">
                        <div
                            className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                            <Users className="w-8 h-8 text-white"/>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Communauté bienveillante</h3>
                        <p className="text-gray-600">
                            Rejoignez une communauté de personnes partageant les mêmes objectifs, avec un
                            accompagnement personnalisé.
                        </p>
                    </div>

                    <div
                        className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
                        <div
                            className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                            <Zap className="w-8 h-8 text-white"/>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Personnalisation totale</h3>
                        <p className="text-gray-600">
                            Votre programme s&apos;adapte en temps réel à vos progrès, votre forme du jour et vos
                            préférences personnelles.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
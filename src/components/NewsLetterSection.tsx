"use client"
import {Mail} from "lucide-react";
import React, {useState} from "react";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzmX3EIzebhJAkxm4mYLKewHl3v4LcvT5sZtBXRS--ZWNgSW1wJQdL3KHY_ItmP4kU9/exec"

export default function NewsLetterSection() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        if (!email) return;

        setIsLoading(true);
        setError('');

        try {
            // Envoyer les données à Google Sheets
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // ⚠️ Important pour Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    timestamp: new Date().toISOString(),
                    source: 'GoodHabit Landing Page'
                })
            });

            // Succès - afficher le message de confirmation
            setIsSubscribed(true);
            setEmail('');

            // Cacher le message après 4 secondes
            setTimeout(() => setIsSubscribed(false), 4000);

        } catch (err) {
            setError('Erreur lors de l\'inscription. Veuillez réessayer.');
            console.error('Erreur:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="py-24 bg-gradient-to-r from-blue-600 to-green-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Soyez les premiers informés !
                        </h2>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Inscrivez-vous à notre newsletter pour recevoir des conseils exclusifs
                            et être alerté du lancement de l&apos;application.
                        </p>
                    </div>

                    {/* Formulaire d'inscription */}
                    <div className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Votre adresse email"
                                    className="w-full px-6 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
                                />
                            </div>
                            <button
                                onClick={handleSubmit}
                                disabled={isLoading || !email}
                                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        <div
                                            className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-2"></div>
                                        Inscription...
                                    </>
                                ) : (
                                    <>
                                        <Mail className="mr-2 w-5 h-5"/>
                                        S&#39;inscrire
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Messages de confirmation/erreur */}
                    {isSubscribed && (
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 max-w-md mx-auto">
                            <p className="text-white font-semibold">
                                Merci ! Vous recevrez bientôt de nos nouvelles 🎉
                            </p>
                        </div>
                    )}

                    {error && (
                        <div className="bg-red-500/20 backdrop-blur-sm rounded-xl p-4 max-w-md mx-auto">
                            <p className="text-white font-semibold">{error}</p>
                        </div>
                    )}

                    <p className="text-blue-100 text-sm">
                        Pas de spam, promis ! Vous pouvez vous désabonner à tout moment.
                    </p>
                </div>
            </div>
        </section>
    )
}
"use client"
import {Mail} from "lucide-react";
import React, {useState} from "react";

export default function NewsLetterSection() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = () => {
        if (email) {
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    return (
        <section id="newsletter" className="py-24 bg-gradient-to-r from-blue-600 to-green-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Soyez les premiers informés !
                        </h2>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Inscrivez-vous à notre newsletter pour recevoir des conseils exclusifs et être alerté du
                            lancement de l&apos;application.
                        </p>
                    </div>

                    <div className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 ">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Votre adresse email"
                                    className="w-full px-6 py-4 rounded-xl text-gray-900 text-lg focus:outline-none ring-4 ring-white/30 focus:ring-white/50 transition-all"
                                />
                            </div>
                            <button
                                onClick={handleSubmit}
                                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center whitespace-nowrap"
                            >
                                <Mail className="mr-2 w-5 h-5"/>
                                S&apos;inscrire
                            </button>
                        </div>
                    </div>

                    {isSubscribed && (
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 max-w-md mx-auto">
                            <p className="text-white font-semibold">Merci ! Vous recevrez bientôt de nos nouvelles 🎉</p>
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
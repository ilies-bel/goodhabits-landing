import {Heart} from "lucide-react";
import React from "react";


export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div
                                className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                                <Heart className="w-5 h-5 text-white"/>
                            </div>
                            <span className="text-xl font-bold">GoodHabit</span>
                        </div>
                        <p className="text-gray-400">
                            Rendre le sport accessible à tous, sans exception.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Produit</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Fonctionnalités</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Tarifs</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Centre d&apos;aide</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Accessibilité</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Légal</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Conditions d&#39;usage</a>
                            </li>
                            <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 GoodHabit. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    )
}
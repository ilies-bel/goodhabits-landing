import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    GoodHabit
                </Link>
                <nav>
                    <ul className="flex space-x-4 text-gray-500">
                        <li>
                            <Link href="/about" className="hover:text-blue-600">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/#features" className="hover:text-blue-600">
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link href="/#newsletter" className="hover:text-blue-600">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

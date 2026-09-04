import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/find-donor', label: 'Find Donor' },
        { path: '/donors', label: 'Donor Community' },
        { path: '/become-donor', label: 'Become a Donor' }
    ];

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-40 bg-white backdrop-blur-md border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                {/* Brand Logo */}
                <Link to="/" className="flex items-center space-x-2.5 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-rose-500 flex items-center justify-center text-white shadow-md shadow-red-600/30 group-hover:scale-105 transition-transform">
                        <Heart className="w-5 h-5 fill-white animate-pulse" />
                    </div>

                    <div className="text-left">
                        <span className="text-xl font-black tracking-tight text-gray-900">
                            Life<span className="text-red-600">Link</span>
                        </span>

                        <span className="block text-[9px] font-bold tracking-widest text-gray-500 uppercase -mt-1">
                            Save a life
                        </span>
                    </div>
                </Link>


                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-xl text-xs font-bold transition-all ${isActive
                                    ? 'bg-red-500/10 text-red-600 border border-red-500/20 shadow-sm'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>


                {/* Desktop CTA */}
                <div className="hidden md:flex items-center space-x-3">
                    <Link
                        to="/become-donor"
                        className="py-2 px-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-xs shadow-md shadow-red-600/30 transition-all"
                    >
                        Become a Donor ❤️
                    </Link>
                </div>


                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 focus:outline-none"
                        aria-label="Toggle navigation menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

            </div>


            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-b border-gray-200 bg-white px-4 py-3 space-y-2 text-left">

                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                                `block px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${isActive
                                    ? 'bg-red-500/10 text-red-600 border border-red-500/20'
                                    : 'text-gray-700 hover:bg-gray-100'
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}

                </div>
            )}
        </header>
    );
}

export default Navbar;
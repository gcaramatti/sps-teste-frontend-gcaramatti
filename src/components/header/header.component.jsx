import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenuLine, RiCloseLine } from '@remixicon/react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-lg font-semibold">Gestão de usuários</h1>

        <nav className="hidden md:flex gap-6">
          <Link to="/" className="hover:underline">Home</Link>
        </nav>

        <button 
          className="md:hidden text-white cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RiCloseLine className="h-6 w-6" /> : <RiMenuLine className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-primary text-white flex flex-col gap-4 p-4 shadow-md md:hidden">
          <Link to="/" className="hover:underline">Home</Link>
        </div>
      )}
    </header>
  );
}

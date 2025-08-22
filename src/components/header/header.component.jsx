import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiMenuLine, RiCloseLine } from '@remixicon/react'
import { useUser } from '../../data/stores/useUser.store';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useUser();

  function handleLogout() {
    logout();
    navigate('/login');
  }

  return (
    <header className="bg-primary text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-lg font-semibold">Gestão de usuários</h1>

        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <button onClick={handleLogout}>Sair</button>
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
          <button onClick={handleLogout} className="bg-destroy text-white px-3 py-1 rounded text-sm">Sair</button>
        </div>
      )}
    </header>
  );
}

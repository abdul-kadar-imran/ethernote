
import React from 'react';
import { LucideSearch } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="header">
      <div className="search-container">
        <LucideSearch className="search-icon" size={18} />
        <input 
          type="text" 
          placeholder="Search Tamil or English notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="header-badge" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <span style={{ fontSize: '10px', fontWeight: 900, color: 'var(--accent-color)', letterSpacing: '0.2em' }}>ETHERNOTE</span>
        <span style={{ fontSize: '9px', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>V.PRO.1.0</span>
      </div>
    </header>
  );
};

export default Header;

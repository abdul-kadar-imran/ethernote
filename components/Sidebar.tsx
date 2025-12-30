
import React from 'react';
import { LucideBookOpen, LucidePin } from 'lucide-react';

interface SidebarProps {
  activeTab: 'all' | 'pinned';
  setActiveTab: (tab: 'all' | 'pinned') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="sidebar">
      <div className="logo-section">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="logo-icon">E</div>
          <span style={{ fontWeight: 900, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>Ether</span>
        </div>
      </div>

      <nav className="nav-menu">
        <button 
          onClick={() => setActiveTab('all')}
          className={`nav-item ${activeTab === 'all' ? 'active' : ''}`}
        >
          <LucideBookOpen size={20} />
          <span className="nav-text" style={{ display: 'var(--display-nav-text)' }}>All Notes</span>
        </button>

        <button 
          onClick={() => setActiveTab('pinned')}
          className={`nav-item ${activeTab === 'pinned' ? 'active' : ''}`}
        >
          <LucidePin size={20} />
          <span className="nav-text" style={{ display: 'var(--display-nav-text)' }}>Pinned</span>
        </button>
      </nav>
      
      <div style={{ padding: '2rem', display: 'var(--display-nav-text)' }}>
        <div style={{ padding: '1rem', borderRadius: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '9px', color: 'var(--text-muted)', fontWeight: 800, marginBottom: '0.5rem' }}>STORAGE</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}></div>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Synced</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

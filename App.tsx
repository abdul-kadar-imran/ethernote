
import React, { useState, useEffect, useMemo } from 'react';
import { Note } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import NoteEditor from './components/NoteEditor';
import NoteCard from './components/NoteCard';
import { LucideLayoutGrid } from 'lucide-react';

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'pinned'>('all');

  useEffect(() => {
    const savedNotes = localStorage.getItem('ether_notes');
    if (savedNotes) {
      try {
        setNotes(JSON.parse(savedNotes));
      } catch (e) {
        console.error("Failed to parse notes", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ether_notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newNote: Note = {
      ...note,
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    setNotes(prev => [newNote, ...prev]);
  };

  const updateNote = (id: string, updates: Partial<Note>) => {
    setNotes(prev => prev.map(note => 
      note.id === id ? { ...note, ...updates, updatedAt: Date.now() } : note
    ));
  };

  const deleteNote = (id: string) => {
    if (window.confirm("Delete this note?")) {
      setNotes(prev => prev.filter(note => note.id !== id));
    }
  };

  const filteredNotes = useMemo(() => {
    let result = notes.filter(n => 
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (activeTab === 'pinned') result = result.filter(n => n.isPinned);
    return result;
  }, [notes, searchQuery, activeTab]);

  const pinnedNotes = filteredNotes.filter(n => n.isPinned);
  const otherNotes = filteredNotes.filter(n => !n.isPinned);

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="main-content">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <div className="scroll-area">
          <section className="editor-section">
            <NoteEditor onSave={addNote} />
          </section>

          <div className="notes-container">
            {pinnedNotes.length > 0 && (
              <div style={{ marginBottom: '3rem' }}>
                <h3 className="section-label">
                  <span className="dot pinned"></span>
                  Pinned
                </h3>
                <div className="masonry-grid">
                  {pinnedNotes.map(note => (
                    <div key={note.id} className="masonry-item">
                      <NoteCard note={note} onUpdate={updateNote} onDelete={deleteNote} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              {pinnedNotes.length > 0 && (
                <h3 className="section-label">
                  <span className="dot other"></span>
                  Recent
                </h3>
              )}
              {otherNotes.length > 0 ? (
                <div className="masonry-grid">
                  {otherNotes.map(note => (
                    <div key={note.id} className="masonry-item">
                      <NoteCard note={note} onUpdate={updateNote} onDelete={deleteNote} />
                    </div>
                  ))}
                </div>
              ) : (
                filteredNotes.length === 0 && (
                  <div className="empty-state">
                    <LucideLayoutGrid size={64} />
                    <p style={{ marginTop: '1rem', fontWeight: 700 }}>No notes found</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;

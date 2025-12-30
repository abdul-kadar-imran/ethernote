
import React, { useState } from 'react';
import { LucidePin, LucideTrash2, LucideEdit3, LucideCheck, LucideCopy, LucideX } from 'lucide-react';
import { Note } from '../types';

interface NoteCardProps {
  note: Note;
  onUpdate: (id: string, updates: Partial<Note>) => void;
  onDelete: (id: string) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(note.title);
  const [editContent, setEditContent] = useState(note.content);
  const [copying, setCopying] = useState(false);

  const handleSave = () => {
    onUpdate(note.id, { title: editTitle, content: editContent });
    setIsEditing(false);
  };

  const handleCopy = () => {
    const textToCopy = `${note.title ? note.title + '\n' : ''}${note.content}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopying(true);
      setTimeout(() => setCopying(false), 2000);
    });
  };

  return (
    <div className="note-card">
      {isEditing ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input 
            autoFocus
            type="text" 
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="title-input"
            style={{ fontSize: '1.1rem' }}
          />
          <textarea 
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="content-textarea"
            style={{ minHeight: '100px', fontSize: '0.9rem' }}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
            <button onClick={() => setIsEditing(false)} className="icon-btn"><LucideX size={18} /></button>
            <button onClick={handleSave} className="save-btn" style={{ padding: '0.5rem 1rem' }}>Save</button>
          </div>
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <h4 className="card-title">{note.title || "Untitled"}</h4>
            <button 
              onClick={() => onUpdate(note.id, { isPinned: !note.isPinned })}
              className={`icon-btn ${note.isPinned ? 'active' : ''}`}
            >
              <LucidePin size={16} fill={note.isPinned ? "currentColor" : "none"} />
            </button>
          </div>
          
          <p className="card-content">{note.content}</p>

          <div className="card-actions">
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              <button onClick={() => setIsEditing(true)} className="icon-btn" title="Edit"><LucideEdit3 size={16} /></button>
              <button onClick={handleCopy} className="icon-btn" title="Copy">
                {copying ? <LucideCheck size={16} style={{ color: 'var(--success)' }} /> : <LucideCopy size={16} />}
              </button>
            </div>
            <button onClick={() => onDelete(note.id)} className="icon-btn danger" title="Delete"><LucideTrash2 size={16} /></button>
          </div>
        </>
      )}
    </div>
  );
};

export default NoteCard;

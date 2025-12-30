
import React, { useState, useRef, useEffect } from 'react';
import { LucidePlus, LucideCheck, LucidePin, LucideX } from 'lucide-react';
import { Note } from '../types';

interface NoteEditorProps {
  onSave: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => void;
}

const NoteEditor: React.FC<NoteEditorProps> = ({ onSave }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPinned, setIsPinned] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (editorRef.current && !editorRef.current.contains(event.target as Node)) {
        if (title.trim() || content.trim()) {
          handleSave();
        } else {
          setIsExpanded(false);
        }
      }
    };
    if (isExpanded) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isExpanded, title, content]);

  const handleSave = () => {
    if (title.trim() || content.trim()) {
      onSave({ title, content, isPinned, color: 'transparent' });
      setTitle(''); setContent(''); setIsPinned(false);
    }
    setIsExpanded(false);
  };

  return (
    <div ref={editorRef} className={`note-editor ${isExpanded ? 'expanded' : ''}`}>
      {!isExpanded ? (
        <div onClick={() => setIsExpanded(true)} className="editor-collapsed">
          <div className="plus-btn"><LucidePlus size={20} /></div>
          <span style={{ color: 'var(--text-muted)', fontWeight: 700, fontSize: '0.9rem' }}>New Note...</span>
        </div>
      ) : (
        <div className="editor-expanded">
          <div className="editor-expanded-header">
            <input 
              autoFocus
              type="text" 
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="title-input"
            />
            <button 
              onClick={() => setIsPinned(!isPinned)}
              className={`icon-btn ${isPinned ? 'active' : ''}`}
              style={{ padding: '0.75rem' }}
            >
              <LucidePin size={22} fill={isPinned ? "currentColor" : "none"} />
            </button>
          </div>
          
          <textarea 
            placeholder="What's on your mind? (Supports Tamil)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="content-textarea"
          />

          <div className="editor-footer">
            <button onClick={() => setIsExpanded(false)} className="icon-btn"><LucideX size={20} /></button>
            <button onClick={handleSave} className="save-btn">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <LucideCheck size={18} />
                <span>Save</span>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteEditor;

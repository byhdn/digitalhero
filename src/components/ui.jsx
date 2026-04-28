import React from 'react';

export function Button({ children, variant = 'primary', ...props }) {
  return <button className={`btn btn-${variant}`} {...props}>{children}</button>;
}

export function Card({ title, children, footer }) {
  return (
    <section className="card">
      {title && <h3>{title}</h3>}
      <div>{children}</div>
      {footer && <footer>{footer}</footer>}
    </section>
  );
}

export function Badge({ children, tone = 'neutral' }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

export function Input({ label, ...props }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input {...props} />
    </label>
  );
}

export function FilterBar({ options = [], value, onChange }) {
  return (
    <div className="filter-bar">
      {options.map((opt) => (
        <Button key={opt} variant={value === opt ? 'primary' : 'ghost'} onClick={() => onChange(opt)}>{opt}</Button>
      ))}
    </div>
  );
}

export function Tabs({ tabs, active, onChange }) {
  return (
    <div>
      <div className="tabs">
        {tabs.map((tab) => (
          <button key={tab} className={active === tab ? 'active' : ''} onClick={() => onChange(tab)}>{tab}</button>
        ))}
      </div>
    </div>
  );
}

export function Accordion({ items }) {
  return (
    <div className="accordion">
      {items.map((item) => (
        <details key={item.title}>
          <summary>{item.title}</summary>
          <p>{item.content}</p>
        </details>
      ))}
    </div>
  );
}

export function Modal({ open, title, children, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>{title}</h3>
        {children}
        <Button onClick={onClose}>Fermer</Button>
      </div>
    </div>
  );
}

export function Notification({ type = 'info', title, message }) {
  return (
    <div className={`notification ${type}`}>
      <strong>{title}</strong>
      <p>{message}</p>
    </div>
  );
}

export function Sidebar({ items, active, onSelect }) {
  return (
    <aside className="sidebar">
      {items.map((item) => (
        <button key={item} className={active === item ? 'active' : ''} onClick={() => onSelect(item)}>{item}</button>
      ))}
    </aside>
  );
}

export function Navbar({ user }) {
  return (
    <header className="navbar">
      <h1>Digital Hero</h1>
      <div>{user?.name}</div>
    </header>
  );
}

export function ProgressBar({ value }) {
  return (
    <div className="progress-wrap">
      <div className="progress" style={{ width: `${value}%` }} />
      <span>{value}%</span>
    </div>
  );
}

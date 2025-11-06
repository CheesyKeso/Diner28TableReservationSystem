import React, { useState } from 'react'
import '../css/Topbar.css'

export default function Topbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="topbar">
        <div className="topbar-brand">DINERS28</div>

        <button
          className="topbar-hamburger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span className={`hamburger ${open ? 'is-open' : ''}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </header>

      <div
        className={`sidebar-overlay ${open ? 'visible' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <aside className={`sidebar ${open ? 'open' : ''}`} role="dialog" aria-modal="true">
        <div className="sidebar-inner">
          <div className="sidebar-header">
            <strong>Name</strong>
            <button className="sidebar-close" onClick={() => setOpen(false)} aria-label="Close sidebar">
              ×
            </button>
          </div>

          <nav className="sidebar-nav">
            <ul>
              <li className="active">
                <span className="icon">🏠</span>
                <span className="label">Home</span>
              </li>
              <li>
                <span className="icon">🍴</span>
                <span className="label">Menu</span>
              </li>
              <li>
                <span className="icon">🚩</span>
                <span className="label">Reserve</span>
              </li>
              <li>
                <span className="icon">📞</span>
                <span className="label">Contact Us</span>
              </li>

              <li className="divider" aria-hidden="true" />

              <li>
                <span className="icon">🔑</span>
                <span className="label">Log-in or Sign-up</span>
              </li>
              <li>
                <span className="icon">✖️</span>
                <span className="label">Close Sidebar</span>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}

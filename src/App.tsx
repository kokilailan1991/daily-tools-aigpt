import { useState } from 'react'
import './App.css'

function App() {
  const [activeTool, setActiveTool] = useState('risk-calculator')

  const tools = [
    { id: 'risk-calculator', name: 'Risk Calculator', icon: '🧮' },
    { id: 'coming-soon', name: 'More Tools Coming Soon', icon: '🚀' }
  ]

  return (
    <div className="app">
      <header className="app-header">
        <h1>Daily Tools</h1>
        <nav className="tool-nav">
          {tools.map(tool => (
            <button
              key={tool.id}
              className={`tool-btn ${activeTool === tool.id ? 'active' : ''}`}
              onClick={() => setActiveTool(tool.id)}
            >
              <span className="tool-icon">{tool.icon}</span>
              {tool.name}
            </button>
          ))}
        </nav>
      </header>

      <main className="app-main">
        {activeTool === 'risk-calculator' && (
          <iframe
            src="/risk-calculator.html"
            title="Risk Calculator"
            className="tool-iframe"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
        )}
        {activeTool === 'coming-soon' && (
          <div className="coming-soon">
            <h2>🚀 More Tools Coming Soon!</h2>
            <p>We're working on adding more useful daily tools. Stay tuned!</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App

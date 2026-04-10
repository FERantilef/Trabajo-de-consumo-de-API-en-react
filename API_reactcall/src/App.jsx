import { useState } from 'react'
import './App.css'
import PostsList from './components/PostsList'

function App() {


  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-4">
        <div className="container">
          <span className="navbar-brand"> Lista de Publicaciones</span>
        </div>
      </nav>

      <main className="container pb-5">
        <h1>
          Entrega de datos :
        </h1>
        <PostsList />
      </main>
    </div>
  )
}

export default App

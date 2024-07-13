import {React,useState} from 'react'
import './Hamburger.css'

const categories = ['Home', 'About', 'Products', 'Contact'];

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
  return (
    
    <div className="hamburger-menu">
    <button className="hamburger-toggle" onClick={toggleMenu}>
    <i class="fa-solid fa-bars"></i>
    </button>
    {isOpen && ( // Render categories only when isOpen is true
      <nav className="nav-links">
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <a href={`#${category.toLowerCase()}`}>{category}</a>
            </li>
          ))}
        </ul>
      </nav>
    )}
  </div>

  )
}

export default Hamburger

import { Link } from "react-router-dom"

export default function Header() {
  const style = {
    width: '100%',
    background: 'blue',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    height: '50px',
    alignItems: 'center',
    justifyItems: 'center'
  }

  const linkStyle = {
    color: 'white',
    textDecoration: 'none'
  }
  
  return (
    <div style={style}>
      <span>
        <Link to="/" style={linkStyle}>Home</Link>
      </span>
      <span>
        <Link to="/map" style={linkStyle}>Mapa</Link>
      </span>
      <span>
        <Link to="/company" style={linkStyle}>Empresa</Link>
      </span>
      <span>
        <Link to="/product" style={linkStyle}>Produto</Link>
      </span>      
    </div>
  )
}
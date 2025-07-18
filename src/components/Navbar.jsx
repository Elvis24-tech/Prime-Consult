import PrimeConsultLogo from '../assets/PrimeConsult.png'; // Adjust the path based on your project structure

export default function Navbar() {
  return (
    <nav>
      <div>
        <img src={PrimeConsultLogo} alt="Prime Consult Logo" style={{ width: '50px', height: 'auto', marginRight: '10px' }} />
        <h1>Prime Consult</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
}
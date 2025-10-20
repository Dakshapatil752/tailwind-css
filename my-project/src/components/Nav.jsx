import headerLogo from '../assets/images/header-logo.svg';
import hamburger from '../assets/icons/hamburger.svg'; // ✅ fixed spelling

const Nav = () => {
  return (
    <header className="bg-white shadow-md w-full">
      <nav
        className="w-full px-10 py-4"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '40px', // space between logo and links
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: '40px', // move logo slightly right
          }}
        >
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
            style={{ display: 'block' }}
          />
        </a>

        {/* Navigation Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px', // same spacing between links
          }}
        >
          <a href="#home" className="font-montserrat text-lg text-gray-700 hover:text-black">
            Home
          </a>
          <a href="#about" className="font-montserrat text-lg text-gray-700 hover:text-black">
            About
          </a>
          <a href="#products" className="font-montserrat text-lg text-gray-700 hover:text-black">
            Products
          </a>
          <a href="#contact" className="font-montserrat text-lg text-gray-700 hover:text-black">
            Contact
          </a>
          <a 
            href="#signin" 
            style={{
              fontWeight: 800,
              color: '#2563eb',
              transition: 'all 0.3s ease',
            }}
            className="font-montserrat text-lg hover:text-blue-700"
          >
            Sign In / Explore now
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

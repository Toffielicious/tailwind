

function Navigation() {
  return (
    <nav
      className="flex flex-wrap items-center justify-between pl-20 bg-white text-gray-500 m-0"
      style={{
        lineHeight: "23px",
        fontWeight: 300,
        color: "#555",
        overflowX: "hidden",
        background: "white",
      }}
    >
      <div className="hidden lg:block">
        <ul className="flex space-x-4">
          <img src="govph.png" />
          <li>
            <a href="#"></a>
            <a href="#" className="hover:text-white hover:bg-red" style={{ padding: '10px 16px' }}>Home</a>
          </li>
          <li>
            <a href="#"></a>
            <a href="#" className="hover:text-white hover:bg-red" style={{ padding: '10px 16px' }}>Good Governance</a>
          </li>
          <li>
            <a href="#"></a>
            <a href="#" className="hover:text-white hover:bg-red" style={{ padding: '10px 16px' }}>Transparency</a>
          </li>
          <li>
            <a href="#"></a>
            <a href="#" className="hover:text-white hover:bg-red" style={{ padding: '10px 16px' }}>International Affairs</a>
          </li>
          <li>
            <a href="#"></a>
            <a href="#" className="hover:text-white hover:bg-red" style={{ padding: '10px 16px' }}>Bid Notices and Invitation</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <a href="/src/pages/contact-us.js"></a>
        <a href="#" className="text-xl font-bold tracking-wide"></a>
      </div>
      <div className="flex items-center pr-20">
        <a href="#"></a>
        <a href="#" className="ml-auto hover:text-white hover:bg-red" style={{ padding: '10px 16px' }}>Contact Us</a>
      </div>
    </nav>
  );
}
export default Navigation;
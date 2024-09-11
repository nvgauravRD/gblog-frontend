import "./css/navbar.css";

export function NavBar() {
  function HandelNav() {
    const navLinks = document.getElementById("nav-links") as HTMLElement;

    if (navLinks.style.display === "none") {
      navLinks.style.display = "flex";
    } else {
      navLinks.style.display = "none";
    }
  }
  const Pages = ["Home", "Recent", "Blogs", "Contact"];
  return (
    <nav className="px-5 p-3 flex justify-between bg-white items-center flex-wrap">
      <section className="flex items-center menu-section">
        <h1 className="font-bold text-lg mr-2">GBlog</h1>
        {/* <span className="text-[10px] bg-pink-300 p-1 rounded-md">Blog app</span> */}
        <button
          className="menuBtn border p-2 rounded px-3"
          onClick={() => HandelNav()}
        >
          <i className="fas fa-bars"></i>
        </button>
      </section>

      <ul className="flex items-center nav-links" id="nav-links">
        {Pages.map((page, index) => (
          <li className="text-sm" key={index}>
            {page}
          </li>
        ))}

        <li className="text-sm">
          <section className="bg-gray-100 p-2 rounded">
            <i className="fas fa-search mr-2"></i>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent focus:outline-none"
            ></input>
          </section>
        </li>
      </ul>
    </nav>
  );
}

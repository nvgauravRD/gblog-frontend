import "./css/navbar.css";

//this function handles menu on small screens
function HandelNav() {
  // gets the element that contains nav links
  const navLinks = document.getElementById("navLinks") as HTMLElement;

  /* as initial value is static it can be a empty string */
  if (navLinks.style.display === "none" || navLinks.style.display === "") {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
}

// main navbar of the entire web app
export function NavBar() {
  // list of pages and links of the web app
  const Pages = ["Home", "Recent", "Blogs", "Contact"];
  return (
    <nav className="px-5 p-3 flex justify-between bg-white items-center flex-wrap">
      <section className="flex items-center menu-section">
        <h1 className="font-bold text-lg mr-2">GBlog</h1>

        {/* menu button */}
        <button
          className="menuBtn border p-2 rounded px-3"
          onClick={() => HandelNav()}
        >
          <i className="fas fa-bars"></i>
        </button>
      </section>

      {/* links to pages of the web app are rendered here */}
      <ul className="flex items-center navLinks sm:hidden" id="navLinks">
        {Pages.map((page, index) => (
          <li className="text-sm" key={index}>
            {page}
          </li>
        ))}

        {/* search box */}
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

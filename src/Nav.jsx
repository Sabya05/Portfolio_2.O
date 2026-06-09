import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Nav({ title, theme, setTheme }) {
  const [showMenu, setShowMenu] = useState(false);

  const titleRef = useRef(null);
  const navItemsRef = useRef([]);
  navItemsRef.current = [];
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      opacity: 0,
      y: -80,
      duration: 0.8,
      ease: "elastic.out(1,0.5)",
    }).from(
      navItemsRef.current,
      {
        opacity: 0,
        y: -50,
        stagger: 0.1,
        duration: 0.4,
      },
      "-=0.3"
    );
  });

  const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
  { name: "Projects", id: "projects" },
];
  return (
    <div
      className={`transition-colors duration-500 ${
        theme ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <nav
        className={`fixed top-0 w-full flex items-center justify-between px-6 py-4 shadow-lg z-50 ${
          theme ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-cyan-400 cursor-pointer"
          onMouseEnter={() =>
            gsap.to(titleRef.current, { scale: 1.05, duration: 0.3 })
          }
          onMouseLeave={() =>
            gsap.to(titleRef.current, { scale: 1, duration: 0.3 })
          }
        >
          {title}
        </h1>

        <button
  className={`lg:hidden text-4xl ${
    theme ? "text-black" : "text-white"
  }`}
  onClick={() => setShowMenu(true)}
>
  ☰
</button>

        <ul className="hidden lg:flex items-center gap-8 text-xl">
  {navItems.map((item, index) => (
    <li
      key={item.id}
      ref={(el) => (navItemsRef.current[index] = el)}
      className="hover:text-cyan-400 cursor-pointer"
    >
      <a href={`#${item.id}`}>{item.name}</a>
    </li>
  ))}

  <li ref={(el) => (navItemsRef.current[navItems.length] = el)}>  
    <button onClick={() => setTheme(!theme)}>
      {theme ? "☀️" : "🌙"}
    </button>
  </li>
</ul>
      </nav>

 {showMenu && (
  <div
    className={`lg:hidden fixed top-20 right-4 w-52 rounded-xl shadow-xl z-50 p-4 ${
      theme
        ? "bg-white text-black"
        : "bg-zinc-900 text-white"
    }`}
  >
    <ul className="flex flex-col gap-4 text-lg">
      {navItems.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={() => setShowMenu(false)}
            className="hover:text-cyan-400"
          >
            {item.name}
          </a>
        </li>
      ))}

      <hr className="border-gray-500" />

      <li>
        <button onClick={() => setTheme(!theme)}>
          {theme ? "🌙 Dark" : "☀️ Light"}
        </button>
      </li>
    </ul>
  </div>
)}
    </div>
  );
}

export default Nav;
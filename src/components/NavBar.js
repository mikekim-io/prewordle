export const NavBar = () => {
  return (
    <div
      id="nav-left"
      className="flex-none flex flex-row justify-between border-b-2 p-4"
    >
      <div className="flex-initial">X</div>
      <div id="nav-center" className="flex-1">
        <h1 className="text-center text-2xl font-sans font-extrabold">
          PREWORDLE
        </h1>
      </div>
      <div id="nav-right" className="flex-none flex-end">
        <a
          href="https://github.com/mikekim-io/prewordle"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/GitHub-Mark-32px.png" alt="github-icon" className="" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;

export const NavBar = () => {
  return (
    <div className="flex-initial flex flex-row justify-between border-b-2 p-4">
      <div></div>
      <div>
        <h1 className="text-center text-2xl font-sans font-extrabold">
          PREWORDLE
        </h1>
      </div>

      <div>
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

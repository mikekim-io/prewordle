const Help = (props) => {
  const { setShowHelp, showHelp } = props;

  if (showHelp) {
    return (
      <div className="fixed z-10">
        <div className="absolute inset-0 w-screen h-screen bg-gray-200 opacity-50"></div>
        <div className="fixed inset-0">
          <div className="flex min-h-full items-end justify-center sm:items-center">
            <div className="relative rounded-lg overflow-y-auto bg-white text-left shadow-2xl w-screen sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col min-h-full text-left">
                <div className="p-5">
                  <div>
                    <h1 className="text-3xl font-bold">How To Play</h1>
                    <h2 className="text-xl">Guess the Wordle in 6 tries.</h2>
                  </div>
                  <div className="py-2">
                    <ul>
                      <li>Each guess must be a valid 5-letter word.</li>
                      <li>
                        The color of the tiles will change to show how close
                        your guess was to the word.
                      </li>
                    </ul>
                  </div>
                  <div className="py-2">
                    <i className="font-bold">
                      This part of the help modal is still under construction
                    </i>
                  </div>
                  <hr className="py-2" />
                  <div>
                    <p>
                      This project is a work in progress; more features to come!
                    </p>
                    <p>
                      Have any feedback? Email me at{` `}
                      <a
                        className="text-orange-500 hover:text-orange-700"
                        href="mailto:mikekim.info@gmail.com?subject=Feedback for Rewordle"
                      >
                        mikekim.info@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowHelp(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Help;

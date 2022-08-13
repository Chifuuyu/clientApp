import Header from "./components/head";
import HomePath from "./components/link";

export default function NewListingForm() {
  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <HomePath />
        <form className="w-full max-w-sm">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              required
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none
             focus:border-sky-500 focus:ring-1 focus:ring-sky-500
             invalid:border-pink-500 invalid:text-pink-600
             focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              type="text"
              placeholder="Jane Doe"
              aria-label="Client Name/s"
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Sign Up
            </button>
            <button
              className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

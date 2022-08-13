import Example from "./components/example";
import Header from "./components/head";
import HomePath from "./components/link";

export default function Home() {
  return (
    <>
      <Header />
      <div className="p-4">
        <HomePath />
      </div>
      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          <Example />
        </div>
      </main>
    </>
  );
}

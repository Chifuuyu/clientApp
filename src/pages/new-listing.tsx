import PrequalForm from "./components/form";
import Header from "./components/head";
import HomePath from "./components/link";

export default function NewListing() {
  return (
    <>
      <Header />
      <div className="p-4">
        <HomePath />
      </div>
      <main className="container mx-auto flex flex-col items-center min-h-screen p-4"></main>
    </>
  );
}

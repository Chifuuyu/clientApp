import { trpc } from "../utils/trpc";
import Header from './head';
import ClientNameCreator from './clientNameCreator';
import HomePath from "./link";



export default function Home () {
  const listing = trpc.useQuery(["form-client.get-all"]);
  return (
    <>
    <Header />
      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <HomePath />
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          {listing.data ? 
          <div className="p-6 flex flex-col">
            <div className="flex flex-col">
            <div className="text-2xl font-bold"> Client Names<div/>
            {listing.data.map((Client) => {
              return (
              <div key={Client.id} className="my-2">
                {Client.clientNames}
                </div>
                );
            })} 
            </div>
            </div>
            <ClientNameCreator /> 
            </div> 
            : <p>Loading..</p>}
        </div>
      </main>
    </>
  );
};
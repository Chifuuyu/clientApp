import { trpc } from "../../utils/trpc";
import ClientNameCreator from "./clientNameCreator";

export default function Example() {
  const listing = trpc.useQuery(["form-client.get-all"]);
  return listing.data ? (
    <div className="p-6 flex flex-col">
      <div className="flex flex-col">
        <div className="text-2xl font-bold">
          {" "}
          Client Names
          <div />
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
  ) : (
    <p>Loading..</p>
  );
}

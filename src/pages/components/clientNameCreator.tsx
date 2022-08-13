import { trpc } from "../../utils/trpc";


const ClientNameCreator: React.FC = () => {
  const client = trpc.useContext();
  const {mutate} = trpc.useMutation("form-client.create", {
    onSuccess: () => {
      client.invalidateQueries("form-client.get-all");
    },
  });

return (
  <input 
    onKeyDown={(ev)=>{
      if (ev.key === "Enter") {
        console.log("Enter pressed!", ev.currentTarget.value);
        mutate({clientNames: ev.currentTarget.value});
        ev.currentTarget.value = "";
        }
    }}
    ></input>
);
};

export default ClientNameCreator;
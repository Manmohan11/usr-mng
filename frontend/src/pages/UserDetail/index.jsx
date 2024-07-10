import { DataTable } from "./DataTable"
import { data } from "@/constants/data"
import { columns } from "./columns"

// async function getData() {
//   // Fetch data from your API here.
//   return data;
// }

/**
 * Renders the UserDetail component.
 *
 * @return The UserDetail component JSX.
 */
export default function UserDetail() {
  //const fetchedData = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data}/>
    </div>
  )
}

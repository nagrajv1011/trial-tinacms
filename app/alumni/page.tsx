import client from "@/tina/__generated__/client";
import AlumniClient from "./AlumniClient";

export default async function Page() {
    const { data, query, variables } = await client.queries.alumni({
        relativePath: "alumni.md",
    });

    return (
        <AlumniClient data={data} query={query} variables={variables} />
    );
}

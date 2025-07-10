import { client } from '@/tina/__generated__/client';
import DynamicPage from './DynamicPageWrapper';

export default async function PageWrapper({
    params,
}: {
    params: Promise<{ slug?: string[] }>;
}) {
    const { slug } = await params; // 🌟 await here!
    const slugArray = slug || [];
    const slugPath = slugArray.join('/');
    const relativePath = slugPath ? `${slugPath}.md` : 'index.md';

    const { data, query, variables } = await client.queries.page({ relativePath });

    return <DynamicPage data={data} query={query} variables={variables} />;
}


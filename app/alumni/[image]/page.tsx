// app/alumni/[image]/page.tsx
import client from '@/tina/__generated__/client'
import { notFound } from 'next/navigation'

export default async function AlumniImagePage({ params }: { params: { image: string } }) {
    const res = await client.queries.alumni({ relativePath: 'alumni.md' })
    const alumni = res?.data?.alumni

    const match: any = alumni?.images?.find(
        (img: any) => img.name.toLowerCase().replace(/\s+/g, '-') === params?.image
    )

    if (!match) return notFound()

    return (
        <div className="max-w-3xl mx-auto px-6 py-12 space-y-6">
            <img src={match?.url} alt={match?.title} className="w-full rounded-xl shadow-lg" />
            <h1 className="text-3xl font-bold">{match?.title}</h1>
            <h2 className="text-xl font-semibold text-gray-600">{match?.subtitle}</h2>
            <p className="text-gray-700">{match?.content}</p>
        </div>
    )
}

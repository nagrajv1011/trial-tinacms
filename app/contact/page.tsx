// // "use client";

// import client from '@/tina/__generated__/client'
// import { contactQuery } from '@/tina/queries/contactQuery';
// import React from 'react'
// import { useTina } from 'tinacms/dist/react'

// type Props = {}

// const ContactPage = async (props: any) => {

//     const { data } = await client.queries.page({
//         relativePath: "contact.md",
//     });
//     const page: any = data?.page

//     // console.log(data, "Contact.tsx");


//     return (
//         <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 bg-gray-50">
//             <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
//                 {page?.title}
//             </h1>

//             <section>
//                 <h2 className="text-2xl font-semibold text-gray-700 mb-6">
//                     {page?.sectionTitle}
//                 </h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {/* Map */}
//                     <div className="w-full h-64 md:h-96">
//                         <iframe
//                             title="Google Map"
//                             className="w-full h-full rounded-lg border"
//                             src={page?.mapUrl}
//                             allowFullScreen
//                             loading="lazy"
//                         />
//                     </div>

//                     {/* Department Emails */}
//                     <div className="space-y-4">
//                         {page?.departments.map((dept: any, i: number) => (
//                             <div key={i}>
//                                 <h3 className="text-lg font-medium text-gray-800">{dept.name}</h3>
//                                 <a href={`mailto:${dept.email}`} className="text-blue-600 hover:underline">
//                                     {dept.email}
//                                 </a>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }
// export default ContactPage

// // export async function getStaticProps() {
// //     const data = await client.queries.page({
// //         relativePath: "contact.md",
// //     });

// //     return {
// //         props: {
// //             data: data.data,
// //             query: data.query,
// //             variables: data.variables,
// //         },
// //     };
// // }

// app/contact/page.tsx
import client from "@/tina/__generated__/client";
import ContactClient from "./ContactClient";
import { Separator } from "@/components/ui/separator";
import FaqClient from "./FaqClient";

export default async function Page() {
    const { data, query, variables } = await client.queries.contact({
        relativePath: "contact.md",
    });

    // const contactRes = await client.queries.contact({ relativePath: 'contact.md' })
    // const faqRes = await client.queries.faq({ relativePath: 'faq.md' })

    // const contact = contactRes?.data?.contact;
    // const faq = faqRes?.data?.faq;

    // console.log(contact, "page.tsx");


    return <>
        <ContactClient data={data} query={query} variables={variables} />
        <Separator className="mt-2" />
        <FaqClient data={data} query={query} variables={variables} />
        {/* <div>abac</div> */}
    </>
}

"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useTina } from "tinacms/dist/react";

type Props = {
    data: any
    query: string
    variables: any
}

const FaqClient = ({ data, query, variables }: Props) => {
    const { data: tinaData } = useTina({ data, query, variables });

    const faq = tinaData?.contact;

    // console.log(faq, "faq");


    return (
        <>
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-8">{faq?.faqtitle}</h1>

                <Accordion type="multiple" className="w-full">
                    {faq?.items?.map((category: { category: any; questions: any[]; }, i: any) => (
                        <AccordionItem key={i} value={`category-${i}`}>
                            <AccordionTrigger>{category?.category}</AccordionTrigger>
                            <AccordionContent>
                                <Accordion type="single" collapsible className="ml-4 border-l pl-4">
                                    {category?.questions?.map((q, j) => (
                                        <AccordionItem key={j} value={`q-${i}-${j}`}>
                                            <AccordionTrigger className="text-left">{q?.question}</AccordionTrigger>
                                            <AccordionContent>{q?.answer}</AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </>
    );
}

export default FaqClient;
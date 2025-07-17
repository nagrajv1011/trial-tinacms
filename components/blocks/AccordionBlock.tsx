'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

const NestedAccordion = ({ items }: { items: { title: string; content: any }[] }) => (
  <Accordion type="single" collapsible className="w-full mt-4">
    {items.map((item, idx) => (
      <AccordionItem key={idx} value={`nested-${idx}`}>
        <AccordionTrigger>{item.title}</AccordionTrigger>
        <AccordionContent>
          <div className="prose dark:prose-invert">
            <TinaMarkdown content={item.content} />
          </div>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export const AccordionBlock = ({
  items,
}: {
  items: {
    title: string;
    content: { __typename: string; [key: string]: any };
  }[];
}) => {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      {items.map((item, idx) => (
        <AccordionItem key={idx} value={`item-${idx}`}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>
            {item.content?.__typename === 'text' && (
              <div className="prose dark:prose-invert">
                <TinaMarkdown content={item.content.body} />
              </div>
            )}
            {item.content?.__typename === 'nested_accordion' && (
              <NestedAccordion items={item.content.items} />
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

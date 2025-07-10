export const QuoteBlock = ({ quote, author }: { quote: string; author: string }) => (
  <blockquote className="border-l-4 border-blue-500 pl-6 italic text-lg text-gray-800 my-8 max-w-3xl mx-auto">
    “{quote}”
    <footer className="text-sm font-medium text-right mt-2">— {author}</footer>
  </blockquote>
);

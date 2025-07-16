import QuoteCard from "../components/QuoteCard";
import { quotationMock } from "../data/quotationMock";

export default function QuotationPage() {
  return (
    <main className="p-4 space-y-4">
      {quotationMock.map((item, index) => (
        <QuoteCard 
          key={index}
          text={`차종: ${item.carName}, 연식: ${item.year}`}
        />
      ))}
    </main>
  );
}

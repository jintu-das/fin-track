import { Button } from "@/components/ui/button";
import { CATEGORIES } from "../mock-data";

export function CategoriesList() {
  return (
    <section className="container mx-auto flex flex-wrap gap-2 items-center">
      <ul className="flex-wrap gap-2 inline-flex">
        {CATEGORIES.map((category, index) => (
          <li key={category}>
            <Button
              variant={index === 0 ? "default" : "outline"}
              className="text-xs font-normal"
            >
              {category}
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}

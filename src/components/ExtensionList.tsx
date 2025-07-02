import { useState } from "react";
import ExtensionCard from "./ExtensionCard";
import "../styles/global.css";
import { data as initialData } from "../data/data";
import ExtensionListHeader from "./ExtensionListHeader.tsx";

export type FilterOption = "All" | "Active" | "Inactive";

export default function ExtensionList() {
  const [cards, setCards] = useState(initialData);
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>("All");

  const handleToggle = (id: number) => {
    setCards((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isActive: !item.isActive } : item)),
    );
  };

  const handleRemove = (id: number) => {
    setCards((prev) => prev.filter((item) => item.id !== id));
  };

  const onFilterChange = (filter: FilterOption) => {
    setSelectedFilter(filter);
  };

  const filteredCards = cards.filter((item) => {
    if (selectedFilter === "Active") return item.isActive;
    if (selectedFilter === "Inactive") return !item.isActive;
    return true; // "All"
  });

  return (
    <div>
      <ExtensionListHeader
        title={"Extension List"}
        selectedFilter={selectedFilter}
        filterChangeHandler={onFilterChange}
      />
      <div className="grid auto-cols-auto grid-cols-1 justify-items-center gap-3 md:grid-cols-2 lg:grid-cols-3">
        {filteredCards.map((item) => (
          <ExtensionCard
            key={item.id}
            id={item.id}
            name={item.name}
            logoLocation={item.logo}
            description={item.description}
            isActive={item.isActive}
            toggleHandler={handleToggle}
            removeHandler={handleRemove}
          />
        ))}
      </div>
    </div>
  );
}

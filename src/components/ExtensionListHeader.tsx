import type { FilterOption } from "./ExtensionList.tsx";
import FilterButton from "./FilterButton.tsx";

export default function ExtensionListHeader({
  title,
  selectedFilter,
  filterChangeHandler,
}: {
  title: string;
  subtitle?: string;
  selectedFilter: string;
  filterChangeHandler: (filter: FilterOption) => void;
}) {
  return (
    <div className="flex justify-between pb-8">
      <h1 className="text-preset-1 text-neutral-900">{title}</h1>
      <div className="flex gap-x-3">
        <FilterButton
          onPress={() => filterChangeHandler("All")}
          isActive={selectedFilter === "All"}
          text={"All"}
        />
        <FilterButton
          onPress={() => filterChangeHandler("Active")}
          isActive={selectedFilter === "Active"}
          text={"Active"}
        />
        <FilterButton
          onPress={() => filterChangeHandler("Inactive")}
          isActive={selectedFilter === "Inactive"}
          text={"Inactive"}
        />
      </div>
    </div>
  );
}

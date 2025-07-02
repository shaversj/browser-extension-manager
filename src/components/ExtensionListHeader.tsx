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
    <div className="flex flex-col items-center gap-y-6 pb-8 md:flex-row md:justify-between md:gap-y-0">
      <h1 className="text-preset-1 dark:text-neutral-0 text-neutral-900">{title}</h1>
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

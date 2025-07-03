import ExtensionCard from "./ExtensionCard";
import "../styles/global.css";
import { data as initialData } from "../data/data";
import ExtensionListHeader from "./ExtensionListHeader.tsx";
import { useExtensions } from "../hooks/useExtensions.tsx";

export default function ExtensionList() {
  const { filtered, filter, toggle, remove, changeFilter } = useExtensions(initialData);

  return (
    <div className={"min-h-screen"}>
      <ExtensionListHeader
        title={"Extensions List"}
        selectedFilter={filter}
        filterChangeHandler={changeFilter}
      />
      <div className="grid auto-cols-auto grid-cols-1 justify-items-center gap-3 md:grid-cols-2 lg:grid-cols-3">
        {filtered().map((item) => (
          <ExtensionCard
            key={item.id}
            id={item.id}
            name={item.name}
            logoLocation={item.logo}
            description={item.description}
            isActive={item.isActive}
            toggleHandler={toggle}
            removeHandler={remove}
          />
        ))}
      </div>
    </div>
  );
}

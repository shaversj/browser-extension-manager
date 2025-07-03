import { useState } from "react";

export type Extension = {
  id: number;
  name: string;
  logo: string;
  description: string;
  isActive: boolean;
};

export type FilterOption = "All" | "Active" | "Inactive";

export function useExtensions(initialData: Extension[]) {
  const [items, setItems] = useState<Extension[]>(initialData);
  const [filter, setFilter] = useState<FilterOption>("All");

  const toggle = (id: number) => {
    setItems((prev) => prev.map((e) => (e.id === id ? { ...e, isActive: !e.isActive } : e)));
  };

  const remove = (id: number) => {
    setItems((prev) => prev.filter((e) => e.id !== id));
  };

  const changeFilter = (f: FilterOption) => {
    setFilter(f);
  };

  const filtered = () => {
    return items.filter((e) => {
      if (filter === "Active") return e.isActive;
      if (filter === "Inactive") return !e.isActive;
      return true;
    });
  };

  return {
    filtered,
    filter,
    toggle,
    remove,
    changeFilter,
  };
}

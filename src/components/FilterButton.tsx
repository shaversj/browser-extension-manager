import type { FilterOption } from "./ExtensionList.tsx";

export default function FilterButton({
  onPress,
  isActive,
  text,
}: {
  onPress: (filter: FilterOption) => void;
  isActive: boolean;
  text: string;
}) {
  return (
    <button
      onClick={() => onPress(text as FilterOption)}
      className={`text-preset-3 rounded-full px-5 py-2 shadow-[0px_1px_2px_rgba(184,196,215,0.4)] ${
        isActive ? "text-neutral-0 bg-red-700" : "bg-neutral-0 text-neutral-900"
      }`}
    >
      {text}
    </button>
  );
}

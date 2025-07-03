import type { FilterOption } from "../hooks/useExtensions.tsx";

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
      className={`text-preset-3 cursor-pointer rounded-full border-2 px-5 py-2 shadow-[0px_1px_2px_rgba(184,196,215,0.4)] hover:border-red-700 dark:hover:border-red-400 ${
        isActive
          ? "text-neutral-0 border-red-700 bg-red-700 dark:border-red-400 dark:bg-red-400 dark:text-neutral-900"
          : "bg-neutral-0 border-neutral-0 dark:text-neutral-0 text-neutral-900 dark:border-neutral-800 dark:bg-neutral-700"
      }`}
    >
      {text}
    </button>
  );
}

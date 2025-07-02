import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function ExtensionCard({
  id,
  name,
  logoLocation,
  description,
  isActive = false,
  toggleHandler,
  removeHandler,
}: {
  id: number;
  name: string;
  logoLocation: string;
  description: string;
  isActive?: boolean;
  toggleHandler: (id: number) => void;
  removeHandler: (id: number) => void;
}) {
  const [enabled, setEnabled] = useState(isActive);

  const onChangeHandler = () => {
    setEnabled(!enabled);
    toggleHandler(id);
  };

  return (
    <div className="bg-neutral-0 shadow-card flex h-[200px] w-full max-w-[343px] flex-col rounded-[20px] border border-neutral-200 p-5 md:max-w-[346px] lg:max-w-[382px] dark:border-neutral-600 dark:bg-neutral-800">
      <div className="flex min-h-0 flex-1 items-start gap-x-4 overflow-hidden">
        <img src={logoLocation} alt={name} className="" />
        <div className="flex flex-col overflow-hidden">
          <h1 className="text-preset-2 dark:text-neutral-0 truncate text-neutral-900">{name}</h1>
          <p className="text-preset-5 truncate pt-2 text-wrap text-neutral-500 dark:text-neutral-300">
            {description}
          </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-between">
        <button
          onClick={() => removeHandler(id)}
          className="text-preset-6 hover:text-neutral-0 dark:text-neutral-0 rounded-full border border-neutral-300 px-4 py-2 text-neutral-900 transition-colors duration-200 hover:bg-red-700 dark:border-neutral-600"
        >
          Remove
        </button>
        <Switch
          checked={enabled}
          onChange={() => onChangeHandler()}
          className="group inline-flex h-[20px] w-[36px] items-center rounded-full bg-gray-200 transition data-checked:bg-red-700 dark:bg-neutral-600 dark:data-checked:bg-red-400"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-4.5" />
        </Switch>
      </div>
    </div>
  );
}

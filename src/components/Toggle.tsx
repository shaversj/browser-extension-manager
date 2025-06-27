import { useState } from "react";
import { Switch } from "@headlessui/react";

type ToggleProps = {
  // enabled?: boolean;
  setEnabled?: (enabled: boolean) => void;
};

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className="group inline-flex h-[20px] w-[36px] items-center rounded-full bg-gray-200 transition data-checked:bg-red-700"
    >
      <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-4.5" />
    </Switch>
  );
}

import {
  Command,
  CommandInput,
} from "@/components/ui/command"
import "tailwindcss";
const navigationBar = () => {
  return (
    <div className="md:min-w-[450px] ">
        <Command className="flex rounded-lg border items-center md:min-w-[250px]">
      <CommandInput placeholder="Type a command or search..." />
    </Command>
    </div>
  )
}

export default navigationBar;
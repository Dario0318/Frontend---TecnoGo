import {
  Command,
  CommandInput,
} from "@/components/ui/command"
import "tailwindcss";
const navigationBar = () => {
  return (
    <div className="md:min-w-[450px] px-2 md:px-4 items-center">
        <Command className="flex rounded-lg border items-center md:min-w-[250px] tems-center justify-center">
      <CommandInput placeholder="busca aqui...."/>
    </Command>
    </div>
  )
}

export default navigationBar;
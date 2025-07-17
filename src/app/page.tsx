import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { DarkModeToggle } from "@/components/common/darkmode-toggle";

export default function Home() {
  return(
    <div>
      <Input placeholder="Type something..." />
      <Button>Click Me</Button>
      <DarkModeToggle />
    </div>
  )
}

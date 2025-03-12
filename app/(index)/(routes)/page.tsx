import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const styleCondition = true;
export default function Home() {
  return (
    <div className="">
      <p>Welcome to the Discord clone</p>
      <Button className={cn("bg-red-500",
      styleCondition && "bg-slate-400"
      )}>Click Me</Button>
    </div>
  );
}

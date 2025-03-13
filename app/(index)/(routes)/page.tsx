import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

const styleCondition = true;
export default function Home() {
  return (
    <div className="">
      <div>
        <UserButton />
        <ModeToggle />
      </div>
    </div>
  );
}

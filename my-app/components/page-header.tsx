import { Button } from "@/components/ui/button"
import Link from 'next/link';

export default function PageHeader() {
  return (
    <Button asChild>
      <Link href="/home">Click me</Link>
    </Button>
  );
}
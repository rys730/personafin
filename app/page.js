import { permanentRedirect, redirect } from "next/navigation";

export default function Home() {
  permanentRedirect('/auth/login')
  return null;
}

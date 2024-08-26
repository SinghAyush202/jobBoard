import { fetchProfileAction } from "../../action/index";
import AccountInfo from "../../components/account-info";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const user = await currentUser();
  console.log("sdlfjsd")
  const profileInfo = await fetchProfileAction(user?.id);
  if (!profileInfo) redirect("/onboard");
  return <AccountInfo profileInfo={profileInfo} />;
}

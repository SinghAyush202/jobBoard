import { fetchProfileAction } from "../../action/index";
import OnBoard from "../../components/on-board/index";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function OnBoardPage() {
  //get the auth user from clerk
  const user = await currentUser();
  console.log("sdfjosjfiojs")

  //fetch the profile info -> either user is candidate / user is recruiter
  const profileInfo = await fetchProfileAction(user?.id);

  if (profileInfo?._id) {
    if (profileInfo?.role === "recruiter" && !profileInfo.isPremiumUser)
      redirect("/membership");
    else redirect("/");
  } else return <OnBoard />;
}

export default OnBoardPage;
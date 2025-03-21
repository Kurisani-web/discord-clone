import { InitialModal } from "@/components/modals/initial-modal";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { Profile, Server } from "@prisma/client";
import { redirect } from "next/navigation";
import React from "react";

const SetupPage = async () => {
  const profile: Profile | any = await initialProfile();

  const server: Server | any = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }
  return <InitialModal />;
};

export default SetupPage;

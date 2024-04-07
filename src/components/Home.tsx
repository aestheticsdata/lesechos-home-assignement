"use client"
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import CardGrid from "@/components/CardGrid";
import useNewsletters from "@/components/services/useNewsletters";
import { homeTexts } from "@/components/config/texts";
import {
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
} from "@/mocks/user";

import type { UserPermissions } from "@/components/interfaces/subscription";
import { UserType } from "@/components/interfaces/user";


const Home = () => {
  const [user, setUser] = useState<UserType>();
  const { cards, isLoading } = useNewsletters();

  const makeUser = (userPermissions: UserPermissions) => {
    switch (userPermissions) {
      case "":
        setUser(USER_WITHOUT_SUBSCRIPTION);
        break;
      case "RIGHT_1":
        setUser(USER_WITH_ONE_SUBSCRIPTION);
        break;
      case "RIGHT_1,RIGHT_2":
        setUser(USER_WITH_MULTIPLE_SUBSCRIPTION);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    makeUser((process.env.NEXT_PUBLIC_USER as UserPermissions));
  }, []);

  useEffect(() => {
    if (user) {
      toast.info(
        `Hello : ${user.firstName}, ${homeTexts.permissions} : ${user.subscriptions}`,
        {
          theme: "colored",
          autoClose: 3000,
        });
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center space-y-8 py-8">
      <div className="flex justify-center items-center">

        <div className="w-full p-4 xl:p-0 xl:w-11/12 space-y-4">
          <div className="flex flex-col justify-center items-center bg-gray-100 p-4 rounded">
            <div className="text-xl font-bold">
              {homeTexts.title}
            </div>
            <div className="text-xs max-w-5xl">
              {homeTexts.subTitle}
            </div>
          </div>
          {isLoading &&
            <div className="flex items-center justify-center">
              Newsletters loading...
            </div>
          }
          {user && cards &&
            <CardGrid
              cards={cards}
              user={user}
            />
          }
        </div>

      </div>
    </div>
  )
}

export default Home;

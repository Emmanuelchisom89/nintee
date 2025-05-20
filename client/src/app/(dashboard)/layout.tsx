"use client";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/DashboardSidebar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import React, { useEffect } from "react";
import { useGetAuthUserQuery } from "@/state/api";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: authUser, isLoading: authLoading } = useGetAuthUserQuery();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    if (authUser) {
      const userRole = authUser.userRole?.toLowerCase();
      if (
        (userRole === "manager" && pathname.startsWith("/tenants")) ||
        (userRole === "tenant" && pathname.startsWith("/managers"))
      ) {
        router.push(
          userRole === "manager" ? "/managers/properties" : "/tenants/favorites"
          //  { scroll: false }
        );
      } else {
        setIsLoading(false);
      }
    }
  }, [authUser, router, pathname]);

  if (authLoading || isLoading) return <>Loading</>;
  if (!authUser?.userRole) return null;

  return (
    <SidebarProvider>
      <div>
        <Navbar />
        <div style={{ paddingTop: `${NAVBAR_HEIGHT + 5}px` }}></div>
        <main className="flex">
          <DashboardSidebar userType={authUser?.userRole.toLowerCase()} />
          <div className="flex-grow transition-all duration-300">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;

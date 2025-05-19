import { usePathname } from "next/navigation";
import React from "react";
import { Sidebar, SidebarHeader, SidebarMenu, SidebarMenuItem, useSidebar } from "./ui/sidebar";
import { Building, FileText, Heart, Home, Settings } from "lucide-react";
import { NAVBAR_HEIGHT } from "@/lib/constants";

const DashboardSidebar = ({ userType }: AppSidebarProps) => {
  const pathname = usePathname();
  const { toggleSidebar, open } = useSidebar();

  const nevLinks =
    userType === "manager"
      ? [
          {
            icon: Building,
            label: "properties",
            href: "/managers/properties",
          },
          {
            icon: FileText,
            label: "Applications",
            href: "/managers/applications",
          },
          {
            icon: Settings,
            label: "Settings",
            href: "/managers/settings",
          },
        ]
      : [
          {
            icon: Heart,
            label: "Favorites",
            href: "/tenants/favorites",
          },
          {
            icon: FileText,
            label: "Applications",
            href: "/tenants/applications",
          },
          {
            icon: Home,
            label: "Residence",
            href: "/tenants/residence",
          },
          {
            icon: Settings,
            label: "Settings",
            href: "/tenants/settings",
          },
        ];
  return (
    <Sidebar
      collapsible="icon"
      className="fixed left-0 bg-white shadow-lg"
      style={{
        top: `${NAVBAR_HEIGHT}px`,
        height: `calc(100vh - ${NAVBAR_HEIGHT}PX)`,
      }}
      >
          <SidebarHeader>
              <SidebarMenu>
                  <SidebarMenuItem>
                      <div className=""></div>
                  </SidebarMenuItem>
              </SidebarMenu>
          </SidebarHeader>
    </Sidebar>
  );
};

export default DashboardSidebar;

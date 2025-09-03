// "use client";
// import React, { useEffect, useRef, useState,useCallback } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useSidebar } from "../context/SidebarContext";
// import {
//   BoxCubeIcon,
//   CalenderIcon,
//   ChevronDownIcon,
//   GridIcon,
//   HorizontaLDots,
//   ListIcon,
//   PageIcon,
//   PieChartIcon,
//   PlugInIcon,
//   TableIcon,
//   UserCircleIcon,
// } from "../icons/index";
// import SidebarWidget from "./SidebarWidget";

// type NavItem = {
//   name: string;
//   icon: React.ReactNode;
//   path?: string;
//   subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
// };

// const navItems: NavItem[] = [
//   {
//     icon: <GridIcon />,
//     name: "Dashboard",
//     subItems: [{ name: "Overview widgets", path: "/", pro: false }],
//   },


//   {
//     icon: <CalenderIcon />,
//     name: "Calendar",
//     path: "/calendar",
//   },

//   {
//     icon: <UserCircleIcon />,
//     name: "User Profile",
//     path: "/profile",
//   },

//   {
//     name: "Forms",
//     icon: <ListIcon />,
//     subItems: [{ name: "Form Elements", path: "/form-elements", pro: false }],
//   },
//   {
//     name: "Tables",
//     icon: <TableIcon />,
//     subItems: [{ name: "Basic Tables", path: "/basic-tables", pro: false }],
//   },
//   {
//     name: "Pages",
//     icon: <PageIcon />,
//     subItems: [
//       { name: "Blank Page", path: "/blank", pro: false },
//       { name: "404 Error", path: "/error-404", pro: false },
//     ],
//   },
// ];

"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import {
  Defects,
  Drivers,
  Help,
  Incident,
  BoxCubeIcon,
  CalenderIcon,
  ChevronDownIcon,
  GridIcon,
  HorizontaLDots,
  ListIcon,
  PageIcon,
  PieChartIcon,
  PlugInIcon,
  TableIcon,
  UserCircleIcon,
 Compliance,
 Clipboard,
 VehicleChecks,
 Vehicles,
Users,
Defect,
Alert,
Report,
Settings,
 Logout,
  Helps,
 CarIcon,

} from "../icons/index";
// import SidebarWidget from "./SidebarWidget";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

// Updated menu structure per user request
const navItems = [
  {
    icon: <GridIcon />, name: "Dashboard",
    subItems: [{ name: "Overview widgets", path: "/" }],
  },

  {
    icon: < VehicleChecks />, name: "Vehicle Checks",
    subItems: [
      { name: "Today's Checks", path: "/VehicleChecks/TodaysChecks" },
      { name: "Missed Checks", path: "/VehicleChecks/MissedChecks" },
      { name: "Full Check History", path: "/VehicleChecks/AllChecks" },
    ],
  },

  {
    icon: <Vehicles />, name: "Vehicles",
    subItems: [
      { name: "Vehicle List", path: "/Vehicles/VehicleList" },
      { name: "Add New Vehicle", path: "/Vehicles/NewVehicle" },
      { name: "Vehicle Documents", path: "/Vehicles/VehicleDocuments" },
      // { name: "Wash Tracker (42-Day Cycle)", path: "/vehicles/wash-tracker" },
    ],
  },

  {
    icon: <Users/>, name: "Drivers",
    subItems: [
      { name: "Driver List", path: "/Drivers/DriverList" },
      { name: "Assign Vehicle", path: "/Drivers/AssignVehicles" },
      { name: "Driver Documents", path: "/Drivers/DriverDocuments" },
    ],
  },

  {
    icon: <Defect />, name: "Defects",
    subItems: [
      { name: "Active Defects", path: "/Defects/ActiveDefects" },
      { name: "Resolved Defects", path: "/Defects/ResolvedDefects" },
      { name: "Report New Defect", path: "/Defects/NewDefects" },
    ],
  },
 
  {
    icon: <Alert />, name: "Incidents",
    subItems: [
      { name: "All Reports", path: "/Incidents/AllReports" },
      { name: "Escalated", path: "/Incidents/Escalated" },
      { name: "Add New Incident", path: "/Incidents/NewIncident" },
    ],
  },

  {
    icon: <PageIcon />, name: "Sites",
    subItems: [
      { name: "Site List", path: "/Sites/SiteList" },
      { name: "Site Reports", path: "/Sites/SiteReport" },
      { name: "Site Inspections", path: "/Sites/SiteInspections" },
    ],
  },

  {
    icon: <Clipboard/>, name: "Compliance",
    subItems: [
      { name: "Expiry Alerts (MOT, Insurance, etc.)", path: "/compliance/alerts" },
      { name: "Upload Documents", path: "/compliance/upload" },
      { name: "All Documents", path: "/compliance/documents" },
    ],
  },

  {
    icon: <Report />, name: "Reports",
    subItems: [
      { name: "Generate PDF/Excel", path: "/reports/generate" },
      { name: "Monthly Summary", path: "/reports/summary" },
      { name: "Export Logs", path: "/reports/export" },
    ],
  },

  {
    icon: <Settings />, name: "Settings",
    subItems: [
      { name: "Users & Roles", path: "/settings/users" },
      { name: "Notifications", path: "/settings/notifications" },
      { name: "Company Info", path: "/settings/company" },
    ],
  },
];



const othersItems: NavItem[] = [

{
    icon: <Helps />, name: "Help & Support", path: "/calendar",
 },

{
    icon: <Logout />, name: "Logout", path: "/calendar",
 },

];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const renderMenuItems = (
    navItems: NavItem[],
    menuType: "main" | "others"
  ) => (
    <ul className="flex flex-col gap-4">
      {navItems.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`menu-item group  ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
              } cursor-pointer ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
              }`}
            >
              <span
                className={` ${
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className={`menu-item-text`}>{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDownIcon
                  className={`ml-auto w-5 h-5 transition-transform duration-200  ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "rotate-180 text-[#B0C4FF]"
                      : ""
                  }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                href={nav.path}
                className={`menu-item group ${
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                }`}
              >
                <span
                  className={`${
                    isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className={`menu-item-text`}>{nav.name}</span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href={subItem.path}
                      className={`menu-dropdown-item ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                      }`}
                    >
                      {subItem.name}
                      <span className="flex items-center gap-1 ml-auto">
                        {subItem.new && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge `}
                          >
                            new
                          </span>
                        )}
                        {subItem.pro && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge `}
                          >
                            pro
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // const isActive = (path: string) => path === pathname;
   const isActive = useCallback((path: string) => path === pathname, [pathname]);

  useEffect(() => {
    // Check if the current path matches any submenu item
    let submenuMatched = false;
    ["main", "others"].forEach((menuType) => {
      const items = menuType === "main" ? navItems : othersItems;
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({
                type: menuType as "main" | "others",
                index,
              });
              submenuMatched = true;
            }
          });
        }
      });
    });

    // If no submenu item matches, close the open submenu
    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [pathname,isActive]);

  useEffect(() => {
    // Set the height of the submenu items when the submenu is opened
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  return (
    <aside
     style={{ backgroundColor: 'var(--navy-blue)' }}
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 dark:bg-gray-900 dark:border-gray-800 text-white h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-500 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex  ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link href="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <Image
                className="dark:hidden"
                src="/images/logo/app.svg"
                alt="Logo"
                width={230}
                height={40}
              />
              <Image
                className="hidden dark:block"
                src="/images/logo/app.svg"
                alt="Logo"
                width={150}
                height={40}
              />
            </>
          ) : (
            <Image
              src="/images/logo/logo-icon.svg"
              alt="Logo"
              width={32}
              height={32}
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-white ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Menu"
                ) : (
                  <HorizontaLDots />
                )}
              </h2>
              {renderMenuItems(navItems, "main")}
            </div>

            <div className="">
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-white ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Others"
                ) : (
                  <HorizontaLDots />
                )}
              </h2>
              {renderMenuItems(othersItems, "others")}
            </div>
          </div>
        </nav>
        {/* {isExpanded || isHovered || isMobileOpen ? <SidebarWidget /> : null} */}
      </div>
    </aside>
  );
};

export default AppSidebar;

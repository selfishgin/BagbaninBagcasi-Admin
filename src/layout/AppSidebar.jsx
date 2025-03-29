import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useSidebar } from "../context/SidebarContext.jsx";

const navItems = [
    {
      icon: <img src="/icons/grid.svg" alt="Dashboard" className="w-5 h-5" />,
      name: "Dashboard",
      path: "/",
    },
    {
      icon: <img src="/icons/calender-line.svg" alt="Calendar" className="w-5 h-5" />,
      name: "Calendar",
      path: "/calendar",
    },
    {
        icon: <img src="/icons/seller2.svg" alt="Seller" className="w-5 h-5" />,
        name: "Sellers",
        path: "/profile",
    },
    {
      icon: <img src="/icons/user-circle.svg" alt="User" className="w-5 h-5" />,
      name: "User Profile",
      path: "/profile",
    },
    {
      name: "Forms",
      icon: <img src="/icons/list.svg" alt="Forms" className="w-5 h-5" />,
      subItems: [{ name: "Form Elements", path: "/form-elements", pro: false }],
    },
    {
      name: "Tables",
      icon: <img src="/icons/table.svg" alt="Tables" className="w-5 h-5" />,
      subItems: [{ name: "Basic Tables", path: "/basic-tables", pro: false }],
    },
    {
      name: "Pages",
      icon: <img src="/icons/page.svg" alt="Pages" className="w-5 h-5" />,
      subItems: [
        { name: "Blank Page", path: "/blank", pro: false },
        { name: "404 Error", path: "/error-404", pro: false },
      ],
    },
  ];
  
  const othersItems = [
    {
      icon: <img src="/icons/pie-chart.svg" alt="Charts" className="w-5 h-5" />,
      name: "Charts",
      subItems: [
        { name: "Line Chart", path: "/line-chart", pro: false },
        { name: "Bar Chart", path: "/bar-chart", pro: false },
      ],
    },
    {
      icon: <img src="/icons/box-cube.svg" alt="UI Elements" className="w-5 h-5" />,
      name: "UI Elements",
      subItems: [
        { name: "Alerts", path: "/alerts", pro: false },
        { name: "Avatar", path: "/avatars", pro: false },
        { name: "Badge", path: "/badge", pro: false },
        { name: "Buttons", path: "/buttons", pro: false },
        { name: "Images", path: "/images", pro: false },
        { name: "Videos", path: "/videos", pro: false },
      ],
    },
    {
      icon: <img src="/icons/plug-in.svg" alt="Auth" className="w-5 h-5" />,
      name: "Authentication",
      subItems: [
        { name: "Sign In", path: "/signin", pro: false },
        { name: "Sign Up", path: "/signup", pro: false },
      ],
    },
];

const AppSidebar = () => {
    const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
    const location = useLocation();
  
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [subMenuHeight, setSubMenuHeight] = useState({});
    const subMenuRefs = useRef({});
  
    const isActive = useCallback(
      (path) => location.pathname === path,
      [location.pathname]
    );
  
    useEffect(() => {
      let submenuMatched = false;
      ["main", "others"].forEach((menuType) => {
        const items = menuType === "main" ? navItems : othersItems;
        items.forEach((nav, index) => {
          if (nav.subItems) {
            nav.subItems.forEach((subItem) => {
              if (isActive(subItem.path)) {
                setOpenSubmenu({ type: menuType, index });
                submenuMatched = true;
              }
            });
          }
        });
      });
  
      if (!submenuMatched) {
        setOpenSubmenu(null);
      }
    }, [location, isActive]);
  
    useEffect(() => {
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
  
    const handleSubmenuToggle = (index, menuType) => {
      setOpenSubmenu((prev) =>
        prev?.type === menuType && prev?.index === index ? null : { type: menuType, index }
      );
    };
  
    const renderMenuItems = (items, menuType) => (
      <ul className="flex flex-col gap-4">
        {items.map((nav, index) => (
          <li key={nav.name}>
            {nav.subItems ? (
              <button
                onClick={() => handleSubmenuToggle(index, menuType)}
                className={`menu-item group ${openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
                } cursor-pointer ${!isExpanded && !isHovered ? "lg:justify-center" : "lg:justify-start"}`}
              >
                <span className={`menu-item-icon-size ${openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-icon-active"
                  : "menu-item-icon-inactive"
                }`}>
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && <span className="menu-item-text">{nav.name}</span>}
                {(isExpanded || isHovered || isMobileOpen) && (
                  <img
                    src="/icons/chevron-down.svg"
                    alt="toggle"
                    className={`ml-auto w-5 h-5 transition-transform duration-200 ${openSubmenu?.type === menuType && openSubmenu?.index === index ? "rotate-180 text-brand-500" : ""}`}
                  />
                )}
              </button>
            ) : (
              nav.path && (
                <Link
                  to={nav.path}
                  className={`menu-item group ${isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"}`}
                >
                  <span
                    className={`menu-item-icon-size ${isActive(nav.path) ? "menu-item-icon-active" : "menu-item-icon-inactive"}`}
                  >
                    {nav.icon}
                  </span>
                  {(isExpanded || isHovered || isMobileOpen) && <span className="menu-item-text">{nav.name}</span>}
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
                  height: openSubmenu?.type === menuType && openSubmenu?.index === index ? `${subMenuHeight[`${menuType}-${index}`]}px` : "0px",
                }}
              >
                <ul className="mt-2 space-y-1 ml-9">
                  {nav.subItems.map((subItem) => (
                    <li key={subItem.name}>
                      <Link
                        to={subItem.path}
                        className={`menu-dropdown-item ${isActive(subItem.path) ? "menu-dropdown-item-active" : "menu-dropdown-item-inactive"}`}
                      >
                        {subItem.name}
                        <span className="flex items-center gap-1 ml-auto">
                          {subItem.new && (
                            <span className={`ml-auto ${isActive(subItem.path) ? "menu-dropdown-badge-active" : "menu-dropdown-badge-inactive"} menu-dropdown-badge`}>
                              new
                            </span>
                          )}
                          {subItem.pro && (
                            <span className={`ml-auto ${isActive(subItem.path) ? "menu-dropdown-badge-active" : "menu-dropdown-badge-inactive"} menu-dropdown-badge`}>
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
  
    return (
        <aside
        className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
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
          className={`py-8 flex ${
            !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
          }`}
        >
          <Link to="/">
            {isExpanded || isHovered || isMobileOpen ? (
              <>
                <img
                  className="dark:hidden"
                  src="public\images\logo.svg"
                  alt="Logo"
                  width={150}
                  height={40}
                />
                <img
                  className="hidden dark:block"
                  src="public\images\logo-dark.svg"
                  alt="Logo"
                  width={150}
                  height={40}
                />
              </>
            ) : (
              <img
                src="public\images\logo-icon.svg"
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
                  className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                    !isExpanded && !isHovered
                      ? "lg:justify-center"
                      : "justify-start"
                  }`}
                >
                  {isExpanded || isHovered || isMobileOpen ? (
                    "Menu"
                  ) : (
                    <HorizontaLDots className="size-6" />
                  )}
                </h2>
                {renderMenuItems(navItems, "main")}
              </div>
              <div className="">
                <h2
                  className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
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
        </div>
      </aside>
    );
  };
  
  export default AppSidebar;
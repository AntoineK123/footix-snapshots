import { NavItem } from "@/store/useNavStore";
import { NavLink } from "react-router-dom";
import FootixLogoXs from "@/assets/footixLogoXs.svg";


const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Data", path: "/data" },
  { label: "Charts", path: "/charts" },
  { label: "FAQ", path: "/faq" },
];

export function MobileNavbar() {
  return (
    <div className="flex flex-wrap items-center gap-4 rounded-xl border bg-white px-4 py-3">
      <NavLink
        key={"/"}
        to={"/"}
        className="">
        <img src={FootixLogoXs} className="w-8 h-8" />
      </NavLink>
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `text-sm font-medium transition-colors ${isActive
              ? "text-rose-600 font-semibold"
              : "text-muted-foreground hover:text-foreground"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}
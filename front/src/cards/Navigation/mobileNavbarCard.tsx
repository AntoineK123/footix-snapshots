import { NavItem, useNavStore } from "@/store/useNavStore";

 
// ─── TYPES ───────────────────────────────────────────────────────────────────
 
const NAV_ITEMS: NavItem[] = [
  { label: "Home",   path: "/" },
  { label: "Data",   path: "/data" },
  { label: "Charts", path: "/charts" },
  { label: "Faq",    path: "/faq" },
];
 




// ─── MOBILENAVBAR ────────────────────────────────────────────────────────────
// flex wrap gap-2
// md:hidden

 
export function MobileNavbar() {

    
    const selectedNavItem = useNavStore((s) => s.selectedNavItem);
    const setSelectedNavItem = useNavStore((s) => s.setSelectedNavItem);


  return (
    <div className="flex flex-wrap items-center gap-4 rounded-xl border bg-white px-4 py-3 md:hidden">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.path}
          href={item.path}
          onClick={(e) => { e.preventDefault(); setSelectedNavItem(item); }}
          className={`text-sm font-medium transition-colors ${
            selectedNavItem.path === item.path
              ? "text-rose-600 font-semibold"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
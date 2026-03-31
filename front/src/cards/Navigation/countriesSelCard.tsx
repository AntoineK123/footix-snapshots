import { useNavStore } from "@/store/useNavStore";

type Country = { code: string; label: string };

const COUNTRIES: Country[] = [
    { code: "fr", label: "France" },
    { code: "en", label: "Angleterre" },
    { code: "es", label: "Espagne" },
    { code: "de", label: "Allemagne" },
    { code: "it", label: "Italie" },
    { code: "be", label: "Belgique" },
    { code: "pt", label: "Portugal" },
    { code: "tr", label: "Turquie" },
];


export function CountrySelCard() {


    const selectedCountry = useNavStore((s) => s.selectedCountry);
    const setSelectedCountry = useNavStore((s) => s.setSelectedCountry);


    return (
        <div className="flex flex-wrap md:flex-col gap-2 rounded-xl border bg-white px-4 py-3">
            {COUNTRIES.map((c) => (
                <span
                    key={c.code}
                    onClick={(e) => { e.preventDefault(); setSelectedCountry(c.code); }}
                    className={`cursor-pointer rounded-full px-3 py-1 text-sm font-medium transition-colors select-none ${selectedCountry === c.code
                        ? "bg-blue-500 text-white"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                >
                    {c.label}
                </span>
            ))}
        </div>
    );
}

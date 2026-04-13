import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const stats = [
  { value: "11", label: "Saisons" },
  { value: "4 000+", label: "Matchs" },
  { value: "20+", label: "Équipes" },
  { value: "3", label: "Métriques" },
];

const features = [
  {
    icon: "⚽",
    title: "Résultats historiques",
    desc: "Consultez l'ensemble des résultats de la Ligue 1 de 2012 à 2025, match par match, saison par saison.",
  },
  {
    icon: "📈",
    title: "Rentabilité des paris",
    desc: "Consultez la forme de chaque équipe au cours des différentes saisons et même leur rentabilité si vous aviez parié dessus !",
  },
  {
    icon: "🔍",
    title: "Filtres avancés",
    desc: "Filtrez par division, saison et équipe pour isoler exactement les données qui vous intéressent.",
  },
];

export default function HomePageCard() {
  return (
    <div className="flex flex-col gap-12 px-4 py-10 mx-auto">
      {/* Hero */}
      <div className="flex flex-col gap-4">
        <Badge
          variant="outline"
          className="w-fit font-mono tracking-widest uppercase text-yellow-500 border-yellow-500/30 bg-yellow-500/10"
        >
          Projet pédagogique
        </Badge>

        <h1 className="text-4xl font-black leading-tight tracking-tight">
          Résultats des équipes de football<br />
          <span className="text-yellow-400 italic">& analyses de leur rentabilité</span>
        </h1>

        <p className="text-muted-foreground text-base leading-relaxed">
          Vous cherchez les résultats de votre équipe de football préférée ?
          Vous souhaitez aussi savoir combien vous auriez gagnez si vous aviez parié dessus ?
        </p>
        <p className="text-muted-foreground text-base leading-relaxed">
          Ce site peut vous aider 😉
          Vous trouverez les résultats de toutes les équipes de Ligue 1 de 2012 à 2025. Des analyses poussées ont permis de calculer la rentabilité 
          de chaque équipe aux cours des différentes saisons passées.
        </p>
        <p className="text-muted-foreground text-base leading-relaxed">
          Ce site est encore en cours de développement ; pour l'instant, seule la Ligue 1 est consultable. D'autres fonctionnalitées arriveront : 
          filtres supplémentaires, pagination,graphiques ...
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            to="/data"
            className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-yellow-400"
          >
            Curieux de voir le résultat ? par ici ⚽
          </Link>

          <Link
            to="/Faq"
            className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-yellow-400"
          >
            Intéressé par la technique ? par ici 💻
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardContent className="flex flex-col items-center justify-center p-4 gap-1">
              <span className="text-2xl font-black text-yellow-400">{s.value}</span>
              <span className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
                {s.label}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />

      {/* Features */}
      <div className="flex flex-col gap-3">
        {features.map((f) => (
          <Card key={f.title}>
            <CardContent className="flex gap-4 items-start p-4">
              <span className="text-2xl mt-0.5">{f.icon}</span>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-sm">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

    </div>
  );
}
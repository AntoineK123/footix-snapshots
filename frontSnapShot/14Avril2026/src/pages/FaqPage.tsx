import { Card, CardContent } from "@/components/ui/card";


const features = [
  {
    icon: "🧾",
    title: "Source de données",
    desc: "Toutes les données brutes sur les matchs de foot et leurs cotes proviennent du site https://www.football-data.co.uk/",
  },
  {
    icon: "🗃️",
    title: "Webscrapping automatisé",
    desc: `Grâce à la bibliothèque Selenium de Python, l'historique des principaux championnats européens a pu être « scrappé » automatiquement. Les données brutes étant des fichiers CSV, il a fallu ensuite les retraiter.`,
  },
  {
    icon: "🧠",
    title: "Analyses",
    desc: "Les données CSV ont ensuite été compilées et analysées grâce à Python. Cette étape a permis de générer un historique des matchs et une analyse fine de la rentabilité de chaque équipe à chaque saison.",
  },
  {
    icon: "💾",
    title: "Base de données",
    desc: "Les données compilées, reformatées et analysées ont alimenté la base de données SQLite. Le choix d'utiliser SQLite est justifié par sa simplicité d'installation et d'utilisation.",
  },
  {
    icon: "🔌",
    title: "Serveur HTTP",
    desc: "Grâce au package Fastify de Node.js, un serveur HTTP avec une implémentation de routes, contrôleurs, DTO (Zod) et services permet au front‑end de récupérer les données utiles demandées par l’utilisateur.",
  },
  {
    icon: "🏠",
    title: "Front‑end",
    desc: "La partie front‑end a été réalisée avec le framework React. Les composants visuels proviennent de la bibliothèque Shadcn, et la table de données utilise TanStack Table ainsi que TanStack Query pour récupérer les données depuis le serveur backend.",
  },
]

export default function FaqPageCard() {
  return (

    <div className="flex flex-col gap-12 px-4 py-10 mx-auto">

      <h1 className="text-3xl font-bold font-black leading-tight tracking-tight">
        FAQ
      </h1>

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
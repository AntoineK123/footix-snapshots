Grâce à ces 4 fichiers on peut obtenir l'historique des résultats et de la rentabilité du pari "Victoire de l'équipe" sur plusieurs matchs et plusieurs saisons.

Voici le résumé simplifié de l'utilsiation de ces fichiers :

Foot-data-scrapping :

Fichier python qui utilise la librairie Selenium pour détecter et telecharger les fichiers csv de chaque page pays (du site football-data.co.uk)

InitAnalyse va : 

1) CompileDataParis va compiler dans un dataFramepropre et standardisé les données qui ont été webscrappées précedemment 

2) AnalyseDfParis va prendre cette compile et calculer pour chaque match la rentabilité du pari "Victoire de l'équipe" lors du match et la rentabilité du pari "Victoire de l'équipe" les X dernier matchs avant chaque match de la saison étudiée.

3) Le résultat de cette analyse pour toutes les équipes d'une équipe d'une saison est ensuite exporté et enregistré en CSV

Vers BDD :

Tous ces résultats d'analyses ont permis d'alimenter la BDD qui est apellée par le serveur HTTP.


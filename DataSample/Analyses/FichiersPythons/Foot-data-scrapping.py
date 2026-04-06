
"""

Ce scripte sert à télecharger les fichiers de resultats et cotes de la première divison des plus grands pays de foot européens
sur le site football-data.co.uk
automatiquement sans devoir allers sur les sites webs



"""

#on importe les differentes bibliotheques
from selenium import webdriver
from selenium.webdriver.edge.options import Options
from selenium.webdriver.edge.service import Service  # Importer la classe Service pour Edge
from selenium.webdriver.common.by import By
import os
import requests

# Utilisation de la classe Service pour spécifier le chemin du EdgeDriver
# Remplace par
service = Service(r'C:\Users\kulekci antoine\Documents\Edgedriver\msedgedriver.exe')

# Initialisation du WebDriver avec le service
driver = webdriver.Edge(service=service)

# on initialise la liste des liens des pages des différents pays
liurl = ["https://www.football-data.co.uk/francem.php"]
liurl += ["https://www.football-data.co.uk/englandm.php"]
liurl += ["https://www.football-data.co.uk/scotlandm.php"]
liurl += ["https://www.football-data.co.uk/spaindm.php"]
liurl += ["https://www.football-data.co.uk/turkeym.php"]
liurl += ["https://www.football-data.co.uk/germanym.php"]
liurl += ["https://www.football-data.co.uk/portugalm.php"]
liurl += ["https://www.football-data.co.uk/netherlandsm.php"]
liurl += ["https://www.football-data.co.uk/belgiumm.php"]
liurl += ["https://www.football-data.co.uk/italym.php"]
liurl += ["https://www.football-data.co.uk/greecem.php"]



options=Options()

options.add_argument('--headless')  # Active le mode headless
options.add_argument('--disable-gpu') #Désactive l'utilisation du GPU (utile pour certains environnements)

#on demarre une boucle qui va prendre chaque lien des sites de chaque pays pour les quels on veut télécharger les fichiers
for url in liurl:
    driver.get(url)

    csv_links = driver.find_elements(By.XPATH, "//a[contains(@href, '.csv')]")

    # Créer un dossier pour stocker les fichiers téléchargés
    download_folder = r"C:\Users\kulekci antoine\Documents\Projets Data\Betting\Webscrapping\csv_files"
    if not os.path.exists(download_folder):
        os.makedirs(download_folder)

    # Télécharge le fichier de la divison 1 du site web du pays en question

    #on parametre les varibales du nom de la saison
    saideb=25
    saifin=26

    for link in csv_links:
        
        file_url = link.get_attribute("href")
        file_name = os.path.join(download_folder, file_url.split("/")[-1])
        
        
        #on garde que les fichiers qui ont 1 dedans , c'est à dire qui sont de la première division uniquement
        #pour les cas de l'anglettere et de l'ecosse la première division est un fichier E0 ou SC0 donc on traite que les fichiers avec 0 dedans
        if "eng" in url or "scot" in url :
            if "0" not in file_name :
                continue
        #on garde que les fichiers qui ont 1 dedans pour les autres pays, c'est à dire qui sont de la première division uniquement
        else:
            if "1" not in file_name :
                continue
        #on garde que les fichiers qui ont 1 dedans , c'est à dire qui sont de la première division uniquement

    


        file_name=file_name.replace(".csv",str(saideb)+str(saifin)+".csv")

        print(f"Téléchargement du fichier : {file_name}")

        # Télécharger le fichier CSV avec requests
        response = requests.get(file_url)
        with open(file_name, 'wb') as file:
            file.write(response.content)
        saideb+=-1
        saifin+=-1

        if saideb==-1 : saideb=99
        if saifin==-1 : saifin=99 

        
    print("Tous les fichiers CSV ont été téléchargés.")

    # Fermer le navigateur
driver.quit()
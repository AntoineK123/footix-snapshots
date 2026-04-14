# -*- coding: utf-8 -*-
"""
Created on Fri May 10 20:18:29 2024

@author: asusa
"""

def compiledata(lienDossier: str,equipe: str, saison: str,debut=0,fin=20500101):
    
    """
    #Compile les données dans un data frame  
    matches résultats cotes 
    En parametre : 
    lienDossier => taper la lettre r puis mettre le lien du dossier en "string" ///
    equipe => le nom de "lequipe" ou "toutes" ou "toutesliste"" 
    (ce dernier affichera la liste de toutes les equipe)
    
    """
    import numpy
    import pandas as pd
    import glob
    import os
    
    
    ###ON RECUPERE LA DATA :  TOUS LES MATCHS DUNE EQUPIE SPECIFIQUE OU DE TOUTES ET LEURS COTES ET RESULTAT
    
    
    #on crée une liste qui va contenir tous les fichiers csv de notre dossier
    liCsv = glob.glob(os.path.join(lienDossier, "*.csv"))
    
    #On compile les fichiers bruts et on filtre si necessaire sur les matches de l'equipe ou toutes les equipes
    for k in range(len(liCsv)):
        
        #on stocke le lien de chacun des fichiers dans lien
        lien=liCsv[k]
    

        #on importe un fichier csv avec cette commande
        df=pd.read_csv(lien, sep=',',encoding='unicode_escape',on_bad_lines='skip')
        

        
        #on ajoute le "code" de la saison inclus dans le nom du fichier "2425" pour 20242025 par exemple
        df['Saison']=str(lien[-8:-4])
        
        
        
        #si on souhaite analyser une equipe specifique et non toutes les equipes
        if equipe!="toutes" and equipe!="toutesliste" :
            
            #en lisant le csv on selectionne uniquement les lignes avec l equipe dedans à dom ou ext
            df=df[(df['HomeTeam']==equipe)|(df['AwayTeam']==equipe)]
        
        #si on souhaite analyser une saison en particulier
        if saison!="":
            df=df[(df['Saison']==saison)]
            
        
        
       
        # le df dfComp va compiler le résultat de chaque lecture de csv df
        #on initialise dfComp pour k==0
        
        
        if k==0:
                dfComp=df
        #on compile sur dfComp pour les fichiers suivants
        else:
            dfComp=pd.concat([dfComp,df],ignore_index=True, sort=False)
    
    
    ### si en parametre on a toutesliste alors on ressort affiche la liste puis on quitte la fonction
    
    if equipe=="toutesliste":
        ttsliste=(list(set(dfComp['HomeTeam'].to_list())))
        
        for v in range(len(ttsliste)):
                if type(ttsliste[v]) == float:
                    print(k)
                    print(ttsliste[v])
                    del ttsliste[v]
                    break
        

        return(ttsliste)
    
    ### ON PREPARE NOS DONNES A L'ANALYSE 
    
    #on selectionne les colonnes qui nous intéressent : date , equi dom, equip ext, resultat, cote dom, cote nul, cote exte
    
    
    dfComp=dfComp[['Date','HomeTeam','AwayTeam','FTR','B365H','B365D','B365A','Saison']]
    
    
    #on convertie les dates en format YYYYMMDD
    for k in range(len(dfComp)):
        
        date=dfComp.at[k,'Date']
        
        #dans certains fichiers l'année a deux chiffres (/17 au lieu de /2017 par exemple) et dans dautres l'année est bien en quatre chiffres,
        if date[-3]=="/":
            date="20"+date[6:8]+date[3:5]+date[0:2]
            
        else :
            date=date[6:10]+date[3:5]+date[0:2]
        
        #on convertie chaque valeur en integer et on l'affecte à notre dframe
        dfComp.at[k,'DateInt']=int(date)
    
    #on force la conversion de DateInt
    dfComp['DateInt'] = dfComp['DateInt'].astype(int)
    
    #on supprimer la colonne date
    dfComp = dfComp.drop(columns=['Date'])
    
    #on ranomme date Int en date
    # renommer la colonne initiale en str
    dfComp.rename(columns={'DateInt': 'Date'}, inplace=True)
    
    #on redifine le dfComp avec la nouvelle colonne date 
    dfComp=dfComp[['Date','HomeTeam','AwayTeam','FTR','B365H','B365D','B365A','Saison']]
    
    #si on souhaite analyser une plage de temps specifique
    dfComp=dfComp[dfComp['Date']>=debut]
    dfComp=dfComp[dfComp['Date']<=fin]
    
    #si dfComp est vide alors on return
    if dfComp.empty:
        return("DFComp Vide")
    
    
    ### MISE EN FORME PLUS JOLIE DU TABLEAU
    
    #on trie les matchs par date
    dfComp=dfComp.sort_values(by='Date',ascending=True)
    
    #on reset l'index des lignes , c'est plus joli
    dfComp=dfComp.reset_index()

    #On supprime la colonne index crée à la suite du reset index, axis par défaut 1 et inplace veut dire qu'on va affecter ce changement à la variable df n'est pas modifiée
    dfComp.drop(['index'], axis=1, inplace=True)
    
    
    #on ajoute une colonne pour calculer le taux de retour joueur pour chaque match avec les cotes de B365
    #de plus on calcule le benefice net ou la perte net d'un paris sur marseille
    for k in range(len(dfComp)):
    
        #on calcul pour chaque matche le TRJ, la formule du trj a été trouvée en ligne 
        dfComp.at[k,'Trj%']=100/((1/dfComp.at[k,'B365H'])+(1/dfComp.at[k,'B365D'])+(1/dfComp.at[k,'B365A']))
    
    
    ### AJOUT DES COTES 1N N2 artificielles
    
    dfComp['B365HD']=1/(1/dfComp['B365H']+1/dfComp['B365D'])
    dfComp['B365DA']=1/(1/dfComp['B365D']+1/dfComp['B365A'])
    dfComp['B365HA']=1/(1/dfComp['B365H']+1/dfComp['B365A'])
    
    ### AJOUT DES   colonnes de probalites des cotes , on enleve la marge du bookmaker sur les cotes et on calcul la proba
    dfComp['pbB365H']=1/(dfComp['B365H']*100/dfComp['Trj%'])
    dfComp['pbB365D']=1/(dfComp['B365D']*100/dfComp['Trj%'])
    dfComp['pbB365A']=1/(dfComp['B365A']*100/dfComp['Trj%'])
    dfComp['pbB365HD']=1/(dfComp['B365HD']*100/dfComp['Trj%'])
    dfComp['pbB365DA']=1/(dfComp['B365DA']*100/dfComp['Trj%'])
    
    
    

    ### ON RENVOIE LE RESULTAT DE LA FONCTION QUI EST UN BEAU DATAFRAME A ANALYSER
    
# - Date : date du match au format YYYYMMDD (int)
# - HomeTeam : équipe à domicile
# - AwayTeam : équipe à l'extérieur
# - FTR : Full Time Result (H = home win, D = draw, A = away win)
# - B365H : cote victoire domicile (Bet365)
# - B365D : cote match nul (Bet365)
# - B365A : cote victoire extérieur (Bet365)
# - Saison : saison du fichier source
# - Trj% : taux de retour joueur calculé
# - B365HD : cote combinée Home ou Draw
# - B365DA : cote combinée Draw ou Away
# - B365HA : cote combinée Home ou Away
# - pbB365H : probabilité implicite corrigée (Home)
# - pbB365D : probabilité implicite corrigée (Draw)
# - pbB365A : probabilité implicite corrigée (Away)
# - pbB365HD : probabilité implicite combinée (Home/Draw)
# - pbB365DA : probabilité implicite combinée (Draw/Away)
#
# =========================
    return(dfComp)



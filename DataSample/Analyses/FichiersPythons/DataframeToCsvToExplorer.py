# -*- coding: utf-8 -*-
"""
Created on Mon Apr  6 15:15:11 2026

@author: kulekci antoine
"""

import os
import pandas as pd
from datetime import datetime

def export_df_to_csv(df: pd.DataFrame, folder_path: str, file_name: str):
    """
    Exporte un DataFrame en CSV dans le dossier en parametre r"C:..."

    """

    # Créer le dossier s'il n'existe pas
    os.makedirs(folder_path, exist_ok=True)
    
    #check filename fini par csv sinon on rajoute
    if not file_name.endswith(".csv"):
        file_name += ".csv"

    # Chemin complet du fichier
    file_path = os.path.join(folder_path, file_name)

    # Exporter en CSV
    df.to_csv(file_path, index=False, encoding='utf-8')

    print(f" DataFrame exporté avec succès : {file_path}")
    return file_path


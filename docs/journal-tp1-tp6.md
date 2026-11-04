# Journal de bord du binôme : TP1 à TP6

**Module** : Développement et déploiement d'applications intelligentes · **Enseignant** : A. Larhlimi

| | Membre A | Membre B |
| --- | --- | --- |
| Nom | Siham Bouharfe | Amal Igoulalen |
| Compte GitHub | Siham-Bouharfe | amaligoulalen |

**Dépôt** : https://github.com/Siham-Bouharfe/sentiment_app_Bouharfe_a_Igoulalen_b

## Comment remplir ce journal

Ce fichier se place sous `docs/journal-tp1-tp6.md`, et les captures d'écran dans `docs/captures/`.

Après chaque contrôle, remplir les quatre rubriques :
1. **Obtenu** : coller les lignes utiles de la sortie (pas tout le terminal).
2. **Conforme** : cocher `[x]` si le résultat est celui attendu.
3. **Commentaire** : deux ou trois phrases (ce que le résultat montre, cause et correction si écart).
4. **Capture** : enregistrer l'image sous le nom exact indiqué, dans `docs/captures/`.

---

## TP1 : cadrer l'application et préparer l'environnement

### T4 · L'environnement du membre B (membre B)

```powershell
git clone https://github.com/Siham-Bouharfe/sentiment_app_Bouharfe_a_Igoulalen_b.git sentiment-app
cd sentiment-app
py -3.11 -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python scripts/check_setup.py

**Attendu** : `0 erreur(s)` au diagnostic.

**Obtenu** :

```text
Résultat : 0 erreur(s), 0 avertissement(s)
Tout est en place.             

---

## TP6 : packager l'application

### Membre B, après le TP6

```powershell
git pull
pip install -e .
python -m pytest -q
sentiment --version
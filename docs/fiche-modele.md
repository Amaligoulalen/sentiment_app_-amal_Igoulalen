# Fiche modèle — sentiment-app 0.6.0

## 1. Identité
- Nom : tfidf-logreg
- Version : 0.6.0
- Date : 2026-11-04
- Fichier : models/sentiment.joblib

## 2. Usage prévu
Classer un avis client en français comme POSITIVE, NEGATIVE ou INDETERMINE.

## 3. Usages exclus
- Ne pas l'utiliser sur d'autres langues que le français.
- Ne pas l'utiliser pour une décision automatique sans relecture humaine.

## 4. Données d'entraînement
- Jeu de démonstration : 290 avis (145 positifs, 145 négatifs).
- Alternative : Allociné, 20 000 avis (via `python src/train.py --allocine`).

## 5. Performances mesurées
- F1 macro : 0.879 (seuil 0.85).
- Rappel des négatifs : 0.931.
- Source : `models/metrics.json`.

## 6. Limites connues
- Le sac de mots ignore l'ordre : les avis mitigés avec retournement (« sauf que… ») sont mal classés.

## 7. Biais mesurés
- Avis avec retournement : exactitude 0.588 (contre 1.000 pour les avis directs).

## 8. Explicabilité
- Les termes les plus influents sont disponibles via `python src/expliquer.py` (SHAP).

## 9. Conditions d'usage
- Les avis INDETERMINE doivent être relus par un humain.

## 10. Maintenance
- Réentraîner avec `python src/train.py` (ou `--allocine`).
- Mettre à jour cette fiche après chaque réentraînement.
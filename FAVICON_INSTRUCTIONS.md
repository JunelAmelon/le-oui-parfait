# Instructions pour Créer les Favicons

Pour créer les favicons à partir du logo `logo-horizontal.png`, suivez ces étapes :

## Option 1 : Utiliser un Générateur en Ligne (Recommandé)

1. Allez sur https://realfavicongenerator.net/
2. Uploadez votre fichier `public/logo-horizontal.png`
3. Ajustez les paramètres si nécessaire
4. Téléchargez le package généré
5. Extrayez tous les fichiers dans le dossier `public/`

## Option 2 : Créer Manuellement avec un Éditeur d'Images

### Fichiers à Créer :

1. **favicon.ico** (32x32px)
   - Ouvrez `logo-horizontal.png` dans un éditeur d'images
   - Redimensionnez à 32x32 pixels
   - Exportez en format .ico

2. **favicon-16x16.png** (16x16px)
   - Redimensionnez le logo à 16x16 pixels
   - Exportez en PNG

3. **favicon-32x32.png** (32x32px)
   - Redimensionnez le logo à 32x32 pixels
   - Exportez en PNG

4. **apple-touch-icon.png** (180x180px)
   - Redimensionnez le logo à 180x180 pixels
   - Exportez en PNG

5. **favicon.svg** (Optionnel mais recommandé)
   - Convertissez le logo en format SVG vectoriel
   - Cela permet un affichage net à toutes les tailles

## Placement des Fichiers

Tous les fichiers favicon doivent être placés dans le dossier `public/` à la racine du projet :

```
public/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon.svg
├── apple-touch-icon.png
└── logo-horizontal.png
```

## Vérification

Après avoir créé et placé les fichiers :
1. Redémarrez le serveur de développement
2. Ouvrez votre site dans le navigateur
3. Vérifiez que le favicon apparaît dans l'onglet du navigateur
4. Testez sur différents navigateurs (Chrome, Firefox, Safari, Edge)

## Note Importante

Les fichiers favicon ont déjà été configurés dans `app/layout.tsx`. Il vous suffit de créer les fichiers images et de les placer dans le dossier `public/`.

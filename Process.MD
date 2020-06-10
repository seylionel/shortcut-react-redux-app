- [x] Afficher les logos des logiciels dans les cards sur la page d'accueil

Pour afficher les logos j'ai ajouter l'url de l'api dans la balise src du composant shortcutCard. L'url étant trop longue
j'ai mis le code dans une variable d'environnement. Dans .env.local j'ai ajouté une variable qui indique le path des 
logo. J'ai  J'ai enfin mis les card en forme dans un fichier scss.



- [x] N'afficher que les 6 derniers raccourcis ajoutés sur la page d'accueil

Pour afficher les 6 derniers racc, il a fallu se baser sur le created_at. Recupérer un l'url du created at dans l'api. et le
la regler sur desc.

- [ ] Ajouter un lien pour afficher les détails d'un raccourcis



- [ ] Créer une nouvelle page affichant les détails d'un raccourcis
- [ ] Afficher la liste des logiciels sur la page "Logiciels"
- [ ] Pouvoir cliquer sur un logiciel et afficher en dessous la liste des raccourcis liés à ce logiciel
- [ ] Afficher un formulaire sur la page "Ajouter un raccourci"
- [ ] Enregistrer le nouveau raccourci en base de données lorsque le formulaire est validé
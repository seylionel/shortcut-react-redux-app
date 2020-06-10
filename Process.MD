- [x] Afficher les logos des logiciels dans les cards sur la page d'accueil

Pour afficher les logos j'ai ajouter l'url de l'api dans la balise src du composant shortcutCard. L'url étant trop longue
j'ai mis le code dans une variable d'environnement. Dans .env.local j'ai ajouté une variable qui indique le path des 
logo. J'ai  J'ai enfin mis les card en forme dans un fichier scss.



- [x] N'afficher que les 6 derniers raccourcis ajoutés sur la page d'accueil

Pour afficher les 6 derniers racc, il a fallu se baser sur le created_at. Recupérer un l'url du created at dans l'api. et le
la regler sur desc.

- [ ] Ajouter un lien pour afficher les détails d'un raccourcis

Pour ajouter un lien il est nécéssaire d'ajouter un link via react router dans autour du bouton de voir plus.
La route est précisée dans app.js

- [ ] Créer une nouvelle page affichant les détails d'un raccourcis

On crée un composant qui stockera les details par ID. Grâce à nos données chargés dans props et shortcut réalisé dans le container
on peut afficher les données souhaité à l'écran en passant par le render.

on souhaite récupérer les parametre de l'url avec match Params et on sélectionne les propriété qui nous intéresse avec OwnProps
parsint va analyser les données et s'il trouve un entier il la renvoie.Ici il trouve l'ID 9 donc il la renvoie.
on defini une action. Avc un find on récupère la valeur du premier élément trouvé dans le tableau. On place cet éléments dans
une variable shortcut. On stock tout cela dans dans shortcuts qui est un objet. On passe tout cela dans le reducer
qui enverra des informations au state. On stock le tout dans une variable shortcut qui retournera à la fonction MapstattoProps.


- [ ] Afficher la liste des logiciels sur la page "Logiciels"



- [ ] Pouvoir cliquer sur un logiciel et afficher en dessous la liste des raccourcis liés à ce logiciel




- [ ] Afficher un formulaire sur la page "Ajouter un raccourci"
- [ ] Enregistrer le nouveau raccourci en base de données lorsque le formulaire est validé
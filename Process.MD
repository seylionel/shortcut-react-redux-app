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
on defini une action. Avc un find on récupère le raccourcis qui correspond à l'id. On place cet éléments dans
une variable shortcut. On stock tout cela dans dans shortcuts qui est un objet. On passe tout cela dans le reducer
qui enverra des informations au state. On stock le tout dans une variable shortcut qui retournera à la fonction MapstattoProps.


- [ ] Afficher la liste des logiciels sur la page "Logiciels"

Pour afficher la liste des logiciels, j'ai créé un container permettant de récupérer les données du store. Une fois les données récupéré j'ai *
créé un composant permettant de les utiliser. On va récupérer les données de l'objet software. Enfin on va maper les données pour afficher la 
tous les logiciels.

- [ ] Pouvoir cliquer sur un logiciel et afficher en dessous la liste des raccourcis liés à ce logiciel

Tout d'abord il faut créer un container. Dans ce container on fait appelle à l'id grâce à match.params.
Puis on demande de renvoyer dans la variable shortcuts les données de la clé étrangère software_id. Donc on recherche son id.
(software.id).
Le filter permet de filtrer les données en ne récupérant que celles se rapportant à la clée étrangère. Ici il s'agit des shortcuts
de software.


- [ ] Afficher un formulaire sur la page "Ajouter un raccourci"

Il suffit de rajouter des input. L'objectif sera de stocker les données entrée dans le state de l'appli. Avec un constructor on va
déclarer un state initiale. Dans le state, on va ajouter plusieurs valeurs. Dans le render on associe les champs du formulaire au state et on récupère
les valeur dans une constante et on les ajoute dans les values. Au chargement de l'appli les champs pourraient éventuellement être prérempli.

Pour modifier le state en tapant des données dans l'imput, il a fallut rajouter handlechange pour gérer les changement. 
On récupère l'évènement en ciblant la value.

Chaque doit avoir un attribut name sinon la valeur qui sera retournée sera undefined on copie les valeurs du state initial.
On crée un Onechange dans l'input pour récuperer l'event. 
Maintenant les valeurs seront stocké dans le state du composant et non dans le store.

- [ ] Enregistrer le nouveau raccourci en base de données lorsque le formulaire est validé

Pour gérer l'ation, on doit réaliser des fetch,  donc envoyer des données à l'api.
Dans actions.js, on crée des constante pour gérer diff cas(en cours, echec, succes)

Le fetch se fait au niveau de addShortut. Le fetch est une fonction asynchrone fonc on fera un dispatch pour appeler add et app les autre fonction.on recup du json de lapi
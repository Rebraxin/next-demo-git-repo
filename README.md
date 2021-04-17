# Application permettant de chercher des reposotiries depuis l'API Github

Ceci est une démo de [Next.js](https://nextjs.org/) projet "bootstrapped" avec [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Cette app a pour objectif de montrer les possibilitées qu'offre **React** pour faire face aux problématiques **SEO**/**Référencement**.

## Pour démarrer le Projet

Premièrement, installer les dépendences :

```bash
npm install
# ou
yarn
```

Ensuite, démarrer le serveur de developpement :

```bash
npm run dev
# ou
yarn dev
```

Ouvrir le navigateur et se rendre a l'adresse [http://localhost:3000](http://localhost:3000) pour avoir le rendu.

Le point d'entrée de l'application se trouve dans `src/pages/_app.js`. L'application se met à jour une fois les modifications sauvegardées.

## Listes des dépendances présentes

- [Bulma](https://bulma.io/) petite surcouche css pour une intégration simple et rapide.

- [Axios](https://axios-http.com/) pour la gestion des requêtes sur l'API de github.

- [Sass](https://sass-lang.com/) utilisé pour la création de modules de styles en lien direct avec son composant.

- [Nprogress](https://ricostacruz.com/nprogress/) pour améliorer l'UX au chargement des composants.

- [React-icons](https://react-icons.github.io/react-icons/) pour les différents icones rencontrés sur cette app.

- [Next-Seo](https://github.com/garmeeh/next-seo) permet de gérer le titre des différentes pages du site, de façon dynamique et il est possible d'ajouter les meta pour Facebook, Twitter et bien plus...

## Points que je souhaitais mettre en avant

### **Rendu SSR** :

Au chargement de la page d'accueil, on peut tout de suite s'appercevoir de la notion de **SSR**, il suffit de faire un `CTRL + U` et l'on peut voir que toutes nos balises **HTML** avec son **contenu** à l'intérieur.

Nom d'un repo coté front

![Dans l'UI](/public/img/ssr_ui.png)

Nom du même repo dans le code source

![Dans le code source](/public/img/ssr_source.png)

### **Requêtes Optimisées** :

Suppression des requêtes devenu obsolète par une nouvelle requête sur le même endpoint. Ce qui pourrait être une source économique sur l'utilisation de moteur de recherches (Algolia) payant avec un plan au nombres de requêtes.

![Network XHR](/public/img/axios_xhr.png)

### **API Privée** :

NexJS possède sa propre API ce qui permet de masquer les **tokens** ou **données senssible** des configs de requêtes dans les **Headers** souvent encodés en Base64 dans les Authorization. Après ce traitement, plus rien n'apparait.

![Request Headers](/public/img/headers_req.png)

### **Next SEO** :

Un léger aperçu de ce que propose cette dépendances. On peut définir une config par défaut, puis l'étendre ou l'écraser sur les différentes pages du site.

```javascript
<NextSeo
  title="Using More of Config"
  description="This example uses more of the available config options."
  canonical="https://www.canonical.ie/"
  openGraph={{
    url: 'https://www.url.ie/a',
    title: 'Open Graph Title',
    description: 'Open Graph Description',
    images: [
      {
        url: 'https://www.example.ie/og-image-01.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      },
      {
        url: 'https://www.example.ie/og-image-02.jpg',
        width: 900,
        height: 800,
        alt: 'Og Image Alt Second',
      },
      { url: 'https://www.example.ie/og-image-03.jpg' },
      { url: 'https://www.example.ie/og-image-04.jpg' },
    ],
    site_name: 'SiteName',
  }}
  twitter={{
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  }}
/>
```

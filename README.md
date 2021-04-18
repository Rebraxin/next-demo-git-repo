# Application permettant de chercher des reposotiries depuis l'API Github

Ceci est une démo de [Next.js](https://nextjs.org/) projet "bootstrapped" avec [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Cette app a pour objectif de montrer les possibilitées qu'offre **React** pour faire face aux problématiques **SEO**/**Référencement**.

## Pour démarrer le Projet

Premièrement, paramétrer ses variables d'environnements :

Dupliquer fichier `.env.sample` puis le renomer `.env.local`, ensuite modifier les valeurs de chaque variable afin d'être connecté a l'API github

Ensuite, installer les dépendences :

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

### **Router** :

Pas de router a configurer, NextJS créé ses propres routes en fonction de l'arborescence des fichiers/dossiers se trouvant dans **/pages/**

### **Rendu SSR** :

Au chargement de la page d'accueil, on peut tout de suite s'appercevoir que la notion de **SSR** est respecté. Il suffit pour cela d'ajouter au navigateur Chrome l'extension [Quick Source Viewer](https://chrome.google.com/webstore/detail/quick-source-viewer/cfmcghennfbpmhemnnfjhkdmnbidpanb) et d'inspecter le code a l'aide de cette extension. Ceci permet un gain de performance et surtout un meilleur référencement par les _web crawlers_.

Profil d'un utilisateur trouvé depuis l'interface

![Dans l'UI](/public/img/ssr_ui.png)

Balises **HTML** et **Datas** bien injectées dans le DOM

![Dans le code source](/public/img/ssr_source.png)

### **Requêtes Optimisées** :

Suppression des requêtes devenues obsolètes par une nouvelle requête sur le même endpoint. Ce qui pourrait être une source économique sur l'utilisation de moteur de recherches (Algolia) payant avec un plan au nombres de requêtes.

![Network XHR](/public/img/axios_xhr.png)

### **API Routes** :

NexJS possède sa propre API ce qui permet de masquer les **tokens** ou **données senssible**. Plus rien n'est visible dans le _Header_ lors des requêtes.

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

Elle permet également d'optimiser les pages aux [résultats enrichis](https://search.google.com/test/rich-results?utm_campaign=devsite&utm_medium=jsonld&utm_source=article)

```javascript
<>
  <h1>Product JSON-LD</h1>
  <ProductJsonLd
    productName="Executive Anvil"
    images={[
      'https://example.com/photos/1x1/photo.jpg',
      'https://example.com/photos/4x3/photo.jpg',
      'https://example.com/photos/16x9/photo.jpg',
    ]}
    description="Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height."
    brand="ACME"
    color="blue"
    manufacturerName="Gary Meehan"
    manufacturerLogo="https://www.example.com/photos/logo.jpg"
    material="steel"
    slogan="For the business traveller looking for something to drop from a height."
    disambiguatingDescription="Executive Anvil, perfect for the business traveller."
    releaseDate="2014-02-05T08:00:00+08:00"
    productionDate="2015-02-05T08:00:00+08:00"
    purchaseDate="2015-02-06T08:00:00+08:00"
    award="Best Executive Anvil Award."
    reviews={[
      {
        author: {
          type: 'Person',
          name: 'Jim',
        },
        datePublished: '2017-01-06T03:37:40Z',
        reviewBody:
          'This is my favorite product yet! Thanks Nate for the example products and reviews.',
        name: 'So awesome!!!',
        reviewRating: {
          bestRating: '5',
          ratingValue: '5',
          worstRating: '1',
        },
        publisher: {
          type: 'Organization',
          name: 'TwoVit',
        },
      },
    ]}
    aggregateRating={{
      ratingValue: '4.4',
      reviewCount: '89',
    }}
    offers={[
      {
        price: '119.99',
        priceCurrency: 'USD',
        priceValidUntil: '2020-11-05',
        itemCondition: 'https://schema.org/UsedCondition',
        availability: 'https://schema.org/InStock',
        url: 'https://www.example.com/executive-anvil',
        seller: {
          name: 'Executive Objects',
        },
      },
      {
        price: '139.99',
        priceCurrency: 'CAD',
        priceValidUntil: '2020-09-05',
        itemCondition: 'https://schema.org/UsedCondition',
        availability: 'https://schema.org/InStock',
        url: 'https://www.example.ca/executive-anvil',
        seller: {
          name: 'Executive Objects',
        },
      },
    ]}
    mpn="925872"
  />
</>
```

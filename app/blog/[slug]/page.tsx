import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';

const articlesData: Record<string, {
  title: string;
  date: string;
  author: string;
  image: string;
  category: string;
  content: {
    intro: string;
    sections: { title: string; text: string }[];
  };
}> = {
  'prix-wedding-planner-ile-de-france': {
    title: 'Prix wedding planner Île-de-France : combien ça coûte vraiment ? ',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/alliance.jpg',
    category: 'TARIFS',
    content: {
      intro:
        'En Île-de-France, le prix d’une wedding planner dépend surtout de la formule choisie. L’objectif n’est pas seulement “d’organiser”, mais de sécuriser le budget, le planning et la sérénité jusqu’au jour J.',
      sections: [
        {
          title: 'Réponse directe (simple)',
          text: 'Les formules les plus courantes sont : coordination du jour J (pour vivre la journée sans gérer), organisation partielle (si tu as commencé mais tu veux reprendre le contrôle), et organisation clé en main (pilotage complet). Le “bon” prix dépend du niveau de complexité et de délégation.',
        },
        {
          title: 'Ce que beaucoup de couples sous-estiment',
          text: 'Charge mentale, erreurs de timing, budget qui “fuit” par petites dépenses, tensions et imprévus : c’est rarement l’organisation “en soi” qui est difficile, mais l’enchaînement des détails et la logistique finale.',
        },
        {
          title: 'La solution la plus rentable (selon ton cas)',
          text: 'Si tu veux être sereine le jour J : coordination. Si tu es bloquée : organisation partielle. Si tu veux gagner du temps et éviter les erreurs : clé en main. L’idée : choisir la formule qui réduit ton stress et sécurise ton planning.',
        },
      ],
    },
  },
  'coordination-jour-j-mariage-prix': {
    title: 'Coordination jour J : prix + ce qui est inclus (et ce que tu risques sans)',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/mairie.jpg',
    category: 'JOUR J',
    content: {
      intro:
        'La coordination du jour J est la solution idéale si tu as déjà réservé tes prestataires mais que tu veux une journée fluide, sans retards, sans stress et sans sollicitations permanentes.',
      sections: [
        {
          title: 'Ce qui est inclus (dans une coordination sérieuse)',
          text: 'Reprise du déroulé, échanges et brief prestataires, point logistique, plan B, et présence le jour J pour piloter le timing et gérer les imprévus.',
        },
        {
          title: 'Ce que tu risques sans',
          text: 'Retards en chaîne, prestataires qui te sollicitent, imprévus sans plan B, et proches qui “travaillent” au lieu de profiter. Résultat : une journée moins vécue, plus gérée.',
        },
        {
          title: 'Pourquoi c’est rentable',
          text: 'Parce que ça protège ton énergie et ton expérience. Le jour J, ton rôle est de vivre, pas de résoudre des problèmes.',
        },
      ],
    },
  },
  'organisation-mariage-cle-en-main-prix': {
    title: 'Organisation de mariage clé en main : prix, étapes, et pour qui c’est fait',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/mariage-moment.jpg',
    category: 'ORGANISATION',
    content: {
      intro:
        'La clé en main est faite pour les couples qui veulent un mariage élégant sans charge mentale : une méthode, des décisions plus rapides, et une exécution sécurisée.',
      sections: [
        {
          title: 'Réponse directe',
          text: 'Le prix dépend du niveau de complexité (budget, invités, lieu, scénographie), du temps restant et du niveau de délégation. En échange : tu gagnes du temps et tu réduis les erreurs.',
        },
        {
          title: 'Les problèmes cachés quand on fait seul',
          text: 'Prestataires réservés trop tard, budget non piloté, déroulé incohérent, logistique sous-estimée et décisions prises dans l’urgence.',
        },
        {
          title: 'Ce que la clé en main sécurise',
          text: 'Budget, rétroplanning, sélection prestataires, scénographie, coordination et plan B. Tu gardes la vision, on gère l’exécution.',
        },
      ],
    },
  },
  'wedding-planner-essonne-91-tarifs': {
    title: 'Wedding planner Essonne (91) : tarifs + comment choisir la bonne',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/couple.jpg',
    category: 'LOCAL',
    content: {
      intro:
        'En Essonne, les tarifs varient selon la formule (jour J, partielle, clé en main). Le plus important est de choisir une méthode claire et un accompagnement qui te rassure.',
      sections: [
        {
          title: 'Réponse directe',
          text: 'Coordination jour J = le plus accessible. Organisation partielle = structure et reprise. Clé en main = pilotage complet. Le bon choix dépend de ton avancement et de ton besoin de délégation.',
        },
        {
          title: 'Comment choisir sans se tromper',
          text: 'Demande une méthode (rétroplanning, points de contrôle), vérifie ce qui est inclus (présence, limites, plan B), et choisis quelqu’un avec qui tu te sens en confiance.',
        },
        {
          title: 'La vraie différence',
          text: 'Une organisation plus fluide et moins d’erreurs. Et surtout : une journée vécue pleinement.',
        },
      ],
    },
  },
  'wedding-planner-ris-orangis-tarifs-disponibilite': {
    title: 'Wedding planner Ris-Orangis : tarifs et disponibilité',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/feu-artifice-lanternes-mariage.jpg',
    category: 'LOCAL',
    content: {
      intro:
        'La question la plus fréquente : “êtes-vous disponible pour ma date ?”. Ensuite : quelle formule me correspond (jour J, partielle, clé en main) ? Voici une réponse claire.',
      sections: [
        {
          title: 'Réponse directe',
          text: 'Les tarifs varient selon la formule et le niveau d’accompagnement. Le bon choix est celui qui te retire de la charge mentale et sécurise ton déroulé.',
        },
        {
          title: 'Pourquoi c’est rentable',
          text: 'Tu évites les erreurs de timing, tu gagnes du temps sur les relances/décisions, et tu avances avec une méthode et un plan B.',
        },
        {
          title: 'Vérifier la disponibilité',
          text: 'Le plus simple : nous écrire avec ta date + ton lieu + ton budget approximatif, et on te répond rapidement.',
        },
      ],
    },
  },
  'budget-mariage-80-invites-ile-de-france': {
    title: 'Quel budget prévoir pour un mariage 80 personnes en Île-de-France ?',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/table mariage.webp',
    category: 'BUDGET',
    content: {
      intro:
        'À 80 invités, le budget dépend surtout du lieu, du traiteur et du niveau de prestation. Le plus important : piloter par priorités et éviter les options ajoutées “au fil de l’eau”.',
      sections: [
        {
          title: 'Les postes qui pèsent le plus',
          text: 'Lieu + traiteur (souvent les plus gros postes), puis photo/vidéo, musique/animation, décoration et logistique (transports, installations).',
        },
        {
          title: 'Les pièges qui font exploser le budget',
          text: 'Options traiteur, déco par petits achats, logistique sous-estimée, réservation tardive et contrats flous.',
        },
        {
          title: 'Solution pro',
          text: 'Une méthode de pilotage : enveloppes par catégorie, marges imprévus, arbitrages et cohérence globale.',
        },
      ],
    },
  },
  'erreurs-budget-mariage': {
    title: 'Les 7 erreurs qui font exploser le budget mariage (et comment les éviter)',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/location-de-salle-de-mariage.jpg.jpeg',
    category: 'BUDGET',
    content: {
      intro:
        'Les budgets explosent rarement “d’un coup”. Ils explosent par accumulation. Voici les erreurs les plus fréquentes et comment les éviter.',
      sections: [
        {
          title: 'Les 7 erreurs fréquentes',
          text: 'Pas de priorités, options traiteur en cascade, logistique oubliée, réservations tardives, déco accumulée, contrats flous, pas de marge imprévus.',
        },
        {
          title: 'Comment les éviter',
          text: 'Piloter par priorités, valider les devis “tout compris”, cadrer les heures et les livrables, et garder une marge dédiée aux imprévus.',
        },
        {
          title: 'Pourquoi une méthode change tout',
          text: 'Quand tout est structuré, tu fais moins d’achats “réflexe” et tu prends des décisions sereines.',
        },
      ],
    },
  },
  'checklist-mariage-12-mois': {
    title: 'Checklist mariage 12 mois : planning simple + éviter la surcharge mentale',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/faire-part.png',
    category: 'ORGANISATION',
    content: {
      intro:
        'Le secret d’une organisation sereine : faire dans le bon ordre. Voici une checklist simple sur 12 mois pour éviter la surcharge mentale.',
      sections: [
        {
          title: 'M-12 à M-9 : cadrer le projet',
          text: 'Budget, style, invités approximatifs et lieu. Ces choix structurent le reste.',
        },
        {
          title: 'M-9 à M-6 : sécuriser les prestataires majeurs',
          text: 'Traiteur, photo/vidéo, musique, cérémonie : réservez tôt pour avoir le choix.',
        },
        {
          title: 'M-6 à J : détails + coordination',
          text: 'Déroulé, logistique, brief prestataires, plan B. C’est là que la coordination jour J devient clé.',
        },
      ],
    },
  },
  'choisir-lieu-mariage-ile-de-france': {
    title: 'Comment choisir un lieu de mariage en Île-de-France (sans se tromper)',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/location-de-salle-de-mariage.jpg.jpeg',
    category: 'LIEUX',
    content: {
      intro:
        'Le lieu décide du budget, du style et de la logistique. Voici une méthode simple et les pièges à éviter pour choisir sereinement en Île-de-France.',
      sections: [
        {
          title: 'Les critères essentiels',
          text: 'Invités + budget d’abord, puis accessibilité, plan B pluie, contraintes horaires, traiteur imposé, logistique et hébergements.',
        },
        {
          title: 'Les pièges cachés',
          text: 'Heures de fin, restrictions musique, coûts additionnels, plan B inexistant, parking insuffisant et trajets compliqués.',
        },
        {
          title: 'Solution pro',
          text: 'Une wedding planner sait quoi vérifier et comment sécuriser les détails qui coûtent cher si tu les découvres trop tard.',
        },
      ],
    },
  },
  'organiser-mariage-civil-et-ceremonie': {
    title: 'Mariage civil + cérémonie : comment organiser sans stress ? ',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/mairie.jpg',
    category: 'ORGANISATION',
    content: {
      intro:
        'Mairie + cérémonie + réception = plus de timing, plus de trajets, plus de risques de retards. La clé : un déroulé solide et un pilotage clair.',
      sections: [
        {
          title: 'La méthode simple',
          text: 'Fixer les horaires non négociables, calculer trajets + marges, construire un déroulé minute par minute, et confier le pilotage le jour J.',
        },
        {
          title: 'Les problèmes cachés',
          text: 'Trajets sous-estimés, invités perdus, retards de préparation, photos écourtées, pas de plan B météo.',
        },
        {
          title: 'Solution pro',
          text: 'Une coordination sécurise le timing, brief les prestataires et gère les imprévus : tu vis, on pilote.',
        },
      ],
    },
  },
  'temps-necessaire-organiser-mariage': {
    title: 'Combien de temps faut-il pour organiser un mariage ? (réponse réaliste)',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/save-the-date.png',
    category: 'ORGANISATION',
    content: {
      intro:
        'La réponse dépend de ta date, ton budget et ton niveau de délégation. Le temps “réel” vient surtout des décisions régulières et de la coordination.',
      sections: [
        {
          title: 'Ce qui prend du temps',
          text: 'Choix du lieu, traiteur, photo/vidéo, scénographie, logistique, rétroplanning et coordination prestataires.',
        },
        {
          title: 'Pourquoi on se retrouve en retard',
          text: 'Décisions repoussées, réservations tardives, et manque de méthode. En Île-de-France, les bons prestataires partent vite.',
        },
        {
          title: 'Solution pro',
          text: 'Une wedding planner accélère : priorités, décisions, méthode, points de contrôle, et sécurisation des étapes.',
        },
      ],
    },
  },
  'devis-wedding-planner-contenu': {
    title: 'Devis wedding planner : que doit contenir une offre sérieuse ?',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/alliance.jpg',
    category: 'TARIFS',
    content: {
      intro:
        'Un devis clair évite 90% des mauvaises surprises. Voici les éléments indispensables à vérifier avant de signer.',
      sections: [
        {
          title: 'Ce qui doit être écrit noir sur blanc',
          text: 'Périmètre exact, rendez-vous, rétroplanning, échanges prestataires, présence le jour J, horaires, limites de prestation, options et hors prestation.',
        },
        {
          title: 'Les offres floues : les risques',
          text: 'Coordination sans reprise de planning, présence limitée non dite, pas de plan B, pas de brief prestataires : tu te retrouves à gérer quand même.',
        },
        {
          title: 'Solution',
          text: 'Choisir une offre qui détaille la méthode et l’exécution, pas uniquement une promesse.',
        },
      ],
    },
  },
  'coordination-jour-j-qui-fait-quoi': {
    title: 'Coordination jour J : qui gère quoi (mariés, témoins, wedding planner)',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/photographe-mariage-en-action.jpg',
    category: 'JOUR J',
    content: {
      intro:
        'Le stress du jour J vient souvent d’une seule chose : personne ne sait qui gère quoi. Voici une répartition simple et efficace.',
      sections: [
        {
          title: 'Le rôle des mariés',
          text: 'Vivre la journée, pas la gérer. Se concentrer sur les moments, pas sur la logistique.',
        },
        {
          title: 'Le rôle des témoins',
          text: 'Soutenir, accompagner, rassurer. Pas piloter les prestataires et le timing.',
        },
        {
          title: 'Le rôle de la wedding planner',
          text: 'Piloter le timing, briefer les prestataires, gérer les imprévus et protéger l’expérience des mariés et des invités.',
        },
      ],
    },
  },
  'mariage-petit-comite-ile-de-france': {
    title: 'Mariage en petit comité en Île-de-France : organisation + budget',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/mariage moment.jpg',
    category: 'INSPIRATION',
    content: {
      intro:
        'Moins d’invités ne veut pas dire moins de travail : il faut structurer l’expérience. En petit comité, on investit surtout sur la qualité et les détails.',
      sections: [
        {
          title: 'Organisation : les clés',
          text: 'Choisir un lieu adapté (pas trop grand), construire un déroulé vivant, et créer des moments forts (accueil, repas, animations légères).',
        },
        {
          title: 'Budget : les pièges',
          text: 'On “upgrade” tout et le budget dérive. Il faut piloter par priorités pour rester cohérent.',
        },
        {
          title: 'Solution pro',
          text: 'Une wedding planner aide à créer une expérience cohérente : lieu, scénographie, prestataires et coordination.',
        },
      ],
    },
  },
  'wedding-planner-vs-organiser-seul': {
    title: 'Wedding planner vs organisation seule : comparaison honnête (coût, stress, erreurs)',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/photographe-mariage-en-action.jpg',
    category: 'CONSEILS',
    content: {
      intro:
        'La comparaison utile n’est pas seulement “avec / sans”, mais coût réel + charge mentale + risques. Voici une comparaison honnête pour décider sans regret.',
      sections: [
        {
          title: 'Organiser seul : quand ça marche',
          text: 'Si tu as du temps, une méthode, et que tu aimes gérer la logistique. Sinon, tu risques de porter toute la charge mentale.',
        },
        {
          title: 'Avec wedding planner : ce que tu achètes',
          text: 'Une méthode, des décisions plus rapides, moins d’erreurs, un budget plus cadré, et une journée vécue pleinement.',
        },
        {
          title: 'Décider sereinement',
          text: 'La wedding planner devient évidente quand tu veux sécuriser budget + planning + expérience, sans t’épuiser.',
        },
      ],
    },
  },
  'creer-liste-invites-sans-stress': {
    title: 'Comment Créer Une Liste d\'Invités Sans Stress',
    date: '28 Décembre 2025',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg',
    category: 'CONSEILS',
    content: {
      intro:
        'Construire une liste d’invités peut vite devenir un sujet sensible. Avec une méthode simple et quelques règles claires, vous pouvez avancer sereinement et éviter les tensions.',
      sections: [
        {
          title: 'Commencer par une vision globale',
          text: 'Définissez votre capacité (lieu + budget) puis listez “sans filtre” toutes les personnes importantes. Ensuite seulement, vous affinerez.',
        },
        {
          title: 'Prioriser par cercles',
          text: 'Créez 3 cercles (incontournables, proches, optionnels). Cela vous aide à trancher si vous devez réduire le nombre final.',
        },
        {
          title: 'Anticiper les équilibres familiaux',
          text: 'Fixez des règles justes (par exemple : mêmes “droits” des deux côtés). Validez ces règles avant d’envoyer les save-the-date.',
        },
      ],
    },
  },
  'fleurs-saison-guide-mariage': {
    title: 'Fleurs de Saison : Le Guide Complet Pour Votre Mariage',
    date: '25 Décembre 2025',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg',
    category: 'DÉCORATION',
    content: {
      intro:
        'Choisir des fleurs de saison permet d’obtenir des compositions plus fraîches, plus cohérentes et souvent plus avantageuses. Voici un guide simple pour faire les bons choix.',
      sections: [
        {
          title: 'Pourquoi la saison compte',
          text: 'Disponibilité, tenue, budget : la saison influence la qualité et le prix. Votre fleuriste pourra aussi proposer des alternatives très proches si une variété est rare.',
        },
        {
          title: 'Créer une palette cohérente',
          text: 'Définissez 2 à 4 couleurs maximum et déclinez-les (bouquet, centres de table, boutonnières). Une palette claire rend l’ensemble plus élégant.',
        },
        {
          title: 'Optimiser le budget',
          text: 'Investissez sur 1 à 2 points forts (arche, allée, table d’honneur) et allégez sur les autres éléments. Effet “waouh” garanti sans exploser les coûts.',
        },
      ],
    },
  },
  'planning-mariage-12-mois': {
    title: 'Planning Mariage : Les 12 Mois Avant le Jour J',
    date: '22 Décembre 2025',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg',
    category: 'ORGANISATION',
    content: {
      intro:
        'Un rétroplanning clair est l’un des meilleurs moyens de réduire le stress et d’éviter les oublis. Voici une trame des étapes clés à 12 mois du mariage.',
      sections: [
        {
          title: 'M-12 à M-9 : cadrer le projet',
          text: 'Budget, style, liste d’invités approximative et choix du lieu : ces décisions structurent tout le reste.',
        },
        {
          title: 'M-9 à M-6 : sécuriser les prestataires',
          text: 'Traiteur, photo/vidéo, musique, officiant : les bons prestataires partent vite. Réservez tôt pour avoir le choix.',
        },
        {
          title: 'M-6 à J-0 : finaliser et coordonner',
          text: 'Déroulé de la journée, plan de table, détails déco, timing : c’est la phase où une coordination du jour J devient très utile.',
        },
      ],
    },
  },
  'mariage-champetre-idees-inspirations': {
    title: 'Mariage Champêtre : Idées et Inspirations',
    date: '20 Décembre 2025',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg',
    category: 'INSPIRATION',
    content: {
      intro:
        'Le style champêtre est intemporel : naturel, chaleureux et élégant. L’idée : une ambiance authentique, des matières brutes et une scénographie maîtrisée.',
      sections: [
        {
          title: 'Les matières',
          text: 'Bois, lin, céramique, fleurs de saison : privilégiez des textures naturelles et un rendu “simple mais chic”.',
        },
        {
          title: 'La déco',
          text: 'Pensez à une signalétique douce, des bougies, des compositions aériennes et des éléments personnalisés pour raconter votre histoire.',
        },
        {
          title: 'L’expérience invités',
          text: 'Coin photo, bar à thème, animation légère : le champêtre marche très bien avec des expériences conviviales.',
        },
      ],
    },
  },
  'couleurs-tendance-mariage-moderne': {
    title: 'Les Couleurs Tendance Pour Un Mariage Moderne',
    date: '18 Décembre 2025',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg',
    category: 'TENDANCES',
    content: {
      intro:
        'Les couleurs donnent immédiatement le ton. Pour un mariage moderne et élégant, l’objectif est de créer une palette harmonieuse et facile à décliner.',
      sections: [
        {
          title: 'Ne pas multiplier',
          text: '2 à 4 couleurs maximum : une couleur principale, une secondaire et 1 à 2 accents. Cela rend le rendu plus haut de gamme.',
        },
        {
          title: 'Adapter à la saison et au lieu',
          text: 'Un lieu très marqué (domaine, château, salle moderne) influence la palette. On ajuste pour garder une cohérence globale.',
        },
        {
          title: 'Décliner sans surcharger',
          text: 'Papeterie, fleurs, rubans, art de la table : on répète la palette par petites touches plutôt que de “tout colorer”.',
        },
      ],
    },
  },
  'discours-mariage-emouvoir-invites': {
    title: 'Discours de Mariage : Comment Émouvoir Vos Invités',
    date: '15 Décembre 2025',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg',
    category: 'CONSEILS',
    content: {
      intro:
        'Un bon discours est simple, sincère et structuré. Voici une méthode pour toucher vos invités sans stress.',
      sections: [
        {
          title: 'Structure en 3 temps',
          text: '1) Remerciements, 2) Anecdote(s) courte(s), 3) Message final. Gardez un fil conducteur et évitez de trop vous disperser.',
        },
        {
          title: 'Durée idéale',
          text: '3 à 6 minutes : suffisamment long pour émouvoir, assez court pour garder l’attention. Répétez une fois à voix haute.',
        },
        {
          title: 'Sincérité + humour léger',
          text: 'Une touche d’humour fonctionne si elle reste bienveillante. Évitez les blagues gênantes ou trop “privées”.',
        },
      ],
    },
  },
  'choisir-lieu-parfait-mariage': {
    title: 'Comment Choisir le Lieu Parfait Pour Votre Mariage',
    date: '15 Janvier 2026',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
    category: 'CONSEILS MARIAGE',
    content: {
      intro: 'Le choix du lieu de réception est l\'une des décisions les plus importantes dans l\'organisation de votre mariage. Il définira l\'ambiance, le style et même le nombre d\'invités que vous pourrez accueillir. Voici nos conseils pour trouver l\'endroit parfait qui correspondra à vos rêves.',
      sections: [
        {
          title: 'Définir Votre Vision',
          text: 'Avant de commencer vos recherches, prenez le temps de discuter avec votre partenaire de ce que vous imaginez pour votre grand jour. Préférez-vous un mariage en intérieur ou en extérieur ? Un cadre champêtre ou urbain ? Une ambiance intime ou une grande célébration ? Ces questions vous aideront à orienter vos recherches et à gagner un temps précieux.'
        },
        {
          title: 'Le Budget à Considérer',
          text: 'Le lieu représente généralement entre 30% et 50% du budget total de votre mariage. N\'oubliez pas d\'inclure dans vos calculs les frais annexes : traiteur imposé ou non, location de matériel, hébergement sur place. Demandez toujours un devis détaillé et vérifiez ce qui est inclus dans le prix de base.'
        },
        {
          title: 'La Capacité et l\'Accessibilité',
          text: 'Assurez-vous que le lieu peut accueillir confortablement tous vos invités, tant pour la cérémonie que pour le repas et la soirée dansante. Pensez également à l\'accessibilité : parking, transports en commun, hébergements à proximité pour vos invités venant de loin.'
        }
      ]
    }
  },
  'tendances-decoration-mariage': {
    title: 'Les Tendances Décoration Mariage Pour Cette Année',
    date: '12 Janvier 2026',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg',
    category: 'TENDANCES',
    content: {
      intro: 'Chaque année apporte son lot de nouvelles tendances en matière de décoration de mariage. Cette année, l\'accent est mis sur l\'authenticité, la durabilité et les touches personnalisées qui rendent chaque célébration unique.',
      sections: [
        {
          title: 'Les Couleurs de l\'Année',
          text: 'Les palettes de couleurs douces et naturelles dominent cette saison. Le terracotta, le vert sauge, le blush et le crème créent des ambiances chaleureuses et élégantes. Les touches de doré ou de cuivre apportent une note de sophistication sans en faire trop.'
        },
        {
          title: 'Le Retour du Naturel',
          text: 'Les compositions florales sauvages et les éléments naturels sont plus populaires que jamais. Herbes séchées, branches d\'olivier, eucalyptus et fleurs des champs créent des décors romantiques et intemporels. L\'éco-responsabilité guide de plus en plus les choix des couples.'
        },
        {
          title: 'La Personnalisation',
          text: 'Les couples cherchent à raconter leur histoire à travers leur décoration. Photos de famille, objets significatifs, références à leur rencontre ou leurs passions communes : chaque détail devient une occasion de partager leur parcours avec leurs invités.'
        }
      ]
    }
  },
  'organiser-demande-mariage-inoubliable': {
    title: 'Organiser Une Demande en Mariage Inoubliable',
    date: '10 Janvier 2026',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg',
    category: 'FIANÇAILLES',
    content: {
      intro: 'La demande en mariage est un moment unique qui restera gravé dans vos mémoires pour toujours. Qu\'elle soit intime ou spectaculaire, l\'essentiel est qu\'elle vous ressemble et qu\'elle touche le cœur de votre partenaire.',
      sections: [
        {
          title: 'Choisir le Bon Moment',
          text: 'Le timing est crucial pour une demande réussie. Choisissez un moment où vous êtes tous les deux détendus et disponibles émotionnellement. Évitez les périodes de stress professionnel ou familial. Un voyage, un anniversaire ou simplement un moment de complicité peuvent être l\'occasion parfaite.'
        },
        {
          title: 'Le Lieu Idéal',
          text: 'Le lieu de votre demande doit avoir une signification pour vous deux. Cela peut être l\'endroit de votre premier rendez-vous, votre restaurant préféré, ou un lieu de rêve que vous avez toujours voulu visiter ensemble. L\'important est que ce soit un endroit où vous vous sentez bien.'
        },
        {
          title: 'Les Détails Qui Font la Différence',
          text: 'Pensez aux petits détails qui rendront ce moment encore plus spécial : des fleurs, une playlist de vos chansons préférées, des photos de vos moments ensemble. Et bien sûr, n\'oubliez pas la bague ! Si vous n\'êtes pas sûr de ses goûts, vous pouvez toujours la choisir ensemble après la demande.'
        }
      ]
    }
  },
  'budget-mariage-conseils': {
    title: 'Budget Mariage : Nos Conseils Pour Bien Gérer',
    date: '8 Janvier 2026',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg',
    category: 'CONSEILS',
    content: {
      intro: 'Gérer le budget de son mariage peut sembler intimidant, mais avec une bonne organisation et quelques astuces, vous pouvez créer la célébration de vos rêves sans vous ruiner.',
      sections: [
        {
          title: 'Établir Vos Priorités',
          text: 'Commencez par définir ce qui compte le plus pour vous. Est-ce la nourriture, la musique, la décoration, ou les photos ? Allouez une plus grande part de votre budget à ces éléments prioritaires et soyez prêts à faire des compromis sur le reste.'
        },
        {
          title: 'Prévoir une Marge de Sécurité',
          text: 'Les imprévus arrivent toujours. Prévoyez une marge de 10 à 15% de votre budget total pour les dépenses inattendues. Cela vous évitera bien des stress de dernière minute.'
        },
        {
          title: 'Négocier et Comparer',
          text: 'N\'hésitez pas à demander plusieurs devis et à négocier. Beaucoup de prestataires sont ouverts à la discussion, surtout si vous réservez en avance ou en basse saison. Comparez toujours les offres en détail pour éviter les mauvaises surprises.'
        }
      ]
    }
  },
  'choisir-robe-mariee-elegance': {
    title: 'Choisir Sa Robe de Mariée Avec Élégance',
    date: '5 Janvier 2026',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg',
    category: 'CONSEILS',
    content: {
      intro: 'La robe de mariée est sans doute la pièce la plus importante de votre tenue le jour J. Voici nos conseils pour trouver celle qui vous fera vous sentir la plus belle.',
      sections: [
        {
          title: 'Commencer Tôt',
          text: 'Idéalement, commencez vos recherches 9 à 12 mois avant le mariage. Les robes sur mesure ou les modifications peuvent prendre plusieurs mois. Cela vous laissera aussi le temps de chercher les accessoires parfaits.'
        },
        {
          title: 'Connaître Sa Morphologie',
          text: 'Chaque silhouette a des coupes qui la mettent particulièrement en valeur. N\'hésitez pas à essayer différents styles, même ceux auxquels vous n\'auriez pas pensé. Vous pourriez être agréablement surprise !'
        },
        {
          title: 'Le Confort Avant Tout',
          text: 'Vous porterez cette robe pendant de longues heures. Assurez-vous de pouvoir vous asseoir, danser et vous déplacer confortablement. Une robe magnifique dans laquelle vous ne pouvez pas bouger gâchera votre journée.'
        }
      ]
    }
  },
  'meilleurs-photographes-mariage': {
    title: 'Les Meilleurs Photographes Pour Votre Jour J',
    date: '2 Janvier 2026',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/3171770/pexels-photo-3171770.jpeg',
    category: 'CONSEILS',
    content: {
      intro: 'Les photos de mariage sont les souvenirs tangibles de votre journée spéciale. Choisir le bon photographe est essentiel pour capturer l\'essence de votre célébration.',
      sections: [
        {
          title: 'Définir Votre Style',
          text: 'Il existe de nombreux styles de photographie de mariage : reportage, artistique, traditionnel, lifestyle... Parcourez différents portfolios pour identifier ce qui vous parle. Votre photographe doit comprendre et partager votre vision.'
        },
        {
          title: 'Rencontrer les Candidats',
          text: 'Une rencontre en personne ou en visioconférence est indispensable. Le feeling avec votre photographe est crucial car il sera à vos côtés toute la journée. Vous devez vous sentir à l\'aise et en confiance.'
        },
        {
          title: 'Vérifier les Détails',
          text: 'Clarifiez tous les aspects pratiques : nombre d\'heures de présence, nombre de photos livrées, délai de livraison, droits sur les images. Un contrat clair évitera tout malentendu.'
        }
      ]
    }
  }
};

const recentPosts = [
  {
    title: 'Comment Choisir le Lieu Parfait',
    date: '15 Jan 2026',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
    slug: 'choisir-lieu-parfait-mariage'
  },
  {
    title: 'Les Tendances Décoration Cette Année',
    date: '12 Jan 2026',
    image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg',
    slug: 'tendances-decoration-mariage'
  },
  {
    title: 'Organiser Une Demande Inoubliable',
    date: '10 Jan 2026',
    image: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg',
    slug: 'organiser-demande-mariage-inoubliable'
  },
  {
    title: 'Budget Mariage : Bien Gérer',
    date: '8 Jan 2026',
    image: 'https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg',
    slug: 'budget-mariage-conseils'
  }
];

const relatedPosts = [
  {
    title: 'Choisir Sa Robe de Mariée Avec Élégance',
    date: '5 Janvier 2026',
    image: 'https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg',
    slug: 'choisir-robe-mariee-elegance'
  },
  {
    title: 'Les Meilleurs Photographes Pour Votre Jour J',
    date: '2 Janvier 2026',
    image: 'https://images.pexels.com/photos/3171770/pexels-photo-3171770.jpeg',
    slug: 'meilleurs-photographes-mariage'
  },
  {
    title: 'Les Tendances Décoration Mariage',
    date: '12 Janvier 2026',
    image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg',
    slug: 'tendances-decoration-mariage'
  }
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = articlesData[params.slug];
  if (!article) {
    return {
      title: 'Blog | Le Oui Parfait',
      description:
        'Conseils, inspirations et tendances pour organiser votre mariage en Île-de-France : lieux, décoration, planning et prestataires.',
    };
  }

  const canonical = `https://leouiparfait.com/blog/${params.slug}`;
  const title = `${article.title.trim()} | Le Oui Parfait`;
  const description = article.content.intro.replace(/\s+/g, ' ').trim().slice(0, 160);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      images: article.image ? [{ url: article.image }] : undefined,
    },
  };
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = articlesData[params.slug];
  if (!article) return notFound();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Header - Purple Background */}
        <section className="bg-[#4B4456] pt-32 pb-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Title */}
              <div className="lg:col-span-2">
                <h1 className="font-baskerville text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  {article.title}
                </h1>
              </div>
              
              {/* Meta Info */}
              <div className="text-white/80 text-sm space-y-1">
                <p className="uppercase tracking-wider text-xs">Par</p>
                <p className="text-white font-medium">{article.author}</p>
                <p className="uppercase tracking-wider text-xs pt-2">Le {article.date}</p>
                <p className="text-[#88b7b5] pt-2">0 Commentaire</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Article Content - Left Side */}
              <div className="lg:col-span-2">
                {/* Featured Image */}
                <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] mb-10">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Introduction */}
                <div className="mb-10">
                  <h2 className="font-baskerville text-2xl lg:text-3xl text-[#4A4A4A] mb-6">
                    Introduction
                  </h2>
                  <p className="text-[#5A5A5A] leading-relaxed text-base lg:text-lg">
                    {article.content.intro}
                  </p>
                </div>

                {/* Content Sections */}
                {article.content.sections.map((section, index) => (
                  <div key={index} className="mb-10">
                    <h3 className="font-baskerville text-xl lg:text-2xl text-[#4A4A4A] mb-4">
                      {section.title}
                    </h3>
                    <p className="text-[#5A5A5A] leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Sidebar - Right Side */}
              <div className="space-y-8">
                {/* Subscribe Box */}
                <div className="bg-white p-6 border-t-4 border-[#88b7b5]">
                  <h3 className="font-baskerville text-xl text-[#4A4A4A] mb-4">
                    S'abonner
                  </h3>
                  <p className="text-sm text-[#5A5A5A] mb-4 leading-relaxed">
                    Rejoignez notre communauté et recevez chaque semaine nos meilleurs conseils. 
                    <span className="text-[#88b7b5]"> Inscrivez-vous</span> maintenant
                  </p>
                  <input
                    type="email"
                    placeholder="Entrez votre email"
                    className="w-full px-4 py-3 border border-gray-200 text-sm mb-3 focus:outline-none focus:border-[#88b7b5]"
                  />
                  <Button className="w-full uppercase tracking-[0.15em] text-xs bg-white text-[#4A4A4A] border border-gray-300 hover:bg-[#88b7b5] hover:text-white hover:border-[#88b7b5] py-3 font-medium transition-all">
                    S'abonner
                  </Button>
                </div>

                {/* Recent Posts */}
                <div>
                  <h3 className="font-baskerville text-xl text-[#4A4A4A] mb-6 pb-2 border-b border-gray-200">
                    Articles Récents
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((post, index) => (
                      <Link 
                        key={index}
                        href={`/blog/${post.slug}`}
                        className="flex gap-4 group"
                      >
                        <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h4 className="text-sm text-[#4A4A4A] leading-snug group-hover:text-[#88b7b5] transition-colors font-medium">
                            {post.title}
                          </h4>
                          <p className="text-xs text-[#88b7b5] mt-1 uppercase tracking-wider">
                            {post.date}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#5A5A5A] mb-8">
              ARTICLES SIMILAIRES
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((post, index) => (
                <Link 
                  key={index}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <div className="relative h-48 overflow-hidden mb-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-baskerville text-lg text-[#4A4A4A] mb-2 group-hover:text-[#88b7b5] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#88b7b5]">
                    {post.date}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

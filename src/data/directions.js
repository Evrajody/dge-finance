import { reactive } from "vue";

export const directions = reactive([
  {
    nom: 'Directeur Général',
    intro: `Mesdames, Messieurs,  <br/> C’est avec un réel plaisir que la Direction Générale de l’Economie met à votre disposition son site internet avec pour principal objectif de rapprocher de chaque usager, l’information économique sur le Bénin.`,
    annonce: `La Direction Générale de l’Economie, faut-il le rappeler, est chargée :`,
    annonceServices: "",
    outro: `Désormais, vous pourrez disposer au travers de ce site internet des rapports et données statistiques actualisés sur l’économie béninoise. Vous aurez également la possibilité de suivre directement en ligne, l’évolution du traitement de vos dossiers, notamment ceux relatifs aux demandes d’agrément soumis par les campagnes d’assurance, les entreprises industrielles, ainsi que les demandes d’accord-cadre entre les Organisations Non Gouvernementales et le Gouvernement.
    <div class="py-5">
      Notre principal ambition est de contribuer à laisser aux générations futures, un Bénin meilleur. Alors, s’il vous plaît, n’hésitez pas à nous soumettre vos idées de politique économique
    </div>
     Ensemble, nous sommes capables de faire du Bénin, le pays de nos rêves.`,
    directeur: {
      prenom: "M. Aristide",
      nom: "MEDENOU",
      image: "https://www.dge.finances.bj/storage/2021/05/DGAE.jpg",
      titre: "Directeur Général de l’Economie (DGE)",
    },
    attributions: [
      {
        content: `de proposer au gouvernement les mesures de politique économique à court et moyen termes, d’évaluer leurs effets sur les principales variables macroéconomiques et monétaires et de suivre leur mise en œuvre ;`
      },

      {
        content: `d’élaborer des rapports périodiques sur la conjoncture économique ainsi que des informations prévisionnelles sur l’évolution économique et financière du Benin ;`
      },
      {
        content: `d’assurer l’analyse des implications à court terme des politiques socio­ économiques et sectorielles ;`
      },

      {
        content: `de faire de la recherche et exploiter les données statistiques y relatives en vue d’une meilleure connaissance de la situation économique, financière et sociale du Benin;`
      },

      {
        content: `de proposer et de suivre l’exécution de la politique d’intégration économique régionale du gouvernement ;`
      },

      {
        content: `de suivre l’évolution du secteur prive en procédant spécifiquement à des analyses de son PIB et de sa structure ;`
      },

      {
        content: `d’assurer les fonctions d’antenne nationale de la Communauté Economique des Etats de l’Afrique de l’Ouest, de l’Union Economique et Monétaire  Ouest Africaine et de tous les autres organismes  d’intégration régionale, d’une part, et de celles de courroie de transmission entre leurs organes exécutifs et les administrations de la République du Benin, d’autre part ;`
      },

      {
        content: `de mener des réflexions sur les voies et moyens pour accélérer le processus d’intégration économique régionale ;`
      },

      {
        content: `de définir et de mettre en c:euvre des actions requ1ses en vue de tirer les avantages liés à l’appartenance du Benin aux organismes d’intégration économique régionale ;`
      },

      {
        content: `d’analyser les répercussions des activités des différents secteurs de la vie économique sur les actions, projets et programmes communautaires et vice versa; `
      },

      {
        content: `d’assurer la surveillance multilatérale des politiques économiques pour le compte des institutions régionales notamment de l’UEMOA et de la CEDEAO ;`
      },
    ],
    services: [],
  },

  {
    nom: 'Directeur Général Adjoint',
    intro: ``,
    annonce: `Le Directeur Général Adjoint de l’Economie, est chargé de`,
    annonceServices: "",
    outro: ``,
    directeur: {
      prenom: "Adéchina Colaholé Elie",
      nom: "IDOHOU",
      image: "https://www.dge.finances.bj/storage/2022/07/IMG_20220228_120723_296.jpg",
      titre: "Directeur Général Adjoint de l’Economie (DGAE)",
    },
    attributions: [
      {
        content: `suppler le Directeur Général en cas d’absence, et diriger la Direction Générale au côté du DGE.`
      }
    ],
    services: [],
  },

  {
    nom: 'Direction de l’Intégration Économique Régionale (DIER)',
    intro: ``,
    annonce: `La DIER a pour mission l’examen des différentes questions d’intégration économique régionale. A ce titre elle est chargée :`,
    annonceServices: `La Direction de l’Intégration Économique Régionale comprend :`,
    outro: `Outre ces services, la Direction de l’Intégration Économique Régionale dispose d’un Secrétariat et d’un Agent Comptable.`,
    directeur: {
      prenom: "M. Armand",
      nom: "SOUNTON",
      image: "https://www.dge.finances.bj/storage/2022/08/DIER.jpeg",
      titre: "Directeur l’Intégration Economique Régionale (DIER)",
    },
    attributions: [
      {
        content: `de la proposition et de la mise en œuvre de la stratégie du Gouvernement en matière d’intégration économique régionale ;`
      },

      {
        content: `des fonctions d’antenne nationale de la Communauté Économique des États de l’Afrique de l’Ouest (CEDEAO), de l’Union Économique et Monétaire Ouest Africaine (UEMOA) et de tous les autres organismes d’intégration régionale d’une part, et de celles de courroie de transmission entre leurs organes exécutifs et les Administrations de la République du Bénin d’autre part ;`
      },

      {
        content: `de la réflexion sur les voies et moyens pour accélérer le processus d’intégration économique ;`
      },

      {
        content: `de la définition et de la mise en œuvre des actions requises en vue de tirer les avantages liés à l’appartenance du Bénin aux organismes d’intégration économique régionale ;`
      },

      {
        content: `de l’analyse des répercussions des activités des différents secteurs de la vie économique sur les actions, projets et programmes communautaires et vice-versa ;`
      },

      {
        content: `de l’animation, avec les autres structures chargées des questions d’intégration Économique ;`
      },

      {
        content: `du suivi de la mise en œuvre des Programmes Economiques Régionaux, notamment le Programme Economique Régional de l’UEMOA et le Programme Communautaire de Développement de la CEDEAO.`
      }

    ],
    services: [
      {
        content: `le Service des Politiques Sectorielles Communautaires (SPSC) ;`,
      },

      {
        content: `le Service des Échanges Commerciaux (SEC) ;`,
      },

      {
        content: `le Service de Suivi des Institutions Communautaires (SSIC).`,
      },
    ],
  },

  {
    nom: 'Direction de la Prévision et de la Conjoncture (DPC)',
    intro: ``,
    annonce: `La Direction de la Prévision et de la Conjoncture est chargée :`,
    annonceServices: `La Direction de la Prévision et de la comprend :`,
    outro: `Outre ces services, la Direction de la Prévision et de la Conjoncture dispose d’un Secrétariat et d’un Agent Comptable.`,
    directeur: {
      prenom: "M. Dona Joseph",
      nom: "AKOWE",
      image: "https://www.dgae.finances.bj/storage/2021/05/Dona.jpg",
      titre: "Directeur de la Prévision et de la Conjoncture",
    },
    attributions: [
      {
        content: `de proposer et de suivre la mise en œuvre de la stratégie économique nationale ;`
      },

      {
        content: `de faire le diagnostic régulier de l’économie et d’en déterminer les implications à court et moyen termes sur les agrégats macroéconomiques et financiers ;`
      },

      {
        content: `de participer à l’élaboration et à l’analyse des agrégats macro­économiques et financiers ;`
      },

      {
        content: `de réaliser les prévisions du cadre macroéconomique, les prévisions financières et les objectifs budgétaires compatibles avec les contraintes économiques en tenant compte des risques budgétaires identifiés ;`
      },

      {
        content: `de participer à l’élaboration, à l’analyse et à la projection de la balance des paiements; `
      },

      {
        content: `d’administrer des bases de données économiques et financières, y compris celles relatives aux risques budgétaires encourus ;`
      },

      {
        content: "de participer à la réalisation des études macro­économiques permettant une meilleure connaissance de l’économie nationale en liaison avec la Direction de la Recherche et des Etudes Stratégiques ainsi que les autres départements ministériels ou institutions ;"
      },

      {
        content: `de coordonner l’élaboration du Document de Programmation Budgétaire et Économique Pluriannuelle (DPBEP), en incluant un rapport annuel sur les risques budgétaires ;`
      },

      {
        content: `d’assurer le Secrétariat Permanent du Comité National de Politique Économique et du Comité National de Coordination ;`
      },

      {
        content: `d’assurer la surveillance multilatérale des politiques économiques pour le compte de la Communauté Économique des États de l’Afrique de l’Ouest (CEDEAO) et de l’Union Économique et Monétaire Ouest Africaine (UEMOA) ;`
      },

      {
        content: `de participer à l’élaboration du budget de l’État.`
      }

    ],
    services: [
      {
        content: `le Service de la Programmation Économique et Financière (SPEF) ;`,
      },

      {
        content: `le Service du Suivi Budgétaire et de l’Analyse Conjoncturelle (SSBAC) ;`,
      },

      {
        content: `le Service des Statistiques et de la Surveillance Multilatérale (SSM) ;`,
      },
    ],
  },

  {
    nom: 'Direction du Suivi des Politiques Sectorielles, Sociales et des Economies Locales (DSPSSEL)',
    intro: ``,
    annonce: `La Direction du Suivi des Politiques Sectorielles, Sociales et des Économies Locales est chargée :`,
    annonceServices: `La Direction du Suivi des Politiques Sectorielles, Sociales et des Économies Locales comprend :`,
    outro: ``,
    directeur: {
      prenom: "M. Assoussia Yves",
      nom: "KOKOU",
      image: "https://www.dge.finances.bj/storage/2022/07/13173740_1289085714454346_1651041446881152763_n.jpg",
      titre: "Directeur du Suivi des Politiques Sectorielles, Sociales et des Economies Locales (DSPSSEL)",
    },
    attributions: [
      {
        content: `de suivre la dynamique des secteurs et filières organisées de l’économie nationale;`
      },

      {
        content: `de contribuer à l’analyse des implications à court terme des nouvelles mesures de politique publique prises dans les ministères sectoriels;`
      },

      {
        content: `d’analyser l’efficacité des instruments de soutien à la promotion des différents secteurs de l’économie;`
      },

      {
        content: `de suivre les réglementations et leur impact sur le fonctionnement des activités tertiaires en vue de suggestions d’amélioration;`
      },

      {
        content: `de participer à la conception et à l’évaluation des politiques sectorielles.`
      },

      {
        content: `de centraliser les informations économiques au niveau décentralisé et déconcentré ;`
      },

      {
        content: "d’élaborer, d’actualiser et d’analyser de façon régulière la cartographie économique des communes ;"
      },

      {
        content: `d’élaborer et de tenir à jour un tableau de bord sur les  potentiels économiques des communes, de les analyser et proposer des axes en vue de leur valorisation pour l’essor des économies locales ;`
      },

      {
        content: `de contribuer à la mesure des indicateurs économiques des collectivités décentralisées ;`
      },

      {
        content: `de produire des périodiques sur l’économie des collectivités décentralisées ;`
      },

      {
        content: `de collecter et d’analyser les actions menées, résultats obtenus, difficultés rencontrées, rôle et dynamique des acteurs dans les secteurs sociaux ;`
      }

    ],
    services: [
      {
        content: `le Secrétariat ;`,
      },

      {
        content: `le Service de Suivi et d’Analyse des Performances Sectorielles ;`,
      },

      {
        content: `le Service du Suivi des politiques Économiques Locales ;`,
      },

      {
        content: `le Service de Suivi des Politiques Sociales.`,
      },
    ],
  },

  {
    nom: 'Direction de la Promotion et de la Coopération Economiques (DPCE)',
    intro: ``,
    annonce: `La Direction de la Promotion et de la Coopération Économiques est chargée :`,
    annonceServices: `La Direction de la Promotion et de la Coopération Économique comprend :`,
    outro: ``,
    directeur: {
      prenom: "M. Noukpo",
      nom: "HOMEGNON",
      image: "https://www.dge.finances.bj/storage/2022/07/IMG-20220721-WA0055.jpg",
      titre: "Directeur de la Promotion et de la Coopération Economique (DPCE)",
    },
    attributions: [
      {
        content: `d’analyser l’évolution de l’environnement des entreprises sur le territoire national et de proposer, au besoin, des solutions correctives;`
      },

      {
        content: `de centraliser et de fournir au secteur privé, les informations nécessaires à la décision d’investir au Bénin et relevant des attributions du Ministère de l’Économie et des Finances ;`
      },

      {
        content: `de procéder à l’étude des doléances adressées par les opérateurs économiques au Ministre de l’Économie et des Finances et de formuler des propositions de mesures à lui soumettre ;`
      },

      {
        content: `de suivre la coopération économique avec les organisations multilatérales telles que l’OMC, la CNUCED, l’UA, etc. ;`
      },

      {
        content: `de contribuer à l’élaboration de la stratégie de mobilisation des ressources financières ;`
      },

      {
        content: `de suivre le processus de ratification des conventions et traités ;`
      },

      {
        content: "de participer aux négociations des accords de partenariat économique (ACP-UE, ZLECAF, etc.) et d’en assurer la coordination au sein du Ministère de l’Économie et des Finances ;"
      },

      {
        content: `de contribuer à la diffusion des décisions et actions ayant des implications sur l’activité des entreprises ;`
      },

      {
        content: `d’appeler l’attention du ministre chargé de l’économie et des finances sur les faits susceptibles de perturber l’activité économique ou de ralentir l’investissement privé ;`
      },

      {
        content: `d’examiner toutes autres questions relevant du domaine de la réglementation et de l’information économique et de faire par voie hiérarchique, des propositions au Ministre, en liaison avec les autres directions techniques des Ministères compétents;`
      },

      {
        content: `d’organiser et de participer, en relation avec d’autres structures, aux actions de promotion de l’économie béninoise;`
      },

      {
        content: `d’identifier les besoins en informations des milieux d’affaires nationaux et internationaux ;`
      },

      {
        content: `de coordonner un cadre d’échanges avec les acteurs du secteur privé ;`
      },

      {
        content: `d’étudier les accords que le Bénin pourrait être amené à signer avec ses partenaires bilatéraux, multilatéraux et autres acteurs non étatiques et de participer au suivi de leur mise en application en collaboration avec les directions techniques des ministères concernés.`
      },

    ],
    services: [
      {
        content: `le Secrétariat ;`,
      },

      {
        content: `le Service du Suivi et de l’Accompagnement du Secteur Privé ;`,
      },

      {
        content: `le Service de la Réglementation et du Suivi des Accords Internationaux ;`,
      },

      {
        content: `le Service des Actions de Promotion Économique.`,
      },
    ],
  },

  {
    nom: 'Direction de la Recherche et des Etudes Stratégiques (DRES)',
    intro: ``,
    annonce: ``,
    annonceServices: ``,
    outro: ``,
    directeur: {
      prenom: "",
      nom: "",
      image: "",
      titre: "",
    },
    attributions: [],
    services: [],
  },
  
  {
    nom: 'Direction de la Gestion des Ressources (DGR)',
    intro: ``,
    annonce: `La Direction de la Gestion des Ressources est chargée de gérer le personnel, le matériel, les affaires financières, l’informatique et le pré­ archivage. A ce titre, elle assure les attributions suivantes :`,
    annonceServices: `La Direction de la Gestion des Ressources comprend :`,
    outro: ``,
    directeur: {
      prenom: "M. A. Mathieu",
      nom: "DOSSOU ",
      image: "https://www.dge.finances.bj/storage/2022/07/IMG_20220228_115104_123.jpg",
      titre: "Directeur de la Gestion des Ressources (DGR)",
    },
    attributions: [
      {
        content: `la confection des états d’effectifs du personnel ;`
      },
      {
        content: `la gestion de la carrière et de la formation des agents ;`
      },
      {
        content: `l’élaboration des propositions budgétaires des dépenses du personnel ;`
      },
      {
        content: `la définition des profils de poste ;`
      },
      {
        content: `la détermination des besoins en ressources humaines ;`
      },
      {
        content: `la gestion du matériel, des stocks, des fournitures et des imprimés techniques ;`
      },
      {
        content: `l’entretien des locaux et des domaines affectés à la Direction Générale de l’Économie ;`
      },
      {
        content: `la gestion des crédits délégués ;`
      },
      {
        content: `l’élaboration du budget prévisionnel de fonctionnement de la DGE ;`
      },
      {
        content: `la gestion et la maintenance du matériel informatique et du site internet de la DGE ;`
      },
      {
        content: `la garantie de la sécurisation formelle, l’authentification et la sauvegarde des documents administratifs et autres productions intellectuelles ;`
      },
      {
        content: `la fluidité et l’accessibilité de l’information électronique ;`
      },
      {
        content: `l’archivage électronique de toute la documentation de la DGE.`
      },

    ],

    services: [
      {
        content: `le Secrétariat ;`,
      },

      {
        content: `le Service des Ressources Humaines ;`,
      },

      {
        content: `le Service des Ressources Financières et du Matériel ;`,
      },

      {
        content: `le Services des Systèmes d’Information.`,
      },
    ],
  },
])


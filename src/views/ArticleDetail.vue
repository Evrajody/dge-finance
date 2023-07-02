<script setup>
import ArticleBanner from '../components/partials/ArticleBanner.vue';
import SolarRoundArrowRightOutline from '../components/icons/SolarRoundArrowRightOutline.vue';
import { fakeArticle } from '../data/article';



</script>

<template>
  <div class="">

    <ArticleBanner :title="fakeArticle[9].title" :image="fakeArticle[5].media" />

    <div class="my-20 mx-auto lg:container">

      <div class="flex flex-col gap-10 lg:flex-row lg:gap-0">

        <div class="px-5 w-full lg:max-w-[60%]">

          <div class="flex flex-wrap gap-3 py-3 border-b-2 border-dashed border-b-gray-300">

            <div class="flex gap-2 pub">
              <span class="text-sm font-semibold text-red-400"> Publié le : </span>
              <span class="text-sm"> 12/05/2002 </span>

            </div>

            <div class="flex gap-2 pub">
              <span class="text-sm font-semibold text-red-400"> Catégorie : </span>
              <span class="text-sm">Economie</span>
            </div>

            <div class="flex gap-2 pub">
              <span class="text-sm font-semibold text-red-400"> Auteur : </span>
              <span class="text-sm">Ben Carter</span>
            </div>


          </div>

          <div class="mt-3 text-justify text-finance-plot">
            <div class="post-content cf entry-content content-spacious">




              <p><strong><em>Point de départ de la success story Wave, le Sénégal occupe une position particulière dans la
                    stratégie de développement de la fintech. Dans cet entretien exclusif, Mandoungou Guile Mbodj,
                    Directeur Général de Wave Sénégal fait le point sur les dernières innovations sur le double canal Bank
                    to Wallet et Wallet to bank. La qualité et la sécurité de la plateforme de mobile money revêtent&nbsp;
                    une importance stratégique.</em></strong></p>



              <hr class="my-5 wp-block-separator has-alpha-channel-opacity">



              <h2 class="my-5 wp-block-heading"><strong>Wave est titulaire d’un agrément de monnaie électronique. Quels
                  sont
                  les principaux services que vous proposez?</strong></h2>



              <p class="has-text-align-justify">Depuis le lancement de nos activités, au Sénégal en 2018, nous avons
                progressivement mis à disposition de nos utilisateurs, les services Mobile money de première génération
                que sont le dépôt, le retrait, le transfert P2P,&nbsp; l’achat de crédit téléphonique, le paiement de
                factures, le paiement marchand. En parallèle, nous sommes dans une dynamique d’amélioration continue, donc
                constamment à l’écoute du marché et des besoins exprimés par nos clients. Ceci nous a permis, par la
                suite, d’introduire des produits dits de deuxième génération, en partenariat avec plusieurs institutions
                financières. Ainsi, nos clients particuliers peuvent désormais recevoir des transferts d’argents
                internationaux depuis la diaspora, directement sur leurs wallets Wave, effectuer des transferts
                transfrontaliers au sein de la Zone UEMOA ou encore, via le Bank-to-Wallet/Wallet-to-Bank, envoyer de
                l’argent de leurs comptes bancaires vers leur compte Wave et inversement.</p>



              <p class="has-text-align-justify">Par ailleurs, nous avons également développé une offre de services B2B
                permettant aux entreprises, ONGs et autres structures publiques de faire des paiements de masse ou de
                digitaliser leur collecte de fonds.&nbsp;</p>



              <p class="has-text-align-justify">Pour finir, nous travaillons activement sur plusieurs autres produits
                financiers innovants qui devraient être lancés en collaboration avec des institutions financières dans le
                court terme à partir de la validation par le régulateur.</p>

            </div>

          </div>



        </div>

        <div class="flex flex-col flex-1 px-3 space-y-6 order-articles">

          <div class="">
            <div class="flex justify-between items-center py-3 px-4 mask">
              <h3 class="text-2xl font-extrabold text-white"> Autres Articles </h3>
              <SolarRoundArrowRightOutline />
            </div>
          </div>


          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="flex gap-3 w-full border-b-4 shadow bg-finance-gray border-b-finance-blue" v-for="i, index in 6">
            <div class="w-24 h-24 image">

              <img :src="fakeArticle[index].media" class="w-full h-full" alt="">
            </div>

            <div class="flex flex-col flex-1 justify-center space-y-2 title">
              <span class="text-sm font-bold text-finance-late line-clamp-2"> {{ fakeArticle[index].title }} </span>

              <div class="flex justify-between w-full text-sm font-medium">
                <a href="#" class="text-bj-green">Lire l'article</a>

                <span class="px-3 text-xs text-finance-late">12/03/2023</span>

              </div>

            </div>


          </div>



        </div>



      </div>


    </div>

  </div>
</template>
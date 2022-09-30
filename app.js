
//Define a random number to select a item in an array
const randonNumbers = (length)=>{
    return Math.floor(Math.random()*length)
};

//set up different type of astro sentence generator
const typeOfAstro = ['Amour', 'Argent', 'Travail'];


//set up different sentence for each type of astro theme
const astroLove = [
'Le grand amour est pour bientôt, montrez un peu de patience',
'La prochaine fois, réfléchissez à deux foix avant de rentrer dans l.e.a voisin.ine',
'Si ça ne marche toujours pas, remetez-vous en question ou achètez-vous un chat',
'Tous vas bien de votre couple, vous pouvez continuer à manger de la pizza devant la télé ou vous grattant les parties génitales'
];
const astroMoney = [
'Vous êtes pleins aux AS, profitez de votre chance pour mettre votre argent en bourse',
'Ne perdez pas courrage, d\'ici quelques années, vous aurez enfin votre augmentation de salaire pour acheter votre camping car',
"Rien ne va plus, c'est bientot la bankroute, votre dernier salut réside en la chance du loto",
'Situation stable, vous pouvez continuer à acheter des produits bio'
];
const astroJob = [
"Rien a dire, vous serez bientot l'employé du mois",
"Plus que quelques jours, et vous perdrez votre travail ! Ne baissez pas les bras !",
"La chance va vous sourire, apres des années de galère, vous trouverez l'emploi de vos rêve !",
"Vous n'avez plus que deux mois de chommage, dépéchez-vous à trouver une solution !"
];

let typeOfSentence = typeOfAstro[randonNumbers(typeOfAstro.length)];

const sentenceGenerator = (name)=>{
    let typeOfSentence = typeOfAstro[randonNumbers(typeOfAstro.length)];

    const returnSentence= (astro)=>
    {switch(astro){
        case 'Amour':
            return astroLove[randonNumbers(astroLove.length)]
            break;
        case 'Argent':
            return astroMoney[randonNumbers(astroMoney.length)]
            break;
        case 'Travail':
            return astroJob[randonNumbers(astroJob.length)]
            break;
    }}

    return `${typeOfSentence}: ${name}, ${returnSentence(typeOfSentence)}`
}

console.log(sentenceGenerator("Gaetan"));
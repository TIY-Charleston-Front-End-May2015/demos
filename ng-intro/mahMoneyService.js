(function () {
  'use strict';
  angular
    .module('luca')
    .factory('MoneyService',function ($http, $rootScope) {
      var peepUrl = 'http://tiyrest-calweb.rhcloud.com/people';
      var expenditures = [
        {
          item: "balloons",
          qty: 1000,
          price: 20
        },
        {
          item: "surfboard",
          qty: 1,
          price: 700
        },
        {
          item: "oil change",
          qty: 2,
          price: 49.26
        }
      ];
      var peeps = [
{
"id": 0,
"fullName": "Mrs. Candida Roob",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dixchen/128.jpg"
},
{
"id": 1,
"fullName": "Braeden Mueller Jr.",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/psaikali/128.jpg"
},
{
"id": 2,
"fullName": "Fidel Zboncak",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/balakayuriy/128.jpg"
},
{
"id": 3,
"fullName": "Francisco Mante II",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stayuber/128.jpg"
},
{
"id": 4,
"fullName": "Callie Walsh DVM",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/buzzusborne/128.jpg"
},
{
"id": 5,
"fullName": "Hannah Howe",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hfalucas/128.jpg"
},
{
"id": 6,
"fullName": "Fleta Frami",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/haydn_woods/128.jpg"
},
{
"id": 7,
"fullName": "Dell Crist",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/felipecsl/128.jpg"
},
{
"id": 8,
"fullName": "Mario Daniel",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/chaensel/128.jpg"
},
{
"id": 9,
"fullName": "Mona Stark",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/johnsmithagency/128.jpg"
},
{
"id": 10,
"fullName": "Stanton Weimann",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/buzzusborne/128.jpg"
},
{
"id": 11,
"fullName": "Manuela Kunze",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bungiwan/128.jpg"
},
{
"id": 12,
"fullName": "Royal Tremblay",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bublienko/128.jpg"
},
{
"id": 13,
"fullName": "Lavon Ondricka",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/a1chapone/128.jpg"
},
{
"id": 14,
"fullName": "Reina Wehner",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/besbujupi/128.jpg"
},
{
"id": 15,
"fullName": "Ms. Rodolfo Grady",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/0therplanet/128.jpg"
},
{
"id": 16,
"fullName": "Cleora Padberg",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/andytlaw/128.jpg"
},
{
"id": 17,
"fullName": "Kasey Breitenberg",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stan/128.jpg"
},
{
"id": 18,
"fullName": "Susanna Morissette",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/edkf/128.jpg"
},
{
"id": 19,
"fullName": "Carson Conroy V",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/osmanince/128.jpg"
},
{
"id": 20,
"fullName": "Gerson Adams",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/j_drake_/128.jpg"
},
{
"id": 21,
"fullName": "Shayna Kling",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jacksonlatka/128.jpg"
},
{
"id": 22,
"fullName": "Marilie Koch",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ultragex/128.jpg"
},
{
"id": 23,
"fullName": "Sheila Howe",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mahmoudmetwally/128.jpg"
},
{
"id": 24,
"fullName": "Casey Haley",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/danvierich/128.jpg"
},
{
"id": 25,
"fullName": "Loraine West",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/IsaryAmairani/128.jpg"
},
{
"id": 26,
"fullName": "Howell Pollich",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/juamperro/128.jpg"
},
{
"id": 27,
"fullName": "Wilfredo Nitzsche",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ilya_pestov/128.jpg"
},
{
"id": 28,
"fullName": "Philip Kuhlman",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/collegeman/128.jpg"
},
{
"id": 29,
"fullName": "Rosanna Nolan",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ryuchi311/128.jpg"
},
{
"id": 30,
"fullName": "Lyric Yost",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/igorgarybaldi/128.jpg"
},
{
"id": 31,
"fullName": "Misael Corwin",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/petrangr/128.jpg"
},
{
"id": 32,
"fullName": "Arnoldo Rowe",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/xalionmalik/128.jpg"
},
{
"id": 33,
"fullName": "Zack Stracke",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dnezkumar/128.jpg"
},
{
"id": 34,
"fullName": "Elwyn Senger PhD",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/darylws/128.jpg"
},
{
"id": 35,
"fullName": "Tanya Schmeler",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/sreejithexp/128.jpg"
},
{
"id": 36,
"fullName": "Damon Stehr",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kolsvein/128.jpg"
},
{
"id": 37,
"fullName": "Billy Treutel",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ciaranr/128.jpg"
},
{
"id": 38,
"fullName": "Mozell Hilpert V",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/curiousonaut/128.jpg"
},
{
"id": 39,
"fullName": "Mrs. Merritt Romaguera",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ManikRathee/128.jpg"
},
{
"id": 40,
"fullName": "Alexandria Zemlak",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/iamkeithmason/128.jpg"
},
{
"id": 41,
"fullName": "Mallory Ward",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jennyshen/128.jpg"
},
{
"id": 42,
"fullName": "Gerry Keebler",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/Stievius/128.jpg"
},
{
"id": 43,
"fullName": "Tania Gerlach PhD",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/maikelk/128.jpg"
},
{
"id": 44,
"fullName": "Augustine Pfannerstill",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/lowie/128.jpg"
},
{
"id": 45,
"fullName": "Adonis Tillman",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/nsamoylov/128.jpg"
},
{
"id": 46,
"fullName": "Hildegard Klein",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/brajeshwar/128.jpg"
},
{
"id": 47,
"fullName": "Miss Chaz Yundt",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/seyedhossein1/128.jpg"
},
{
"id": 48,
"fullName": "Rashad Eichmann",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/lepetitogre/128.jpg"
},
{
"id": 49,
"fullName": "Miss Hayden Wyman",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/longlivemyword/128.jpg"
},
{
"id": 50,
"fullName": "Mrs. Luisa Stanton",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stefooo/128.jpg"
},
{
"id": 51,
"fullName": "Mr. Garnet Smitham",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/melvindidit/128.jpg"
},
{
"id": 52,
"fullName": "Clay Larson V",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/thiagovernetti/128.jpg"
},
{
"id": 53,
"fullName": "Graciela Eichmann",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dzantievm/128.jpg"
},
{
"id": 54,
"fullName": "Nils Vandervort",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevka/128.jpg"
},
{
"id": 55,
"fullName": "Violet Hartmann",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marciotoledo/128.jpg"
},
{
"id": 56,
"fullName": "Jazmyne Parker",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/lonesomelemon/128.jpg"
},
{
"id": 57,
"fullName": "Orpha Satterfield",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/begreative/128.jpg"
},
{
"id": 58,
"fullName": "Mina Kemmer",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/_kkga/128.jpg"
},
{
"id": 59,
"fullName": "Kamron Anderson",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/brunodesign1206/128.jpg"
},
{
"id": 60,
"fullName": "Eloise Johnson",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vinciarts/128.jpg"
},
{
"id": 61,
"fullName": "Otho Green DVM",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/rdsaunders/128.jpg"
},
{
"id": 62,
"fullName": "Dagmar Gerhold II",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/trueblood_33/128.jpg"
},
{
"id": 63,
"fullName": "Adrienne Hickle",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vikasvinfotech/128.jpg"
},
{
"id": 64,
"fullName": "Reyes Kemmer",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/peterlandt/128.jpg"
},
{
"id": 65,
"fullName": "Mrs. General O'Reilly",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/collegeman/128.jpg"
},
{
"id": 66,
"fullName": "Oleta Tromp",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/souperphly/128.jpg"
},
{
"id": 67,
"fullName": "Delores Jast",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mattlat/128.jpg"
},
{
"id": 68,
"fullName": "Khalil Ledner",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/therealmarvin/128.jpg"
},
{
"id": 69,
"fullName": "Katelin Veum",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/privetwagner/128.jpg"
},
{
"id": 70,
"fullName": "Keyon Runolfsdottir",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bobbytwoshoes/128.jpg"
},
{
"id": 71,
"fullName": "Alden Johnson",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/scottiedude/128.jpg"
},
{
"id": 72,
"fullName": "Ms. Shaniya Bruen",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg"
},
{
"id": 73,
"fullName": "Oscar Welch",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hellofeverrrr/128.jpg"
},
{
"id": 74,
"fullName": "Jaylon Oberbrunner",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vytautas_a/128.jpg"
},
{
"id": 75,
"fullName": "Damion Graham",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/gseguin/128.jpg"
},
{
"id": 76,
"fullName": "Ivah Anderson",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dahparra/128.jpg"
},
{
"id": 77,
"fullName": "Delilah Schiller",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/buryaknick/128.jpg"
},
{
"id": 78,
"fullName": "Mr. Zaria Langosh",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/christianoliff/128.jpg"
},
{
"id": 79,
"fullName": "Destinee Jacobi",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/tanveerrao/128.jpg"
},
{
"id": 80,
"fullName": "Bailee Hermann",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/theonlyzeke/128.jpg"
},
{
"id": 81,
"fullName": "Madge Larson",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/haydn_woods/128.jpg"
},
{
"id": 82,
"fullName": "Mrs. Ruben Volkman",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/AM_Kn2/128.jpg"
},
{
"id": 83,
"fullName": "Beth Kutch",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dansowter/128.jpg"
},
{
"id": 84,
"fullName": "Kale Kuhic",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/thinkleft/128.jpg"
},
{
"id": 85,
"fullName": "Darian Legros",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/duivvv/128.jpg"
},
{
"id": 86,
"fullName": "Kyler Mills",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/amywebbb/128.jpg"
},
{
"id": 87,
"fullName": "Meghan Fahey",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/cbracco/128.jpg"
},
{
"id": 88,
"fullName": "Janiya Brekke",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/timpetricola/128.jpg"
},
{
"id": 89,
"fullName": "Brock Bergstrom",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/sergeyalmone/128.jpg"
},
{
"id": 90,
"fullName": "Jadyn Pfeffer",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/larrygerard/128.jpg"
},
{
"id": 91,
"fullName": "Randy Effertz",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrxloka/128.jpg"
},
{
"id": 92,
"fullName": "Jaden Mosciski",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/juaumlol/128.jpg"
},
{
"id": 93,
"fullName": "Felix Mohr",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/iamglimy/128.jpg"
},
{
"id": 94,
"fullName": "Elmira Brakus",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/klimmka/128.jpg"
},
{
"id": 95,
"fullName": "Godfrey Murphy",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/the_purplebunny/128.jpg"
},
{
"id": 96,
"fullName": "Ernestine Ernser",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/elliotlewis/128.jpg"
},
{
"id": 97,
"fullName": "Delpha Kassulke",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/shinze/128.jpg"
},
{
"id": 98,
"fullName": "Veda Larson",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/spacewood_/128.jpg"
},
{
"id": 99,
"fullName": "Hyman Stroman",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/alagoon/128.jpg"
}
];

      var getExpenditures = function () {
        return expenditures;
      };
      var getPeeps = function () {
        return peeps;
      };

      return {
        get: getExpenditures,
        getPeeps: getPeeps
      };
    });
})();

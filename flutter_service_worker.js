'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "72c67c4c7c774dad80bc96b04e61628c",
".git/config": "ec386c773cc499fc1920f14ad4467bd6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "722847b9c3a7cb36ae1a8ba074643323",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fb09e068abb79743b3d531c75dae48b2",
".git/logs/refs/heads/main": "9ef604d40a173a8a2a5f4c59f412eac4",
".git/logs/refs/remotes/origin/main": "133ac3cc526d2abe1620d86db447a90b",
".git/objects/02/448c52d7957bfe4549dffbb00c6840b814ecc7": "5500fb0434fd0b944e7ef0a3f51a4259",
".git/objects/02/594e000a98726a1a669ed082e356b088377fdb": "ef07728d872c605de3a2fc7740e61087",
".git/objects/03/97794b751d8b284b083a73efd08c7ceb5a72bc": "5c5eec97c6e70bc75fa90aed2f7a0b18",
".git/objects/03/aa003dc4249bf3671f1de0f75ad8216bf42be5": "75adaf437e6f9cba4ccfd7fcac7c898a",
".git/objects/03/e682a0e77850289e3ca239d4e764855ff9623b": "0e7f157e0c3acbb502d582602736607e",
".git/objects/04/5dc0cb4c118addcb4fd1387558f6076a97b150": "174ea674cc3e60ab48e5ebb5b3c66e9a",
".git/objects/04/7045d2381c6f36e663c085a7d81d7f1ad9956a": "38fd77d42d3ce1418b322b0d836be51b",
".git/objects/05/e280e3763e8813afbb8374b233e23e3c764615": "3ba52d7abca25c086845ea62751f2159",
".git/objects/06/014d047f697ddb98d26ab960e3182120058be0": "6af978bd23847ff5d3f8160cdabc6364",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0d/81a9be5c87f8e748c03c4809f4449a4b8cf21c": "8dd7fe9f151ad7b27e01e8cbbca7bd99",
".git/objects/0d/ef042b5df319731bb4cdea6f2dd4700d09e25b": "cd6927fd650937bff81aac86a8bda097",
".git/objects/0e/1c9c250795d3d5cb265ab50b33fb8ba6a29854": "1cb7222f692c5ea49339ed6639b3467a",
".git/objects/12/59dab32be6eff7dc976ff6bdfb3be19143d2c1": "2997c66918fc58a141b6eada6923ca97",
".git/objects/17/3a367bbdad15e73ff26869ffb2e7c09343cca0": "27b28cdeeb139458a0aa0c283fda9ffa",
".git/objects/18/799522636953f44e60677985b7b82d04ddce5e": "68a01cf96fa40e3f0915f97a89886e4d",
".git/objects/19/cffdabf90af63ccb39930f0815c26a6a904c9e": "b8821224215aa54dbb282cb645f89bc3",
".git/objects/1d/7893dfcee7ac74a714868bf9e4b4d84d3a4f8d": "0e51e66018b1544776c5257c50a34432",
".git/objects/1f/a65287283470a0abed042a4ee17c3711222436": "260bddd77fe431d7631e7d1ba045a11b",
".git/objects/21/71bfa69a9afb03b81fceaded853ca8ab728463": "f95fc29c8f6290639b5c2c99cfdab848",
".git/objects/22/d2bbd0b4db1bc1441cda79c4812de9d7cc8e78": "c07527b0f7cd49e9bb1ee4367c318ada",
".git/objects/24/bf6632b9d00de62f963915b381b1a9c1176159": "3a35561cb4e51e68ca5b7a784adb5478",
".git/objects/29/049106bea069761913c10514f19101ee1d1c31": "2ad3df58317800012165fc87f373dcd2",
".git/objects/29/c0fcf94b2f7c55b0d2464c2eca272e03387749": "283ff44b88872e668398b00205490f36",
".git/objects/2c/3636f3d210302ade31b1600aa65e1e7dd45753": "165ede02ecae1ac8306960bc3d1d15b6",
".git/objects/2d/93d4d4cf78ef33a01a66f055c75091bc022ab5": "5e25c20160b44bb24724668c9b24b323",
".git/objects/2e/8ac0a8c54210e7207519f5aee7b706e4a83d63": "ad82667e86791a1e3c3118281bcf3a71",
".git/objects/34/9e2c74468e3d5b021a32fa0cfe70546712e245": "2c68f4baa356a09501ab59f7fe1c30aa",
".git/objects/35/782ada010ce8e7c3abbc075fce57f4cf601bdb": "3a313455180f008c4ac23aea090ce539",
".git/objects/36/77186b4d3ba082ae3f358eda277fe00e2f485e": "8c4cdb324a1c77f237932e2ce5bd1dfc",
".git/objects/36/c3d980f62aa66bbd42291e159fc0dd49041da2": "e7960bc034a20b9d5a2ea43800f8b98e",
".git/objects/39/de2262df2d04a05208c9fca3b9bf72e746eb4e": "5ca4c5284c1a6d477ec7606e461a8b19",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/adbb8d1c7b07ca9b4f62115f60145c3c40a8ae": "9ba4164b0f99aee37156968d9df8fec8",
".git/objects/3b/07bbc01fa73a599f36b17e6418d19ef47fc305": "ee18d8ac9031b80bef20a374663ceba9",
".git/objects/3b/799145225d619c384e741af510b622995a7c78": "99511f0ff0692e016cdb55021360cd0a",
".git/objects/3d/6ed6e387b435cc5406bdea41c284ded551c910": "d923754d61e74934c74a040762ef5149",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/e6cbd1b76a401f77f23cabba75adf385c2139a": "504821c0b6bd6c2e6a31715edf7bde3a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/e4fdd67b617d837ce2ac776ccd2b79b3ec59b8": "db39b4bc4c3a2625263bb25b85deca6a",
".git/objects/4a/3fa57d894c4df4098e77fd31a0480c069c6934": "6e2b104b1e220dc3e7f0ae78b0491b3c",
".git/objects/4d/7140c92d4ef46e9af1af6606e2184d27887657": "a5f167533b179296181f808aae493085",
".git/objects/4e/90b0cbc6b9df7fccb646c1b2cfeef8a9a9710d": "6be9c1a756116498bbc275f07c86dabf",
".git/objects/4f/22120e7b0537a3b58193efdd1e17bb68fbb818": "2b428a20f7e63abf89328aed3612f310",
".git/objects/4f/ff554f3ae54ab4d3661e6e5d9bd2413fe6244b": "db11d00b1a55219bc9281f172fd9ef56",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/52/08311ff86cfe4351a1097c97a3f859b3d7d6fb": "e979768d052465f4993f43f6fce9d0cd",
".git/objects/52/8bbb324db5b50f6d11abb307575731e48057f9": "a753450292f651a2e7a6ec9d6db94a9b",
".git/objects/57/11812fa8bf286bccf6c424cd1afea72b774343": "0ca4b0d287479ee5247be56659f39eab",
".git/objects/58/4a1044504fa05e2d43a5ea03ede88c2d76d04f": "9b7506bf89882c4901f5d47b0ffba63a",
".git/objects/59/160ab384f9814ba87569b18b75f823b9d099fd": "a740051499a9fba47c46e046fcc5b4cf",
".git/objects/59/90cd5e1826e354bd9948387ac806ad336440c1": "f84df5e363f32c18ad54b2cb9b0fbb01",
".git/objects/5a/ef2ad9ef11786fcd2b2fa0b8f131f2b8ec63e3": "2dfe7c71385dfb46757c41841aa4c694",
".git/objects/5e/0a2a529020b20cdc7322f0ae952ffbabd1b52b": "ad490040338addcb3d70140fdf6557aa",
".git/objects/5f/266d9b7af0084b505823f7feb49df1cb42ebf3": "13e9f5daa871c2ca5a9b36a0d32d2e38",
".git/objects/60/19e78544dfac03243dca0b0a918395ab86c812": "cdb6760b6d2cdb4e3c644bdf1e228eb5",
".git/objects/61/51d7cbbfa5c4682e0b8612bddf77d4824285d4": "225a140412e7311a1f44c8bd33c99935",
".git/objects/64/c5d6923d5a2b899d0ad0a92ed286ca0888241f": "a0978ee765aca8bd975559dc8f9bb6cc",
".git/objects/65/f9dcb558cafeb123ab84f8bed93dc4647cff87": "9ced4dcd4a6111cbbfcd21521c6356cd",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/e4e3c97a8817c01818bad927455b3695162c29": "e56aa9b9484cf4f988afcde17b9b2b57",
".git/objects/6b/d18d8512331537645d5b830200d28c6310ee67": "13954d31a387adebcf9f3a914fcadba6",
".git/objects/6c/ec1ec37a72deacee24071e25de9e95593baa23": "f29321c0c8a8ca6de9a77b820742cd55",
".git/objects/6d/9e97f325618d905df786298618b3a0a50b6253": "b88237caa0b5704cff0871be315d23bb",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/17a9e26bdd26ddf5c9522584e6c2384a1186a0": "828a5c62c60d3362a499bd906194d2d0",
".git/objects/71/bb65eead5fa38a043a4ea9292d6a160d32d3f2": "d75efbbc1d8e873c9793a551bed51c07",
".git/objects/72/58b1f39dffd99945a8f8381d3f91cd2ccff0e2": "20ab9a242e427840173a6c8a967b8249",
".git/objects/73/2c16709c952f210dabda9e605d5708f2c1c1cf": "f241c48f73b2cc451303a976f4327742",
".git/objects/74/2ee855b482563081259ad518d3cf24747f592a": "d8ce76a0a23f64ca45b5144a7bf4d084",
".git/objects/75/0b474348b303a0351004b80eeefe6a6f24be45": "c330bce96c2259303b2f5c710df1cae1",
".git/objects/75/b6f56bc2b59c6ef87cadb4cd5a01b009df290e": "2226712a91489f8dffa67d4b1b60d73c",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/76/f809ba65dad6a036ba6ec9ed599731be1cb276": "4a50ca9e2b1a1a04e89d5b6a85f3aebc",
".git/objects/7b/0f4f71313c6e5ce4e82a34e2f81f5e7aa5ce3c": "8e8f3d78b6febb04262ff4ecfc25e59d",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7d/da27d21d9eb5b462b4709182fc2cf3cced6ab8": "9c103aa18de53d5abecbc4d8fb5aade4",
".git/objects/80/55f5ff5bcfd2ad35fc6c65191743bc08dd92f3": "b11ab6b2a0bf07c57ebe832837adddab",
".git/objects/83/5dac125ea51b16cd928900d200b07da4650131": "a3e5a3e911ee28d95bc08f885c18127d",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/87/3377514a49d476740162e1d3de464094922c0c": "a97b3e43213f4ab9cee6f2a3f401ec7e",
".git/objects/87/b913b3151bd498524f9a207488f4e405cc2455": "000e1cef69e27de26301c0306ff7ac89",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/ad2a5fb81708f6858d3e778f58c2372fcdb1fe": "2ae91147eeff1ad17f9a9d5e79c8be5d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/046b3cf83c6c38957e6b602b94c0de2ce7d2d3": "2cd8c5448343f509dff67de80f3e6ac4",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/c5cd76fdccb440df7251c9c33ed20fd85f4043": "56b0c416800b6e1f3e1d9340028fcd26",
".git/objects/95/c571007514a8cadb6d21b6ac1cf710859b18d8": "300da3781121697b912128e1d6fdb72a",
".git/objects/97/5f2889ae5d5972a530c613e3657f4cf1c21a54": "2707c47f1e8c0b8b2a19964c4750ea90",
".git/objects/99/097d4b7fd29e4160870f2aa3190b40601c1b8e": "98ffcc78d85ad0e8b60234fbadd70c93",
".git/objects/99/1cc4315c741b0f06ceeaa366dc7dfd0d9b8419": "079a09207d9fb1c5f59d5a356bb2c3e8",
".git/objects/99/8a7d712bd20ca260822b402454f18bf2bf88a1": "9a08c83bdefd303184448a5da7b796af",
".git/objects/a2/409f05d06ccf1aacbbb67081d2056accd7fa95": "20664ddd745380cbca5a2a19fc659640",
".git/objects/a2/687a65aac878c00ed4aa02765401c8aaa7409f": "bba6ce89a61bda7f6ff1bd1731fbfacc",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b1/4abeff7187de6f3db15566a28e55827693b986": "3f884641c3c1b9e60ee3ea7ef4bc0192",
".git/objects/b1/95e58093b824b0b254ab675ab558f65a490752": "6a243d708c3ce31bf0be03e595072908",
".git/objects/b2/23e9e8f58b101688d5443e32b75aad96390d63": "30bea734e802a97c385cff6fb9e7f47f",
".git/objects/b3/8a9721a430097357d3d5c5bacc3be1a962c2d3": "39ca53924b67c04976e2f4117d5afed8",
".git/objects/b3/d4b2e72a63cf490e5738847546453c88eaeedb": "621ec669012145f03583aab24b89a168",
".git/objects/b4/4f8ee78d76dbec789df3abed1c84966d0d5302": "dbedd92ae2029b7417f5159c257bf608",
".git/objects/b5/37d8ae4f390de3588db78b7057ed776db2a0ad": "ca2e090e5a31d3d718783754ecb634f8",
".git/objects/b6/42eb82c2aed1d77105e2112e2c1156fb053651": "80d8dae1ff9990255cb4d54faf8ac588",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ba/6009a6f1e261784e2c618bfa5e0fe6be183448": "a81bc3b33a197088e562e664fc3e4517",
".git/objects/bb/930f5cc162f3b18cdfbe523565ed4c7946c59a": "c21977e30b82cd552356b2c6824d8b14",
".git/objects/bb/d53d8aa2868afd51e503ab025d8de566444314": "725dac7c0c99ae98a46ac01b2775c3fd",
".git/objects/bf/126ce9f7ef3f07b45f6642b211f1747a62489f": "c94843f2b151178c739affb44923517d",
".git/objects/c4/3e9659d6e0c4ed6ab59ddde5e2c8ceac656c1f": "2965be1583bf4d5354f8ed019d8c73d5",
".git/objects/c4/d5411061ae3c71e53c53d0ff1367c31e7c5e5e": "a93cc1a33a33cb56d88bb50a6f18f493",
".git/objects/c6/5fde8bc4003d86dd412220bc02443b295314a5": "92b532ad9c44481d24ea9ffb45af7e7c",
".git/objects/c6/b919da7baf3b101ed54c7b7169e6bb71850d72": "076cbcad4dba4e51f5a69150e87e2f88",
".git/objects/c7/781006f5836ed75a8a70ebe54ac5c1a7e298b9": "8fd10b0a89ae4cef4b0a1e52522c10da",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cd/57e65a1640528d307e9ceff7708f5ffe267f0f": "432ede6b1f80dae54d5fc3192192940f",
".git/objects/d3/1e9c4f41f8a3713b6e559b375f632dff1186d7": "a71a86cb9e5e902651fa7cf2c53dcc73",
".git/objects/d3/8405c94f07b1a1a129c60c80c7aa87968bdf97": "ed9d838184d4923e2999e2d03e94351c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/6d4a3a3b7eb214becceddc2da0ed82fdf42efb": "ff7edbd5e5a4d48aeb8b5ab3743cfdd1",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/56177f39f0e0a4b28b52908723dc826c38aca0": "c40edd00729564022c4ab8e799eb970c",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/de/51d68b3b7f06e84da612aed2fde95f12d30f4e": "b61caba05c0c03037a3f15bc38f323dd",
".git/objects/e3/9bcf2f6baf184bb1c009dbf40ca62b19d99438": "e215f31ecf758f48654db6bca9537970",
".git/objects/e4/ab298e78ea84933034c9e918d14054d9c7c2f6": "519f6afc0a8b086d22df19239931be94",
".git/objects/e4/e74979ef49e74e2ae6b089c0f29dcf9b90f27e": "9e034f8d8ba602309d89c88fbca897c7",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/731d22d3c3a1d7cb6b15d2de1450332c36272f": "28e0872a710bee1e1a263d99d29a8a5b",
".git/objects/ea/292f40c4c2167afaf3d56f93895d718f3132d1": "821d5e63b5fb246d33df0fad75fda664",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/7681ac78d3d469b887dccffba9e908ea93f54a": "e84d1b7c3f13d1a993a9caa038508af0",
".git/objects/ee/d1b0ac05c669f579edef3ecf4f507ff7092920": "8f7665ad7fbfc588f7186361749b53d2",
".git/objects/f1/4a7abe677e2917f1246612072fe9dc73b15aa4": "7388f41137b4218274882d6d0e506f11",
".git/objects/f1/de5f9a28e95c23540e511f1568f6c3bbc2aacd": "ea3704477f383a9a4160f2510915680a",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f4/c186335f7d2502fd182ed75b301d85d27fdc8a": "0ac2c323fb33c764668d71bb32f51bd1",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/1acfcf0ab39591d5bfb3b8ff2f55991995d649": "ca9ef39b76be698733a2003f75b6133d",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/83f97c0e7d519d8ca290614bdb5938d299294f": "f6c7c37e13d88aac59cd2fe734b176c6",
".git/objects/fe/37b67ce7cd3c597ff617283e0821c3f056e4d3": "398b996e3ce96ac299e8b4563ecc581d",
".git/refs/heads/main": "4c5d4ba91f3a94c44292417ddfdd2da6",
".git/refs/remotes/origin/main": "4c5d4ba91f3a94c44292417ddfdd2da6",
"assets/AssetManifest.bin": "c04d803870f20845c6a8afbe3cf3afa4",
"assets/AssetManifest.bin.json": "02820bad3385700536a6e94bc8736e9d",
"assets/assets/audio/day10_dua.wav": "9f28753af6c66a9d376c631689309d88",
"assets/assets/audio/day11_dua.wav": "4412dc9e230f6679a7c4ba98523edf5a",
"assets/assets/audio/day12_dua.wav": "d37f88a937a661ca8ca3c46655b81f99",
"assets/assets/audio/day13_dua.wav": "917710893727d568023361942f780220",
"assets/assets/audio/day14_dua.wav": "52bf4272c0fdc0b7262d86eccc4ed5e7",
"assets/assets/audio/day15_dua.wav": "31c55def0bd507908d8d31ef79f7c45e",
"assets/assets/audio/day16_dua.wav": "9ead860dcca2c5219dd3fb733f71db94",
"assets/assets/audio/day17_dua.wav": "c978803f3a2052db9961518d55f70f69",
"assets/assets/audio/day18_dua.wav": "de486f97c1336833ecdaa35065af18fb",
"assets/assets/audio/day19_dua.wav": "082393b5b936d2e2fc29143e5025c67f",
"assets/assets/audio/day1_dua.wav": "af65334b29291047cbbd3b2a8d417a4d",
"assets/assets/audio/day20_dua.wav": "0549ec5920cb1566f7b461ec2f7e8b78",
"assets/assets/audio/day21_dua.wav": "efbde6f8d03d79e5e95f0d0379765af7",
"assets/assets/audio/day22_dua.wav": "7ce9e540eadd4e5aa869bca825d0a69c",
"assets/assets/audio/day23_dua.wav": "9a85e1a16c7c457f725c000e2fad9361",
"assets/assets/audio/day24_dua.wav": "d417a2e0a875e14b22e3e1c9279aacb0",
"assets/assets/audio/day25_dua.wav": "f18a61651b31409b131ab595074eadfd",
"assets/assets/audio/day26_dua.wav": "3a0ffd158bb7e8f08abea844c12030de",
"assets/assets/audio/day27_dua.wav": "0396285af817043c1e5a1047c85b34df",
"assets/assets/audio/day28_dua.wav": "944ee77b20fdbd5db78acecd6c594fb8",
"assets/assets/audio/day29_dua.wav": "78250017ee1313aa689f19894b7d68e7",
"assets/assets/audio/day2_dua.wav": "29cea364e615b282b4ec8a44a1948206",
"assets/assets/audio/day30_dua.wav": "368e73d0f1fcb04278bbe11bb7e36456",
"assets/assets/audio/day3_dua.wav": "59675dfb3e838bb294f93065fd546eff",
"assets/assets/audio/day4_dua.wav": "904908f9bb518facbb8bebe9d598dc47",
"assets/assets/audio/day5_dua.wav": "7e1827c9636f63813dd8c4979dba3ad9",
"assets/assets/audio/day6_dua.wav": "e8a7e81f6eec28815e7fe3a776ca4359",
"assets/assets/audio/day7_dua.wav": "fe9a8851245d500b550d14ceae3e3399",
"assets/assets/audio/day8_dua.wav": "ab5968758394cdbccb1ba9b8d2724970",
"assets/assets/audio/day9_dua.wav": "945560bfecac22f8c529ba9c9cf92c13",
"assets/assets/images/badges.png": "dc2ff6a4068b8282374dd270ee261866",
"assets/assets/images/cover_day2.png": "9195677073b50401f660c561510fdba9",
"assets/assets/images/dua.png": "7d95de65724fdd0c1af268a538c5543a",
"assets/assets/images/jar.png": "4522f5110fd5d79be9be016d743f4eb9",
"assets/assets/images/missions.png": "52923129f246e7260da7f99674f2918c",
"assets/assets/images/moon_story.png": "9195677073b50401f660c561510fdba9",
"assets/assets/images/story.png": "1da3a030b4bf7ae392b188d8bbb46672",
"assets/assets/sounds/badge.mp3": "e10fb2df41fc12e50443c5e81c409d41",
"assets/assets/sounds/coin.mp3": "65a2b0819023b28c08dd6d324e746de0",
"assets/assets/sounds/page.mp3": "5b1f8c03f9fe065fb6763b3314d2d301",
"assets/assets/stories/day1.pdf": "a26e432fc9b500d2947b222ed631087f",
"assets/assets/stories/day10.pdf": "60a2b5957974e47a1318da8e61baeb54",
"assets/assets/stories/day11.pdf": "02aa105786f2983c87e1cf57a1fa4eb3",
"assets/assets/stories/day12.pdf": "2fde4d08a9899e85a86cea72b6c8a1d2",
"assets/assets/stories/day13.pdf": "0fecaff0c79e400315b2ea7eba483ce3",
"assets/assets/stories/day14.pdf": "25ce9d86f0c62bf80e920caccdd272ec",
"assets/assets/stories/day15.pdf": "a59941a1e92fca7b3b7396fd329fa65c",
"assets/assets/stories/day16.pdf": "2e7cb10d2e46360f7a24db5230ac731b",
"assets/assets/stories/day17.pdf": "6cb4c2f90efbf4ce3939f331862d3a1e",
"assets/assets/stories/day18.pdf": "4f04b4fc76a4a77f8e1963ce35970b25",
"assets/assets/stories/day19.pdf": "ebb2646deaf595e6131d17397afd5644",
"assets/assets/stories/day2.pdf": "22317cdeea0cc3f301fde8dc0fc3fd4b",
"assets/assets/stories/day20.pdf": "3bdc4cc4408c6effb185959b8f41c321",
"assets/assets/stories/day21.pdf": "0e1cc73be8658d1614a39a9b9369240a",
"assets/assets/stories/day22.pdf": "7044553273b06f71904220c8470ec528",
"assets/assets/stories/day23.pdf": "6bf73e04da1e043e6e26f8964a012dcb",
"assets/assets/stories/day24.pdf": "4e225e1ebdb93ac8d796373d4a2ddd3e",
"assets/assets/stories/day25.pdf": "bd5e62b336e127a6da4a4c6218a21113",
"assets/assets/stories/day26.pdf": "6cd12f509efb806e5f1b4e7dd8ab9bcb",
"assets/assets/stories/day27.pdf": "700a3d88c7b0be79b2b7a61bd590aa46",
"assets/assets/stories/day28.pdf": "3228b6d5b731889b2c63154f2d815b8e",
"assets/assets/stories/day29.pdf": "8298e2ad6b6deaa2c40df693e12bc723",
"assets/assets/stories/day3.pdf": "1bf3a8b9bb8c17fd2bf96c4946fac8e7",
"assets/assets/stories/day30.pdf": "5d52c1c3138be14410ed869b698a8806",
"assets/assets/stories/day4.pdf": "0624285ae7ce52296e9a401efc855e68",
"assets/assets/stories/day5.pdf": "873ac133b43ef16ddf08ed59f9e2785c",
"assets/assets/stories/day6.pdf": "22c14a32b181267abe63ceb492bc6826",
"assets/assets/stories/day7.pdf": "6c0a54b14e8cdeb8dc4bef09448065a9",
"assets/assets/stories/day8.pdf": "16a5aafa4a741853566139b2682d7738",
"assets/assets/stories/day9.pdf": "cf225f01b7dbc165e1ee1e24c67b2d59",
"assets/assets/stories/eid.pdf": "03870335a7ee17ee615c36865eac4954",
"assets/assets/Surprise/1.jpeg": "46a3c106d43f1a2a7d61d8e3a1882ed7",
"assets/assets/Surprise/10.jpeg": "7174043d06bc8369956ca9fd590421d9",
"assets/assets/Surprise/11.jpeg": "3f99818e011e4ef860a31f08734886c4",
"assets/assets/Surprise/12.jpeg": "ef6abd056869f5c15b652a12ae2cf9a0",
"assets/assets/Surprise/13.jpeg": "524de3172a8fbb288dad3f154701bd26",
"assets/assets/Surprise/14.jpeg": "6da9332f1b1e260991c17c4bff32fbbb",
"assets/assets/Surprise/15.jpeg": "0e35c74beab665ed222ae26c47837f5b",
"assets/assets/Surprise/16.jpeg": "6e65b5da0df76e9400e236788e2d2a8d",
"assets/assets/Surprise/17.jpeg": "d34df629554e1f73900131eb47a9c8e2",
"assets/assets/Surprise/18.jpeg": "e07bf05b4bd79b9c22111c4e0db47b22",
"assets/assets/Surprise/19.jpeg": "811117c7128b21362ef39e771216926a",
"assets/assets/Surprise/2.jpeg": "66dc3230b6fdcfc58f7e13614d3ed77d",
"assets/assets/Surprise/20.jpeg": "0debb71a3106f0e74566b6f92ce8f454",
"assets/assets/Surprise/21.jpeg": "2bff1dd60c3547ffaf83ddbe6e4cf1d9",
"assets/assets/Surprise/22.jpeg": "626a0e7bc2deddc9aa6faeec19f98ee1",
"assets/assets/Surprise/23.jpeg": "526be2650792b941fc0e0f687875dd2f",
"assets/assets/Surprise/24.jpeg": "0569cdf86f2e5fe2f222c49884978c57",
"assets/assets/Surprise/25.jpeg": "ef0405cfbcb18be3a589a1073099108b",
"assets/assets/Surprise/26.jpeg": "62034d1e7aee42ad81c00e310bfa908f",
"assets/assets/Surprise/27.jpeg": "a47b2a136207e80bcf86e7d1df2ac185",
"assets/assets/Surprise/28.jpeg": "b3b62627d78c52803917a5941584fd97",
"assets/assets/Surprise/29.jpeg": "10185167486907dabf735c52d07578f8",
"assets/assets/Surprise/3.jpeg": "ae616e5b42c09def800821bc094cb11d",
"assets/assets/Surprise/30.jpeg": "d343cea2c131dd9eaa7b37034286fae0",
"assets/assets/Surprise/4.jpeg": "d250805478b7c5dcb4ba00a316b72c35",
"assets/assets/Surprise/5.jpeg": "4f0bba930785786017c96738d181eb83",
"assets/assets/Surprise/6.jpeg": "148d4ee772f32f30f5fa45da2112491f",
"assets/assets/Surprise/7.jpeg": "8e0fed2b1eebcd36d5378b8657ce7bd9",
"assets/assets/Surprise/8.jpeg": "0f3bd28edc8d3bd7d3de5526541d6f47",
"assets/assets/Surprise/9.jpeg": "80db37982cfa387fb03237a0b5c07341",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "feee0ba6d540e94d9e64a4d57faf7288",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "d0a713a4beb119f2ec61ac9883271350",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5c4bf5a83e5c60dfe1408f06e0440956",
"/": "5c4bf5a83e5c60dfe1408f06e0440956",
"main.dart.js": "7ac0def9ea32da741a41375c8cf2481e",
"manifest.json": "7958b60f13474fad0640530902083ae7",
"version.json": "af37a22af425830fb675c5a0a3984ed8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

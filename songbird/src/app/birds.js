const birdsData = [
  [       
    {
      id: 1,
      name: 'Чиж',
      species: 'Carduelis spinus',
      description: 'Длина тела около 12 см, весит 12–14 г. Оперение желтовато-зелёное с тёмными пестринами. У самцов шапочка, горло, хвост и крылья черные, у самок же черный цвет в окраске отсутствует. Клюв серый.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/chij.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/chij.mp3'
    },
    {
      id: 2,
      name: 'Снегирь',
      species: 'Pyrrhula pyrrhula',
      description: 'Снегирь-самец — красногрудая птичка с голубовато-серой спинкой и чёрной головкой, а у самок красный цвет замещен буровато-серым. Часто содержится в клетках как красивая певчая птица.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/snegir.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/snegir.mp3'
    },
    {
      id: 3,
      name: 'Аист',
      species: 'Ciconiidae',
      description: 'Обитает на открытых пространствах с обособленными деревьями, в горах и близ жилья человека. Гнездится на деревьях, скалах, на крышах домов. Голосовые связки не развиты — не имеет голоса.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/aist.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/beliy_aist.mp3'
    },
    {
      id: 4,
      name: 'Серый гусь',
      species: 'Anser anser',
      description: 'Серый гусь получил свое название благодаря своему оперению — серовато-бурое с волнистым рисунком на шее и брюхе. Перья крыльев окаймлены белым цветом. Среда обитания - водоемы.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/seriy_gus.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/seriy_gus.mp3'
    },
    {
      id: 5,
      name: 'Филин',
      species: 'Bubo bubo',
      description: 'Хищная птица, ведущая ночной образ жизни. Окраска от темно-рыжей до золотисто-охристой, с резкими продольными черными пестринами, на боках и брюхе темный поперечный рисунок.',
      image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
      audio: 'https://ptici.info/audio/filin.mp3'
    },
    {
      id: 6,
      name: 'Тетерев',
      species: 'Lyrurus tetrix',
      description: 'Самец (косач) чёрный с синим и зелёным отливом, на крыле белое «зеркальце», рулевые перья лировидно изогнуты наружу. Самка (тетёрка) мельче, рыжеватая с тёмными пестринами.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/teterev.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/teterev.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Черный коршун',
      species: 'Milvus migrans',
      description: 'Хищная птица семейства ястребиных. Темно-бурое оперение без пестрых пятен, голова более светлая, с сероватым оттенком. Клюв тёмный, восковица и неоперённые части ног жёлтые.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/black-kite.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/black-kite.mp3'
    },
    {
      id: 2,
      name: 'Иволга',
      species: 'Oriolus oriolus',
      description: 'Небольшая птица, длина тела около 25 см. Оперение у самцов золотисто-жёлтое с чёрным, у самок — зеленоватое с пятнами на груди. От клюва к глазу идёт чёрная полоса, называемая «уздечкой».',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/ivolga.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/ivolga.mp3'
    },
    {
      id: 3,
      name: 'Перепел',
      species: 'Coturnix coturnix',
      description: 'Спина бурая с тёмными и светлыми пятнами и штрихами, зоб рыжий. Щёки тёмно-рыжие, подбородок и горло чёрные. Самка отличается от самца бледно-охристым подбородком и горлом.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/perepel.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/perepel.mp3'
    },
    {
      id: 4,
      name: 'Крапивник',
      species: 'Troglodytes troglodytes',
      description: 'Птица очень подвижная, с необычно громким голосом — самцы помечают свою немалую территорию, выводя разнообразные трели, по благозвучию сравнимые с пением соловья или канарейки.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/krapivnik.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/krapivnik.mp3'
    },
    {
      id: 5,
      name: 'Чибис',
      species: 'Vanellus vanellus',
      description: 'Типичный обитатель приречных лугов, полей и болот без кочек и высокотравья в пределах степной и лесостепной зон, подтайги и южной тайги. Пение чибиса — громкое гнусавое «чьи-вы, чьи-вы».',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/chibis.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/chibis.mp3'
    },
    {
      id: 6,
      name: 'Коноплянка',
      species: 'Cannabina cannabina',
      description: 'Коноплянку часто содержат в клетках. В отличие от других певчих птиц, коноплянка поет не только в брачный период. Ее мелодичную, спокойную песню можно услышать с апреля по октябрь.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/konoplyanka.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/konoplyanka.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Овсянка',
      species: 'Emberiza citrinella',
      description: 'Обитает в лесах, лесостепи, где отдаёт предпочтение сухим открытым ландшафтам с немногочисленной древесной растительностью, в том числе и кустарниковой.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/ovsyanka.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/ovsyanka.mp3'
    },
    {
      id: 2,
      name: 'Бекас',
      species: 'Gallinago gallinago',
      description: 'Живут бекасы в сырых болотах, сырых лугах, по заболоченным берегам рек и озер в местах с мягкой влажной почвой, которую они могут буравить клювом в поискам пищи.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/bekas.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/bekas.mp3'
    },
    {
      id: 3,
      name: 'Орлан-белохвост',
      species: 'Haliaeetus albicilla',
      description: 'Одна из самых крупных хищных птиц с размахом крыльев до 2,5 метров. Обитает в прибрежных лесах вблизи богатых рыбой водоемов, выбирает малодоступные для человека места.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/orlan-belohvost.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/orlan-belohvost.mp3'
    },
    {
      id: 4,
      name: 'Зарянка',
      species: 'Erithacus rubecula',
      description: 'Птица семейства дроздовых отряда воробьиных. Обитает в сырых лесах, особенно в зарослях ольхи и орешника а также в густом еловом молодняке. Предпочитает близость воды.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/malinovka.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/zaryanka_malin.mp3'
    },
    {
      id: 5,
      name: 'Соловей',
      species: 'Luscinia luscinia',
      description: 'Любимыми местами обитания соловьев являются поросшие ивовыми кустами долины рек, полевые болота и кустарники вблизи проточной или стоячей воды, а также большие сады и глухие парки.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/solovey.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/solovey.mp3'
    },
    {
      id: 6,
      name: 'Пустельга',
      species: 'Falco tinnunculus L.',
      description: 'Обычный гнездящийся вид. Распространен от Атлантиче ского побережья до Тихоокеанского. Приносит пользу, истребляя мелких грызунов — вредителей сельскохозяйственных культур.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/pustelga.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/pustelga.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Лесной конек',
      species: 'Anthus trivialis',
      description: 'Небольшая птица, по размерам сходная с воробьем, но более стройная. Длина лесного конька 16–18 см, масса тела 21–23 г. В питании коньков преобладают мелкие беспозвоночные.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/konek_lesnoy.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/kon_les.mp3'
    },
    {
      id: 2,
      name: 'Белая трясогузка',
      species: 'Motacilla alba',
      description: 'Одна из самых полезных птиц — она уничтожает насекомых-вредителей, которых ловит прямо в воздухе или находит на земле. Живет в открытых ландшафтах разного типа, любит близость воды.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/belaya_tryasoguzka.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/b_trjaso.mp3'
    },
    {
      id: 3,
      name: 'Горихвостка',
      species: 'Phoenicurus phoenicurus',
      description: 'Обитают в лесах, садах, зарослях кустарника, по берегам рек. Зимой держатся в саванне и редколесье. Гнёзда устраивают в дуплах, расселинах скал, под кустами.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/gorihvostka.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/gorihvostka.mp3'
    },
    {
      id: 4,
      name: 'Беркут',
      species: 'Aquila chrysaetus',
      description: 'Самый крупный орёл — длина тела до 90 см, размах крыльев 180–240 см. Населяет обширные верховые болота и леса по их окраинам. Везде редок. Огромные гнёзда строит на деревьях.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/berkut.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/berkut.mp3'
    },
    {
      id: 5,
      name: 'Поползень',
      species: 'Sittidae',
      description: 'Распространены в Европе, Северо-Западной Африке, Азии и в Северной Америке. Живут оседло или кочуют. Древесные птицы, лишь немногие живут на скалах.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/popolzen.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/popolzen.mp3'
    },
    {
      id: 6,
      name: 'Дятел',
      species: 'Dendrocopos major',
      description: 'Гнездится в пригодных для устройства дупел деревьях. Зачастую это высохшие и загнившие стволы осины, ольхи или березы. Гнездо устроивает на высоте 2–10 метров от земли.',
      image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
      audio: 'https://ptici.info/audio/bolshoy_pestr_dyatel.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Мухоловка',
      species: 'Ficedula hypoleuca',
      description: 'Птица живет в светлых лесах, парках и плодовых садах с большим количеством дупел. Охотится, поджидая насекомых в видном месте. Может ловить дневных бабочек.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/muholovka_pestrushka.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/muh_pes.mp3'
    },
    {
      id: 2,
      name: 'Серая славка',
      species: 'Sylvia communis',
      description: 'Небольшая подвижная птица. Спинная сторона серовато-бурая с пепельно-серой окраской головы, боков шеи и надхвостья. Плечи рыжие, горло белое, брюшная сторона розовато-белая.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/slavka.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/ser_slavka.mp3'
    },
    {
      id: 3,
      name: 'Луговой чекан',
      species: 'Saxicola rubetra',
      description: 'Чекан встречается практически в любых местах открытых пространств, но наивысшей численности достигает на пойменных разнотравных лугах. Гнездо устраивает на земле.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/chekan.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/lug_chekan.mp3'
    },
    {
      id: 4,
      name: 'Пеночка-теньковка',
      species: 'Phylloscopus collybita',
      description: 'Небольшая лесная птичка — длина тела 10–12 см, вес 6–8 г. Ареал теньковки — светлые леса, древесные растения на полях, сады. Предпочитает влажные участки.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/penochka-tenkovka.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/penoch_ten.mp3'
    },
    {
      id: 5,
      name: 'Зеленушка',
      species: 'Carduelis chloris',
      description: 'Птица размером с воробья — весит 20–28 г, длина тела — около 14,5 см. Населяет разреженные леса, опушки, рощи с перелесками, сады и парки. Наиболее распространена в некоторых городах.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/zelenushka.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/zelenushka.mp3'
    },
    {
      id: 6,
      name: 'Чечевица',
      species: 'Carpodacus erythrinus',
      description: 'Населяет открытые пространства с зарослями кустарников, опушки лесов, поймы рек и даже высокотравные луга. Предпочитает места с густыми кустарниковыми зарослями.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/chechevica.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/chechevica.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Аист черный',
      species: 'Ciconia nigra',
      description: 'Встречается в глухих заболоченных и горных высокоствольных лесах, реже в скалах или участках леса среди сырых лугов и болот. Питается лягушками, ящерицами, беспозвоночными.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/chern_aist.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/chern_aist.mp3'
    },
    {
      id: 2,
      name: 'Варакушка',
      species: 'Luscinia svecica',
      description: 'Селится в кустарниковых, реже в тростниковых зарослях по берегам водоёмов. В горах встречается до 3500 м. над уровнем моря. На зиму улетает в Северную Африку и Южную Азию.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/varakushka.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/varakushka.mp3'
    },    
    {
      id: 3,
      name: 'Московка',
      species: 'Parus ater',
      description: 'Обитает преимущественно в хвойных лесах, однако вне сезона размножения встречается за пределами леса — в садах и парках, где её можно встретить возле кормушек. Избегает населённых пунктов.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/moskovka.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/moskovka.mp3'
    },
    {
      id: 4,
      name: 'Чеглок',
      species: 'Falco subbuteo',
      description: 'Излюбленными местами обитания являются опушки лесов, перемежающиеся с открытыми участками — полями, лугами, поймами рек. Чаще гнездится на значительной от земли высоте.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/cheglok.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/cheglok.mp3'
    },
    {
      id: 5,
      name: 'Жулан',
      species: 'Lanius collurio',
      description: 'Места обитания — закустаренные луга, вырубки, посадки, опушки лесов, окраины населенных пунктов. Гнездо строит в густом кустарнике, в зарослях бурьяна, на небольших елочках.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/sorokoput-zhulan.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/sorokoput_zhulan.mp3'
    },
    {
      id: 6,
      name: 'Канюк',
      species: 'Buteo buteo',
      description: 'Хищная птица среднего размера, плотного сложения. Предпочитает лесистые местности, перемежающиеся с открытыми пространствами. Оптимальная зона обитания — лесостепная.',
      image: 'https://ptici.info/assets/components/phpthumbof/cache/kanuk.18176db1094c57fa245ab89941e7a0fb.jpg',
      audio: 'https://ptici.info/audio/kanuk.mp3'
    }
  ]
];

export default birdsData;

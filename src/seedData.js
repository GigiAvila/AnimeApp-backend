const seed = {
  mangas: [
    {
      _mangaId: 1,
      name: 'One Piece',
      author: 'Eiichiro Oda',
      year: 1997,
      principalCharacter: 'Monkey D. Luffy',
      isOngoing: true,
      _fans: [18],
      issues: 105,
      argument:
        'Follow the epic journey of Monkey D. Luffy as he sets out to become the Pirate King in a world of adventure, treasure, and powerful foes.',
      cover:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700650307/onepiece_wwptje.jpg'
    },
    {
      _mangaId: 2,
      name: 'Naruto',
      author: 'Masashi Kishimoto',
      year: 1999,
      principalCharacter: 'Naruto Uzumaki',
      isOngoing: false,
      _fans: [16, 5, 3, 1],
      issues: 70,
      argument:
        'Join Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and the leader of his village, as he embarks on a journey of self-discovery, friendship, and overcoming formidable foes.',
      cover:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700650307/naruto1_dn7xld.jpg'
    },
    {
      _mangaId: 3,
      name: 'Attack on Titan',
      author: 'Hajime Isayama',
      year: 2009,
      principalCharacter: 'Eren Yeager',
      isOngoing: false,
      _fans: [2, 17],
      issues: 34,
      argument:
        'In a world besieged by giant humanoid creatures known as Titans, follow Eren Yeager and his friends as they strive to uncover the mysteries behind the Titans and protect humanity from imminent danger.',
      cover:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700650308/attackOnTitans_nnutlb.jpg'
    },
    {
      _mangaId: 4,
      name: 'Fullmetal Alchemist',
      author: 'Hiromu Arakawa',
      year: 2001,
      principalCharacter: 'Edward Elric',
      isOngoing: false,
      _fans: [11, 12],
      volumes: 27,
      argument:
        "Follow the journey of the Elric brothers, Edward and Alphonse, as they seek the Philosopher's Stone to restore their bodies after a failed alchemical ritual, exploring themes of sacrifice, morality, and the consequences of power.",
      cover:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700650307/fullmetal_yfw4ui.jpg'
    },
    {
      _mangaId: 5,
      name: 'Vinland',
      author: 'Makoto Yukimura',
      year: 2005,
      principalCharacter: 'Thorfinn',
      isOngoing: true,
      _fans: [14, 4],
      issues: 21,
      argument:
        'Embark on a historical journey with Thorfinn, a young warrior seeking vengeance in the Viking Age, exploring themes of war, morality, and the pursuit of a peaceful land called Vinland.',
      cover:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700650315/vinland_lp8ibx.jpg'
    },
    {
      _mangaId: 6,
      name: 'Death Note',
      author: 'Tsugumi Ohba',
      year: 2003,
      principalCharacter: 'Light Yagami',
      isOngoing: false,
      _fans: [3, 13],
      issues: 12,
      argument:
        'Enter the world of suspense and intellect as Light Yagami discovers a mysterious notebook with the power to kill anyone. Follow his journey as he tries to create a utopia free from crime.',
      cover:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700650312/deathNote_wfmofe.jpg'
    },
    {
      _mangaId: 7,
      name: 'My Hero Academia',
      author: 'Kohei Horikoshi',
      year: 2014,
      principalCharacter: 'Izuku Midoriya',
      isOngoing: true,
      _fans: [13],
      issues: 35,
      argument:
        'Experience the world of superheroes and villains in a society where individuals possess unique powers known as "quirks." Follow Izuku Midoriya as he strives to become the greatest hero.',
      cover:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700650311/myHeroAcaemy_l3llox.jpg'
    },
    {
      _mangaId: 8,
      name: 'Hunter x Hunter',
      author: 'Yoshihiro Togashi',
      year: 1998,
      principalCharacter: 'Gon Freecss',
      isOngoing: true,
      _fans: [5],
      volumes: 37,
      argument:
        'Join Gon Freecss on his quest to become a Hunter and find his long-lost father. Explore a world full of challenges, adventures, and powerful creatures.',
      cover:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700650311/HunterxHunter_uousjs.jpg'
    },
    {
      _mangaId: 9,
      name: 'Neon Genesis Evangelion',
      author: 'Yoshiyuki Sadamoto',
      year: 1995,
      principalCharacter: 'Shinji Ikari',
      isOngoing: false,
      _fans: [6, 15],
      issues: 14,
      argument:
        'Dive into the psychological and mecha world of Neon Genesis Evangelion, where teenagers pilot giant robots to protect Earth from mysterious beings. Explore complex characters and existential themes.',
      cover:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700650311/evangelion_ezrs05.jpg'
    },
    {
      _mangaId: 10,
      name: 'Black Clover',
      author: 'Yūki Tabata',
      year: 2015,
      principalCharacter: 'Asta',
      isOngoing: true,
      _fans: [10, 9, 7],
      volumes: 33,
      argument:
        'Join Asta, a young mage born without magic, as he strives to become the Wizard King in a magical world full of challenges, rivalries, and powerful adversaries.',
      cover:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700650311/blackClover_wwwarv.jpg'
    },
    {
      _mangaId: 11,
      name: 'Demon Slayer',
      author: 'Koyoharu Gotouge',
      year: 2016,
      principalCharacter: 'Tanjiro Kamado',
      isOngoing: false,
      _fans: [10, 9, 7],
      issues: 9,
      argument:
        'Experience the tale of Tanjiro Kamado, a young boy turned demon slayer, as he seeks to avenge his family and protect his sister in a world filled with demons and supernatural threats.',
      cover:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700650308/demonSlayer1_j5kldb.jpg'
    },
    {
      _mangaId: 12,
      name: 'One Punch Man',
      author: 'ONE',
      year: 2009,
      principalCharacter: 'Saitama',
      isOngoing: true,
      _fans: [10, 9, 7],
      volumes: 26,
      argument:
        'Enter the world of Saitama, a hero who can defeat any opponent with a single punch. Follow his journey as he seeks a worthy challenge and navigates the challenges of hero society.',
      cover:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700650311/onePunch_mxtlsc.jpg'
    },
    {
      _mangaId: 13,
      name: 'Jujutsu Kaisen',
      author: 'Gege Akutami',
      year: 2018,
      principalCharacter: 'Yuji Itadori',
      isOngoing: true,
      _fans: [1, 2],
      issues: 25,
      argument:
        'Follow Yuji Itadori as he enters a world of curses, sorcery, and supernatural battles. With the power of a cursed artifact, he joins a school to fight dangerous curses and protect others.',
      cover:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700650312/jujutsu_gv64rz.jpg'
    },
    {
      _mangaId: 14,
      name: 'Sakura Card Captor',
      author: 'CLAMP',
      year: 1996,
      principalCharacter: 'Sakura Kinomoto',
      isOngoing: false,
      _fans: [8],
      issues: 12,
      argument:
        'A magical tale following the adventures of Sakura Kinomoto, a young girl who accidentally releases a set of powerful magical cards and must now retrieve them to prevent disaster.',
      cover:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700650308/sakura_dbl2xp.jpg'
    },
    {
      _mangaId: 15,
      name: 'Boruto: Naruto Next Generations',
      author: 'Mikio Ikemoto',
      year: 2016,
      principalCharacter: 'Boruto Uzumaki',
      isOngoing: true,
      _fans: [7],
      issues: 17,
      argument:
        'Follow the adventures of Boruto Uzumaki, the son of Naruto Uzumaki, as he navigates the challenges of being a young ninja in a technologically advanced Hidden Leaf Village. Discover new threats, friendships, and the legacy of the ninja world.',
      cover:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700650308/boruto_yjlkjp.jpg'
    }
  ],
  otakus: [
    {
      name: 'John',
      surname: 'Doe',
      country: 'USA',
      email: 'john.doe@example.com',
      verifyEmail: true,
      password: '1234',
      _userId: 1,
      _favoriteManga: 2,
      premium: false,
      language: 'english',
      avatar:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700773295/Image_56_tp7var.png'
    },
    {
      name: 'Alice',
      surname: 'Smith',
      country: 'Canada',
      email: 'alice.smith@example.com',
      verifyEmail: true,
      password: '1234',
      _userId: 2,
      _favoriteManga: 4,
      premium: true,
      language: 'english',
      avatar:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700774188/Image_60_svb8xk.png'
    },
    {
      name: 'Maria',
      surname: 'Garcia',
      country: 'Spain',
      email: 'maria.garcia@example.com',
      verifyEmail: true,
      password: '1234',
      _favoriteManga: 2,
      _userId: 3,
      premium: false,
      language: 'spanish',
      avatar:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700773082/Image_49_miax6v.png'
    },
    {
      name: 'Elsa',
      surname: 'Andersen',
      country: 'Denmark',
      email: 'elsa.andersen@example.com',
      verifyEmail: true,
      password: '1234',
      _userId: 4,
      _favoriteManga: 5,
      premium: true,
      language: 'danish',
      avatar:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700773074/Image_52_uh3o7z.png'
    },
    {
      name: 'Luca',
      surname: 'Rossi',
      country: 'Italy',
      email: 'luca.rossi@example.com',
      password: '1234',
      _userId: 5,
      _favoriteManga: 2,
      premium: false,
      language: 'italian',
      avatar:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700773294/Image_55_fqzwvv.png'
    },
    {
      name: 'Michael',
      surname: 'Johnson',
      country: 'USA',
      email: 'michael.johnson@example.com',
      verifyEmail: true,
      password: '1234',
      _userId: 6,
      _favoriteManga: 9,
      premium: true,
      language: 'english',
      avatar:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700773073/Image_45_fsg9gw.png'
    },
    {
      name: 'Sophie',
      surname: 'Brown',
      country: 'Canada',
      email: 'sophie.brown@example.com',
      verifyEmail: true,
      password: '1234',
      _userId: 7,
      _favoriteManga: 11,
      premium: false,
      language: 'french',
      avatar:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700773073/Image_41_nydes5.png'
    },
    {
      name: 'Carlos',
      surname: 'Gomez',
      country: 'Spain',
      email: 'carlos.gomez@example.com',
      verifyEmail: true,
      password: '1234',
      _userId: 8,
      _favoriteManga: 14,
      premium: true,
      language: 'spanish',
      avatar:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700773294/Image_57_hgjedq.png'
    },
    {
      name: 'Lara',
      surname: 'Gonzalez',
      country: 'Chile',
      email: 'lars.gonzalez@example.com',
      verifyEmail: true,
      password: '1234',
      _userId: 9,
      _favoriteManga: 11,
      premium: false,
      language: 'spanish',
      avatar:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700773073/Image_43_bh7vks.png'
    },
    {
      name: 'Isabella',
      surname: 'Rossi',
      country: 'Italy',
      email: 'isabella.rossi@example.com',
      verifyEmail: true,
      password: '1234',
      _userId: 10,
      _favoriteManga: 11,
      premium: true,
      language: 'italian',
      avatar:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700773995/Image_58_asc4jj.png'
    },
    {
      name: 'Emil',
      surname: 'Petersen',
      country: 'Denmark',
      email: 'emil.petersen@example.com',
      verifyEmail: true,
      password: '1234',
      _userId: 11,
      _favoriteManga: 12,
      premium: false,
      language: 'english',
      avatar:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700773073/Image_48_ebxuyl.png'
    },
    {
      name: 'Takashi',
      surname: 'Yamamoto',
      country: 'Japan',
      email: 'takashi.yamamoto@example.com',
      verifyEmail: true,
      password: '1234',
      _userId: 12,
      _favoriteManga: 8,
      premium: true,
      language: 'japanese',
      avatar:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700773994/Image_59_mbp6zz.png'
    },
    {
      name: 'Olivia',
      surname: 'Miller',
      country: 'USA',
      email: 'olivia.miller@example.com',
      verifyEmail: true,
      password: '1234',
      _userId: 13,
      _favoriteManga: 7,
      premium: false,
      language: 'english',
      avatar:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700774188/Image_61_vy2qlk.png'
    },
    {
      name: 'Matteo',
      surname: 'Ferrari',
      country: 'Italy',
      email: 'matteo.ferrari@example.com',
      verifyEmail: true,
      password: '1234',
      _userId: 14,
      _favoriteManga: 5,
      premium: true,
      language: 'italian',
      avatar:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700773073/Image_44_qzclzv.png'
    },
    {
      name: 'Eva',
      surname: 'Ty',
      country: 'Corea',
      email: 'eva.andersson@example.com',
      verifyEmail: true,
      password: '1234',
      _userId: 15,
      _favoriteManga: 15,
      premium: false,
      language: 'corean',
      avatar:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700773074/Image_53_nyuaqe.png'
    },
    {
      name: 'Hannah',
      surname: 'Wilson',
      country: 'Australia',
      email: 'hannah.wilson@example.com',
      verifyEmail: true,
      password: '1234',
      _userId: 16,
      _favoriteManga: 2,
      premium: true,
      language: 'english',
      avatar:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700773073/Image_47_t7dy0z.png'
    },
    {
      name: 'Rajesh',
      surname: 'Kumar',
      country: 'India',
      email: 'rajesh.kumar@example.com',
      verifyEmail: true,
      password: '1234',
      _userId: 17,
      _favoriteManga: 4,
      premium: false,

      language: 'hindi',
      avatar:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700773294/Image_54_ytb0pd.png'
    },
    {
      name: 'Li Wei',
      surname: 'Chen',
      country: 'China',
      email: 'liwei.chen@example.com',
      verifyEmail: true,
      password: '1234',
      _userId: 18,
      _favoriteManga: 1,
      premium: true,

      language: 'chinese',
      avatar:
        'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700773073/Image_46_uab89s.png'
    }
  ]
}

module.exports = seed

const seed = {
  animes: [
    {
      _animeId: 1,
      name: 'One Piece',
      author: 'Eiichiro Oda',
      format: ['manga', 'anime'],
      year: 1997,
      principalCharacter: 'Monkey D. Luffy',
      isOngoing: true,
      _fans: [18]
    },
    {
      _animeId: 2,
      name: 'Naruto',
      author: 'Masashi Kishimoto',
      year: 1999,
      principalCharacter: 'Naruto Uzumaki',
      isOngoing: false,
      _fans: [16, 5, 3, 1],
      format: ['anime']
    },
    {
      _animeId: 3,
      name: 'Attack on Titan',
      author: 'Hajime Isayama',
      year: 2009,
      principalCharacter: 'Eren Yeager',
      isOngoing: false,
      _fans: [2, 17],
      format: ['manga', 'anime']
    },
    {
      _animeId: 4,
      name: 'Dragon Ball',
      author: 'Akira Toriyama',
      year: 1984,
      principalCharacter: 'Goku',
      isOngoing: false,
      _fans: [17, 2],
      format: ['manga', 'anime']
    },
    {
      _animeId: 5,
      name: 'Vinland',
      author: 'Makoto Yukimura',
      year: 2005,
      principalCharacter: 'Thorfinn',
      isOngoing: true,
      _fans: [14, 4],
      format: ['manga', 'anime']
    },
    {
      _animeId: 6,
      name: 'Death Note',
      author: 'Tsugumi Ohba',
      year: 2003,
      principalCharacter: 'Light Yagami',
      isOngoing: false,
      _fans: [3, 13],
      format: ['manga', 'anime']
    },
    {
      _animeId: 7,
      name: 'My Hero Academia',
      author: 'Kohei Horikoshi',
      year: 2014,
      principalCharacter: 'Izuku Midoriya',
      isOngoing: true,
      _fans: [13],
      format: ['manga', 'anime']
    },
    {
      _animeId: 8,
      name: 'Pokemon',
      author: 'Satoshi Tajiri',
      year: 1997,
      principalCharacter: 'Ash Ketchum',
      isOngoing: true,
      _fans: [12],
      format: ['anime']
    },
    {
      _animeId: 9,
      name: 'Neon Genesis Evangelion',
      author: 'Yoshiyuki Sadamoto',
      year: 1995,
      principalCharacter: 'Shinji Ikari',
      isOngoing: false,
      _fans: [6],
      format: ['anime']
    },
    {
      _animeId: 10,
      name: 'Digimon',
      author: 'Akiyoshi Hongo',
      year: 1997,
      principalCharacter: 'Tai Kamiya',
      isOngoing: true,
      _fans: [],
      format: ['anime']
    },
    {
      _animeId: 11,
      name: 'Demon Slayer',
      author: 'Koyoharu Gotouge',
      year: 2016,
      principalCharacter: 'Tanjiro Kamado',
      isOngoing: false,
      _fans: [10, 9, 7],
      format: ['anime']
    },
    {
      _animeId: 12,
      name: 'Corrector Yui',
      author: 'Keiko Okamoto',
      year: 1999,
      principalCharacter: 'Yui Kasuga',
      isOngoing: false,
      _fans: [11],
      format: ['anime']
    },
    {
      _animeId: 13,
      name: 'Jujutsu Kaisen',
      author: 'Gege Akutami',
      year: 2018,
      principalCharacter: 'Yuji Itadori',
      isOngoing: true,
      _fans: [1, 2],
      format: ['anime']
    },
    {
      _animeId: 14,
      name: 'Sakura Card Captor',
      author: 'CLAMP',
      year: 1996,
      principalCharacter: 'Sakura Kinomoto',
      isOngoing: false,
      _fans: [8],
      format: ['anime']
    },
    {
      _animeId: 15,
      name: 'Boruto: Naruto Next Generations',
      author: 'Mikio Ikemoto',
      year: 2016,
      principalCharacter: 'Boruto Uzumaki',
      isOngoing: true,
      _fans: [7],
      format: ['anime']
    }
  ],
  otakus: [
    {
      name: 'John',
      surname: 'Doe',
      country: 'USA',
      email: 'john.doe@example.com',
      _userId: 1,
      _favoriteAnime: 2
    },
    {
      name: 'Alice',
      surname: 'Smith',
      country: 'Canada',
      email: 'alice.smith@example.com',
      _userId: 2,
      _favoriteAnime: 4
    },
    {
      name: 'Maria',
      surname: 'Garcia',
      country: 'Spain',
      email: 'maria.garcia@example.com',
      _userId: 3,
      _favoriteAnime: 2
    },
    {
      name: 'Elsa',
      surname: 'Andersen',
      country: 'Denmark',
      email: 'elsa.andersen@example.com',
      _userId: 4,
      _favoriteAnime: 5
    },
    {
      name: 'Luca',
      surname: 'Rossi',
      country: 'Italy',
      email: 'luca.rossi@example.com',
      _userId: 5,
      _favoriteAnime: 2
    },
    {
      name: 'Michael',
      surname: 'Johnson',
      country: 'USA',
      email: 'michael.johnson@example.com',
      _userId: 6,
      _favoriteAnime: 9
    },
    {
      name: 'Sophie',
      surname: 'Brown',
      country: 'Canada',
      email: 'sophie.brown@example.com',
      _userId: 7,
      _favoriteAnime: 11
    },
    {
      name: 'Carlos',
      surname: 'Gomez',
      country: 'Spain',
      email: 'carlos.gomez@example.com',
      _userId: 8,
      _favoriteAnime: 14
    },
    {
      name: 'Lara',
      surname: 'Gonzalez',
      country: 'Chile',
      email: 'lars.gonzalez@example.com',
      _userId: 9,
      _favoriteAnime: 11
    },
    {
      name: 'Isabella',
      surname: 'Rossi',
      country: 'Italy',
      email: 'isabella.rossi@example.com',
      _userId: 10,
      _favoriteAnime: 11
    },
    {
      name: 'Emil',
      surname: 'Petersen',
      country: 'Denmark',
      email: 'emil.petersen@example.com',
      _userId: 11,
      _favoriteAnime: 12
    },
    {
      name: 'Takashi',
      surname: 'Yamamoto',
      country: 'Japan',
      email: 'takashi.yamamoto@example.com',
      _userId: 12,
      _favoriteAnime: 8
    },
    {
      name: 'Olivia',
      surname: 'Miller',
      country: 'USA',
      email: 'olivia.miller@example.com',
      _userId: 13,
      _favoriteAnime: 7
    },
    {
      name: 'Matteo',
      surname: 'Ferrari',
      country: 'Italy',
      email: 'matteo.ferrari@example.com',
      _userId: 14,
      _favoriteAnime: 5
    },
    {
      name: 'Eva',
      surname: 'Ty',
      country: 'Corea',
      email: 'eva.andersson@example.com',
      _userId: 15,
      _favoriteAnime: 15
    },
    {
      name: 'Hannah',
      surname: 'Wilson',
      country: 'Australia',
      email: 'hannah.wilson@example.com',
      _userId: 16,
      _favoriteAnime: 2
    },
    {
      name: 'Rajesh',
      surname: 'Kumar',
      country: 'India',
      email: 'rajesh.kumar@example.com',
      _userId: 17,
      _favoriteAnime: 4
    },
    {
      name: 'Li Wei',
      surname: 'Chen',
      country: 'China',
      email: 'liwei.chen@example.com',
      _userId: 18,
      _favoriteAnime: 1
    }
  ]
}

module.exports = seed

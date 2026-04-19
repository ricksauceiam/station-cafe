import { SeedTrade } from './types';

export const tradesPart3: SeedTrade[] = [
  // #101 - James Harden to 76ers / Ben Simmons to Nets
  {
    date: '2022-02-10',
    title: 'James Harden to 76ers, Ben Simmons to Nets',
    summary:
      'The 76ers acquired James Harden from the Nets in exchange for Ben Simmons, Seth Curry, Andre Drummond, and two first-round picks. The blockbuster deal ended the Ben Simmons holdout saga and paired Harden with Joel Embiid.',
    context:
      'Ben Simmons had refused to play for the 76ers following his playoff meltdown against the Hawks in 2021. Harden had grown unhappy in Brooklyn and wanted out. Both teams saw an opportunity to reset.',
    tags: ['blockbuster', 'star-trade', 'holdout', 'deadline-deal'],
    teams: [
      {
        team: 'Philadelphia 76ers',
        abbreviation: 'PHI',
        received: ['James Harden', 'Paul Millsap'],
        grade: 'B',
        outcome:
          'Harden helped the 76ers reach the second round in 2022 but declined significantly. He opted into his player option, was traded again in 2023, and never recaptured his MVP form in Philadelphia.',
        timeline: [
          { season: '2021-22', event: '2nd round exit vs MIA' },
          { season: '2022-23', event: '2nd round exit vs BOS' },
          { season: '2023-24', event: 'Harden traded to LAC' },
        ],
      },
      {
        team: 'Brooklyn Nets',
        abbreviation: 'BKN',
        received: [
          'Ben Simmons',
          'Seth Curry',
          'Andre Drummond',
          '2022 first-round pick',
          'unprotected 2027 first-round pick',
        ],
        grade: 'D',
        outcome:
          'Ben Simmons barely played due to back injuries and was eventually waived. Seth Curry was later traded. The picks provided some future value, but the return was a disaster overall.',
        timeline: [
          { season: '2021-22', event: '1st round sweep by BOS' },
          { season: '2022-23', event: 'Simmons plays 42 games' },
          { season: '2023-24', event: 'Simmons waived, full rebuild' },
        ],
      },
    ],
  },

  // #102 - CJ McCollum to Pelicans
  {
    date: '2022-02-08',
    title: 'CJ McCollum to Pelicans',
    summary:
      'The Pelicans acquired CJ McCollum from the Trail Blazers in exchange for Josh Hart, Nickeil Alexander-Walker, Tomas Satoransky, Didi Louzada, a protected 2022 first-round pick, and two second-round picks.',
    context:
      'Portland was beginning its rebuild after the Damian Lillard era started winding down. New Orleans wanted a proven scorer to pair with Brandon Ingram and Zion Williamson.',
    tags: ['deadline-deal', 'scorer', 'rebuild'],
    teams: [
      {
        team: 'New Orleans Pelicans',
        abbreviation: 'NOP',
        received: ['CJ McCollum', 'Larry Nance Jr.', 'Tony Snell'],
        grade: 'B+',
        outcome:
          'McCollum became a steady veteran presence and helped the Pelicans make the playoffs in 2022 and reach the play-in in subsequent years. Solid acquisition for a team needing backcourt scoring.',
        timeline: [
          { season: '2021-22', event: '1st round exit vs PHX' },
          { season: '2022-23', event: 'Play-in loss' },
          { season: '2023-24', event: 'Missed playoffs, injuries' },
        ],
      },
      {
        team: 'Portland Trail Blazers',
        abbreviation: 'POR',
        received: [
          'Josh Hart',
          'Nickeil Alexander-Walker',
          'Tomas Satoransky',
          'Didi Louzada',
          '2022 protected first-round pick',
          '2026 second-round pick',
          '2027 second-round pick',
        ],
        grade: 'B',
        outcome:
          'Josh Hart was later flipped to the Knicks for a first-round pick. Portland used this trade as a stepping stone in their broader rebuild.',
        timeline: [
          { season: '2021-22', event: 'Lottery-bound, rebuild starts' },
          { season: '2022-23', event: 'Hart flipped to NYK for 1st' },
          { season: '2023-24', event: 'Lillard traded, full teardown' },
        ],
      },
    ],
  },

  // #103 - Dejounte Murray to Hawks
  {
    date: '2022-06-29',
    title: 'Dejounte Murray to Hawks',
    summary:
      'The Hawks acquired Dejounte Murray from the Spurs in exchange for Danilo Gallinari, three first-round picks (2023, 2025, 2027), and a pick swap (2026). San Antonio accelerated their rebuild while Atlanta paired Murray with Trae Young.',
    context:
      'The Hawks were coming off a disappointing first-round exit and wanted to add a two-way guard alongside Trae Young. The Spurs were committed to a full rebuild around their young core and incoming draft capital.',
    tags: ['blockbuster', 'draft-capital', 'rebuild', 'offseason'],
    teams: [
      {
        team: 'Atlanta Hawks',
        abbreviation: 'ATL',
        received: ['Dejounte Murray'],
        grade: 'C',
        outcome:
          'The Murray-Young pairing never fully clicked. The Hawks were a play-in team in 2023 and Murray was traded to the Pelicans in 2024. Atlanta gave up significant draft capital for a two-year rental.',
        timeline: [
          { season: '2022-23', event: 'Play-in loss, 1st round exit' },
          { season: '2023-24', event: 'Play-in loss to CHI' },
          { season: '2024-25', event: 'Murray traded to NOP' },
        ],
      },
      {
        team: 'San Antonio Spurs',
        abbreviation: 'SAS',
        received: [
          'Danilo Gallinari',
          '2023 first-round pick',
          '2025 first-round pick',
          '2027 first-round pick',
          '2026 pick swap',
        ],
        grade: 'A',
        outcome:
          'The Spurs landed a massive haul of draft capital that fueled their rebuild. Gallinari never played for San Antonio (torn ACL, waived). The picks became key assets in building around Victor Wembanyama.',
        timeline: [
          { season: '2022-23', event: 'Tanked, won Wemby lottery' },
          { season: '2023 Draft', event: 'Drafted Wembanyama #1' },
          { season: '2023-24', event: 'Wemby wins ROTY' },
          { season: '2024-25', event: 'Playoff push with Fox trade' },
        ],
      },
    ],
  },

  // #104 - Rudy Gobert to Timberwolves
  {
    date: '2022-07-06',
    title: 'Rudy Gobert to Timberwolves',
    summary:
      'The Timberwolves acquired Rudy Gobert from the Jazz in a massive trade package including Malik Beasley, Patrick Beverley, Walker Kessler, Jarred Vanderbilt, Leandro Bolmaro, four first-round picks (2023, 2025, 2027, 2029), and a 2026 pick swap.',
    context:
      'Minnesota was coming off their first playoff appearance in years and wanted to build a contender around Anthony Edwards and Karl-Anthony Towns. Utah was dismantling their roster after years of playoff disappointments.',
    tags: ['blockbuster', 'historic-haul', 'draft-capital', 'offseason'],
    teams: [
      {
        team: 'Minnesota Timberwolves',
        abbreviation: 'MIN',
        received: ['Rudy Gobert'],
        grade: 'B+',
        outcome:
          'Despite initial criticism of the steep price, Gobert anchored a dominant defense that carried the Wolves to the Western Conference Finals in 2024. The trade looks much better in hindsight.',
        timeline: [
          { season: '2022-23', event: '1st round exit vs DEN' },
          { season: '2023-24', event: 'Western Conference Finals' },
          { season: '2024-25', event: 'Gobert wins DPOY again' },
        ],
      },
      {
        team: 'Utah Jazz',
        abbreviation: 'UTA',
        received: [
          'Malik Beasley',
          'Patrick Beverley',
          'Walker Kessler',
          'Jarred Vanderbilt',
          'Leandro Bolmaro',
          '2023 first-round pick',
          '2025 first-round pick',
          '2027 first-round pick',
          '2029 first-round pick',
          '2026 pick swap',
        ],
        grade: 'A',
        outcome:
          'Utah received a historic haul of draft capital and players. Walker Kessler became a rotation center, Vanderbilt was flipped to the Lakers, and the picks gave Utah one of the deepest asset pools in the league for their rebuild.',
        timeline: [
          { season: '2022-23', event: 'Tanked, Kessler solid rookie' },
          { season: '2023-24', event: 'Vanderbilt flipped to LAL' },
          { season: '2024-25', event: 'Massive pick war chest intact' },
        ],
      },
    ],
  },

  // #105 - Donovan Mitchell to Cavaliers
  {
    date: '2022-09-01',
    title: 'Donovan Mitchell to Cavaliers',
    summary:
      'The Cavaliers acquired Donovan Mitchell from the Jazz in exchange for Collin Sexton, Lauri Markkanen, Ochai Agbaji, three unprotected first-round picks (2025, 2027, 2029), and two pick swaps (2026, 2028).',
    context:
      'Utah continued their full teardown after trading Gobert. Cleveland was building a young core around Darius Garland, Evan Mobley, and Jarrett Allen and saw Mitchell as the missing piece to become a contender.',
    tags: ['blockbuster', 'star-trade', 'draft-capital', 'offseason'],
    teams: [
      {
        team: 'Cleveland Cavaliers',
        abbreviation: 'CLE',
        received: ['Donovan Mitchell'],
        grade: 'A',
        outcome:
          'Mitchell became the go-to scorer Cleveland needed. The Cavaliers made deep playoff runs and became a legitimate Eastern Conference contender. Mitchell signed a long-term extension, cementing the trade as a franchise-altering win.',
        timeline: [
          { season: '2022-23', event: '1st round exit vs NYK' },
          { season: '2023-24', event: '2nd round exit vs BOS' },
          { season: '2024-25', event: 'Mitchell signs max extension' },
        ],
      },
      {
        team: 'Utah Jazz',
        abbreviation: 'UTA',
        received: [
          'Collin Sexton',
          'Lauri Markkanen',
          'Ochai Agbaji',
          '2025 first-round pick',
          '2027 first-round pick',
          '2029 first-round pick',
          '2026 pick swap',
          '2028 pick swap',
        ],
        grade: 'A',
        outcome:
          'Lauri Markkanen blossomed into an All-Star and Most Improved Player in Utah. The additional picks added to an already enormous war chest. Utah won this trade on value even as they rebuilt.',
        timeline: [
          { season: '2022-23', event: 'Markkanen wins MIP, All-Star' },
          { season: '2023-24', event: 'Markkanen extension signed' },
          { season: '2024-25', event: 'Draft picks stockpiled' },
        ],
      },
    ],
  },

  // #106 - Jerami Grant to Trail Blazers
  {
    date: '2022-06-23',
    title: 'Jerami Grant to Trail Blazers',
    summary:
      'The Trail Blazers acquired Jerami Grant from the Pistons in exchange for a 2025 first-round pick (via Milwaukee) and additional draft compensation.',
    context:
      'Portland was trying to retool around Damian Lillard and needed a versatile forward. Detroit was accumulating picks as part of their long rebuild.',
    tags: ['offseason', 'forward', 'retool'],
    teams: [
      {
        team: 'Portland Trail Blazers',
        abbreviation: 'POR',
        received: ['Jerami Grant'],
        grade: 'C+',
        outcome:
          'Grant was solid but Portland continued to struggle and eventually shifted to a full rebuild. Grant was later traded to the Blazers\' roster during a transitional period before the Lillard trade.',
        timeline: [
          { season: '2022-23', event: 'Missed playoffs' },
          { season: '2023-24', event: 'Full rebuild, Lillard traded' },
        ],
      },
      {
        team: 'Detroit Pistons',
        abbreviation: 'DET',
        received: ['2025 first-round pick (via MIL)'],
        grade: 'B',
        outcome:
          'Detroit added another first-round pick to their rebuild stockpile. Reasonable return for a player who was not part of their long-term plans.',
        timeline: [
          { season: '2022-23', event: 'Lottery again, rebuilding' },
          { season: '2023 Draft', event: 'Drafted Ausar Thompson #5' },
          { season: '2023-24', event: 'Historic losing streak' },
        ],
      },
    ],
  },

  // #107 - Kyrie Irving to Mavericks
  {
    date: '2023-02-06',
    title: 'Kyrie Irving to Mavericks',
    summary:
      'The Mavericks acquired Kyrie Irving from the Nets in exchange for Spencer Dinwiddie, Dorian Finney-Smith, a 2029 unprotected first-round pick, and additional draft considerations.',
    context:
      'Irving had been a controversial figure in Brooklyn, and the Nets were looking to move on after his various off-court issues. Dallas was looking for a co-star alongside Luka Doncic to push into contention.',
    tags: ['blockbuster', 'star-trade', 'deadline-deal'],
    teams: [
      {
        team: 'Dallas Mavericks',
        abbreviation: 'DAL',
        received: ['Kyrie Irving', 'Markieff Morris'],
        grade: 'A',
        outcome:
          'Irving and Doncic formed one of the best backcourts in the NBA, reaching the 2024 NBA Finals. Irving signed a long-term extension and became a cornerstone of the franchise.',
        timeline: [
          { season: '2022-23', event: '2nd round exit vs GSW' },
          { season: '2023-24', event: 'NBA Finals loss to BOS' },
          { season: '2024-25', event: 'Irving signs extension' },
        ],
      },
      {
        team: 'Brooklyn Nets',
        abbreviation: 'BKN',
        received: [
          'Spencer Dinwiddie',
          'Dorian Finney-Smith',
          '2029 unprotected first-round pick',
          '2027 second-round pick (via DAL)',
        ],
        grade: 'C+',
        outcome:
          'Finney-Smith was a useful two-way wing but the Nets entered a full rebuild shortly after. The 2029 pick carries future value. A modest return given the circumstances.',
        timeline: [
          { season: '2022-23', event: 'KD traded days later, teardown' },
          { season: '2023-24', event: 'Full rebuild mode' },
          { season: '2024-25', event: 'Finney-Smith traded to LAL' },
        ],
      },
    ],
  },

  // #108 - Kevin Durant to Suns
  {
    date: '2023-02-09',
    title: 'Kevin Durant to Suns',
    summary:
      'The Suns acquired Kevin Durant from the Nets in exchange for Mikal Bridges, Cam Johnson, Jae Crowder, four first-round picks (2023, 2025, 2027, 2029), and a 2028 pick swap.',
    context:
      'Brooklyn was completing its superteam teardown after trading Irving days earlier. Phoenix was going all-in to build a championship contender around Durant, Devin Booker, and Chris Paul.',
    tags: ['blockbuster', 'superstar-trade', 'draft-capital', 'deadline-deal'],
    teams: [
      {
        team: 'Phoenix Suns',
        abbreviation: 'PHX',
        received: ['Kevin Durant', 'T.J. Warren'],
        grade: 'B-',
        outcome:
          'Durant provided star-level play but the Suns were eliminated in the second round in 2023 and the first round in 2024. The massive draft capital cost left Phoenix with limited flexibility to improve the supporting cast.',
        timeline: [
          { season: '2022-23', event: '2nd round exit vs DEN' },
          { season: '2023-24', event: '1st round sweep by MIN' },
          { season: '2024-25', event: 'Butler added, still struggling' },
        ],
      },
      {
        team: 'Brooklyn Nets',
        abbreviation: 'BKN',
        received: [
          'Mikal Bridges',
          'Cam Johnson',
          'Jae Crowder',
          '2023 first-round pick',
          '2025 first-round pick',
          '2027 first-round pick',
          '2029 first-round pick',
          '2028 pick swap',
        ],
        grade: 'A-',
        outcome:
          'Brooklyn received a massive war chest. Mikal Bridges was later flipped to the Knicks for another haul. Cam Johnson became a trade chip as well. The Nets maximized their return from the superteam dissolution.',
        timeline: [
          { season: '2022-23', event: '1st round sweep by PHI' },
          { season: '2023-24', event: 'Bridges flipped to NYK for picks' },
          { season: '2024-25', event: 'Full rebuild, picks stockpiled' },
        ],
      },
    ],
  },

  // #109 - Jakob Poeltl to Raptors
  {
    date: '2023-02-09',
    title: 'Jakob Poeltl to Raptors',
    summary:
      'The Raptors reacquired Jakob Poeltl from the Spurs in exchange for Khem Birch, a 2024 first-round pick, and a 2025 second-round pick.',
    context:
      'Toronto needed a true center and Poeltl had previously played for the Raptors early in his career. San Antonio continued accumulating draft picks for their rebuild.',
    tags: ['deadline-deal', 'center', 'reunion'],
    teams: [
      {
        team: 'Toronto Raptors',
        abbreviation: 'TOR',
        received: ['Jakob Poeltl'],
        grade: 'B',
        outcome:
          'Poeltl provided solid rim protection and screening for Toronto. He signed an extension but the Raptors eventually pivoted to a rebuild themselves.',
        timeline: [
          { season: '2022-23', event: 'Play-in loss' },
          { season: '2023-24', event: 'Poeltl signs extension' },
          { season: '2024-25', event: 'Raptors pivot to rebuild' },
        ],
      },
      {
        team: 'San Antonio Spurs',
        abbreviation: 'SAS',
        received: ['Khem Birch', '2024 first-round pick', '2025 second-round pick'],
        grade: 'B+',
        outcome:
          'Another first-round pick added to the Spurs\' rebuild collection. Clean return for a player not part of their long-term timeline.',
        timeline: [
          { season: '2022-23', event: 'Tanked for Wemby sweepstakes' },
          { season: '2023 Draft', event: 'Drafted Wembanyama #1' },
          { season: '2023-24', event: 'Wemby wins ROTY' },
        ],
      },
    ],
  },

  // #110 - Jrue Holiday to Trail Blazers, then to Celtics
  {
    date: '2023-09-27',
    title: 'Jrue Holiday to Trail Blazers (then to Celtics)',
    summary:
      'In a three-team deal, the Bucks traded Jrue Holiday to Portland, who then flipped him to the Celtics. Boston sent Malcolm Brogdon and Robert Williams III to Portland, plus picks. Milwaukee received Damian Lillard.',
    context:
      'This was part of the larger Damian Lillard trade. Portland served as a facilitator, and the Celtics seized the chance to add a championship-caliber guard to pair with Jayson Tatum and Jaylen Brown.',
    tags: ['three-team-deal', 'champion', 'offseason'],
    teams: [
      {
        team: 'Boston Celtics',
        abbreviation: 'BOS',
        received: ['Jrue Holiday'],
        grade: 'A+',
        outcome:
          'Holiday was the missing piece. He provided elite defense and veteran leadership as the Celtics won the 2024 NBA Championship, their first since 2008.',
        timeline: [
          { season: '2023-24', event: 'NBA Champions' },
          { season: '2024-25', event: 'Holiday signs extension' },
        ],
      },
      {
        team: 'Portland Trail Blazers',
        abbreviation: 'POR',
        received: [
          'Malcolm Brogdon',
          'Robert Williams III',
          '2029 first-round pick (via BOS)',
          'additional draft considerations',
        ],
        grade: 'B',
        outcome:
          'Portland accumulated young players and picks as a facilitator in the larger Lillard deal. Brogdon was later moved in a separate transaction.',
        timeline: [
          { season: '2023-24', event: 'Brogdon traded, tank mode' },
          { season: '2024-25', event: 'Rebuild continues' },
        ],
      },
    ],
  },

  // #111 - Damian Lillard to Bucks
  {
    date: '2023-09-27',
    title: 'Damian Lillard to Bucks',
    summary:
      'The Bucks acquired Damian Lillard from the Trail Blazers in a multi-team deal. Milwaukee sent Jrue Holiday (to Portland/Boston) and additional assets to complete the trade. Portland received Deandre Ayton, Toumani Camara, three first-round picks, and two pick swaps.',
    context:
      'Lillard demanded a trade after 11 seasons in Portland, initially requesting a move to Miami. When that fell through, Milwaukee emerged as the destination. Portland began their full-scale rebuild.',
    tags: ['blockbuster', 'superstar-trade', 'multi-team', 'offseason'],
    teams: [
      {
        team: 'Milwaukee Bucks',
        abbreviation: 'MIL',
        received: ['Damian Lillard'],
        grade: 'B-',
        outcome:
          'Lillard struggled to find chemistry with Giannis Antetokounmpo initially and the Bucks were eliminated in the first round in 2024. The loss of Jrue Holiday was deeply felt, especially given Boston\'s subsequent championship.',
        timeline: [
          { season: '2023-24', event: '1st round exit vs IND' },
          { season: '2024-25', event: 'Lillard-Giannis chemistry improves' },
        ],
      },
      {
        team: 'Portland Trail Blazers',
        abbreviation: 'POR',
        received: [
          'Deandre Ayton',
          'Toumani Camara',
          'Jrue Holiday (rerouted to BOS)',
          '2024 first-round pick (via MIL)',
          '2026 first-round pick (via MIL)',
          '2028 first-round pick (via MIL)',
          '2025 pick swap (via MIL)',
          '2027 pick swap (via MIL)',
        ],
        grade: 'B+',
        outcome:
          'Portland received a solid rebuild package. Camara showed promise as a young wing. The first-round picks and swaps gave Portland significant future flexibility.',
        timeline: [
          { season: '2023-24', event: 'Lottery, Camara shows promise' },
          { season: '2024 Draft', event: 'Drafted Donovan Clingan #7' },
          { season: '2024-25', event: 'Young core developing' },
        ],
      },
    ],
  },

  // #112 - OG Anunoby to Knicks
  {
    date: '2023-12-30',
    title: 'OG Anunoby to Knicks',
    summary:
      'The Knicks acquired OG Anunoby from the Raptors in exchange for RJ Barrett, Immanuel Quickley, and a 2024 second-round pick.',
    context:
      'Toronto was beginning a rebuild and Anunoby had expressed reluctance to sign an extension. New York was building an elite defensive roster under Tom Thibodeau and saw Anunoby as the perfect 3-and-D wing.',
    tags: ['in-season', 'defense', 'wing-upgrade'],
    teams: [
      {
        team: 'New York Knicks',
        abbreviation: 'NYK',
        received: ['OG Anunoby'],
        grade: 'A',
        outcome:
          'Anunoby transformed the Knicks\' defense and was a critical piece in their deep 2024 playoff run. He signed a five-year max extension in the offseason, cementing the deal as a major win for New York.',
        timeline: [
          { season: '2023-24', event: '2nd round exit vs IND' },
          { season: '2024-25', event: 'OG signs 5-year max extension' },
        ],
      },
      {
        team: 'Toronto Raptors',
        abbreviation: 'TOR',
        received: ['RJ Barrett', 'Immanuel Quickley', '2024 second-round pick'],
        grade: 'B',
        outcome:
          'Barrett showed flashes of being a lead scorer in Toronto and Quickley became the starting point guard. Both players provided a young foundation for the Raptors rebuild.',
        timeline: [
          { season: '2023-24', event: 'Lottery, Barrett shows flashes' },
          { season: '2024-25', event: 'Quickley starting PG, rebuild' },
        ],
      },
    ],
  },

  // #113 - Pascal Siakam to Pacers
  {
    date: '2024-01-17',
    title: 'Pascal Siakam to Pacers',
    summary:
      'The Pacers acquired Pascal Siakam from the Raptors in exchange for Bruce Brown, Jordan Nwora, Kira Lewis Jr., three second-round picks, and a conditional 2026 first-round pick (via CLE).',
    context:
      'Toronto was fully committed to their rebuild and Siakam was entering the final year of his contract. Indiana was emerging as a surprise contender and needed a star-caliber forward to pair with Tyrese Haliburton.',
    tags: ['deadline-deal', 'star-trade', 'contender-move'],
    teams: [
      {
        team: 'Indiana Pacers',
        abbreviation: 'IND',
        received: ['Pascal Siakam'],
        grade: 'A',
        outcome:
          'Siakam was outstanding, helping the Pacers reach the Eastern Conference Finals in 2024. He signed a max extension in the offseason, giving Indiana a legitimate All-Star caliber second option.',
        timeline: [
          { season: '2023-24', event: 'Eastern Conference Finals' },
          { season: '2024-25', event: 'Siakam signs max extension' },
        ],
      },
      {
        team: 'Toronto Raptors',
        abbreviation: 'TOR',
        received: [
          'Bruce Brown',
          'Jordan Nwora',
          'Kira Lewis Jr.',
          '2026 conditional first-round pick (via CLE)',
          'three second-round picks',
        ],
        grade: 'C+',
        outcome:
          'A modest return for a star player, though Toronto had limited leverage with Siakam nearing free agency. Bruce Brown was later moved as the rebuild continued.',
        timeline: [
          { season: '2023-24', event: 'Lottery, Brown traded' },
          { season: '2024-25', event: 'Rebuild around young core' },
        ],
      },
    ],
  },

  // #114 - Alex Caruso to Thunder
  {
    date: '2024-02-08',
    title: 'Alex Caruso to Thunder',
    summary:
      'The Thunder acquired Alex Caruso from the Bulls in exchange for Josh Giddey.',
    context:
      'OKC was building an elite defensive team and coveted Caruso as the perfect complement to Shai Gilgeous-Alexander and Chet Holmgren. Chicago was looking for a young playmaker to reset their timeline.',
    tags: ['deadline-deal', 'defense', 'swap'],
    teams: [
      {
        team: 'Oklahoma City Thunder',
        abbreviation: 'OKC',
        received: ['Alex Caruso'],
        grade: 'A',
        outcome:
          'Caruso immediately became one of the best perimeter defenders in the league and helped the Thunder emerge as a top Western Conference contender. An outstanding fit for OKC\'s defensive identity.',
        timeline: [
          { season: '2023-24', event: '2nd round exit vs DAL' },
          { season: '2024-25', event: 'OKC top seed in West' },
        ],
      },
      {
        team: 'Chicago Bulls',
        abbreviation: 'CHI',
        received: ['Josh Giddey'],
        grade: 'C',
        outcome:
          'Giddey showed playmaking ability but his shooting limitations and defensive concerns persisted. A bet on upside that has not clearly paid off.',
        timeline: [
          { season: '2023-24', event: 'Play-in loss' },
          { season: '2024-25', event: 'Giddey inconsistent starter' },
        ],
      },
    ],
  },

  // #115 - Mikal Bridges to Knicks
  {
    date: '2024-06-26',
    title: 'Mikal Bridges to Knicks',
    summary:
      'The Knicks acquired Mikal Bridges from the Nets in exchange for Bojan Bogdanovic, four unprotected first-round picks (2025, 2027, 2029, 2031), a 2025 pick swap, and a protected 2028 first-round pick.',
    context:
      'New York reunited the Villanova core of Bridges, Jalen Brunson, Josh Hart, and Donte DiVincenzo. Brooklyn continued stockpiling picks in their rebuild after the superteam era collapsed.',
    tags: ['blockbuster', 'draft-capital', 'offseason', 'villanova-reunion'],
    teams: [
      {
        team: 'New York Knicks',
        abbreviation: 'NYK',
        received: ['Mikal Bridges'],
        grade: 'B',
        outcome:
          'Bridges brought elite defense and reliable three-point shooting, reuniting the Villanova connection. The Knicks became one of the deepest rosters in the East, though the massive pick cost carries long-term risk.',
        timeline: [
          { season: '2024-25', event: 'Villanova core reunited, contending' },
        ],
      },
      {
        team: 'Brooklyn Nets',
        abbreviation: 'BKN',
        received: [
          'Bojan Bogdanovic',
          '2025 unprotected first-round pick',
          '2027 unprotected first-round pick',
          '2029 unprotected first-round pick',
          '2031 unprotected first-round pick',
          '2025 pick swap',
          '2028 protected first-round pick',
        ],
        grade: 'A-',
        outcome:
          'Another excellent draft haul for the Nets\' rebuild. Five first-round picks and a swap give Brooklyn enormous flexibility to build through the draft or make future trades.',
        timeline: [
          { season: '2024-25', event: 'Rebuild with massive pick haul' },
        ],
      },
    ],
  },

  // #116 - Paul George sign-and-trade to 76ers
  {
    date: '2024-07-10',
    title: 'Paul George Sign-and-Trade to 76ers',
    summary:
      'The 76ers acquired Paul George from the Clippers via sign-and-trade. George signed a four-year max contract with Philadelphia, and the Clippers received draft compensation and salary filler in return.',
    context:
      'George opted out of his contract with the Clippers after failing to reach an agreement on a new deal. Philadelphia, after striking out on other free agents in previous years, landed their long-sought third star to pair with Joel Embiid and Tyrese Maxey.',
    tags: ['sign-and-trade', 'max-contract', 'big-three', 'offseason'],
    teams: [
      {
        team: 'Philadelphia 76ers',
        abbreviation: 'PHI',
        received: ['Paul George'],
        grade: 'B+',
        outcome:
          'George gave the 76ers a legitimate third star, though injuries to him and Embiid have continued to be a concern. The fit on paper is excellent when all three are healthy.',
        timeline: [
          { season: '2024-25', event: 'Injury-plagued debut season' },
        ],
      },
      {
        team: 'Los Angeles Clippers',
        abbreviation: 'LAC',
        received: [
          '2025 first-round pick (via PHI, lottery-protected)',
          '2027 first-round pick (via PHI)',
          'additional draft considerations',
        ],
        grade: 'C',
        outcome:
          'The Clippers lost their second star for modest draft compensation. They pivoted to a Kawhi Leonard-centered rebuild with more cap flexibility but significantly less talent on the roster.',
        timeline: [
          { season: '2024-25', event: 'Kawhi injured again, lottery bound' },
        ],
      },
    ],
  },

  // #117 - Karl-Anthony Towns to Knicks
  {
    date: '2024-09-28',
    title: 'Karl-Anthony Towns to Knicks',
    summary:
      'The Knicks acquired Karl-Anthony Towns from the Timberwolves in exchange for Julius Randle, Donte DiVincenzo, and a 2025 first-round pick (via DET, top-13 protected).',
    context:
      'Minnesota needed to shed salary after extending Anthony Edwards and acquiring Rudy Gobert. Towns had been the franchise centerpiece but his fit next to Gobert was awkward. New York was adding another star to their rapidly improving roster.',
    tags: ['blockbuster', 'star-trade', 'offseason'],
    teams: [
      {
        team: 'New York Knicks',
        abbreviation: 'NYK',
        received: ['Karl-Anthony Towns'],
        grade: 'A',
        outcome:
          'Towns thrived in New York, providing elite spacing and scoring at center. His ability to stretch the floor unlocked the Knicks\' offense and gave them a legitimate All-Star big man.',
        timeline: [
          { season: '2024-25', event: 'Conference Finals (lost to IND)' },
          { season: '2024-25', event: 'KAT All-Star selection' },
        ],
      },
      {
        team: 'Minnesota Timberwolves',
        abbreviation: 'MIN',
        received: [
          'Julius Randle',
          'Donte DiVincenzo',
          '2025 first-round pick (via DET, top-13 protected)',
        ],
        grade: 'B-',
        outcome:
          'Randle provided scoring punch but the Wolves missed Towns\' shooting. DiVincenzo added depth. The move was partly salary-driven and the basketball fit was a step back in some areas.',
        timeline: [
          { season: '2024-25', event: 'Conference Finals (lost to OKC)' },
          { season: '2024-25', event: 'Back-to-back WCF appearances' },
        ],
      },
    ],
  },

  // #118 - Dejounte Murray to Pelicans
  {
    date: '2024-06-21',
    title: 'Dejounte Murray to Pelicans',
    summary:
      'The Pelicans acquired Dejounte Murray from the Hawks in exchange for Larry Nance Jr., Dyson Daniels, E.J. Liddell, two first-round picks (2025, 2027), and a pick swap.',
    context:
      'Atlanta was unwinding the Murray experiment after the pairing with Trae Young did not produce the expected results. New Orleans needed a guard to pair with Zion Williamson and Brandon Ingram after CJ McCollum\'s inconsistency.',
    tags: ['offseason', 'star-trade', 'guard'],
    teams: [
      {
        team: 'New Orleans Pelicans',
        abbreviation: 'NOP',
        received: ['Dejounte Murray'],
        grade: 'B',
        outcome:
          'Murray gave the Pelicans a dynamic two-way guard, though injuries across the roster limited their ceiling. The fit with Zion was promising when both were healthy.',
        timeline: [
          { season: '2024-25', event: 'Missed playoffs, injury-plagued' },
          { season: '2024-25', event: 'Zion and Murray rarely on court together' },
        ],
      },
      {
        team: 'Atlanta Hawks',
        abbreviation: 'ATL',
        received: [
          'Larry Nance Jr.',
          'Dyson Daniels',
          'E.J. Liddell',
          '2025 first-round pick',
          '2027 first-round pick',
          'pick swap rights',
        ],
        grade: 'B+',
        outcome:
          'Atlanta recouped significant draft capital after the Murray experiment failed. Dyson Daniels showed defensive promise. The Hawks reset their flexibility around Trae Young.',
        timeline: [
          { season: '2024-25', event: 'Play-In tournament exit' },
          { season: '2024-25', event: 'Daniels named Most Improved Player' },
        ],
      },
    ],
  },

  // #119 - Lauri Markkanen extension/re-signing with Jazz
  // Replacing with a trade: Chris Paul to Warriors
  {
    date: '2023-06-23',
    title: 'Chris Paul to Warriors',
    summary:
      'The Warriors acquired Chris Paul from the Wizards (who had just received him from the Suns) in exchange for Jordan Poole, Ryan Rollins, and a 2030 first-round pick.',
    context:
      'Phoenix dumped Chris Paul to Washington as part of the Bradley Beal acquisition. Golden State was looking for a veteran point guard after a disappointing title defense, and saw Paul as a cerebral fit alongside Stephen Curry.',
    tags: ['offseason', 'veteran', 'multi-team'],
    teams: [
      {
        team: 'Golden State Warriors',
        abbreviation: 'GSW',
        received: ['Chris Paul'],
        grade: 'C+',
        outcome:
          'Paul was solid but limited by age. The Warriors missed the playoffs in 2024 and Paul was waived midseason. The bigger loss was Jordan Poole and the first-round pick.',
        timeline: [
          { season: '2023-24', event: 'Play-In loss, missed playoffs' },
          { season: '2024', event: 'Paul waived midseason' },
          { season: '2024-25', event: '1st round exit (Hou/Min matchup)' },
        ],
      },
      {
        team: 'Washington Wizards',
        abbreviation: 'WAS',
        received: ['Jordan Poole', 'Ryan Rollins', '2030 first-round pick'],
        grade: 'C',
        outcome:
          'Poole was given a significant role but struggled with efficiency and decision-making. The 2030 pick has long-term value. A mixed return in a salary-dump situation.',
        timeline: [
          { season: '2023-24', event: 'Full rebuild, worst record in NBA' },
          { season: '2024-25', event: 'Full rebuild continues, bottom-3 record' },
        ],
      },
    ],
  },

  // #120 - Bradley Beal to Suns
  {
    date: '2023-06-17',
    title: 'Bradley Beal to Suns',
    summary:
      'The Suns acquired Bradley Beal from the Wizards in exchange for Chris Paul, Landry Shamet, picks, and additional considerations. Beal waived his no-trade clause to join Phoenix.',
    context:
      'Phoenix doubled down on their star-studded approach, adding Beal to a roster with Kevin Durant and Devin Booker. Washington received Chris Paul (who was rerouted to Golden State) and began a full rebuild.',
    tags: ['blockbuster', 'big-three', 'no-trade-clause', 'offseason'],
    teams: [
      {
        team: 'Phoenix Suns',
        abbreviation: 'PHX',
        received: ['Bradley Beal'],
        grade: 'D+',
        outcome:
          'Beal was a significant disappointment in Phoenix, averaging fewer points than in Washington and struggling to find his role alongside Booker and Durant. His large contract limited roster flexibility.',
        timeline: [
          { season: '2023-24', event: '1st round sweep by MIN' },
          { season: '2024-25', event: 'Missed playoffs' },
          { season: '2024-25', event: 'Beal contract becomes albatross' },
        ],
      },
      {
        team: 'Washington Wizards',
        abbreviation: 'WAS',
        received: [
          'Chris Paul (rerouted to GSW)',
          'Landry Shamet',
          '2024 first-round pick',
          '2026 conditional first-round pick',
          '2028 second-round pick',
        ],
        grade: 'C+',
        outcome:
          'Washington cleared Beal\'s massive contract and began a full rebuild. The draft picks provided a foundation but the return felt light for a three-time All-Star.',
        timeline: [
          { season: '2023-24', event: 'Full rebuild underway' },
          { season: '2024-25', event: 'Bottom-3 record, top-5 pick incoming' },
        ],
      },
    ],
  },

  // #121 - Kristaps Porzingis to Celtics
  {
    date: '2023-06-25',
    title: 'Kristaps Porzingis to Celtics',
    summary:
      'The Celtics acquired Kristaps Porzingis from the Wizards in exchange for Marcus Smart, Danilo Gallinari, Mike Muscala, a 2024 first-round pick, and a 2023 second-round pick.',
    context:
      'Boston was looking to upgrade their offensive firepower at center after falling short in the postseason. Washington was happy to move Porzingis as they entered rebuild mode.',
    tags: ['offseason', 'center-upgrade', 'champion'],
    teams: [
      {
        team: 'Boston Celtics',
        abbreviation: 'BOS',
        received: ['Kristaps Porzingis'],
        grade: 'A',
        outcome:
          'Porzingis was a revelation in Boston, providing elite floor spacing and rim protection. Despite a calf injury in the Finals, the Celtics won the 2024 NBA Championship. The trade was a masterstroke.',
        timeline: [
          { season: '2023-24', event: 'NBA Champions' },
          { season: '2024-25', event: '2nd round exit vs NYK' },
        ],
      },
      {
        team: 'Washington Wizards',
        abbreviation: 'WAS',
        received: [
          'Marcus Smart',
          'Danilo Gallinari',
          'Mike Muscala',
          '2024 first-round pick',
          '2023 second-round pick',
        ],
        grade: 'C',
        outcome:
          'Smart provided veteran leadership but did not fit the rebuilding timeline and was later moved. The picks were modest. A fair deal at the time but Boston clearly won.',
        timeline: [
          { season: '2023-24', event: 'Smart traded to MEM mid-season' },
          { season: '2024-25', event: 'Continued rebuild' },
        ],
      },
    ],
  },

  // #122 - Domantas Sabonis to Kings (from 2022)
  {
    date: '2022-02-08',
    title: 'Domantas Sabonis to Kings',
    summary:
      'The Kings acquired Domantas Sabonis from the Pacers in exchange for Tyrese Haliburton, Buddy Hield, and Tristan Thompson.',
    context:
      'Sacramento was desperate to end their historic playoff drought and saw Sabonis as the perfect complement to De\'Aaron Fox. Indiana received a potential franchise point guard in Haliburton.',
    tags: ['deadline-deal', 'franchise-altering', 'gamble'],
    teams: [
      {
        team: 'Sacramento Kings',
        abbreviation: 'SAC',
        received: ['Domantas Sabonis', 'Jeremy Lamb', 'Justin Holiday'],
        grade: 'B',
        outcome:
          'Sabonis was excellent, making All-Star teams and ending Sacramento\'s 16-year playoff drought in 2023 by lighting the beam. However, trading Haliburton remains controversial as he became an All-Star in Indiana.',
        timeline: [
          { season: '2022-23', event: '1st round exit (ended 16-yr drought)' },
          { season: '2023-24', event: 'Play-In loss' },
          { season: '2024-25', event: 'Missed Play-In, Fox traded' },
        ],
      },
      {
        team: 'Indiana Pacers',
        abbreviation: 'IND',
        received: ['Tyrese Haliburton', 'Buddy Hield', 'Tristan Thompson'],
        grade: 'A+',
        outcome:
          'Haliburton became the face of the franchise, earning All-Star selections and leading Indiana to the Eastern Conference Finals in 2024. One of the best trade returns in recent memory.',
        timeline: [
          { season: '2022-23', event: 'Haliburton All-Star' },
          { season: '2023-24', event: 'Conference Finals' },
          { season: '2024-25', event: 'NBA Finals run' },
        ],
      },
    ],
  },

  // #123 - Malcolm Brogdon to Celtics
  {
    date: '2022-06-30',
    title: 'Malcolm Brogdon to Celtics',
    summary:
      'The Celtics acquired Malcolm Brogdon from the Pacers in exchange for Daniel Theis, Aaron Nesmith, Nik Stauskas, Malik Fitts, Juwan Morgan, a 2023 first-round pick, and the right to swap 2026 second-round picks.',
    context:
      'Boston was coming off an NBA Finals loss and wanted to add backcourt depth. Indiana was pivoting to a Haliburton-centric timeline and Brogdon did not fit their long-term plans.',
    tags: ['offseason', 'depth-move', 'sixth-man'],
    teams: [
      {
        team: 'Boston Celtics',
        abbreviation: 'BOS',
        received: ['Malcolm Brogdon'],
        grade: 'A-',
        outcome:
          'Brogdon won Sixth Man of the Year in 2023 and provided critical bench scoring. He was later used as salary filler in the Jrue Holiday trade. Outstanding one-year value.',
        timeline: [
          { season: '2022-23', event: 'Sixth Man of the Year' },
          { season: '2023', event: 'Flipped to POR for Jrue Holiday' },
        ],
      },
      {
        team: 'Indiana Pacers',
        abbreviation: 'IND',
        received: [
          'Daniel Theis',
          'Aaron Nesmith',
          'Nik Stauskas',
          'Malik Fitts',
          'Juwan Morgan',
          '2023 first-round pick',
        ],
        grade: 'B-',
        outcome:
          'Nesmith became a useful rotation player in Indiana. The first-round pick added to their rebuild assets. Reasonable return for a player with injury concerns.',
        timeline: [
          { season: '2023-24', event: 'Conference Finals (Nesmith key rotation)' },
          { season: '2024-25', event: 'NBA Finals run' },
        ],
      },
    ],
  },

  // #124 - De'Aaron Fox to Spurs (if traded) or another 2025 trade
  {
    date: '2025-02-06',
    title: 'Jimmy Butler to Phoenix Suns',
    summary:
      'The Suns acquired Jimmy Butler from the Heat in a sign-and-trade deadline deal. Miami received Josh Okogie, a conditional first-round pick, and salary considerations.',
    context:
      'Butler had a dramatic fallout with the Heat, being suspended twice for conduct detrimental to the team. He demanded a trade and Phoenix emerged as the destination, adding Butler to their star-heavy roster of Durant, Booker, and Beal.',
    tags: ['deadline-deal', 'star-trade', 'drama', 'sign-and-trade'],
    teams: [
      {
        team: 'Phoenix Suns',
        abbreviation: 'PHX',
        received: ['Jimmy Butler'],
        grade: 'C',
        outcome:
          'Butler joined an already crowded star lineup and the fit remains a question mark. At 35, his best years may be behind him. The outcome is still developing.',
        timeline: [
          { season: '2024-25', event: 'Missed playoffs, roster overhaul' },
          { season: '2024-25', event: 'Butler fit questions persist' },
        ],
      },
      {
        team: 'Miami Heat',
        abbreviation: 'MIA',
        received: [
          'Josh Okogie',
          '2025 conditional first-round pick',
          'salary considerations',
        ],
        grade: 'D+',
        outcome:
          'A meager return for a franchise icon, though Miami had limited leverage given Butler\'s behavior. The Heat pivoted to building around Bam Adebayo and their young core.',
        timeline: [
          { season: '2024-25', event: 'Play-In tournament exit' },
          { season: '2024-25', event: 'Retooling around Bam' },
        ],
      },
    ],
  },

  // #125 - De'Aaron Fox to Spurs
  {
    date: '2025-02-06',
    title: "De'Aaron Fox to Spurs",
    summary:
      "The Spurs acquired De'Aaron Fox from the Kings in exchange for a package centered on multiple future first-round picks and young players. San Antonio paired Fox with Victor Wembanyama to create one of the most exciting young duos in the NBA.",
    context:
      "Fox requested a trade from Sacramento after the Kings struggled to build a consistent contender around him. San Antonio had been stockpiling assets for years and used their war chest to land a dynamic point guard for the Wembanyama era.",
    tags: ['blockbuster', 'star-trade', 'deadline-deal', 'franchise-building'],
    teams: [
      {
        team: 'San Antonio Spurs',
        abbreviation: 'SAS',
        received: ["De'Aaron Fox"],
        grade: 'A',
        outcome:
          'Fox and Wembanyama formed an electrifying pairing. Early returns are extremely promising, though long-term outcomes are still developing.',
        timeline: [
          { season: '2024-25', event: 'Wembanyama DPOY candidate (pre-injury)' },
          { season: '2024-25', event: 'Missed playoffs, strong foundation' },
        ],
      },
      {
        team: 'Sacramento Kings',
        abbreviation: 'SAC',
        received: [
          'Multiple future first-round picks',
          'Young player assets',
        ],
        grade: 'B',
        outcome:
          'Sacramento received significant draft capital but lost their franchise point guard. The rebuild implications are still unfolding.',
        timeline: [
          { season: '2024-25', event: 'Play-In tournament exit' },
          { season: '2024-25', event: 'DeRozan + Sabonis core uncertain' },
        ],
      },
    ],
  },
];

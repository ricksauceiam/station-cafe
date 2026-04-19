import { SeedTrade } from './types';

export const tradesPart2: SeedTrade[] = [
  // #51
  {
    date: '2016-06-23',
    title: 'Serge Ibaka Traded to Magic',
    summary:
      'Thunder trade Serge Ibaka to Orlando for Victor Oladipo, Ersan Ilyasova, and the rights to Domantas Sabonis on draft night.',
    context:
      'OKC was coming off a Western Conference Finals loss to the Warriors and reshuffled the roster. Ibaka was entering his final contract year. Oladipo had underperformed in Orlando.',
    tags: ['draft-night', 'rebuild', 'expiring-contract'],
    teams: [
      {
        team: 'Orlando Magic',
        abbreviation: 'ORL',
        received: ['Serge Ibaka'],
        grade: 'C',
        outcome:
          'Ibaka played only half a season in Orlando before being flipped to Toronto. A short-term rental with minimal impact.',
        timeline: [
          { season: '2016-17', event: 'Ibaka traded to Toronto midseason' },
          { season: '2016-17', event: 'Missed playoffs (29-53)' },
          { season: '2017-18', event: 'Missed playoffs again' },
        ],
      },
      {
        team: 'Oklahoma City Thunder',
        abbreviation: 'OKC',
        received: ['Victor Oladipo', 'Ersan Ilyasova', 'Domantas Sabonis (draft rights)'],
        grade: 'B+',
        outcome:
          'Oladipo and Sabonis spent one year in OKC before being packaged in the Paul George trade. Sabonis became an All-Star in Indiana.',
        timeline: [
          { season: '2016-17', event: '1st round exit vs Rockets' },
          { season: '2017 Offseason', event: 'Oladipo & Sabonis traded for Paul George' },
          { season: '2017-18', event: 'Oladipo wins MIP in Indiana' },
          { season: '2019-20', event: 'Sabonis named All-Star' },
        ],
      },
    ],
  },
  // #52
  {
    date: '2016-07-07',
    title: 'Jeff Teague Traded to Pacers',
    summary:
      'Hawks trade Jeff Teague to Indiana for the 12th pick in the 2016 draft (Taurean Prince).',
    context:
      'Atlanta was beginning a retool after their 60-win 2014-15 season faded. Teague was a steady starting point guard but the Hawks wanted to move younger.',
    tags: ['offseason', 'retool', 'draft-pick'],
    teams: [
      {
        team: 'Indiana Pacers',
        abbreviation: 'IND',
        received: ['Jeff Teague'],
        grade: 'C+',
        outcome:
          'Teague was a decent starter for one season in Indiana but was not re-signed. Serviceable but unmemorable.',
        timeline: [
          { season: '2016-17', event: '1st round exit vs Cavaliers' },
          { season: '2017 FA', event: 'Teague signs with Timberwolves' },
        ],
      },
      {
        team: 'Atlanta Hawks',
        abbreviation: 'ATL',
        received: ['2016 1st Round Pick (Taurean Prince)'],
        grade: 'B',
        outcome:
          'Prince became a solid rotation player for Atlanta before being dealt to Brooklyn. A reasonable return for a departing point guard.',
        timeline: [
          { season: '2016-17', event: '1st round exit vs Wizards' },
          { season: '2017-18', event: 'Prince starts 60 games' },
          { season: '2018-19', event: 'Prince traded to Brooklyn' },
        ],
      },
    ],
  },
  // #53
  {
    date: '2016-11-22',
    title: 'Serge Ibaka Traded to Raptors',
    summary:
      'Magic trade Serge Ibaka to Toronto for Terrence Ross and a 2017 first-round pick.',
    context:
      'Toronto was looking to bolster their frontcourt for a playoff push alongside Lowry and DeRozan. Orlando had acquired Ibaka only months earlier and decided to cash in.',
    tags: ['midseason', 'win-now', 'frontcourt-upgrade'],
    teams: [
      {
        team: 'Toronto Raptors',
        abbreviation: 'TOR',
        received: ['Serge Ibaka'],
        grade: 'B+',
        outcome:
          'Ibaka re-signed with Toronto and became a key piece on their 2019 championship team. Excellent long-term value.',
        timeline: [
          { season: '2016-17', event: '2nd round exit vs Cavaliers' },
          { season: '2017-18', event: 'Ibaka re-signs long-term' },
          { season: '2018-19', event: 'NBA Champions' },
        ],
      },
      {
        team: 'Orlando Magic',
        abbreviation: 'ORL',
        received: ['Terrence Ross', '2017 1st Round Pick'],
        grade: 'B-',
        outcome:
          'Ross became a reliable bench scorer in Orlando for years. The pick was used on a role player. Decent return for a rental.',
        timeline: [
          { season: '2016-17', event: 'Missed playoffs (29-53)' },
          { season: '2017-18', event: 'Ross becomes bench spark plug' },
          { season: '2018-19', event: '1st round exit vs Raptors' },
        ],
      },
    ],
  },
  // #54
  {
    date: '2017-02-23',
    title: 'DeMarcus Cousins Traded to Pelicans',
    summary:
      'Kings shock the league by trading DeMarcus Cousins and Omri Casspi to New Orleans for Buddy Hield, Tyreke Evans, Langston Galloway, a 2017 first-round pick, and a 2017 second-round pick.',
    context:
      'Sacramento had grown tired of controversy surrounding Cousins and moved him before he could leave in free agency. The deal was completed just before the trade deadline and paired Cousins with Anthony Davis.',
    tags: ['trade-deadline', 'franchise-player', 'superstar-duo'],
    teams: [
      {
        team: 'New Orleans Pelicans',
        abbreviation: 'NOP',
        received: ['DeMarcus Cousins', 'Omri Casspi'],
        grade: 'C+',
        outcome:
          'Cousins and Davis showed flashes but Cousins tore his Achilles in January 2018, ending the experiment. He left in free agency that summer.',
        timeline: [
          { season: '2016-17', event: 'Missed playoffs' },
          { season: '2017-18', event: 'Cousins tears Achilles in January' },
          { season: '2017-18', event: 'AD leads team to 2nd round without Cousins' },
          { season: '2018 FA', event: 'Cousins signs with Warriors' },
        ],
      },
      {
        team: 'Sacramento Kings',
        abbreviation: 'SAC',
        received: [
          'Buddy Hield',
          'Tyreke Evans',
          'Langston Galloway',
          '2017 1st Round Pick',
          '2017 2nd Round Pick',
        ],
        grade: 'B',
        outcome:
          'Hield became a sharpshooter and key rotation player for years in Sacramento. Given Cousins\' injury, the Kings got fair value.',
        timeline: [
          { season: '2016-17', event: 'Missed playoffs' },
          { season: '2017-18', event: 'Hield starts, shoots 43% from three' },
          { season: '2018-19', event: 'Missed playoffs by 1 game (39-43)' },
          { season: '2019-20', event: 'Hield averages 19.2 PPG' },
        ],
      },
    ],
  },
  // #55
  {
    date: '2017-06-19',
    title: 'Chris Paul Traded to Rockets',
    summary:
      'Clippers agree to a sign-and-trade sending Chris Paul to Houston for Patrick Beverley, Sam Dekker, Montrezl Harrell, DeAndre Liggins, Lou Williams, Kyle Wiltjer, Darrun Hilliard, a 2018 first-round pick, and cash.',
    context:
      'Paul wanted to join James Harden in Houston to form a super backcourt. The Clippers, facing the loss of Paul for nothing, extracted a massive haul of players and picks.',
    tags: ['sign-and-trade', 'super-team', 'backcourt-duo'],
    teams: [
      {
        team: 'Houston Rockets',
        abbreviation: 'HOU',
        received: ['Chris Paul'],
        grade: 'A-',
        outcome:
          'Paul and Harden took the Warriors to 7 games in the 2018 WCF, going up 3-2 before Paul\'s hamstring injury. One of the closest near-championship runs in modern history.',
        timeline: [
          { season: '2017-18', event: '65 wins, WCF Game 7 loss' },
          { season: '2017-18', event: 'CP3 hamstring injury in Game 5' },
          { season: '2018-19', event: '2nd round exit vs Warriors' },
          { season: '2019 Offseason', event: 'CP3 traded to Thunder' },
        ],
      },
      {
        team: 'Los Angeles Clippers',
        abbreviation: 'LAC',
        received: [
          'Patrick Beverley',
          'Sam Dekker',
          'Montrezl Harrell',
          'Lou Williams',
          'DeAndre Liggins',
          'Kyle Wiltjer',
          'Darrun Hilliard',
          '2018 1st Round Pick',
        ],
        grade: 'A',
        outcome:
          'Lou Williams and Harrell became key players for the Clippers. Williams won Sixth Man of the Year, and Harrell later won the award too. An elite return for a departing star.',
        timeline: [
          { season: '2017-18', event: 'Missed playoffs' },
          { season: '2018-19', event: 'Lou Williams wins 6MOY' },
          { season: '2018-19', event: '1st round upset of Warriors (2 games)' },
          { season: '2019-20', event: 'Harrell wins 6MOY' },
        ],
      },
    ],
  },
  // #56
  {
    date: '2017-06-22',
    title: 'Jimmy Butler Traded to Timberwolves',
    summary:
      'Bulls trade Jimmy Butler and the 16th pick to Minnesota for Zach LaVine, Kris Dunn, and the 7th pick (Lauri Markkanen).',
    context:
      'Chicago decided to blow it up after a disappointing playoff exit. Tom Thibodeau, now coaching the Wolves, reunited with his former star. LaVine was recovering from a torn ACL.',
    tags: ['draft-night', 'rebuild', 'star-trade', 'reunion'],
    teams: [
      {
        team: 'Minnesota Timberwolves',
        abbreviation: 'MIN',
        received: ['Jimmy Butler', '2017 16th Pick'],
        grade: 'B',
        outcome:
          'Butler led Minnesota to the playoffs for the first time since 2004, but the relationship soured and he demanded a trade after just one full season.',
        timeline: [
          { season: '2017-18', event: 'Playoffs for first time since 2004' },
          { season: '2017-18', event: '1st round exit vs Rockets' },
          { season: '2018-19', event: 'Butler demands trade after drama' },
          { season: '2018-19', event: 'Butler traded to 76ers' },
        ],
      },
      {
        team: 'Chicago Bulls',
        abbreviation: 'CHI',
        received: ['Zach LaVine', 'Kris Dunn', '2017 7th Pick (Lauri Markkanen)'],
        grade: 'B+',
        outcome:
          'LaVine recovered from his ACL tear and became a two-time All-Star in Chicago. Markkanen was a solid contributor before being traded. Strong rebuild haul.',
        timeline: [
          { season: '2017-18', event: 'LaVine returns from ACL, averages 16.7 PPG' },
          { season: '2018-19', event: 'Markkanen averages 18.7 PPG' },
          { season: '2021-22', event: 'LaVine named All-Star' },
          { season: '2021-22', event: 'LaVine signs max extension' },
        ],
      },
    ],
  },
  // #57
  {
    date: '2017-06-30',
    title: 'Paul George Traded to Thunder',
    summary:
      'Pacers trade Paul George to Oklahoma City for Victor Oladipo and Domantas Sabonis.',
    context:
      'George publicly stated he wanted to go to the Lakers in free agency. Indiana, facing losing him for nothing, took OKC\'s offer to pair George with Russell Westbrook. The Pacers were widely mocked for the return.',
    tags: ['star-trade', 'forced-hand', 'free-agency-threat'],
    teams: [
      {
        team: 'Oklahoma City Thunder',
        abbreviation: 'OKC',
        received: ['Paul George'],
        grade: 'A',
        outcome:
          'George re-signed with OKC and made the All-NBA first team in 2018-19, finishing 3rd in MVP voting. A massive win for the Thunder.',
        timeline: [
          { season: '2017-18', event: '1st round exit vs Jazz' },
          { season: '2018 FA', event: 'George re-signs with OKC' },
          { season: '2018-19', event: 'PG finishes 3rd in MVP voting' },
          { season: '2018-19', event: '1st round exit vs Blazers' },
          { season: '2019 Offseason', event: 'PG traded to Clippers' },
        ],
      },
      {
        team: 'Indiana Pacers',
        abbreviation: 'IND',
        received: ['Victor Oladipo', 'Domantas Sabonis'],
        grade: 'A+',
        outcome:
          'Oladipo became an All-Star and Most Improved Player in 2017-18, leading Indiana to the playoffs. Sabonis developed into a two-time All-Star. One of the best "losing" trades ever.',
        timeline: [
          { season: '2017-18', event: 'Oladipo wins MIP, named All-Star' },
          { season: '2017-18', event: 'Push Cavs to 7 games in 1st round' },
          { season: '2018-19', event: 'Oladipo tears quad tendon' },
          { season: '2019-20', event: 'Sabonis named first All-Star' },
          { season: '2021-22', event: 'Sabonis traded to Sacramento' },
        ],
      },
    ],
  },
  // #58
  {
    date: '2017-08-22',
    title: 'Kyrie Irving Traded to Celtics',
    summary:
      'Cavaliers trade Kyrie Irving to Boston for Isaiah Thomas, Jae Crowder, Ante Zizic, and the 2018 Brooklyn Nets pick (unprotected first-round).',
    context:
      'Irving requested a trade from Cleveland, wanting to be "the man" on his own team rather than playing alongside LeBron James. The Celtics offered the best package headlined by the ultra-valuable Brooklyn pick.',
    tags: ['star-trade', 'trade-request', 'franchise-shift'],
    teams: [
      {
        team: 'Boston Celtics',
        abbreviation: 'BOS',
        received: ['Kyrie Irving'],
        grade: 'B-',
        outcome:
          'Irving made an All-Star team and led Boston to the playoffs, but his tenure was rocky. He left for Brooklyn in free agency after two seasons, making the cost steep.',
        timeline: [
          { season: '2017-18', event: 'Kyrie hurt, Celtics reach ECF without him' },
          { season: '2018-19', event: 'All-Star but team chemistry issues' },
          { season: '2018-19', event: '2nd round exit vs Bucks' },
          { season: '2019 FA', event: 'Irving leaves for Brooklyn' },
        ],
      },
      {
        team: 'Cleveland Cavaliers',
        abbreviation: 'CLE',
        received: [
          'Isaiah Thomas',
          'Jae Crowder',
          'Ante Zizic',
          '2018 Brooklyn Nets 1st Round Pick',
        ],
        grade: 'C+',
        outcome:
          'Thomas was injured and never regained form. Crowder was traded at the deadline. The Brooklyn pick (8th overall) became Collin Sexton, a solid but not transformative player.',
        timeline: [
          { season: '2017-18', event: 'IT returns, struggles with hip injury' },
          { season: '2017-18', event: 'NBA Finals loss to Warriors' },
          { season: '2018 Draft', event: 'Brooklyn pick becomes #8 (Collin Sexton)' },
          { season: '2018-19', event: 'LeBron leaves, full rebuild' },
        ],
      },
    ],
  },
  // #59
  {
    date: '2017-09-22',
    title: 'Carmelo Anthony Traded to Thunder',
    summary:
      'Knicks trade Carmelo Anthony to Oklahoma City for Enes Kanter, Doug McDermott, and a 2018 second-round pick.',
    context:
      'The Knicks had been trying to move Anthony for over a year. His no-trade clause limited destinations. OKC assembled a Big Three of Westbrook, George, and Anthony.',
    tags: ['star-trade', 'big-three', 'no-trade-clause'],
    teams: [
      {
        team: 'Oklahoma City Thunder',
        abbreviation: 'OKC',
        received: ['Carmelo Anthony'],
        grade: 'C-',
        outcome:
          'Anthony struggled in a reduced role and the Big Three experiment largely failed. OKC was bounced in the first round by the Jazz. Melo was waived the following season.',
        timeline: [
          { season: '2017-18', event: '1st round exit vs Jazz in 6' },
          { season: '2017-18', event: 'Melo averages just 16.2 PPG' },
          { season: '2018 Offseason', event: 'Melo traded then waived by Hawks' },
        ],
      },
      {
        team: 'New York Knicks',
        abbreviation: 'NYK',
        received: ['Enes Kanter', 'Doug McDermott', '2018 2nd Round Pick'],
        grade: 'C',
        outcome:
          'Kanter was a productive big man for one season in New York but the return was thin for a franchise player, even a declining one.',
        timeline: [
          { season: '2017-18', event: 'Kanter averages 14.1 PPG, 11 RPG' },
          { season: '2017-18', event: 'Missed playoffs (29-53)' },
          { season: '2018-19', event: 'Kanter leaves in free agency' },
        ],
      },
    ],
  },
  // #60
  {
    date: '2017-11-08',
    title: 'Andrew Bledsoe Traded to Bucks',
    summary:
      'Suns trade Eric Bledsoe to Milwaukee for Greg Monroe and a protected 2018 first-round pick.',
    context:
      'Bledsoe had publicly demanded a trade from Phoenix with his infamous "I don\'t wanna be here" tweet. Milwaukee needed a starting point guard to pair with Giannis Antetokounmpo.',
    tags: ['trade-demand', 'midseason', 'point-guard-upgrade'],
    teams: [
      {
        team: 'Milwaukee Bucks',
        abbreviation: 'MIL',
        received: ['Eric Bledsoe'],
        grade: 'B-',
        outcome:
          'Bledsoe was a solid starter for two-plus seasons in Milwaukee and was part of the team\'s rise, though he was later traded to New Orleans in the Jrue Holiday deal.',
        timeline: [
          { season: '2017-18', event: '1st round exit vs Celtics' },
          { season: '2018-19', event: 'Conference Finals loss to Raptors' },
          { season: '2019-20', event: '2nd round exit vs Heat (bubble)' },
          { season: '2020 Offseason', event: 'Bledsoe traded in Jrue Holiday deal' },
        ],
      },
      {
        team: 'Phoenix Suns',
        abbreviation: 'PHX',
        received: ['Greg Monroe', '2018 1st Round Pick (Protected)'],
        grade: 'C+',
        outcome:
          'Monroe was bought out and the pick conveyed as a mid-first-rounder. Modest return given the circumstances of Bledsoe\'s trade demand.',
        timeline: [
          { season: '2017-18', event: 'Missed playoffs (21-61)' },
          { season: '2018 Draft', event: 'Drafted Deandre Ayton #1 overall' },
          { season: '2018-19', event: 'Missed playoffs (19-63)' },
        ],
      },
    ],
  },
  // #61
  {
    date: '2018-01-29',
    title: 'Blake Griffin Traded to Pistons',
    summary:
      'Clippers trade Blake Griffin, Willie Reed, and Brice Johnson to Detroit for Tobias Harris, Avery Bradley, Boban Marjanovic, a 2018 first-round pick, and a 2019 second-round pick.',
    context:
      'The Clippers had signed Griffin to a max extension just six months earlier, making the trade a shock. LA pivoted to a rebuild while Detroit bet big on Griffin as their franchise centerpiece.',
    tags: ['blockbuster', 'max-contract', 'franchise-shift'],
    teams: [
      {
        team: 'Detroit Pistons',
        abbreviation: 'DET',
        received: ['Blake Griffin', 'Willie Reed', 'Brice Johnson'],
        grade: 'C+',
        outcome:
          'Griffin made the All-Star team in 2019 and dragged Detroit to the playoffs, but injuries mounted and his max contract hamstrung the franchise for years.',
        timeline: [
          { season: '2017-18', event: 'Missed playoffs' },
          { season: '2018-19', event: 'Griffin named All-Star' },
          { season: '2018-19', event: 'Swept by Bucks in 1st round' },
          { season: '2019-20', event: 'Griffin plays only 18 games (knee)' },
          { season: '2020-21', event: 'Griffin bought out, signs with Nets' },
        ],
      },
      {
        team: 'Los Angeles Clippers',
        abbreviation: 'LAC',
        received: [
          'Tobias Harris',
          'Avery Bradley',
          'Boban Marjanovic',
          '2018 1st Round Pick',
          '2019 2nd Round Pick',
        ],
        grade: 'A-',
        outcome:
          'Harris thrived in LA before being flipped to Philly for even more assets. The Clippers turned Griffin\'s declining contract into flexibility and young talent.',
        timeline: [
          { season: '2017-18', event: 'Harris averages 20+ PPG for Clippers' },
          { season: '2018-19', event: 'Harris flipped to 76ers for more picks' },
          { season: '2019 FA', event: 'Kawhi & PG sign/traded to Clippers' },
        ],
      },
    ],
  },
  // #62
  {
    date: '2018-02-08',
    title: 'Cavaliers Midseason Overhaul',
    summary:
      'Cleveland executes a massive multi-team trade, sending Isaiah Thomas, Channing Frye, Jae Crowder, Derrick Rose, and Iman Shumpert out while acquiring Rodney Hood, George Hill, Jordan Clarkson, and Larry Nance Jr.',
    context:
      'The Cavaliers were struggling with chemistry issues and LeBron was frustrated. The front office executed a three-team trade that overhauled half the roster at the deadline, essentially swapping out the Kyrie Irving trade returns.',
    tags: ['trade-deadline', 'roster-overhaul', 'LeBron-era', 'multi-team'],
    teams: [
      {
        team: 'Cleveland Cavaliers',
        abbreviation: 'CLE',
        received: ['George Hill', 'Rodney Hood', 'Jordan Clarkson', 'Larry Nance Jr.'],
        grade: 'B+',
        outcome:
          'The new pieces helped stabilize the roster and Cleveland made another Finals run, losing to the Warriors in a sweep. Hill and Clarkson provided needed depth.',
        timeline: [
          { season: '2017-18', event: 'NBA Finals loss to Warriors (sweep)' },
          { season: '2018 FA', event: 'LeBron leaves for Lakers' },
          { season: '2018-19', event: 'Full rebuild, 19-63 record' },
          { season: '2019-20', event: 'Nance becomes fan favorite' },
        ],
      },
      {
        team: 'Utah Jazz',
        abbreviation: 'UTA',
        received: ['Jae Crowder', 'Derrick Rose'],
        grade: 'B',
        outcome:
          'Crowder became a useful role player for Utah. Rose was eventually bought out. A low-risk addition for the Jazz.',
        timeline: [
          { season: '2017-18', event: '2nd round exit vs Rockets' },
          { season: '2018-19', event: '1st round exit vs Rockets' },
          { season: '2019 Offseason', event: 'Crowder traded to Memphis' },
        ],
      },
      {
        team: 'Los Angeles Lakers',
        abbreviation: 'LAL',
        received: ['Isaiah Thomas', 'Channing Frye', '2018 1st Round Pick'],
        grade: 'C',
        outcome:
          'Thomas played poorly in his brief Lakers stint and was not re-signed. The pick was a useful asset. Clearing Clarkson and Nance\'s salaries helped the Lakers\' cap space pursuit.',
        timeline: [
          { season: '2017-18', event: 'Missed playoffs, IT released' },
          { season: '2018 FA', event: 'LeBron James signs with Lakers' },
          { season: '2019-20', event: 'NBA Champions (LeBron + AD)' },
        ],
      },
    ],
  },
  // #63
  {
    date: '2018-02-08',
    title: 'DeAndre Jordan Stays in LA (Deadline Deals)',
    summary:
      'Despite rumors of a DeAndre Jordan deal, the Clippers instead trade Lou Williams to the Rockets and make other minor moves at the deadline. Jordan remained with the Clippers.',
    context:
      'Jordan was one of the most discussed names at the 2018 deadline but ultimately stayed put. The Clippers were in transition after the Blake Griffin trade and evaluated their options.',
    tags: ['trade-deadline', 'non-trade', 'clippers-rebuild'],
    teams: [
      {
        team: 'Los Angeles Clippers',
        abbreviation: 'LAC',
        received: ['Kept DeAndre Jordan', 'Montrezl Harrell (from HOU for Lou Williams)'],
        grade: 'B',
        outcome:
          'Getting Harrell back from Houston for Lou Williams was a savvy move. Jordan left in free agency that summer to Dallas. The Clippers continued accumulating assets.',
        timeline: [
          { season: '2017-18', event: 'Missed playoffs' },
          { season: '2018 FA', event: 'Jordan signs with Mavericks' },
          { season: '2018-19', event: 'Harrell thrives off the bench' },
          { season: '2019-20', event: 'Harrell wins 6MOY award' },
        ],
      },
      {
        team: 'Houston Rockets',
        abbreviation: 'HOU',
        received: ['Lou Williams'],
        grade: 'C+',
        outcome:
          'Williams was quickly flipped back to the Clippers. A brief stop in Houston that did not move the needle.',
        timeline: [
          { season: '2017-18', event: 'WCF Game 7 loss to Warriors' },
          { season: '2018 Offseason', event: 'Lou Williams sent back to Clippers' },
        ],
      },
    ],
  },
  // #64
  {
    date: '2018-07-18',
    title: 'Kawhi Leonard Traded to Raptors',
    summary:
      'Spurs trade Kawhi Leonard and Danny Green to Toronto for DeMar DeRozan, Jakob Poeltl, and a protected 2019 first-round pick.',
    context:
      'Leonard\'s relationship with the Spurs had deteriorated over a disputed quad injury. He sat out most of the 2017-18 season and demanded a trade, preferring Los Angeles. Toronto made a bold all-in bet on a one-year rental.',
    tags: ['blockbuster', 'trade-demand', 'all-in-rental', 'championship'],
    teams: [
      {
        team: 'Toronto Raptors',
        abbreviation: 'TOR',
        received: ['Kawhi Leonard', 'Danny Green'],
        grade: 'A+',
        outcome:
          'Leonard led Toronto to their first NBA championship in 2019, winning Finals MVP. One of the greatest one-year rentals in NBA history. He left for the Clippers that summer.',
        timeline: [
          { season: '2018-19', event: 'NBA Champions' },
          { season: '2018-19', event: 'Kawhi wins Finals MVP' },
          { season: '2019 FA', event: 'Kawhi signs with Clippers' },
          { season: '2019-20', event: '2nd round exit without Kawhi (bubble)' },
        ],
      },
      {
        team: 'San Antonio Spurs',
        abbreviation: 'SAS',
        received: ['DeMar DeRozan', 'Jakob Poeltl', '2019 1st Round Pick (Protected)'],
        grade: 'B-',
        outcome:
          'DeRozan was a solid contributor in San Antonio for three seasons. Poeltl became a quality starting center. Reasonable return given the toxic situation.',
        timeline: [
          { season: '2018-19', event: '1st round exit vs Nuggets' },
          { season: '2019-20', event: 'Missed playoffs (bubble)' },
          { season: '2019-20', event: 'DeRozan named All-Star' },
          { season: '2021 FA', event: 'DeRozan signs with Bulls' },
        ],
      },
    ],
  },
  // #65
  {
    date: '2018-07-25',
    title: 'Dwight Howard Traded to Nets (Then Wizards)',
    summary:
      'Hornets trade Dwight Howard, cash, and a 2021 second-round pick to Brooklyn. The Nets then trade Howard to the Wizards for Timofey Mozgov.',
    context:
      'Charlotte wanted to clear Howard\'s expiring contract. Brooklyn served as a pass-through, sending the contract to Washington where Howard would start alongside John Wall.',
    tags: ['salary-dump', 'pass-through', 'veteran-trade'],
    teams: [
      {
        team: 'Washington Wizards',
        abbreviation: 'WAS',
        received: ['Dwight Howard'],
        grade: 'C-',
        outcome:
          'Howard played only 9 games before a back injury ended his season. A failed experiment for Washington.',
        timeline: [
          { season: '2018-19', event: 'Howard plays only 9 games (injury)' },
          { season: '2018-19', event: 'Missed playoffs (32-50)' },
          { season: '2019 FA', event: 'Howard signs with Lakers' },
        ],
      },
      {
        team: 'Brooklyn Nets',
        abbreviation: 'BKN',
        received: ['Timofey Mozgov', '2021 2nd Round Pick'],
        grade: 'B',
        outcome:
          'The Nets facilitated the trade and absorbed Mozgov\'s contract to collect a pick. Standard asset-collecting move during their rebuild.',
        timeline: [
          { season: '2018-19', event: 'Nets make playoffs (6th seed)' },
          { season: '2019 FA', event: 'Kevin Durant & Kyrie Irving sign' },
        ],
      },
      {
        team: 'Charlotte Hornets',
        abbreviation: 'CHA',
        received: ['Cash considerations'],
        grade: 'B-',
        outcome:
          'Charlotte cleared Howard\'s contract and moved on. The Howard era in Charlotte was unmemorable.',
        timeline: [
          { season: '2018-19', event: 'Missed playoffs (39-43)' },
          { season: '2019-20', event: 'Missed playoffs again' },
        ],
      },
    ],
  },
  // #66
  {
    date: '2018-11-01',
    title: 'Jimmy Butler Traded to 76ers',
    summary:
      'Timberwolves trade Jimmy Butler and Justin Patton to Philadelphia for Robert Covington, Dario Saric, Jerryd Bayless, and a 2022 second-round pick.',
    context:
      'Butler\'s tumultuous tenure in Minnesota came to a head with a famous practice confrontation. After weeks of drama, he was finally dealt to the 76ers to form a Big Three with Embiid and Simmons.',
    tags: ['trade-demand', 'drama', 'big-three', 'midseason'],
    teams: [
      {
        team: 'Philadelphia 76ers',
        abbreviation: 'PHI',
        received: ['Jimmy Butler', 'Justin Patton'],
        grade: 'B',
        outcome:
          'Butler meshed well with Embiid and Philly came within a bouncing Game 7 buzzer-beater of the ECF. But Butler left for Miami in free agency that summer.',
        timeline: [
          { season: '2018-19', event: 'Kawhi buzzer-beater ends Philly in Game 7' },
          { season: '2019 FA', event: 'Butler signs with Heat' },
          { season: '2019-20', event: 'Butler leads Heat to Finals' },
        ],
      },
      {
        team: 'Minnesota Timberwolves',
        abbreviation: 'MIN',
        received: ['Robert Covington', 'Dario Saric', 'Jerryd Bayless', '2022 2nd Round Pick'],
        grade: 'B',
        outcome:
          'Covington was an excellent 3-and-D player for Minnesota before being flipped in the D\'Angelo Russell trade. Saric was a decent contributor. Reasonable return.',
        timeline: [
          { season: '2018-19', event: 'Missed playoffs (36-46)' },
          { season: '2019-20', event: 'Covington traded to Rockets' },
          { season: '2020-21', event: 'Missed playoffs' },
        ],
      },
    ],
  },
  // #67
  {
    date: '2019-01-31',
    title: 'Kristaps Porzingis Traded to Mavericks',
    summary:
      'Knicks trade Kristaps Porzingis, Tim Hardaway Jr., Courtney Lee, and Trey Burke to Dallas for Dennis Smith Jr., DeAndre Jordan, Wesley Matthews, and two future first-round picks.',
    context:
      'Porzingis had requested a trade from New York while recovering from a torn ACL. The Knicks were clearing cap space for a run at top 2019 free agents. Dallas paired Porzingis with Luka Doncic.',
    tags: ['trade-deadline', 'cap-space', 'young-star', 'rebuild'],
    teams: [
      {
        team: 'Dallas Mavericks',
        abbreviation: 'DAL',
        received: ['Kristaps Porzingis', 'Tim Hardaway Jr.', 'Courtney Lee', 'Trey Burke'],
        grade: 'B',
        outcome:
          'Porzingis showed flashes alongside Doncic but injuries limited him. Hardaway Jr. became a reliable scorer. The pairing never reached its ceiling before Porzingis was traded to Washington.',
        timeline: [
          { season: '2019-20', event: 'Luka-KP duo makes playoffs' },
          { season: '2019-20', event: '1st round exit vs Clippers' },
          { season: '2020-21', event: 'KP misses time with knee issues' },
          { season: '2021-22', event: 'Porzingis traded to Wizards' },
        ],
      },
      {
        team: 'New York Knicks',
        abbreviation: 'NYK',
        received: [
          'Dennis Smith Jr.',
          'DeAndre Jordan',
          'Wesley Matthews',
          '2021 1st Round Pick',
          '2023 1st Round Pick',
        ],
        grade: 'C-',
        outcome:
          'The Knicks struck out on top free agents that summer. Smith Jr. never developed, and the picks were mid-range. A questionable trade in hindsight.',
        timeline: [
          { season: '2018-19', event: 'Missed playoffs' },
          { season: '2019 FA', event: 'Whiff on top free agents' },
          { season: '2019-20', event: 'Missed playoffs (21-45)' },
          { season: '2020-21', event: 'Return to playoffs (4th seed)' },
        ],
      },
    ],
  },
  // #68
  {
    date: '2019-02-07',
    title: 'Tobias Harris Traded to 76ers',
    summary:
      'Clippers trade Tobias Harris, Boban Marjanovic, and Mike Scott to Philadelphia for Landry Shamet, Wilson Chandler, Mike Muscala, a 2020 first-round pick (Miami\'s), and a 2021 unprotected first-round pick.',
    context:
      'Philadelphia went all-in, acquiring Harris to form a superteam alongside Embiid, Simmons, and Butler. The Clippers continued stockpiling assets.',
    tags: ['trade-deadline', 'win-now', 'all-in'],
    teams: [
      {
        team: 'Philadelphia 76ers',
        abbreviation: 'PHI',
        received: ['Tobias Harris', 'Boban Marjanovic', 'Mike Scott'],
        grade: 'B-',
        outcome:
          'Harris re-signed on a max deal and was a steady scorer but never became the star Philly hoped for. The cost of two firsts was steep for what they got.',
        timeline: [
          { season: '2018-19', event: '2nd round exit (Kawhi buzzer-beater)' },
          { season: '2019 FA', event: 'Harris signs 5-year max deal' },
          { season: '2019-20', event: '1st round sweep of Celtics... wait, swept BY Celtics' },
          { season: '2020-21', event: '2nd round exit vs Hawks' },
        ],
      },
      {
        team: 'Los Angeles Clippers',
        abbreviation: 'LAC',
        received: [
          'Landry Shamet',
          'Wilson Chandler',
          'Mike Muscala',
          '2020 Miami 1st Round Pick',
          '2021 1st Round Pick (Unprotected)',
        ],
        grade: 'A',
        outcome:
          'The Clippers flipped these assets into the Paul George trade later that summer. Elite asset management that built toward a contender.',
        timeline: [
          { season: '2018-19', event: '1st round exit vs Warriors' },
          { season: '2019 Offseason', event: 'Assets used in Paul George trade' },
          { season: '2019 FA', event: 'Kawhi Leonard signs with Clippers' },
        ],
      },
    ],
  },
  // #69
  {
    date: '2019-02-07',
    title: 'Marc Gasol Traded to Raptors',
    summary:
      'Grizzlies trade Marc Gasol to Toronto for Jonas Valanciunas, Delon Wright, CJ Miles, and a 2024 second-round pick.',
    context:
      'The Raptors were going all-in alongside Kawhi Leonard and needed a defensive anchor at center. Memphis was beginning a full rebuild around Jaren Jackson Jr. and their young core.',
    tags: ['trade-deadline', 'championship-push', 'veteran-upgrade'],
    teams: [
      {
        team: 'Toronto Raptors',
        abbreviation: 'TOR',
        received: ['Marc Gasol'],
        grade: 'A',
        outcome:
          'Gasol was instrumental in the 2019 championship run, defending Embiid and Giannis at an elite level. One of the best deadline acquisitions ever.',
        timeline: [
          { season: '2018-19', event: 'NBA Champions' },
          { season: '2018-19', event: 'Gasol locks down Embiid & Giannis' },
          { season: '2019-20', event: '2nd round exit (bubble)' },
          { season: '2020-21', event: 'Gasol signs with Lakers' },
        ],
      },
      {
        team: 'Memphis Grizzlies',
        abbreviation: 'MEM',
        received: ['Jonas Valanciunas', 'Delon Wright', 'CJ Miles', '2024 2nd Round Pick'],
        grade: 'B+',
        outcome:
          'Valanciunas became a productive starter in Memphis for multiple seasons. Wright was a useful piece before leaving in free agency. Good return for an aging star.',
        timeline: [
          { season: '2018-19', event: 'Tank secures #2 pick (Ja Morant)' },
          { season: '2019-20', event: 'JV starts, Morant wins ROY' },
          { season: '2020-21', event: 'Grizzlies make play-in tournament' },
          { season: '2021-22', event: 'JV traded to Pelicans' },
        ],
      },
    ],
  },
  // #70
  {
    date: '2019-02-07',
    title: 'Nikola Mirotic Traded to Bucks',
    summary:
      'Pelicans trade Nikola Mirotic to Milwaukee for Jason Smith, Stanley Johnson, and four second-round picks.',
    context:
      'Milwaukee was building around Giannis and wanted shooting and floor spacing for a championship push. New Orleans was pivoting toward a rebuild as Anthony Davis\'s trade demand loomed.',
    tags: ['trade-deadline', 'spacing', 'win-now'],
    teams: [
      {
        team: 'Milwaukee Bucks',
        abbreviation: 'MIL',
        received: ['Nikola Mirotic'],
        grade: 'C+',
        outcome:
          'Mirotic struggled in the playoffs and did not return the following season, signing overseas. An underwhelming rental.',
        timeline: [
          { season: '2018-19', event: 'Conference Finals loss to Raptors' },
          { season: '2018-19', event: 'Mirotic shoots poorly in playoffs' },
          { season: '2019 FA', event: 'Mirotic signs with Barcelona (Spain)' },
        ],
      },
      {
        team: 'New Orleans Pelicans',
        abbreviation: 'NOP',
        received: ['Jason Smith', 'Stanley Johnson', 'Four 2nd Round Picks'],
        grade: 'B-',
        outcome:
          'The picks added to New Orleans\' asset chest during the rebuild. None of the players made an impact, but the draft capital had value.',
        timeline: [
          { season: '2018-19', event: 'AD demands trade, team tanks' },
          { season: '2019 Draft', event: 'Win lottery, draft Zion #1' },
          { season: '2019 Offseason', event: 'AD traded to Lakers for huge haul' },
        ],
      },
    ],
  },
  // #71
  {
    date: '2019-06-15',
    title: 'Anthony Davis Traded to Lakers',
    summary:
      'Pelicans trade Anthony Davis to the Lakers for Lonzo Ball, Brandon Ingram, Josh Hart, and three first-round picks (2019 #4 overall, 2021, 2024 swap).',
    context:
      'Davis had demanded a trade midseason through agent Rich Paul, creating months of public drama. The Lakers paid a massive price to pair AD with LeBron James for a title push.',
    tags: ['blockbuster', 'superstar-trade', 'championship-window', 'trade-demand'],
    teams: [
      {
        team: 'Los Angeles Lakers',
        abbreviation: 'LAL',
        received: ['Anthony Davis'],
        grade: 'A',
        outcome:
          'Davis and LeBron won the 2020 NBA championship in the bubble. AD was dominant in the playoffs, making the trade an unqualified success.',
        timeline: [
          { season: '2019-20', event: 'NBA Champions (bubble)' },
          { season: '2019-20', event: 'AD dominates in playoffs' },
          { season: '2020-21', event: '1st round exit (AD injured)' },
          { season: '2021-22', event: 'Missed playoffs (injuries)' },
        ],
      },
      {
        team: 'New Orleans Pelicans',
        abbreviation: 'NOP',
        received: [
          'Lonzo Ball',
          'Brandon Ingram',
          'Josh Hart',
          '2019 1st Round Pick (#4 - De\'Andre Hunter, traded)',
          '2021 1st Round Pick',
          '2024 Pick Swap',
        ],
        grade: 'A',
        outcome:
          'Ingram became an All-Star and the centerpiece of the rebuild. Ball was a quality starter before leaving in free agency. The #4 pick was flipped for additional assets. Excellent haul.',
        timeline: [
          { season: '2019-20', event: 'Ingram named All-Star, wins MIP' },
          { season: '2020-21', event: 'Missed playoffs' },
          { season: '2021 FA', event: 'Lonzo Ball signs with Bulls' },
          { season: '2021-22', event: 'Pelicans make play-in, then playoffs' },
        ],
      },
    ],
  },
  // #72
  {
    date: '2019-07-06',
    title: 'Paul George Traded to Clippers',
    summary:
      'Thunder trade Paul George to the Clippers for Shai Gilgeous-Alexander, Danilo Gallinari, five first-round picks (2022, 2024, 2026 unprotected, plus 2023 and 2025 swaps).',
    context:
      'Kawhi Leonard agreed to sign with the Clippers only if they could acquire Paul George. OKC extracted a historic haul of picks and young talent, launching the most aggressive rebuild in NBA history.',
    tags: ['blockbuster', 'historic-haul', 'super-team', 'rebuild'],
    teams: [
      {
        team: 'Los Angeles Clippers',
        abbreviation: 'LAC',
        received: ['Paul George'],
        grade: 'B-',
        outcome:
          'George and Leonard never delivered a championship. The Clippers blew a 3-1 lead to Denver in 2020 and were plagued by injuries in subsequent years. The massive pick cost made this a risky bet.',
        timeline: [
          { season: '2019-20', event: 'Blow 3-1 lead to Nuggets (bubble)' },
          { season: '2020-21', event: 'Conference Finals (Kawhi injured)' },
          { season: '2021-22', event: 'Missed playoffs (Kawhi out all year)' },
          { season: '2023-24', event: 'PG leaves in free agency to 76ers' },
        ],
      },
      {
        team: 'Oklahoma City Thunder',
        abbreviation: 'OKC',
        received: [
          'Shai Gilgeous-Alexander',
          'Danilo Gallinari',
          '2022 1st Round Pick',
          '2024 1st Round Pick',
          '2026 1st Round Pick',
          '2023 Pick Swap',
          '2025 Pick Swap',
        ],
        grade: 'A+',
        outcome:
          'SGA became a franchise cornerstone and MVP candidate. The draft capital fueled one of the deepest rebuilds in NBA history. A landmark trade for OKC.',
        timeline: [
          { season: '2019-20', event: 'SGA averages 19 PPG as a starter' },
          { season: '2020-21', event: 'Full tank begins, SGA shines' },
          { season: '2022 Draft', event: 'Draft Chet Holmgren #2 overall' },
          { season: '2023-24', event: 'SGA finishes 2nd in MVP voting' },
          { season: '2023-24', event: '#1 seed in Western Conference' },
        ],
      },
    ],
  },
  // #73
  {
    date: '2019-07-11',
    title: 'Russell Westbrook Traded to Rockets',
    summary:
      'Thunder trade Russell Westbrook to Houston for Chris Paul, two first-round picks (2024, 2026), and two pick swaps (2021, 2025).',
    context:
      'After the Paul George trade, Westbrook asked out of OKC. Houston traded Paul\'s contract and more picks to reunite Westbrook with James Harden. OKC added even more future assets to their war chest.',
    tags: ['blockbuster', 'superstar-swap', 'reunion', 'rebuild'],
    teams: [
      {
        team: 'Houston Rockets',
        abbreviation: 'HOU',
        received: ['Russell Westbrook'],
        grade: 'C',
        outcome:
          'Westbrook and Harden never meshed perfectly. Houston went small-ball but was eliminated by the Lakers in the 2020 bubble. Westbrook was traded to Washington after one season.',
        timeline: [
          { season: '2019-20', event: '2nd round exit vs Lakers (bubble)' },
          { season: '2019-20', event: 'Westbrook gets COVID, misses games' },
          { season: '2020 Offseason', event: 'Westbrook traded to Wizards' },
          { season: '2020-21', event: 'Harden demands trade, team implodes' },
        ],
      },
      {
        team: 'Oklahoma City Thunder',
        abbreviation: 'OKC',
        received: ['Chris Paul', '2024 1st Round Pick', '2026 1st Round Pick', '2021 Pick Swap', '2025 Pick Swap'],
        grade: 'A',
        outcome:
          'Chris Paul had a resurgent season and led OKC to the playoffs before being traded to Phoenix. The additional picks further loaded OKC\'s treasure chest of draft assets.',
        timeline: [
          { season: '2019-20', event: 'CP3 leads OKC to 5th seed' },
          { season: '2019-20', event: '1st round exit vs Rockets (7 games)' },
          { season: '2020 Offseason', event: 'CP3 traded to Phoenix' },
          { season: '2020-21', event: 'Full tank mode begins' },
        ],
      },
    ],
  },
  // #74
  {
    date: '2019-07-01',
    title: 'D\'Angelo Russell Sign-and-Trade to Warriors',
    summary:
      'Nets agree to a sign-and-trade sending D\'Angelo Russell to Golden State for Kevin Durant (sign-and-trade to Brooklyn), Shabazz Napier, and Treveon Graham.',
    context:
      'Kevin Durant chose to join the Nets in free agency. To facilitate the deal and provide Brooklyn with cap space, a sign-and-trade was structured. Golden State got Russell as a placeholder while Klay Thompson recovered from his ACL tear.',
    tags: ['sign-and-trade', 'free-agency', 'three-team-deal'],
    teams: [
      {
        team: 'Golden State Warriors',
        abbreviation: 'GSW',
        received: ['D\'Angelo Russell'],
        grade: 'B',
        outcome:
          'Russell was a placeholder who played well before being traded to Minnesota midseason. Golden State used him to acquire Andrew Wiggins and a first-round pick that became Kuminga.',
        timeline: [
          { season: '2019-20', event: 'Russell named All-Star replacement' },
          { season: '2019-20', event: 'D-Lo traded to Timberwolves midseason' },
          { season: '2021-22', event: 'Wiggins (from D-Lo trade) named All-Star' },
          { season: '2021-22', event: 'Warriors win NBA Championship' },
        ],
      },
      {
        team: 'Brooklyn Nets',
        abbreviation: 'BKN',
        received: ['Kevin Durant (via sign-and-trade)'],
        grade: 'A-',
        outcome:
          'Durant missed his first season recovering from an Achilles tear but returned as a dominant force, leading Brooklyn to contender status. He was eventually traded to Phoenix in 2023.',
        timeline: [
          { season: '2019-20', event: 'KD sits out entire season (Achilles rehab)' },
          { season: '2020-21', event: 'KD returns, nearly beats Bucks in semis' },
          { season: '2021-22', event: 'Swept by Celtics in 1st round' },
          { season: '2022-23', event: 'KD traded to Suns' },
        ],
      },
    ],
  },
  // #75
  {
    date: '2019-07-16',
    title: 'Chris Paul Traded to Thunder',
    summary:
      'Rockets trade Chris Paul, two first-round picks, and two pick swaps to Oklahoma City for Russell Westbrook.',
    context:
      'This was the other side of the Westbrook trade. Houston moved off Paul\'s long-term contract to acquire Westbrook. Paul was expected to be bought out or traded again but instead had a remarkable resurgence.',
    tags: ['superstar-swap', 'contract-dump', 'resurgence'],
    teams: [
      {
        team: 'Oklahoma City Thunder',
        abbreviation: 'OKC',
        received: [
          'Chris Paul',
          '2024 1st Round Pick',
          '2026 1st Round Pick',
          '2021 Pick Swap',
          '2025 Pick Swap',
        ],
        grade: 'A',
        outcome:
          'Paul defied expectations with an All-Star season, mentoring SGA and nearly upsetting the Rockets in the 2020 playoffs. OKC then flipped him to Phoenix for more assets.',
        timeline: [
          { season: '2019-20', event: 'CP3 named All-Star, team makes playoffs' },
          { season: '2019-20', event: '1st round exit vs Rockets (7 games)' },
          { season: '2020 Offseason', event: 'CP3 traded to Suns for more picks' },
        ],
      },
      {
        team: 'Houston Rockets',
        abbreviation: 'HOU',
        received: ['Russell Westbrook'],
        grade: 'C',
        outcome:
          'Westbrook never fully meshed with Harden\'s system. Houston\'s championship window closed and the franchise spiraled into a rebuild within two years.',
        timeline: [
          { season: '2019-20', event: '2nd round exit vs Lakers (bubble)' },
          { season: '2020 Offseason', event: 'Westbrook traded to Wizards' },
          { season: '2020-21', event: 'Harden traded, full rebuild begins' },
        ],
      },
    ],
  },
  // #76
  {
    date: '2019-07-06',
    title: 'Al Horford Signs with 76ers (Free Agency)',
    summary:
      'While not a trade, the Sixers signed Al Horford to a 4-year, $109 million deal away from Boston, reshaping the Eastern Conference.',
    context:
      'Philadelphia believed adding Horford alongside Embiid would create an elite defensive frontcourt. This was a major free agency signing rather than a trade.',
    tags: ['free-agency', 'frontcourt', 'conference-shift'],
    teams: [
      {
        team: 'Philadelphia 76ers',
        abbreviation: 'PHI',
        received: ['Al Horford'],
        grade: 'D+',
        outcome:
          'Horford was a poor fit alongside Embiid and was traded to OKC after one disappointing season. The contract became an albatross.',
        timeline: [
          { season: '2019-20', event: '1st round sweep by Celtics (bubble)' },
          { season: '2019-20', event: 'Horford struggles alongside Embiid' },
          { season: '2020 Offseason', event: 'Horford traded to Thunder' },
          { season: '2021-22', event: 'Horford returns to Celtics, reaches Finals' },
        ],
      },
    ],
  },
  // #77
  {
    date: '2019-07-06',
    title: 'Malcolm Brogdon Sign-and-Trade to Pacers',
    summary:
      'Bucks agree to a sign-and-trade sending Malcolm Brogdon to Indiana for a 2020 first-round pick and two second-round picks.',
    context:
      'Milwaukee did not want to pay the luxury tax to retain Brogdon, who had won extension money with his play. Indiana saw him as their starting point guard of the future.',
    tags: ['sign-and-trade', 'salary-concerns', 'point-guard'],
    teams: [
      {
        team: 'Indiana Pacers',
        abbreviation: 'IND',
        received: ['Malcolm Brogdon'],
        grade: 'B+',
        outcome:
          'Brogdon was a quality starter for Indiana, averaging over 20 points per game before eventually being traded to Boston. Good value acquisition.',
        timeline: [
          { season: '2019-20', event: '1st round sweep by Heat (bubble)' },
          { season: '2020-21', event: 'Brogdon averages 21.2 PPG' },
          { season: '2021-22', event: 'Play-in loss, rebuild begins' },
          { season: '2022 Offseason', event: 'Brogdon traded to Celtics' },
        ],
      },
      {
        team: 'Milwaukee Bucks',
        abbreviation: 'MIL',
        received: ['2020 1st Round Pick', 'Two 2nd Round Picks'],
        grade: 'C+',
        outcome:
          'Losing Brogdon was costly, though Milwaukee still won the 2021 title without him. The picks did not yield significant contributors.',
        timeline: [
          { season: '2019-20', event: '2nd round exit vs Heat (bubble)' },
          { season: '2020-21', event: 'NBA Champions (without Brogdon)' },
          { season: '2021-22', event: '2nd round exit vs Celtics' },
        ],
      },
    ],
  },
  // #78
  {
    date: '2020-01-04',
    title: 'Andrew Wiggins Traded to Warriors',
    summary:
      'Timberwolves trade Andrew Wiggins and a 2021 first-round pick (protected) to Golden State for D\'Angelo Russell, Jacob Evans, and Omari Spellman.',
    context:
      'Minnesota wanted to pair Russell with Karl-Anthony Towns, his close friend. Golden State got off Russell\'s contract and acquired Wiggins to slot in as their starting wing alongside Steph Curry.',
    tags: ['midseason', 'star-swap', 'franchise-retool'],
    teams: [
      {
        team: 'Golden State Warriors',
        abbreviation: 'GSW',
        received: ['Andrew Wiggins', '2021 1st Round Pick (Protected)'],
        grade: 'A',
        outcome:
          'Wiggins became an All-Star starter in 2022 and was crucial in the Warriors\' 2022 championship run. The pick became Jonathan Kuminga. A home-run trade.',
        timeline: [
          { season: '2020-21', event: 'Wiggins thrives as starter next to Curry' },
          { season: '2021 Draft', event: 'Pick becomes #7 (Jonathan Kuminga)' },
          { season: '2021-22', event: 'Wiggins named All-Star starter' },
          { season: '2021-22', event: 'NBA Champions' },
        ],
      },
      {
        team: 'Minnesota Timberwolves',
        abbreviation: 'MIN',
        received: ['D\'Angelo Russell', 'Jacob Evans', 'Omari Spellman'],
        grade: 'C+',
        outcome:
          'Russell and Towns never built the expected chemistry. Minnesota continued to struggle and Russell was eventually moved. The protected pick becoming Kuminga stings.',
        timeline: [
          { season: '2019-20', event: 'Missed playoffs (19-45)' },
          { season: '2020-21', event: 'Missed playoffs again' },
          { season: '2021-22', event: 'Playoffs! 1st round exit vs Grizzlies' },
          { season: '2022-23', event: 'Russell traded to Lakers' },
        ],
      },
    ],
  },
  // #79
  {
    date: '2020-02-04',
    title: 'Andre Drummond Traded to Cavaliers',
    summary:
      'Pistons trade Andre Drummond to Cleveland for Brandon Knight, John Henson, and a 2023 second-round pick.',
    context:
      'Detroit was entering a full rebuild and Drummond had a player option he was expected to decline. Cleveland took a flier on the rebounding big man.',
    tags: ['trade-deadline', 'salary-dump', 'rebuild'],
    teams: [
      {
        team: 'Cleveland Cavaliers',
        abbreviation: 'CLE',
        received: ['Andre Drummond'],
        grade: 'D',
        outcome:
          'Drummond played 8 games before the COVID shutdown. He was benched the following season and bought out. A failed experiment.',
        timeline: [
          { season: '2019-20', event: 'COVID shuts season after 8 games' },
          { season: '2020-21', event: 'Drummond benched, then bought out' },
          { season: '2020-21', event: 'Drummond signs with Lakers' },
        ],
      },
      {
        team: 'Detroit Pistons',
        abbreviation: 'DET',
        received: ['Brandon Knight', 'John Henson', '2023 2nd Round Pick'],
        grade: 'C+',
        outcome:
          'Detroit cleared Drummond\'s contract and accelerated their rebuild. The return was minimal but getting off the money was the real win.',
        timeline: [
          { season: '2019-20', event: 'Tank secured, 20-46 record' },
          { season: '2020 Draft', event: 'Draft Killian Hayes #7 overall' },
          { season: '2021 Draft', event: 'Draft Cade Cunningham #1 overall' },
        ],
      },
    ],
  },
  // #80
  {
    date: '2020-02-06',
    title: 'Robert Covington Traded to Rockets',
    summary:
      'Timberwolves trade Robert Covington to Houston in a four-team deal. Minnesota receives Malik Beasley, Juancho Hernangomez, Jarred Vanderbilt, and a 2020 first-round pick.',
    context:
      'Houston wanted Covington to play small-ball center in their micro-ball lineup alongside Harden and Westbrook. The multi-team trade sent players and picks across four franchises.',
    tags: ['trade-deadline', 'small-ball', 'multi-team'],
    teams: [
      {
        team: 'Houston Rockets',
        abbreviation: 'HOU',
        received: ['Robert Covington'],
        grade: 'B-',
        outcome:
          'Covington fit the small-ball scheme but Houston was eliminated in the second round. He was traded to Portland the following season as the Rockets blew it up.',
        timeline: [
          { season: '2019-20', event: '2nd round exit vs Lakers (bubble)' },
          { season: '2020 Offseason', event: 'Covington traded to Trail Blazers' },
          { season: '2020-21', event: 'Rockets begin full rebuild' },
        ],
      },
      {
        team: 'Minnesota Timberwolves',
        abbreviation: 'MIN',
        received: ['Malik Beasley', 'Juancho Hernangomez', 'Jarred Vanderbilt', '2020 1st Round Pick'],
        grade: 'B+',
        outcome:
          'Beasley became a quality scorer off the bench and Vanderbilt developed into a defensive energy player. Good return for Covington.',
        timeline: [
          { season: '2019-20', event: 'Beasley averages 20.7 PPG in 14 games' },
          { season: '2020-21', event: 'Beasley starts 37 games' },
          { season: '2021-22', event: 'Vanderbilt key role in playoff push' },
          { season: '2022 Offseason', event: 'Beasley traded to Jazz' },
        ],
      },
    ],
  },
  // #81
  {
    date: '2020-02-06',
    title: 'Clint Capela Traded to Hawks',
    summary:
      'Rockets trade Clint Capela, Nene, and a 2020 first-round pick to Atlanta in a multi-team deal. Houston receives Robert Covington via Minnesota.',
    context:
      'This was connected to the Covington deal. Houston moved Capela to go all-in on small ball. Atlanta got their starting center of the future.',
    tags: ['trade-deadline', 'multi-team', 'small-ball-pivot'],
    teams: [
      {
        team: 'Atlanta Hawks',
        abbreviation: 'ATL',
        received: ['Clint Capela', 'Nene'],
        grade: 'A',
        outcome:
          'Capela became an elite rim protector and rebounder in Atlanta, anchoring their defense during their 2021 ECF run. Excellent acquisition.',
        timeline: [
          { season: '2020-21', event: 'Eastern Conference Finals' },
          { season: '2020-21', event: 'Capela leads league in rebounds' },
          { season: '2021-22', event: '1st round exit vs Heat' },
          { season: '2022-23', event: 'Capela remains starting center' },
        ],
      },
      {
        team: 'Houston Rockets',
        abbreviation: 'HOU',
        received: ['Robert Covington (via multi-team)'],
        grade: 'C+',
        outcome:
          'Houston sacrificed their best rim protector for the small-ball experiment. The strategy was exciting but ultimately unsuccessful.',
        timeline: [
          { season: '2019-20', event: '2nd round exit vs Lakers (bubble)' },
          { season: '2020-21', event: 'Full rebuild, worst record in NBA' },
          { season: '2021 Draft', event: 'Draft Jalen Green #2 overall' },
        ],
      },
    ],
  },
  // #82
  {
    date: '2020-02-06',
    title: 'Marcus Morris Traded to Clippers',
    summary:
      'Knicks trade Marcus Morris Sr. to the Clippers for Moe Harkless, a 2020 first-round pick (via Detroit), and other considerations.',
    context:
      'Morris had a career-best season in New York and drew interest from multiple contenders. The Clippers outbid the Lakers to add toughness and shooting for their title push.',
    tags: ['trade-deadline', 'win-now', 'bidding-war'],
    teams: [
      {
        team: 'Los Angeles Clippers',
        abbreviation: 'LAC',
        received: ['Marcus Morris Sr.'],
        grade: 'C+',
        outcome:
          'Morris provided toughness but the Clippers blew a 3-1 lead to Denver in the bubble playoffs. He re-signed and was a useful role player going forward.',
        timeline: [
          { season: '2019-20', event: 'Blow 3-1 lead to Nuggets (bubble)' },
          { season: '2020 FA', event: 'Morris re-signs with Clippers' },
          { season: '2020-21', event: 'Conference Finals (Kawhi hurt)' },
        ],
      },
      {
        team: 'New York Knicks',
        abbreviation: 'NYK',
        received: ['Moe Harkless', '2020 1st Round Pick (via Detroit)'],
        grade: 'B',
        outcome:
          'The Knicks got a first-round pick for a player they signed as a free agent. Good asset management for a rebuilding team.',
        timeline: [
          { season: '2019-20', event: 'Missed playoffs (21-45)' },
          { season: '2020-21', event: 'Surprise 4th seed, make playoffs' },
          { season: '2020-21', event: '1st round exit vs Hawks' },
        ],
      },
    ],
  },
  // #83
  {
    date: '2020-11-16',
    title: 'Jrue Holiday Traded to Bucks',
    summary:
      'Pelicans trade Jrue Holiday to Milwaukee for Eric Bledsoe, George Hill, three first-round picks (2025, 2027 unprotected, and 2024 pick swap), and two pick swaps.',
    context:
      'Milwaukee went all-in to surround Giannis Antetokounmpo with the perfect running mate after consecutive playoff disappointments. New Orleans continued to stockpile assets.',
    tags: ['blockbuster', 'championship-push', 'all-in'],
    teams: [
      {
        team: 'Milwaukee Bucks',
        abbreviation: 'MIL',
        received: ['Jrue Holiday'],
        grade: 'A+',
        outcome:
          'Holiday was the perfect complement to Giannis, providing elite defense and clutch scoring. Milwaukee won the 2021 NBA championship. An all-time great deadline acquisition.',
        timeline: [
          { season: '2020-21', event: 'NBA Champions' },
          { season: '2020-21', event: 'Jrue clutch in Finals vs Suns' },
          { season: '2021-22', event: '2nd round exit vs Celtics' },
          { season: '2023 Offseason', event: 'Holiday traded to Celtics' },
        ],
      },
      {
        team: 'New Orleans Pelicans',
        abbreviation: 'NOP',
        received: [
          'Eric Bledsoe',
          'George Hill',
          '2025 1st Round Pick (Unprotected)',
          '2027 1st Round Pick (Unprotected)',
          '2024 Pick Swap',
        ],
        grade: 'B+',
        outcome:
          'The haul of unprotected picks from a team that traded most of its future was valuable. Bledsoe and Hill were moved later. Excellent asset return.',
        timeline: [
          { season: '2020-21', event: 'Missed playoffs' },
          { season: '2021-22', event: 'Make playoffs via play-in' },
          { season: '2021-22', event: '1st round exit vs Suns' },
          { season: '2023-24', event: 'Zion injuries derail contention' },
        ],
      },
    ],
  },
  // #84
  {
    date: '2020-11-18',
    title: 'Steven Adams Traded to Pelicans',
    summary:
      'Thunder trade Steven Adams and a pick to New Orleans for a package including the 13th pick in the 2020 draft and future considerations.',
    context:
      'OKC continued its roster teardown, moving Adams\' contract. New Orleans wanted a veteran center to anchor their young core alongside Zion Williamson and Brandon Ingram.',
    tags: ['offseason', 'rebuild', 'veteran-center'],
    teams: [
      {
        team: 'New Orleans Pelicans',
        abbreviation: 'NOP',
        received: ['Steven Adams'],
        grade: 'C+',
        outcome:
          'Adams was a solid but unspectacular starter in New Orleans for two seasons. His old-school game did not always fit the modern style the Pelicans needed.',
        timeline: [
          { season: '2020-21', event: 'Missed playoffs' },
          { season: '2021-22', event: 'Adams starts, team makes play-in' },
          { season: '2022 Offseason', event: 'Adams traded to Grizzlies' },
        ],
      },
      {
        team: 'Oklahoma City Thunder',
        abbreviation: 'OKC',
        received: ['2020 1st Round Pick (#13)', 'Future considerations'],
        grade: 'B+',
        outcome:
          'OKC moved Adams\' contract and added another first-round pick to their massive collection. The 13th pick became a useful asset in future deals.',
        timeline: [
          { season: '2020-21', event: 'Full tank, 22-50 record' },
          { season: '2021 Draft', event: 'Draft Josh Giddey #6 overall' },
          { season: '2022 Draft', event: 'Draft Chet Holmgren #2 overall' },
        ],
      },
    ],
  },
  // #85
  {
    date: '2021-01-13',
    title: 'James Harden Traded to Nets',
    summary:
      'Rockets trade James Harden to Brooklyn in a four-team blockbuster. Houston receives Victor Oladipo, Dante Exum, Rodions Kurucs, three Nets first-round picks (2022, 2024, 2026 unprotected), one Bucks first-round pick (2022 via Cleveland), and four first-round pick swaps.',
    context:
      'Harden forced his way out of Houston after publicly criticizing the franchise. Brooklyn assembled a super team of Harden, Kevin Durant, and Kyrie Irving. The massive trade involved Houston, Brooklyn, Cleveland, and Indiana.',
    tags: ['blockbuster', 'super-team', 'four-team', 'trade-demand', 'historic-haul'],
    teams: [
      {
        team: 'Brooklyn Nets',
        abbreviation: 'BKN',
        received: ['James Harden'],
        grade: 'C+',
        outcome:
          'The Big Three showed flashes but were rarely healthy together. Injuries to Harden and Irving\'s vaccine refusal derailed the 2021 playoffs. Harden was traded to Philly in 2022. The cost of draft capital was enormous.',
        timeline: [
          { season: '2020-21', event: '2nd round exit (Harden & Kyrie hurt)' },
          { season: '2021-22', event: 'Harden demands trade to 76ers' },
          { season: '2021-22', event: 'Swept by Celtics in 1st round' },
          { season: '2022-23', event: 'KD traded to Suns, full rebuild' },
        ],
      },
      {
        team: 'Houston Rockets',
        abbreviation: 'HOU',
        received: [
          'Victor Oladipo',
          'Dante Exum',
          'Rodions Kurucs',
          '2022 Nets 1st Round Pick',
          '2024 Nets 1st Round Pick',
          '2026 Nets 1st Round Pick',
          '2022 Bucks 1st Round Pick (via CLE)',
          'Four 1st Round Pick Swaps',
        ],
        grade: 'A-',
        outcome:
          'Houston received a massive haul of picks that funded their rebuild around Jalen Green and Jabari Smith Jr. Oladipo was flipped to Miami. The picks\' value increased as Brooklyn declined.',
        timeline: [
          { season: '2020-21', event: 'Worst record in NBA (17-55)' },
          { season: '2021 Draft', event: 'Draft Jalen Green #2 overall' },
          { season: '2022 Draft', event: 'Draft Jabari Smith Jr. #3 overall' },
          { season: '2023-24', event: 'Nets picks gain value as BKN declines' },
        ],
      },
      {
        team: 'Indiana Pacers',
        abbreviation: 'IND',
        received: ['Caris LeVert', '2021 2nd Round Pick'],
        grade: 'B',
        outcome:
          'LeVert was a solid scorer for Indiana before being traded to Cleveland. A kidney mass was discovered during the trade physical, leading to early surgery that potentially saved his life.',
        timeline: [
          { season: '2020-21', event: 'LeVert returns after kidney surgery' },
          { season: '2020-21', event: 'Play-in loss, missed playoffs' },
          { season: '2021-22', event: 'LeVert traded to Cavaliers' },
        ],
      },
      {
        team: 'Cleveland Cavaliers',
        abbreviation: 'CLE',
        received: ['Jarrett Allen', 'Taurean Prince'],
        grade: 'A',
        outcome:
          'Allen became a franchise cornerstone and All-Star caliber center for the Cavaliers. One of the best ancillary returns from a mega-trade.',
        timeline: [
          { season: '2020-21', event: 'Allen becomes starting center' },
          { season: '2021-22', event: 'Allen named All-Star' },
          { season: '2022-23', event: 'Cavs make playoffs, Allen key piece' },
          { season: '2023-24', event: '2nd round playoff appearance' },
        ],
      },
    ],
  },
  // #86
  {
    date: '2020-11-18',
    title: 'Victor Oladipo Traded to Rockets (via Harden Deal)',
    summary:
      'As part of the Harden mega-deal framework, Indiana sends Victor Oladipo to Houston, completing the four-team trade structure.',
    context:
      'Oladipo was recovering from his quad injury and had not regained his pre-injury form. Houston received him as a placeholder asset in the Harden deal before flipping him to Miami at the deadline.',
    tags: ['multi-team', 'salary-matching', 'bridge-asset'],
    teams: [
      {
        team: 'Houston Rockets',
        abbreviation: 'HOU',
        received: ['Victor Oladipo'],
        grade: 'C',
        outcome:
          'Oladipo played 20 games for Houston before being traded to Miami at the deadline. He was a pass-through asset in the Harden rebuild.',
        timeline: [
          { season: '2020-21', event: 'Oladipo plays 20 games' },
          { season: '2020-21', event: 'Oladipo traded to Heat at deadline' },
        ],
      },
      {
        team: 'Indiana Pacers',
        abbreviation: 'IND',
        received: ['Caris LeVert'],
        grade: 'B',
        outcome:
          'LeVert replaced Oladipo\'s scoring and became the Pacers\' go-to option before being traded to Cleveland.',
        timeline: [
          { season: '2020-21', event: 'LeVert averages 20.7 PPG after surgery' },
          { season: '2021-22', event: 'LeVert traded to Cavaliers' },
          { season: '2022-23', event: 'Pacers rebuild around Haliburton' },
        ],
      },
    ],
  },
  // #87
  {
    date: '2020-11-20',
    title: 'Dennis Schroder Traded to Lakers',
    summary:
      'Thunder trade Dennis Schroder to the Lakers for Danny Green and the 28th pick in the 2020 draft.',
    context:
      'Los Angeles wanted a secondary playmaker and on-ball defender to complement LeBron and AD for their title defense. OKC continued to collect assets during their rebuild.',
    tags: ['offseason', 'title-defense', 'guard-upgrade'],
    teams: [
      {
        team: 'Los Angeles Lakers',
        abbreviation: 'LAL',
        received: ['Dennis Schroder'],
        grade: 'C-',
        outcome:
          'Schroder had an inconsistent season and the Lakers lost in the first round to Phoenix. He turned down a $84 million extension and left in free agency for the veteran minimum. A disaster.',
        timeline: [
          { season: '2020-21', event: '1st round exit vs Suns (AD hurt)' },
          { season: '2020-21', event: 'Schroder declines $84M extension' },
          { season: '2021 FA', event: 'Schroder signs vet minimum with Celtics' },
        ],
      },
      {
        team: 'Oklahoma City Thunder',
        abbreviation: 'OKC',
        received: ['Danny Green', '2020 1st Round Pick (#28)'],
        grade: 'B+',
        outcome:
          'OKC flipped Green and collected another asset. Continued excellent asset management during the rebuild.',
        timeline: [
          { season: '2020-21', event: 'Green traded to 76ers' },
          { season: '2020-21', event: 'Full tank mode, 22-50' },
          { season: '2021 Draft', event: 'Continue stockpiling draft picks' },
        ],
      },
    ],
  },
  // #88
  {
    date: '2020-11-22',
    title: 'Chris Paul Traded to Suns',
    summary:
      'Thunder trade Chris Paul, Abdel Nader, and a 2022 pick to Phoenix for Ricky Rubio, Kelly Oubre Jr., Jalen Lecque, Ty Jerome, and a 2022 first-round pick.',
    context:
      'After his resurgent season in OKC, Paul was dealt to a young Suns team built around Devin Booker and Deandre Ayton. Phoenix was ready to compete.',
    tags: ['offseason', 'veteran-leader', 'contender-building'],
    teams: [
      {
        team: 'Phoenix Suns',
        abbreviation: 'PHX',
        received: ['Chris Paul'],
        grade: 'A+',
        outcome:
          'Paul transformed Phoenix into a contender, leading them to the 2021 NBA Finals. The Suns went from lottery team to championship contender overnight.',
        timeline: [
          { season: '2020-21', event: 'NBA Finals (lost to Bucks in 6)' },
          { season: '2021-22', event: '#1 seed, 64 wins' },
          { season: '2021-22', event: '2nd round exit vs Mavericks (Game 7)' },
          { season: '2022-23', event: 'CP3 waived, signs with Warriors' },
        ],
      },
      {
        team: 'Oklahoma City Thunder',
        abbreviation: 'OKC',
        received: ['Ricky Rubio', 'Kelly Oubre Jr.', 'Jalen Lecque', 'Ty Jerome', '2022 1st Round Pick'],
        grade: 'B',
        outcome:
          'OKC flipped most of these players for additional assets. Rubio was traded to Minnesota. The pick and continued asset accumulation was the real value.',
        timeline: [
          { season: '2020-21', event: 'Oubre flipped to Warriors' },
          { season: '2020-21', event: 'Rubio traded to Timberwolves' },
          { season: '2021-22', event: 'Continue accumulating draft capital' },
        ],
      },
    ],
  },
  // #89
  {
    date: '2020-12-08',
    title: 'Myles Turner and Victor Oladipo Discussed (Pacers Retool)',
    summary:
      'Pacers trade Victor Oladipo, along with their core, as Indiana begins a retooling phase. Oladipo had been dealt to Houston in the Harden trade and was then flipped to Miami at the March deadline.',
    context:
      'Indiana was transitioning away from the Oladipo era after his injury struggles. The Pacers explored trades for both Oladipo and Turner throughout the 2020-21 season.',
    tags: ['retool', 'injury-decline', 'asset-evaluation'],
    teams: [
      {
        team: 'Miami Heat',
        abbreviation: 'MIA',
        received: ['Victor Oladipo (from HOU at deadline)'],
        grade: 'C-',
        outcome:
          'Oladipo was injured again in Miami, suffering a knee injury that sidelined him for over a year. A disappointing acquisition.',
        timeline: [
          { season: '2020-21', event: '1st round sweep by Bucks' },
          { season: '2020-21', event: 'Oladipo tears quad in playoffs' },
          { season: '2021-22', event: 'Heat reach Conference Finals without Dipo' },
        ],
      },
      {
        team: 'Houston Rockets',
        abbreviation: 'HOU',
        received: ['Avery Bradley', 'Kelly Olynyk (from MIA)'],
        grade: 'C',
        outcome:
          'Houston received decent salary filler but no long-term assets. A minor move in the broader rebuild.',
        timeline: [
          { season: '2020-21', event: 'Worst record in NBA (17-55)' },
          { season: '2021 Draft', event: 'Draft Jalen Green #2 overall' },
        ],
      },
    ],
  },
  // #90
  {
    date: '2021-03-25',
    title: 'Aaron Gordon Traded to Nuggets',
    summary:
      'Magic trade Aaron Gordon and Gary Clark to Denver for Gary Harris, R.J. Hampton, and a 2025 first-round pick.',
    context:
      'Gordon had been unhappy in Orlando and requested a move. Denver needed a versatile forward to complement Nikola Jokic for a title run. Orlando was in full teardown mode.',
    tags: ['trade-deadline', 'trade-request', 'contender-upgrade'],
    teams: [
      {
        team: 'Denver Nuggets',
        abbreviation: 'DEN',
        received: ['Aaron Gordon', 'Gary Clark'],
        grade: 'A',
        outcome:
          'Gordon became the perfect complementary piece alongside Jokic, providing defense and athleticism. He was a key contributor to Denver\'s 2023 NBA championship.',
        timeline: [
          { season: '2020-21', event: '2nd round exit vs Suns' },
          { season: '2021-22', event: '1st round exit (Murray injured)' },
          { season: '2022-23', event: 'NBA Champions' },
          { season: '2022-23', event: 'Gordon key role in playoff run' },
        ],
      },
      {
        team: 'Orlando Magic',
        abbreviation: 'ORL',
        received: ['Gary Harris', 'R.J. Hampton', '2025 1st Round Pick'],
        grade: 'B',
        outcome:
          'Hampton showed flashes as a young prospect and the first-round pick added to Orlando\'s rebuild chest. Harris was a serviceable veteran. Fair return.',
        timeline: [
          { season: '2020-21', event: 'Full rebuild, 21-51 record' },
          { season: '2021 Draft', event: 'Draft Jalen Suggs #5 overall' },
          { season: '2022 Draft', event: 'Draft Paolo Banchero #1 overall' },
          { season: '2023-24', event: 'Magic make playoffs' },
        ],
      },
    ],
  },
  // #91
  {
    date: '2021-03-25',
    title: 'Nikola Vucevic Traded to Bulls',
    summary:
      'Magic trade Nikola Vucevic and Al-Farouq Aminu to Chicago for Wendell Carter Jr., Otto Porter Jr., and two first-round picks (2021, 2023).',
    context:
      'Chicago was making an aggressive push to return to the playoffs, pairing Vucevic with Zach LaVine. Orlando committed to a full rebuild, trading their franchise center.',
    tags: ['trade-deadline', 'rebuild', 'all-star-trade'],
    teams: [
      {
        team: 'Chicago Bulls',
        abbreviation: 'CHI',
        received: ['Nikola Vucevic', 'Al-Farouq Aminu'],
        grade: 'B-',
        outcome:
          'Vucevic was a solid scorer and helped Chicago return to the playoffs, but he was not the transformative star they hoped. The cost of two first-round picks was steep.',
        timeline: [
          { season: '2020-21', event: 'Missed playoffs' },
          { season: '2021-22', event: 'Playoffs! 1st round exit vs Bucks' },
          { season: '2022-23', event: 'Play-in loss, missed playoffs' },
          { season: '2023-24', event: 'Vucevic remains solid starter' },
        ],
      },
      {
        team: 'Orlando Magic',
        abbreviation: 'ORL',
        received: ['Wendell Carter Jr.', 'Otto Porter Jr.', '2021 1st Round Pick', '2023 1st Round Pick'],
        grade: 'A-',
        outcome:
          'Carter Jr. became a quality starting center in Orlando. The two first-round picks added significant value to the rebuild. Excellent return.',
        timeline: [
          { season: '2021-22', event: 'WCJ starts, averages 15 PPG' },
          { season: '2022 Draft', event: 'Draft Paolo Banchero #1 overall' },
          { season: '2023-24', event: 'Magic make playoffs (5th seed)' },
        ],
      },
    ],
  },
  // #92
  {
    date: '2021-03-25',
    title: 'Evan Fournier Traded to Celtics',
    summary:
      'Magic trade Evan Fournier to Boston for Jeff Teague and two second-round picks.',
    context:
      'Part of Orlando\'s massive deadline sell-off. The Magic moved Fournier\'s expiring contract to a Boston team looking for scoring help in the playoff push.',
    tags: ['trade-deadline', 'expiring-contract', 'sell-off'],
    teams: [
      {
        team: 'Boston Celtics',
        abbreviation: 'BOS',
        received: ['Evan Fournier'],
        grade: 'C',
        outcome:
          'Fournier was fine as a rental but Boston lost in the first round. He signed with the Knicks in free agency that summer.',
        timeline: [
          { season: '2020-21', event: '1st round exit vs Nets' },
          { season: '2021 FA', event: 'Fournier signs with Knicks' },
          { season: '2021-22', event: 'Celtics reach NBA Finals without him' },
        ],
      },
      {
        team: 'Orlando Magic',
        abbreviation: 'ORL',
        received: ['Jeff Teague', 'Two 2nd Round Picks'],
        grade: 'C+',
        outcome:
          'A modest return for an expiring contract. Teague was bought out. The picks added marginal value to the rebuild.',
        timeline: [
          { season: '2020-21', event: 'Full rebuild continues' },
          { season: '2021 Draft', event: 'Draft Jalen Suggs #5 overall' },
          { season: '2022 Draft', event: 'Draft Paolo Banchero #1 overall' },
        ],
      },
    ],
  },
  // #93
  {
    date: '2021-02-08',
    title: 'Derrick Rose Traded to Knicks',
    summary:
      'Pistons trade Derrick Rose to New York for Dennis Smith Jr. and a 2021 second-round pick.',
    context:
      'Tom Thibodeau reunited with Rose for the third time. The Knicks were surprisingly competitive and needed a veteran point guard off the bench to stabilize their rotation.',
    tags: ['midseason', 'reunion', 'veteran-upgrade'],
    teams: [
      {
        team: 'New York Knicks',
        abbreviation: 'NYK',
        received: ['Derrick Rose'],
        grade: 'A-',
        outcome:
          'Rose was arguably the Knicks\' best player down the stretch, providing scoring, leadership, and clutch play. He helped New York make the playoffs for the first time since 2013.',
        timeline: [
          { season: '2020-21', event: 'Knicks make playoffs (4th seed)' },
          { season: '2020-21', event: '1st round exit vs Hawks' },
          { season: '2021-22', event: 'Rose hurt, Knicks miss playoffs' },
        ],
      },
      {
        team: 'Detroit Pistons',
        abbreviation: 'DET',
        received: ['Dennis Smith Jr.', '2021 2nd Round Pick'],
        grade: 'C-',
        outcome:
          'Smith Jr. did not stick in Detroit and was waived. Minimal return, though Rose was on an expiring contract with limited trade value.',
        timeline: [
          { season: '2020-21', event: 'Worst record in NBA (20-52)' },
          { season: '2021 Draft', event: 'Draft Cade Cunningham #1 overall' },
          { season: '2021-22', event: 'Cade shows flashes as rookie' },
        ],
      },
    ],
  },
  // #94
  {
    date: '2021-03-25',
    title: 'Rajon Rondo Traded to Clippers',
    summary:
      'Hawks trade Rajon Rondo to the Clippers for Lou Williams.',
    context:
      'The Clippers wanted a veteran floor general for the playoffs. The Hawks got Lou Williams, who would provide instant offense off the bench for their surprising playoff run.',
    tags: ['trade-deadline', 'veteran-swap', 'playoff-push'],
    teams: [
      {
        team: 'Los Angeles Clippers',
        abbreviation: 'LAC',
        received: ['Rajon Rondo'],
        grade: 'C',
        outcome:
          'Rondo barely played in the Clippers\' playoff run to the Western Conference Finals. A minimal impact acquisition.',
        timeline: [
          { season: '2020-21', event: 'Conference Finals loss to Suns' },
          { season: '2020-21', event: 'Rondo barely plays in playoffs' },
          { season: '2021 FA', event: 'Rondo signs with Lakers' },
        ],
      },
      {
        team: 'Atlanta Hawks',
        abbreviation: 'ATL',
        received: ['Lou Williams'],
        grade: 'B+',
        outcome:
          'Williams returned to his hometown Atlanta and provided key bench scoring during the Hawks\' surprise run to the 2021 Eastern Conference Finals.',
        timeline: [
          { season: '2020-21', event: 'Eastern Conference Finals' },
          { season: '2020-21', event: 'Lou Will key bench scorer in run' },
          { season: '2021-22', event: 'Lou Williams retires after season' },
        ],
      },
    ],
  },
  // #95
  {
    date: '2021-03-19',
    title: 'Norman Powell Traded to Trail Blazers',
    summary:
      'Raptors trade Norman Powell to Portland for Gary Trent Jr. and Rodney Hood.',
    context:
      'Toronto was out of the playoff race and moved Powell, who was set for a big payday. Portland needed a wing scorer to bolster their backcourt alongside Lillard and McCollum.',
    tags: ['trade-deadline', 'expiring-contract', 'win-now'],
    teams: [
      {
        team: 'Portland Trail Blazers',
        abbreviation: 'POR',
        received: ['Norman Powell'],
        grade: 'B',
        outcome:
          'Powell was a quality addition and re-signed with Portland before being traded to the Clippers. A useful piece during the Lillard era.',
        timeline: [
          { season: '2020-21', event: '1st round exit vs Nuggets' },
          { season: '2021 FA', event: 'Powell re-signs 5-year deal' },
          { season: '2021-22', event: 'Powell traded to Clippers' },
          { season: '2022-23', event: 'Lillard era ends, full rebuild' },
        ],
      },
      {
        team: 'Toronto Raptors',
        abbreviation: 'TOR',
        received: ['Gary Trent Jr.', 'Rodney Hood'],
        grade: 'A-',
        outcome:
          'Trent Jr. became a key young player for Toronto, earning a large extension. An excellent return for an expiring contract player.',
        timeline: [
          { season: '2020-21', event: 'Missed playoffs' },
          { season: '2021-22', event: 'GTJ averages 18.3 PPG, makes playoffs' },
          { season: '2022-23', event: 'GTJ signs 3-year, $54M extension' },
        ],
      },
    ],
  },
  // #96
  {
    date: '2020-11-18',
    title: 'George Hill Traded to Thunder (then 76ers)',
    summary:
      'As part of the Jrue Holiday trade, George Hill went to OKC. He was subsequently traded to Philadelphia for additional assets.',
    context:
      'OKC served as a trade facilitator, absorbing Hill\'s contract before flipping him to a contender. This was part of Sam Presti\'s strategy of collecting assets from every deal.',
    tags: ['trade-facilitator', 'asset-collecting', 'multi-step'],
    teams: [
      {
        team: 'Philadelphia 76ers',
        abbreviation: 'PHI',
        received: ['George Hill'],
        grade: 'C+',
        outcome:
          'Hill was a steady veteran backup but did not move the needle for Philadelphia in the 2021 playoffs.',
        timeline: [
          { season: '2020-21', event: '2nd round exit vs Hawks' },
          { season: '2020-21', event: 'Hill minimal playoff impact' },
          { season: '2021 FA', event: 'Hill signs with Bucks' },
        ],
      },
      {
        team: 'Oklahoma City Thunder',
        abbreviation: 'OKC',
        received: ['2025 2nd Round Pick', 'Other considerations'],
        grade: 'B',
        outcome:
          'OKC turned a free asset into more draft capital. Textbook Presti asset management.',
        timeline: [
          { season: '2020-21', event: 'Continue full-scale rebuild' },
          { season: '2020-21', event: '22-50 record, more lottery picks' },
        ],
      },
    ],
  },
  // #97
  {
    date: '2021-03-25',
    title: 'JJ Redick Traded to Mavericks',
    summary:
      'Pelicans trade JJ Redick, Nicolo Melli, and a 2021 second-round pick to Dallas for James Johnson, Wes Iwundu, and a 2021 second-round pick.',
    context:
      'New Orleans was clearing the decks and moved the veteran sharpshooter to a contending Dallas team. Redick barely played due to a heel injury and retired that summer.',
    tags: ['trade-deadline', 'veteran-move', 'end-of-career'],
    teams: [
      {
        team: 'Dallas Mavericks',
        abbreviation: 'DAL',
        received: ['JJ Redick', 'Nicolo Melli', '2021 2nd Round Pick'],
        grade: 'D',
        outcome:
          'Redick never played for the Mavericks due to injury. A wasted deadline move.',
        timeline: [
          { season: '2020-21', event: 'Redick never plays, retires' },
          { season: '2020-21', event: '1st round exit vs Clippers' },
          { season: '2021-22', event: 'Luka leads Mavs to Conf Finals' },
        ],
      },
      {
        team: 'New Orleans Pelicans',
        abbreviation: 'NOP',
        received: ['James Johnson', 'Wes Iwundu', '2021 2nd Round Pick'],
        grade: 'C',
        outcome:
          'A minor salary swap. Neither team benefited meaningfully from this trade.',
        timeline: [
          { season: '2020-21', event: 'Missed playoffs' },
          { season: '2021-22', event: 'Make playoffs via play-in' },
        ],
      },
    ],
  },
  // #98
  {
    date: '2016-07-07',
    title: 'DeMarre Carroll Traded to Nets',
    summary:
      'Raptors trade DeMarre Carroll, a 2018 first-round pick, and a 2018 second-round pick to Brooklyn for Justin Hamilton.',
    context:
      'Toronto needed to shed Carroll\'s bloated contract. Brooklyn, in full rebuild mode, was happy to absorb bad money in exchange for draft capital.',
    tags: ['salary-dump', 'rebuild', 'cap-relief'],
    teams: [
      {
        team: 'Brooklyn Nets',
        abbreviation: 'BKN',
        received: ['DeMarre Carroll', '2018 1st Round Pick', '2018 2nd Round Pick'],
        grade: 'B+',
        outcome:
          'Carroll was a serviceable veteran and the draft picks helped Brooklyn rebuild. Absorbing bad contracts for picks was a key strategy during the Nets\' resurgence.',
        timeline: [
          { season: '2017-18', event: 'Carroll starts 73 games' },
          { season: '2018-19', event: 'Nets make playoffs (6th seed)' },
          { season: '2019 FA', event: 'KD & Kyrie sign with Nets' },
        ],
      },
      {
        team: 'Toronto Raptors',
        abbreviation: 'TOR',
        received: ['Justin Hamilton'],
        grade: 'C+',
        outcome:
          'Toronto cleared cap space and roster flexibility. Hamilton never played for the Raptors. Paying a first-round pick to dump salary was costly but necessary.',
        timeline: [
          { season: '2017-18', event: '1st seed, swept by Cavs in 2nd round' },
          { season: '2018-19', event: 'NBA Champions (Kawhi trade)' },
        ],
      },
    ],
  },
  // #99
  {
    date: '2018-02-01',
    title: 'Tyreke Evans Trade Deadline Decision',
    summary:
      'Grizzlies decide to keep Tyreke Evans past the trade deadline despite heavy interest, and he walks in free agency.',
    context:
      'Evans was having a strong contract year in Memphis and drew interest from contenders. The Grizzlies overplayed their hand and failed to find a deal they liked.',
    tags: ['trade-deadline', 'non-trade', 'free-agency-loss'],
    teams: [
      {
        team: 'Memphis Grizzlies',
        abbreviation: 'MEM',
        received: ['Kept Tyreke Evans'],
        grade: 'F',
        outcome:
          'Evans left in free agency and Memphis got nothing. One of the worst non-moves of the era. Evans signed with Indiana.',
        timeline: [
          { season: '2017-18', event: 'Missed playoffs (22-60)' },
          { season: '2018 FA', event: 'Evans signs with Pacers for nothing' },
          { season: '2018-19', event: 'Evans banned from NBA (substance policy)' },
        ],
      },
    ],
  },
  // #100
  {
    date: '2021-03-28',
    title: 'Daniel Theis Traded to Bulls',
    summary:
      'Celtics trade Daniel Theis, Javonte Green, and a 2021 second-round pick to Chicago for Moe Wagner, Luke Kornet, and a 2021 second-round pick.',
    context:
      'Boston cleared a roster spot and shed a small amount of salary. Chicago wanted a versatile big man to add depth for their late-season push.',
    tags: ['trade-deadline', 'depth-move', 'roster-spot'],
    teams: [
      {
        team: 'Chicago Bulls',
        abbreviation: 'CHI',
        received: ['Daniel Theis', 'Javonte Green', '2021 2nd Round Pick'],
        grade: 'C+',
        outcome:
          'Theis provided some stability at center but was not a long-term piece. A minor upgrade for the stretch run.',
        timeline: [
          { season: '2020-21', event: 'Missed playoffs (31-41)' },
          { season: '2021 Offseason', event: 'Sign DeRozan, Ball, Caruso' },
          { season: '2021-22', event: 'Return to playoffs (6th seed)' },
        ],
      },
      {
        team: 'Boston Celtics',
        abbreviation: 'BOS',
        received: ['Moe Wagner', 'Luke Kornet', '2021 2nd Round Pick'],
        grade: 'C',
        outcome:
          'Kornet stuck around as a deep bench big and Wagner was a minor contributor. An even swap of depth pieces.',
        timeline: [
          { season: '2020-21', event: '1st round exit vs Nets' },
          { season: '2021-22', event: 'NBA Finals (lost to Warriors)' },
          { season: '2023-24', event: 'NBA Champions' },
        ],
      },
    ],
  },
];

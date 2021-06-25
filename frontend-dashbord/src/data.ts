import Coin1 from 'assets/coin1.png'
import Coin2 from 'assets/coin2.png'
import Coin3 from 'assets/coin3.png'

import AVATAR_Callum_Clark from "assets/img/landing/avatars/Callum-Clark.png";
import AVATAR_Eden_Ovadia from "assets/img/landing/avatars/Eden-Ovadia.png";
import AVATAR_Gregory_Santini from "assets/img/landing/avatars/Gregory-Santini.png";
import AVATAR_Jamie_Caso_Onzain from "assets/img/landing/avatars/Jamie-Caso-Onzain.png";
import AVATAR_Morgan_Thomas from "assets/img/landing/avatars/Morgan-Thomas.png";
import AVATAR_Neil_Tiongson from "assets/img/landing/avatars/Neil-Tiongson.png";
import AVATAR_Oleg_Prutz from "assets/img/landing/avatars/Oleg-Prutz.png";
import AVATAR_Ryan_Kelker from "assets/img/landing/avatars/Ryan-Kelker.png";
import AVATAR_Ryan_Matovu from "assets/img/landing/avatars/Ryan-Matovu.png";
import AVATAR_Unknown from "assets/img/landing/avatars/unknown.png";

export const options = [
  {
    title: 'Filter',
    data: [
      { label: 'Insert', value: 'Insert' },
      { label: 'Filter', value: 'Filter' },
      { label: 'Names', value: 'Names' },
      { label: 'Here', value: 'Here' },
      { label: 'Accordingly', value: 'Accordingly' }
    ]
  },
  {
    title: 'Max Slippage',
    data: [
      { label: '0.5%', value: '0.5' },
      { label: '1%', value: '1' },
      { label: 'Custom:', value: 'Custom', hasInput: true }
    ]
  },
  {
    title: 'Gas Prices',
    data: [
      { label: '20.5 Slow', value: '20.5' },
      { label: '25 Standard', value: '25' },
      { label: '28 Fast', value: '28' },
      { label: '32 Instant', value: '32' }
    ]
  }
]

export const pools = {
  columns: [
    { name: 'Pool', col: 4 },
    { name: 'Base APY', col: 3 },
    { name: 'Rewards APY', col: 3 },
    { name: 'Volumn', col: 2, sortable: true }
  ],
  records: [
    {
      pool: {
        icon: Coin1,
        currency: 'sUSD',
        description: 'DAI + USDC + USDT + sUSD'
      },
      baseAPY: '2.99%',
      rewardsAPY: '+4.30% -> 10.76% CRV+1.13% SNX',
      volumn: '$106.5m'
    },
    {
      pool: {
        icon: Coin2,
        currency: 'sUSD',
        description: 'DAI + USDC + USDT + sUSD'
      },
      baseAPY: '2.99%',
      rewardsAPY: '+4.30% -> 10.76% CRV+1.13% SNX',
      volumn: '$106.5m'
    },
    {
      pool: {
        icon: Coin3,
        currency: 'sUSD',
        description: 'DAI + USDC + USDT + sUSD'
      },
      baseAPY: '2.99%',
      rewardsAPY: '+4.30% -> 10.76% CRV+1.13% SNX',
      volumn: '$106.5m'
    }
  ]
}

export const ProfileList = [
  {
    avatar: AVATAR_Ryan_Matovu,
    name: "Ryan Matovu",
    job: "Founder and CEO",
    info: `Serial entrepreneur in B2B/B2C sales and e-commerce.\n\nLeadership positions in various Ethereum based projects.`,
    linkedin: "https://www.linkedin.com/",
  },
  {
    avatar: AVATAR_Callum_Clark,
    name: "Callum Clark",
    job: "Chief Operations",
    info: `Management positions in multi-national organisations.\n\nServed on management teams for several crypto startups.`,
    linkedin: "https://www.linkedin.com/",
  },
  {
    avatar: AVATAR_Unknown,
    name: "Noam David Elbaz",
    job: "Chief Research",
    info: `Private Digital Assets Fund investment manager.\n\nCrypto portfolio management and DeFi enthusiast.`,
    linkedin: "https://www.linkedin.com/",
  },
  {
    avatar: AVATAR_Neil_Tiongson,
    name: "Neil Tiongson",
    job: "Chief Operations",
    info: `Performance Graphic Designer.\n\nDesigning and building branding for several crypto projects.`,
    linkedin: "https://www.linkedin.com/",
  },
  {
    avatar: AVATAR_Morgan_Thomas,
    name: "Morgan Thomas",
    job: "Blockchain Developer",
    info: `Platonic Systems functional programming tech consultant.\n\nDeveloped algorithmic trading systems using Haskell.`,
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    avatar: AVATAR_Gregory_Santini,
    name: "Gregory Santini",
    job: "Front-end Developer",
    info: `Senior front-end developer for Apple and Evernote.\n\nExperienced web developer and Solidity developer.`,
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    avatar: AVATAR_Unknown,
    name: "Steven Shaw",
    job: "Blackchain Developer",
    info: `Senior software developer for multiple large corporations.\n\nFunctional programming and Programming Language Theory enthusiast.`,
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    avatar: AVATAR_Jamie_Caso_Onzain,
    name: "Jamie Caso Onzain",
    job: "Blackchain Developer",
    info: `Cardano ambassador and Cardano stake pool operator.\n\nGenesis Founding Member and tester for Mina Protocol.`,
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    avatar: AVATAR_Ryan_Kelker,
    name: "Ryan Kelker",
    job: "Blockchain Developer",
    info: `Applications developer for Rakuten.\n\nExperienced functional programming developer.`,
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    avatar: AVATAR_Oleg_Prutz,
    name: "Oleg Prutz",
    job: "Blockchain Developer",
    info: `Data Scientist for Genesys AI ‘Experience as a Service’ company.\n\nExperienced functional programmer and Kaggle competitor.`,
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    avatar: AVATAR_Eden_Ovadia,
    name: "Eden Ovadia",
    job: "Intern",
    info: `Full stack software engineer for Microsoft.\n\nSoftware and programming, problems solving skills and attention to details.`,
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    avatar: AVATAR_Unknown,
    name: "Greg Nwosu",
    job: "Intern",
    info: `Big Data and infrastructure engineer for Barclays and RBS.\n\nSenior Java developer for IG Index exchange.`,
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
];
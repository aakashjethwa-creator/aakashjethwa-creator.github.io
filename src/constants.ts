export interface VideoWork {
  id: string;
  title: string;
  category: 'Teaser' | 'Trailer' | 'Shortfilm';
  thumbnail?: string;
  youtubeId: string;
  feature?:boolean;
}

export const WORKS: VideoWork[] = [
  // Teasers
  { id: 't1', title: 'Chhota Bheem and the Curse of Damyaan', category: 'Teaser', youtubeId: 'nRpiFn0tkE0' }, // Placeholders for now, will try to find real ones if possible or use generic
  { id: 't2', title: 'Indian Police Force Season 1', category: 'Teaser', youtubeId: '2qfzW1Z6S-k' },
  { id: 't3', title: 'SAVI (TEASER 1)', category: 'Teaser', youtubeId: 'yChW_tptlNs' },
  { id: 't4', title: 'Kartam Bhugtam', category: 'Teaser', youtubeId: '89b5EGLBr_w' },
  { id: 't5', title: 'Kapkapiii', category: 'Teaser', youtubeId: 'HXvsApneIIc' },
  { id: 't6', title: 'Sarbala Ji', category: 'Teaser', youtubeId: 'OLLzeJo2XkI' },
  { id: 't7', title: 'Ek Chatur Naar', category: 'Teaser', youtubeId: '8SsjTLCEOtQ' },
  { id: 't8', title: 'DUSSHERA', category: 'Teaser', youtubeId: 'SpVMyl5tT3A' },

  // Trailers
  { id: 'tr1', title: 'Indian Police Force Season 1', category: 'Trailer', youtubeId: '6Jr4lNiK6XE' },
  { id: 'tr2', title: 'Shayar', category: 'Trailer', youtubeId: 'PyYbv_qtKj8' },
  { id: 'tr3', title: 'Hi Anokhi Gaath', category: 'Trailer', youtubeId: 'Ji5xgVMp_-o' },
  { id: 'tr4', title: 'SAVI (TRAILER)', category: 'Trailer', youtubeId: 'e1_NScEPKic' },
  { id: 'tr5', title: 'Kartam Bhugtam', category: 'Trailer', youtubeId: 'BNN5DFaNVmw' },
  { id: 'tr6', title: 'Vicky Vidya Ka Woh Wala Video', category: 'Trailer', youtubeId: '4liP09haI9g' },
  { id: 'tr7', title: 'Jai Mataji Let\'s Rock', category: 'Trailer', youtubeId: '3jiI11VMd-k' },
  { id: 'tr8', title: 'Kapkapiii', category: 'Trailer', youtubeId: '6QudgN2wmv0' },
  { id: 'tr9', title: 'Son Of Sardaar 2', category: 'Trailer', youtubeId: 'HSX_KPfbP1o' },
  { id: 'tr10', title: 'Ek Chatur Naar', category: 'Trailer', youtubeId: 't-WME4yy2Wo' },
  { id: 'tr11', title: 'DUSSHERA', category: 'Trailer', youtubeId: 'oJ2SpQQdzJE' },
  { id: 'tr12', title: 'Jassi Weds Jassi', category: 'Trailer', youtubeId: 'bLspB-x-N6M' },
  { id: 'tr13', title: 'De De Pyaar De 2', category: 'Trailer', youtubeId: '59aIp7SfIIk', feature:true },
  { id: 'tr14', title: 'Beinteha', category: 'Trailer', youtubeId: 'JHQQjFxVNUI' },
  { id: 'tr15', title: 'Astitva', category: 'Trailer', youtubeId: 'Yg9qGzumRaE' },
  { id: 'tr16', title: 'Khichdi 2', category: 'Trailer', youtubeId: 'zXgWKBh_6rU' },
  { id: 'tr17', title: 'One Two Cha Cha Chaa', category: 'Trailer', youtubeId: '2nSNhoswrRk' },

  // short films

  {id:'sf1', title: 'Personal Project', category: 'Shortfilm', youtubeId:'VvseYlSsEP0'},
  {id:'sf2', title: 'Knock Knock - Short Film', category: 'Shortfilm', youtubeId:'NknzS9pjM1M'},

];

/**
 * Current leadership per the 2025 Company Profile.
 * Photos supplied for all except the COO. (The pre-2025 7-director board is
 * superseded by this team.)
 */
export interface Leader {
  name: string;
  role: string;
  qualifications: string;
  photo?: string; // under /images/team/
  statement?: string;
}

export const LEADERS: Leader[] = [
  {
    name: 'Eng. Rohana Wannigama',
    role: 'Chairman',
    qualifications: 'B.Sc. Eng (Hons), M.Eng, C.Eng, MIE(SL), MSSE(SL), MIE Aust.',
    photo: 'wannigama',
  },
  {
    name: 'Mr. Lalith Adikari',
    role: 'Chief Executive Officer',
    qualifications: 'I.Eng, MIIESL, MECSL',
    photo: 'adikari',
    statement:
      'At Vonlan, we are not just in the business of building structures; we are in the business of shaping the future. A foundation rooted in expertise and a relentless pursuit of quality drives every project we take on.',
  },
  {
    name: 'Mr. Nalin Gilbert',
    role: 'Chief Operating Officer',
    qualifications: 'B.Sc. Eng, C.Eng MIE(SL), MSc Int.PE(SL), MBA',
    photo: 'gilbert',
    statement:
      'We are diversifying into renewable energy, modular construction, green building and build-operate-transfer projects — building not only structures, but a legacy of environmental responsibility and long-term growth.',
  },
  {
    name: 'Eng. Maj. Ranjith Gunatilleke',
    role: 'Director',
    qualifications: 'B.Sc. Eng, C.Eng, MICE(Lond), MIE(SL), MSSE(SL)',
    photo: 'gunatilleke',
  },
  {
    name: 'Mr. Jerad Sriyantha',
    role: 'Director',
    qualifications: 'BBA (sp) (Colombo), ACA',
    photo: 'sriyantha',
  },
];

export interface TeamMember {
  name: string;
  role: string;
  linkedinLink?: string;
  imageUrl: string;
  description?: string;
  socialLinks?: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface TeamHeads {
  management: TeamMember[];
  marketing: TeamMember[];
  technical: TeamMember[];
  digital: TeamMember[];
  cinematography: TeamMember[];
  design: TeamMember[];
  content: TeamMember[];
  photography: TeamMember[];
  videoEditing: TeamMember[];
  soundDesign: TeamMember[];
  eventManagement: TeamMember[];
  PR: TeamMember[];
  lead128: TeamMember[];
  social: TeamMember[];
}

export interface CoreTeam {
  president: TeamMember;
  vicePresident: TeamMember;
  generalSecretary: TeamMember;
  heads: TeamHeads;
  Treasurer: TeamMember;
}

export interface TeamData {
  facultyAdvisor: TeamMember;
  founders: TeamMember[];
  seniorAdvisors: TeamMember[];
  coreTeam: CoreTeam;
  cinematography: TeamMember[];         // ✅ New
  social: {                              // ✅ New
    pr: TeamMember;
    socialMedia: TeamMember;
  };
  lead128: TeamMember;                  // ✅ New
}

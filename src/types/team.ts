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
}

export interface CoreTeam {
  president: TeamMember;
  vicePresident: TeamMember;
  generalSecretary: TeamMember;
  heads: TeamHeads;
}

export interface TeamData {
  facultyAdvisor: TeamMember;
  founders: TeamMember[];
  seniorAdvisors: TeamMember[];
  coreTeam: CoreTeam;
}
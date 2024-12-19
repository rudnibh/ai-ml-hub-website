import { images } from '../config/images';

export interface TeamMember {
  name: string;
  role: string;
  email: string;
  imageUrl: string;
}

export const teamData = {
  facultyAdvisor: {
    name: 'Mr. Ashish Mishra',
    role: 'Faculty Advisor',
    email: 'Mishra.Ashish@mail.jiit.ac.in',
    imageUrl: images.team.facultyAdvisor,
  },
  seniorAdvisors: [
    {
      name: 'Harsh Dhariwal',
      role: 'Senior Advisor',
      email: 'Harsh.dhariwal@mail.jiit.ac.in',
      imageUrl: images.team.placeholders.Senior1,
    },
    {
      name: 'Mansi Monocha',
      role: 'Senior Advisor',
      email: 'Mansi.Monocha@mail.jiit.ac.in',
      imageUrl: images.team.placeholders.Senior2,
    },
    {
      name: 'Sanat Walia',
      role: 'Senior Advisor',
      email: 'Sanat.Walia@mail.jiit.ac.in',
      imageUrl: images.team.placeholders.Senior3,
    },
  ],
  coreTeam: {
    president: {
      name: 'Priyanshu Aggarwal',
      role: 'President',
      email: 'priyanshu.Aggarwal@mail.jiit.ac.in',
      imageUrl: images.team.placeholders.president,
    },
    vicePresident: {
      name: 'Ujjwal Garg',
      role: 'Vice President',
      email: 'sarah.w@university.edu',
      imageUrl: images.team.placeholders.VicePresident,
    },
    generalSecretary: {
      name: 'Nishchay',
      role: 'General Secretary',
      email: 'michael.b@university.edu',
      imageUrl: images.team.placeholders.Genralsec,
    },
    heads: {
      management: {
        name: 'Emily Davis',
        role: 'Management Head',
        email: 'emily.d@university.edu',
        imageUrl: images.team.placeholders.MangementHead,
      },
      marketing: {
        name: 'David Wilson',
        role: 'Marketing Head',
        email: 'david.w@university.edu',
        imageUrl: images.team.placeholders.MarketingHead,
      },
      technical: [
        {
          name: 'Chris Anderson',
          role: 'Technical Head',
          email: 'chris.a@university.edu',
          imageUrl: images.team.placeholders.male3,
        },
        {
          name: 'Lisa Park',
          role: 'Technical Head',
          email: 'lisa.p@university.edu',
          imageUrl: images.team.placeholders.female3,
        },
        {
          name: 'James Wilson',
          role: 'Technical Head',
          email: 'james.w@university.edu',
          imageUrl: images.team.placeholders.male1,
        },
        {
          name: 'Emma Thompson',
          role: 'Technical Head',
          email: 'emma.t@university.edu',
          imageUrl: images.team.placeholders.female2,
        },
        {
          name: 'Daniel Lee',
          role: 'Technical Head',
          email: 'daniel.l@university.edu',
          imageUrl: images.team.placeholders.male2,
        },
        {
          name: 'Sophie Chen',
          role: 'Technical Head',
          email: 'sophie.c@university.edu',
          imageUrl: images.team.placeholders.female1,
        },
      ],
      digital: [
        {
          name: 'Rachel Green',
          role: 'Digital Head',
          email: 'rachel.g@university.edu',
          imageUrl: images.team.placeholders.female2,
        },
        {
          name: 'Tom Martinez',
          role: 'Digital Head',
          email: 'tom.m@university.edu',
          imageUrl: images.team.placeholders.male2,
        },
      ],
    },
  },
};

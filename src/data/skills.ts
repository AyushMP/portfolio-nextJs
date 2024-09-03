import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "C",
        level: SkillLevel.Intermediate,
        icon: "/skills/c-svgrepo-com (1).svg",
      },
      {
        title: "C++",
        level: SkillLevel.Intermediate,
        icon: "/skills/cpp3-svgrepo-com.svg",
      },
      {
        title: "Python",
        level: SkillLevel.Begginer,
        icon: "/skills/python-svgrepo-com.svg",
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.png",
      },
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Intermediate,
        icon: "/skills/css.svg",
      },
      // {
      //   title: "SASS",
      //   level: SkillLevel.Intermediate,
      //   icon: "/skills/sass.svg",
      // },
      // {
      //   title: "Redux Toolkit",
      //   level: SkillLevel.Expert,
      //   icon: "/skills/redux.svg",
      // },
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Node.js",
        level: SkillLevel.Expert,
        icon: "/skills/nodejs.svg",
      },
      {
        title: "Express.js",
        level: SkillLevel.Expert,
        icon: "/skills/express.svg",
      },
      {
        title: "Django",
        level: SkillLevel.Intermediate,
        icon: "/skills/django-svgrepo-com.svg",
      },
      // {
      //   title: "Nest.js",
      //   level: SkillLevel.Begginer,
      //   icon: "/skills/nestjs.svg",
      // },
    ],
  },
  // {
  //   title: "Mobile App Development",
  //   items: [
  //     {
  //       title: "Flutter",
  //       level: SkillLevel.Expert,
  //       icon: "/skills/flutter.svg",
  //     },
  //     {
  //       title: "GetX",
  //       level: SkillLevel.Expert,
  //       icon: "/skills/getx.png",
  //     },
  //   ],
  // },
  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      // {
      //   title: "PostgreSQL",
      //   level: SkillLevel.Intermediate,
      //   icon: "/skills/postgresql.svg",
      // },
      {
        title: "MySQL",
        level: SkillLevel.Begginer,
        icon: "/skills/mysql.svg",
      },
    ],
  },
  {
    title: "Deep Learning",
    items: [
      {
        title: "TensorFlow",
        level: SkillLevel.Begginer,
        icon: "/skills/tensorflow-svgrepo-com.svg",
      },
      {
        title: "Pytorch",
        level: SkillLevel.Intermediate,
        icon: "/skills/pytorch-svgrepo-com.svg",
      },
    ],
  },
  {
    title: "Miscellaneous",
    items: [
      {
        title: "Redhat",
        level: SkillLevel.Intermediate,
        icon: "/skills/redhat-svgrepo-com.svg",
      },
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
      {
        title: "Github",
        level: SkillLevel.Expert,
        icon: "/skills/github-142-svgrepo-com.svg",
      },
      {
        title: "Unreal",
        level: SkillLevel.Expert,
        icon: "/skills/unreal-engine-svgrepo-com.svg",
      },
      {
        title: "Ubuntu",
        level: SkillLevel.Intermediate,
        icon: "/skills/ubuntu.png",
      },
    ],
  },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Expert,
        icon: "/images/analytical-skills.png",
      },
    ],
  },
];

export default skills;

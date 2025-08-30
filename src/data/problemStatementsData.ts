// Problem statement interface
export interface Problem {
  title: string;
  description: string;
  challenge?: string; // Optional for AI problems
  objective?: string; // Optional - can be removed if not needed
  domain: string;
}

export const problems: Problem[] = [
  // AI Problems - Only title and description
  {
    title: 'AI Attendance & Participation Tracker',
    description: 'AI system using face + voice recognition to automate attendance and track student engagement with detailed reports.',
    domain: 'AI'
  },
  {
    title: 'Generative AI for Simplifying Legal Documents',
    description: 'AI co-pilot that explains complex legal documents in plain language and translates them into Indian regional languages.',
    domain: 'AI'
  },
  {
    title: ' Personalized Career & Skills Advisor (AI Mentor)',
    description: 'AI mentor that analyzes skills, resumes, and interests to provide career guidance, learning paths, and job recommendations.',
    domain: 'AI'
  },
  {
    title: 'AI Agentic Coding & DevOps Team Simulator',
    description: 'Multi-agent AI platform simulating a full IT team — coding, reviewing, deploying, and managing projects end-to-end',
    domain: 'AI'
  },
  {
    title: ' AI Image-to-Story Generator (in Indian Languages)',
    description: 'Multilingual AI that transforms images into creative stories in Tamil, Telugu, Hindi, Malayalam, and Kannada.',
    domain: 'AI'
  },  
  {
    title: 'AI-Agent Tutor for Teacher’s Semester Planning',
    description: 'An AI agent that helps teachers design semester-long teaching plans, lesson aids, and assessments, adapting to syllabus requirements and offering advanced features through a subscription model.',
    domain: 'AI'
  },
  {
    title: 'AI-Agent for Automated Software Testing & Security Hardening',
    description: 'An autonomous agent that tests, validates, and secures software codebases by running tests, detecting vulnerabilities, and suggesting secure fixes without human intervention.',
    domain: 'AI'
  },
  {
    title: 'Multi-Agent AI Ecosystem for Enterprise Decision-Making',
    description: 'An AI system where agents focus on finance, compliance, risk, and market trends, collaborating to provide data-driven strategic recommendations and trade-off analysis for businesses.',
    domain: 'AI'
  },
  {
    title: ' AI-Agent for Automated Research Paper Writing',
    description: 'An agent that generates research papers in standard formats (IEEE, Springer, etc.), ensuring correct citations, formatting, and plagiarism-free structured content based on input data.',
    domain: 'AI'
  },

  // Cyber Security Problems - title, description, and challenge
  {
    title: 'Integrity Watchdog',
    description: 'Attackers often tamper with critical system or configuration files to maintain control or cause disruption. Detecting unauthorized file changes quickly is essential for maintaining trust and system stability..',
    challenge: 'Design a monitoring tool that tracks files in a target directory and reports whenever they are modified, deleted, or newly created without authorization.',
    domain: 'Cyber Security'
  },
  {
    title: 'SecureScore Auditor',
    description: 'Systems with weak or misconfigured settings are prime targets for cyberattacks. A simple auditing tool can help identify vulnerabilities and give users guidance on improving their machine’s security posture.',
    challenge: 'Create a script that scans the system for common weaknesses, evaluates its security readiness, and produces an easy-to-read summary report.',
    domain: 'Cyber Security'
  },
  {
    title: 'Data Carver',
    description: 'When files are deleted, the raw data often remains hidden on the disk until overwritten by new data. With the right method, these fragments can be found and reassembled into usable files.',
    challenge: 'Build a file recovery utility that scans a disk image, locates file signatures, and reconstructs lost files for the user.',
    domain: 'Cyber Security'
  },
  {
    title: 'Threat Sentinel',
    description: 'Many cyberattacks succeed because harmful software manages to run undetected on systems. A strong defense requires a tool that can spot such malicious programs in advance by analyzing both their known identifiers and suspicious behaviors..',
    challenge: 'Develop a monitoring solution that continuously observes the computer, detects potentially harmful files or unusual program actions, and prevents them from executing',
    domain: 'Cyber Security'
  },
  {
    title: 'USB Guardian',
    description: 'Unapproved USB devices are a frequent source of malware infections and data theft. Monitoring external storage activity is crucial to ensure system security and accountability.',
    challenge: 'Build a lightweight service that runs in the background to detect, identify, and record when USB storage devices are plugged into or removed from a system.',
    domain: 'Cyber Security'
  },
];

// Configuration to control display mode
export const problemStatementsConfig = {
  showActualData: true, // Change to true to show actual problem statements
  comingSoonMessage: "Problem statements will be updated soon. Stay tuned for exciting challenges!"
};
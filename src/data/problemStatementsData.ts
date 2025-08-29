
// Problem statement interface
export interface Problem {
  title: string;
  description: string;
  challenge: string;
  objective: string;
  domain: string;
}

export const problems: Problem[] = [
  {
    title: 'AI-Based Attendance & Participation Tracker for Classrooms',
    description: ' A smart classroom assistant that uses facial recognition + voice analysis to automatically mark attendance and measure student engagement. It generates real-time dashboards and participation reports for faculty.',
    challenge: 'Manual attendance wastes time, and existing biometric tools only mark presence, not participation. Teachers struggle to measure true student engagement.',
    objective: 'Develop a Generative AI-powered assistant that not only tracks attendance but also summarizes engagement insights, recommends learning improvements, and generates automated class reports.',
    domain: 'AI'
  },
  {
    title: 'Malware Analysis',
    description: 'Many cyberattacks rely on malicious software (malware). An effective security posture requires a tool that can proactively identify these threats on a computer before they can execute and cause harm.',
    challenge: 'Build a tool that actively monitors a computer to detect and flag potential malware based on known signatures and suspicious behaviors.',
    objective: `Signature Scanning: Scan files and compare their cryptographic hashes (e.g., SHA-256) against a database of known malware signatures.
    Behavior Monitoring: Watch the system for suspicious activities, such as a program attempting to encrypt user files (ransomware behavior) or modify critical operating system files.
    Real-Time Alerts: Instantly generate a clear notification for the user when a potential threat is detected.
    Quarantine: Safely move any detected malicious files to a secure, isolated folder to prevent them from running.
    Bonus: Integrate with an online threat intelligence API (like VirusTotal) to get up-to-the-minute threat data on suspicious files..`,
    domain: 'Cyber Security'
  },
  {
    title: 'Generative AI for Demystifying Legal Documents',
    description: ' A Generative AI co-pilot that simplifies legal documents into plain, user-friendly guidance while retaining accuracy. It should also translate content into major Indian regional languages for accessibility.',
    challenge: ' Legal documents are dense, filled with jargon, and not accessible to the common person. Current translation tools lose legal meaning.',
    objective: ' Build a product that uses LLMs + multilingual NLP to summarize, simplify, and translate contracts, agreements, and policies, empowering students, startups, and citizens to make informed legal decisions.',
    domain: 'AI'
  },
  {
    title: 'Personalized Career and Skills Advisor (AI Mentor)',
    description: 'An Agentic AI-powered career mentor that analyzes student resumes, coursework, and skills to recommend career paths, skill upgrades, certifications, and job opportunities. It works like a 24/7 personal advisor.',
    challenge: 'Students are often unaware of the exact skills needed for future industries. Existing platforms are generic and don’t give personalized, adaptive guidance.',
    objective: ' Design an AI system that acts as a virtual mentor, generating personalized learning paths, projects, and role recommendations, bridging the gap between academia and industry demand.',
    domain: 'AI'
  },
  {
    title: ' AI Image-to-Story Converter for Regional Languages of India',
    description: 'A multilingual Generative AI product that converts any uploaded image into a creative story written in Indian regional languages (Tamil, Telugu, Kannada, Malayalam, Hindi, etc.).',
    challenge: 'Most AI storytelling tools are limited to English, creating a gap in promoting creativity, education, and cultural inclusivity in native languages.',
    objective: ' Develop a system that uses vision-language models + multilingual LLMs to generate context-rich stories in different Indian languages, useful for education, creative writing, and children’s learning apps.',
    domain: 'AI'
  },
  {
    title: 'Plug and Play Audit Tool',
    description: 'Unauthorized USB drives are a common vector for data theft and introducing malware into an organization. A simple monitoring tool can help track all connected devices',
    challenge: 'Create a lightweight background service that detects, identifies, and logs all USB storage devices connected to or disconnected from a computer.',
    objective: `Event Detection: Instantly identify when any USB storage device (like a flash drive or external hard drive) is plugged in or unplugged.
Detailed Logging: Record essential details for each event, including the timestamp, device name (e.g., "SanDisk Ultra"), and unique hardware identifiers.
Alerting: Trigger a desktop notification whenever a new, previously unseen USB device is connected for the first time.
Bonus: Build a simple dashboard to view the connection history and manage a "whitelist" of pre-approved, safe devices.`,
    domain: 'Cyber Security'
  },
  {
    title: ' File Integrity Checker',
    description: 'Attackers often modify critical system or configuration files to gain control or disrupt services. A file integrity monitor acts as a digital watchdog, immediately flagging any unauthorized changes.',
    challenge: 'Develop a tool that detects any unauthorized modifications, additions, or deletions within a specified directory of important files.',
    objective: `Create Baseline: In an initial setup mode, scan the target directory to calculate and securely store a unique cryptographic hash for every file. This is the "known good" state.

Run Integrity Check: In its main operational mode, re-calculate the hashes of all current files and compare them against the stored baseline.

Generate Report: Produce a clear summary listing any files that have been MODIFIED, NEWLY CREATED, or DELETED since the baseline was established.

Bonus: Add a scheduler to run the integrity check automatically at regular intervals (e.g., every hour).`,
    domain: 'Cyber Security'
  },
  {
    title: 'End-Point Security Management Tool',
    description: ' A computer with weak security settings is an easy target for attackers. A simple audit tool can help users quickly find and fix common vulnerabilities on their machines.',
    challenge: ' Build a script that scans the local computer for a checklist of common security issues and provides a simple report card on its findings.',
    objective: `Security Scan: The script must check for several security vulnerabilities, such as:

Is the system firewall disabled?

Is an active antivirus program running?

Are there user accounts with non-expiring passwords?

Is remote desktop access enabled?

Generate Report Card: Display the results in an easy-to-read "Pass/Fail" format for each check performed.

Provide Fixes: For each "Fail" result, provide a simple, one-sentence recommendation on how to fix the issue.

Bonus: Calculate and display an overall security score (e.g., 85/100) based on how many checks the system passed.`,
    domain: 'Cyber Security'
  },
  {
    title: ' AI Agentic Coding & DevOps Team Simulator ',
    description: ' A multi-agent AI ecosystem that simulates a real IT development team. One AI acts as a coder (writing and debugging code), another as a code reviewer, another as a DevOps engineer (deploying applications), and another as a project manager (tracking tasks, giving reports).',
    challenge: 'Software development is a multi-step team process (coding, reviewing, testing, deployment). Students usually build small coding projects but don’t learn how IT teams collaborate in real-world product delivery.',
    objective: ` Create a full product-oriented AI system where:
     ●  One AI writes code for assigned tasks

     ●   Another AI evaluates and reviews the code like a QA engineer

     ●   Another AI deploys the application to a cloud server (DevOps role)

     ●   Another AI generates progress reports for stakeholders

This will train students to think of AI not just as a tool, but as a complete workforce simulation, preparing them for AI-augmented software engineering.`,
    domain: 'AI'
  },
  {
    title: 'File Recovery Tool',
    description: ` When a file is "deleted," its data often remains on the storage device until it's overwritten. A file carving tool can scan the raw disk data to find and piece together these "lost" files.`,
    challenge: 'Build a tool that can scan a raw disk image, identify the unique signatures of a specific file type, and recover it.',
    objective: `Signature Scanning: Read a disk image file (e.g., usb_drive.img) byte-by-byte, searching for the specific header and footer data (magic numbers) that mark the start and end of a file. For example, a JPG file starts with $0xFF \ 0xD8 \ 0xFF$ and ends with $0xFF \ 0xD9$.

File Extraction: Once a complete file signature (from header to footer) is found, extract that block of data.

Save Recovered File: Save the extracted data as a new, usable file (e.g., recovered_photo_1.jpg).

Bonus: Extend the tool to recognize and recover multiple file types at once (e.g., JPG, PDF, and PNG)`,
    domain: 'Cyber Security'
  }
];

// Configuration to control display mode
export const problemStatementsConfig = {
  showActualData: false, // Change to true to show actual problem statements
  comingSoonMessage: "Problem statements will be updated soon. Stay tuned for exciting challenges!"
};
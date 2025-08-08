import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Material imports
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// Interfaces
interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  jobTitle: string;
}

interface WorkExperience {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  field: string;
  institution: string;
  startYear: number;
  endYear?: number;
  gpa?: number;
  subjects: string[];
}

interface Project {
  name: string;
  description: string;
  goal: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface Language {
  language: string;
  level: string;
}

interface Skills {
  technical: string[];
  soft: string[];
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  expiryDate?: string;
  credentialUrl?: string;
}

interface WorkPreferences {
  remote: boolean;
  hybrid: boolean;
  onSite: boolean;
  fullTime: boolean;
  partTime: boolean;
  freelance: boolean;
  contract: boolean;
  salaryMin: number;
  salaryMax: number;
  willingToRelocate: boolean;
  travelWillingness: number;
  workLocation: string[];
  workTime: string[];
}

interface VolunteerWork {
  role: string;
  organization: string;
  startDate: string;
  endDate?: string;
  description: string;
}

interface Reference {
  name: string;
  position: string;
  company: string;
  email: string;
  phone: string;
  relationship: string;
}

interface SocialLinks {
  github?: string;
  linkedin?: string;
  portfolio?: string;
  website?: string;
}

interface ProfileData {
  avatar?: string;
  summary: string;
  personalInfo: PersonalInfo;
  workExperience: WorkExperience[];
  education: Education[];
  projects: Project[];
  languages: Language[];
  skills: Skills;
  certifications: Certification[];
  workPreferences: WorkPreferences;
  hobbies: string[];
  volunteerWork: VolunteerWork[];
  references: Reference[];
  socialLinks: SocialLinks;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  editMode = false;

  profileData: ProfileData = {
    summary: '',
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      birthDate: '',
      address: '',
      city: '',
      postalCode: '',
      country: '',
      jobTitle: ''
    },
    workExperience: [],
    education: [],
    projects: [],
    languages: [],
    skills: {
      technical: [],
      soft: []
    },
    certifications: [],
    workPreferences: {
      remote: false,
      hybrid: false,
      onSite: false,
      fullTime: false,
      partTime: false,
      freelance: false,
      contract: false,
      salaryMin: 0,
      salaryMax: 0,
      willingToRelocate: false,
      travelWillingness: 0,
      workLocation: [],
      workTime: []
    },
    hobbies: [],
    volunteerWork: [],
    references: [],
    socialLinks: {}
  };

  ngOnInit(): void {
    this.loadProfileData();
  }

  // Profil adatok betöltése
  loadProfileData(): void {
    // Itt történne az adatok betöltése API-ból vagy localStorage-ból
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
      this.profileData = JSON.parse(savedData);
    } else {
      // Példa adatok a teszteléshez
      this.loadSampleData();
    }
    this.updateWorkPreferencesArrays();
  }

  // Példa adatok betöltése
  loadSampleData(): void {
    this.profileData = {
      summary: 'Tapasztalt szoftverfejlesztő, aki szenvedélyesen dolgozik modern webes technológiákkal. Több mint 5 év tapasztalattal rendelkezem full-stack fejlesztésben.',
      personalInfo: {
        firstName: 'Kiss',
        lastName: 'János',
        email: 'kiss.janos@email.com',
        phone: '+36 30 123 4567',
        birthDate: '1990-05-15',
        address: 'Kossuth utca 12.',
        city: 'Budapest',
        postalCode: '1053',
        country: 'Magyarország',
        jobTitle: 'Senior Full-Stack Developer'
      },
      workExperience: [
        {
          position: 'Senior Full-Stack Developer',
          company: 'TechCorp Kft.',
          location: 'Budapest',
          startDate: '2021-03-01',
          endDate: '',
          current: true,
          description: 'Modern webes alkalmazások fejlesztése React és Node.js technológiákkal.',
          achievements: [
            'Csapatvezetői szerepkör 5 fős fejlesztői csapatban',
            '30%-kal csökkentettem az alkalmazás betöltési idejét',
            'Bevezettük a CI/CD pipeline-t'
          ],
          technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker']
        }
      ],
      education: [
        {
          degree: 'Mérnök informatikus',
          field: 'Szoftverfejlesztés',
          institution: 'Budapesti Műszaki és Gazdaságtudományi Egyetem',
          startYear: 2008,
          endYear: 2013,
          gpa: 4.2,
          subjects: ['Algoritmusok', 'Adatbázisok', 'Szoftvertechnológia', 'Webfejlesztés']
        }
      ],
      projects: [
        {
          name: 'E-commerce Platform',
          description: 'Teljes körű e-commerce megoldás React és Node.js alapokon.',
          goal: 'Modern, reszponzív online áruház fejlesztése mikroszolgáltatás architektúrával.',
          technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Docker'],
          githubUrl: 'https://github.com/username/ecommerce',
          liveUrl: 'https://demo-ecommerce.com'
        }
      ],
      languages: [
        { language: 'Magyar', level: 'Anyanyelvi szint' },
        { language: 'Angol', level: 'Felsőfok' },
        { language: 'Német', level: 'Társalgási szint' }
      ],
      skills: {
        technical: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
        soft: ['Csapatmunka', 'Problémamegoldás', 'Kommunikáció', 'Időgazdálkodás']
      },
      certifications: [
        {
          name: 'AWS Certified Developer',
          issuer: 'Amazon Web Services',
          date: '2023-06-15',
          expiryDate: '2026-06-15',
          credentialUrl: 'https://aws.amazon.com/verification'
        }
      ],
      workPreferences: {
        remote: true,
        hybrid: true,
        onSite: false,
        fullTime: true,
        partTime: false,
        freelance: true,
        contract: false,
        salaryMin: 800000,
        salaryMax: 1200000,
        willingToRelocate: false,
        travelWillingness: 20,
        workLocation: ['Távmunka', 'Hibrid'],
        workTime: ['Teljes munkaidő', 'Freelancer']
      },
      hobbies: ['Fotózás', 'Hegymászás', 'Olvasás', 'Programozás'],
      volunteerWork: [
        {
          role: 'Mentorálás',
          organization: 'Code for Budapest',
          startDate: '2020-01-01',
          endDate: '',
          description: 'Junior fejlesztők mentorálása és képzése.'
        }
      ],
      references: [
        {
          name: 'Nagy Péter',
          position: 'Tech Lead',
          company: 'TechCorp Kft.',
          email: 'nagy.peter@techcorp.hu',
          phone: '+36 30 987 6543',
          relationship: 'Közvetlen főnök'
        }
      ],
      socialLinks: {
        github: 'https://github.com/kissjanos',
        linkedin: 'https://linkedin.com/in/kissjanos',
        portfolio: 'https://kissjanos.dev',
        website: 'https://blog.kissjanos.dev'
      }
    };
  }

  // Profil adatok mentése
  saveProfileData(): void {
    this.updateWorkPreferencesArrays();
    localStorage.setItem('profileData', JSON.stringify(this.profileData));
    console.log('Profil adatok mentve!');
  }

  // Munkapreferenciák tömbök frissítése
  updateWorkPreferencesArrays(): void {
    // Munkahely típusok
    this.profileData.workPreferences.workLocation = [];
    if (this.profileData.workPreferences.remote) this.profileData.workPreferences.workLocation.push('Távmunka');
    if (this.profileData.workPreferences.hybrid) this.profileData.workPreferences.workLocation.push('Hibrid');
    if (this.profileData.workPreferences.onSite) this.profileData.workPreferences.workLocation.push('Irodában');

    // Munkaidő típusok
    this.profileData.workPreferences.workTime = [];
    if (this.profileData.workPreferences.fullTime) this.profileData.workPreferences.workTime.push('Teljes munkaidő');
    if (this.profileData.workPreferences.partTime) this.profileData.workPreferences.workTime.push('Részmunkaidő');
    if (this.profileData.workPreferences.freelance) this.profileData.workPreferences.workTime.push('Freelancer');
    if (this.profileData.workPreferences.contract) this.profileData.workPreferences.workTime.push('Szerződéses');
  }

  // Profilkép feltöltése
  uploadAvatar(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.profileData.avatar = e.target.result;
          this.saveProfileData();
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  }

  // Profil exportálása
  exportProfile(): void {
    const dataStr = JSON.stringify(this.profileData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'profile.json';
    link.click();
    URL.revokeObjectURL(url);
  }

  // Nyelvismeret szint százalékos értéke
  getLanguageProficiency(level: string): number {
    const levels: { [key: string]: number } = {
      'Alapfok': 20,
      'Társalgási szint': 40,
      'Felsőfok': 60,
      'Üzleti szint': 80,
      'Anyanyelvi szint': 100
    };
    return levels[level] || 0;
  }

  // Munkatapasztalat kezelése
  addWorkExperience(): void {
    this.profileData.workExperience.push({
      position: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      achievements: [],
      technologies: []
    });
  }

  removeWorkExperience(index: number): void {
    this.profileData.workExperience.splice(index, 1);
  }

  addAchievement(workIndex: number): void {
    this.profileData.workExperience[workIndex].achievements.push('');
  }

  removeAchievement(workIndex: number, achievementIndex: number): void {
    this.profileData.workExperience[workIndex].achievements.splice(achievementIndex, 1);
  }

  addTechnology(workIndex: number, technology: string): void {
    if (technology.trim()) {
      this.profileData.workExperience[workIndex].technologies.push(technology.trim());
    }
  }

  removeTechnology(workIndex: number, technology: string): void {
    const technologies = this.profileData.workExperience[workIndex].technologies;
    const index = technologies.indexOf(technology);
    if (index > -1) {
      technologies.splice(index, 1);
    }
  }

  // Tanulmányok kezelése
  addEducation(): void {
    this.profileData.education.push({
      degree: '',
      field: '',
      institution: '',
      startYear: new Date().getFullYear(),
      endYear: undefined,
      gpa: undefined,
      subjects: []
    });
  }

  removeEducation(index: number): void {
    this.profileData.education.splice(index, 1);
  }

  addSubject(eduIndex: number, subject: string): void {
    if (subject.trim()) {
      this.profileData.education[eduIndex].subjects.push(subject.trim());
    }
  }

  removeSubject(eduIndex: number, subject: string): void {
    const subjects = this.profileData.education[eduIndex].subjects;
    const index = subjects.indexOf(subject);
    if (index > -1) {
      subjects.splice(index, 1);
    }
  }

  // Projektek kezelése
  addProject(): void {
    this.profileData.projects.push({
      name: '',
      description: '',
      goal: '',
      technologies: [],
      githubUrl: '',
      liveUrl: ''
    });
  }

  removeProject(index: number): void {
    this.profileData.projects.splice(index, 1);
  }

  addProjectTechnology(projectIndex: number, technology: string): void {
    if (technology.trim()) {
      this.profileData.projects[projectIndex].technologies.push(technology.trim());
    }
  }

  removeProjectTechnology(projectIndex: number, technology: string): void {
    const technologies = this.profileData.projects[projectIndex].technologies;
    const index = technologies.indexOf(technology);
    if (index > -1) {
      technologies.splice(index, 1);
    }
  }

  // Nyelvismeret kezelése
  addLanguage(): void {
    this.profileData.languages.push({
      language: '',
      level: 'Alapfok'
    });
  }

  removeLanguage(index: number): void {
    this.profileData.languages.splice(index, 1);
  }

  // Skillek kezelése
  addTechnicalSkill(skill: string): void {
    if (skill.trim()) {
      this.profileData.skills.technical.push(skill.trim());
    }
  }

  removeTechnicalSkill(skill: string): void {
    const index = this.profileData.skills.technical.indexOf(skill);
    if (index > -1) {
      this.profileData.skills.technical.splice(index, 1);
    }
  }

  addSoftSkill(skill: string): void {
    if (skill.trim()) {
      this.profileData.skills.soft.push(skill.trim());
    }
  }

  removeSoftSkill(skill: string): void {
    const index = this.profileData.skills.soft.indexOf(skill);
    if (index > -1) {
      this.profileData.skills.soft.splice(index, 1);
    }
  }

  // Tanúsítványok kezelése
  addCertification(): void {
    this.profileData.certifications.push({
      name: '',
      issuer: '',
      date: '',
      expiryDate: '',
      credentialUrl: ''
    });
  }

  removeCertification(index: number): void {
    this.profileData.certifications.splice(index, 1);
  }

  // Hobbik kezelése
  addHobby(hobby: string): void {
    if (hobby.trim()) {
      this.profileData.hobbies.push(hobby.trim());
    }
  }

  removeHobby(hobby: string): void {
    const index = this.profileData.hobbies.indexOf(hobby);
    if (index > -1) {
      this.profileData.hobbies.splice(index, 1);
    }
  }

  // Önkéntes munka kezelése
  addVolunteerWork(): void {
    this.profileData.volunteerWork.push({
      role: '',
      organization: '',
      startDate: '',
      endDate: '',
      description: ''
    });
  }

  removeVolunteerWork(index: number): void {
    this.profileData.volunteerWork.splice(index, 1);
  }

  // Referenciák kezelése
  addReference(): void {
    this.profileData.references.push({
      name: '',
      position: '',
      company: '',
      email: '',
      phone: '',
      relationship: ''
    });
  }

  removeReference(index: number): void {
    this.profileData.references.splice(index, 1);
  }

  // Szerkesztés mód váltása
  toggleEditMode(): void {
    if (this.editMode) {
      this.saveProfileData();
    }
    this.editMode = !this.editMode;
  }
}

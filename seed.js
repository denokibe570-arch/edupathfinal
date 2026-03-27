// EduPath AI — Prisma Seed Script
// Run: node prisma/seed.js

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const prisma = new PrismaClient();

const COURSES = [
  {
    "code": "1111131",
    "name": "Bachelor of Medicine & Surgery (MBChB)",
    "uni": "Kenyatta University",
    "cluster": "cl13",
    "cutoff2024": 45.4,
    "cutoff2023": 44.9,
    "field": "Medicine & Health",
    "careers": [
      "Medical Doctor",
      "Surgeon",
      "Specialist"
    ],
    "demand": "high",
    "alts": [
      "Pharmacy",
      "Nursing",
      "Biomedical Engineering"
    ],
    "salary": "KSh 150K\u2013400K",
    "salaryScore": 90
  },
  {
    "code": "1263131",
    "name": "Bachelor of Medicine & Surgery (MBChB)",
    "uni": "University of Nairobi",
    "cluster": "cl13",
    "cutoff2024": 44.8,
    "cutoff2023": 44.2,
    "field": "Medicine & Health",
    "careers": [
      "Medical Doctor",
      "Consultant",
      "Researcher"
    ],
    "demand": "high",
    "alts": [
      "Pharmacy",
      "Dental Surgery"
    ],
    "salary": "KSh 150K\u2013400K",
    "salaryScore": 90
  },
  {
    "code": "1181131",
    "name": "Bachelor of Medicine & Surgery (MBChB)",
    "uni": "Moi University",
    "cluster": "cl13",
    "cutoff2024": 43.6,
    "cutoff2023": 43.1,
    "field": "Medicine & Health",
    "careers": [
      "Medical Doctor",
      "Surgeon"
    ],
    "demand": "high",
    "alts": [
      "Nursing",
      "Clinical Medicine"
    ],
    "salary": "KSh 150K\u2013400K",
    "salaryScore": 90
  },
  {
    "code": "1111129",
    "name": "Bachelor of Pharmacy",
    "uni": "Kenyatta University",
    "cluster": "cl13",
    "cutoff2024": 44.0,
    "cutoff2023": 43.5,
    "field": "Medicine & Health",
    "careers": [
      "Pharmacist",
      "Drug Researcher",
      "Clinical Pharmacist"
    ],
    "demand": "high",
    "alts": [
      "Pharmaceutical Technology",
      "Biochemistry"
    ],
    "salary": "KSh 80K\u2013200K",
    "salaryScore": 72
  },
  {
    "code": "1263129",
    "name": "Bachelor of Pharmacy",
    "uni": "University of Nairobi",
    "cluster": "cl13",
    "cutoff2024": 43.5,
    "cutoff2023": 43.0,
    "field": "Medicine & Health",
    "careers": [
      "Pharmacist",
      "Pharmaceutical Researcher"
    ],
    "demand": "high",
    "alts": [
      "Biochemistry",
      "Nursing"
    ],
    "salary": "KSh 80K\u2013200K",
    "salaryScore": 72
  },
  {
    "code": "1301129",
    "name": "Bachelor of Pharmacy",
    "uni": "JKUAT",
    "cluster": "cl13",
    "cutoff2024": 42.8,
    "cutoff2023": 42.3,
    "field": "Medicine & Health",
    "careers": [
      "Pharmacist",
      "Drug Researcher"
    ],
    "demand": "high",
    "alts": [
      "Biochemistry",
      "Nursing"
    ],
    "salary": "KSh 80K\u2013200K",
    "salaryScore": 72
  },
  {
    "code": "1111132",
    "name": "B.Sc. Nursing & Public Health",
    "uni": "Kenyatta University",
    "cluster": "cl13",
    "cutoff2024": 43.1,
    "cutoff2023": 42.8,
    "field": "Medicine & Health",
    "careers": [
      "Registered Nurse",
      "Midwife",
      "Public Health Officer"
    ],
    "demand": "high",
    "alts": [
      "Clinical Medicine",
      "Community Health"
    ],
    "salary": "KSh 50K\u2013130K",
    "salaryScore": 60
  },
  {
    "code": "1263132",
    "name": "B.Sc. Nursing",
    "uni": "University of Nairobi",
    "cluster": "cl13",
    "cutoff2024": 42.5,
    "cutoff2023": 42.0,
    "field": "Medicine & Health",
    "careers": [
      "Registered Nurse",
      "ICU Nurse",
      "Nurse Anaesthetist"
    ],
    "demand": "high",
    "alts": [
      "Midwifery",
      "Community Health"
    ],
    "salary": "KSh 50K\u2013130K",
    "salaryScore": 60
  },
  {
    "code": "1111194",
    "name": "B.Sc. Medical Laboratory Science",
    "uni": "Kenyatta University",
    "cluster": "cl13",
    "cutoff2024": 41.2,
    "cutoff2023": 41.0,
    "field": "Medicine & Health",
    "careers": [
      "Medical Lab Scientist",
      "Pathologist",
      "Research Scientist"
    ],
    "demand": "high",
    "alts": [
      "Biochemistry",
      "Pharmacy"
    ],
    "salary": "KSh 60K\u2013150K",
    "salaryScore": 62
  },
  {
    "code": "1111696",
    "name": "B.Sc. Biomedical Engineering",
    "uni": "Kenyatta University",
    "cluster": "cl13",
    "cutoff2024": 42.4,
    "cutoff2023": 41.8,
    "field": "Medicine & Health",
    "careers": [
      "Biomedical Engineer",
      "Medical Equipment Specialist"
    ],
    "demand": "high",
    "alts": [
      "Electrical Engineering",
      "Biomedical Science"
    ],
    "salary": "KSh 80K\u2013180K",
    "salaryScore": 70
  },
  {
    "code": "1111112",
    "name": "B.Sc. Biochemistry",
    "uni": "Kenyatta University",
    "cluster": "cl9",
    "cutoff2024": 33.0,
    "cutoff2023": 31.6,
    "field": "Medicine & Health",
    "careers": [
      "Biochemist",
      "Lab Researcher",
      "Pharmaceutical Scientist"
    ],
    "demand": "med",
    "alts": [
      "Microbiology",
      "Medical Lab Science"
    ],
    "salary": "KSh 55K\u2013120K",
    "salaryScore": 55
  },
  {
    "code": "1263112",
    "name": "B.Sc. Biochemistry",
    "uni": "University of Nairobi",
    "cluster": "cl9",
    "cutoff2024": 32.5,
    "cutoff2023": 31.0,
    "field": "Medicine & Health",
    "careers": [
      "Biochemist",
      "Clinical Researcher"
    ],
    "demand": "med",
    "alts": [
      "Biotechnology",
      "Microbiology"
    ],
    "salary": "KSh 55K\u2013120K",
    "salaryScore": 55
  },
  {
    "code": "1111123",
    "name": "B.Sc. Microbiology",
    "uni": "Kenyatta University",
    "cluster": "cl9",
    "cutoff2024": 25.5,
    "cutoff2023": 25.9,
    "field": "Medicine & Health",
    "careers": [
      "Microbiologist",
      "Lab Technician"
    ],
    "demand": "med",
    "alts": [
      "Biochemistry",
      "Biotechnology"
    ],
    "salary": "KSh 50K\u2013110K",
    "salaryScore": 52
  },
  {
    "code": "1111190",
    "name": "B.Sc. Food, Nutrition & Dietetics",
    "uni": "Kenyatta University",
    "cluster": "cl13",
    "cutoff2024": 30.2,
    "cutoff2023": 33.0,
    "field": "Medicine & Health",
    "careers": [
      "Nutritionist",
      "Dietitian",
      "Food Safety Officer"
    ],
    "demand": "med",
    "alts": [
      "Food Science",
      "Public Health"
    ],
    "salary": "KSh 50K\u2013100K",
    "salaryScore": 50
  },
  {
    "code": "1111188",
    "name": "B.Sc. Environmental Health",
    "uni": "Kenyatta University",
    "cluster": "cl13",
    "cutoff2024": 28.8,
    "cutoff2023": 29.0,
    "field": "Medicine & Health",
    "careers": [
      "Environmental Health Officer",
      "Public Health Inspector"
    ],
    "demand": "med",
    "alts": [
      "Public Health",
      "Community Health"
    ],
    "salary": "KSh 45K\u201390K",
    "salaryScore": 48
  },
  {
    "code": "1111423",
    "name": "B.Sc. Community Health",
    "uni": "Kenyatta University",
    "cluster": "cl13",
    "cutoff2024": 29.5,
    "cutoff2023": 29.5,
    "field": "Medicine & Health",
    "careers": [
      "Community Health Officer",
      "Health Educator"
    ],
    "demand": "high",
    "alts": [
      "Nursing",
      "Public Health"
    ],
    "salary": "KSh 40K\u201380K",
    "salaryScore": 45
  },
  {
    "code": "1263142",
    "name": "Bachelor of Dental Surgery",
    "uni": "University of Nairobi",
    "cluster": "cl13",
    "cutoff2024": 44.2,
    "cutoff2023": 43.8,
    "field": "Medicine & Health",
    "careers": [
      "Dentist",
      "Oral Surgeon",
      "Orthodontist"
    ],
    "demand": "high",
    "alts": [
      "Medicine",
      "Pharmacy"
    ],
    "salary": "KSh 100K\u2013300K",
    "salaryScore": 80
  },
  {
    "code": "1301142",
    "name": "Bachelor of Dental Surgery",
    "uni": "Moi University",
    "cluster": "cl13",
    "cutoff2024": 43.5,
    "cutoff2023": 43.0,
    "field": "Medicine & Health",
    "careers": [
      "Dentist",
      "Dental Surgeon"
    ],
    "demand": "high",
    "alts": [
      "Medicine",
      "Pharmacy"
    ],
    "salary": "KSh 100K\u2013300K",
    "salaryScore": 80
  },
  {
    "code": "1111195",
    "name": "B.Sc. Physiotherapy",
    "uni": "Kenyatta University",
    "cluster": "cl13",
    "cutoff2024": 38.5,
    "cutoff2023": 39.0,
    "field": "Medicine & Health",
    "careers": [
      "Physiotherapist",
      "Sports Physiotherapist",
      "Rehabilitation Specialist"
    ],
    "demand": "high",
    "alts": [
      "Occupational Therapy",
      "Nursing"
    ],
    "salary": "KSh 60K\u2013140K",
    "salaryScore": 63
  },
  {
    "code": "1111196",
    "name": "B.Sc. Occupational Therapy",
    "uni": "Kenyatta University",
    "cluster": "cl13",
    "cutoff2024": 36.0,
    "cutoff2023": 36.5,
    "field": "Medicine & Health",
    "careers": [
      "Occupational Therapist",
      "Rehabilitation Specialist"
    ],
    "demand": "med",
    "alts": [
      "Physiotherapy",
      "Nursing"
    ],
    "salary": "KSh 55K\u2013120K",
    "salaryScore": 58
  },
  {
    "code": "1111200",
    "name": "B.Sc. Optometry & Vision Sciences",
    "uni": "JKUAT",
    "cluster": "cl13",
    "cutoff2024": 38.0,
    "cutoff2023": 37.5,
    "field": "Medicine & Health",
    "careers": [
      "Optometrist",
      "Vision Scientist",
      "Eye Care Specialist"
    ],
    "demand": "high",
    "alts": [
      "Medicine",
      "Biomedical Science"
    ],
    "salary": "KSh 70K\u2013150K",
    "salaryScore": 65
  },
  {
    "code": "1111201",
    "name": "B.Sc. Veterinary Medicine",
    "uni": "University of Nairobi",
    "cluster": "cl15",
    "cutoff2024": 41.0,
    "cutoff2023": 40.5,
    "field": "Medicine & Health",
    "careers": [
      "Veterinarian",
      "Animal Health Officer",
      "Wildlife Vet"
    ],
    "demand": "med",
    "alts": [
      "Animal Science",
      "Zoology"
    ],
    "salary": "KSh 70K\u2013160K",
    "salaryScore": 65
  },
  {
    "code": "1111202",
    "name": "B.Sc. Public Health",
    "uni": "Kenyatta University",
    "cluster": "cl13",
    "cutoff2024": 31.5,
    "cutoff2023": 32.0,
    "field": "Medicine & Health",
    "careers": [
      "Public Health Officer",
      "Epidemiologist",
      "Health Manager"
    ],
    "demand": "high",
    "alts": [
      "Community Health",
      "Environmental Health"
    ],
    "salary": "KSh 50K\u2013110K",
    "salaryScore": 54
  },
  {
    "code": "1111647",
    "name": "B.Sc. Health Services Management",
    "uni": "Kenyatta University",
    "cluster": "cl13",
    "cutoff2024": 27.6,
    "cutoff2023": 27.7,
    "field": "Medicine & Health",
    "careers": [
      "Hospital Administrator",
      "Health Services Manager"
    ],
    "demand": "high",
    "alts": [
      "Public Health",
      "Business Administration"
    ],
    "salary": "KSh 60K\u2013130K",
    "salaryScore": 60
  },
  {
    "code": "1111116",
    "name": "B.Sc. Civil Engineering",
    "uni": "Kenyatta University",
    "cluster": "cl5",
    "cutoff2024": 42.6,
    "cutoff2023": 42.1,
    "field": "Engineering & Tech",
    "careers": [
      "Civil Engineer",
      "Structural Engineer",
      "Project Manager"
    ],
    "demand": "high",
    "alts": [
      "Construction Management",
      "Architecture"
    ],
    "salary": "KSh 80K\u2013220K",
    "salaryScore": 75
  },
  {
    "code": "1263116",
    "name": "B.Sc. Civil Engineering",
    "uni": "University of Nairobi",
    "cluster": "cl5",
    "cutoff2024": 42.9,
    "cutoff2023": 42.5,
    "field": "Engineering & Tech",
    "careers": [
      "Civil Engineer",
      "Roads Engineer",
      "Water Engineer"
    ],
    "demand": "high",
    "alts": [
      "Mechanical Engineering",
      "Environmental Engineering"
    ],
    "salary": "KSh 80K\u2013220K",
    "salaryScore": 75
  },
  {
    "code": "1301116",
    "name": "B.Sc. Civil Engineering",
    "uni": "JKUAT",
    "cluster": "cl5",
    "cutoff2024": 41.8,
    "cutoff2023": 41.3,
    "field": "Engineering & Tech",
    "careers": [
      "Civil Engineer",
      "Construction Manager"
    ],
    "demand": "high",
    "alts": [
      "Architecture",
      "Quantity Surveying"
    ],
    "salary": "KSh 80K\u2013220K",
    "salaryScore": 75
  },
  {
    "code": "1181116",
    "name": "B.Sc. Civil Engineering",
    "uni": "Moi University",
    "cluster": "cl5",
    "cutoff2024": 40.5,
    "cutoff2023": 40.0,
    "field": "Engineering & Tech",
    "careers": [
      "Civil Engineer",
      "Site Engineer"
    ],
    "demand": "high",
    "alts": [
      "Construction Management",
      "Architecture"
    ],
    "salary": "KSh 80K\u2013220K",
    "salaryScore": 75
  },
  {
    "code": "1111117",
    "name": "B.Sc. Electrical & Electronics Engineering",
    "uni": "Kenyatta University",
    "cluster": "cl5",
    "cutoff2024": 42.3,
    "cutoff2023": 42.1,
    "field": "Engineering & Tech",
    "careers": [
      "Electrical Engineer",
      "Power Engineer",
      "Electronics Engineer"
    ],
    "demand": "high",
    "alts": [
      "Mechatronics",
      "Telecommunications Engineering"
    ],
    "salary": "KSh 85K\u2013230K",
    "salaryScore": 78
  },
  {
    "code": "1263117",
    "name": "B.Sc. Electrical & Electronics Engineering",
    "uni": "University of Nairobi",
    "cluster": "cl5",
    "cutoff2024": 42.7,
    "cutoff2023": 42.3,
    "field": "Engineering & Tech",
    "careers": [
      "Electrical Engineer",
      "Power Systems Engineer"
    ],
    "demand": "high",
    "alts": [
      "Telecommunications",
      "Mechatronics"
    ],
    "salary": "KSh 85K\u2013230K",
    "salaryScore": 78
  },
  {
    "code": "1301117",
    "name": "B.Sc. Electrical & Computer Engineering",
    "uni": "JKUAT",
    "cluster": "cl5",
    "cutoff2024": 41.5,
    "cutoff2023": 41.0,
    "field": "Engineering & Tech",
    "careers": [
      "Electrical Engineer",
      "Computer Engineer",
      "Embedded Systems Engineer"
    ],
    "demand": "high",
    "alts": [
      "Computer Science",
      "Electronics"
    ],
    "salary": "KSh 85K\u2013230K",
    "salaryScore": 78
  },
  {
    "code": "1111118",
    "name": "B.Sc. Mechanical Engineering",
    "uni": "Kenyatta University",
    "cluster": "cl5",
    "cutoff2024": 41.1,
    "cutoff2023": 41.0,
    "field": "Engineering & Tech",
    "careers": [
      "Mechanical Engineer",
      "Manufacturing Engineer",
      "Design Engineer"
    ],
    "demand": "high",
    "alts": [
      "Automotive Engineering",
      "Industrial Engineering"
    ],
    "salary": "KSh 80K\u2013210K",
    "salaryScore": 74
  },
  {
    "code": "1263118",
    "name": "B.Sc. Mechanical Engineering",
    "uni": "University of Nairobi",
    "cluster": "cl5",
    "cutoff2024": 41.5,
    "cutoff2023": 41.2,
    "field": "Engineering & Tech",
    "careers": [
      "Mechanical Engineer",
      "Production Engineer"
    ],
    "demand": "high",
    "alts": [
      "Industrial Engineering",
      "Mechatronics"
    ],
    "salary": "KSh 80K\u2013210K",
    "salaryScore": 74
  },
  {
    "code": "1111119",
    "name": "B.Sc. Mechatronic Engineering",
    "uni": "JKUAT",
    "cluster": "cl5",
    "cutoff2024": 41.0,
    "cutoff2023": 40.5,
    "field": "Engineering & Tech",
    "careers": [
      "Mechatronics Engineer",
      "Robotics Engineer",
      "Automation Specialist"
    ],
    "demand": "high",
    "alts": [
      "Electrical Engineering",
      "Mechanical Engineering"
    ],
    "salary": "KSh 85K\u2013220K",
    "salaryScore": 76
  },
  {
    "code": "1111120",
    "name": "B.Sc. Chemical Engineering",
    "uni": "University of Nairobi",
    "cluster": "cl5",
    "cutoff2024": 40.8,
    "cutoff2023": 40.3,
    "field": "Engineering & Tech",
    "careers": [
      "Chemical Engineer",
      "Process Engineer",
      "Petroleum Engineer"
    ],
    "demand": "med",
    "alts": [
      "Petroleum Engineering",
      "Industrial Chemistry"
    ],
    "salary": "KSh 80K\u2013200K",
    "salaryScore": 73
  },
  {
    "code": "1111572",
    "name": "B.Sc. Petroleum Engineering",
    "uni": "Kenyatta University",
    "cluster": "cl5",
    "cutoff2024": 35.3,
    "cutoff2023": 37.5,
    "field": "Engineering & Tech",
    "careers": [
      "Petroleum Engineer",
      "Energy Consultant",
      "Drilling Engineer"
    ],
    "demand": "med",
    "alts": [
      "Chemical Engineering",
      "Environmental Engineering"
    ],
    "salary": "KSh 90K\u2013250K",
    "salaryScore": 80
  },
  {
    "code": "1111573",
    "name": "B.Sc. Aerospace Engineering",
    "uni": "Kenyatta University",
    "cluster": "cl5",
    "cutoff2024": 41.4,
    "cutoff2023": 40.5,
    "field": "Engineering & Tech",
    "careers": [
      "Aerospace Engineer",
      "Aviation Engineer",
      "Defence Engineer"
    ],
    "demand": "med",
    "alts": [
      "Mechanical Engineering",
      "Electrical Engineering"
    ],
    "salary": "KSh 100K\u2013280K",
    "salaryScore": 82
  },
  {
    "code": "1111520",
    "name": "B.Sc. Marine Engineering",
    "uni": "Kenya Maritime Authority",
    "cluster": "cl5",
    "cutoff2024": 38.0,
    "cutoff2023": 37.5,
    "field": "Engineering & Tech",
    "careers": [
      "Marine Engineer",
      "Naval Architect",
      "Shipping Officer"
    ],
    "demand": "med",
    "alts": [
      "Mechanical Engineering",
      "Civil Engineering"
    ],
    "salary": "KSh 90K\u2013200K",
    "salaryScore": 76
  },
  {
    "code": "1111521",
    "name": "B.Sc. Renewable Energy Engineering",
    "uni": "Dedan Kimathi University",
    "cluster": "cl5",
    "cutoff2024": 35.5,
    "cutoff2023": 34.0,
    "field": "Engineering & Tech",
    "careers": [
      "Renewable Energy Engineer",
      "Solar Systems Engineer",
      "Energy Auditor"
    ],
    "demand": "high",
    "alts": [
      "Electrical Engineering",
      "Environmental Engineering"
    ],
    "salary": "KSh 75K\u2013180K",
    "salaryScore": 70
  },
  {
    "code": "1111522",
    "name": "B.Sc. Telecommunication Engineering",
    "uni": "JKUAT",
    "cluster": "cl5",
    "cutoff2024": 38.5,
    "cutoff2023": 38.0,
    "field": "Engineering & Tech",
    "careers": [
      "Telecom Engineer",
      "Network Engineer",
      "5G Specialist"
    ],
    "demand": "high",
    "alts": [
      "Electrical Engineering",
      "Computer Science"
    ],
    "salary": "KSh 85K\u2013220K",
    "salaryScore": 77
  },
  {
    "code": "1111523",
    "name": "B.Sc. Agricultural & Bio-Systems Engineering",
    "uni": "Egerton University",
    "cluster": "cl5",
    "cutoff2024": 34.0,
    "cutoff2023": 33.5,
    "field": "Engineering & Tech",
    "careers": [
      "Agricultural Engineer",
      "Irrigation Engineer",
      "Agri-Machinery Specialist"
    ],
    "demand": "med",
    "alts": [
      "Civil Engineering",
      "Agriculture"
    ],
    "salary": "KSh 65K\u2013150K",
    "salaryScore": 62
  },
  {
    "code": "1111568",
    "name": "B.Sc. Forensic Science",
    "uni": "Kenyatta University",
    "cluster": "cl9",
    "cutoff2024": 32.2,
    "cutoff2023": 35.0,
    "field": "Engineering & Tech",
    "careers": [
      "Forensic Scientist",
      "Crime Analyst",
      "Lab Specialist"
    ],
    "demand": "med",
    "alts": [
      "Biochemistry",
      "Chemistry"
    ],
    "salary": "KSh 60K\u2013130K",
    "salaryScore": 60
  },
  {
    "code": "1111776",
    "name": "B.Sc. Construction Management",
    "uni": "Kenyatta University",
    "cluster": "cl6",
    "cutoff2024": 34.1,
    "cutoff2023": 35.3,
    "field": "Engineering & Tech",
    "careers": [
      "Construction Manager",
      "Quantity Surveyor",
      "Site Engineer"
    ],
    "demand": "high",
    "alts": [
      "Civil Engineering",
      "Architecture"
    ],
    "salary": "KSh 70K\u2013180K",
    "salaryScore": 67
  },
  {
    "code": "1111102",
    "name": "Bachelor of Architecture",
    "uni": "Kenyatta University",
    "cluster": "cl6",
    "cutoff2024": 41.5,
    "cutoff2023": 42.4,
    "field": "Engineering & Tech",
    "careers": [
      "Architect",
      "Urban Planner",
      "Interior Designer"
    ],
    "demand": "med",
    "alts": [
      "Construction Management",
      "Civil Engineering"
    ],
    "salary": "KSh 80K\u2013200K",
    "salaryScore": 72
  },
  {
    "code": "1263102",
    "name": "Bachelor of Architecture",
    "uni": "University of Nairobi",
    "cluster": "cl6",
    "cutoff2024": 41.8,
    "cutoff2023": 42.6,
    "field": "Engineering & Tech",
    "careers": [
      "Architect",
      "Urban Designer",
      "Landscape Architect"
    ],
    "demand": "med",
    "alts": [
      "Quantity Surveying",
      "Construction Management"
    ],
    "salary": "KSh 80K\u2013200K",
    "salaryScore": 72
  },
  {
    "code": "1111103",
    "name": "B.Sc. Quantity Surveying",
    "uni": "University of Nairobi",
    "cluster": "cl6",
    "cutoff2024": 38.5,
    "cutoff2023": 38.0,
    "field": "Engineering & Tech",
    "careers": [
      "Quantity Surveyor",
      "Cost Engineer",
      "Project Cost Manager"
    ],
    "demand": "high",
    "alts": [
      "Construction Management",
      "Architecture"
    ],
    "salary": "KSh 75K\u2013180K",
    "salaryScore": 70
  },
  {
    "code": "1111104",
    "name": "B.Sc. Real Estate",
    "uni": "University of Nairobi",
    "cluster": "cl6",
    "cutoff2024": 35.0,
    "cutoff2023": 34.5,
    "field": "Engineering & Tech",
    "careers": [
      "Real Estate Agent",
      "Property Manager",
      "Valuer"
    ],
    "demand": "high",
    "alts": [
      "Land Administration",
      "Construction Management"
    ],
    "salary": "KSh 70K\u2013200K",
    "salaryScore": 68
  },
  {
    "code": "1111105",
    "name": "B.Sc. Geospatial Engineering",
    "uni": "University of Nairobi",
    "cluster": "cl4",
    "cutoff2024": 38.0,
    "cutoff2023": 37.5,
    "field": "Engineering & Tech",
    "careers": [
      "Geospatial Engineer",
      "GIS Specialist",
      "Remote Sensing Analyst"
    ],
    "demand": "high",
    "alts": [
      "Geomatic Engineering",
      "Geography"
    ],
    "salary": "KSh 70K\u2013160K",
    "salaryScore": 65
  },
  {
    "code": "1111107",
    "name": "B.Sc. Actuarial Science",
    "uni": "Kenyatta University",
    "cluster": "cl10",
    "cutoff2024": 34.5,
    "cutoff2023": 31.8,
    "field": "Engineering & Tech",
    "careers": [
      "Actuary",
      "Risk Analyst",
      "Insurance Specialist",
      "Investment Analyst"
    ],
    "demand": "high",
    "alts": [
      "Statistics",
      "Finance",
      "Mathematics"
    ],
    "salary": "KSh 100K\u2013300K",
    "salaryScore": 83
  },
  {
    "code": "1263107",
    "name": "B.Sc. Actuarial Science",
    "uni": "University of Nairobi",
    "cluster": "cl10",
    "cutoff2024": 35.5,
    "cutoff2023": 32.5,
    "field": "Engineering & Tech",
    "careers": [
      "Actuary",
      "Risk Manager",
      "Pension Actuary"
    ],
    "demand": "high",
    "alts": [
      "Statistics",
      "Finance"
    ],
    "salary": "KSh 100K\u2013300K",
    "salaryScore": 83
  },
  {
    "code": "1181107",
    "name": "B.Sc. Actuarial Science",
    "uni": "Moi University",
    "cluster": "cl10",
    "cutoff2024": 33.0,
    "cutoff2023": 30.5,
    "field": "Engineering & Tech",
    "careers": [
      "Actuary",
      "Risk Analyst"
    ],
    "demand": "high",
    "alts": [
      "Statistics",
      "Mathematics"
    ],
    "salary": "KSh 100K\u2013300K",
    "salaryScore": 83
  },
  {
    "code": "1111226",
    "name": "B.Sc. Biotechnology",
    "uni": "Kenyatta University",
    "cluster": "cl9",
    "cutoff2024": 25.6,
    "cutoff2023": 25.1,
    "field": "Engineering & Tech",
    "careers": [
      "Biotechnologist",
      "Genetic Researcher",
      "Bioinformatics Scientist"
    ],
    "demand": "med",
    "alts": [
      "Biochemistry",
      "Microbiology"
    ],
    "salary": "KSh 55K\u2013130K",
    "salaryScore": 57
  },
  {
    "code": "1111115",
    "name": "B.Sc. Computer Science",
    "uni": "Kenyatta University",
    "cluster": "cl7",
    "cutoff2024": 43.5,
    "cutoff2023": 43.2,
    "field": "Computing & IT",
    "careers": [
      "Software Developer",
      "AI/ML Engineer",
      "Data Scientist",
      "CTO"
    ],
    "demand": "high",
    "alts": [
      "Software Engineering",
      "IT"
    ],
    "salary": "KSh 80K\u2013350K",
    "salaryScore": 88
  },
  {
    "code": "1263115",
    "name": "B.Sc. Computer Science",
    "uni": "University of Nairobi",
    "cluster": "cl7",
    "cutoff2024": 43.8,
    "cutoff2023": 43.5,
    "field": "Computing & IT",
    "careers": [
      "Software Engineer",
      "Data Scientist",
      "IT Architect"
    ],
    "demand": "high",
    "alts": [
      "Software Engineering",
      "IT"
    ],
    "salary": "KSh 80K\u2013350K",
    "salaryScore": 88
  },
  {
    "code": "1301115",
    "name": "B.Sc. Computer Science",
    "uni": "JKUAT",
    "cluster": "cl7",
    "cutoff2024": 42.5,
    "cutoff2023": 42.0,
    "field": "Computing & IT",
    "careers": [
      "Software Developer",
      "Systems Analyst"
    ],
    "demand": "high",
    "alts": [
      "IT",
      "Computer Engineering"
    ],
    "salary": "KSh 80K\u2013350K",
    "salaryScore": 88
  },
  {
    "code": "1370115",
    "name": "B.Sc. Computer Science",
    "uni": "Strathmore University",
    "cluster": "cl7",
    "cutoff2024": 40.5,
    "cutoff2023": 40.0,
    "field": "Computing & IT",
    "careers": [
      "Software Engineer",
      "Startup Founder",
      "Product Manager"
    ],
    "demand": "high",
    "alts": [
      "Software Engineering",
      "Data Science"
    ],
    "salary": "KSh 90K\u2013400K",
    "salaryScore": 90
  },
  {
    "code": "1111232",
    "name": "Bachelor of Information Technology",
    "uni": "Kenyatta University",
    "cluster": "cl7",
    "cutoff2024": 38.9,
    "cutoff2023": 39.9,
    "field": "Computing & IT",
    "careers": [
      "IT Specialist",
      "Systems Analyst",
      "Network Admin"
    ],
    "demand": "high",
    "alts": [
      "Computer Science",
      "Software Engineering"
    ],
    "salary": "KSh 65K\u2013200K",
    "salaryScore": 74
  },
  {
    "code": "1263232",
    "name": "Bachelor of Information Technology",
    "uni": "University of Nairobi",
    "cluster": "cl7",
    "cutoff2024": 39.5,
    "cutoff2023": 40.0,
    "field": "Computing & IT",
    "careers": [
      "IT Manager",
      "Systems Analyst"
    ],
    "demand": "high",
    "alts": [
      "Computer Science",
      "ICT"
    ],
    "salary": "KSh 65K\u2013200K",
    "salaryScore": 74
  },
  {
    "code": "1111234",
    "name": "B.Sc. Software Engineering",
    "uni": "Dedan Kimathi University",
    "cluster": "cl7",
    "cutoff2024": 40.0,
    "cutoff2023": 39.5,
    "field": "Computing & IT",
    "careers": [
      "Software Engineer",
      "Backend Developer",
      "DevOps Engineer"
    ],
    "demand": "high",
    "alts": [
      "Computer Science",
      "IT"
    ],
    "salary": "KSh 85K\u2013300K",
    "salaryScore": 86
  },
  {
    "code": "1301234",
    "name": "B.Sc. Software Engineering",
    "uni": "JKUAT",
    "cluster": "cl7",
    "cutoff2024": 41.0,
    "cutoff2023": 40.5,
    "field": "Computing & IT",
    "careers": [
      "Software Engineer",
      "Mobile Developer",
      "Cloud Architect"
    ],
    "demand": "high",
    "alts": [
      "Computer Science",
      "IT"
    ],
    "salary": "KSh 85K\u2013300K",
    "salaryScore": 86
  },
  {
    "code": "1111309",
    "name": "B.Sc. Mathematics & Computer Science",
    "uni": "Kenyatta University",
    "cluster": "cl7",
    "cutoff2024": 35.1,
    "cutoff2023": 35.0,
    "field": "Computing & IT",
    "careers": [
      "Data Analyst",
      "Software Developer",
      "Mathematician"
    ],
    "demand": "high",
    "alts": [
      "Computer Science",
      "Statistics"
    ],
    "salary": "KSh 70K\u2013200K",
    "salaryScore": 75
  },
  {
    "code": "1111164",
    "name": "B.Sc. Statistics & Programming",
    "uni": "Kenyatta University",
    "cluster": "cl10",
    "cutoff2024": 23.9,
    "cutoff2023": 30.0,
    "field": "Computing & IT",
    "careers": [
      "Statistician",
      "Data Analyst",
      "Programmer"
    ],
    "demand": "high",
    "alts": [
      "Mathematics",
      "Computer Science"
    ],
    "salary": "KSh 70K\u2013200K",
    "salaryScore": 75
  },
  {
    "code": "1111235",
    "name": "B.Sc. Data Science & Analytics",
    "uni": "Strathmore University",
    "cluster": "cl7",
    "cutoff2024": 39.5,
    "cutoff2023": 38.5,
    "field": "Computing & IT",
    "careers": [
      "Data Scientist",
      "ML Engineer",
      "Business Intelligence Analyst"
    ],
    "demand": "high",
    "alts": [
      "Computer Science",
      "Statistics"
    ],
    "salary": "KSh 90K\u2013350K",
    "salaryScore": 89
  },
  {
    "code": "1111236",
    "name": "B.Sc. Cybersecurity & Digital Forensics",
    "uni": "JKUAT",
    "cluster": "cl7",
    "cutoff2024": 38.0,
    "cutoff2023": 37.0,
    "field": "Computing & IT",
    "careers": [
      "Cybersecurity Analyst",
      "Ethical Hacker",
      "Digital Forensics Expert"
    ],
    "demand": "high",
    "alts": [
      "Computer Science",
      "IT"
    ],
    "salary": "KSh 80K\u2013280K",
    "salaryScore": 85
  },
  {
    "code": "1111237",
    "name": "B.Sc. Artificial Intelligence",
    "uni": "Strathmore University",
    "cluster": "cl7",
    "cutoff2024": 41.5,
    "cutoff2023": 40.0,
    "field": "Computing & IT",
    "careers": [
      "AI Engineer",
      "Machine Learning Engineer",
      "NLP Researcher"
    ],
    "demand": "high",
    "alts": [
      "Computer Science",
      "Data Science"
    ],
    "salary": "KSh 100K\u2013400K",
    "salaryScore": 92
  },
  {
    "code": "1111238",
    "name": "B.Sc. Information & Communication Technology",
    "uni": "Multimedia University",
    "cluster": "cl7",
    "cutoff2024": 33.5,
    "cutoff2023": 33.0,
    "field": "Computing & IT",
    "careers": [
      "ICT Officer",
      "Network Engineer",
      "Systems Administrator"
    ],
    "demand": "high",
    "alts": [
      "IT",
      "Computer Science"
    ],
    "salary": "KSh 60K\u2013160K",
    "salaryScore": 65
  },
  {
    "code": "1111239",
    "name": "B.Sc. Computer Security & Forensics",
    "uni": "Dedan Kimathi University",
    "cluster": "cl7",
    "cutoff2024": 37.0,
    "cutoff2023": 36.5,
    "field": "Computing & IT",
    "careers": [
      "Security Analyst",
      "Penetration Tester"
    ],
    "demand": "high",
    "alts": [
      "IT",
      "Computer Science"
    ],
    "salary": "KSh 80K\u2013250K",
    "salaryScore": 83
  },
  {
    "code": "1111134",
    "name": "Bachelor of Laws (LLB)",
    "uni": "Kenyatta University",
    "cluster": "cl1",
    "cutoff2024": 41.6,
    "cutoff2023": 41.3,
    "field": "Business & Law",
    "careers": [
      "Advocate",
      "State Counsel",
      "Corporate Lawyer",
      "Judge"
    ],
    "demand": "med",
    "alts": [
      "Criminology",
      "International Relations"
    ],
    "salary": "KSh 90K\u2013500K",
    "salaryScore": 82
  },
  {
    "code": "1263134",
    "name": "Bachelor of Laws (LLB)",
    "uni": "University of Nairobi",
    "cluster": "cl1",
    "cutoff2024": 42.1,
    "cutoff2023": 41.8,
    "field": "Business & Law",
    "careers": [
      "Advocate",
      "Legal Consultant"
    ],
    "demand": "med",
    "alts": [
      "Public Policy",
      "Social Sciences"
    ],
    "salary": "KSh 90K\u2013500K",
    "salaryScore": 82
  },
  {
    "code": "1181134",
    "name": "Bachelor of Laws (LLB)",
    "uni": "Moi University",
    "cluster": "cl1",
    "cutoff2024": 40.5,
    "cutoff2023": 40.0,
    "field": "Business & Law",
    "careers": [
      "Advocate",
      "Legal Advisor"
    ],
    "demand": "med",
    "alts": [
      "Criminology",
      "International Relations"
    ],
    "salary": "KSh 90K\u2013500K",
    "salaryScore": 82
  },
  {
    "code": "1370134",
    "name": "Bachelor of Laws (LLB)",
    "uni": "Strathmore University",
    "cluster": "cl1",
    "cutoff2024": 39.5,
    "cutoff2023": 39.0,
    "field": "Business & Law",
    "careers": [
      "Corporate Lawyer",
      "Commercial Advocate"
    ],
    "demand": "med",
    "alts": [
      "Business Law",
      "International Relations"
    ],
    "salary": "KSh 100K\u2013600K",
    "salaryScore": 85
  },
  {
    "code": "1111133",
    "name": "Bachelor of Commerce",
    "uni": "Kenyatta University",
    "cluster": "cl2",
    "cutoff2024": 32.6,
    "cutoff2023": 30.8,
    "field": "Business & Law",
    "careers": [
      "Accountant",
      "Business Analyst",
      "Finance Manager"
    ],
    "demand": "high",
    "alts": [
      "Economics",
      "Business Administration"
    ],
    "salary": "KSh 60K\u2013200K",
    "salaryScore": 68
  },
  {
    "code": "1263133",
    "name": "Bachelor of Commerce",
    "uni": "University of Nairobi",
    "cluster": "cl2",
    "cutoff2024": 33.5,
    "cutoff2023": 31.5,
    "field": "Business & Law",
    "careers": [
      "Accountant",
      "Financial Analyst"
    ],
    "demand": "high",
    "alts": [
      "Economics",
      "Finance"
    ],
    "salary": "KSh 60K\u2013200K",
    "salaryScore": 68
  },
  {
    "code": "1111140",
    "name": "B.Sc. Business Administration",
    "uni": "Strathmore University",
    "cluster": "cl2",
    "cutoff2024": 36.5,
    "cutoff2023": 35.0,
    "field": "Business & Law",
    "careers": [
      "Business Manager",
      "Entrepreneur",
      "Strategy Consultant"
    ],
    "demand": "high",
    "alts": [
      "Commerce",
      "Economics"
    ],
    "salary": "KSh 70K\u2013250K",
    "salaryScore": 74
  },
  {
    "code": "1111141",
    "name": "B.Sc. Economics",
    "uni": "University of Nairobi",
    "cluster": "cl10",
    "cutoff2024": 34.5,
    "cutoff2023": 33.0,
    "field": "Business & Law",
    "careers": [
      "Economist",
      "Policy Analyst",
      "Financial Analyst"
    ],
    "demand": "high",
    "alts": [
      "Finance",
      "Statistics",
      "Commerce"
    ],
    "salary": "KSh 70K\u2013200K",
    "salaryScore": 70
  },
  {
    "code": "1111142",
    "name": "B.Sc. Finance",
    "uni": "Strathmore University",
    "cluster": "cl10",
    "cutoff2024": 36.0,
    "cutoff2023": 34.5,
    "field": "Business & Law",
    "careers": [
      "Finance Manager",
      "Investment Banker",
      "Financial Analyst"
    ],
    "demand": "high",
    "alts": [
      "Economics",
      "Accounting",
      "Commerce"
    ],
    "salary": "KSh 80K\u2013300K",
    "salaryScore": 80
  },
  {
    "code": "1111143",
    "name": "B.Sc. Accounting",
    "uni": "Kenyatta University",
    "cluster": "cl2",
    "cutoff2024": 30.5,
    "cutoff2023": 29.5,
    "field": "Business & Law",
    "careers": [
      "Accountant",
      "Auditor",
      "Tax Consultant",
      "CFO"
    ],
    "demand": "high",
    "alts": [
      "Commerce",
      "Finance"
    ],
    "salary": "KSh 60K\u2013200K",
    "salaryScore": 67
  },
  {
    "code": "1111144",
    "name": "B.Sc. Supply Chain Management",
    "uni": "JKUAT",
    "cluster": "cl2",
    "cutoff2024": 29.0,
    "cutoff2023": 28.5,
    "field": "Business & Law",
    "careers": [
      "Supply Chain Manager",
      "Procurement Officer",
      "Logistics Manager"
    ],
    "demand": "high",
    "alts": [
      "Business Administration",
      "Commerce"
    ],
    "salary": "KSh 65K\u2013160K",
    "salaryScore": 65
  },
  {
    "code": "1111145",
    "name": "B.Sc. Marketing",
    "uni": "Kenyatta University",
    "cluster": "cl2",
    "cutoff2024": 28.5,
    "cutoff2023": 28.0,
    "field": "Business & Law",
    "careers": [
      "Marketing Manager",
      "Brand Manager",
      "Digital Marketer"
    ],
    "demand": "high",
    "alts": [
      "Business Administration",
      "PR & Communication"
    ],
    "salary": "KSh 60K\u2013180K",
    "salaryScore": 65
  },
  {
    "code": "1111146",
    "name": "B.Sc. Human Resource Management",
    "uni": "Kenyatta University",
    "cluster": "cl2",
    "cutoff2024": 27.5,
    "cutoff2023": 27.0,
    "field": "Business & Law",
    "careers": [
      "HR Manager",
      "Talent Acquisition Specialist",
      "OD Consultant"
    ],
    "demand": "high",
    "alts": [
      "Business Administration",
      "Psychology"
    ],
    "salary": "KSh 60K\u2013150K",
    "salaryScore": 62
  },
  {
    "code": "1111147",
    "name": "B.Sc. Entrepreneurship",
    "uni": "Strathmore University",
    "cluster": "cl2",
    "cutoff2024": 29.5,
    "cutoff2023": 29.0,
    "field": "Business & Law",
    "careers": [
      "Entrepreneur",
      "Business Development Manager",
      "Startup Founder"
    ],
    "demand": "high",
    "alts": [
      "Business Administration",
      "Marketing"
    ],
    "salary": "KSh 60K\u2013300K+",
    "salaryScore": 70
  },
  {
    "code": "1111148",
    "name": "B.Sc. Hospitality & Tourism Management",
    "uni": "Kenyatta University",
    "cluster": "cl2",
    "cutoff2024": 29.6,
    "cutoff2023": 31.5,
    "field": "Business & Law",
    "careers": [
      "Hotel Manager",
      "Tourism Director",
      "Event Planner"
    ],
    "demand": "high",
    "alts": [
      "Business Administration",
      "Recreation Management"
    ],
    "salary": "KSh 60K\u2013160K",
    "salaryScore": 63
  },
  {
    "code": "1111149",
    "name": "B.Sc. International Business",
    "uni": "USIU-Africa",
    "cluster": "cl2",
    "cutoff2024": 32.0,
    "cutoff2023": 31.5,
    "field": "Business & Law",
    "careers": [
      "International Trade Officer",
      "Export Manager",
      "Trade Analyst"
    ],
    "demand": "med",
    "alts": [
      "Business Administration",
      "International Relations"
    ],
    "salary": "KSh 70K\u2013200K",
    "salaryScore": 68
  },
  {
    "code": "1111150",
    "name": "B.Sc. Project Management",
    "uni": "KCA University",
    "cluster": "cl2",
    "cutoff2024": 26.0,
    "cutoff2023": 25.5,
    "field": "Business & Law",
    "careers": [
      "Project Manager",
      "Programme Officer",
      "Operations Manager"
    ],
    "demand": "high",
    "alts": [
      "Business Administration",
      "Engineering"
    ],
    "salary": "KSh 65K\u2013180K",
    "salaryScore": 66
  },
  {
    "code": "1111151",
    "name": "B.Sc. Management Science",
    "uni": "University of Nairobi",
    "cluster": "cl10",
    "cutoff2024": 31.0,
    "cutoff2023": 30.5,
    "field": "Business & Law",
    "careers": [
      "Management Consultant",
      "Operations Research Analyst"
    ],
    "demand": "med",
    "alts": [
      "Mathematics",
      "Statistics",
      "Business Administration"
    ],
    "salary": "KSh 70K\u2013200K",
    "salaryScore": 70
  },
  {
    "code": "1111152",
    "name": "B.Sc. Banking & Finance",
    "uni": "Co-operative University",
    "cluster": "cl2",
    "cutoff2024": 27.5,
    "cutoff2023": 27.0,
    "field": "Business & Law",
    "careers": [
      "Banker",
      "Credit Analyst",
      "FinTech Specialist"
    ],
    "demand": "high",
    "alts": [
      "Finance",
      "Economics",
      "Commerce"
    ],
    "salary": "KSh 65K\u2013180K",
    "salaryScore": 65
  },
  {
    "code": "1111137",
    "name": "B.Ed. (Science)",
    "uni": "Kenyatta University",
    "cluster": "cl9",
    "cutoff2024": 37.2,
    "cutoff2023": 37.8,
    "field": "Education",
    "careers": [
      "Science Teacher",
      "Curriculum Developer",
      "Education Officer"
    ],
    "demand": "high",
    "alts": [
      "B.Ed Arts",
      "B.Sc. Biology"
    ],
    "salary": "KSh 40K\u201380K",
    "salaryScore": 40
  },
  {
    "code": "1111135",
    "name": "B.Ed. (Arts)",
    "uni": "Kenyatta University",
    "cluster": "cl3",
    "cutoff2024": 33.6,
    "cutoff2023": 34.7,
    "field": "Education",
    "careers": [
      "Arts Teacher",
      "Head Teacher",
      "Education Researcher"
    ],
    "demand": "med",
    "alts": [
      "B.Ed Science",
      "Library Science"
    ],
    "salary": "KSh 40K\u201375K",
    "salaryScore": 38
  },
  {
    "code": "1301135",
    "name": "B.Ed. (Arts)",
    "uni": "Moi University",
    "cluster": "cl3",
    "cutoff2024": 31.5,
    "cutoff2023": 32.0,
    "field": "Education",
    "careers": [
      "Arts Teacher",
      "Education Coordinator"
    ],
    "demand": "med",
    "alts": [
      "B.Ed Science",
      "Linguistics"
    ],
    "salary": "KSh 40K\u201375K",
    "salaryScore": 38
  },
  {
    "code": "1111155",
    "name": "B.Ed. Special Needs Education",
    "uni": "Kenyatta University",
    "cluster": "cl3",
    "cutoff2024": 35.0,
    "cutoff2023": 37.3,
    "field": "Education",
    "careers": [
      "SNE Teacher",
      "Education Therapist",
      "Inclusion Specialist"
    ],
    "demand": "high",
    "alts": [
      "B.Ed Arts",
      "Psychology"
    ],
    "salary": "KSh 45K\u201385K",
    "salaryScore": 43
  },
  {
    "code": "1111180",
    "name": "B.Ed. Early Childhood",
    "uni": "Kenyatta University",
    "cluster": "cl3",
    "cutoff2024": 27.3,
    "cutoff2023": 24.9,
    "field": "Education",
    "careers": [
      "ECD Teacher",
      "Child Development Specialist"
    ],
    "demand": "high",
    "alts": [
      "Social Work",
      "Psychology"
    ],
    "salary": "KSh 35K\u201370K",
    "salaryScore": 36
  },
  {
    "code": "1111633",
    "name": "B.Ed. Library Science",
    "uni": "Kenyatta University",
    "cluster": "cl3",
    "cutoff2024": 23.6,
    "cutoff2023": 22.4,
    "field": "Education",
    "careers": [
      "Librarian",
      "Information Scientist",
      "Archivist"
    ],
    "demand": "low",
    "alts": [
      "Information Science",
      "B.Ed Arts"
    ],
    "salary": "KSh 35K\u201360K",
    "salaryScore": 32
  },
  {
    "code": "1111315",
    "name": "B.Ed. Physical Education",
    "uni": "Kenyatta University",
    "cluster": "cl12",
    "cutoff2024": 21.9,
    "cutoff2023": 22.4,
    "field": "Education",
    "careers": [
      "PE Teacher",
      "Sports Coach",
      "Recreation Manager"
    ],
    "demand": "med",
    "alts": [
      "Sports Management",
      "Recreation Science"
    ],
    "salary": "KSh 40K\u201375K",
    "salaryScore": 38
  },
  {
    "code": "1111310",
    "name": "B.Ed. Technology (Civil)",
    "uni": "JKUAT",
    "cluster": "cl5",
    "cutoff2024": 34.0,
    "cutoff2023": 33.5,
    "field": "Education",
    "careers": [
      "Technical Teacher",
      "Vocational Trainer"
    ],
    "demand": "med",
    "alts": [
      "Civil Engineering",
      "B.Ed Science"
    ],
    "salary": "KSh 45K\u201380K",
    "salaryScore": 42
  },
  {
    "code": "1111311",
    "name": "B.Ed. Technology (Electrical)",
    "uni": "JKUAT",
    "cluster": "cl5",
    "cutoff2024": 34.5,
    "cutoff2023": 34.0,
    "field": "Education",
    "careers": [
      "Tech Teacher",
      "TVET Trainer"
    ],
    "demand": "med",
    "alts": [
      "Electrical Engineering",
      "B.Ed Science"
    ],
    "salary": "KSh 45K\u201380K",
    "salaryScore": 42
  },
  {
    "code": "1263137",
    "name": "B.Sc. Education (Science)",
    "uni": "University of Nairobi",
    "cluster": "cl9",
    "cutoff2024": 36.0,
    "cutoff2023": 36.5,
    "field": "Education",
    "careers": [
      "Science Teacher",
      "Curriculum Specialist"
    ],
    "demand": "high",
    "alts": [
      "B.Ed Arts",
      "Pure Sciences"
    ],
    "salary": "KSh 40K\u201380K",
    "salaryScore": 40
  },
  {
    "code": "1111101",
    "name": "Bachelor of Arts",
    "uni": "Kenyatta University",
    "cluster": "cl3",
    "cutoff2024": 24.1,
    "cutoff2023": 28.6,
    "field": "Arts & Social",
    "careers": [
      "Researcher",
      "Public Servant",
      "Diplomat",
      "Journalist"
    ],
    "demand": "med",
    "alts": [
      "Sociology",
      "International Relations"
    ],
    "salary": "KSh 40K\u2013100K",
    "salaryScore": 44
  },
  {
    "code": "1111203",
    "name": "B.A. Psychology",
    "uni": "Kenyatta University",
    "cluster": "cl3",
    "cutoff2024": 29.7,
    "cutoff2023": 34.5,
    "field": "Arts & Social",
    "careers": [
      "Counselling Psychologist",
      "HR Specialist",
      "Therapist"
    ],
    "demand": "med",
    "alts": [
      "Social Work",
      "Sociology"
    ],
    "salary": "KSh 50K\u2013120K",
    "salaryScore": 55
  },
  {
    "code": "1370203",
    "name": "B.A. Psychology",
    "uni": "Daystar University",
    "cluster": "cl3",
    "cutoff2024": 27.5,
    "cutoff2023": 27.0,
    "field": "Arts & Social",
    "careers": [
      "Counsellor",
      "Clinical Psychologist",
      "Life Coach"
    ],
    "demand": "med",
    "alts": [
      "Social Work",
      "Counselling"
    ],
    "salary": "KSh 50K\u2013120K",
    "salaryScore": 55
  },
  {
    "code": "1111204",
    "name": "B.Sc. Communication & Media Studies",
    "uni": "Kenyatta University",
    "cluster": "cl3",
    "cutoff2024": 29.6,
    "cutoff2023": 34.6,
    "field": "Arts & Social",
    "careers": [
      "Journalist",
      "PR Specialist",
      "TV Presenter",
      "Media Manager"
    ],
    "demand": "med",
    "alts": [
      "Mass Communication",
      "Journalism"
    ],
    "salary": "KSh 50K\u2013130K",
    "salaryScore": 55
  },
  {
    "code": "1263204",
    "name": "B.Sc. Journalism & Mass Communication",
    "uni": "University of Nairobi",
    "cluster": "cl3",
    "cutoff2024": 30.5,
    "cutoff2023": 31.0,
    "field": "Arts & Social",
    "careers": [
      "Journalist",
      "TV Anchor",
      "Media Analyst"
    ],
    "demand": "med",
    "alts": [
      "Communication",
      "PR"
    ],
    "salary": "KSh 50K\u2013130K",
    "salaryScore": 55
  },
  {
    "code": "1370204",
    "name": "B.Sc. Journalism & Communication",
    "uni": "Multimedia University",
    "cluster": "cl3",
    "cutoff2024": 27.0,
    "cutoff2023": 27.5,
    "field": "Arts & Social",
    "careers": [
      "Journalist",
      "Broadcaster",
      "Digital Content Creator"
    ],
    "demand": "med",
    "alts": [
      "Media Studies",
      "PR & Communication"
    ],
    "salary": "KSh 50K\u2013130K",
    "salaryScore": 55
  },
  {
    "code": "1111205",
    "name": "B.A. International Relations",
    "uni": "Kenyatta University",
    "cluster": "cl3",
    "cutoff2024": 28.0,
    "cutoff2023": 27.5,
    "field": "Arts & Social",
    "careers": [
      "Diplomat",
      "Foreign Affairs Officer",
      "NGO Manager"
    ],
    "demand": "med",
    "alts": [
      "Political Science",
      "Public Administration"
    ],
    "salary": "KSh 60K\u2013160K",
    "salaryScore": 62
  },
  {
    "code": "1263205",
    "name": "B.A. International Relations & Diplomacy",
    "uni": "University of Nairobi",
    "cluster": "cl3",
    "cutoff2024": 29.5,
    "cutoff2023": 29.0,
    "field": "Arts & Social",
    "careers": [
      "Diplomat",
      "Trade Attach\u00e9",
      "International Consultant"
    ],
    "demand": "med",
    "alts": [
      "Political Science",
      "Public Policy"
    ],
    "salary": "KSh 60K\u2013180K",
    "salaryScore": 65
  },
  {
    "code": "1111206",
    "name": "B.A. Counselling",
    "uni": "Kenyatta University",
    "cluster": "cl3",
    "cutoff2024": 22.4,
    "cutoff2023": 24.9,
    "field": "Arts & Social",
    "careers": [
      "Counsellor",
      "Therapist",
      "Social Worker"
    ],
    "demand": "med",
    "alts": [
      "Psychology",
      "Social Work"
    ],
    "salary": "KSh 45K\u2013100K",
    "salaryScore": 48
  },
  {
    "code": "1111207",
    "name": "B.A. Gender & Development Studies",
    "uni": "Kenyatta University",
    "cluster": "cl3",
    "cutoff2024": 22.4,
    "cutoff2023": 24.9,
    "field": "Arts & Social",
    "careers": [
      "Gender Officer",
      "Development Worker",
      "NGO Specialist"
    ],
    "demand": "low",
    "alts": [
      "Social Work",
      "Sociology"
    ],
    "salary": "KSh 40K\u201390K",
    "salaryScore": 42
  },
  {
    "code": "1111208",
    "name": "B.Sc. Public Policy & Administration",
    "uni": "Kenyatta University",
    "cluster": "cl3",
    "cutoff2024": 28.3,
    "cutoff2023": 32.9,
    "field": "Arts & Social",
    "careers": [
      "Policy Analyst",
      "Public Administrator",
      "Government Officer"
    ],
    "demand": "med",
    "alts": [
      "Political Science",
      "International Relations"
    ],
    "salary": "KSh 55K\u2013140K",
    "salaryScore": 58
  },
  {
    "code": "1111209",
    "name": "B.A. Sociology",
    "uni": "University of Nairobi",
    "cluster": "cl3",
    "cutoff2024": 25.0,
    "cutoff2023": 25.5,
    "field": "Arts & Social",
    "careers": [
      "Social Worker",
      "Community Development Officer",
      "NGO Programme Officer"
    ],
    "demand": "med",
    "alts": [
      "Social Work",
      "Counselling"
    ],
    "salary": "KSh 45K\u201395K",
    "salaryScore": 48
  },
  {
    "code": "1111210",
    "name": "B.A. Criminology & Security Studies",
    "uni": "Kenyatta University",
    "cluster": "cl3",
    "cutoff2024": 27.0,
    "cutoff2023": 26.5,
    "field": "Arts & Social",
    "careers": [
      "Criminal Investigator",
      "Security Consultant",
      "Probation Officer"
    ],
    "demand": "med",
    "alts": [
      "Law",
      "Sociology"
    ],
    "salary": "KSh 50K\u2013120K",
    "salaryScore": 55
  },
  {
    "code": "1111211",
    "name": "B.A. Development Studies",
    "uni": "Maseno University",
    "cluster": "cl3",
    "cutoff2024": 22.0,
    "cutoff2023": 21.5,
    "field": "Arts & Social",
    "careers": [
      "Development Officer",
      "Project Officer",
      "NGO Manager"
    ],
    "demand": "med",
    "alts": [
      "Public Administration",
      "Sociology"
    ],
    "salary": "KSh 45K\u2013100K",
    "salaryScore": 48
  },
  {
    "code": "1111212",
    "name": "B.Sc. Disaster Management",
    "uni": "Masinde Muliro University",
    "cluster": "cl3",
    "cutoff2024": 21.5,
    "cutoff2023": 21.0,
    "field": "Arts & Social",
    "careers": [
      "Disaster Risk Officer",
      "Emergency Manager",
      "Humanitarian Aid Worker"
    ],
    "demand": "med",
    "alts": [
      "Environmental Science",
      "Community Development"
    ],
    "salary": "KSh 50K\u2013120K",
    "salaryScore": 52
  },
  {
    "code": "1111213",
    "name": "B.A. Film & Theatre Arts",
    "uni": "Kenyatta University",
    "cluster": "cl3",
    "cutoff2024": 24.5,
    "cutoff2023": 25.0,
    "field": "Arts & Social",
    "careers": [
      "Film Director",
      "Theatre Producer",
      "Screenwriter"
    ],
    "demand": "low",
    "alts": [
      "Media Studies",
      "Communication"
    ],
    "salary": "KSh 40K\u2013150K",
    "salaryScore": 48
  },
  {
    "code": "1111214",
    "name": "B.Sc. Fine Art & Design",
    "uni": "Kenyatta University",
    "cluster": "cl3",
    "cutoff2024": 23.0,
    "cutoff2023": 23.5,
    "field": "Arts & Social",
    "careers": [
      "Graphic Designer",
      "Visual Artist",
      "Art Director"
    ],
    "demand": "med",
    "alts": [
      "Architecture",
      "Communication"
    ],
    "salary": "KSh 50K\u2013150K",
    "salaryScore": 55
  },
  {
    "code": "1111122",
    "name": "B.Sc. Agriculture",
    "uni": "Kenyatta University",
    "cluster": "cl8",
    "cutoff2024": 15.9,
    "cutoff2023": 23.7,
    "field": "Agriculture",
    "careers": [
      "Agronomist",
      "Farm Manager",
      "Agricultural Officer"
    ],
    "demand": "med",
    "alts": [
      "Horticulture",
      "Agribusiness"
    ],
    "salary": "KSh 40K\u2013120K",
    "salaryScore": 48
  },
  {
    "code": "1181122",
    "name": "B.Sc. Agriculture",
    "uni": "Egerton University",
    "cluster": "cl8",
    "cutoff2024": 15.5,
    "cutoff2023": 22.0,
    "field": "Agriculture",
    "careers": [
      "Agronomist",
      "Farmer",
      "Extension Officer"
    ],
    "demand": "med",
    "alts": [
      "Horticulture",
      "Animal Science"
    ],
    "salary": "KSh 40K\u2013120K",
    "salaryScore": 48
  },
  {
    "code": "1111587",
    "name": "B.Sc. Agribusiness Management",
    "uni": "Kenyatta University",
    "cluster": "cl8",
    "cutoff2024": 22.5,
    "cutoff2023": 21.5,
    "field": "Agriculture",
    "careers": [
      "Agribusiness Manager",
      "Agricultural Economist",
      "Supply Chain Officer"
    ],
    "demand": "high",
    "alts": [
      "Agriculture",
      "Business Administration"
    ],
    "salary": "KSh 55K\u2013150K",
    "salaryScore": 58
  },
  {
    "code": "1301587",
    "name": "B.Sc. Agribusiness Management",
    "uni": "Egerton University",
    "cluster": "cl8",
    "cutoff2024": 21.0,
    "cutoff2023": 20.5,
    "field": "Agriculture",
    "careers": [
      "Agribusiness Manager",
      "Farm Business Consultant"
    ],
    "demand": "high",
    "alts": [
      "Agriculture",
      "Commerce"
    ],
    "salary": "KSh 55K\u2013150K",
    "salaryScore": 58
  },
  {
    "code": "1111294",
    "name": "B.Sc. Animal Production & Health",
    "uni": "Kenyatta University",
    "cluster": "cl15",
    "cutoff2024": 25.4,
    "cutoff2023": 31.3,
    "field": "Agriculture",
    "careers": [
      "Animal Scientist",
      "Veterinary Technician",
      "Farm Manager"
    ],
    "demand": "med",
    "alts": [
      "Veterinary Medicine",
      "Agriculture"
    ],
    "salary": "KSh 45K\u2013110K",
    "salaryScore": 50
  },
  {
    "code": "1111295",
    "name": "B.Sc. Animal Science",
    "uni": "Egerton University",
    "cluster": "cl15",
    "cutoff2024": 24.0,
    "cutoff2023": 23.5,
    "field": "Agriculture",
    "careers": [
      "Animal Scientist",
      "Livestock Officer"
    ],
    "demand": "med",
    "alts": [
      "Veterinary Medicine",
      "Animal Health"
    ],
    "salary": "KSh 45K\u2013110K",
    "salaryScore": 50
  },
  {
    "code": "1111296",
    "name": "B.Sc. Horticulture",
    "uni": "Egerton University",
    "cluster": "cl15",
    "cutoff2024": 18.5,
    "cutoff2023": 19.0,
    "field": "Agriculture",
    "careers": [
      "Horticulturalist",
      "Farm Manager",
      "Export Horticulture Specialist"
    ],
    "demand": "high",
    "alts": [
      "Agriculture",
      "Food Science"
    ],
    "salary": "KSh 50K\u2013130K",
    "salaryScore": 52
  },
  {
    "code": "1111297",
    "name": "B.Sc. Environmental Science",
    "uni": "Kenyatta University",
    "cluster": "cl15",
    "cutoff2024": 15.9,
    "cutoff2023": 27.7,
    "field": "Agriculture",
    "careers": [
      "Environmental Scientist",
      "NEMA Officer",
      "Conservation Officer"
    ],
    "demand": "med",
    "alts": [
      "Environmental Planning",
      "Geography"
    ],
    "salary": "KSh 50K\u2013120K",
    "salaryScore": 53
  },
  {
    "code": "1263297",
    "name": "B.Sc. Environmental Science",
    "uni": "University of Nairobi",
    "cluster": "cl15",
    "cutoff2024": 16.5,
    "cutoff2023": 28.0,
    "field": "Agriculture",
    "careers": [
      "Environmental Consultant",
      "Climate Change Analyst"
    ],
    "demand": "med",
    "alts": [
      "Geography",
      "Natural Resources"
    ],
    "salary": "KSh 50K\u2013120K",
    "salaryScore": 53
  },
  {
    "code": "1111298",
    "name": "B.Sc. Food Science & Technology",
    "uni": "Kenyatta University",
    "cluster": "cl15",
    "cutoff2024": 22.0,
    "cutoff2023": 22.5,
    "field": "Agriculture",
    "careers": [
      "Food Technologist",
      "Quality Control Manager",
      "Food Safety Officer"
    ],
    "demand": "high",
    "alts": [
      "Nutrition",
      "Agriculture"
    ],
    "salary": "KSh 55K\u2013130K",
    "salaryScore": 57
  },
  {
    "code": "1181298",
    "name": "B.Sc. Food Science & Technology",
    "uni": "Egerton University",
    "cluster": "cl15",
    "cutoff2024": 21.0,
    "cutoff2023": 21.5,
    "field": "Agriculture",
    "careers": [
      "Food Technologist",
      "Product Developer"
    ],
    "demand": "high",
    "alts": [
      "Nutrition",
      "Agriculture"
    ],
    "salary": "KSh 55K\u2013130K",
    "salaryScore": 57
  },
  {
    "code": "1111299",
    "name": "B.Sc. Fisheries & Aquaculture",
    "uni": "Maseno University",
    "cluster": "cl15",
    "cutoff2024": 20.5,
    "cutoff2023": 21.0,
    "field": "Agriculture",
    "careers": [
      "Fisheries Officer",
      "Aquaculture Manager",
      "Marine Biologist"
    ],
    "demand": "med",
    "alts": [
      "Marine Biology",
      "Environmental Science"
    ],
    "salary": "KSh 45K\u2013110K",
    "salaryScore": 50
  },
  {
    "code": "1111300",
    "name": "B.Sc. Natural Resource Management",
    "uni": "Egerton University",
    "cluster": "cl15",
    "cutoff2024": 20.0,
    "cutoff2023": 20.5,
    "field": "Agriculture",
    "careers": [
      "Natural Resource Manager",
      "Conservation Officer",
      "Park Warden"
    ],
    "demand": "med",
    "alts": [
      "Environmental Science",
      "Forestry"
    ],
    "salary": "KSh 45K\u2013100K",
    "salaryScore": 48
  },
  {
    "code": "1111301",
    "name": "B.Sc. Agricultural Education & Extension",
    "uni": "Egerton University",
    "cluster": "cl15",
    "cutoff2024": 20.5,
    "cutoff2023": 20.0,
    "field": "Agriculture",
    "careers": [
      "Agricultural Extension Officer",
      "Agri Educator",
      "Rural Development Worker"
    ],
    "demand": "high",
    "alts": [
      "Agriculture",
      "Education"
    ],
    "salary": "KSh 40K\u201390K",
    "salaryScore": 43
  },
  {
    "code": "1111302",
    "name": "B.Sc. Soil Science",
    "uni": "University of Nairobi",
    "cluster": "cl15",
    "cutoff2024": 18.0,
    "cutoff2023": 18.5,
    "field": "Agriculture",
    "careers": [
      "Soil Scientist",
      "Land Reclamation Officer",
      "Environmental Consultant"
    ],
    "demand": "med",
    "alts": [
      "Agriculture",
      "Environmental Science"
    ],
    "salary": "KSh 50K\u2013110K",
    "salaryScore": 52
  },
  {
    "code": "1111303",
    "name": "B.Sc. Agroforestry",
    "uni": "Moi University",
    "cluster": "cl15",
    "cutoff2024": 17.5,
    "cutoff2023": 18.0,
    "field": "Agriculture",
    "careers": [
      "Agroforestry Specialist",
      "Forestry Officer",
      "Climate Consultant"
    ],
    "demand": "med",
    "alts": [
      "Agriculture",
      "Environmental Science"
    ],
    "salary": "KSh 45K\u2013100K",
    "salaryScore": 48
  },
  {
    "code": "1111304",
    "name": "B.Sc. Wildlife Enterprises & Management",
    "uni": "Moi University",
    "cluster": "cl15",
    "cutoff2024": 23.5,
    "cutoff2023": 24.0,
    "field": "Agriculture",
    "careers": [
      "Wildlife Manager",
      "Conservation Officer",
      "Safari Guide (Senior)"
    ],
    "demand": "med",
    "alts": [
      "Ecotourism",
      "Environmental Science"
    ],
    "salary": "KSh 50K\u2013130K",
    "salaryScore": 55
  },
  {
    "code": "1111111",
    "name": "B.Sc. Biology",
    "uni": "Kenyatta University",
    "cluster": "cl9",
    "cutoff2024": 24.7,
    "cutoff2023": 17.0,
    "field": "Pure Sciences",
    "careers": [
      "Biologist",
      "Researcher",
      "Lab Scientist",
      "Conservation Officer"
    ],
    "demand": "low",
    "alts": [
      "Biochemistry",
      "Conservation Biology"
    ],
    "salary": "KSh 45K\u2013110K",
    "salaryScore": 50
  },
  {
    "code": "1263111",
    "name": "B.Sc. Biology",
    "uni": "University of Nairobi",
    "cluster": "cl9",
    "cutoff2024": 25.0,
    "cutoff2023": 17.0,
    "field": "Pure Sciences",
    "careers": [
      "Biologist",
      "Research Scientist",
      "Conservation Expert"
    ],
    "demand": "low",
    "alts": [
      "Biochemistry",
      "Marine Biology"
    ],
    "salary": "KSh 45K\u2013110K",
    "salaryScore": 50
  },
  {
    "code": "1111113",
    "name": "B.Sc. Chemistry",
    "uni": "Kenyatta University",
    "cluster": "cl9",
    "cutoff2024": 22.0,
    "cutoff2023": 20.0,
    "field": "Pure Sciences",
    "careers": [
      "Chemist",
      "Quality Control Analyst",
      "Chemical Researcher"
    ],
    "demand": "low",
    "alts": [
      "Biochemistry",
      "Industrial Chemistry"
    ],
    "salary": "KSh 50K\u2013120K",
    "salaryScore": 53
  },
  {
    "code": "1111114",
    "name": "B.Sc. Analytical Chemistry",
    "uni": "Kenyatta University",
    "cluster": "cl9",
    "cutoff2024": 25.9,
    "cutoff2023": 27.6,
    "field": "Pure Sciences",
    "careers": [
      "Analytical Chemist",
      "QC Officer",
      "Pharmaceutical Analyst"
    ],
    "demand": "med",
    "alts": [
      "Industrial Chemistry",
      "Biochemistry"
    ],
    "salary": "KSh 55K\u2013130K",
    "salaryScore": 56
  },
  {
    "code": "1111160",
    "name": "B.Sc. Physics",
    "uni": "University of Nairobi",
    "cluster": "cl9",
    "cutoff2024": 22.5,
    "cutoff2023": 20.5,
    "field": "Pure Sciences",
    "careers": [
      "Physicist",
      "Research Scientist",
      "Nuclear Physicist"
    ],
    "demand": "low",
    "alts": [
      "Mathematics",
      "Engineering Physics"
    ],
    "salary": "KSh 50K\u2013120K",
    "salaryScore": 53
  },
  {
    "code": "1111161",
    "name": "B.Sc. Mathematics",
    "uni": "University of Nairobi",
    "cluster": "cl10",
    "cutoff2024": 24.0,
    "cutoff2023": 22.0,
    "field": "Pure Sciences",
    "careers": [
      "Mathematician",
      "Data Analyst",
      "Quantitative Analyst"
    ],
    "demand": "med",
    "alts": [
      "Statistics",
      "Actuarial Science"
    ],
    "salary": "KSh 60K\u2013180K",
    "salaryScore": 65
  },
  {
    "code": "1111162",
    "name": "B.Sc. Statistics",
    "uni": "University of Nairobi",
    "cluster": "cl10",
    "cutoff2024": 25.5,
    "cutoff2023": 24.0,
    "field": "Pure Sciences",
    "careers": [
      "Statistician",
      "Data Scientist",
      "Research Analyst"
    ],
    "demand": "high",
    "alts": [
      "Mathematics",
      "Actuarial Science"
    ],
    "salary": "KSh 65K\u2013180K",
    "salaryScore": 66
  },
  {
    "code": "1111163",
    "name": "B.Sc. Geology",
    "uni": "University of Nairobi",
    "cluster": "cl4",
    "cutoff2024": 26.0,
    "cutoff2023": 25.5,
    "field": "Pure Sciences",
    "careers": [
      "Geologist",
      "Mining Engineer",
      "Petroleum Geologist"
    ],
    "demand": "med",
    "alts": [
      "Environmental Science",
      "Geophysics"
    ],
    "salary": "KSh 65K\u2013180K",
    "salaryScore": 65
  },
  {
    "code": "1111165",
    "name": "B.Sc. Meteorology",
    "uni": "University of Nairobi",
    "cluster": "cl4",
    "cutoff2024": 25.5,
    "cutoff2023": 25.0,
    "field": "Pure Sciences",
    "careers": [
      "Meteorologist",
      "Climate Scientist",
      "Weather Forecaster"
    ],
    "demand": "med",
    "alts": [
      "Environmental Science",
      "Physics"
    ],
    "salary": "KSh 60K\u2013140K",
    "salaryScore": 60
  },
  {
    "code": "1111166",
    "name": "B.Sc. Astronomy & Astrophysics",
    "uni": "University of Nairobi",
    "cluster": "cl4",
    "cutoff2024": 28.0,
    "cutoff2023": 27.0,
    "field": "Pure Sciences",
    "careers": [
      "Astronomer",
      "Space Scientist",
      "Physics Researcher"
    ],
    "demand": "low",
    "alts": [
      "Physics",
      "Mathematics"
    ],
    "salary": "KSh 60K\u2013150K",
    "salaryScore": 60
  },
  {
    "code": "1111167",
    "name": "B.Sc. Renewable Energy & Environmental Physics",
    "uni": "Masinde Muliro University",
    "cluster": "cl5",
    "cutoff2024": 24.5,
    "cutoff2023": 24.0,
    "field": "Pure Sciences",
    "careers": [
      "Energy Consultant",
      "Environmental Physicist",
      "Solar Engineer"
    ],
    "demand": "med",
    "alts": [
      "Physics",
      "Environmental Science"
    ],
    "salary": "KSh 55K\u2013140K",
    "salaryScore": 58
  },
  {
    "code": "1111400",
    "name": "B.Sc. Geophysics",
    "uni": "University of Nairobi",
    "cluster": "cl4",
    "cutoff2024": 26.5,
    "cutoff2023": 26.0,
    "field": "Pure Sciences",
    "careers": [
      "Geophysicist",
      "Seismologist",
      "Oil Exploration Specialist"
    ],
    "demand": "med",
    "alts": [
      "Geology",
      "Petroleum Engineering"
    ],
    "salary": "KSh 70K\u2013200K",
    "salaryScore": 70
  },
  {
    "code": "1111401",
    "name": "B.Sc. Urban & Regional Planning",
    "uni": "University of Nairobi",
    "cluster": "cl6",
    "cutoff2024": 34.0,
    "cutoff2023": 33.5,
    "field": "Engineering & Tech",
    "careers": [
      "Urban Planner",
      "City Planner",
      "Land Use Planner"
    ],
    "demand": "med",
    "alts": [
      "Architecture",
      "Geospatial Engineering"
    ],
    "salary": "KSh 60K\u2013150K",
    "salaryScore": 62
  },
  {
    "code": "1111402",
    "name": "B.Sc. Hydrology & Water Resources",
    "uni": "Egerton University",
    "cluster": "cl4",
    "cutoff2024": 25.0,
    "cutoff2023": 24.5,
    "field": "Pure Sciences",
    "careers": [
      "Hydrologist",
      "Water Resources Engineer",
      "WASH Specialist"
    ],
    "demand": "med",
    "alts": [
      "Civil Engineering",
      "Environmental Science"
    ],
    "salary": "KSh 60K\u2013150K",
    "salaryScore": 62
  },
  {
    "code": "1111450",
    "name": "B.Sc. Fashion Design & Marketing",
    "uni": "Kenyatta University",
    "cluster": "cl11",
    "cutoff2024": 20.0,
    "cutoff2023": 20.5,
    "field": "Arts & Social",
    "careers": [
      "Fashion Designer",
      "Textile Artist",
      "Brand Stylist"
    ],
    "demand": "low",
    "alts": [
      "Fine Art",
      "Marketing"
    ],
    "salary": "KSh 40K\u2013120K",
    "salaryScore": 48
  },
  {
    "code": "1111451",
    "name": "B.Sc. Interior Design",
    "uni": "Kenyatta University",
    "cluster": "cl11",
    "cutoff2024": 22.0,
    "cutoff2023": 22.5,
    "field": "Arts & Social",
    "careers": [
      "Interior Designer",
      "Space Planner",
      "Set Designer"
    ],
    "demand": "med",
    "alts": [
      "Architecture",
      "Fine Art"
    ],
    "salary": "KSh 50K\u2013140K",
    "salaryScore": 55
  },
  {
    "code": "1111480",
    "name": "B.Sc. Sport Science & Management",
    "uni": "Kenyatta University",
    "cluster": "cl12",
    "cutoff2024": 21.0,
    "cutoff2023": 21.5,
    "field": "Education",
    "careers": [
      "Sports Manager",
      "Sports Scientist",
      "Fitness Trainer"
    ],
    "demand": "med",
    "alts": [
      "B.Ed Physical Education",
      "Recreation Management"
    ],
    "salary": "KSh 40K\u2013100K",
    "salaryScore": 44
  },
  {
    "code": "1111481",
    "name": "B.Sc. Recreation & Sports Management",
    "uni": "Moi University",
    "cluster": "cl12",
    "cutoff2024": 20.5,
    "cutoff2023": 21.0,
    "field": "Education",
    "careers": [
      "Recreation Manager",
      "Sports Coach",
      "Wellness Consultant"
    ],
    "demand": "med",
    "alts": [
      "Sport Science",
      "PE Teaching"
    ],
    "salary": "KSh 40K\u201390K",
    "salaryScore": 42
  },
  {
    "code": "1111500",
    "name": "B.A. History & Archaeology",
    "uni": "University of Nairobi",
    "cluster": "cl14",
    "cutoff2024": 22.5,
    "cutoff2023": 22.0,
    "field": "Arts & Social",
    "careers": [
      "Historian",
      "Archaeologist",
      "Museum Curator",
      "Heritage Officer"
    ],
    "demand": "low",
    "alts": [
      "International Relations",
      "Sociology"
    ],
    "salary": "KSh 40K\u201390K",
    "salaryScore": 42
  },
  {
    "code": "1111501",
    "name": "B.A. History & International Studies",
    "uni": "Moi University",
    "cluster": "cl14",
    "cutoff2024": 21.5,
    "cutoff2023": 21.0,
    "field": "Arts & Social",
    "careers": [
      "Historian",
      "Diplomat",
      "International Affairs Analyst"
    ],
    "demand": "low",
    "alts": [
      "International Relations",
      "Political Science"
    ],
    "salary": "KSh 45K\u2013100K",
    "salaryScore": 46
  },
  {
    "code": "1111550",
    "name": "B.Sc. Population Health & Epidemiology",
    "uni": "Kenyatta University",
    "cluster": "cl13",
    "cutoff2024": 28.0,
    "cutoff2023": 28.5,
    "field": "Medicine & Health",
    "careers": [
      "Epidemiologist",
      "Public Health Analyst",
      "Global Health Researcher"
    ],
    "demand": "high",
    "alts": [
      "Public Health",
      "Biostatistics"
    ],
    "salary": "KSh 60K\u2013160K",
    "salaryScore": 64
  },
  {
    "code": "1111551",
    "name": "B.Sc. Biostatistics",
    "uni": "University of Nairobi",
    "cluster": "cl13",
    "cutoff2024": 30.0,
    "cutoff2023": 30.5,
    "field": "Medicine & Health",
    "careers": [
      "Biostatistician",
      "Clinical Trials Analyst",
      "Health Data Scientist"
    ],
    "demand": "high",
    "alts": [
      "Statistics",
      "Epidemiology"
    ],
    "salary": "KSh 70K\u2013180K",
    "salaryScore": 68
  },
  {
    "code": "1111552",
    "name": "B.Sc. Genomics & Bioinformatics",
    "uni": "JKUAT",
    "cluster": "cl9",
    "cutoff2024": 27.5,
    "cutoff2023": 27.0,
    "field": "Pure Sciences",
    "careers": [
      "Bioinformatician",
      "Genomics Researcher",
      "Molecular Biologist"
    ],
    "demand": "med",
    "alts": [
      "Biotechnology",
      "Biochemistry"
    ],
    "salary": "KSh 65K\u2013160K",
    "salaryScore": 65
  },
  {
    "code": "1111553",
    "name": "B.Sc. Climate Change & Development",
    "uni": "Maseno University",
    "cluster": "cl15",
    "cutoff2024": 19.5,
    "cutoff2023": 20.0,
    "field": "Agriculture",
    "careers": [
      "Climate Change Analyst",
      "Sustainability Officer",
      "Environmental Policy Analyst"
    ],
    "demand": "med",
    "alts": [
      "Environmental Science",
      "Natural Resource Management"
    ],
    "salary": "KSh 55K\u2013130K",
    "salaryScore": 56
  },
  {
    "code": "1111554",
    "name": "B.Sc. Sustainable Energy",
    "uni": "Pwani University",
    "cluster": "cl5",
    "cutoff2024": 27.0,
    "cutoff2023": 26.5,
    "field": "Engineering & Tech",
    "careers": [
      "Energy Auditor",
      "Renewable Energy Consultant",
      "Solar Systems Installer"
    ],
    "demand": "high",
    "alts": [
      "Electrical Engineering",
      "Environmental Engineering"
    ],
    "salary": "KSh 65K\u2013150K",
    "salaryScore": 63
  },
  {
    "code": "1111555",
    "name": "B.Sc. Geomatics Engineering",
    "uni": "University of Nairobi",
    "cluster": "cl4",
    "cutoff2024": 33.5,
    "cutoff2023": 33.0,
    "field": "Engineering & Tech",
    "careers": [
      "Surveyor",
      "GIS Analyst",
      "Mapping Specialist"
    ],
    "demand": "high",
    "alts": [
      "Geospatial Engineering",
      "Civil Engineering"
    ],
    "salary": "KSh 65K\u2013160K",
    "salaryScore": 63
  },
  {
    "code": "1111556",
    "name": "B.Sc. Applied Bioengineering",
    "uni": "JKUAT",
    "cluster": "cl5",
    "cutoff2024": 32.0,
    "cutoff2023": 31.5,
    "field": "Engineering & Tech",
    "careers": [
      "Biomedical Researcher",
      "Bioprocess Engineer",
      "Biotechnology Applications Engineer"
    ],
    "demand": "med",
    "alts": [
      "Biomedical Engineering",
      "Biotechnology"
    ],
    "salary": "KSh 70K\u2013170K",
    "salaryScore": 66
  },
  {
    "code": "1111557",
    "name": "B.Sc. Industrial Chemistry",
    "uni": "Kenyatta University",
    "cluster": "cl9",
    "cutoff2024": 24.0,
    "cutoff2023": 24.5,
    "field": "Pure Sciences",
    "careers": [
      "Industrial Chemist",
      "Quality Assurance Manager",
      "Chemical Plant Operator"
    ],
    "demand": "med",
    "alts": [
      "Chemistry",
      "Analytical Chemistry"
    ],
    "salary": "KSh 55K\u2013130K",
    "salaryScore": 56
  },
  {
    "code": "1111558",
    "name": "B.Sc. Marine Biology & Fisheries",
    "uni": "Pwani University",
    "cluster": "cl15",
    "cutoff2024": 22.0,
    "cutoff2023": 22.5,
    "field": "Agriculture",
    "careers": [
      "Marine Biologist",
      "Oceanographer",
      "Fisheries Researcher"
    ],
    "demand": "med",
    "alts": [
      "Fisheries & Aquaculture",
      "Marine Science"
    ],
    "salary": "KSh 50K\u2013120K",
    "salaryScore": 54
  },
  {
    "code": "1111559",
    "name": "B.Sc. Conflict Resolution & Humanitarian Assistance",
    "uni": "Maseno University",
    "cluster": "cl3",
    "cutoff2024": 22.0,
    "cutoff2023": 22.5,
    "field": "Arts & Social",
    "careers": [
      "Humanitarian Aid Worker",
      "Peace Officer",
      "NGO Programme Manager"
    ],
    "demand": "med",
    "alts": [
      "International Relations",
      "Sociology"
    ],
    "salary": "KSh 60K\u2013160K",
    "salaryScore": 62
  },
  {
    "code": "1111560",
    "name": "B.Sc. Health Records & Informatics",
    "uni": "Kenyatta University",
    "cluster": "cl13",
    "cutoff2024": 26.5,
    "cutoff2023": 27.0,
    "field": "Medicine & Health",
    "careers": [
      "Health Records Manager",
      "Medical Informatics Officer",
      "Clinical Data Analyst"
    ],
    "demand": "high",
    "alts": [
      "IT",
      "Public Health"
    ],
    "salary": "KSh 55K\u2013130K",
    "salaryScore": 58
  },
  {
    "code": "1111561",
    "name": "B.Sc. Nuclear & Radiation Science",
    "uni": "University of Nairobi",
    "cluster": "cl5",
    "cutoff2024": 35.0,
    "cutoff2023": 34.5,
    "field": "Engineering & Tech",
    "careers": [
      "Nuclear Scientist",
      "Radiation Safety Officer",
      "Medical Physicist"
    ],
    "demand": "med",
    "alts": [
      "Physics",
      "Biomedical Engineering"
    ],
    "salary": "KSh 80K\u2013200K",
    "salaryScore": 72
  },
  {
    "code": "1111562",
    "name": "B.Sc. Game Development",
    "uni": "Multimedia University",
    "cluster": "cl7",
    "cutoff2024": 31.5,
    "cutoff2023": 31.0,
    "field": "Computing & IT",
    "careers": [
      "Game Developer",
      "UI/UX Designer",
      "Interactive Media Designer"
    ],
    "demand": "med",
    "alts": [
      "Computer Science",
      "IT"
    ],
    "salary": "KSh 60K\u2013200K",
    "salaryScore": 68
  },
  {
    "code": "1111563",
    "name": "B.Sc. Blockchain & FinTech",
    "uni": "Strathmore University",
    "cluster": "cl7",
    "cutoff2024": 35.0,
    "cutoff2023": 34.0,
    "field": "Computing & IT",
    "careers": [
      "Blockchain Developer",
      "FinTech Engineer",
      "Crypto Analyst"
    ],
    "demand": "high",
    "alts": [
      "Computer Science",
      "Finance"
    ],
    "salary": "KSh 90K\u2013350K",
    "salaryScore": 87
  },
  {
    "code": "2601131",
    "name": "Bachelor of Medicine & Surgery (MBChB)",
    "uni": "Kabarak University",
    "cluster": "cl13",
    "cutoff2024": 42.8,
    "cutoff2023": 42.3,
    "field": "Medicine & Health",
    "careers": [
      "Medical Doctor",
      "Surgeon"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 150K\u2013400K",
    "salaryScore": 60
  },
  {
    "code": "2601134",
    "name": "Bachelor of Laws (LLB)",
    "uni": "Kabarak University",
    "cluster": "cl1",
    "cutoff2024": 38.5,
    "cutoff2023": 37.9,
    "field": "Business & Law",
    "careers": [
      "Advocate",
      "Legal Consultant",
      "Corporate Lawyer"
    ],
    "demand": "med",
    "alts": [],
    "salary": "KSh 80K\u2013400K",
    "salaryScore": 60
  },
  {
    "code": "2601115",
    "name": "B.Sc. Computer Science",
    "uni": "Kabarak University",
    "cluster": "cl7",
    "cutoff2024": 36.2,
    "cutoff2023": 35.8,
    "field": "Computing & IT",
    "careers": [
      "Software Developer",
      "Systems Analyst",
      "IT Manager"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 80K\u2013300K",
    "salaryScore": 60
  },
  {
    "code": "2601133",
    "name": "Bachelor of Commerce",
    "uni": "Kabarak University",
    "cluster": "cl2",
    "cutoff2024": 28.5,
    "cutoff2023": 27.9,
    "field": "Business & Law",
    "careers": [
      "Accountant",
      "Finance Manager",
      "Business Analyst"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 55K\u2013180K",
    "salaryScore": 60
  },
  {
    "code": "2601160",
    "name": "B.Sc. Nursing",
    "uni": "Kabarak University",
    "cluster": "cl13",
    "cutoff2024": 40.5,
    "cutoff2023": 40.0,
    "field": "Medicine & Health",
    "careers": [
      "Registered Nurse",
      "ICU Nurse",
      "Midwife"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 50K\u2013130K",
    "salaryScore": 60
  },
  {
    "code": "2601200",
    "name": "Bachelor of Education (Arts)",
    "uni": "Kabarak University",
    "cluster": "cl3",
    "cutoff2024": 26.0,
    "cutoff2023": 25.5,
    "field": "Education",
    "careers": [
      "Arts Teacher",
      "Head Teacher",
      "Education Officer"
    ],
    "demand": "med",
    "alts": [],
    "salary": "KSh 38K\u2013100K",
    "salaryScore": 60
  },
  {
    "code": "1601115",
    "name": "B.Sc. Computer Science",
    "uni": "South Eastern Kenya University",
    "cluster": "cl7",
    "cutoff2024": 28.0,
    "cutoff2023": 27.5,
    "field": "Computing & IT",
    "careers": [
      "Software Developer",
      "IT Specialist",
      "Web Developer"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 60K\u2013200K",
    "salaryScore": 60
  },
  {
    "code": "1601116",
    "name": "B.Sc. Civil Engineering",
    "uni": "South Eastern Kenya University",
    "cluster": "cl5",
    "cutoff2024": 35.5,
    "cutoff2023": 35.0,
    "field": "Engineering & Tech",
    "careers": [
      "Civil Engineer",
      "Project Manager",
      "Structural Engineer"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 75K\u2013220K",
    "salaryScore": 60
  },
  {
    "code": "1601133",
    "name": "Bachelor of Commerce",
    "uni": "South Eastern Kenya University",
    "cluster": "cl2",
    "cutoff2024": 24.0,
    "cutoff2023": 23.5,
    "field": "Business & Law",
    "careers": [
      "Accountant",
      "Business Analyst"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 45K\u2013140K",
    "salaryScore": 60
  },
  {
    "code": "1601134",
    "name": "Bachelor of Laws (LLB)",
    "uni": "South Eastern Kenya University",
    "cluster": "cl1",
    "cutoff2024": 35.0,
    "cutoff2023": 34.5,
    "field": "Business & Law",
    "careers": [
      "Advocate",
      "Legal Practitioner"
    ],
    "demand": "med",
    "alts": [],
    "salary": "KSh 70K\u2013350K",
    "salaryScore": 60
  },
  {
    "code": "1601137",
    "name": "Bachelor of Education (Science)",
    "uni": "South Eastern Kenya University",
    "cluster": "cl9",
    "cutoff2024": 32.0,
    "cutoff2023": 31.5,
    "field": "Education",
    "careers": [
      "Science Teacher",
      "Curriculum Developer"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 38K\u2013100K",
    "salaryScore": 60
  },
  {
    "code": "1601122",
    "name": "B.Sc. Agriculture",
    "uni": "South Eastern Kenya University",
    "cluster": "cl15",
    "cutoff2024": 15.5,
    "cutoff2023": 20.0,
    "field": "Agriculture",
    "careers": [
      "Agronomist",
      "Extension Officer",
      "Farm Manager"
    ],
    "demand": "med",
    "alts": [],
    "salary": "KSh 38K\u2013110K",
    "salaryScore": 60
  },
  {
    "code": "1801131",
    "name": "Bachelor of Medicine & Surgery (MBChB)",
    "uni": "Kisii University",
    "cluster": "cl13",
    "cutoff2024": 43.0,
    "cutoff2023": 42.5,
    "field": "Medicine & Health",
    "careers": [
      "Medical Doctor",
      "Surgeon"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 150K\u2013400K",
    "salaryScore": 60
  },
  {
    "code": "1801134",
    "name": "Bachelor of Laws (LLB)",
    "uni": "Kisii University",
    "cluster": "cl1",
    "cutoff2024": 36.5,
    "cutoff2023": 36.0,
    "field": "Business & Law",
    "careers": [
      "Advocate",
      "Legal Adviser",
      "State Counsel"
    ],
    "demand": "med",
    "alts": [],
    "salary": "KSh 75K\u2013380K",
    "salaryScore": 60
  },
  {
    "code": "1801115",
    "name": "B.Sc. Computer Science",
    "uni": "Kisii University",
    "cluster": "cl7",
    "cutoff2024": 29.5,
    "cutoff2023": 29.0,
    "field": "Computing & IT",
    "careers": [
      "Software Developer",
      "Systems Analyst"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 65K\u2013250K",
    "salaryScore": 60
  },
  {
    "code": "1801117",
    "name": "B.Sc. Electrical Engineering",
    "uni": "Kisii University",
    "cluster": "cl5",
    "cutoff2024": 36.0,
    "cutoff2023": 35.5,
    "field": "Engineering & Tech",
    "careers": [
      "Electrical Engineer",
      "Power Systems Engineer"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 80K\u2013230K",
    "salaryScore": 60
  },
  {
    "code": "1801133",
    "name": "Bachelor of Commerce",
    "uni": "Kisii University",
    "cluster": "cl2",
    "cutoff2024": 24.5,
    "cutoff2023": 24.0,
    "field": "Business & Law",
    "careers": [
      "Accountant",
      "Business Analyst",
      "Finance Manager"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 45K\u2013140K",
    "salaryScore": 60
  },
  {
    "code": "1801137",
    "name": "Bachelor of Education (Science)",
    "uni": "Kisii University",
    "cluster": "cl9",
    "cutoff2024": 31.0,
    "cutoff2023": 30.5,
    "field": "Education",
    "careers": [
      "Science Teacher",
      "Curriculum Developer"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 38K\u2013100K",
    "salaryScore": 60
  },
  {
    "code": "1801160",
    "name": "B.Sc. Nursing",
    "uni": "Kisii University",
    "cluster": "cl13",
    "cutoff2024": 39.5,
    "cutoff2023": 39.0,
    "field": "Medicine & Health",
    "careers": [
      "Registered Nurse",
      "Midwife"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 50K\u2013130K",
    "salaryScore": 60
  },
  {
    "code": "1801232",
    "name": "Bachelor of Information Technology",
    "uni": "Kisii University",
    "cluster": "cl7",
    "cutoff2024": 25.0,
    "cutoff2023": 24.5,
    "field": "Computing & IT",
    "careers": [
      "IT Specialist",
      "Network Admin",
      "Systems Administrator"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 55K\u2013180K",
    "salaryScore": 60
  },
  {
    "code": "1901115",
    "name": "B.Sc. Computer Science",
    "uni": "Chuka University",
    "cluster": "cl7",
    "cutoff2024": 25.5,
    "cutoff2023": 25.0,
    "field": "Computing & IT",
    "careers": [
      "Software Developer",
      "IT Specialist"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 60K\u2013200K",
    "salaryScore": 60
  },
  {
    "code": "1901133",
    "name": "Bachelor of Commerce",
    "uni": "Chuka University",
    "cluster": "cl2",
    "cutoff2024": 22.5,
    "cutoff2023": 22.0,
    "field": "Business & Law",
    "careers": [
      "Accountant",
      "Finance Officer",
      "Business Analyst"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 42K\u2013130K",
    "salaryScore": 60
  },
  {
    "code": "1901137",
    "name": "Bachelor of Education (Arts)",
    "uni": "Chuka University",
    "cluster": "cl3",
    "cutoff2024": 23.0,
    "cutoff2023": 22.5,
    "field": "Education",
    "careers": [
      "Arts Teacher",
      "Head Teacher"
    ],
    "demand": "med",
    "alts": [],
    "salary": "KSh 35K\u201395K",
    "salaryScore": 60
  },
  {
    "code": "1901122",
    "name": "B.Sc. Agriculture",
    "uni": "Chuka University",
    "cluster": "cl15",
    "cutoff2024": 15.0,
    "cutoff2023": 18.5,
    "field": "Agriculture",
    "careers": [
      "Agronomist",
      "Extension Officer"
    ],
    "demand": "med",
    "alts": [],
    "salary": "KSh 36K\u2013110K",
    "salaryScore": 60
  },
  {
    "code": "1901160",
    "name": "B.Sc. Nursing",
    "uni": "Chuka University",
    "cluster": "cl13",
    "cutoff2024": 38.0,
    "cutoff2023": 37.5,
    "field": "Medicine & Health",
    "careers": [
      "Registered Nurse",
      "Community Health Nurse"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 48K\u2013125K",
    "salaryScore": 60
  },
  {
    "code": "2001131",
    "name": "Bachelor of Medicine & Surgery (MBChB)",
    "uni": "Mount Kenya University",
    "cluster": "cl13",
    "cutoff2024": 42.0,
    "cutoff2023": 41.5,
    "field": "Medicine & Health",
    "careers": [
      "Medical Doctor",
      "Surgeon",
      "Consultant"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 150K\u2013400K",
    "salaryScore": 60
  },
  {
    "code": "2001129",
    "name": "Bachelor of Pharmacy",
    "uni": "Mount Kenya University",
    "cluster": "cl13",
    "cutoff2024": 41.5,
    "cutoff2023": 41.0,
    "field": "Medicine & Health",
    "careers": [
      "Pharmacist",
      "Clinical Pharmacist",
      "Drug Researcher"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 80K\u2013200K",
    "salaryScore": 60
  },
  {
    "code": "2001115",
    "name": "B.Sc. Computer Science",
    "uni": "Mount Kenya University",
    "cluster": "cl7",
    "cutoff2024": 30.0,
    "cutoff2023": 29.5,
    "field": "Computing & IT",
    "careers": [
      "Software Developer",
      "Data Scientist",
      "IT Architect"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 70K\u2013280K",
    "salaryScore": 60
  },
  {
    "code": "2001134",
    "name": "Bachelor of Laws (LLB)",
    "uni": "Mount Kenya University",
    "cluster": "cl1",
    "cutoff2024": 34.5,
    "cutoff2023": 34.0,
    "field": "Business & Law",
    "careers": [
      "Advocate",
      "Corporate Lawyer",
      "Legal Consultant"
    ],
    "demand": "med",
    "alts": [],
    "salary": "KSh 75K\u2013380K",
    "salaryScore": 60
  },
  {
    "code": "2001133",
    "name": "Bachelor of Commerce",
    "uni": "Mount Kenya University",
    "cluster": "cl2",
    "cutoff2024": 26.0,
    "cutoff2023": 25.5,
    "field": "Business & Law",
    "careers": [
      "Accountant",
      "Finance Manager",
      "Business Analyst"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 48K\u2013150K",
    "salaryScore": 60
  },
  {
    "code": "2001116",
    "name": "B.Sc. Civil Engineering",
    "uni": "Mount Kenya University",
    "cluster": "cl5",
    "cutoff2024": 34.0,
    "cutoff2023": 33.5,
    "field": "Engineering & Tech",
    "careers": [
      "Civil Engineer",
      "Structural Engineer",
      "Project Manager"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 75K\u2013210K",
    "salaryScore": 60
  },
  {
    "code": "2001160",
    "name": "B.Sc. Nursing",
    "uni": "Mount Kenya University",
    "cluster": "cl13",
    "cutoff2024": 40.0,
    "cutoff2023": 39.5,
    "field": "Medicine & Health",
    "careers": [
      "Registered Nurse",
      "Midwife",
      "ICU Nurse"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 50K\u2013130K",
    "salaryScore": 60
  },
  {
    "code": "2001137",
    "name": "Bachelor of Education (Science)",
    "uni": "Mount Kenya University",
    "cluster": "cl9",
    "cutoff2024": 30.5,
    "cutoff2023": 30.0,
    "field": "Education",
    "careers": [
      "Science Teacher",
      "Curriculum Developer"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 38K\u2013100K",
    "salaryScore": 60
  },
  {
    "code": "2101115",
    "name": "B.Sc. Computer Science",
    "uni": "Jaramogi Oginga Odinga University",
    "cluster": "cl7",
    "cutoff2024": 27.5,
    "cutoff2023": 27.0,
    "field": "Computing & IT",
    "careers": [
      "Software Developer",
      "IT Specialist",
      "Systems Analyst"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 60K\u2013200K",
    "salaryScore": 60
  },
  {
    "code": "2101116",
    "name": "B.Sc. Civil Engineering",
    "uni": "Jaramogi Oginga Odinga University",
    "cluster": "cl5",
    "cutoff2024": 34.5,
    "cutoff2023": 34.0,
    "field": "Engineering & Tech",
    "careers": [
      "Civil Engineer",
      "Project Manager"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 72K\u2013200K",
    "salaryScore": 60
  },
  {
    "code": "2101133",
    "name": "Bachelor of Commerce",
    "uni": "Jaramogi Oginga Odinga University",
    "cluster": "cl2",
    "cutoff2024": 22.0,
    "cutoff2023": 21.5,
    "field": "Business & Law",
    "careers": [
      "Accountant",
      "Business Analyst"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 42K\u2013130K",
    "salaryScore": 60
  },
  {
    "code": "2101137",
    "name": "Bachelor of Education (Arts)",
    "uni": "Jaramogi Oginga Odinga University",
    "cluster": "cl3",
    "cutoff2024": 22.5,
    "cutoff2023": 22.0,
    "field": "Education",
    "careers": [
      "Arts Teacher",
      "Education Officer"
    ],
    "demand": "med",
    "alts": [],
    "salary": "KSh 35K\u201395K",
    "salaryScore": 60
  },
  {
    "code": "2101122",
    "name": "B.Sc. Agriculture",
    "uni": "Jaramogi Oginga Odinga University",
    "cluster": "cl15",
    "cutoff2024": 15.0,
    "cutoff2023": 17.5,
    "field": "Agriculture",
    "careers": [
      "Agronomist",
      "Farm Manager",
      "Extension Officer"
    ],
    "demand": "med",
    "alts": [],
    "salary": "KSh 36K\u2013110K",
    "salaryScore": 60
  },
  {
    "code": "2101200",
    "name": "B.Sc. Environmental Science",
    "uni": "Jaramogi Oginga Odinga University",
    "cluster": "cl15",
    "cutoff2024": 16.0,
    "cutoff2023": 19.0,
    "field": "Agriculture",
    "careers": [
      "Environmental Scientist",
      "Conservation Officer",
      "NEMA Officer"
    ],
    "demand": "med",
    "alts": [],
    "salary": "KSh 42K\u2013120K",
    "salaryScore": 60
  },
  {
    "code": "2201115",
    "name": "B.Sc. Computer Science",
    "uni": "Laikipia University",
    "cluster": "cl7",
    "cutoff2024": 26.0,
    "cutoff2023": 25.5,
    "field": "Computing & IT",
    "careers": [
      "Software Developer",
      "IT Specialist"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 55K\u2013180K",
    "salaryScore": 60
  },
  {
    "code": "2201133",
    "name": "Bachelor of Commerce",
    "uni": "Laikipia University",
    "cluster": "cl2",
    "cutoff2024": 21.0,
    "cutoff2023": 20.5,
    "field": "Business & Law",
    "careers": [
      "Accountant",
      "Finance Officer"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 40K\u2013120K",
    "salaryScore": 60
  },
  {
    "code": "2201137",
    "name": "Bachelor of Education (Arts)",
    "uni": "Laikipia University",
    "cluster": "cl3",
    "cutoff2024": 21.5,
    "cutoff2023": 21.0,
    "field": "Education",
    "careers": [
      "Arts Teacher",
      "Head Teacher"
    ],
    "demand": "med",
    "alts": [],
    "salary": "KSh 34K\u201390K",
    "salaryScore": 60
  },
  {
    "code": "2201122",
    "name": "B.Sc. Agriculture",
    "uni": "Laikipia University",
    "cluster": "cl15",
    "cutoff2024": 14.5,
    "cutoff2023": 17.0,
    "field": "Agriculture",
    "careers": [
      "Agronomist",
      "Extension Officer"
    ],
    "demand": "med",
    "alts": [],
    "salary": "KSh 35K\u2013105K",
    "salaryScore": 60
  },
  {
    "code": "2301133",
    "name": "Bachelor of Commerce",
    "uni": "Kenya Methodist University",
    "cluster": "cl2",
    "cutoff2024": 23.5,
    "cutoff2023": 23.0,
    "field": "Business & Law",
    "careers": [
      "Accountant",
      "Business Analyst",
      "Finance Manager"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 44K\u2013135K",
    "salaryScore": 60
  },
  {
    "code": "2301115",
    "name": "B.Sc. Computer Science",
    "uni": "Kenya Methodist University",
    "cluster": "cl7",
    "cutoff2024": 27.0,
    "cutoff2023": 26.5,
    "field": "Computing & IT",
    "careers": [
      "Software Developer",
      "IT Specialist"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 60K\u2013200K",
    "salaryScore": 60
  },
  {
    "code": "2301137",
    "name": "Bachelor of Education (Arts)",
    "uni": "Kenya Methodist University",
    "cluster": "cl3",
    "cutoff2024": 22.0,
    "cutoff2023": 21.5,
    "field": "Education",
    "careers": [
      "Arts Teacher",
      "Education Researcher"
    ],
    "demand": "med",
    "alts": [],
    "salary": "KSh 35K\u201392K",
    "salaryScore": 60
  },
  {
    "code": "2301160",
    "name": "B.Sc. Nursing",
    "uni": "Kenya Methodist University",
    "cluster": "cl13",
    "cutoff2024": 37.5,
    "cutoff2023": 37.0,
    "field": "Medicine & Health",
    "careers": [
      "Registered Nurse",
      "Midwife"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 48K\u2013125K",
    "salaryScore": 60
  },
  {
    "code": "1263500",
    "name": "B.Sc. Data Science & Analytics",
    "uni": "University of Nairobi",
    "cluster": "cl7",
    "cutoff2024": 41.5,
    "cutoff2023": 41.0,
    "field": "Computing & IT",
    "careers": [
      "Data Scientist",
      "ML Engineer",
      "Business Intelligence Analyst"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 100K\u2013400K",
    "salaryScore": 60
  },
  {
    "code": "1263501",
    "name": "B.Sc. Artificial Intelligence",
    "uni": "University of Nairobi",
    "cluster": "cl7",
    "cutoff2024": 42.0,
    "cutoff2023": 41.5,
    "field": "Computing & IT",
    "careers": [
      "AI Engineer",
      "Machine Learning Engineer",
      "AI Researcher"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 120K\u2013500K",
    "salaryScore": 60
  },
  {
    "code": "1263502",
    "name": "B.Sc. Cybersecurity",
    "uni": "University of Nairobi",
    "cluster": "cl7",
    "cutoff2024": 40.5,
    "cutoff2023": 40.0,
    "field": "Computing & IT",
    "careers": [
      "Cybersecurity Analyst",
      "Ethical Hacker",
      "InfoSec Manager"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 90K\u2013350K",
    "salaryScore": 60
  },
  {
    "code": "1263503",
    "name": "Bachelor of Urban & Regional Planning",
    "uni": "University of Nairobi",
    "cluster": "cl6",
    "cutoff2024": 35.0,
    "cutoff2023": 34.5,
    "field": "Engineering & Tech",
    "careers": [
      "Urban Planner",
      "City Planner",
      "Land Use Analyst"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 65K\u2013180K",
    "salaryScore": 60
  },
  {
    "code": "1263504",
    "name": "B.Sc. Meteorology",
    "uni": "University of Nairobi",
    "cluster": "cl4",
    "cutoff2024": 34.5,
    "cutoff2023": 34.0,
    "field": "Pure Sciences",
    "careers": [
      "Meteorologist",
      "Weather Forecaster",
      "Climate Analyst"
    ],
    "demand": "med",
    "alts": [],
    "salary": "KSh 65K\u2013160K",
    "salaryScore": 60
  },
  {
    "code": "1263505",
    "name": "B.Sc. Food Science & Technology",
    "uni": "University of Nairobi",
    "cluster": "cl15",
    "cutoff2024": 22.0,
    "cutoff2023": 21.5,
    "field": "Agriculture",
    "careers": [
      "Food Scientist",
      "Quality Assurance Officer",
      "Food Technologist"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 50K\u2013140K",
    "salaryScore": 60
  },
  {
    "code": "1111800",
    "name": "B.Sc. Data Science",
    "uni": "Kenyatta University",
    "cluster": "cl7",
    "cutoff2024": 40.0,
    "cutoff2023": 39.5,
    "field": "Computing & IT",
    "careers": [
      "Data Scientist",
      "ML Engineer",
      "Data Analyst"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 90K\u2013380K",
    "salaryScore": 60
  },
  {
    "code": "1111801",
    "name": "B.Sc. Software Engineering",
    "uni": "Kenyatta University",
    "cluster": "cl7",
    "cutoff2024": 42.0,
    "cutoff2023": 41.5,
    "field": "Computing & IT",
    "careers": [
      "Software Engineer",
      "Full-Stack Developer",
      "DevOps Engineer"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 90K\u2013350K",
    "salaryScore": 60
  },
  {
    "code": "1111802",
    "name": "Bachelor of Urban & Regional Planning",
    "uni": "Kenyatta University",
    "cluster": "cl6",
    "cutoff2024": 34.0,
    "cutoff2023": 33.5,
    "field": "Engineering & Tech",
    "careers": [
      "Urban Planner",
      "Town Planner",
      "Land Use Specialist"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 62K\u2013170K",
    "salaryScore": 60
  },
  {
    "code": "1111803",
    "name": "B.Sc. Renewable Energy Engineering",
    "uni": "Kenyatta University",
    "cluster": "cl5",
    "cutoff2024": 36.0,
    "cutoff2023": 35.5,
    "field": "Engineering & Tech",
    "careers": [
      "Renewable Energy Engineer",
      "Solar Specialist",
      "Energy Auditor"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 75K\u2013190K",
    "salaryScore": 60
  },
  {
    "code": "1111804",
    "name": "Bachelor of Film & Animation",
    "uni": "Kenyatta University",
    "cluster": "cl3",
    "cutoff2024": 24.5,
    "cutoff2023": 24.0,
    "field": "Arts & Social",
    "careers": [
      "Film Producer",
      "Animator",
      "Creative Director",
      "VFX Artist"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 50K\u2013220K",
    "salaryScore": 60
  },
  {
    "code": "1111805",
    "name": "B.Sc. Statistics",
    "uni": "Kenyatta University",
    "cluster": "cl10",
    "cutoff2024": 28.0,
    "cutoff2023": 27.5,
    "field": "Pure Sciences",
    "careers": [
      "Statistician",
      "Data Analyst",
      "Research Scientist"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 60K\u2013190K",
    "salaryScore": 60
  },
  {
    "code": "1111806",
    "name": "B.Sc. Pharmacy (Revised)",
    "uni": "Kenyatta University",
    "cluster": "cl13",
    "cutoff2024": 43.8,
    "cutoff2023": 43.4,
    "field": "Medicine & Health",
    "careers": [
      "Pharmacist",
      "Clinical Pharmacist",
      "Drug Researcher"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 80K\u2013200K",
    "salaryScore": 60
  },
  {
    "code": "1301500",
    "name": "B.Sc. Data Science & Analytics",
    "uni": "JKUAT",
    "cluster": "cl7",
    "cutoff2024": 39.5,
    "cutoff2023": 39.0,
    "field": "Computing & IT",
    "careers": [
      "Data Scientist",
      "ML Engineer",
      "Business Intelligence"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 90K\u2013380K",
    "salaryScore": 60
  },
  {
    "code": "1301501",
    "name": "B.Sc. Artificial Intelligence",
    "uni": "JKUAT",
    "cluster": "cl7",
    "cutoff2024": 40.5,
    "cutoff2023": 40.0,
    "field": "Computing & IT",
    "careers": [
      "AI Engineer",
      "NLP Researcher",
      "ML Engineer"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 110K\u2013480K",
    "salaryScore": 60
  },
  {
    "code": "1301502",
    "name": "B.Sc. Software Engineering",
    "uni": "JKUAT",
    "cluster": "cl7",
    "cutoff2024": 41.5,
    "cutoff2023": 41.0,
    "field": "Computing & IT",
    "careers": [
      "Software Engineer",
      "App Developer",
      "DevOps"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 88K\u2013340K",
    "salaryScore": 60
  },
  {
    "code": "1301116",
    "name": "B.Sc. Electrical Engineering",
    "uni": "JKUAT",
    "cluster": "cl5",
    "cutoff2024": 41.5,
    "cutoff2023": 41.0,
    "field": "Engineering & Tech",
    "careers": [
      "Electrical Engineer",
      "Power Engineer",
      "Electronics Engineer"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 85K\u2013240K",
    "salaryScore": 60
  },
  {
    "code": "1301503",
    "name": "Bachelor of Architecture",
    "uni": "JKUAT",
    "cluster": "cl6",
    "cutoff2024": 40.0,
    "cutoff2023": 39.5,
    "field": "Engineering & Tech",
    "careers": [
      "Architect",
      "Urban Designer",
      "Landscape Architect"
    ],
    "demand": "med",
    "alts": [],
    "salary": "KSh 78K\u2013200K",
    "salaryScore": 60
  },
  {
    "code": "1301504",
    "name": "B.Sc. Telecommunications Engineering",
    "uni": "JKUAT",
    "cluster": "cl5",
    "cutoff2024": 38.0,
    "cutoff2023": 37.5,
    "field": "Engineering & Tech",
    "careers": [
      "Telecom Engineer",
      "Network Engineer",
      "5G Specialist"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 82K\u2013220K",
    "salaryScore": 60
  },
  {
    "code": "1370500",
    "name": "Bachelor of Laws (LLB)",
    "uni": "Strathmore University",
    "cluster": "cl1",
    "cutoff2024": 41.0,
    "cutoff2023": 40.5,
    "field": "Business & Law",
    "careers": [
      "Advocate",
      "Corporate Lawyer",
      "Legal Consultant"
    ],
    "demand": "med",
    "alts": [],
    "salary": "KSh 90K\u2013500K",
    "salaryScore": 60
  },
  {
    "code": "1370501",
    "name": "B.Sc. Financial Engineering",
    "uni": "Strathmore University",
    "cluster": "cl10",
    "cutoff2024": 38.5,
    "cutoff2023": 38.0,
    "field": "Business & Law",
    "careers": [
      "Financial Engineer",
      "Quant Analyst",
      "Risk Manager"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 100K\u2013400K",
    "salaryScore": 60
  },
  {
    "code": "1370502",
    "name": "Bachelor of Commerce",
    "uni": "Strathmore University",
    "cluster": "cl2",
    "cutoff2024": 35.5,
    "cutoff2023": 35.0,
    "field": "Business & Law",
    "careers": [
      "Business Analyst",
      "Finance Manager",
      "Accountant"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 65K\u2013220K",
    "salaryScore": 60
  },
  {
    "code": "1370503",
    "name": "B.Sc. Information Systems",
    "uni": "Strathmore University",
    "cluster": "cl7",
    "cutoff2024": 38.0,
    "cutoff2023": 37.5,
    "field": "Computing & IT",
    "careers": [
      "IT Manager",
      "Business Systems Analyst",
      "ERP Consultant"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 75K\u2013250K",
    "salaryScore": 60
  },
  {
    "code": "1181500",
    "name": "B.Sc. Computer Science",
    "uni": "Moi University",
    "cluster": "cl7",
    "cutoff2024": 35.0,
    "cutoff2023": 34.5,
    "field": "Computing & IT",
    "careers": [
      "Software Developer",
      "Systems Analyst",
      "IT Specialist"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 70K\u2013270K",
    "salaryScore": 60
  },
  {
    "code": "1181501",
    "name": "B.Sc. Civil Engineering",
    "uni": "Moi University",
    "cluster": "cl5",
    "cutoff2024": 39.5,
    "cutoff2023": 39.0,
    "field": "Engineering & Tech",
    "careers": [
      "Civil Engineer",
      "Structural Engineer",
      "Roads Engineer"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 78K\u2013220K",
    "salaryScore": 60
  },
  {
    "code": "1181502",
    "name": "Bachelor of Architecture",
    "uni": "Moi University",
    "cluster": "cl6",
    "cutoff2024": 38.5,
    "cutoff2023": 38.0,
    "field": "Engineering & Tech",
    "careers": [
      "Architect",
      "Urban Planner",
      "Interior Designer"
    ],
    "demand": "med",
    "alts": [],
    "salary": "KSh 75K\u2013195K",
    "salaryScore": 60
  },
  {
    "code": "1181503",
    "name": "B.Sc. Nursing",
    "uni": "Moi University",
    "cluster": "cl13",
    "cutoff2024": 41.5,
    "cutoff2023": 41.0,
    "field": "Medicine & Health",
    "careers": [
      "Registered Nurse",
      "ICU Nurse",
      "Midwife"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 50K\u2013130K",
    "salaryScore": 60
  },
  {
    "code": "1401115",
    "name": "B.Sc. Computer Science",
    "uni": "Maseno University",
    "cluster": "cl7",
    "cutoff2024": 30.5,
    "cutoff2023": 30.0,
    "field": "Computing & IT",
    "careers": [
      "Software Developer",
      "IT Specialist"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 62K\u2013210K",
    "salaryScore": 60
  },
  {
    "code": "1401116",
    "name": "B.Sc. Civil Engineering",
    "uni": "Maseno University",
    "cluster": "cl5",
    "cutoff2024": 35.0,
    "cutoff2023": 34.5,
    "field": "Engineering & Tech",
    "careers": [
      "Civil Engineer",
      "Project Manager"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 72K\u2013200K",
    "salaryScore": 60
  },
  {
    "code": "1401131",
    "name": "Bachelor of Medicine & Surgery (MBChB)",
    "uni": "Maseno University",
    "cluster": "cl13",
    "cutoff2024": 42.5,
    "cutoff2023": 42.0,
    "field": "Medicine & Health",
    "careers": [
      "Medical Doctor",
      "Surgeon",
      "Consultant"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 150K\u2013400K",
    "salaryScore": 60
  },
  {
    "code": "1401133",
    "name": "Bachelor of Commerce",
    "uni": "Maseno University",
    "cluster": "cl2",
    "cutoff2024": 24.0,
    "cutoff2023": 23.5,
    "field": "Business & Law",
    "careers": [
      "Accountant",
      "Business Analyst"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 44K\u2013135K",
    "salaryScore": 60
  },
  {
    "code": "1057500",
    "name": "B.Sc. Computer Science",
    "uni": "Egerton University",
    "cluster": "cl7",
    "cutoff2024": 28.5,
    "cutoff2023": 28.0,
    "field": "Computing & IT",
    "careers": [
      "Software Developer",
      "IT Specialist"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 60K\u2013200K",
    "salaryScore": 60
  },
  {
    "code": "1057501",
    "name": "B.Sc. Civil Engineering",
    "uni": "Egerton University",
    "cluster": "cl5",
    "cutoff2024": 35.5,
    "cutoff2023": 35.0,
    "field": "Engineering & Tech",
    "careers": [
      "Civil Engineer",
      "Agricultural Engineer"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 72K\u2013200K",
    "salaryScore": 60
  },
  {
    "code": "1057502",
    "name": "Bachelor of Commerce",
    "uni": "Egerton University",
    "cluster": "cl2",
    "cutoff2024": 23.5,
    "cutoff2023": 23.0,
    "field": "Business & Law",
    "careers": [
      "Accountant",
      "Business Analyst"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 43K\u2013130K",
    "salaryScore": 60
  },
  {
    "code": "1057503",
    "name": "B.Sc. Veterinary Medicine",
    "uni": "Egerton University",
    "cluster": "cl13",
    "cutoff2024": 40.5,
    "cutoff2023": 40.0,
    "field": "Medicine & Health",
    "careers": [
      "Veterinarian",
      "Animal Health Officer",
      "Wildlife Vet"
    ],
    "demand": "med",
    "alts": [],
    "salary": "KSh 70K\u2013170K",
    "salaryScore": 60
  },
  {
    "code": "1057504",
    "name": "B.Sc. Renewable Energy",
    "uni": "Egerton University",
    "cluster": "cl5",
    "cutoff2024": 32.0,
    "cutoff2023": 31.5,
    "field": "Engineering & Tech",
    "careers": [
      "Renewable Energy Engineer",
      "Solar Specialist",
      "Energy Auditor"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 68K\u2013175K",
    "salaryScore": 60
  },
  {
    "code": "1501500",
    "name": "B.Sc. Software Engineering",
    "uni": "Multimedia University",
    "cluster": "cl7",
    "cutoff2024": 35.5,
    "cutoff2023": 35.0,
    "field": "Computing & IT",
    "careers": [
      "Software Engineer",
      "App Developer",
      "Web Developer"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 78K\u2013300K",
    "salaryScore": 60
  },
  {
    "code": "1501501",
    "name": "B.Sc. Cybersecurity",
    "uni": "Multimedia University",
    "cluster": "cl7",
    "cutoff2024": 34.0,
    "cutoff2023": 33.5,
    "field": "Computing & IT",
    "careers": [
      "Cybersecurity Analyst",
      "Ethical Hacker",
      "Security Consultant"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 85K\u2013320K",
    "salaryScore": 60
  },
  {
    "code": "1501502",
    "name": "Bachelor of Journalism & Media",
    "uni": "Multimedia University",
    "cluster": "cl3",
    "cutoff2024": 26.0,
    "cutoff2023": 25.5,
    "field": "Arts & Social",
    "careers": [
      "Journalist",
      "Broadcaster",
      "Digital Media Producer"
    ],
    "demand": "med",
    "alts": [],
    "salary": "KSh 45K\u2013150K",
    "salaryScore": 60
  },
  {
    "code": "1501503",
    "name": "B.Sc. Data Science",
    "uni": "Multimedia University",
    "cluster": "cl7",
    "cutoff2024": 35.0,
    "cutoff2023": 34.5,
    "field": "Computing & IT",
    "careers": [
      "Data Scientist",
      "ML Engineer",
      "Data Analyst"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 88K\u2013360K",
    "salaryScore": 60
  },
  {
    "code": "1701500",
    "name": "B.Sc. International Business",
    "uni": "USIU-Africa",
    "cluster": "cl2",
    "cutoff2024": 32.0,
    "cutoff2023": 31.5,
    "field": "Business & Law",
    "careers": [
      "International Trade Specialist",
      "Business Manager",
      "Export Manager"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 70K\u2013250K",
    "salaryScore": 60
  },
  {
    "code": "1701501",
    "name": "B.Sc. Journalism & Mass Communication",
    "uni": "USIU-Africa",
    "cluster": "cl3",
    "cutoff2024": 30.0,
    "cutoff2023": 29.5,
    "field": "Arts & Social",
    "careers": [
      "Journalist",
      "News Anchor",
      "PR Specialist"
    ],
    "demand": "med",
    "alts": [],
    "salary": "KSh 48K\u2013160K",
    "salaryScore": 60
  },
  {
    "code": "1701502",
    "name": "B.Sc. Software Engineering",
    "uni": "USIU-Africa",
    "cluster": "cl7",
    "cutoff2024": 38.5,
    "cutoff2023": 38.0,
    "field": "Computing & IT",
    "careers": [
      "Software Engineer",
      "Full-Stack Developer",
      "CTO"
    ],
    "demand": "high",
    "alts": [],
    "salary": "KSh 90K\u2013380K",
    "salaryScore": 60
  }
];

const UNIVERSITIES = [
[
  {
    "name": "Kenyatta University",
    "type": "Public",
    "location": "Nairobi",
    "founded": 1985,
    "website": "kenyatta.ac.ke"
  },
  {
    "name": "University of Nairobi",
    "type": "Public",
    "location": "Nairobi",
    "founded": 1970,
    "website": "ofnairob.ac.ke"
  },
  {
    "name": "Moi University",
    "type": "Public",
    "location": "Eldoret",
    "founded": 1984,
    "website": "moi.ac.ke"
  },
  {
    "name": "JKUAT",
    "type": "Public",
    "location": "Juja",
    "founded": 1994,
    "website": "jkuat.ac.ke"
  },
  {
    "name": "Kenya Maritime Authority",
    "type": "Public",
    "location": "Mombasa",
    "founded": 1968,
    "website": "kenyamar.ac.ke"
  },
  {
    "name": "Dedan Kimathi University",
    "type": "Public",
    "location": "Nyeri",
    "founded": 2012,
    "website": "dedankim.ac.ke"
  },
  {
    "name": "Egerton University",
    "type": "Public",
    "location": "Nakuru",
    "founded": 1939,
    "website": "egerton.ac.ke"
  },
  {
    "name": "Strathmore University",
    "type": "Private",
    "location": "Nairobi",
    "founded": 2002,
    "website": "strathmo.ac.ke"
  },
  {
    "name": "Multimedia University",
    "type": "Public",
    "location": "Nairobi",
    "founded": 2013,
    "website": "multimed.ac.ke"
  },
  {
    "name": "USIU-Africa",
    "type": "Private",
    "location": "Nairobi",
    "founded": 1969,
    "website": "usiu-afr.ac.ke"
  },
  {
    "name": "KCA University",
    "type": "Private",
    "location": "Nairobi",
    "founded": 2007,
    "website": "kca.ac.ke"
  },
  {
    "name": "Co-operative University",
    "type": "Public",
    "location": "Karen",
    "founded": 2015,
    "website": "co-opera.ac.ke"
  },
  {
    "name": "Daystar University",
    "type": "Private",
    "location": "Nairobi",
    "founded": 1994,
    "website": "daystar.ac.ke"
  },
  {
    "name": "Maseno University",
    "type": "Public",
    "location": "Kisumu",
    "founded": 2001,
    "website": "maseno.ac.ke"
  },
  {
    "name": "Masinde Muliro University",
    "type": "Public",
    "location": "Kakamega",
    "founded": 2007,
    "website": "masindem.ac.ke"
  },
  {
    "name": "Pwani University",
    "type": "Public",
    "location": "Kilifi",
    "founded": 2007,
    "website": "pwani.ac.ke"
  },
  {
    "name": "Kabarak University",
    "type": "Private",
    "location": "Nakuru",
    "founded": 2008,
    "website": "kabarak.ac.ke"
  },
  {
    "name": "South Eastern Kenya University",
    "type": "Public",
    "location": "Kitui",
    "founded": 2013,
    "website": "southeas.ac.ke"
  },
  {
    "name": "Kisii University",
    "type": "Public",
    "location": "Kisii",
    "founded": 2007,
    "website": "kisii.ac.ke"
  },
  {
    "name": "Chuka University",
    "type": "Public",
    "location": "Chuka",
    "founded": 2011,
    "website": "chuka.ac.ke"
  },
  {
    "name": "Mount Kenya University",
    "type": "Private",
    "location": "Thika",
    "founded": 2008,
    "website": "mountken.ac.ke"
  },
  {
    "name": "Jaramogi Oginga Odinga University",
    "type": "Public",
    "location": "Bondo",
    "founded": 2009,
    "website": "jaramogi.ac.ke"
  },
  {
    "name": "Laikipia University",
    "type": "Public",
    "location": "Nyahururu",
    "founded": 2011,
    "website": "laikipia.ac.ke"
  },
  {
    "name": "Kenya Methodist University",
    "type": "Private",
    "location": "Meru",
    "founded": 2006,
    "website": "kenyamet.ac.ke"
  }
]
];


async function main() {
  console.log('Seeding EduPath database…');

  // ── Clear existing data ──
  await prisma.importRecord.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.aiMessage.deleteMany();
  await prisma.session.deleteMany();
  await prisma.course.deleteMany();
  await prisma.university.deleteMany();
  await prisma.admin.deleteMany();

  // ── Seed universities ──
  for (const uni of UNIVERSITIES) {
    await prisma.university.create({ data: uni });
  }
  console.log(`✅ Seeded ${UNIVERSITIES.length} universities`);

  // ── Seed courses ──
  for (const course of COURSES) {
    await prisma.course.create({ data: course });
  }
  console.log(`✅ Seeded ${COURSES.length} courses`);

  // ── Seed admin user ──
  const passwordHash = await bcrypt.hash(
    process.env.ADMIN_PASSWORD || 'Edu2026', 12
  );
  await prisma.admin.create({
    data: {
      email:    process.env.ADMIN_EMAIL || 'edupath@2026',
      passwordHash,
      name:     process.env.ADMIN_NAME  || 'EduPath Admin',
      role:     'Super Admin',
      initials: 'EA',
      active:   true,
    }
  });
  console.log('✅ Seeded admin user');

  console.log('\n🎉 Database seeded successfully!');
  console.log(`   Courses: ${COURSES.length}`);
  console.log(`   Universities: ${UNIVERSITIES.length}`);
  console.log('   Admin: edupath@2026 / Edu2026');
}

main()
  .catch(e => { console.error('Seed error:', e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });

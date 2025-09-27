import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/eyecare.jpg";
import rmtdevImg from "@/public/Surat-Desa.png";
import wordanalyticsImg from "@/public/lautsista.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Alturian Indonesia",
    description:
      "Bekerja sebagai Software Engineer di Alturian Indonesia, mengembangkan aplikasi full-stack menggunakan Laravel (backend) dan Angular (frontend). Tanggung jawab meliputi merancang dan mengelola RESTful API, mengoptimalkan performa aplikasi, serta mengimplementasikan fitur strategis seperti e-Invoicing, integrasi SAP, dan sistem pengiriman email otomatis dengan lampiran Invoice.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
  {
    title: "Alumni Kampus Mengajar Batch 4",
    location: "Kendalsari, Pemalang",
    description:
      "Saya berpartisipasi dalam program Kampus Mengajar Batch 4 di Kendalsari, Pemalang. Program ini memungkinkan saya untuk mengajar di daerah sebagai bagian dari misi untuk meningkatkan akses dan mutu pendidikan. Pengalaman ini memperkaya pengetahuan saya tentang tantangan pendidikan yang ada di Indonesia.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Publisher dan Presented",
    location: "Centive, Institut Teknologi Telkom Purwokerto",
    description:
      "Saya menjadi publisher jurnal dan presented di Centive, Institut Teknologi Telkom Purwokerto. Dengan judul jurnal Penerapan Gamifikasi pada Penilaian dan Pemeringkatan Transkrip Aktivitas Kemahasiswaan (TAK) Berbasis Mobile Android (Studi Kasus: Institut Teknologi Telkom Purwokerto)",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  }, 
  {
    title: "Sertifikasi Junior Web Dev",
    location: "BNSP Institut Teknologi Telkom Purwokerto",
    description:
      "Saya berhasil meraih Sertifikasi Junior Web Developer setelah mengikuti pelatihan di Institut Teknologi Telkom Purwokerto.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  }, 
] as const;

export const projectsData = [
  {
    title: "Eye Care",
    description:
      "Aplikasi Eye Care adalah aplikasi mobile yang membantu menjaga kesehatan mata. Dibuat dengan Kotlin untuk Android dan Firebase untuk backend, menggunakan forward chaining untuk rekomendasi dan pengingat berdasarkan data pengguna.",
    tags: ["Kotlin", "FireBase", "java"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Surat Desa",
    description:
      "Aplikasi surat desa dalah website untuk pengajuan surat keterangan dan surat pengantar desa secara online",
    tags: ["Laravel", "HTML", "Boostrap", "Tailwind", "Mysql"],
    imageUrl: rmtdevImg,
  },
  {
    title: "BTS-Army",
    description:
      "Merupakan website untuk mendata alutsista, dimana website ini dibuat untuk mengugurkan tugas besar salah satu mata kuliah.",
    tags: ["React", "Next.js", "MySQL", "Tailwind"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "NestJs",
  "Tailwind",
  "Python",
  "Laravel",
  "Flutter",
  "Firebase",
  "PHP",
  "MySQL",
  "Git",
  "Kotlin",
  "Java",
  "Angular",
] as const;

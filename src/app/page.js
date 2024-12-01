"use client"

import Image from "next/image";
import HomePage from "../components/Home";
import Link from "next/link";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DocumentAudioPage from "@/components/DocumentAudioPage";

export default function Home() {
  return (
<div >
  <Header/>
  <HomePage/>
  <DocumentAudioPage/>
  <Contact/>
  <Footer/>

</div>
  );
}

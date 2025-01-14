import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import "@react-pdf-viewer/core/lib/styles/index.css";

const Viewer = dynamic(
  async () => {
    const { Worker, Viewer } = await import("@react-pdf-viewer/core");
    return ({ fileUrl }) => (
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.9.179/build/pdf.worker.min.js">
        <Viewer fileUrl={fileUrl} />
      </Worker>
    );
  },
  { ssr: false }
);

export default function DocumentAudioPage() {
  const [pdfFile] = useState("/documents/How Grace Found Me - Yankho Mhango.pdf");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudioPlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className="py-10 w-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/sun.jpg')",
      }}
    >
      <Head>
        <title>Document & Audio</title>
      </Head>

      {/* Page Content */}
      <div className="bg-white bg-opacity-60 p-6 rounded shadow-lg w-full max-w-4xl text-center">
        <h1 className="text-2xl mb-4 text-black">Read Document & Listen to Audio</h1>

        {/* PDF Viewer */}
        <div className="mb-6 h-[600px] overflow-y-auto border border-gray-300 rounded">
          <Viewer fileUrl={pdfFile} />
        </div>

        {/* Download Button */}
        <div className="mb-4">
          <a
            href={pdfFile}
            download
            className="px-6 py-3 bg-gray-500 text-white rounded hover:bg-green-600 transition"
          >
            Download PDF
          </a>
        </div>

        {/* Audio Control Button */}
        <div>
          <p className="mb-2 text-gray-700">Listen to the audio:</p>
          <audio ref={audioRef} src="/How grace found me.mp3" />
          <button
            onClick={toggleAudioPlayback}
            className={`px-4 py-2 rounded transition ${
              isPlaying ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          >
            {isPlaying ? "Pause Audio" : "Play Audio"}
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useRef } from "react";
import "./App.css";

const App = () => {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  // useRef to store references to video elements.
  // We'll store them in an object where keys are video IDs.
  const videoRefs = useRef({});
  // State to track if each video is playing or paused.
  // Keys are video IDs, values are booleans (true for playing, false for paused).
  const [isPlaying, setIsPlaying] = useState({});

  // Sample portfolio videos data
  const portfolioVideos = [
    {
      id: 1,
      title: "Corporate Ad",
      category: "Commercial",
      thumbnail:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
      source:
        "https://res.cloudinary.com/dgqoxgbel/video/upload/v1749985969/Final_2.3_compressed_wzv9gb.mp4",
      duration: "2:30",
    },
    {
      id: 2,
      title: "Intro Animation ",
      category: "Animation",
      thumbnail:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      source:
        "https://res.cloudinary.com/dgqoxgbel/video/upload/v1749809290/intro_animation_cabas2.mp4",
      duration: "3:45",
    },
    {
      id: 3,
      title: "TV ad",
      category: "Commercial Ad",
      thumbnail:
        "https://images.unsplash.com/photo-1489599188651-d1049a97b7d4?w=600&h=400&fit=crop",
      source:
        "https://res.cloudinary.com/dgqoxgbel/video/upload/v1749809718/final_4_cm2vcq.mp4",
      duration: "8:20",
    },
    {
      id: 4,
      title: "Product Showcase",
      category: "Commercial",
      thumbnail:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      source:
        "https://res.cloudinary.com/dgqoxgbel/video/upload/v1749809488/reel11_f2q4ox.mp4",
      duration: "1:45",
    },
    {
      id: 5,
      title: "Podcast Extraction",
      category: "Reels editing",
      thumbnail:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
      source:
        "https://res.cloudinary.com/dgqoxgbel/video/upload/v1749986005/Vid_5_1.3_compressed_uankbz.mp4",
      duration: "4:15",
    },
    {
      id: 6,
      title: "Social Media Campaign",
      category: "Digital",
      thumbnail:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      source:
        "https://res.cloudinary.com/dgqoxgbel/video/upload/v1749809283/reel1hd_j4s2m2.mp4",
      duration: "0:30",
    },
  ];

  // Function to handle play/pause click from the overlay button
  const handlePlayPauseClick = (videoId) => {
    const videoElement = videoRefs.current[videoId];
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ali Raza
              </h1>
            </div>

            <div className="flex space-x-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ali-raza-02391a338"
                target="_blank"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Fiverr */}
              <a
                href="https://www.fiverr.com/ar1077000a?source=inbox"
                target="_blank"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z"></path>
                    <circle cx="14.375" cy="1.875" r="1.875"></circle>
                  </g>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Creative Video Editor
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transforming raw footage into compelling visual narratives. With
              over 5 years of experience in post-production, I specialize in
              creating cinematic content that captivates audiences and drives
              results.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 text-sm font-medium">
                Adobe Premiere Pro
              </span>
              <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full border border-pink-500/30 text-sm font-medium">
                After Effects
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 text-sm font-medium">
                DaVinci Resolve
              </span>
              {/* <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full border border-green-500/30 text-sm font-medium">
                Final Cut Pro
              </span> */}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-purple-700 hover:to-pink-700">
                View My Work
              </button> */}
              <a
                className="px-8 py-4 border-2 border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-300"
                href="https://www.linkedin.com/in/ali-raza-02391a338"
                target="_blank"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            About me
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Take a quick look at how I bring visions to life through dynamic
            video editing.
          </p>
          <div className="relative w-full overflow-hidden rounded-xl shadow-2xl border border-gray-700">
            <video
              src="https://res.cloudinary.com/dgqoxgbel/video/upload/v1749986356/final_xsspdp.mp4" // Replace with your actual intro video URL
              // poster="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=450&fit=crop" // Optional: A placeholder image for the video
              className="w-full h-auto object-cover rounded-xl" // object-cover to fill the space
              controls // Show native video controls
              loop // Loop the video
              muted // Mute it by default for autoplay compatibility
              autoplay // Autoplay when the section loads
              playsInline // Recommended for mobile autoplay
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            (Video best viewed with sound on)
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Work
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent projects spanning commercials, music
              videos, documentaries, and digital content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioVideos.map((video) => (
              <div
                key={video.id}
                className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                onMouseEnter={() => {
                  setHoveredVideo(video.id);
                  // Optional: Autoplay video on hover.
                  // Note: Browsers usually require videos to be muted for autoplay.
                  // If you enable this, also uncomment `muted` below.
                  /*
                  if (videoRefs.current[video.id]) {
                    videoRefs.current[video.id].play().catch(e => console.error("Autoplay failed:", e));
                  }
                  */
                }}
                onMouseLeave={() => {
                  setHoveredVideo(null);
                  // Optional: Pause video and reset to start on mouse leave
                  /*
                  if (videoRefs.current[video.id]) {
                    videoRefs.current[video.id].pause();
                    videoRefs.current[video.id].currentTime = 0; // Reset to beginning
                  }
                  */
                }}
              >
                <div className="relative overflow-hidden">
                  <video
                    // Assign the ref to the video element for direct DOM access
                    ref={(el) => (videoRefs.current[video.id] = el)}
                    // poster={video.thumbnail}
                    src={video.source}
                    alt={video.title}
                    controls
                    className="w-full h-64 object-contain transition-transform duration-700 group-hover:scale-100"
                    // These event handlers keep the `isPlaying` state in sync with the video's actual state
                    onPlay={() =>
                      setIsPlaying((prev) => ({ ...prev, [video.id]: true }))
                    }
                    onPause={() =>
                      setIsPlaying((prev) => ({ ...prev, [video.id]: false }))
                    }
                    // If you want native controls visible:
                    // controls
                    // If you enable autoplay on hover, you MUST mute the video
                    // muted={hoveredVideo === video.id}
                  />

                  {/* Duration badge */}
                  <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">
                      {video.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {video.title}
                  </h3>

                  <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
            <div className="text-center ">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                50+
              </div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">
                20+
              </div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                5+
              </div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            {/* <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                25+
              </div>
              <div className="text-gray-400">Industry Awards</div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                Ali Raza
              </h3>
              <p className="text-gray-400">
                Crafting visual stories that inspire and engage
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-6 mb-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
              <p className="text-gray-500 text-sm">
                © 2025 Ali Raza Portfolio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

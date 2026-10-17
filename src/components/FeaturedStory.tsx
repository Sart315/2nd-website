import React, { useState, useRef } from 'react';
import { Play, Pause, X, Calendar, Film, Volume2, VolumeX, Maximize2, ExternalLink, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { getImageUrl, handleImageFallback } from '../utils/assetImages';
import { useTheme } from '../context/ThemeContext';

interface FeaturedStoryProps {
  onOpenBooking: () => void;
}

interface FilmTrack {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  specs: string;
  videoUrl: string;
  poster: string;
  description: string;
}

export const FeaturedStory: React.FC<FeaturedStoryProps> = ({ onOpenBooking }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeFilmIndex, setActiveFilmIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { isDark } = useTheme();

  const featuredImage = getImageUrl('wedding_story_varmala_1791896401614.jpg');

  // High-definition cinematic wedding video films
  const weddingFilms: FilmTrack[] = [
    {
      id: 'film-1',
      title: 'Grand Royal Varmala & Vedic Vows',
      subtitle: 'Sirsaganj Royal Heritage Wedding Ceremony',
      duration: '03:45',
      specs: 'Sony FX3 Cinema Line · 4K 120fps · S-Cinetone Colour Science',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      poster: featuredImage,
      description: 'Documented under a canopy of thousand golden marigolds and authentic brass diyas. Capturing emotional tears, royal varmala garlands, and spontaneous laughter with rich acoustic fidelity.',
    },
    {
      id: 'film-2',
      title: 'The Regal Bride Entry & Sangeet Sparklers',
      subtitle: 'Evening Sangeet & Palace Baraat Extravaganza',
      duration: '02:30',
      specs: 'Canon Cinema EOS · RF 85mm f/1.2L · 4K HDR',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      poster: getImageUrl('royal_bridal_portrait_1791898990033.jpg'),
      description: 'The dramatic bridal entry under cold pyro sparkles followed by high-energy sangeet performances choreographed with sweeping gimbal motion.',
    },
    {
      id: 'film-3',
      title: 'Pre-Wedding Romance in Ancient Sandstone Arches',
      subtitle: 'Agra Valley & Classical Chhatri Pavilion Story',
      duration: '02:15',
      specs: 'Fujifilm Large Format · 8K Aerial Drone Fleet · Film Grain Simulation',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
      poster: getImageUrl('prewedding_cinematic_1791896401895.jpg'),
      description: 'Sun-drenched sandstone arches, fluttering royal silk dupattas, and quiet intimate moments preserved in slow-motion cinema.',
    },
  ];

  const currentFilm = weddingFilms[activeFilmIndex];

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const openTheater = (index = 0) => {
    setActiveFilmIndex(index);
    setModalOpen(true);
    setIsPlaying(true);
  };

  return (
    <section
      id="featured-story"
      className={`py-20 sm:py-28 relative transition-colors duration-200 border-t ${
        isDark ? 'bg-[#0D0F0E] text-[#F7F7F2] border-white/5' : 'bg-[#F4F4EE] text-[#1E2520] border-[#2C3528]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div
            className={`inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase mb-3 ${
              isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>Centerpiece Cinema Showcase</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-4 uppercase">
            The Stories We Tell
          </h2>

          <p
            className={`font-heading italic text-lg sm:text-2xl leading-relaxed max-w-2xl mx-auto ${
              isDark ? 'text-[#A3ABA1]' : 'text-[#576356]'
            }`}
          >
            "A wedding isn't just an event. <br className="hidden sm:inline" />
            It's a story worth remembering."
          </p>
        </div>

        {/* Large Cinematic Frame Container */}
        <div
          className={`relative w-full aspect-[16/10] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden border shadow-2xl group ${
            isDark ? 'border-white/10 bg-[#161917]' : 'border-[#2C3528]/15 bg-[#E8E8E2]'
          }`}
        >
          {/* High-Res Background Image */}
          <img
            src={featuredImage}
            alt="The Sacred Varmala Ceremony - Chandralok Studio Wedding Film"
            onError={handleImageFallback}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-102"
          />

          {/* Cinematic Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/30" />

          {/* Center Play Button Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
            <button
              onClick={() => openTheater(0)}
              aria-label="Play Featured Wedding Cinema Film"
              className="group/btn relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#C5A880] hover:bg-[#B3956D] text-[#0D0F0E] flex items-center justify-center transition-transform duration-200 hover:scale-105 shadow-2xl cursor-pointer mb-5"
            >
              <div className="absolute inset-0 rounded-full border-2 border-[#C5A880] animate-ping opacity-30" />
              <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-current ml-1" />
            </button>

            {/* Title & Metadata */}
            <div className="max-w-xl text-white">
              <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold text-[#C5A880] block mb-1">
                Grand Royal Varmala & Vedic Vows
              </span>
              <h3 className="font-heading text-xl sm:text-3xl font-normal mb-3 text-white">
                The Sacred Union · Sirsaganj Royal Heritage
              </h3>
              <button
                onClick={() => openTheater(0)}
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-[#C5A880] transition-colors cursor-pointer"
              >
                <span>Watch 4K Cinema Film</span>
                <span className="text-base">→</span>
              </button>
            </div>
          </div>

          {/* Film Technical Metadata Bar */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 flex items-center justify-between text-[10px] sm:text-xs font-mono text-white/80 z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="truncate">Sony FX3 Cinema Line · 4K 120fps · S-Cinetone Master</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline bg-black/60 px-2 py-0.5 rounded border border-white/10 text-[#C5A880]">
                2.39:1 Anamorphic
              </span>
              <span className="bg-red-600/90 text-white font-bold px-2 py-0.5 rounded text-[10px]">
                4K UHD
              </span>
            </div>
          </div>
        </div>

        {/* Quick Film Selector Below Showcase */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {weddingFilms.map((film, idx) => (
            <div
              key={film.id}
              onClick={() => openTheater(idx)}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-3.5 group ${
                isDark
                  ? 'bg-[#141715] hover:bg-[#1A1E1B] border-white/10 hover:border-[#C5A880]/50'
                  : 'bg-white hover:bg-[#FAF9F5] border-[#2C3528]/10 hover:border-[#B08D57]/60 shadow-xs'
              }`}
            >
              <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 relative bg-black">
                <img
                  src={film.poster}
                  alt={film.title}
                  onError={handleImageFallback}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-white text-white" />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#C5A880] truncate">
                  {film.duration} · Film {idx + 1}
                </div>
                <div className="text-xs font-semibold truncate leading-tight mt-0.5">
                  {film.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic High-Definition Theater Video Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Featured Wedding Film Player"
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-2 sm:p-6"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#121513] border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between bg-black/70">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#C5A880]">
                  Chandralok 4K Cinema Theater
                </span>
                <span className="text-white/30 hidden sm:inline">|</span>
                <span className="text-xs text-white/80 hidden sm:inline font-mono truncate max-w-xs">
                  {currentFilm.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close Theater"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* REAL HIGH-DEFINITION VIDEO SCREEN */}
            <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center group/player">
              <video
                ref={videoRef}
                src={currentFilm.videoUrl}
                poster={currentFilm.poster}
                autoPlay
                playsInline
                controls={false}
                onEnded={() => setIsPlaying(false)}
                className="w-full h-full object-contain bg-black cursor-pointer"
                onClick={togglePlay}
              />

              {/* Custom Overlay Controls */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between gap-4 text-white">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-full bg-white/20 hover:bg-[#C5A880] text-white hover:text-black transition-colors cursor-pointer"
                    aria-label={isPlaying ? 'Pause Film' : 'Play Film'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4 text-white" />}
                  </button>

                  <div className="text-xs font-mono text-white/80">
                    <span className="text-[#C5A880]">{currentFilm.duration}</span> / 4K CINEMA MASTER
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={STUDIO_INFO.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-white/80 hover:text-[#C5A880] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Watch On YouTube</span>
                  </a>

                  <button
                    onClick={handleFullscreen}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label="Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Video Selector Tabs & Details */}
            <div className="p-5 sm:p-6 bg-[#141715] flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#C5A880] block">
                    {currentFilm.specs}
                  </span>
                  <h4 className="font-heading text-lg sm:text-xl text-white font-normal mt-0.5">
                    {currentFilm.title}
                  </h4>
                  <p className="text-xs text-[#A3ABA1] mt-1 max-w-2xl leading-relaxed">
                    {currentFilm.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setModalOpen(false);
                    onOpenBooking();
                  }}
                  className="px-5 py-2.5 bg-[#C5A880] hover:bg-[#B3956D] text-[#0D0F0E] text-xs font-bold tracking-widest uppercase rounded-full transition-colors flex items-center gap-2 cursor-pointer shrink-0 shadow-md"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Date For This Film</span>
                </button>
              </div>

              {/* Film Selection Strip inside Theater */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {weddingFilms.map((film, idx) => (
                  <button
                    key={film.id}
                    type="button"
                    onClick={() => {
                      setActiveFilmIndex(idx);
                      setIsPlaying(true);
                    }}
                    className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                      activeFilmIndex === idx
                        ? 'bg-[#C5A880]/20 border-[#C5A880] text-white'
                        : 'bg-black/30 border-white/10 text-white/70 hover:bg-white/5'
                    }`}
                  >
                    <div className="w-10 h-10 rounded overflow-hidden shrink-0 bg-black">
                      <img src={film.poster} alt={film.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono text-[#C5A880] uppercase">
                        Reel 0{idx + 1} · {film.duration}
                      </div>
                      <div className="text-xs font-medium truncate text-white">
                        {film.title}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

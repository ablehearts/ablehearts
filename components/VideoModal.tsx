import { AnimatePresence, motion } from "framer-motion";
import YouTube from "react-youtube";

interface VideoModalProps {
  videoId: string | null;
  setVideoId: (id: string | null) => void;
}
export default function VideoModal({ videoId, setVideoId }: VideoModalProps) {
  return (
    <AnimatePresence>
      {videoId && (
        <motion.div
          className="fixed inset-0 video-modal-overlay flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-3xl bg-black rounded-xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <button
              className="absolute top-3 right-3 text-white text-3xl font-bold bg-black/50 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/70 transition-all duration-200 z-10"
              onClick={() => setVideoId(null)}
            >
              ✕
            </button>

            <YouTube
              videoId={videoId}
              opts={{
                width: "100%",
                height: "500",
                playerVars: {
                  autoplay: 1,
                  controls: 1,
                  modestbranding: 1,
                  rel: 0,
                  mute: 1,
                },
              }}
              onReady={(e: { target: YT.Player }) => e.target.setVolume(10)}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

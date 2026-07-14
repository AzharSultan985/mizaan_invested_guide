import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  AlertTriangle,
  Info,
  X,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

export default function Alert() {
  const { alert, setAlert } = useAuth();

  const types = {
    success: {
      icon: <CheckCircle2 size={20} />,
      color: "text-emerald-400",
      border: "border-emerald-500/30",
      progress: "bg-emerald-500",
    },

    error: {
      icon: <AlertTriangle size={20} />,
      color: "text-red-400",
      border: "border-red-500/30",
      progress: "bg-red-500",
    },

    info: {
      icon: <Info size={20} />,
      color: "text-cyan-400",
      border: "border-cyan-500/30",
      progress: "bg-cyan-500",
    },
  };

  const current = types[alert.type] || types.info;

  return (
    <div className="fixed top-6 right-6 z-[9999]">
      <AnimatePresence>
        {alert.show && (
          <motion.div
            initial={{
              opacity: 0,
              x: 120,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: 120,
              scale: 0.9,
            }}
            transition={{
              duration: 0.35,
            }}
            className={`relative w-[360px] overflow-hidden rounded-2xl border ${current.border}
            bg-slate-900/90 backdrop-blur-xl shadow-2xl`}
          >
            <div className="flex items-start gap-4 p-5">
              <div className={current.color}>{current.icon}</div>

              <div className="flex-1">
                <h3 className="font-semibold text-white">
                  {alert.type.charAt(0).toUpperCase() +
                    alert.type.slice(1)}
                </h3>

                <p className="mt-1 text-sm text-slate-300">
                  {alert.message}
                </p>
              </div>

              <button
                onClick={() =>
                  setAlert((prev) => ({
                    ...prev,
                    show: false,
                  }))
                }
                className="text-slate-500 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{
                duration: 2,
                ease: "linear",
              }}
              className={`h-1 ${current.progress}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
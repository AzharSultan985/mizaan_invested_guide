import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[900] flex items-center justify-center  backdrop-blur-2xl">

      <div className="flex flex-col items-center">

        {/* Dots */}

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            delay: 1.8,
            duration: .4,
          }}
          className="flex gap-3 mb-0"
        >
          {[0,1,2].map((i)=>(
            <motion.span
              key={i}
              animate={{
                y:[0,-8,0],
                opacity:[.3,1,.3]
              }}
              transition={{
                repeat:Infinity,
                duration:.8,
                delay:i*.18
              }}
              className="w-3 h-0 rounded-full bg-emerald-400 shadow-[0_0_15px_#10b981]"
            />
          ))}
        </motion.div>

        {/* Logo */}

        <motion.h1
          initial={{
            opacity:0,
            y:10
          }}
          animate={{
            opacity:1,
            y:0
          }}
          transition={{
            delay:1.4,
            duration:.5
          }}
          className="text-2xl font-black tracking-[5px]"
        >
          <span className="text-white">
            MIZAAN
          </span>

          <span className="text-emerald-400 ml-2">
            INVEST
          </span>
        </motion.h1>

        {/* Sync */}

        <motion.p
          initial={{opacity:0}}
          animate={{
            opacity:[.4,1,.4]
          }}
          transition={{
            delay:2,
            repeat:Infinity,
            duration:1.2
          }}
          className="mt-3 text-sm tracking-[4px] uppercase text-slate-400"
        >
          Syncing...
        </motion.p>

      </div>

    </div>
  );
}
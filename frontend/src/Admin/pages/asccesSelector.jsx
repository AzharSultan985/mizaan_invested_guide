    import { motion } from "framer-motion";
import { Globe, Lock, Users, Crown } from "lucide-react";

const accessOptions = [
  {
    value: "all",
    title: "All Users",
    description: "Everyone can read this article.",
    icon: Globe,
    color: "emerald",
  },
  {
    value: "free",
    title: "Free Members",
    description: "Visible only to free registered users.",
    icon: Users,
    color: "blue",
  },
  {
    value: "purchase",
    title: "Purchased Members",
    description: "Only users with an active local membership.",
    icon: Lock,
    color: "amber",
  },
  {
    value: "overseas",
    title: "Overseas Members",
    description: "Exclusive for overseas subscribers.",
    icon: Crown,
    color: "purple",
  },
];

const colors = {
  emerald: {
    border: "border-emerald-500",
    bg: "bg-emerald-500/10",
    text: "text-emerald-600",
    icon: "text-emerald-600",
  },
  blue: {
    border: "border-blue-500",
    bg: "bg-blue-500/10",
    text: "text-blue-600",
    icon: "text-blue-600",
  },
  amber: {
    border: "border-amber-500",
    bg: "bg-amber-500/10",
    text: "text-amber-600",
    icon: "text-amber-600",
  },
  purple: {
    border: "border-purple-500",
    bg: "bg-purple-500/10",
    text: "text-purple-600",
    icon: "text-purple-600",
  },
};

export default function AccessSelector({ value, onChange }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900">
          Article Access
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Choose who can access this article after publishing.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">

        {accessOptions.map((item) => {
          const Icon = item.icon;
          const active = value === item.value;
          const theme = colors[item.color];

          return (
            <motion.label
              key={item.value}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className={`relative cursor-pointer rounded-2xl border-2 p-5 transition-all duration-300

              ${
                active
                  ? `${theme.border} ${theme.bg} shadow-lg`
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <input
                type="radio"
                name="article-access"
                value={item.value}
                checked={active}
                onChange={() => onChange(item.value)}
                className="hidden"
              />

              <div className="flex items-start gap-4">

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl

                  ${
                    active
                      ? theme.bg
                      : "bg-slate-100"
                  }`}
                >
                  <Icon
                    size={26}
                    className={
                      active
                        ? theme.icon
                        : "text-slate-500"
                    }
                  />
                </div>

                <div className="flex-1">

                  <h4
                    className={`text-lg font-semibold

                    ${
                      active
                        ? theme.text
                        : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                </div>

                <div
                  className={`mt-1 h-6 w-6 rounded-full border-2 flex items-center justify-center

                  ${
                    active
                      ? `${theme.border} ${theme.bg}`
                      : "border-slate-300"
                  }`}
                >
                  {active && (
                    <div
                      className={`h-3 w-3 rounded-full ${theme.bg.replace(
                        "/10",
                        ""
                      )}`}
                    />
                  )}
                </div>

              </div>
            </motion.label>
          );
        })}

      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <h4 className="font-semibold text-slate-900">
          Selected Access
        </h4>

        <p className="mt-2 text-sm text-slate-600 capitalize">
          <span className="font-semibold">
            {value || "None"}
          </span>{" "}
          members will be able to read this article after it is published.
        </p>
      </div>
    </div>
  );
}
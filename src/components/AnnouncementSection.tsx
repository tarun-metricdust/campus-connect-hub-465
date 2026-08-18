import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

const AnnouncementSection = () => {
  const announcements = [
    {
      id: 1,
      title: "Semester Registration Open",
      date: "15 March 2024",
      category: "Academic",
      content: "Registration for the upcoming semester is now open. Students must complete registration by March 30th.",
      priority: "high",
    },
    {
      id: 2,
      title: "Annual Technical Festival",
      date: "20 March 2024",
      category: "Events",
      content: "Workshops, competitions and guest lectures by leading industry experts across three days.",
      priority: "medium",
    },
    {
      id: 3,
      title: "Library Timings Extended",
      date: "12 March 2024",
      category: "Notice",
      content: "The central library will remain open until 10 PM throughout the examination period.",
      priority: "low",
    },
    {
      id: 4,
      title: "Industry Visit to Tech Parks",
      date: "25 March 2024",
      category: "Events",
      content: "Final year students are invited for industry visits to leading technology companies.",
      priority: "medium",
    },
    {
      id: 5,
      title: "Scholarship Applications",
      date: "18 March 2024",
      category: "Academic",
      content: "Merit-based scholarship applications are now being accepted for the next academic year.",
      priority: "high",
    },
  ];

  return (
    <div>
      <div className="section-rule flex flex-wrap items-end justify-between gap-3">
        <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
          News &amp; Notices
        </h2>
        <a href="#" className="link-underline text-sm">
          All announcements <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <ul className="divide-y divide-border border-y border-border">
        {announcements.map((announcement) => (
          <li key={announcement.id}>
            <a
              href="#"
              className="group block py-5 transition-colors hover:bg-surface"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {announcement.date}
                </span>
                <Badge
                  variant="outline"
                  className="rounded-none border-primary/30 px-2 py-0 text-[11px] font-semibold uppercase tracking-[0.1em] text-primary"
                >
                  {announcement.category}
                </Badge>
                {announcement.priority === "high" && (
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-primary">
                    Important
                  </span>
                )}
              </div>
              <h3 className="mt-2 font-serif text-lg font-semibold text-foreground group-hover:text-primary sm:text-xl">
                {announcement.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {announcement.content}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnnouncementSection;

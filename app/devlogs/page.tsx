// app/devlogs/page.tsx 
"use client";

import { useState } from "react";
import Link from "next/link";
import { devlogs, Devlog } from "./devlogs"; 
import "./DevlogPage.css"; // if you have custom css



export default function DevlogPage() {
  const allTags = ["All", "Art", "Story", "Gameplay", "Prototype"];
  const [activeTag, setActiveTag] = useState("All");

  const filteredDevlogs = activeTag === "All"
    ? devlogs
    : devlogs.filter((log) => log.tags.includes(activeTag));

  return (
    <div className="devlog-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Tags</h2>
        <ul>
          {allTags.map((tag) => (
            <li key={tag}>
              <button
                className={activeTag === tag ? "active" : ""}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Timeline */}
      <section className="timeline">
        {/* Title */}
        <div className="devlogs-header">
          <h1 className="devlogs-title">Devlogs</h1>
          <div className="devlogs-underline" />
        </div>

        <div className="timeline-line" />

        <div className="timeline-entries">
          {filteredDevlogs.map((log) => (
            <div key={log.id} className="timeline-entry">
              <div className="timeline-dot" />
              <div className="devlog-card">
                <h3>{log.title}</h3>
                <p className="date">{log.date}</p>
                <p>{log.summary}</p>

                <Link href={`/devlogs/${log.slug}`} className="read-more">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

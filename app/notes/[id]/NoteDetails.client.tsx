"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { fetchNoteById } from "@/lib/api";
import css from "./NoteDetails.module.css";

const NoteDetailsClient = () => {
  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>Note title</h2>
        </div>
        <p className={css.tag}></p>
        <p className={css.content}>Note content</p>
        <p className={css.date}>Created date</p>
      </div>
    </div>
  );
};

export default NoteDetailsClient;

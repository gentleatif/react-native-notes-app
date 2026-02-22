import { useCallback, useState } from "react";
import type { Note } from "@/components/notes/types";
import { INITIAL_NOTES } from "@/components/notes/constants";

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>(INITIAL_NOTES);

  const addNote = useCallback((title: string, description: string) => {
    setNotes((prev) => {
      const nextId = Math.max(...prev.map((n) => n.id), 0) + 1;
      return [...prev, { id: nextId, title, description }];
    });
  }, []);

  const updateNote = useCallback((id: number, title: string, description: string) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, title, description } : n))
    );
  }, []);

  const deleteNote = useCallback((id: number) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return { notes, addNote, updateNote, deleteNote };
}

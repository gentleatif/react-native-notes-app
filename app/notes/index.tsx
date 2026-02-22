import { useCallback, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {
  AddNoteButton,
  AddNoteModal,
  NoteItem,
  type Note
} from "@/components/notes";
import { useNotes } from "@/hooks/useNotes";

export default function NotesScreen() {
  const { notes, addNote, updateNote, deleteNote } = useNotes();
  const [modalVisible, setModalVisible] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  const handleOpenModal = () => {
    setEditingNote(null);
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
    setEditingNote(null);
  };
  const handleEditNote = useCallback((note: Note) => {
    setEditingNote(note);
    setModalVisible(true);
  }, []);
  const handleSaveNote = useCallback(
    (title: string, description: string, id?: number) => {
      if (id != null) {
        updateNote(id, title, description);
      } else {
        addNote(title, description);
      }
    },
    [addNote, updateNote]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <NoteItem
            note={item}
            onEdit={handleEditNote}
            onDelete={deleteNote}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <AddNoteButton onPress={handleOpenModal} />

      <AddNoteModal
        visible={modalVisible}
        editingNote={editingNote}
        onClose={handleCloseModal}
        onSave={handleSaveNote}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: "#fff"
  },
  listContent: {
    paddingBottom: 80
  }
});

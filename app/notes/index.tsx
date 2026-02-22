import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { AddNoteButton, AddNoteModal, NoteItem } from "@/components/notes";
import { useNotes } from "@/hooks/useNotes";

export default function NotesScreen() {
  const { notes, addNote } = useNotes();
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);
  const handleSaveNote = (title: string, description: string) => {
    addNote(title, description);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <NoteItem note={item} />}
        keyExtractor={(item) => item.id.toString()}
      />

      <AddNoteButton onPress={handleOpenModal} />

      <AddNoteModal
        visible={modalVisible}
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

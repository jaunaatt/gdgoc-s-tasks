let notes = [
    {
        id: 1,
        heading: "Mempelajari Javascript",
        description: "Lorem ipsum dolor ...",
        created_by: "John Doe",
        created_at: Date.now()
    }
];

const createNote = (heading, description, created_by) => {
    const newId = notes.length > 0 ? notes[notes.length - 1].id + 1 : 1;
    const newNote = {
        id: newId,
        heading,
        description,
        created_by,
        created_at: Date.now()
    };
    notes.push(newNote);
    console.log(`Catatan baru dibuat dengan ID ${newId}`);
    return newNote;
};

const readNote = (id) => {
    const note = notes.find(note => note.id === id);
    if (note) {
        console.log(`Menampilkan catatan dengan ID ${id}`);
        return note;
    } else {
        console.log(`Catatan dengan ID ${id} tidak ditemukan.`);
        return null;
    }
};

const updateNote = (id, updatedData) => {
    const noteIndex = notes.findIndex(note => note.id === id);
    if (noteIndex !== -1) {
        notes[noteIndex] = { ...notes[noteIndex], ...updatedData };
        console.log(`Catatan dengan ID ${id} berhasil diperbarui.`);
        return notes[noteIndex];
    }
    console.log(`Catatan dengan ID ${id} tidak ditemukan.`);
    return null;
};

const deleteNote = (id) => {
    const noteIndex = notes.findIndex(note => note.id === id);
    if (noteIndex !== -1) {
        const deletedNote = notes.splice(noteIndex, 1)[0];
        console.log(`Catatan dengan ID ${id} telah dihapus.`);
        return deletedNote;
    }
    console.log(`Catatan dengan ID ${id} tidak ditemukan.`);
    return null;
};


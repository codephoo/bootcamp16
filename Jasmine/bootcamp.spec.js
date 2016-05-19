describe("list notes", function() {
    it(" function", function() {
        var note = new NotesApplication('shola');
        expect(note.listNotes()).toBe('');
  });
    it("should be empty", function() {
        var note = new NotesApplication('shola');
        note.create('');
        expect(note.listNotes()).toBe('');
  });
    it("should be empty and of type string", function() {
        var note = new NotesApplication('shola');
        expect(note.listNotes()).toBe('' && typeof '');

  });
    it("should be empty and of type string", function() {
        var note = new NotesApplication('shola');
        note.create(3);
        expect(note.listNotes()).toBe('' && typeof '');
    })
    it("should be empty and of type string", function() {
        var note = new NotesApplication('shola');
        note.create(true);
        expect(note.listNotes()).toBe('' && typeof '');
    })
});

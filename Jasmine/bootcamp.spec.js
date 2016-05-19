describe("list notes", function() {
    it(" should be empty", function() {
        var note = new NotesApplication('shola');
        expect(note.listNotes()).toBe('');
  });
    it("should be empty", function() {
        var note = new NotesApplication('shola');
        note.create('');
        expect(note.listNotes()).toBe('');
  });
    it(" should be empty and of type string", function() {
        var note = new NotesApplication('shola');
        expect(note.listNotes()).toBe('' && typeof '');

  });
    it("should be empty and of type string", function() {
        var note = new NotesApplication('shola');
        note.create(3);
        expect(note.listNotes()).toBe('' && typeof '');
    })
});

describe("Get a note with a specific id", function() {
    it("should be undefined", function() {
        var note = new NotesApplication('Alex');
        expect(note.get(0)).toBe(undefined);
  });
    it("should be the same as created note", function() {
        var note = new NotesApplication('shola');
        note.create('My name is Shola Abaogun');
        expect(note.get(0)).toBe('My name is Shola Abaogun');
  });
    it("should be the same as created note", function() {
        var note = new NotesApplication('shola');
        note.create('My name is Shola Abaogun');
        expect(typeof note.get(0)).toBe(typeof '');
  });
    it("should return index out of range", function() {
        var note = new NotesApplication('shola');
        note.create('My name is Shola Abaogun');
        expect(note.get(1)).toBe('Index out of range');
  });

});
  
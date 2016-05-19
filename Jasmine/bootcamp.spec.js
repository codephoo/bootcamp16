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
    it("should return invalid note id", function() {
        var note = new NotesApplication('Alex');
        expect(note.get(0)).toBe('Invalid note id');
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
    it("should return invalid note id", function() {
        var note = new NotesApplication('shola');
        note.create('My name is Shola Abaogun');
        expect(note.get(1)).toBe('Invalid note id');
  });
    it("should return invalid note id", function() {
        var note = new NotesApplication('shola');
        note.create('My name is Shola Abaogun');
        expect(note.get('1')).toBe('Invalid note id');
  });
    it("should return invalid note id", function() {
        var note = new NotesApplication('shola');
        note.create('My name is Shola Abaogun');
        expect(note.get([8,9])).toBe('Invalid note id');
  });
    it("should return invalid note id", function() {
        var note = new NotesApplication('shola');
        note.create('My name is Shola Abaogun');
        expect(note.get(true)).toBe('Invalid note id');
  });
    it("should return invalid note id", function() {
        var note = new NotesApplication('shola');
        note.create('My name is Shola Abaogun');
        expect(note.get()).toBe('Invalid note id');
  });
});

describe("search notes that contains specific text", function() {
    it("should return no match found ", function() {
        var note = new NotesApplication('shola');
        expect(note.search()).toBe("No match found");
  });
    it("should return a string", function() {
        var note = new NotesApplication('shola');
        note.create('My first note');
        expect(typeof note.search('first')).toBe(typeof "My first note");
  });
    it("should return a string", function() {
        var note = new NotesApplication('shola');
        note.create('');
        expect(typeof note.search('first')).toBe(typeof "My first note");
  });
    it("should return a string", function() {
        var note = new NotesApplication('shola');
        note.create('My first note');
        expect(typeof note.search(0)).toBe(typeof '');
  })
    it("should return no match found", function() {
        var note = new NotesApplication('shola');
        note.create('I like swimming');
        expect(note.search()).toBe("No match found");
  });
    it("should return no match found", function() {
        var note = new NotesApplication('shola');
        note.create('I like swimming');
        expect(note.search('food')).toBe("No match found");
  });
    it("should return no match found", function() {
        var note = new NotesApplication('shola');
        note.create('I like swimming');
        expect(note.search(0)).toBe("No match found");
  });
    it("should return no match found", function() {
        var note = new NotesApplication('shola');
        note.create('I like swimming');
        expect(typeof note.search(['swim'])).toBe(typeof "");
  });
    it("should return no match found", function() {
        var note = new NotesApplication('shola');
        note.create('I like swimming');
        note.delete(0);
        expect(note.search('swim')).toBe("No match found");
  });
    it("should return no match found", function() {
        var note = new NotesApplication('shola');
        note.create('I like swimming');
        expect(note.search()).toBe("No match found");
  });
});
describe("delete notes at a particular index", function() {
    it("should throw an error", function() {
        var note = new NotesApplication('shola');
        expect(function(){note.delete(0)}).toThrow();
  });
    it("should throw an error", function() {
        var note = new NotesApplication('shola');
        note.create('My note');
        expect(function() {note.delete(1)}).toThrow();
  });
    it("should throw an error", function() {
        var note = new NotesApplication('shola');
        note.create('My note');
        expect(function() {note.delete('1')}).toThrow();
  });
    it("should throw an error", function() {
        var note = new NotesApplication('shola');
        note.create('My note');
        expect(function() {note.delete(true)}).toThrow();
  });
    it("should throw an error", function() {
        var note = new NotesApplication('shola');
        note.create('My note');
        expect(function() {note.delete([4,2])}).toThrow();
  });
    it("should return a string", function() {
        var note = new NotesApplication('shola');
        note.create('My note');
        expect(typeof note.delete(0)).toBe(typeof '');
  });
});
describe("edit the content of a note", function() {
    it("should throw an error", function() {
        var note = new NotesApplication('shola');
        expect(function(){note.edit()}).toThrow();
  });
    it("should return a string", function() {
        var note = new NotesApplication('shola');
        note.create('my first note');
        expect(typeof note.edit(0,'my new content')).toBe(typeof '');
  });
    it("should throw an error", function() {
        var note = new NotesApplication('shola');
        note.create('my first note');
        expect(function() {note.edit('0','my new content')}).toThrow();
  });
    it("should throw an error", function() {
        var note = new NotesApplication('shola');
        note.create('my first note');
        expect(function() {note.edit(1,'my new content')}).toThrow();
  });
    it("should throw an error", function() {
        var note = new NotesApplication('shola');
        note.create('my first note');
        expect(function() {note.edit('0',2)}).toThrow();
  });
    it("should throw an error", function() {
        var note = new NotesApplication('shola');
        note.create('my first note');
        expect(function() { note.edit('0',['my new content']) }).toThrow();
  });
    it("should throw an error", function() {
        var note = new NotesApplication('shola');
        note.create('my first note');
        expect(function() {note.edit('0',true)}).toThrow();
  });
    it("should throw an error", function() {
        var note = new NotesApplication('shola');
        expect(function(){note.edit()}).toThrow();
  });
    it("should throw an error", function() {
        var note = new NotesApplication('shola');
        expect(function(){note.edit()}).toThrow();
  });
    it("should throw an error", function() {
        var note = new NotesApplication('shola');
        expect(function(){note.edit()}).toThrow();
  });
});
describe("create a note", function() {
    it("should return a string", function() {
        var note = new NotesApplication('shola');
        expect(typeof note.create()).toBe(typeof '');
  });
    
    it("should return invalid input", function() {
        var note = new NotesApplication('shola');
        expect(note.create()).toBe('Invalid input');
  });
    it("should return invalid input", function() {
        var note = new NotesApplication('shola');
        expect(note.create(['I am a coder'])).toBe("Invalid input");
  });
    it("should return invalid input", function() {
        var note = new NotesApplication('shola');
        expect(note.create(3)).toBe('Invalid input');
  });
});

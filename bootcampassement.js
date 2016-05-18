function NotesApplication(author) {
	'use strict';
	this.author=author ;

	this.notes=[];
	this.create= function(note_content){
		this.notes.push(note_content);

	};
	this.listnodes= function() {
		var allnotes='';
		for(var i=0;i<this.notes.length;i++){
			allnotes +=  'Note_ID: ' + i + '\n' + this.notes[i] + '\n' + "By Author " + this.author + '\n';
		}
		return allnotes;
	};
	this.get= function(note_id) {
		if(typeof note_id==Number) return this.notes[note_id];
		else{
			return "Invalid note id";
		}
	};
	this.search= function(search_text) {
		var matches=[];
		for(var i in this.notes){
			if(this.notes[i].indexOf(search_text)>-1){
				matches.push('Showing result for search ' + search_text +' Note_ID: ' + i + "\n" + this.notes[i] + '\n' + "By Author " + this.author );
			}
		}
		return matches.join('\n');
		
	};

}
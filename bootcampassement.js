function NotesApplication(author) {
	'use strict';
	this.author=verifyAuthor(author) ;
	this.notes=[];
	this.create= function(note_content){
		this.notes.push(note_content);

	};
	function verifyAuthor(author){
		if (typeof author == typeof '' && author !=''){
			return author;
		}
		else {
			throw new TypeError('Invalid Author');
		}
	}
	this.listnodes= function() {
		var allnotes='';
		for(var i=0;i<this.notes.length;i++){
			allnotes +=  'Note_ID: ' + i + '\n' + this.notes[i] + '\n' + "By Author " + this.author + '\n';
		}
		return allnotes;
	};
	this.get= function(note_id) {
		if(typeof note_id==typeof 1) {
			return this.notes[note_id];
		}
		else{
			return "Invalid note id";
		}
	};
	this.search= function(search_text) {
		search_text=String(search_text);
		var matches=[];
		for(var i in this.notes){
			if(this.notes[i].indexOf(search_text)>-1){
				matches.push('Showing result for search \'' + search_text +'\' Note_ID: ' + i + "\n" + this.notes[i] + '\n' + "By Author " + this.author );
			}
		}
		return matches.length>0?matches.join('\n'):'No match found';
		
	};
	this.delete = function(note_id) {
		if(note_id>=this.notes.length || typeof note_id != typeof 1){
			throw new Error("note_id must be a number less than "+ this.notes.length);
		}
		else{
			delete this.notes[note_id];
		}
		return 'Note deleted';
	};
	this.edit = function(note_id,new_content){
		if(note_id>=this.notes.length || typeof note_id != typeof 1){
			throw new Error("note_id must be a number less than "+ this.notes.length);
		}
		else if(new_content=='' || typeof new_content != typeof ''){
			throw new Error("new_content must be a non-empty string");
		}
		else{
			this.notes[note_id]= new_content;
		}
		return "Content edited";
	};

}
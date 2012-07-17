//var io = require('socket.io');

function Field (name, type, value) {
	this.name = name;
	this.type = type;
	this.value = value;
}

function Tuple (fields) {

	this.fields = [];

	if (fields) {
		this.fields = fields;	
	}

	
	// this.names = {};

	// for (var i = 0; i < fields.length; i++) {
	// 	this.names[fields[i].name] = i;
	// }

	this.addField = function (field) {
		this.fields.push(field);
	};

	this.renameField = function (field) {
		this.fields.push(field);
	};

	this.getField = function (fieldName) {
		for (var i = 0; i < this.fields.length; i++) {
			if (this.fields[i].name == fieldName)
				return this.fields[i];
		}
		return null;
	};

	this.getI = function (i) {
		return this.fields[i];
	};

	// <gameId, *>
	this.matches = function (template) {
		for (var i = 0; i < template.fields.length; i++) {
			var field = template.fields[i];

			//first check fieldNames MUST HAVE FIELD NAME
			if (field.name != this.getI(i).name) {
				return false;
			}
			//check if types are the same
			if (field.type && field.type != this.getI(i).type) {
				return false;
			}
			if (field.value && field.value != this.getI(i).value) {
				return false;
			}
		}
		return true;
	};

}

// < "Michael", "Stewart", 27>
var f1  = new Field("firstName", "String", "Michael");
var f2 = new Field("lastName", "String", "Stewart");
var f3 = new Field("age", "int", "27");
var t = new Tuple([f1,f2,f3]);


var templateField1 = new Field("firstName", "String", "Michael");
var templateField2 = new Field("lastName");
var templateField3 = new Field("age", "int");
var templateTuple = new Tuple([templateField1, templateField2, templateField3]);

t.matches(templateTuple);
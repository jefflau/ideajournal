Ideas = new Meteor.Collection('ideas');
Ideas.allow({
	insert: function(userId, doc) {
		return !! userId;
	}
});
Meteor.publish('ideas', function() {
	return Ideas.find();
});

Meteor.publish('journalIdeas', function(journal) {
  return Posts.find({journal: journal}); 
});
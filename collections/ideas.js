Ideas = new Meteor.Collection('ideas');

Meteor.methods({
	idea: function(ideaAttributes) {
		var user = Meteor.user();

		if (!user)
      throw new Meteor.Error(401, "You need to login to create new ideas");

    if (!ideaAttributes.title)
      throw new Meteor.Error(422, 'Please fill in a headline');

    var idea = _.extend(_.pick(ideaAttributes, 'url', 'title', 'message'), {
      userId: user._id, 
      author: user.username, 
      submitted: new Date().getTime()
    });

    var ideaId = Ideas.insert(idea);

    return ideaId;
	}
});
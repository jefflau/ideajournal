Template.ideaNew.events({
	'submit form': function(e) {
		e.preventDefault();

		idea = {
			title: $(e.target).find('[name=title]').val(),
			link: $(e.target).find('[name=link]').val(),
			notes: $(e.target).find('[name=notes]').val()
		}

		idea._id = Ideas.insert(idea);
		Meteor.call('idea', idea, function(error, id){
			if (error)
				return alert(error.reason);

			Router.go('ideaPage', idea);
		});
	}
});
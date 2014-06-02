Template.ideaNew.events({
	'submit form': function(e) {
		e.preventDefault();

		idea = {
			title: $(e.target).find('[name=title]').val(),
			link: $(e.target).find('[name=link]').val(),
			notes: $(e.target).find('[name=notes]').val()
		}

		idea._id = Ideas.insert(idea);
		Router.go('ideaPage', idea);
	}
});
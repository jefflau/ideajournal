Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
  	return Meteor.subscribe('ideas');
  }
});

Router.map(function() {
  this.route('ideasJournal', {
  	path: '/'
  });
  this.route('ideaNew', {
    path: '/new'
  });
  this.route('ideaPage', {
  	path: '/ideas/:_id',
  	data: function() {
  		return Ideas.findOne(this.params._id);
  	}
  });
  this.route('ideasJournalPage', {
    path: '/:_journal',
    waitOn: function() { return Meteor.subscribe('ideas')},
    data: function() {
      return Ideas.find();
    }
  });
});

var requireLogin = function(pause) {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');
    pause();
  }
}

Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only: 'ideaNew'})
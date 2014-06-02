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
  this.route('ideaPage', {
  	path: '/ideas/:_id',
  	data: function() {
  		return Ideas.findOne(this.params._id);
  	}
  });
  this.route('ideaNew', {
  	path: '/new'
  })
});

Router.onBeforeAction('loading');
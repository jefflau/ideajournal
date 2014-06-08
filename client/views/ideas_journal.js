Template.ideasJournal.helpers({
  ideas: function () {
    return Ideas.find({}, {sort: {submitted: -1}});
  }
});
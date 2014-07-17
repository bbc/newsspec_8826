module.exports = function (grunt) {
    grunt.registerTask('live_checklist', ['stage_checklist', 'checkStage']);
};
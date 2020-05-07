/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('TutorialApp.view.task.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.task',
    viewModel: 'task',


    openNewTaskForm : function(){
        var form = Ext.widget('newTask');
        form.show();
    },

    refreshTask: function () {
        var vm = this.getViewModel();
        vm.getStore('tasks').reload();
    }
});

Ext.define('TutorialApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'TutorialApp.view.truck.TruckView',
        'TutorialApp.view.truck.NewTruckFormView',


        'TutorialApp.view.main.MainController',
        'TutorialApp.view.main.MainModel',
        'TutorialApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',
    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list',
        items: [{
            xtype: 'button',
            text: 'Logout',
            margin: '10 0',
            handler: 'onClickButton'
        }]
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        items: [{
            xtype: 'mainlist'
        }]
    },{
        scrollable: true,
        title: 'Routs',
        iconCls: 'fa-user',
        items: [{
            xtype: 'taskList'
        }]
    },{
        scrollable: true,
        title: 'Truck Users',
        iconCls: 'fa-users',
        items: [{
            xtype: 'driver'
        }]
    },{
        scrollable: true,
        title: 'Trucks',
        iconCls: 'fa-user',
        items: [{
            xtype: 'truckList'
        }]
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});

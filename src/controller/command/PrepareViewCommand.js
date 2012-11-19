/**
 * PureMVC JS Demo: Responsive Page System
 * @author Mike Britton
 */
puremvc.define(
{
    name    : 'rps.PrepareViewCommand',
    parent  : puremvc.SimpleCommand
},

// INSTANCE MEMBERS
{
    /** @override */
    execute: function ( note ) {
 
        // Set JQuery Easing Default
        jQuery.easing.def = 'easeInOutSine';
 
        // Register Mediators
        this.facade.registerMediator( new rps.ViewPortMediator );
        this.facade.registerMediator( new rps.TopNavMediator );
        this.facade.registerMediator( new rps.BottomNavMediator );
        this.facade.registerMediator( new rps.PageMenuMediator );
 
        // Get the pages...
        this.sendNotification( rps.AppConstants.NOTE_GET_PAGES );
    }
});

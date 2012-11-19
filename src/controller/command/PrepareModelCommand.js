/**
 * PureMVC JS Demo: Responsive Page System
 * @author Mike Britton
 */
puremvc.define(
{
    name    : 'rps.PrepareModelCommand',
    parent  : puremvc.SimpleCommand
},
  
// INSTANCE MEMBERS
{
    /** @override */
    execute: function ( note ) {
               
        // Register Proxies
        this.facade.registerProxy( new rps.PageProxy );
    }
});

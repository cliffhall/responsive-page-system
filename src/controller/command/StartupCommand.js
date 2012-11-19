/**
 * PureMVC JS Demo: Responsive Page System
 * @author Mike Britton
 */
puremvc.define(
{
    name    : 'rps.StartupCommand',
    parent  : puremvc.MacroCommand
},

// INSTANCE MEMBERS
{
    /** @override */
    initializeMacroCommand : function()
    {
        // Add subcommands for this MacroCommand
        this.addSubCommand( rps.PrepareControllerCommand );
        this.addSubCommand( rps.PrepareModelCommand );
        this.addSubCommand( rps.PrepareViewCommand );
    }
});

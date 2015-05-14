/**
 * @fileoverview
 * @author Sungho Kim(sungho-kim@nhnent.com) FE Development Team/NHN Ent.
 */

'use strict';

var Command = require('./command');

/**
 * WysiwygCommand
 * It implements Wysiwyg Command
 * @exports WysiwygCommand
 * @extends {Command}
 * @constructor
 * @class
 */
var WysiwygCommand = Command.extend(/** @lends WysiwygCommand.prototype */{
    /**
     * init
     * initialize Command
     * @param {string} name Command Name
     */
    init: function MarkdownCommand(name) {
        Command.call(this, name, Command.TYPE.WW);
    },
    /**
     * setup
     * Set current base and codemirror context
     * @param {Squire} editor Squire instance
     */
    setup: function(editor) {
        this.editor = editor;
    }
});

module.exports = WysiwygCommand;

module.exports =
  instance: null

  activate: (@state) ->

  serialize: ->
    @state

  provideSpellCheck: ->
    require.resolve './checker.coffee'

  deactivate: ->
    return

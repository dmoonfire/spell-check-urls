class Checker
  # This is a faster check for the protocol.
  prefixRegexp: /^(https?|ftp|mailto|tel):/i

  # This is the regular expression for looking at links.
  regexp: /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig

  getId: -> "spell-check-urls"
  getName: -> "URL Dictionary"
  getPriority: -> 75
  isEnabled: -> true
  getStatus: -> "Working correctly."
  providesSpelling: (args) ->
    true
  providesSuggestions: (args) ->
    false
  providesAdding: (args) ->
    false

  check: (args, text) ->
    # Loop through the text and find all the matches for
    # our regular expression.
    ranges = []

    while true
      # See if we have a match.
      match = @regexp.exec text

      if not match
        break

      # We have a match, so add it to the range.
      end = match.index + match[0].length
      ranges.push { start: match.index, end: end }

    # Return the gathered ranges we found.
    console.log "done"
    { correct: ranges }

checker = new Checker()
module.exports = checker

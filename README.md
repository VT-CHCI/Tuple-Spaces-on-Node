Tuple-Spaces-on-Node
====================
This is a project to implement the TupleSpaces interface on top of Node.js and socket.io.
The following are example operations (taken from [IBM](http://www.almaden.ibm.com/cs/TSpaces/html/ProgrGuideText.html#basics)) that we would like to have:

The basic primitive operations supported by the space are:

* write( tuple ) Adds a tuple to the space.
* take( template_tuple ) Performs an associative search for a tuple that matches the template. When found, the tuple is removed from the space and returned. If none is found, returns null.
* waitToTake( template_tuple ) Performs an associative search for a tuple that matches the template. Blocks until match is found. Removes and returns the matched tuple from the space.
* read( template_tuple ) Like "take" above, except that the tuple is not removed from the tuple space.
* waitToRead( template_tuple ) Like "waitToTake" above, except that the tuple is not removed from the tuple space.
* scan( template_tuple ) Like "read" above, except returns the entire set of tuples that match.
* countN( template_tuple ) Like "scan" above, except that it returns a count of matching tuples rather than the set of tuples itself.

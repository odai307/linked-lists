<h1>Linked List Implementation</h1>
<ul>
    <li><code>append(value)</code>: Adds a new node containing <code>value</code> to the end of the list or to the start if the list is empty.</li>
    <li><code>prepend(value)</code>: Adds a new node containing <code>value</code> to the start of the list.</li>
    <li><code>size()</code>: Returns the total number of nodes in the list.</li>
    <li><code>head()</code>: Returns the first node in the list.</li>
    <li><code>tail()</code>: Returns the last node in the list.</li>
    <li><code>at(index)</code>: Returns the node at the given index or an error message if there is no node at the requested index.</li>
    <li><code>pop()</code>: Removes the last element from the list.</li>
    <li><code>contains(value)</code>: Returns <code>true</code> if the passed-in <code>value</code> is in the list; otherwise, returns <code>false</code>.</li>
    <li><code>find(value)</code>: Returns the index of the node containing <code>value</code>, or <code>null</code> if not found.</li>
    <li><code>toString()</code>: Returns the LinkedList objects as strings in the format: <code>( value ) -> ( value ) -> ( value ) -> null</code>.</li>
    <li><code>insertAt(value, index)</code>: Inserts a new node with the provided <code>value</code> at the given index, or at the end of the list if the index is larger than the list size.</li>
    <li><code>removeAt(index)</code>: Removes the node at the given index, or returns an error message if the list is empty or if the requested index is larger than the list size.</li>
</ul>

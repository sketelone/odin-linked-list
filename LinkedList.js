
const LinkedList = () => {

    let NodeList = {};

    const append = (value) => {
    //adds new node containing value to the end of the list
        let node = MyNode(value);
        // console.log("appending: ",node)
        if (Object.keys(NodeList).length !== 0) {
            let lastNode = tail();
            lastNode.nextNode = node;
        } else {
            NodeList = node;
        }
        return NodeList;
    }

    const prepend = (value) => {
    //adds new node containing value to the start of the list
        // console.log("prepending: ",node)
        let node = MyNode(value);
        node.nextNode = NodeList;
        NodeList = node;
        return NodeList;
    }

    const size = (obj) => {
    //returns the total number of nodes in the list by recursively traversing linked list
    //and counting elements until it hits the end
        let list = obj || NodeList;
        return list.nextNode == null ? 1 : 1+size(list.nextNode);
    }

    const head = () => {
    //returns the first node in the list
        return NodeList;
    }

    const tail = (obj) => {
    //returns the last node in the list by recursively traversing linked list until
    //it hits a node with a 'null' next node
        let list = obj || NodeList;
        let tailNode = {};
        if (list.nextNode == null) {
            // console.log("we're at the tail")
            tailNode = list;
            return tailNode;
        } else {
            // console.log("go one down")
            tailNode = tail(list.nextNode)
        }
        return tailNode;
    }

    const at = (index, obj, num) => {
    //returns the node at the given index
        let list = obj || NodeList;
        let n = num || 0;
        if (index == n) {
            return list;
        } else if (list.nextNode == null){
            return false;
        } else {
            n++;
            return at(index, list.nextNode, n)
        }
    }

    const pop = (obj) => {
    //removes the last element from the list
        let list = obj || NodeList;
        if(list.nextNode.nextNode == null) {
            list.nextNode = null;
            return list;
        } else {
            return pop(list.nextNode);
        }
    }

    const contains = (value, obj) => {
    //returns true if passed in value is in the list, else false
        let list = obj || NodeList;
        if (list.nextNode == null) {
            return false;
        } else if (list.value == value) {
            return true;
        } else {
            return contains(value, list.nextNode);
        }
    }

    const find = (value, obj, num) => {
    //returns the index of the node containing value, or null if not found
        let list = obj || NodeList;
        let n = num || 0;
        if (list.value == value) {
            return n;
        } else if (list.nextNode == null){
            return false;
        } else {
            n++;
            return find(value, list.nextNode, n)
        }   
    }

    const insertAt = (value, index, obj, num) => {
    //inserts node at the given index
        let node = MyNode(value);
        let list = obj || NodeList;
        let n = num || 0 ;
        if (list.nextNode == null){
            console.log("Index exceeds list size")
            return false;
        } else if (n+1 == index) {
            node.nextNode = list.nextNode;
            list.nextNode = node;
            return list;
        } else {
            n++;
            return insertAt(value, index, list.nextNode, n)
        }
    }

    const removeAt = (index, obj, num) => {
    //removes node at given index
        let list = obj || NodeList;
        let n = num || 0;
        if (list.nextNode == null){
            console.log("Index exceeds list size")
            return false;
        } else if (n+1 == index) {
            var temp = list.nextNode.nextNode;
            list.nextNode = temp;
            // list.nextNode = list.nextNode.nextNode;
            return list;
        } else {
            n++;
            return removeAt(index, list.nextNode, n)
        }

    }

    const toString = (obj) => {
    //returns LinkedList as a string
        // console.log("toString", NodeList)
        let string = "";
        let list = obj || NodeList;
        if (list.nextNode == null) {
            string = string.concat(`( ${list.value} ) -> null`);
            return string;
        } else {
            string = string.concat(`( ${list.value} ) -> `, toString(list.nextNode))
        }
        return string;
    }

    return {append, prepend, size, head, tail, at, pop, contains, find, insertAt, removeAt, toString};
};

const MyNode = (val, node) => {
    const value = val || null;
    const nextNode = node || null;

    return {value, nextNode};
}

module.exports = LinkedList;

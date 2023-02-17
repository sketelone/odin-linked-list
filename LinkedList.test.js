const LinkedList = require("./LinkedList.js")

//initalize linkedList()
const linkedList = LinkedList();

test('append adds correct number of items', () => {
    let nodes = ["A", "B", "C", "D", "E"];
    nodes.forEach(node => {
        linkedList.append(node);
    })
    expect(linkedList.size()).toBe(5)
})

test('prepend adds correct number of items', () => {
    let newNodes = [1, 2, 3, 4, 5];
    newNodes.forEach(node => {
        linkedList.prepend(node);
    })
    expect(linkedList.size()).toBe(10)
})

test('size returns length a number', () => {
    expect(typeof linkedList.size()).toBe('number')
});

test('size returns length of list', () => {
    expect(linkedList.size()).toBe(10)
});

test('head returns first element', () => {
    let list = {value: 5, nextNode: 
                    {value: 4, nextNode:
                        {value: 3, nextNode: 
                            {value: 2, nextNode:
                                {value: 1, nextNode:
                                    {value: "A", nextNode:
                                        {value: "B", nextNode:
                                            {value: "C", nextNode:
                                                {value: "D", nextNode:
                                                    {value: "E", nextNode: null}
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
    expect(linkedList.head()).toStrictEqual(list)
});

test('tail returns last element', () => {
    expect(linkedList.tail()).toStrictEqual({value: "E", nextNode: null})
});

test('toString returns a string', () => {
    expect(typeof linkedList.toString()).toBe('string')
})

test('toString returns correct string', () => {
    expect(linkedList.toString()).toBe('( 5 ) -> ( 4 ) -> ( 3 ) -> ( 2 ) -> ( 1 ) -> ( A ) -> ( B ) -> ( C ) -> ( D ) -> ( E ) -> null')
})

test('contains returns true if value in list', () => {
    expect(linkedList.contains(3)).toBeTruthy()
})

test('contains returns false if value not in list', () => {
    expect(linkedList.contains("G")).toBeFalsy()
})

test('at returns correct node', () => {
    let node = {value: 2, nextNode:
                    {value: 1, nextNode:
                        {value: "A", nextNode:
                            {value: "B", nextNode:
                                {value: "C", nextNode:
                                    {value: "D", nextNode:
                                        {value: "E", nextNode: null}
                                    }
                                }
                            }
                        }
                    }
                }
    expect(linkedList.at(3)).toStrictEqual(node);
})

test('at returns false if index exceeds length of list', () => {
    expect(linkedList.at(70)).toBeFalsy;
})

test('at returns head when index is 0', () => {
    expect(linkedList.at(0)).toBe(linkedList.head())
})

test('at returns head when index is at the tail', () => {
    expect(linkedList.at(9)).toBe(linkedList.tail())
})

test('pop removes one element', () => {
    linkedList.pop()
    expect(linkedList.size()).toBe(9)
})

test('pop removes last element', () => {
    linkedList.append("E")
    linkedList.pop()
    expect(linkedList.tail()).toStrictEqual({value: "D", nextNode: null})
})

test('find returns index as a number', () => {
    expect(typeof linkedList.find("D")).toBe('number');
})

test('find returns correct index', () => {
    expect(linkedList.find("D")).toBe(8);
})

test('find returns false if item not found', () => {
    expect(linkedList.find("X")).toBeFalsy();
})

test('insertAt adds one element', () => {
    linkedList.append("E")
    linkedList.insertAt("X",5)
    expect(linkedList.size()).toBe(11);
})

test('insertAt inserts value', () => {
    expect(linkedList.contains("X")).toBeTruthy();
})

test('insertAt inserts value at correct node', () => {
    expect(linkedList.find("X")).toBe(5);
})

test('removeAt removes one element', () => {
    linkedList.removeAt(5)
    expect(linkedList.size()).toBe(10);
})

test('removeAt removes correct value', () => {
    expect(linkedList.contains("X")).toBeFalsy();
})

test('removeAt removes value at correct node', () => {
    let node = {value: "A", nextNode:
                    {value: "B", nextNode:
                        {value: "C", nextNode:
                            {value: "D", nextNode:
                                {value: "E", nextNode: null}
                            }
                        }
                    }
                }
    expect(linkedList.at(5)).toStrictEqual(node);
})
from linked_list_content import LinkedList


class Queue:
    def __init__(self):
        self.__data = LinkedList()

    def enqueue(self, value):
        self.__data.insert_last(value)

    def dequeue(self):
        return self.__data.remove_first()

    def peek(self):
        return self.__data.get_element_at(0)

    def is_empty(self):
        return not len(self.__data)

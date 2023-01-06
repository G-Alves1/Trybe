from node import Node
from rich import print


class LinkedListGuard:
    def __init__(self):
        self.head = Node('HEAD')
        self.tail = self.head
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head.next

        if self.head.next is None:
            self.tail = first_value

        self.head.next = first_value
        self.__length += 1

    def insert_last(self, value):
        last_value = Node(value)

        if self.is_empty():
            return self.insert_first(value)

        self.tail.next = last_value
        self.tail = last_value
        self.__length += 1

    def is_empty(self):
        return not self.__length


if __name__ == "__main__":
    linked_list_guard = LinkedListGuard()

    print(linked_list_guard.is_empty()) # saída: True

    linked_list_guard.insert_first(1)
    print(linked_list_guard) # saída: LinkedList(len=1, value=Node(value=HEAD, next=Node(value=1, next=None)))

    linked_list_guard.insert_first(2)
    print(linked_list_guard) # saída: LinkedList(len=2, value=Node(value=HEAD, next=Node(value=2, next=Node(value=1, next=None))))

    linked_list_guard.insert_last(3)
    print(linked_list_guard) # saída: LinkedList(len=3, value=Node(value=HEAD, next=Node(value=2, next=Node(value=1, next=Node(value=3, next=None)))))
class Queue:
    def __init__(self):
        self._data = []

    def __repr__(self):
        return str(self._data)

    def __str__(self):
        str_queue = "Fila:\n"
        for index in range(self.size()):
            value = self._data[index]
            str_queue += " |" + str(value) + "| <-"
        return str_queue

    def __len__(self):
        return len(self._data)

    def size(self):
        return len(self._data)

    def is_empty(self):
        return not self.size()

    def enqueue(self, value):
        self._data.append(value)

    def dequeue(self):
        if self.is_empty:
            return None
        self._data.pop(0)

    def peek(self):
        if self.is_empty:
            return None
        return self._data[0]